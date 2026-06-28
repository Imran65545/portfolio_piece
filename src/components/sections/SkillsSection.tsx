import React from 'react';
import SectionDivider from '../layout/SectionDivider';
import './SkillsSection.css';

const skills = [
  'React', 'Next.js', 'Tailwind CSS', 'TypeScript', 
  'Node.js', 'Express.js', 'REST APIs', 'MongoDB', 
  'React Native', 'Expo', 'HTML/CSS',
  'LangChain', 'LlamaIndex', 'RAG Pipelines', 'Groq', 
  'Gemini API', 'ChromaDB', 'Unsloth', 'GRPO', 
  'Vercel', 'Docker', 'Git & GitHub', 'Upstash Redis', 
  'Supabase', 'Firebase', 'Python'
];

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="skills-section">
      <SectionDivider />
      
      <div className="skills-header">
        <h2 className="section-title">
          <span className="title-icon">⚓</span> MY CREW <span className="title-sub">(TECH STACK)</span>
        </h2>
      </div>

      <div className="skills-container">
        <div className="skills-list">
          {skills.map((skill, idx) => (
            <div key={idx} className="skill-tag fade-in" style={{transitionDelay: `${(idx % 10) * 0.05}s`}}>
              <span className="skill-icon">☠</span>
              <span className="skill-name">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
