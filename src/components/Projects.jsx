import React from 'react';
import { Server, Database, Shield } from 'lucide-react';

const ProjectCard = ({ title, description, tags, link }) => (
  <a
    href={link || '#'}
    className="group block rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:bg-white/10 transition p-5"
  >
    <div className="flex items-center gap-3">
      <div className="p-2 rounded-lg bg-cyan-400/10 border border-cyan-400/20 text-cyan-300">
        <Server className="w-5 h-5" />
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
    </div>
    <p className="mt-3 text-white/80 text-sm leading-relaxed">{description}</p>
    <div className="mt-4 flex flex-wrap gap-2">
      {tags.map((t) => (
        <span key={t} className="text-xs px-2 py-1 rounded-full bg-black/40 border border-white/10 text-white/70">
          {t}
        </span>
      ))}
    </div>
  </a>
);

const Projects = () => {
  const items = [
    {
      title: 'FoodRescueAI',
      description:
        'A backend system connecting food donors (restaurants/events) with NGOs and individuals in need. Features authentication, donation/request flows, and a robust API layer.',
      tags: ['Node.js', 'Express', 'MongoDB', 'JWT', 'REST API'],
      link: '#',
    },
    {
      title: 'Project Placeholder',
      description: 'Another portfolio-worthy project will be showcased here soon.',
      tags: ['Coming soon'],
      link: '#',
    },
    {
      title: 'Project Placeholder',
      description: 'Another portfolio-worthy project will be showcased here soon.',
      tags: ['Coming soon'],
      link: '#',
    },
  ];

  return (
    <section id="projects" className="bg-gradient-to-b from-zinc-950 to-black text-white py-16 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl font-semibold">Projects</h2>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-white/70">
          <div className="flex items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/10">
            <Database className="w-5 h-5 text-cyan-300" />
            <span>MongoDB persistence</span>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/10">
            <Shield className="w-5 h-5 text-cyan-300" />
            <span>JWT-secured endpoints</span>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/10">
            <Server className="w-5 h-5 text-cyan-300" />
            <span>Scalable Node.js architecture</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
