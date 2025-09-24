/**
 * Componente Footer
 * Rodapé do site com informações de contato e links sociais
 */

import React from 'react';
import { personalInfo } from '../utils/data';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-[#181824] via-[#23234a] to-[#1a1a2e] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Informações pessoais */}
          <div className="space-y-4 bg-white/5 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/10">
            <h3 className="text-xl font-bold text-[#ff6f61] drop-shadow-lg">Luiz Gustavo Santos Cunha</h3>
            <p className="text-gray-200">
              Desenvolvedor Full Stack apaixonado por resolver problemas e criar soluções inovadoras.
            </p>
          </div>

          {/* Links rápidos */}
          <div className="space-y-4 bg-white/5 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/10">
            <h4 className="text-lg font-semibold text-[#ff6f61]">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-200 hover:text-[#ff6f61] transition-colors">Home</a>
              </li>
              <li>
                <a href="/projects" className="text-gray-200 hover:text-[#ff6f61] transition-colors">Projetos</a>
              </li>
              <li>
                <a href="/skills" className="text-gray-200 hover:text-[#ff6f61] transition-colors">Habilidades</a>
              </li>
              <li>
                <a href="/experience" className="text-gray-200 hover:text-[#ff6f61] transition-colors">Experiência</a>
              </li>
              <li>
                <a href="/education" className="text-gray-200 hover:text-[#ff6f61] transition-colors">Educação</a>
              </li>
            </ul>
          </div>

          {/* Links sociais */}
          <div className="space-y-4 bg-white/5 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/10">
            <h4 className="text-lg font-semibold text-[#ff6f61]">Contato</h4>
            <ul className="space-y-2">
              <li>
                <a href={`mailto:${personalInfo.contact.email}`} className="text-gray-200 hover:text-[#ff6f61] transition-colors">Email</a>
              </li>
              <li>
                <a href={personalInfo.contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-[#ff6f61] transition-colors">LinkedIn</a>
              </li>
              <li>
                <a href={personalInfo.contact.github} target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-[#ff6f61] transition-colors">GitHub</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 text-center text-gray-400">
          &copy; {currentYear} Luiz Gustavo Santos Cunha. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
