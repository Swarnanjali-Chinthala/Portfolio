import { useState } from 'react';
import { Link } from 'react-router-dom';

import './index.css';

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isDark ? 'dark' : ''}`}>
      <h1 className="navbar-title">
        <Link to="/">Swarnanjali</Link>
      </h1>

      <button className="navbar-hamburger" onClick={toggleMenu}>
        &#9776;
      </button>

      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
        <Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        
      </div>
    </nav>
  );
}
