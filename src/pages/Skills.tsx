/**
 * Página de Habilidades
 * Hard/Soft skills com badges, sem barras, estética limpa
 */

import React from 'react';
import { languages } from '../utils/data';

type SkillTile = {
  label: string;
  hint?: string;
};

const hardSkills: SkillTile[] = [
  { label: 'Programação', hint: 'Python, JavaScript/TypeScript' },
  { label: 'FastAPI', hint: 'APIs enxutas' },
  { label: 'React e Tailwind', hint: 'Frontend rápido' },
  { label: 'PostgreSQL', hint: 'SQL' },
  { label: 'MongoDB', hint: 'NoSQL' },
  { label: 'Docker', hint: 'Containers' },
  { label: 'Git e CI/CD', hint: 'Fluxo contínuo' },
  { label: 'Desenvolvimento Full Stack' },
];

const softSkills: SkillTile[] = [
  { label: 'Resolução de problemas' },
  { label: 'Pensamento analítico e criativo' },
  { label: 'Trabalho em equipe' },
  { label: 'Adaptabilidade e aprendizado rápido' },
  { label: 'Autogestão e responsabilidade' },
];

const LogoBadge: React.FC<{ text: string }> = ({ text }) => {
  const initial = text.slice(0, 2).toUpperCase();
  return (
    <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-accent-400/70 via-primary-500/60 to-primary-800/70 flex items-center justify-center text-sm font-semibold text-white shadow-lg shadow-primary-900/30">
      {initial}
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <div className="relative py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in-up">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Stack curada</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3">
            Habilidades com <span className="gradient-text">acabamento premium</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto mt-4">
            Seleção enxuta e confiável, com foco em performance, clareza e entregas consistentes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="glass-panel rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)] animate-fade-in-up">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold text-white">Hard Skills</h2>
              <span className="text-sm text-slate-300">Execução técnica</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {hardSkills.map((skill, idx) => (
                <div
                  key={skill.label}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 transition-transform duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${idx * 0.04}s` }}
                >
                  <LogoBadge text={skill.label} />
                  <div className="min-w-0">
                    <p className="text-white font-semibold leading-tight">{skill.label}</p>
                    {skill.hint && <p className="text-sm text-slate-300">{skill.hint}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)] animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold text-white">Soft Skills</h2>
              <span className="text-sm text-slate-300">Mindset</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {softSkills.map((skill, idx) => (
                <div
                  key={skill.label}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 transition-transform duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  <LogoBadge text={skill.label} />
                  <p className="text-white font-semibold leading-tight">{skill.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 animate-fade-in-up">
          <div className="glass-panel rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-accent-100 border border-white/10">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M4 5h16M4 12h16M9 19h6" strokeLinecap="round" />
                  <path d="M9 5c1 4 3 7 6 9" />
                  <path d="M9 12c-1.5 1.5-2.5 4-3 7" strokeLinecap="round" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-white">Idiomas</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {languages.map((language, index) => (
                <div
                  key={language.name}
                  className="rounded-2xl border border-white/10 bg-white/10 p-5 flex items-center justify-between"
                  style={{ animationDelay: `${index * 0.06}s` }}
                >
                  <div>
                    <h3 className="text-lg font-semibold text-white">{language.name}</h3>
                    <p className="text-sm text-slate-300">{language.level}</p>
                  </div>
                  <LogoBadge text={language.name} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
