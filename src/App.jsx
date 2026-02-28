import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import MobileExperience from './components/MobileExperience';
import Services from './components/Services';
import MobileServices from './components/MobileServices';
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
        <div className="desktop-only">
          <Experience />
        </div>
        <div className="mobile-only">
          <MobileExperience />
        </div>
      </section>

      <section id="services" className="snap-section bg-secondary">
        <div className="desktop-only">
          <Services />
        </div>
        <div className="mobile-only">
          <MobileServices />
        </div>
      </section>

      <section id="projects" className="snap-section">
        <Projects />
      </section>

      <section id="contact" className="snap-section bg-secondary">
        <Contact />
      </section>

    </div>
  );
}

export default App;
