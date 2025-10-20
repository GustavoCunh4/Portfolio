/**
 * Componente de Navegação
 * Barra de navegação responsiva com menu mobile e alternância de tema
 */

import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navigationItems } from '../utils/data';

const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const hasDark = document.documentElement.classList.contains('dark');
    setIsDark(hasDark);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const isActive = (path: string) => location.pathname === path;

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    if (next) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <nav className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 text-gray-800 border-secondary-200 dark:bg-gradient-to-r dark:from-[#23234a] dark:via-[#1a1a2e] dark:to-[#181824] dark:text-white dark:border-white/10 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 text-xl font-bold text-gray-900 dark:text-white drop-shadow-lg"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13 3L4 14h6l-1 7 9-11h-6l1-7z" /></svg>
            <span>Luiz Gustavo</span>
          </Link>

          {/* Navegação desktop */}
          <div className="hidden md:flex items-center space-x-3">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-lg font-semibold transition-all duration-300 ${isActive(item.path) ? 'bg-primary-600 text-white shadow-lg scale-105' : 'text-gray-700 dark:text-white/80 hover:text-primary-700 dark:hover:text-primary-300 hover:scale-105 hover:shadow-md'}`}
              >
                {item.icon ? <span>{item.icon}</span> : null}
                <span>{item.label}</span>
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              aria-label="Alternar tema"
              className="ml-2 inline-flex items-center justify-center w-10 h-10 rounded-md border border-secondary-300 dark:border-white/10 text-secondary-700 dark:text-white/80 hover:text-primary-700 dark:hover:text-primary-300 hover:border-primary-300 dark:hover:border-primary-500 transition-colors"
            >
              {isDark ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12 18a6 6 0 100-12 6 6 0 000 12z" />
                  <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0V3A.75.75 0 0112 2.25zm0 15.75a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25a.75.75 0 01.75-.75zM4.72 4.72a.75.75 0 011.06 0l1.06 1.06a.75.75 0 11-1.06 1.06L4.72 5.78a.75.75 0 010-1.06zm12.44 12.44a.75.75 0 011.06 0l1.06 1.06a.75.75 0 11-1.06 1.06l-1.06-1.06a.75.75 0 010-1.06zM2.25 12a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75zm15.75 0a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H18.75a.75.75 0 01-.75-.75zM4.72 19.28a.75.75 0 010-1.06l1.06-1.06a.75.75 0 111.06 1.06L5.78 19.28a.75.75 0 01-1.06 0zm12.44-12.44a.75.75 0 010-1.06l1.06-1.06a.75.75 0 111.06 1.06l-1.06 1.06a.75.75 0 01-1.06 0z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M21.752 15.002A9.718 9.718 0 0112 21.75 9.75 9.75 0 1118.998 2.248a.75.75 0 01.073 1.274 7.5 7.5 0 002.407 11.48.75.75 0 01-.726 0z" />
                </svg>
              )}
            </button>
          </div>

          {/* Botão mobile */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Alternar tema"
              className="inline-flex items-center justify-center p-2 rounded-md text-secondary-700 hover:text-primary-700 dark:text-white/80 dark:hover:text-primary-300"
            >
              {isDark ? (
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 18a6 6 0 100-12 6 6 0 000 12z" />
                  <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0V3A.75.75 0 0112 2.25zm0 15.75a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25a.75.75 0 01.75-.75zM4.72 4.72a.75.75 0 011.06 0l1.06 1.06a.75.75 0 11-1.06 1.06L4.72 5.78a.75.75 0 010-1.06zm12.44 12.44a.75.75 0 011.06 0l1.06 1.06a.75.75 0 11-1.06 1.06l-1.06-1.06a.75.75 0 010-1.06zM2.25 12a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75zm15.75 0a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H18.75a.75.75 0 01-.75-.75zM4.72 19.28a.75.75 0 010-1.06l1.06-1.06a.75.75 0 111.06 1.06L5.78 19.28a.75.75 0 01-1.06 0zm12.44-12.44a.75.75 0 010-1.06l1.06-1.06a.75.75 0 111.06 1.06l-1.06 1.06a.75.75 0 01-1.06 0z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M21.752 15.002A9.718 9.718 0 0112 21.75 9.75 9.75 0 1118.998 2.248a.75.75 0 01.073 1.274 7.5 7.5 0 002.407 11.48.75.75 0 01-.726 0z" />
                </svg>
              )}
            </button>
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-secondary-700 hover:text-primary-700 dark:text-white/80 dark:hover:text-primary-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menu principal</span>
              <svg className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Navegação mobile */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/90 backdrop-blur dark:bg-gradient-to-r dark:from-[#23234a] dark:via-[#1a1a2e] dark:to-[#181824] border-t border-secondary-200 dark:border-white/10 rounded-b-lg">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${isActive(item.path) ? 'bg-primary-600 text-white shadow-lg scale-105' : 'text-gray-700 dark:text-white/80 hover:text-primary-700 dark:hover:text-primary-300 hover:scale-105 hover:shadow-md'}`}
              >
                {item.icon ? <span>{item.icon}</span> : null}
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
