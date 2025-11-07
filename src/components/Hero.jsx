import React from 'react';
import Spline from '@splinetool/react-spline';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative w-full bg-black text-white overflow-hidden">
      <div className="relative h-[70vh] w-full">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      </div>

      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
          <div className="max-w-3xl">
            <p className="text-cyan-300 text-xs sm:text-sm tracking-widest uppercase mb-3">Portfolio</p>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Mohit Agrawal
            </h1>
            <p className="mt-3 sm:mt-4 text-base sm:text-xl text-white/90">
              Backend Developer (Fresher) • B.Tech CSE (2027) • Minor in Data Science
            </p>
            <p className="mt-4 text-sm sm:text-base text-white/80 max-w-2xl">
              I build robust backend systems with Node.js, Express, MongoDB, and JWT auth. Comfortable in C, C++, Java, and Python. Passionate about data-driven design with Pandas, NumPy, visualization, and machine learning.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-cyan-400/90 hover:bg-cyan-300 text-black font-medium px-5 py-2.5 transition"
              >
                View Projects
              </a>
              <div className="flex items-center gap-3">
                <a aria-label="GitHub" href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition">
                  <Github className="w-5 h-5" />
                </a>
                <a aria-label="LinkedIn" href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a aria-label="Email" href="#contact" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
