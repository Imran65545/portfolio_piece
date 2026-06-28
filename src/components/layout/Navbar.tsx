import React, { useState, useEffect } from 'react';
import { FaAnchor } from 'react-icons/fa';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-40% 0px -60% 0px', // Triggers when section is roughly in upper middle of viewport
      }
    );

    const sections = ['home', 'about', 'projects', 'skills', 'contact'];
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/logo.png" alt="One Piece Logo" className="custom-logo" />
        <div className="logo-text">
          <span className="logo-title">Imran.dev</span>
        </div>
      </div>
      <ul className="navbar-links">
        <li><a href="#home" className={activeSection === 'home' ? 'active' : ''}>HOME</a></li>
        <li><a href="#about" className={activeSection === 'about' ? 'active' : ''}>ABOUT</a></li>
        <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>PROJECTS</a></li>
        <li><a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>SKILLS</a></li>
        <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>CONTACT</a></li>
      </ul>
      <a href="#contact" className="btn-set-sail">
        SET SAIL <FaAnchor />
      </a>
    </nav>
  );
};

export default Navbar;
