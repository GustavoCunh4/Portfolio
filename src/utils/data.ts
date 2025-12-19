/**
 * Dados do portfólio
 * Contém todas as informações estáticas do portfólio
 */

import type { Project, Skill, Experience, Education, PersonalInfo, Language } from '../types';
import avatarImage from '../assets/images/avatar.jpg';
import ageCalculatorImage from '../assets/images/age-calculator.jpg';
import ticketGeneratorImage from '../assets/images/ticket-generator.jpg';
import alphaCleanImage from '../assets/images/alpha-clean.jpg';

// Informações pessoais
export const personalInfo: PersonalInfo = {
  name: 'Gustavo Cunha',
  title: 'Desenvolvedor Full Stack',
  summary: 'Fascinado por resolução de problemas, criatividade para soluções e conexão com pessoas.',
  avatar: avatarImage,
  contact: {
    email: 'luizgustavocunha.dev@gmail.com',
    phone: '(71) 9 9115-6488',
    linkedin: 'https://www.linkedin.com/in/luiz-gustavo-santos-cunha-854988256/',
    github: 'https://github.com/GustavoCunh4',
  },
};

// Projetos do portfólio
export const projects: Project[] = [
  {
    id: 'age-calculator',
    title: 'Age Calculator',
    description: 'Calcular a idade da pessoa com a data inserida e eventos futuros, quanto falta para cada data.',
    technologies: ['React', 'TypeScript', 'TailwindCSS'],
    repository: 'https://github.com/GustavoCunh4/age-calculator-app',
    liveUrl: 'https://agecalculator.av1-fullstack-frontend.me/',
    image: ageCalculatorImage,
    completionDate: '14 de Setembro de 2025',
    version: '1.0.2',
  },
  {
    id: 'ticket-generator',
    title: 'Ticket Generator',
    description: 'Gerar um ticket com Nome, Email, usuário do GitHub e uma Imagem.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    repository: 'https://github.com/GustavoCunh4/AV1-FullStack-Frontend',
    liveUrl: 'https://ticketgenerator.av1-fullstack-frontend.me/',
    image: ticketGeneratorImage,
    completionDate: '31 de Agosto de 2025',
    version: '1.0.0',
  },
  {
    id: 'alpha-clean',
    title: 'Alpha Clean',
    description: 'Aplicação web do projeto Alpha Clean.',
    technologies: ['Next.js', 'TypeScript', 'TailwindCSS'],
    repository: 'https://github.com/TTG-Alpha-Clean',
    liveUrl: 'https://alpha-clean-pearl.vercel.app',
    image: alphaCleanImage,
    completionDate: '-',
    version: '1.0.0',
  },
];

// Habilidades técnicas
export const skills: Skill[] = [
  // Técnicas
  { name: 'Python', level: 'Avançado', category: 'Técnica' },
  { name: 'JavaScript', level: 'Avançado', category: 'Técnica' },
  { name: 'React', level: 'Avançado', category: 'Técnica' },
  { name: 'Next.js', level: 'Intermediário', category: 'Técnica' },
  { name: 'TailwindCSS', level: 'Avançado', category: 'Técnica' },
  { name: 'TypeScript', level: 'Avançado', category: 'Técnica' },
  { name: 'Git', level: 'Avançado', category: 'Técnica' },
  { name: 'DevOps', level: 'Intermediário', category: 'Técnica' },

  // Ferramentas
  { name: 'Git', level: 'Avançado', category: 'Ferramenta' },
  { name: 'Docker', level: 'Intermediário', category: 'Ferramenta' },
  { name: 'Figma', level: 'Intermediário', category: 'Ferramenta' },
  { name: 'VS Code', level: 'Avançado', category: 'Ferramenta' },
  { name: 'Oracle Virtual Box', level: 'Intermediário', category: 'Ferramenta' },

  // Outras competências
  { name: 'Testes', level: 'Intermediário', category: 'Outras' },
  { name: 'CI/CD', level: 'Intermediário', category: 'Outras' },

  // Soft Skills
  { name: 'Trabalho em Equipe', level: 'Avançado', category: 'Soft Skill' },
  { name: 'Comunicação', level: 'Avançado', category: 'Soft Skill' },
  { name: 'Criatividade', level: 'Avançado', category: 'Soft Skill' },
  { name: 'Resolução de Problemas', level: 'Avançado', category: 'Soft Skill' },
];

// Experiência profissional
export const experiences: Experience[] = [
  {
    id: 'cimatec-jr',
    company: 'CIMATEC Júnior',
    position: 'Desenvolvimento e Gestão',
    period: 'Nov 2023 - Jan 2025 | Salvador - BA',
    responsibilities: [
      'Desenvolvimento de softwares, websites e aplicações móveis.',
      'Suporte em projetos end-to-end, desde levantamento até entrega.',
      'Gestão e controle de planilhas financeiras da empresa júnior.',
    ],
    achievements: [
      'Projetos entregues em diferentes plataformas.',
      'Fluxos end-to-end documentados para o time.',
      'Rotinas financeiras organizadas para operação da empresa júnior.',
    ],
  },
  {
    id: 'senai-cimatec',
    company: 'Senai CIMATEC',
    position: 'Estagiário em Sistemas Especialistas',
    period: 'Jan 2025 - atual | Salvador - BA',
    responsibilities: [
      'Desenvolvimento de soluções de software do planejamento à validação final.',
      'Criação de interfaces com React, TypeScript e Tailwind.',
      'Desenvolvimento backend com Python (FastAPI/Flask) e integração com APIs REST.',
      'Documentação técnica e relatórios de sistema.',
      'Aplicação de metodologias ágeis (Scrum).',
    ],
    achievements: [
      'Entrega de features ponta a ponta em soluções especialistas.',
      'Padronização de interfaces com React + Tailwind.',
      'Integração confiável com serviços externos via REST.',
    ],
  },
];

// Educação
export const education: Education[] = [
  {
    id: 'engenharia-computacao',
    course: 'Engenharia de Computação',
    institution: 'Senai CIMATEC',
    startYear: 2022,
    endYear: 2027,
    additionalCourses: ['Infinity School', 'CIMATEC JR - Atuação em tecnologia e educação'],
  },
];

// Idiomas
export const languages: Language[] = [
  { name: 'Português', level: 'Nativo' },
  { name: 'Inglês', level: 'Avançado' },
];

// Itens de navegação
export const navigationItems = [
  { label: 'Home', path: '/', icon: '' },
  { label: 'Projetos', path: '/projects', icon: '' },
  { label: 'Habilidades', path: '/skills', icon: '' },
  { label: 'Experiência', path: '/experience', icon: '' },
  { label: 'Educação', path: '/education', icon: '' },
];
