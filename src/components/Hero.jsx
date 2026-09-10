import React from 'react';
import { Mail } from 'lucide-react';
import { profile } from '../data/content';

export default function Hero() {
  return (
    <div className="hero dashed-bottom" style={{ paddingBottom: '2.5rem' }}>
      <div className="banner" style={{
        position: 'relative',
        height: '200px',
        width: '100%',
        backgroundColor: '#333',
        borderRadius: '16px',
        marginTop: '2rem',
        border: '3px solid #ffffff',
        backgroundImage: `url("${profile.bannerImage}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        boxShadow: '0 4px 20px var(--shadow-color)'
      }}>
        <img
          src={profile.avatarImage}
          alt="Profile"
          style={{
            position: 'absolute',
            left: '1.5rem',
            bottom: '-48px',
            width: '120px',
            height: '120px',
            borderRadius: '16px',
            border: '4px solid #ffffff',
            objectFit: 'cover',
            backgroundColor: 'var(--bg-color)',
            boxShadow: '0 4px 12px var(--shadow-color)',
          }}
        />
      </div>

      <div className="profile-section flex items-center" style={{ paddingTop: '0.75rem', paddingLeft: 'calc(120px + 2.5rem)', minHeight: '48px' }}>
        <div>
          <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: '600' }}>{profile.role}</h3>
          <span className="text-muted" style={{ fontSize: '0.95rem' }}>{profile.location}</span>
        </div>
      </div>

      <div className="name-section flex justify-between items-center mt-6" style={{ padding: '0 1rem' }}>
        <h1 className="heading-font" style={{ fontSize: '3rem', margin: 0 }}>
          {profile.name}
        </h1>
        <a
          href={profile.email ? `mailto:${profile.email}` : undefined}
          style={{
            padding: '0.6rem',
            border: '1px solid var(--border-color)',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background-color 0.2s',
            cursor: profile.email ? 'pointer' : 'default',
          }}
          className="hover:bg-pill-hover-bg"
        >
          <Mail size={22} className="text-muted" />
        </a>
      </div>
    </div>
  );
}
