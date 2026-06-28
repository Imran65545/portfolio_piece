import React from 'react';
import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt, FaAward } from 'react-icons/fa';
import SectionDivider from '../layout/SectionDivider';
import './EducationSection.css';

const EducationSection: React.FC = () => {
  return (
    <section id="education" className="education-section">
      <SectionDivider />
      <div className="education-header fade-in">
        <h2 className="section-title">
          <span className="title-icon">⚓</span> ACADEMIC <span className="title-sub">VOYAGE</span>
        </h2>
      </div>

      <div className="education-container fade-in">
        <div className="timeline-line"></div>
        
        <div className="education-card">
          <div className="education-timeline-dot"></div>
          
          <div className="education-date">
            <FaCalendarAlt /> 2023 — 2026
          </div>
          
          <h3 className="education-degree">
            B.Sc. in Information Technology
          </h3>
          
          <div className="education-meta">
            <span className="education-college">
              <FaGraduationCap /> Shri Shankar Narayan College, University of Mumbai
            </span>
            <span className="education-location">
              <FaMapMarkerAlt /> Mumbai, Maharashtra
            </span>
          </div>
          
          <div className="education-score">
            <FaAward /> CGPI: 8.50 / 10.0
          </div>
          
          <ul className="education-details">
            <li>
              <strong>Academic Focus:</strong> Comprehensive foundation in data-driven problem solving, database architecture, and business insights.
            </li>
            <li>
              <strong>Core Concepts:</strong> Data Cleaning, Exploratory Data Analysis (EDA), KPI Reporting, and Interactive Dashboard Creation.
            </li>
            <li>
              <strong>Technical Coursework & Tools:</strong> Python (Pandas, NumPy, Matplotlib, Seaborn), Advanced SQL, Excel, and Power BI.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
