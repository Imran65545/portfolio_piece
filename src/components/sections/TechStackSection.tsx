import React from 'react';
import { 
  SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiPython,
  SiTailwindcss, SiFirebase, SiSupabase, SiDocker, SiGithub,
  SiLangchain, SiExpress, SiTypescript, SiRedis, SiMongoose
} from 'react-icons/si';
import { VscCode } from "react-icons/vsc"; // Fallback for things without clear simple icons
import SectionDivider from '../layout/SectionDivider';
import './TechStackSection.css';

const techRows = [
  [
    { name: 'React', icon: <SiReact color="#61DAFB" /> },
    { name: 'Next.js', icon: <SiNextdotjs color="#ffffff" /> },
    { name: 'Node.js', icon: <SiNodedotjs color="#339933" /> },
    { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
    { name: 'Python', icon: <SiPython color="#3776AB" /> },
  ],
  [
    { name: 'Tailwind CSS', icon: <SiTailwindcss color="#06B6D4" /> },
    { name: 'Firebase', icon: <SiFirebase color="#FFCA28" /> },
    { name: 'Supabase', icon: <SiSupabase color="#3ECF8E" /> },
    { name: 'Docker', icon: <SiDocker color="#2496ED" /> },
    { name: 'Git & GitHub', icon: <SiGithub color="#ffffff" /> },
  ],
  [
    { name: 'LangChain', icon: <SiLangchain color="#121212" style={{backgroundColor: '#fff', borderRadius: '50%', padding: '2px'}} /> },
    { name: 'LlamaIndex', icon: <VscCode color="#8B1A1A" /> },
    { name: 'ChromaDB', icon: <VscCode color="#F5A623" /> },
    { name: 'Groq', icon: <VscCode color="#D4A96A" /> },
    { name: 'Vercel', icon: <VscCode color="#fff" /> },
  ],
  [
    { name: 'Express.js', icon: <SiExpress color="#ffffff" /> },
    { name: 'TypeScript', icon: <SiTypescript color="#3178C6" /> },
    { name: 'Redis', icon: <SiRedis color="#DC382D" /> },
    { name: 'Mongoose', icon: <SiMongoose color="#880000" /> },
    { name: 'REST APIs', icon: <VscCode color="#B8860B" /> },
  ]
];

const TechStackSection: React.FC = () => {
  return (
    <section id="tech-stack" className="tech-section">
      <SectionDivider />
      
      <div className="tech-header">
        <h2 className="section-title">
          MY CREW <span className="title-sub">(TECH STACK)</span>
        </h2>
        <div className="straw-hat-icon">👒</div> {/* Using emoji as a simple placeholder for the hat in reference image */}
      </div>

      <div className="tech-grid-container">
        {techRows.map((row, rowIndex) => (
          <div key={rowIndex} className="tech-row">
            {row.map((tech, techIndex) => (
              <div key={techIndex} className="tech-card">
                <div className="tech-icon-wrapper">
                  {tech.icon}
                </div>
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStackSection;
