import React from 'react';
import { FaAnchor } from 'react-icons/fa';
import './SectionDivider.css';

const SectionDivider: React.FC = () => {
  return (
    <div className="section-divider">
      <div className="rope-line"></div>
      <FaAnchor className="anchor-icon" />
      <div className="rope-line"></div>
    </div>
  );
};

export default SectionDivider;
