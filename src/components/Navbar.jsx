import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import img from './images/Re.png'
function Navbar() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <img src={img} alt="Logo" />
        </Link>
      </div>
      <div className="navbar-toggle">
        <button className="toggle-button" onClick={handleToggle}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <ul className={`navbar-nav ${toggle ? 'show' : ''}`}>
        <li>
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li>
          <Link to="/property" className="nav-link">Our Property</Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">About Us</Link>
        </li>
        <li>
          <Link to="/contact" className="nav-link">Contact</Link>
        </li>
        
      </ul>
    </nav>
  );
}

export default Navbar;
