/**
 * Página de Experiência
 * Timeline com vidro e destaques de responsabilidades
 */

import React from 'react';
import { experiences } from '../utils/data';

const Experience: React.FC = () => {
  return (
    <div className="relative py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho */}
        <div className="text-center mb-12 animate-fade-in-up">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Percurso profissional</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3">
            Experiência <span className="gradient-text">em movimento</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto mt-4">
            Projetos reais, pesquisa aplicada e colaboração intensa para entregar software sólido e belo.
          </p>
        </div>

        {/* Timeline de experiências */}
        <div className="relative">
          <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-accent-300 via-primary-500 to-primary-800" />

          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              className="relative flex flex-col md:flex-row md:items-center mb-12 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 h-4 w-4 rounded-full bg-white border-2 border-primary-500 shadow-[0_0_25px_rgba(26,195,255,0.6)]" />

              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-10 md:text-right' : 'md:pl-10 md:ml-auto'}`}>
                <div className="glass-panel rounded-3xl border border-white/10 p-6 shadow-lg hover:border-accent-300/50 transition-all duration-300">
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex flex-col">
                      <h3 className="text-2xl font-bold text-white">{experience.position}</h3>
                      <h4 className="text-lg text-accent-100 font-semibold">{experience.company}</h4>
                    </div>
                    <span className="rounded-full bg-white/10 border border-white/10 px-3 py-1 text-xs font-semibold text-slate-200">
                      {experience.period}
                    </span>
                  </div>

                  <div>
                    <h5 className="text-sm uppercase tracking-[0.18em] text-slate-400 mb-2">Atuação</h5>
                    <ul className="space-y-2">
                      {experience.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex} className="text-slate-200 flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent-200" />
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Resumo */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5 animate-fade-in-up">
          {[
            { value: `${experiences.length}+`, label: 'Experiências profissionais' },
            { value: 'Estagiário', label: 'Posição atual' },
            { value: '100%', label: 'Dedicação aos projetos' },
          ].map((item, idx) => (
            <div
              key={item.label}
              className="glass-panel rounded-2xl border border-white/10 p-5 text-center"
              style={{ animationDelay: `${idx * 0.06}s` }}
            >
              <div className="text-3xl font-bold text-white">{item.value}</div>
              <div className="text-slate-300 mt-2">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Competências desenvolvidas */}
        <div className="mt-12 animate-fade-in-up">
          <div className="glass-panel rounded-3xl border border-white/10 p-6">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Competências desenvolvidas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { title: 'Desenvolvimento', desc: 'Participação ativa no ciclo de entrega.' },
                { title: 'Pesquisa', desc: 'Experimentação técnica e documentação viva.' },
                { title: 'Documentação', desc: 'Registros claros para equipes e futuros devs.' },
                { title: 'Colaboração', desc: 'Comunicação direta com stakeholders.' },
              ].map((item, idx) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center"
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-accent-400 text-white font-semibold">
                    {idx + 1}
                  </div>
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-slate-300 mt-2">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
