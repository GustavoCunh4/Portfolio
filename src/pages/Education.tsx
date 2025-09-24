/**
 * Página de Educação
 * Exibe a formação acadêmica e cursos adicionais
 */

import React from 'react';
import { education, languages } from '../utils/data';

const Education: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  // Calcular progresso do curso atual
  const calculateProgress = (startYear: number, endYear: number | null) => {
    if (!endYear) {
      const totalYears = 5; // Duração típica de engenharia
      const yearsCompleted = currentYear - startYear;
      return Math.min((yearsCompleted / totalYears) * 100, 100);
    }
    return 100;
  };

  return (
  <div className="min-h-screen bg-gradient-to-br from-[#181824] via-[#23234a] to-[#1a1a2e] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-4">
            🎓 Formação Acadêmica
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Minha jornada educacional e o compromisso com o aprendizado contínuo.
          </p>
        </div>

        {/* Formação Principal */}
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={edu.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10 p-8 hover:scale-105 hover:shadow-2xl transition-all duration-300">
                {/* Header da formação */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                      {edu.course}
                    </h2>
                    <h3 className="text-xl text-blue-600 font-semibold mb-2">
                      {edu.institution}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-600">
                      <span className="flex items-center">
                        <span className="mr-2">📅</span>
                        {edu.startYear} - {edu.endYear || 'Presente'}
                      </span>
                      <span className="hidden sm:block">•</span>
                      <span className="flex items-center">
                        <span className="mr-2">⏱️</span>
                        {edu.endYear ? `${edu.endYear - edu.startYear} anos` : `${currentYear - edu.startYear} anos cursados`}
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-4 md:mt-0">
                    <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${
                      edu.endYear 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      <span className="mr-2">
                        {edu.endYear ? '✅' : '🎓'}
                      </span>
                      {edu.endYear ? 'Concluído' : 'Em Andamento'}
                    </span>
                  </div>
                </div>

                {/* Barra de progresso */}
                {!edu.endYear && (
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">
                        Progresso do Curso
                      </span>
                      <span className="text-sm font-medium text-blue-600">
                        {Math.round(calculateProgress(edu.startYear, edu.endYear))}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-primary-500 to-primary-600 h-3 rounded-full transition-all duration-1000"
                        style={{ 
                          width: `${calculateProgress(edu.startYear, edu.endYear)}%`,
                          animationDelay: '0.5s'
                        }}
                      />
                    </div>
                  </div>
                )}

                {/* Cursos adicionais */}
                {edu.additionalCourses && edu.additionalCourses.length > 0 && (
                  <div className="border-t border-gray-200 pt-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <span className="mr-2">📚</span>
                      Cursos e Atividades Adicionais
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {edu.additionalCourses.map((course, courseIndex) => (
                        <div
                          key={courseIndex}
                          className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                          <span className="text-primary-500 mr-3">🎯</span>
                          <span className="text-gray-700 font-medium">{course}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Seção de Idiomas */}
        <div className="mt-12 animate-fade-in-up">
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              🌍 Competências Linguísticas
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {languages.map((language, index) => (
                <div
                  key={language.name}
                  className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg"
                >
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {language.name}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      language.level === 'Nativo' ? 'bg-green-100 text-green-700' :
                      language.level === 'Avançado' ? 'bg-blue-100 text-blue-700' :
                      language.level === 'Intermediário' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {language.level}
                    </span>
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-1000 ${
                        language.level === 'Nativo' ? 'bg-green-500 w-full' :
                        language.level === 'Avançado' ? 'bg-blue-500 w-4/5' :
                        language.level === 'Intermediário' ? 'bg-yellow-500 w-3/5' :
                        'bg-gray-400 w-2/5'
                      }`}
                      style={{ animationDelay: `${index * 0.2}s` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Seção de Certificações e Conquistas */}
        <div className="mt-12 animate-fade-in-up">
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              🏆 Certificações e Conquistas
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Engenharia de Computação
                </h3>
                <p className="text-gray-600 text-sm">
                  Cursando no Senai CIMATEC
                </p>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Infinity School
                </h3>
                <p className="text-gray-600 text-sm">
                  Cursos de programação e tecnologia
                </p>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  CIMATEC JR
                </h3>
                <p className="text-gray-600 text-sm">
                  Voluntário na empresa júnior
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Seção de Estatísticas Educacionais */}
        <div className="mt-12 animate-fade-in-up">
          <div className="card p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              📊 Resumo Educacional
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {education.length}
                </div>
                <div className="text-gray-600 font-medium">
                  Cursos de Graduação
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {education[0]?.additionalCourses?.length || 0}+
                </div>
                <div className="text-gray-600 font-medium">
                  Cursos Adicionais
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {languages.length}
                </div>
                <div className="text-gray-600 font-medium">
                  Idiomas
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {currentYear - (education[0]?.startYear || currentYear)}+
                </div>
                <div className="text-gray-600 font-medium">
                  Anos de Estudo
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
