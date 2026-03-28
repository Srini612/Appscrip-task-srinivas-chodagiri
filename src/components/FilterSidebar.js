import React, { useState } from 'react';
import './FilterSidebar.css';

const FilterSidebar = ({ isVisible }) => {
  const [expandedFilters, setExpandedFilters] = useState({
    idealFor: false,
    occasion: false,
    work: false,
    fabric: false,
    segment: false,
    suitableFor: false,
    rawMaterials: false,
    pattern: false,
  });

  const [selectedFilters, setSelectedFilters] = useState({
    idealFor: {
      men: false,
      women: false,
      babyKids: false,
    },
  });

  const toggleFilter = (filterName) => {
    setExpandedFilters(prev => ({
      ...prev,
      [filterName]: !prev[filterName]
    }));
  };

  const handleCheckboxChange = (category, option) => {
    setSelectedFilters(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [option]: !prev[category][option]
      }
    }));
  };

  return (
    <aside className={`filter-sidebar ${isVisible ? 'visible' : 'hidden'}`}>
      {/* Customizable Checkbox */}
      <div className="filter-section">
        <label className="customizable-checkbox">
          <input type="checkbox" />
          <span className="checkbox-label">CUSTOMIZABLE</span>
        </label>
      </div>

      <div className="filter-divider"></div>

      {/* IDEAL FOR Filter */}
      <div className="filter-group">
        <button 
          className="filter-header"
          onClick={() => toggleFilter('idealFor')}
        >
          <span>IDEAL FOR</span>
          <svg 
            className={`arrow ${expandedFilters.idealFor ? 'expanded' : ''}`}
            width="16" 
            height="16" 
            viewBox="0 0 16 16"
          >
            <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          </svg>
        </button>
        
        <div className="filter-label">All</div>

        {expandedFilters.idealFor && (
          <div className="filter-options">
            <label className="filter-option">
              <input 
                type="checkbox" 
                checked={selectedFilters.idealFor.men}
                onChange={() => handleCheckboxChange('idealFor', 'men')}
              />
              <span>Men</span>
            </label>
            <label className="filter-option">
              <input 
                type="checkbox"
                checked={selectedFilters.idealFor.women}
                onChange={() => handleCheckboxChange('idealFor', 'women')}
              />
              <span>Women</span>
            </label>
            <label className="filter-option">
              <input 
                type="checkbox"
                checked={selectedFilters.idealFor.babyKids}
                onChange={() => handleCheckboxChange('idealFor', 'babyKids')}
              />
              <span>Baby & Kids</span>
            </label>
          </div>
        )}
      </div>

      <div className="filter-divider"></div>

      {/* OCCASION Filter */}
      <div className="filter-group">
        <button 
          className="filter-header"
          onClick={() => toggleFilter('occasion')}
        >
          <span>OCCASION</span>
          <svg 
            className={`arrow ${expandedFilters.occasion ? 'expanded' : ''}`}
            width="16" 
            height="16" 
            viewBox="0 0 16 16"
          >
            <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          </svg>
        </button>
        <div className="filter-label">All</div>
      </div>

      <div className="filter-divider"></div>

      {/* WORK Filter */}
      <div className="filter-group">
        <button 
          className="filter-header"
          onClick={() => toggleFilter('work')}
        >
          <span>WORK</span>
          <svg 
            className={`arrow ${expandedFilters.work ? 'expanded' : ''}`}
            width="16" 
            height="16" 
            viewBox="0 0 16 16"
          >
            <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          </svg>
        </button>
        <div className="filter-label">All</div>
      </div>

      <div className="filter-divider"></div>

      {/* FABRIC Filter */}
      <div className="filter-group">
        <button 
          className="filter-header"
          onClick={() => toggleFilter('fabric')}
        >
          <span>FABRIC</span>
          <svg 
            className={`arrow ${expandedFilters.fabric ? 'expanded' : ''}`}
            width="16" 
            height="16" 
            viewBox="0 0 16 16"
          >
            <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          </svg>
        </button>
        <div className="filter-label">All</div>
      </div>

      <div className="filter-divider"></div>

      {/* SEGMENT Filter */}
      <div className="filter-group">
        <button 
          className="filter-header"
          onClick={() => toggleFilter('segment')}
        >
          <span>SEGMENT</span>
          <svg 
            className={`arrow ${expandedFilters.segment ? 'expanded' : ''}`}
            width="16" 
            height="16" 
            viewBox="0 0 16 16"
          >
            <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          </svg>
        </button>
        <div className="filter-label">All</div>
      </div>

      <div className="filter-divider"></div>

      {/* SUITABLE FOR Filter */}
      <div className="filter-group">
        <button 
          className="filter-header"
          onClick={() => toggleFilter('suitableFor')}
        >
          <span>SUITABLE FOR</span>
          <svg 
            className={`arrow ${expandedFilters.suitableFor ? 'expanded' : ''}`}
            width="16" 
            height="16" 
            viewBox="0 0 16 16"
          >
            <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          </svg>
        </button>
        <div className="filter-label">All</div>
      </div>

      <div className="filter-divider"></div>

      {/* RAW MATERIALS Filter */}
      <div className="filter-group">
        <button 
          className="filter-header"
          onClick={() => toggleFilter('rawMaterials')}
        >
          <span>RAW MATERIALS</span>
          <svg 
            className={`arrow ${expandedFilters.rawMaterials ? 'expanded' : ''}`}
            width="16" 
            height="16" 
            viewBox="0 0 16 16"
          >
            <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          </svg>
        </button>
        <div className="filter-label">All</div>
      </div>

      <div className="filter-divider"></div>

      {/* PATTERN Filter */}
      <div className="filter-group">
        <button 
          className="filter-header"
          onClick={() => toggleFilter('pattern')}
        >
          <span>PATTERN</span>
          <svg 
            className={`arrow ${expandedFilters.pattern ? 'expanded' : ''}`}
            width="16" 
            height="16" 
            viewBox="0 0 16 16"
          >
            <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          </svg>
        </button>
        <div className="filter-label">All</div>
      </div>
    </aside>
  );
};

export default FilterSidebar;