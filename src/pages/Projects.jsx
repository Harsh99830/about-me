import React from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projects } from '../data/content';

export default function Projects() {
  return (
    <div className="projects-page py-8" style={{ padding: '2rem 1rem' }}>
      <h1 className="heading-font" style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Projects_</h1>
      
      <div className="flex" style={{ flexDirection: 'column', gap: '2rem' }}>
        {projects.map((project, idx) => (
          <div key={idx} className="project-card" style={{
            border: '1px solid var(--border-color)',
            borderRadius: '12px',
            overflow: 'hidden',
            backgroundColor: 'var(--bg-color)',
            transition: 'transform 0.2s',
          }}>
            <img src={project.image} alt={project.title} style={{ width: '100%', height: '200px', objectFit: 'cover', borderBottom: '1px solid var(--border-color)' }} />
            <div style={{ padding: '1.5rem' }}>
              <div className="flex justify-between items-center" style={{ marginBottom: '1rem' }}>
                <h3 className="heading-font" style={{ fontSize: '1.5rem', margin: 0 }}>{project.title}</h3>
                <div className="flex gap-2">
                  <a href={project.github} target="_blank" rel="noreferrer" className="text-muted hover:text-white transition"><FaGithub size={20} /></a>
                  <a href={project.link} target="_blank" rel="noreferrer" className="text-muted hover:text-white transition"><ExternalLink size={20} /></a>
                </div>
              </div>
              <p className="text-muted" style={{ marginBottom: '1.5rem' }}>{project.description}</p>
              <div className="flex" style={{ gap: '0.5rem', flexWrap: 'wrap' }}>
                {project.tags.map(tag => (
                  <span key={tag} className="pill" style={{ padding: '0.2rem 0.6rem', fontSize: '0.8rem' }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
