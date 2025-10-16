/**
 * Página de Educação
 * Exibe a formação acadêmica e cursos adicionais (sem status concluído/andamento)
 */

import React from 'react';
import { education, languages } from '../utils/data';

const Education: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const calculateProgress = (startYear: number, endYear: number | null) => {
    if (!endYear) {
      const totalYears = 5; // estimativa para Engenharia
      const yearsCompleted = currentYear - startYear;
      return Math.min((yearsCompleted / totalYears) * 100, 100);
    }
    return 100;
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gradient-to-br from-[#181824] via-[#23234a] to-[#1a1a2e] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white drop-shadow-lg mb-2">Formação Acadêmica</h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 max-w-3xl mx-auto">
            Minha jornada educacional e o compromisso com o aprendizado contínuo.
          </p>
        </div>

        {/* Formação Principal */}
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={edu.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="bg-white dark:bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10 p-8 hover:scale-105 hover:shadow-2xl transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{edu.course}</h2>
                    <h3 className="text-xl text-primary-700 dark:text-primary-300 font-semibold mb-2">{edu.institution}</h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-600 dark:text-gray-300">
                      <span className="flex items-center">{edu.startYear} - {edu.endYear || 'Presente'}</span>
                      <span className="flex items-center">
                        {edu.endYear ? `${edu.endYear - edu.startYear} anos` : `${currentYear - edu.startYear} anos cursados`}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Barra de progresso apenas quando sem endYear */}
                {!edu.endYear && (
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Progresso do Curso</span>
                      <span className="text-sm font-medium text-primary-700 dark:text-primary-300">{Math.round(calculateProgress(edu.startYear, edu.endYear))}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-primary-600 to-primary-700 h-3 rounded-full transition-all duration-1000"
                        style={{ width: `${calculateProgress(edu.startYear, edu.endYear)}%`, animationDelay: '0.5s' }}
                      />
                    </div>
                  </div>
                )}

                {/* Cursos adicionais */}
                {edu.additionalCourses && edu.additionalCourses.length > 0 && (
                  <div className="border-t border-gray-200 dark:border-white/10 pt-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">Cursos e Atividades Adicionais</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {edu.additionalCourses.map((course, idx) => (
                        <div key={`${course}-${idx}`} className="p-4 rounded-lg bg-gray-50 dark:bg-white/5 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-white/10">
                          {course}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Idiomas */}
        <div className="mt-12 animate-fade-in-up">
          <div className="bg-white dark:bg-white/10 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border border-white/10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Idiomas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {languages.map((language, index) => (
                <div key={language.name} className="bg-gray-50 dark:bg-white/5 rounded-lg p-6 border border-gray-200 dark:border-white/10">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{language.name}</h3>
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
      </div>
    </div>
  );
};

export default Education;