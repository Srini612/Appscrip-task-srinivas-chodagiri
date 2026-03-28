import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      {/* Top strip - Lorem ipsum */}
      <div className="header-strip">
        <p>Lorem ipsum dolor</p>
      </div>

      {/* Main header */}
      <div className="header-main">
        <div className="header-container">
          {/* Left - Logo/Menu */}
          <div className="header-left">
            <button className="menu-icon" aria-label="Menu">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          {/* Center - Logo */}
          <div className="header-center">
            <h1 className="logo">LOGO</h1>
          </div>

          {/* Right - Icons */}
          <div className="header-right">
            <button className="header-icon" aria-label="Search">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
                <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <button className="header-icon" aria-label="Wishlist">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </button>
            <button className="header-icon" aria-label="Shopping Bag">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" stroke="currentColor" strokeWidth="2"/>
                <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="2"/>
                <path d="M16 10a4 4 0 0 1-8 0" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </button>
            <button className="header-icon" aria-label="Profile">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </button>
            <div className="language-selector">
              <span>ENG</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M3 5L6 8L9 5" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="header-nav">
        <ul className="nav-list">
          <li><a href="#shop">SHOP</a></li>
          <li><a href="#skills">SKILLS</a></li>
          <li><a href="#stories">STORIES</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#contact">CONTACT US</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;