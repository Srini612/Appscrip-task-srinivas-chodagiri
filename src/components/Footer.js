import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [expandedSections, setExpandedSections] = useState({
    quickLinks: false,
    followUs: false,
  });

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Subscribed with: ${email}`);
      setEmail('');
    }
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <footer className="footer">
      {/* Newsletter Section */}
      <div className="footer-newsletter">
        <div className="newsletter-container">
          <div className="newsletter-content">
            <h3 className="newsletter-title">BE THE FIRST TO KNOW</h3>
            <p className="newsletter-description">Sign up for updates from mettā muse.</p>
            
            <form className="newsletter-form" onSubmit={handleSubscribe}>
              <input 
                type="email" 
                placeholder="Enter your e-mail..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="newsletter-input"
                required
              />
              <button type="submit" className="newsletter-btn">
                SUBSCRIBE
              </button>
            </form>
          </div>

          <div className="contact-info">
            <h3 className="contact-title">CONTACT US</h3>
            <p className="contact-phone">+44 221 133 5360</p>
            <p className="contact-email">customercare@mettamuse.com</p>

            <h3 className="currency-title">CURRENCY</h3>
            <div className="currency-selector">
              <span className="currency-flag">🇺🇸</span>
              <span className="currency-code">• USD</span>
            </div>
            <p className="currency-note">
              Transactions will be completed in Euros and a currency reference is available on hover.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="footer-links">
        <div className="footer-links-container">
          {/* Company Info */}
          <div className="footer-column">
            <h4 className="footer-heading">mettā muse</h4>
            <ul className="footer-list">
              <li><a href="#about">About Us</a></li>
              <li><a href="#stories">Stories</a></li>
              <li><a href="#artisans">Artisans</a></li>
              <li><a href="#boutiques">Boutiques</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#compliance">EU Compliances Docs</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <button 
              className="footer-heading-mobile"
              onClick={() => toggleSection('quickLinks')}
            >
              QUICK LINKS
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 16 16"
                className={expandedSections.quickLinks ? 'rotated' : ''}
              >
                <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              </svg>
            </button>
            <h4 className="footer-heading-desktop">QUICK LINKS</h4>
            
            <ul className={`footer-list ${expandedSections.quickLinks ? 'expanded' : ''}`}>
              <li><a href="#orders">Orders & Shipping</a></li>
              <li><a href="#seller">Join/Login as a Seller</a></li>
              <li><a href="#payment">Payment & Pricing</a></li>
              <li><a href="#returns">Return & Refunds</a></li>
              <li><a href="#faqs">FAQs</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="footer-column">
            <button 
              className="footer-heading-mobile"
              onClick={() => toggleSection('followUs')}
            >
              FOLLOW US
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 16 16"
                className={expandedSections.followUs ? 'rotated' : ''}
              >
                <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              </svg>
            </button>
            <h4 className="footer-heading-desktop">FOLLOW US</h4>
            
            <div className={`social-links ${expandedSections.followUs ? 'expanded' : ''}`}>
              <a href="#instagram" aria-label="Instagram" className="social-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
                  <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <text x="16" y="21" textAnchor="middle" fontSize="16" fontWeight="bold">Ig</text>
                </svg>
              </a>
              <a href="#linkedin" aria-label="LinkedIn" className="social-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
                  <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <text x="16" y="21" textAnchor="middle" fontSize="16" fontWeight="bold">in</text>
                </svg>
              </a>
            </div>

            <h4 className="payment-title">mettā muse ACCEPTS</h4>
            <div className="payment-methods">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg" alt="Mastercard" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg" alt="Amex" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Apple_Pay_logo.svg" alt="Apple Pay" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg" alt="Google Pay" />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;