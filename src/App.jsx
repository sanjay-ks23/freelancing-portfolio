import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-container">
      <Navbar />

      {/* Snap Sections */}
      <section id="hero" className="snap-section">
        <Hero />
      </section>

      <section id="about" className="snap-section bg-secondary">
        <About />
      </section>

      <section id="experience" className="snap-section">
        <Experience />
      </section>

      <section id="services" className="snap-section bg-secondary">
        <Services />
      </section>

      <section id="projects" className="snap-section">
        <Projects />
      </section>

      <section id="contact" className="snap-section bg-secondary">
        <Contact />
      </section>

      <a href="#hero" onClick={(e) => handleScroll(e, 'hero')} className="global-home-btn" aria-label="Go to home">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
      </a>
    </div>
  );
}

export default App;
