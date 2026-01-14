import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Bootcamp from './components/Bootcamp/Bootcamp';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Cv from './components/Cv/Cv';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Bootcamp />
        <Projects />
        <Experience />
        <Cv />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
