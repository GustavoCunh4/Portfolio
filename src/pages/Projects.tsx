/**
 * Página de Projetos
 * Galeria com cards em vidro e destaque para versões em produção
 */

import React, { useState } from 'react';
import { projects } from '../utils/data';
import type { Project } from '../types';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showModal, setShowModal] = useState(false);

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  const openInNewTab = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="relative py-14">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-white/2 to-transparent opacity-30" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 animate-fade-in-up">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Projetos ativos</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3">
            Projetos <span className="gradient-text">em produção</span> e evolução contínua
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto mt-4">
            Seleção com código vivo, performance ajustada e foco em UX. Cada entrega reflete a obsessão por detalhes e velocidade.
          </p>
        </div>

        {/* Grid de projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-3xl glass-panel border border-white/10 p-5 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIyMCIgdmlld0JveD0iMCAwIDQwMCAyMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjIwIiByeD0iMjQiIGZpbGw9IiMwMzA3MTIiLz4KPHBhdGggZD0iTTMyMCAxNjBDMzIwIDE4MS4wMDkgMjAzLjkwOSAyMDAgMTgyIDIwMEgxNzhDMTE3LjA5MSAyMDAgNjAgMTg0LjkwOSA2MCAxNjBWMTUyQzYwIDEzMC45OTEgMTE3LjA5MSAxMTIgMTc4IDExMkgxODJDMjAzLjkwOSAxMTIgMzIwIDEzMC45OTEgMzIwIDE1MlYxNjBaIiBmaWxsPSIjMTEzMTM2Ii8+CjxwYXRoIGQ9Ik0yMjAgMTM2QzIyMCAxNjEuMDk2IDIwMC4wOTYgMTgxIDE3NSAxODFDMTQ5LjkwNCAxODEgMTMwIDE2MS4wOTYgMTMwIDEzNkMxMzAgMTEwLjkwNCAxNDkuOTA0IDkxIDE3NSA5MUMyMDAuMDk2IDkxIDIyMCAxMTAuOTA0IDIyMCAxMzZaIiBmaWxsPSIjRkZGIi8+CjxjaXJjbGUgY3g9IjE3NSIgY3k9IjEzNiIgcj0iNTgiIGZpbGw9IiMwMzA3MTIiLz4KPC9zdmc+Cg==';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute top-4 right-4 rounded-full bg-white/10 backdrop-blur px-3 py-1 text-xs font-semibold text-white border border-white/20">
                  v{project.version}
                </div>
              </div>

              <div className="pt-5 space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    <p className="text-sm text-slate-300 mt-1">Concluído em {project.completionDate}</p>
                  </div>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-accent-100 border border-white/10">
                    Live
                  </span>
                </div>

                <p className="text-slate-200/90 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm font-semibold text-slate-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <button
                    onClick={() => openProject(project)}
                    className="btn-secondary w-full justify-center"
                  >
                    Pré-visualizar
                  </button>
                  <button
                    onClick={() => openInNewTab(project.liveUrl)}
                    className="btn-primary w-full justify-center"
                  >
                    Abrir live
                  </button>
                  <button
                    onClick={() => openInNewTab(project.repository)}
                    className="btn-secondary w-full justify-center"
                  >
                    Ver código
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal para visualizar projeto */}
        {showModal && selectedProject && (
          <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
            <div className="w-full max-w-5xl rounded-3xl bg-slate-950/95 text-white border border-white/10 shadow-[0_20px_90px_rgba(0,0,0,0.65)] overflow-hidden">
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Live preview</p>
                  <h2 className="text-2xl font-bold">{selectedProject.title}</h2>
                </div>
                <button
                  onClick={closeModal}
                  className="h-10 w-10 rounded-full border border-white/10 bg-white/5 text-slate-200 hover:text-white hover:border-accent-200"
                >
                  <span className="sr-only">Fechar</span>×
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6 p-6">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">Visualização do projeto</h3>
                  <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                    <iframe
                      src={selectedProject.liveUrl}
                      className="w-full h-[420px]"
                      title={selectedProject.title}
                      sandbox="allow-scripts allow-same-origin allow-forms"
                    />
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold">Descrição</h3>
                    <p className="text-slate-200/90 mt-2">{selectedProject.description}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">Tecnologias</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-sm text-slate-100"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                      <p className="text-slate-400">Versão</p>
                      <p className="text-lg font-semibold text-white">{selectedProject.version}</p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                      <p className="text-slate-400">Conclusão</p>
                      <p className="text-lg font-semibold text-white">{selectedProject.completionDate}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <button
                      onClick={() => openInNewTab(selectedProject.liveUrl)}
                      className="btn-primary w-full justify-center"
                    >
                      Abrir em nova aba
                    </button>
                    <button
                      onClick={() => openInNewTab(selectedProject.repository)}
                      className="btn-secondary w-full justify-center"
                    >
                      Ver código fonte
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
