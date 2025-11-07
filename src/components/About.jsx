import React from 'react';
import { GraduationCap, Code2, Brain } from 'lucide-react';

const SkillTag = ({ label }) => (
  <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm">
    {label}
  </span>
);

const About = () => {
  return (
    <section id="about" className="bg-zinc-950 text-white py-16 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl font-semibold">About Me</h2>
        </div>
        <div className="mt-10 grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-cyan-400/10 border border-cyan-400/20 text-cyan-300">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium text-lg">Education</h3>
                <p className="text-white/80">
                  B.Tech in Computer Science Engineering (Batch 2027) — Minor in Data Science
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-cyan-400/10 border border-cyan-400/20 text-cyan-300">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium text-lg">Core Stack</h3>
                <p className="text-white/80">Node.js (Express), MongoDB, JWT Authentication</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-cyan-400/10 border border-cyan-400/20 text-cyan-300">
                <Brain className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium text-lg">Interests</h3>
                <p className="text-white/80">Backend systems, scalable API design, and data-driven applications.</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium">Skills</h4>
            <div className="mt-4">
              <p className="text-sm uppercase tracking-wider text-white/60">Programming</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {['C', 'C++', 'Java', 'Python'].map((s) => (
                  <SkillTag key={s} label={s} />
                ))}
              </div>
            </div>
            <div className="mt-6">
              <p className="text-sm uppercase tracking-wider text-white/60">Backend</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {['Node.js', 'Express.js', 'MongoDB', 'JWT'].map((s) => (
                  <SkillTag key={s} label={s} />
                ))}
              </div>
            </div>
            <div className="mt-6">
              <p className="text-sm uppercase tracking-wider text-white/60">Frontend</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {['HTML', 'CSS', 'JavaScript'].map((s) => (
                  <SkillTag key={s} label={s} />
                ))}
              </div>
            </div>
            <div className="mt-6">
              <p className="text-sm uppercase tracking-wider text-white/60">Data Science</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {['Pandas', 'NumPy', 'Data Visualization', 'Machine Learning'].map((s) => (
                  <SkillTag key={s} label={s} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
