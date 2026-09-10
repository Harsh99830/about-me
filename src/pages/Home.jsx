import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import ContactLinks from '../components/ContactLinks';
import TechStack from '../components/TechStack';
import Projects from './Projects';
import GithubActivity from '../components/GithubActivity';

export default function Home({ theme }) {
  return (
    <div className="home-page">
      <Hero />
      <About />
      <ContactLinks />
      <TechStack />
      <Projects limit={4} />
      <GithubActivity theme={theme} />
    </div>
  );
}
