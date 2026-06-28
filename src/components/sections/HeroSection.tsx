import React, { useEffect, useState } from 'react';
import { FaCompass, FaDownload } from 'react-icons/fa';
import cvFile from '../../assets/imran_choudhary_resume_2026.pdf';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="home" className="hero-section" style={{
      backgroundImage: `url(${isMobile ? '/luffy_mobile.png' : '/luffy.png'})`
    }}>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-left fade-in">
          <div className="tag-badge">
            <img src="/logo.png" alt="Logo" className="badge-logo" /> FULL STACK DEVELOPER – MUMBAI
          </div>
          <h1 className="hero-title">
            I Will Become<br />
            <span className="text-gold">King of the</span><br />
            Web Dev!
          </h1>
          <p className="hero-subtext">☠ The Developer who will rule the digital seas</p>
          <h2 className="hero-name">Imran Choudhary</h2>
          <p className="hero-bio">
            B.Sc. IT graduate from Mumbai, shipping production-grade web experiences across full-stack and AI engineering. From anime platforms to intelligent agents — every build is a new arc on the Grand Line.
          </p>
          <div className="hero-ctas">
            <a href="#projects" className="btn-primary">
              <FaCompass /> VIEW PROJECTS
            </a>
            <a href={cvFile} className="btn-secondary" download="Imran_Choudhary_Resume.pdf" target="_blank" rel="noreferrer">
              <FaDownload /> DOWNLOAD CV
            </a>
          </div>
        </div>
        <div className="hero-right">
          <div className="stat-cards">
            <div className="stat-card fade-in" style={{transitionDelay: '0.1s'}}>
              <span className="stat-icon">🧭</span>
              <div className="stat-info">
                <span className="stat-value">25+</span>
                <span className="stat-label">PROJECTS SHIPPED</span>
              </div>
            </div>
            <div className="stat-card fade-in" style={{transitionDelay: '0.2s'}}>
              <span className="stat-icon">⚓</span>
              <div className="stat-info">
                <span className="stat-value">3+</span>
                <span className="stat-label">YEARS SAILING</span>
              </div>
            </div>
            <div className="stat-card fade-in" style={{transitionDelay: '0.3s'}}>
              <span className="stat-icon">☠</span>
              <div className="stat-info">
                <span className="stat-value">∞</span>
                <span className="stat-label">LINES OF CODE</span>
              </div>
            </div>
            <div className="stat-card fade-in visible" style={{transitionDelay: '0.4s'}}>
              <span className="stat-icon">🏴</span>
              <div className="stat-info">
                <span className="stat-value">100%</span>
                <span className="stat-label">DEDICATION</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
