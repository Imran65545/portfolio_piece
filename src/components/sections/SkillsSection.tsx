import React from 'react';
import SectionDivider from '../layout/SectionDivider';
import './SkillsSection.css';

const skillCategories = [
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'HTML/CSS', 'TypeScript']
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'Mongoose']
  },
  {
    category: 'AI/ML',
    skills: ['LangChain', 'LlamaIndex', 'RAG Pipelines', 'Groq', 'Gemini API', 'ChromaDB', 'Unsloth', 'GRPO']
  },
  {
    category: 'DevOps/Tools',
    skills: ['Vercel', 'Docker', 'Git & GitHub', 'Upstash Redis']
  },
  {
    category: 'Mobile',
    skills: ['React Native', 'Expo']
  },
  {
    category: 'Database',
    skills: ['MongoDB Atlas', 'Supabase', 'Firebase']
  }
];

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="skills-section">
      <SectionDivider />
      
      <div className="skills-header">
        <h2 className="section-title">
          <span className="title-icon">⚓</span> MY CREW <span className="title-sub">- TECH STACK</span>
        </h2>
      </div>

      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3 className="category-name">{category.category}</h3>
            <div className="skills-list">
              {category.skills.map((skill, idx) => (
                <div key={idx} className="skill-tag fade-in" style={{transitionDelay: `${idx * 0.05}s`}}>
                  <span className="skill-icon">☠</span>
                  <span className="skill-name">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
