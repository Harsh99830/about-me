import React from 'react';
import { workExperience } from '../data/content';

export default function Work() {
  return (
    <div className="work-page py-8" style={{ padding: '2rem 1rem', minHeight: '60vh' }}>
      <h1 className="heading-font" style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Work Experience_</h1>

      {workExperience.length === 0 ? (
        <p className="text-muted">Details coming soon...</p>
      ) : (
        <div className="flex" style={{ flexDirection: 'column', gap: '1.5rem' }}>
          {workExperience.map((job, idx) => (
            <div key={idx} style={{ borderBottom: '1px dashed var(--border-color)', paddingBottom: '1.5rem' }}>
              <div className="flex justify-between items-center" style={{ marginBottom: '0.3rem' }}>
                <h3 className="heading-font" style={{ fontSize: '1.3rem', margin: 0 }}>{job.role}</h3>
                <span className="text-muted" style={{ fontSize: '0.85rem' }}>{job.duration}</span>
              </div>
              <div className="text-muted" style={{ marginBottom: '0.5rem', fontWeight: 600 }}>{job.company}</div>
              <p className="text-muted">{job.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
