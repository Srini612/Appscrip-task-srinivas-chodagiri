import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FilterSidebar from './components/FilterSidebar';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [filterVisible, setFilterVisible] = useState(true);

  return (
    <div className="App">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Discover Our Products | Product Listing Page</title>
        <meta 
          name="description" 
          content="Browse our collection of quality products with advanced filters and search functionality. Find exactly what you're looking for." 
        />
        <meta name="keywords" content="products, shopping, e-commerce, online store" />
        <meta property="og:title" content="Discover Our Products" />
        <meta property="og:description" content="Browse our collection of quality products" />
        <meta property="og:type" content="website" />
        
        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Product Listing Page",
            "description": "Browse our collection of quality products with filters",
            "url": window.location.href
          })}
        </script>
      </Helmet>

      <Header />
      <HeroSection />
      
      <main className="main-content">
        <FilterSidebar 
          isVisible={filterVisible} 
        />
        <ProductGrid 
          filterVisible={filterVisible}
          setFilterVisible={setFilterVisible}
        />
      </main>

      <Footer />
    </div>
  );
}

export default App;