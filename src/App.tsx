/**
 * App Principal
 * Configuração do React Router V7 e estrutura principal da aplicação
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Education from './pages/Education';

const App: React.FC = () => {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="relative min-h-screen flex flex-col overflow-hidden bg-slate-950 text-slate-100">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -left-24 h-[28rem] w-[28rem] rounded-full bg-gradient-to-br from-primary-500/30 via-accent-300/20 to-primary-800/10 aurora-blob" />
          <div
            className="absolute -bottom-16 right-0 h-[26rem] w-[26rem] rounded-full bg-gradient-to-tr from-accent-400/25 via-primary-500/25 to-primary-700/20 aurora-blob"
            style={{ animationDelay: '1.5s' }}
          />
          <div className="absolute inset-0 bg-hero-grid" />
        </div>
        {/* Navegação */}
        <Navigation />
        {/* Conteúdo principal com animação de entrada */}
        <main className="relative z-10 flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
          </Routes>
        </main>
        {/* Rodapé */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
