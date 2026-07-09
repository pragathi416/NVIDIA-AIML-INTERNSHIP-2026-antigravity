import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Performant IntersectionObserver Scroll Spy
  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'experience', 'projects', 'testimonials', 'contact'];
    
    const observers = sectionIds.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          // Triggers when section is actively in the upper half view of viewport
          rootMargin: '-20% 0px -55% 0px',
        }
      );
      
      observer.observe(el);
      return { el, observer };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) {
          obs.observer.unobserve(obs.el);
        }
      });
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#09090B] text-[#FAFAFA] selection:bg-[#7C3AED]/40 selection:text-white antialiased">
      {/* 1. Header Navigation */}
      <Navbar activeSection={activeSection} />

      {/* 2. Page Content Blocks */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Testimonials />
        <Contact />
      </main>

      {/* 3. Footer Branding */}
      <Footer />
    </div>
  );
}
