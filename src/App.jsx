import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Blog from './pages/Blog';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <BrowserRouter>
      <div className="main-container">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home theme={theme} />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
        <footer className="py-8 flex justify-between text-muted items-center" style={{ fontSize: '0.9rem', padding: '2rem 1rem' }}>
          <span>© {new Date().getFullYear()} Harsh Agrawal.</span>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
