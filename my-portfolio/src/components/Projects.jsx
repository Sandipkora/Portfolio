import React from 'react';
import './Projects.css';
import { FaGithub, FaExternalLinkAlt, FaFolder } from 'react-icons/fa';

const projects = [
  {
    title: "Serverless Voting Application for Programming Languages",
    description: "Developed a serverless voting app using React, AWS Lambda, API Gateway, and DynamoDB...",
    tech: ["AWS Lambda", "API Gateway", "DynamoDB"],
    github: "#",
    demo: "#",
    highlight: true,
  },
  {
    title: "Multilingual VQA Vision-Language Model",
    description: "Fine-tuned Qwen2.5–VL for visual question answering across 14 languages...",
    tech: ["Python", "Qwen2.5–VL", "Unsloth"],
    github: "#",
    
  },
  {
    title: "GeniusBot: PDF AI Assistant",
    description: "Interactive chatbot using GPT-3.5, Streamlit, PyPDF2, and LangChain...",
    tech: ["Streamlit", "PyPDF2", "LangChain"],
    github: "#",
    demo: "#",
  }
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="projects-title">My Projects</h2>
      <div className="project-grid">
        {projects.map((proj, index) => (
          <div className={`project-card ${proj.highlight ? 'highlight' : ''}`} key={index}>
            <div className="card-header">
              <FaFolder />
              <div className="card-links">
                {proj.github && <a href={proj.github}><FaGithub /></a>}
                {proj.demo && <a href={proj.demo}><FaExternalLinkAlt /></a>}
              </div>
            </div>
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <div className="tech-list">
              {proj.tech.map((tech, i) => <span key={i}>{tech}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
