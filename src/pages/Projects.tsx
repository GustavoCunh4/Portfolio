/**
 * Página de Projetos
 * Galeria interativa dos projetos do portfólio
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            💼 Meus Projetos
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Uma coleção dos projetos que desenvolvi, demonstrando minhas habilidades 
            e paixão por criar soluções inovadoras.
          </p>
        </div>

        {/* Grid de projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10 p-6 animate-fade-in-up hover:scale-105 hover:shadow-2xl transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Imagem do projeto */}
              <div className="relative mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-lg shadow-md border-4 border-[#ff6f61]"
                  onError={(e) => {
                    // Fallback para caso a imagem não carregue
                    const target = e.target as HTMLImageElement;
                    target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjE5MiIgdmlld0JveD0iMCAwIDQwMCAxOTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMTkyIiByeD0iOCIgZmlsbD0iI2YzZjRmNiIvPgo8c3ZnIHg9IjE3NiIgeT0iNzIiIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM5Y2EzYWYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj4KPHBhdGggZD0iTTEwIDRIMThWMTJIMTBWNCIvPgo8cGF0aCBkPSJNMTAgMTJIMThWMjBIMTBWMTIiLz4KPC9zdmc+Cjwvc3ZnPgo=';
                  }}
                />
                <div className="absolute top-4 right-4 bg-gradient-to-r from-[#ff6f61] to-[#23234a] text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                  v{project.version}
                </div>
              </div>

              {/* Informações do projeto */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white drop-shadow-lg">{project.title}</h3>
                <p className="text-gray-200 leading-relaxed">{project.description}</p>

                {/* Tecnologias */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-[#23234a] to-[#ff6f61] text-white rounded-full text-sm font-bold shadow"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Data de conclusão */}
                <div className="flex items-center text-sm text-gray-300">
                  <span className="mr-2">📅</span>
                  <span>Concluído em {project.completionDate}</span>
                </div>

                {/* Botões de ação */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <button
                    onClick={() => openProject(project)}
                    className="flex-1 flex items-center justify-center bg-gradient-to-r from-[#ff6f61] to-[#23234a] hover:from-[#ff8c7a] hover:to-[#23234a] text-white font-bold py-2 px-4 rounded-full shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    <span className="mr-2">👁️</span>
                    Visualizar
                  </button>
                  <button
                    onClick={() => openInNewTab(project.liveUrl)}
                    className="flex-1 flex items-center justify-center bg-gradient-to-r from-[#23234a] to-[#ff6f61] hover:from-[#23234a] hover:to-[#ff8c7a] text-white font-bold py-2 px-4 rounded-full shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    <span className="mr-2">🌐</span>
                    Acessar
                  </button>
                  <button
                    onClick={() => openInNewTab(project.repository)}
                    className="flex-1 flex items-center justify-center bg-gradient-to-r from-[#23234a] to-[#ff6f61] hover:from-[#23234a] hover:to-[#ff8c7a] text-white font-bold py-2 px-4 rounded-full shadow-lg hover:scale-105 transition-all duration-300"
                  >
                    <span className="mr-2">🐙</span>
                    Código
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal para visualizar projeto */}
        {showModal && selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
              {/* Header do modal */}
              <div className="flex justify-between items-center p-6 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900">
                  {selectedProject.title}
                </h2>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ✕
                </button>
              </div>

              {/* Conteúdo do modal */}
              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Iframe do projeto */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Visualização do Projeto
                    </h3>
                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                      <iframe
                        src={selectedProject.liveUrl}
                        className="w-full h-96"
                        title={selectedProject.title}
                        sandbox="allow-scripts allow-same-origin allow-forms"
                      />
                    </div>
                  </div>

                  {/* Informações detalhadas */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Descrição
                      </h3>
                      <p className="text-gray-600">{selectedProject.description}</p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Tecnologias Utilizadas
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        Informações do Projeto
                      </h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Versão:</span>
                          <span className="font-medium">{selectedProject.version}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Data de Conclusão:</span>
                          <span className="font-medium">{selectedProject.completionDate}</span>
                        </div>
                      </div>
                    </div>

                    {/* Botões de ação do modal */}
                    <div className="space-y-3">
                      <button
                        onClick={() => openInNewTab(selectedProject.liveUrl)}
                        className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                      >
                        <span className="mr-2">🌐</span>
                        Abrir em Nova Aba
                      </button>
                      <button
                        onClick={() => openInNewTab(selectedProject.repository)}
                        className="w-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                      >
                        <span className="mr-2">🐙</span>
                        Ver Código Fonte
                      </button>
                    </div>
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
