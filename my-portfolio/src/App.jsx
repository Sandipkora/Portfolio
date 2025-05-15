import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import FloatingIcons from './components/FloatingIcons';
import Footer from './components/Footer';
// import FloatingSocials from './components/FloatingSocials';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#1f1f1f] text-white relative z-10">
      <Navbar />

      <main className="flex-grow">
        {/* Wrap Hero in a section with floating icons */}
        <section className="relative overflow-hidden">
          <FloatingIcons />
          <Hero />
        </section>

        <About />
        <Projects />
        <Contact />
      </main>

      <Footer />
      {/* <FloatingSocials /> */}
    </div>
  );
}

export default App;

