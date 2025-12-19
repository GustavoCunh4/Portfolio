/**
 * Componente Footer
 * Rodapé em vidro com CTA e links rápidos
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { personalInfo } from '../utils/data';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-12 border-t border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/30 via-accent-400/10 to-primary-800/30 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8">
          <div className="glass-panel rounded-3xl border border-white/10 p-6">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Pronto para acelerar?</p>
            <h3 className="text-3xl font-bold text-white mt-2">Vamos criar algo que pareça inevitável.</h3>
            <p className="text-slate-300 mt-3 max-w-2xl">
              Conversas rápidas, protótipos ainda mais rápidos. Conte comigo para liderar o front e pensar o produto de ponta a ponta.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href="mailto:luizgustavocunha.dev@gmail.com" className="btn-primary">
                Escrever e-mail
              </a>
              <a href={personalInfo.contact.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                Conectar no LinkedIn
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h4 className="text-lg font-semibold text-white">Navegação</h4>
              <ul className="mt-3 space-y-2 text-slate-300">
                <li><Link to="/" className="hover:text-white">Home</Link></li>
                <li><Link to="/projects" className="hover:text-white">Projetos</Link></li>
                <li><Link to="/skills" className="hover:text-white">Habilidades</Link></li>
                <li><Link to="/experience" className="hover:text-white">Experiência</Link></li>
                <li><Link to="/education" className="hover:text-white">Educação</Link></li>
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 md:col-span-2 lg:col-span-2">
              <h4 className="text-lg font-semibold text-white">Contato</h4>
              <div className="mt-3 grid gap-2 text-slate-300">
                <a href={`mailto:${personalInfo.contact.email}`} className="hover:text-white break-words block">{personalInfo.contact.email}</a>
                <a href={`tel:${personalInfo.contact.phone}`} className="hover:text-white break-words block">{personalInfo.contact.phone}</a>
                <a href={personalInfo.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white break-words block">LinkedIn</a>
                <a href={personalInfo.contact.github} target="_blank" rel="noopener noreferrer" className="hover:text-white break-words block">GitHub</a>
              </div>
              <div className="mt-5 rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-slate-200 leading-relaxed">
                {personalInfo.summary}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 text-center text-slate-400 text-sm">
          © {currentYear} {personalInfo.name}. Projetado para ser lembrado.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
