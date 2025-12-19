/**
 * Página de Educação
 * Formação em cartões de vidro e barras de progresso suaves
 */

import React from 'react';
import { education, languages } from '../utils/data';

const Education: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const calculateProgress = (startYear: number, endYear: number | null) => {
    if (!endYear) {
      const totalYears = 5;
      const yearsCompleted = currentYear - startYear;
      return Math.min((yearsCompleted / totalYears) * 100, 100);
    }
    return 100;
  };

  return (
    <div className="relative py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Formação contínua</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3">
            Educação <span className="gradient-text">em ritmo acelerado</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto mt-4">
            Base sólida em engenharia e cursos paralelos para manter a curiosidade sempre acesa.
          </p>
        </div>

        {/* Formação Principal */}
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={edu.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="glass-panel rounded-3xl border border-white/10 p-6 shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                  <div className="flex-1 space-y-1">
                    <h2 className="text-3xl font-bold text-white">{edu.course}</h2>
                    <h3 className="text-xl text-accent-100 font-semibold">{edu.institution}</h3>
                    <div className="flex flex-wrap items-center gap-3 text-slate-300 text-sm">
                      <span className="rounded-full bg-white/5 px-3 py-1 border border-white/10">
                        {edu.startYear} - {edu.endYear || 'Presente'}
                      </span>
                      <span className="rounded-full bg-white/5 px-3 py-1 border border-white/10">
                        {edu.endYear ? `${edu.endYear - edu.startYear} anos` : `${currentYear - edu.startYear} anos cursados`}
                      </span>
                    </div>
                  </div>
                  <span className="h-10 px-4 inline-flex items-center rounded-full bg-white/10 border border-white/10 text-sm font-semibold text-slate-100">
                    Engenharia em foco
                  </span>
                </div>

                {!edu.endYear && (
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-slate-300">Progresso</span>
                      <span className="text-sm font-semibold text-accent-100">{Math.round(calculateProgress(edu.startYear, edu.endYear))}%</span>
                    </div>
                    <div className="h-3 w-full rounded-full bg-white/10 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-accent-300 to-primary-500"
                        style={{ width: `${calculateProgress(edu.startYear, edu.endYear)}%` }}
                      />
                    </div>
                  </div>
                )}

                {edu.additionalCourses && edu.additionalCourses.length > 0 && (
                  <div className="border-t border-white/10 pt-6">
                    <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <span className="h-8 w-8 rounded-xl bg-gradient-to-br from-primary-500 to-accent-400 text-white flex items-center justify-center text-sm">+</span>
                      Cursos e atividades adicionais
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {edu.additionalCourses.map((course, idx) => (
                        <div key={`${course}-${idx}`} className="rounded-xl border border-white/10 bg-white/5 p-4 text-slate-200">
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
          <div className="glass-panel rounded-3xl border border-white/10 p-6">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Idiomas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {languages.map((language, index) => {
                const config =
                  language.level === 'Nativo'
                    ? { color: 'from-emerald-400 to-accent-300', width: 'w-[95%]' }
                    : language.level === 'Avançado'
                      ? { color: 'from-accent-300 to-primary-500', width: 'w-[80%]' }
                      : { color: 'from-amber-300 to-orange-400', width: 'w-[65%]' };
                return (
                  <div
                    key={language.name}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5"
                    style={{ animationDelay: `${index * 0.06}s` }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-semibold text-white">{language.name}</h3>
                      <span className="rounded-full bg-white/10 px-3 py-1 text-sm text-accent-50 border border-white/10">
                        {language.level}
                      </span>
                    </div>
                    <div className="h-3 w-full rounded-full bg-white/10 overflow-hidden">
                      <div className={`h-full rounded-full bg-gradient-to-r ${config.color} ${config.width}`} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
