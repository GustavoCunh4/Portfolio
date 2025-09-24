/**
 * Página de Experiência
 * Exibe a experiência profissional e conquistas
 */

import React from 'react';
import { experiences } from '../utils/data';

const Experience: React.FC = () => {
  return (
  <div className="min-h-screen bg-gradient-to-br from-[#181824] via-[#23234a] to-[#1a1a2e] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-4">
            � Experiência Profissional
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Minha jornada profissional e as conquistas que me moldaram como desenvolvedor.
          </p>
        </div>

        {/* Timeline de experiências */}
        <div className="relative">
          {/* Linha vertical da timeline */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-primary-200"></div>

          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              className={`relative flex items-center mb-12 animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Ponto da timeline */}
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg"></div>

              {/* Card da experiência */}
              <div className={`ml-12 md:ml-0 w-full md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:ml-auto'
              }`}>
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10 p-8 hover:scale-105 hover:shadow-2xl transition-all duration-300">
                  {/* Header da experiência */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {experience.position}
                      </h3>
                      <h4 className="text-xl text-blue-600 font-semibold mb-2">
                        {experience.company}
                      </h4>
                      <p className="text-gray-600 font-medium">
                        {experience.period}
                      </p>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <span className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                        <span className="mr-2">💼</span>
                        Experiência Atual
                      </span>
                    </div>
                  </div>

                  {/* Responsabilidades */}
                  <div className="mb-6">
                    <h5 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <span className="mr-2">📋</span>
                      Principais Responsabilidades
                    </h5>
                    <ul className="space-y-2">
                      {experience.responsibilities.map((responsibility, respIndex) => (
                        <li key={respIndex} className="flex items-start">
                          <span className="text-primary-500 mr-2 mt-1">•</span>
                          <span className="text-gray-700">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Conquistas */}
                  <div>
                    <h5 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <span className="mr-2">🏆</span>
                      Principais Conquistas
                    </h5>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start">
                          <span className="text-green-500 mr-2 mt-1">✓</span>
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Seção de Estatísticas */}
        <div className="mt-16 animate-fade-in-up">
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              📊 Resumo da Experiência
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {experiences.length}+
                </div>
                <div className="text-gray-600 font-medium">
                  Experiências Profissionais
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  Estagiário
                </div>
                <div className="text-gray-600 font-medium">
                  Posição Atual
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  100%
                </div>
                <div className="text-gray-600 font-medium">
                  Dedicação aos Projetos
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Seção de Competências Desenvolvidas */}
        <div className="mt-12 animate-fade-in-up">
          <div className="card p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              🚀 Competências Desenvolvidas
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                <div className="text-3xl mb-3">💻</div>
                <h3 className="font-semibold text-gray-900 mb-2">Desenvolvimento</h3>
                <p className="text-sm text-gray-600">
                  Participação ativa no desenvolvimento de códigos
                </p>
              </div>
              
              <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                <div className="text-3xl mb-3">🔍</div>
                <h3 className="font-semibold text-gray-900 mb-2">Pesquisa</h3>
                <p className="text-sm text-gray-600">
                  Realização de pesquisas técnicas e documentação
                </p>
              </div>
              
              <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                <div className="text-3xl mb-3">📚</div>
                <h3 className="font-semibold text-gray-900 mb-2">Documentação</h3>
                <p className="text-sm text-gray-600">
                  Criação e manutenção de documentação de projetos
                </p>
              </div>
              
              <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg">
                <div className="text-3xl mb-3">🤝</div>
                <h3 className="font-semibold text-gray-900 mb-2">Colaboração</h3>
                <p className="text-sm text-gray-600">
                  Trabalho em equipe e suporte aos projetos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
