import { useState } from "react";
import { Link } from "react-router-dom";
import { Download } from "lucide-react";
import "./index.css";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <h1 className="navbar-title">
        <Link to="/">Swarnanjali</Link>
      </h1>

      {/* Hamburger - should be visible in mobile */}
      <button className="navbar-hamburger" onClick={() => setIsOpen(!isOpen)}>
        &#9776;
      </button>

      {/* Links */}
      <div className={`navbar-links ${isOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
        <Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        <a
          href="C:\Users\Nxtwa\OneDrive\Desktop\SWARNANJALICHINTHALARESUME.pdf"
          download="Swarnanjali_Resume.pdf"
          className="resume-download"
          title="Download Resume"
        >
          <Download size={20} />
        </a>
      </div>
    </nav>
  );
}
