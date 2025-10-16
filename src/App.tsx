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
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#181824] via-[#23234a] to-[#1a1a2e]">
        {/* Navegação */}
        <Navigation />
        {/* Conteúdo principal com animação de entrada */}
        <main className="flex-1">
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

