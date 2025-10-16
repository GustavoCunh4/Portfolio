/**
 * Tipos TypeScript para o portfólio
 * Define interfaces e tipos para projetos, habilidades, experiência e educação
 */

// Interface para projetos do portfólio
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  repository: string;
  liveUrl: string;
  image: string;
  completionDate: string;
  version: string;
}

// Interface para habilidades técnicas
export interface Skill {
  name: string;
  level: 'Iniciante' | 'Intermediário' | 'Avançado' | 'Expert';
  category: 'Técnica' | 'Ferramenta' | 'Soft Skill' | 'Outras';
}

// Interface para experiência profissional
export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  responsibilities: string[];
  achievements: string[];
}

// Interface para educação
export interface Education {
  id: string;
  course: string;
  institution: string;
  startYear: number;
  endYear: number | null; // null se ainda estiver cursando
  additionalCourses?: string[];
}

// Interface para informações de contato
export interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
}

// Interface para informações pessoais
export interface PersonalInfo {
  name: string;
  title: string;
  summary: string;
  avatar: string;
  contact: ContactInfo;
}

// Tipo para navegação
export type NavigationItem = {
  label: string;
  path: string;
  icon?: string;
};

// Tipo para idiomas
export interface Language {
  name: string;
  level: 'Básico' | 'Intermediário' | 'Avançado' | 'Nativo';
}