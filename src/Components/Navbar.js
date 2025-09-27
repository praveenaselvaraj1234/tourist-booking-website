import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../App.css";

const FrontView = ({ searchQuery, setSearchQuery }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);

  const handleMouseEnter = (dropdown) => {
    clearTimeout(dropdownTimeout);
    setActiveDropdown(dropdown);  
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 300); 
    setDropdownTimeout(timeout);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="front-view">
      <div className="hero-image"></div>
      
      <nav className="navbar">
        <div>
          <Link id="brand" to="/"> <span>W</span>anderLust</Link>
        </div>
        
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li id='search-list'>
              <form onSubmit={handleSearchSubmit}>
                <input id='search-input'
                  type="text"
                  placeholder="Search destinations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </form>
            </li>

            <li> <Link style={{fontWeight:'bolder'}} to="/">Home</Link></li>
            
            <li  style={{marginTop:'5px', fontWeight:'bolder'}}
              onMouseEnter={() => handleMouseEnter('destinations')}
              onMouseLeave={handleMouseLeave}>
              <span>Destinations <span>⌄</span></span>
              <div 
                className={`dropdown ${activeDropdown === 'destinations' ? 'active' : ''}`}
                onMouseEnter={() => handleMouseEnter('destinations')}
                onMouseLeave={handleMouseLeave}>
                <Link to="#europe">Europe</Link>
                <Link to="#asia">Asia</Link>
                <Link to="#americas">Americas</Link>
              </div>
            </li>
            
            <li  style={{marginTop:'5px', fontWeight:'bolder'}}
              onMouseEnter={() => handleMouseEnter('packages')}
              onMouseLeave={handleMouseLeave}>
              <span>Packages <span>⌄</span></span>
              <div 
                className={`dropdown ${activeDropdown === 'packages' ? 'active' : ''}`}
                onMouseEnter={() => handleMouseEnter('packages')}
                onMouseLeave={handleMouseLeave}>
                <Link to="#adventure">Adventure</Link>
                <Link to="#luxury">Luxury</Link>
                <Link to="#family">Family</Link>
              </div>
            </li>
            
            <li><Link style={{fontWeight:'bolder'}} to="/about">About</Link></li>
            <li><Link style={{fontWeight:'bolder'}} to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </nav>
      
      <div className="hero-content">
        <h1 className="typing-animation">Journey Beyond Imagination</h1>
        <h2 className="fade-in-animation">Discover hidden gems across the globe</h2>
        <Link to="/Destinations" className="explore-bttn-navbar pulse-animation">
          Explore Now <span className="arrow">→</span>
        </Link>
      </div>
    </div>
  );
};

export default FrontView;