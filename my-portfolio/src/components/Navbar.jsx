import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <h1 className="logo">&lt;Sandip Kora/&gt;</h1>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#hero">Home</a>
          <a href="#about">About Me</a>
          <a href="#projects">Project</a>
          <a href="#contact">Contact</a>
          <button className="resume-btn">Resume</button>
        </nav>

        <div className="toggle-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✕' : '☰'}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
