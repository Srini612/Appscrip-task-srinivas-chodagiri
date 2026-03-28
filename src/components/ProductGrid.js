import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import './ProductGrid.css';

const ProductGrid = ({ filterVisible, setFilterVisible }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortOption, setSortOption] = useState('recommended');
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  // Fetch products from FakeStore API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load products. Please try again later.');
        setLoading(false);
        console.error('Error fetching products:', err);
      }
    };

    fetchProducts();
  }, []);

  // Sort products based on selected option
  const getSortedProducts = () => {
    let sortedProducts = [...products];

    switch (sortOption) {
      case 'newest':
        return sortedProducts.reverse();
      case 'popular':
        return sortedProducts.sort((a, b) => b.rating.rate - a.rating.rate);
      case 'price-high-low':
        return sortedProducts.sort((a, b) => b.price - a.price);
      case 'price-low-high':
        return sortedProducts.sort((a, b) => a.price - b.price);
      default:
        return sortedProducts;
    }
  };

  const sortedProducts = getSortedProducts();

  const sortOptions = [
    { value: 'recommended', label: 'RECOMMENDED' },
    { value: 'newest', label: 'NEWEST FIRST' },
    { value: 'popular', label: 'POPULAR' },
    { value: 'price-high-low', label: 'PRICE: HIGH TO LOW' },
    { value: 'price-low-high', label: 'PRICE: LOW TO HIGH' },
  ];

  return (
    <div className="product-grid-wrapper">
      {/* Filter and Sort Bar */}
      <div className="product-controls">
        <div className="product-controls-left">
          <span className="item-count">{products.length} ITEMS</span>
          
          <button 
            className="filter-toggle"
            onClick={() => setFilterVisible(!filterVisible)}
          >
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 16 16" 
              className={filterVisible ? '' : 'rotated'}
            >
              <path d="M12 6L8 10L4 6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            </svg>
            <span>{filterVisible ? 'HIDE FILTER' : 'SHOW FILTER'}</span>
          </button>
        </div>

        <div className="product-controls-right">
          <div className="sort-dropdown">
            <button 
              className="sort-toggle"
              onClick={() => setShowSortDropdown(!showSortDropdown)}
            >
              <span className="sort-label">
                {sortOptions.find(opt => opt.value === sortOption)?.label}
              </span>
              <svg width="16" height="16" viewBox="0 0 16 16">
                <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              </svg>
            </button>

            {showSortDropdown && (
              <div className="sort-dropdown-menu">
                {sortOptions.map((option) => (
                  <button
                    key={option.value}
                    className={`sort-option ${sortOption === option.value ? 'active' : ''}`}
                    onClick={() => {
                      setSortOption(option.value);
                      setShowSortDropdown(false);
                    }}
                  >
                    {option.label}
                    {sortOption === option.value && (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M13 4L6 11L3 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Loading products...</p>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="error-container">
          <p>{error}</p>
        </div>
      )}

      {/* Product Grid */}
      {!loading && !error && (
        <div className="product-grid">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGrid;