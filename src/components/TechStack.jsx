import React from 'react';
import { Code, Server, Database, Cloud, Terminal, Layout } from 'lucide-react';
import { techStack } from '../data/content';

const ICONS = {
  code: Code,
  server: Server,
  database: Database,
  cloud: Cloud,
  terminal: Terminal,
  layout: Layout,
};

export default function TechStack() {
  return (
    <section className="techstack-section py-8" style={{ padding: '2rem 1rem' }}>
      <h2 className="heading-font" style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>Tech Stack<span style={{ color: 'var(--accent-color)' }}>_</span></h2>
      <div className="flex" style={{ gap: '0.8rem', flexWrap: 'wrap' }}>
        {techStack.map((item, i) => {
          const Icon = ICONS[item.icon] || Code;
          return (
            <div key={i} className="pill hover:bg-pill-hover-bg transition" style={{ cursor: 'default', flexGrow: 1, justifyContent: 'center' }}>
              <span style={{ color: 'var(--accent-color)', display: 'flex' }}><Icon size={14} /></span>
              <span>{item.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
