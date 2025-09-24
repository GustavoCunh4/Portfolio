/**
 * Página de Habilidades
 * Exibe as habilidades técnicas, ferramentas e soft skills
 */

import React from 'react';
import { skills, languages } from '../utils/data';
import type { Skill } from '../types';

const Skills: React.FC = () => {
  // Agrupar habilidades por categoria
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  // Função para obter a cor baseada no nível
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert':
        return 'bg-green-500';
      case 'Avançado':
        return 'bg-blue-500';
      case 'Intermediário':
        return 'bg-yellow-500';
      case 'Iniciante':
        return 'bg-gray-400';
      default:
        return 'bg-gray-400';
    }
  };

  // Função para obter a largura da barra baseada no nível
  const getLevelWidth = (level: string) => {
    switch (level) {
      case 'Expert':
        return 'w-full';
      case 'Avançado':
        return 'w-4/5';
      case 'Intermediário':
        return 'w-3/5';
      case 'Iniciante':
        return 'w-2/5';
      default:
        return 'w-2/5';
    }
  };

  // Função para obter o ícone baseado na categoria
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Técnica':
        return '⚡';
      case 'Ferramenta':
        return '🛠️';
      case 'Soft Skill':
        return '🤝';
      case 'Outras':
        return '🔧';
      default:
        return '📋';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            ⚡ Habilidades & Competências
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Minhas habilidades técnicas, ferramentas que domino e competências 
            que me ajudam a entregar soluções de qualidade.
          </p>
        </div>

        {/* Habilidades por categoria */}
        <div className="space-y-12">
          {Object.entries(skillsByCategory).map(([category, categorySkills], categoryIndex) => (
            <div
              key={category}
              className="animate-fade-in-up"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
                <div className="flex items-center mb-6">
                  <span className="text-3xl mr-3">
                    {getCategoryIcon(category)}
                  </span>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {category}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categorySkills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-semibold text-gray-900">
                          {skill.name}
                        </h3>
                        <span className="text-sm text-gray-600">
                          {skill.level}
                        </span>
                      </div>
                      
                      {/* Barra de progresso */}
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all duration-500 ${getLevelColor(skill.level)} ${getLevelWidth(skill.level)}`}
                          style={{ animationDelay: `${skillIndex * 0.1}s` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Seção de Idiomas */}
        <div className="mt-12 animate-fade-in-up">
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
            <div className="flex items-center mb-6">
              <span className="text-3xl mr-3">🌍</span>
              <h2 className="text-2xl font-bold text-gray-900">
                Idiomas
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {languages.map((language, index) => (
                <div
                  key={language.name}
                  className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"
                >
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {language.name}
                    </h3>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      {language.level}
                    </span>
                  </div>
                  
                  {/* Barra de progresso para idiomas */}
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className={`h-3 rounded-full transition-all duration-500 ${
                        language.level === 'Nativo' ? 'bg-green-500 w-full' :
                        language.level === 'Avançado' ? 'bg-blue-500 w-4/5' :
                        language.level === 'Intermediário' ? 'bg-yellow-500 w-3/5' :
                        'bg-gray-400 w-2/5'
                      }`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Seção de Diferenciais */}
        <div className="mt-12 animate-fade-in-up">
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
            <div className="flex items-center mb-6">
              <span className="text-3xl mr-3">⭐</span>
              <h2 className="text-2xl font-bold text-gray-900">
                Diferenciais
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Foco em Resultados
                </h3>
                <p className="text-gray-600 text-sm">
                  Sempre busco entregar soluções que agreguem valor real aos projetos.
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-lg">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Aprendizado Contínuo
                </h3>
                <p className="text-gray-600 text-sm">
                  Sempre em busca de novas tecnologias e melhores práticas.
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Trabalho em Equipe
                </h3>
                <p className="text-gray-600 text-sm">
                  Colaboração efetiva e comunicação clara com todos os stakeholders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
