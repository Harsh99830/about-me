import React from 'react';
import { FileText, ExternalLink } from 'lucide-react';
import { FaGithub, FaTwitter, FaDiscord } from 'react-icons/fa';
import { socialLinks } from '../data/content';

const ICONS = {
  github: FaGithub,
  discord: FaDiscord,
  twitter: FaTwitter,
  resume: FileText,
};

export default function ContactLinks() {
  return (
    <section className="contact-section dashed-bottom py-8" style={{ padding: '2rem 1rem' }}>
      <h2 className="heading-font" style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>Contact<span style={{ color: 'var(--accent-color)' }}>_</span></h2>
      <div className="flex" style={{ gap: '1rem', flexWrap: 'wrap' }}>
        {socialLinks.map((link, i) => {
          const Icon = ICONS[link.icon] || ExternalLink;
          return (
            <a key={i} href={link.url} target="_blank" rel="noreferrer" className="pill hover:bg-pill-hover-bg transition">
              <Icon size={16} />
              <span>{link.name}</span>
              <ExternalLink size={14} style={{ opacity: 0.5, marginLeft: '4px' }} />
            </a>
          );
        })}
      </div>
    </section>
  );
}
