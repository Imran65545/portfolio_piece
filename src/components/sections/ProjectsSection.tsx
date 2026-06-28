import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import SectionDivider from '../layout/SectionDivider';
import './ProjectsSection.css';

const projects = [
  {
    arcName: 'EAST BLUE ARC',
    arcColor: '#4A90E2', // Blue
    name: 'animexcite.com',
    description: 'Live anime & pop culture platform with voting, news & chatbot',
    badges: ['NEXT.JS', 'MONGODB', 'VERCEL'],
    link: 'https://animexcite.com/',
    image: '/animexcite.png'
  },
  {
    arcName: 'SKYPIEA ARC',
    arcColor: '#F5A623', // Gold/Orange
    name: 'VS Code AI Assistant Extension',
    description: 'AI-powered code assistant extension that provides intelligent code suggestions, explanations, and optimization tips.',
    badges: ['REACT', 'TYPESCRIPT', 'GEMINI API', 'VS CODE API'],
    link: 'https://github.com/Imran65545/Vschat',
    image: '/vscode.avif'
  },
  {
    arcName: 'MARINEFORD ARC',
    arcColor: '#8B1A1A', // Red
    name: 'RL Hackathon Agent',
    description: 'GRPO fine-tuning with Unsloth — selected from 70K+ applicants',
    badges: ['PYTHON', 'UNSLOTH', 'GRPO'],
    link: 'https://huggingface.co/spaces/imran785/medical-triage-rl-env/tree/main',
    image: '/hack.png'
  }
];

const ProjectsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (diff > 50) {
      nextProject();
    } else if (diff < -50) {
      prevProject();
    }
    setTouchStart(null);
  };

  return (
    <section id="projects" className="projects-section">
      <SectionDivider />
      
      <div className="projects-header">
        <h2 className="section-title">
          <span className="title-icon">☠</span> WANTED POSTERS <span className="title-sub">- FEATURED PROJECTS</span>
        </h2>
      </div>

      <div className="carousel-container">

        <div 
          className="carousel-track-wrapper"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="carousel-track">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className={`project-card ${index === currentIndex ? 'active' : ''}`}
                style={{
                  transform: `translateX(calc(-${currentIndex} * (100% + 2rem)))`
                }}
              >
                <div className="card-texture"></div>
                <div className="card-inner">
                  <div className="arc-banner" style={{ color: project.arcColor }}>
                    {project.arcName}
                  </div>
                  <div className="project-image-container">
                    <img src={project.image} alt={`${project.name} Screenshot`} className="project-image" />
                  </div>
                  <h3 className="project-name">{project.name}</h3>
                  <p className="project-desc">{project.description}</p>
                  <div className="tech-badges">
                    {project.badges.map((badge, idx) => (
                      <span key={idx} className="tech-badge">{badge}</span>
                    ))}
                  </div>
                  <a href={project.link} className="view-project-btn">VIEW PROJECT →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mobile-controls">
        <button className="carousel-btn" onClick={prevProject}>
          <FaChevronLeft />
        </button>
        <div className="carousel-dots">
          {projects.map((_, index) => (
            <span 
              key={index} 
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>
        <button className="carousel-btn" onClick={nextProject}>
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default ProjectsSection;
