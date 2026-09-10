import React from 'react';
import { aboutItems } from '../data/content';

function renderText(text, highlight) {
  if (!highlight || !text.includes(highlight)) {
    return <span style={{ color: 'var(--text-color)' }}>{text}</span>;
  }
  const [before, after] = text.split(highlight);
  return (
    <span style={{ color: 'var(--text-color)' }}>
      {before}
      <span style={{ fontWeight: 700, textDecoration: 'underline' }}>{highlight}</span>
      {after}
    </span>
  );
}

export default function About() {
  return (
    <section className="about-section dashed-bottom py-8" style={{ padding: '2rem 1rem' }}>
      <h2 className="heading-font" style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>About<span style={{ color: 'var(--accent-color)' }}>_</span></h2>
      <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', paddingLeft: '1.2rem', listStyleType: 'disc', color: 'var(--text-muted)' }}>
        {aboutItems.map((item, i) => (
          <li key={i}>{renderText(item.text, item.highlight)}</li>
        ))}
      </ul>
    </section>
  );
}
