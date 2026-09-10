import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import ContactLinks from '../components/ContactLinks';
import TechStack from '../components/TechStack';
import Projects from './Projects';

export default function Home() {
  return (
    <div className="home-page">
      <Hero />
      <About />
      <ContactLinks />
      <TechStack />
      <Projects />
    </div>
  );
}
