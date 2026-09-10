import React, { useState, useEffect } from 'react';
import { Mail } from 'lucide-react';
import { profile } from '../data/content';

export default function Hero() {
  const [showDreamImage, setShowDreamImage] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowDreamImage(prev => !prev);
    }, 5000);
    return () => clearTimeout(timeout);
  }, [showDreamImage]);

  return (
    <div className="hero dashed-bottom" style={{ paddingBottom: '2.5rem' }}>
      <div className="banner" style={{
        position: 'relative',
        height: '200px',
        width: '100%',
        backgroundColor: '#333',
        borderRadius: '16px',
        border: '3px solid #ffffff',
        backgroundImage: `url("${profile.bannerImage}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        boxShadow: '0 4px 20px var(--shadow-color)'
      }}>
        <div 
          onClick={() => setShowDreamImage(prev => !prev)}
          style={{
            position: 'absolute',
            left: '1.5rem',
            bottom: '-48px',
            width: '120px',
            height: '120px',
            perspective: '1000px',
            cursor: 'pointer',
          }}
        >
          <div style={{
            width: '100%',
            height: '100%',
            position: 'relative',
            transition: 'transform 0.8s cubic-bezier(0.4, 0.0, 0.2, 1)',
            transformStyle: 'preserve-3d',
            transform: showDreamImage ? 'rotateY(180deg)' : 'rotateY(0deg)',
          }}>
            <img
              src={profile.avatarImage}
              alt="Profile"
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                borderRadius: '16px',
                border: '4px solid #ffffff',
                objectFit: 'cover',
                backgroundColor: 'var(--bg-color)',
                boxShadow: '0 4px 12px var(--shadow-color)',
                backfaceVisibility: 'hidden',
              }}
            />
            <img
              src={profile.dreamImage || profile.avatarImage}
              alt="Dream"
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                borderRadius: '16px',
                border: '4px solid #ffffff',
                objectFit: 'cover',
                backgroundColor: 'var(--bg-color)',
                boxShadow: '0 4px 12px var(--shadow-color)',
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
              }}
            />
          </div>
        </div>
      </div>

      <div className="profile-section flex items-center" style={{ paddingTop: '0.75rem', paddingLeft: 'calc(120px + 2.5rem)', minHeight: '48px' }}>
        <div>
          <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: '600' }}>{profile.role}</h3>
          <span className="text-muted" style={{ fontSize: '0.95rem' }}>{profile.location}</span>
        </div>
      </div>

      <div className="name-section flex justify-between items-center mt-6" style={{ padding: '0 1rem 0 1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
        <h1 style={{ 
          fontFamily: 'var(--font-body)', 
          fontWeight: 800, 
          fontSize: 'clamp(2rem, 8vw, 3rem)', 
          margin: 0, 
          letterSpacing: '-0.03em',
          lineHeight: 1.1
        }}>
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
