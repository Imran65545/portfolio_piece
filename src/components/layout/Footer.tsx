import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaAnchor } from 'react-icons/fa';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="copyright">&copy; 2025 Imran Choudhary. All Rights Reserved.</p>
        <p className="footer-motto">
          ONE PIECE | ONE DREAM | ENDLESS CODE <FaAnchor className="footer-anchor" />
        </p>
        <div className="footer-social">
          <a href="https://github.com/Imran65545" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/imran-choudhary-a73398250/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://x.com/imran_739" target="_blank" rel="noreferrer"><FaTwitter /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
