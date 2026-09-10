import React from 'react';
import { NavLink } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
import { profile, navLinks } from '../data/content';

export default function Navbar({ theme, toggleTheme }) {
  return (
    <nav className="navbar flex justify-between items-center py-8" style={{ flexWrap: 'wrap', gap: '1rem' }}>
      <div className="logo" style={{ fontSize: '1.5rem' }}>
        {profile.shortName}
      </div>
      <div className="nav-links flex items-center text-muted" style={{ fontSize: '0.95rem', gap: '0.8rem', flexWrap: 'wrap' }}>
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            end={link.path === '/'}
            style={({ isActive }) => isActive ? { color: 'var(--accent-color)', borderBottom: '1px solid var(--accent-color)' } : {}}
          >
            {link.label}
          </NavLink>
        ))}

        <button 
          onClick={toggleTheme} 
          className="theme-toggle" 
          style={{ marginLeft: '1rem' }}
        >
          {theme === 'dark' ? <Sun size={20} color="#fbbf24" /> : <Moon size={20} className="text-muted" />}
        </button>
      </div>
    </nav>
  );
}
