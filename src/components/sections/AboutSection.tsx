import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import SectionDivider from '../layout/SectionDivider';
import './AboutSection.css';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <SectionDivider />
      
      <div className="about-container">
        <div className="about-left">
          <div className="photo-frame">
            <img src="/pic.jpeg" alt="Imran Choudhary" className="about-photo" />
            <div className="corner-decoration top-left">☠</div>
            <div className="corner-decoration top-right">☠</div>
            <div className="corner-decoration bottom-left">☠</div>
            <div className="corner-decoration bottom-right">☠</div>
          </div>
        </div>
        
        <div className="about-right">
          <h2 className="section-title">ABOUT THE NAVIGATOR</h2>
          
          <div className="bio-content">
            <p><strong>Currently:</strong> B.Sc. IT graduate from Mumbai, shipping production-grade web experiences across full-stack and AI engineering. From anime platforms to intelligent agents — every build is a new arc on the Grand Line.</p>
            <p><strong>Builder of</strong> animexcite.com — a live anime & pop culture platform</p>
            <p><strong>AI engineering interests:</strong> RAG pipelines, LLM agents, multi-agent systems</p>
            <p>Football player, anime fan, space enthusiast</p>
          </div>

          <div className="about-stats-row">
            <div className="about-stat">
              <span className="stat-number text-gold">25+</span>
              <span className="stat-text">Projects</span>
            </div>
            <div className="about-stat-divider">|</div>
            <div className="about-stat">
              <span className="stat-number text-gold">3+</span>
              <span className="stat-text">Years Exp</span>
            </div>
            <div className="about-stat-divider">|</div>
            <div className="about-stat">
              <span className="stat-number text-gold">2</span>
              <span className="stat-text">Hackathons Selected (Finals)</span>
            </div>
          </div>

          <div className="about-links">
            <a href="https://github.com/Imran65545" target="_blank" rel="noreferrer" className="about-link">
              <FaGithub /> GitHub Profile
            </a>
            <a href="https://www.linkedin.com/in/imran-choudhary-a73398250/" target="_blank" rel="noreferrer" className="about-link">
              <FaLinkedin /> LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
