import React, { useState } from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  return (
    <article className="product-card">
      <div className="product-image-container">
        <img 
          src={product.image} 
          alt={product.title}
          className="product-image"
          loading="lazy"
        />
        {product.rating && product.rating.rate > 4 && (
          <span className="product-badge">NEW PRODUCT</span>
        )}
        {product.rating && product.rating.rate < 3 && (
          <span className="product-badge out-of-stock">OUT OF STOCK</span>
        )}
      </div>

      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        
        <div className="product-footer">
          <div className="product-price-section">
            <p className="product-signin">
              <a href="#signin">Sign in</a> or Create an account to see pricing
            </p>
          </div>
          
          <button 
            className={`wishlist-btn ${isWishlisted ? 'active' : ''}`}
            onClick={toggleWishlist}
            aria-label="Add to wishlist"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path 
                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" 
                stroke="currentColor" 
                strokeWidth="2"
                fill={isWishlisted ? 'currentColor' : 'none'}
              />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;