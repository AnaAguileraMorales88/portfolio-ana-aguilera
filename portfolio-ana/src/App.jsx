import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
  return (
    <main className="min-h-screen text-text-main overflow-x-hidden selection:bg-primary/30">
      <Navbar />
      <section>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
      </section>
      <Footer />
    </main>
  );
}

export default App;
