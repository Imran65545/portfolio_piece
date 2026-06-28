import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-line"></div>
      <a href="https://github.com/Imran65545" target="_blank" rel="noreferrer" aria-label="GitHub">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/imran-choudhary-a73398250/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
        <FaLinkedin />
      </a>
      <a href="https://x.com/imran_739" target="_blank" rel="noreferrer" aria-label="X (Twitter)">
        <FaTwitter />
      </a>
      <div className="sidebar-line"></div>
    </div>
  );
};

export default Sidebar;
