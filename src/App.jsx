import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-zinc-950 text-white/70">
        <div className="mx-auto w-full max-w-6xl px-6 md:px-10 py-8 text-sm flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            © {new Date().getFullYear()} Mohit Agrawal. All rights reserved.
          </p>
          <p>
            Built with React, Tailwind, and a playful 3D hero.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
