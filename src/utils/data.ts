/**
 * Dados do portfólio
 * Contém todas as informações estáticas do portfólio
 */

import type { Project, Skill, Experience, Education, PersonalInfo, Language } from '../types';

// Informações pessoais
export const personalInfo: PersonalInfo = {
  name: 'Luiz Gustavo Santos Cunha',
  title: 'Desenvolvedor Full Stack',
  summary: 'Fascinado por Resolução de Problemas, Criatividade para Soluções, Conexão com Pessoas.',
  avatar: '/src/assets/images/avatar.jpg',
  contact: {
    email: 'luiz.gustavo.cunha2003@gmail.com',
    phone: '(71) 9 9115-6488',
    linkedin: 'https://www.linkedin.com/in/luiz-gustavo-santos-cunha-854988256/',
    github: 'https://github.com/GustavoCunh4'
  }
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
    image: '/src/assets/images/age-calculator.jpg',
    completionDate: '14 de Setembro de 2025',
    version: '1.0.2'
  },
  {
    id: 'ticket-generator',
    title: 'Ticket Generator',
    description: 'Gerar um ticket com Nome, Email, usuário do GitHub e uma Imagem.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    repository: 'https://github.com/GustavoCunh4/AV1-FullStack-Frontend',
    liveUrl: 'https://ticketgenerator.av1-fullstack-frontend.me/',
    image: '/src/assets/images/ticket-generator.jpg',
    completionDate: '31 de Agosto de 2025',
    version: '1.0.0'
  }
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
  { name: 'Resolução de Problemas', level: 'Avançado', category: 'Soft Skill' }
];

// Experiência profissional
export const experiences: Experience[] = [
  {
    id: 'senai-cimatec',
    company: 'Senai CIMATEC',
    position: 'Estagiário',
    period: 'jan/2025 - Atual',
    responsibilities: [
      'Suporte no Desenvolvimento de Projetos',
      'Participação ativa no desenvolvimento de códigos',
      'Realização de pesquisas e documentação dos projetos'
    ],
    achievements: [
      'Participação ativa no desenvolvimento de códigos',
      'Pesquisas e documentos dos projetos',
      'Contribuição significativa para o crescimento da equipe'
    ]
  }
];

// Educação
export const education: Education[] = [
  {
    id: 'engenharia-computacao',
    course: 'Engenharia de Computação',
    institution: 'Senai CIMATEC',
    startYear: 2022,
    endYear: 2027,
    additionalCourses: [
      'Infinity School',
      'Voluntário na CIMATEC JR'
    ]
  }
];

// Idiomas
export const languages: Language[] = [
  { name: 'Português', level: 'Nativo' },
  { name: 'Inglês', level: 'Avançado' }
];

// Itens de navegação
export const navigationItems = [
  { label: 'Home', path: '/', icon: '🏠' },
  { label: 'Projetos', path: '/projects', icon: '💼' },
  { label: 'Habilidades', path: '/skills', icon: '⚡' },
  { label: 'Experiência', path: '/experience', icon: '🎯' },
  { label: 'Educação', path: '/education', icon: '🎓' }
];
