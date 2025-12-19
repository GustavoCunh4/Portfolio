/**
 * Componente de Navegação
 * Barra com estética futurista, vidro fosco e controle de tema
 */

import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navigationItems } from '../utils/data';
import logoImage from '../assets/images/logo-gc.png';

const Navigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const isActive = (path: string) => location.pathname === path;

  const iconMap: Record<string, React.ReactNode> = {
    '/': (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
        <path d="M4.5 11.5l7.5-6 7.5 6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.5 10.75V18a.75.75 0 00.75.75H11v-4.5h2v4.5h4.75a.75.75 0 00.75-.75v-7.25" strokeLinecap="round" />
      </svg>
    ),
    '/projects': (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
        <rect x="3.5" y="4.5" width="17" height="6" rx="1.25" />
        <rect x="3.5" y="13.5" width="17" height="6" rx="1.25" />
        <path d="M9 7h6M9 16h6" strokeLinecap="round" />
      </svg>
    ),
    '/skills': (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 6v6l3 3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    '/experience': (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
        <rect x="5" y="7" width="14" height="12" rx="2" />
        <path d="M9 7V5.5A1.5 1.5 0 0110.5 4h3A1.5 1.5 0 0115 5.5V7" />
        <path d="M8 12h8" strokeLinecap="round" />
      </svg>
    ),
    '/education': (
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
        <path d="M3.5 9L12 4l8.5 5-8.5 5L3.5 9z" />
        <path d="M7 11v4c0 1.1 2.24 2 5 2s5-.9 5-2v-4" />
      </svg>
    ),
  };

  return (
    <nav className="sticky top-0 z-50 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="relative mt-4 overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_15px_70px_rgba(0,0,0,0.45)]">
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-white/10 opacity-40" />
          <div className="relative flex items-center justify-between px-4 py-3 md:px-6">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 text-slate-100 hover:text-white">
              <div className="relative h-11 w-11 overflow-hidden rounded-2xl border border-white/15 bg-slate-950/80 shadow-inner">
                <img
                  src={logoImage}
                  alt="Logo Gustavo Cunha"
                  className="h-full w-full object-contain p-1"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-[0.15em] text-slate-300">Portfólio</span>
                <span className="text-lg font-semibold">Gustavo Cunha</span>
              </div>
            </Link>

            {/* Navegação desktop */}
            <div className="hidden md:flex items-center gap-1">
              {navigationItems.map((item) => {
                const active = isActive(item.path);
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`relative overflow-hidden rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                      active
                        ? 'text-white shadow-lg shadow-primary-900/30'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {active && <span className="absolute inset-0 rounded-full bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/15" />}
                    <span className="relative flex items-center gap-2">
                      {iconMap[item.path] || <span className="h-4 w-4 rounded-full bg-white/70" />}
                      <span>{item.label}</span>
                    </span>
                  </Link>
                );
              })}
            </div>

            {/* Botão mobile */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/10 bg-white/5 text-slate-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-accent-400/70"
                aria-expanded={isMobileMenuOpen}
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
          <div className={`md:hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="px-4 pb-4 space-y-2 bg-slate-950/70 backdrop-blur-lg border-t border-white/10">
              {navigationItems.map((item) => {
                const active = isActive(item.path);
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 text-base font-semibold ${
                      active
                        ? 'bg-white/10 text-white'
                        : 'text-slate-200 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {iconMap[item.path] || <span className="h-4 w-4 rounded-full bg-white/70" />}
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
