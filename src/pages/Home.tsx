/**
 * Página Home
 * Página inicial do portfólio com apresentação pessoal e informações de contato
 */

import React from 'react';
import { personalInfo } from '../utils/data';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Seção de apresentação */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Avatar e nome */}
            <div className="text-center lg:text-left">
              <div className="inline-block relative bg-white/10 backdrop-blur-lg rounded-2xl p-4 shadow-2xl border border-white/10 animate-fade-in-up">
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-48 h-48 rounded-full mx-auto lg:mx-0 object-cover shadow-2xl border-4 border-primary-600"
                  onError={(event) => {
                    // Fallback caso a imagem não carregue
                    const target = event.target as HTMLImageElement;
                    target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyIiBoZWlnaHQ9IjE5MiIgdmlld0JveD0iMCAwIDE5MiAxOTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxOTIiIGhlaWdodD0iMTkyIiByeD0iOTYiIGZpbGw9IiNmM2Y0ZjYiLz4KPHN2ZyB4PSI0OCIgeT0iNDgiIHdpZHRoPSI5NiIgaGVpZ2h0PSI5NiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM5Y2EzYWYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj4KPHBhdGggZD0iTTIwIDIxdi0yYTQgNCAwIDAgMC00LTRIOGE0IDQgMCAwIDAtNCA0djIiLz4KPGNpcmNsZSBjeD0iMTIiIGN5PSI3IiByPSI0Ii8+Cjwvc3ZnPgo8L3N2Zz4K';
                  }}
                />
                <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-br from-[#9333ea] to-[#23234a] rounded-full flex items-center justify-center text-white text-2xl animate-pulse border-4 border-white">
                  ⚡
                </div>
              </div>
            </div>

            {/* Nome e título */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                {personalInfo.name}
              </h1>
              <h2 className="text-xl md:text-2xl text-primary-700 dark:text-primary-700 font-semibold mb-6">
                {personalInfo.title}
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed max-w-2xl">
                {personalInfo.summary}
              </p>
            </div>

            {/* Botões de ação */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="/projects"
                className="inline-flex items-center justify-center px-6 py-3 text-lg bg-gradient-to-r from-primary-600 to-primary-800 hover:from-[#7e22ce] hover:to-[#23234a] text-white font-bold rounded-full shadow-lg hover:scale-105 transition-all duration-300"
              >
                <span className="mr-2">💼</span>
                Ver Projetos
              </a>
              <a
                href="#contato"
                className="inline-flex items-center justify-center px-6 py-3 text-lg bg-gradient-to-r from-primary-800 to-primary-600 hover:from-[#23234a] hover:to-[#7e22ce] text-white font-bold rounded-full shadow-lg hover:scale-105 transition-all duration-300"
              >
                <span className="mr-2">✉️</span>
                Entrar em Contato
              </a>
            </div>
          </div>

          {/* Seção de contato */}
          <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white dark:bg-white/10 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                📞 Informações de Contato
              </h3>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-white/10 rounded-full flex items-center justify-center">
                    <span className="text-primary-700 dark:text-primary-700 text-xl">📧</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-700 dark:text-gray-900">Email</p>
                    <a
                      href={`mailto:${personalInfo.contact.email}`}
                      className="text-primary-700 dark:text-primary-700 hover:text-primary-800 dark:hover:text-primary-500 font-semibold"
                    >
                      {personalInfo.contact.email}
                    </a>
                  </div>
                </div>

                {/* Telefone */}
                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-white/10 rounded-full flex items-center justify-center">
                    <span className="text-primary-700 dark:text-primary-700 text-xl">📱</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-700 dark:text-gray-900">Telefone</p>
                    <a
                      href={`tel:${personalInfo.contact.phone}`}
                      className="text-primary-700 dark:text-primary-700 hover:text-primary-800 dark:hover:text-primary-500 font-semibold"
                    >
                      {personalInfo.contact.phone}
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-white/10 rounded-full flex items-center justify-center">
                    <span className="text-primary-700 dark:text-primary-700 text-xl">💼</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-700 dark:text-gray-900">LinkedIn</p>
                    <a
                      href={personalInfo.contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-700 dark:text-primary-700 hover:text-primary-800 dark:hover:text-primary-500 font-semibold"
                    >
                      Ver Perfil
                    </a>
                  </div>
                </div>

                {/* GitHub */}
                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-white/10 rounded-full flex items-center justify-center">
                    <span className="text-primary-700 dark:text-primary-700 text-xl">🧑‍💻</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-700 dark:text-gray-900">GitHub</p>
                    <a
                      href={personalInfo.contact.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-700 dark:text-primary-700 hover:text-primary-800 dark:hover:text-primary-500 font-semibold"
                    >
                      Ver Repositórios
                    </a>
                  </div>
                </div>
              </div>

              {/* Links sociais */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex justify-center space-x-6">
                  <a
                    href={personalInfo.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href={personalInfo.contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors"
                    aria-label="GitHub"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.562 21.8 24 17.303 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;