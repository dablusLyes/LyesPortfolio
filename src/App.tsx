import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import TechCarousel from './components/TechCarousel'
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Hero />
      <TechCarousel />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;