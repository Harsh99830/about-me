import React from 'react';
import { GitHubCalendar } from 'react-github-calendar';

export default function GithubActivity({ theme }) {
  const username = "harsh99830";

  return (
    <section className="github-section dashed-bottom py-8" style={{ padding: '2rem 1rem' }}>
      <h2 className="heading-font" style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>
        GitHub Activity<span style={{ color: 'var(--accent-color)' }}>_</span>
      </h2>
      <div style={{ overflowX: 'auto', paddingBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
        <GitHubCalendar 
          username={username} 
          colorScheme={theme} 
          style={{ width: '100%', maxWidth: '100%' }}
        />
      </div>
    </section>
  );
}
