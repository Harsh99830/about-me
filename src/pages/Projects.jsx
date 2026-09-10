import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { projects } from '../data/content';

export default function Projects({ limit }) {
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <div className="projects-page py-8" style={{ padding: '2rem 1rem' }}>
      <h1 className="heading-font" style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Projects_</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
        {displayedProjects.map((project, idx) => (
          <div key={idx} className="project-card" style={{
            border: '1px solid var(--border-color)',
            borderRadius: '12px',
            overflow: 'hidden',
            backgroundColor: 'var(--bg-color)',
            transition: 'transform 0.2s',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <img src={project.image} alt={project.title} style={{ width: '100%', height: '200px', objectFit: 'cover', borderBottom: '1px solid var(--border-color)' }} />
            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
              <div className="flex justify-between items-center" style={{ marginBottom: '1rem' }}>
                <h3 className="heading-font" style={{ fontSize: '1.5rem', margin: 0 }}>{project.title}</h3>
                <div className="flex gap-2">
                  {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="text-muted hover:text-white transition"><FaGithub size={20} /></a>}
                  {project.link && <a href={project.link} target="_blank" rel="noreferrer" className="text-muted hover:text-white transition"><ExternalLink size={20} /></a>}
                </div>
              </div>
              <p className="text-muted" style={{ marginBottom: '1.5rem', flex: 1 }}>{project.description}</p>
              <div className="flex" style={{ gap: '0.5rem', flexWrap: 'wrap' }}>
                {project.tags.map(tag => (
                  <span key={tag} className="pill" style={{ padding: '0.2rem 0.6rem', fontSize: '0.8rem' }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {limit && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
          <Link to="/projects" className="pill hover:bg-pill-hover-bg" style={{ fontSize: '1rem', padding: '0.8rem 1.5rem', gap: '0.5rem', transition: 'all 0.2s' }}>
            View More <ArrowRight size={18} />
          </Link>
        </div>
      )}
    </div>
  );
}
