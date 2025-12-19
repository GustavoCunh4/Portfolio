/**
 * Página Home
 * Landing com estética futurista, fluida e foco no avatar + contato
 */

import React from 'react';
import { personalInfo, projects } from '../utils/data';

const IconBadge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500/60 via-accent-400/60 to-primary-800/70 text-white shadow-lg shadow-primary-900/30">
    {children}
  </div>
);

const MailIcon = () => (
  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
    <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5l9 6 9-6" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5.5 3H8a1.5 1.5 0 011.5 1.5v2.25a1.5 1.5 0 01-1.5 1.5H7a1.5 1.5 0 00-1.47 1.2l-.4 1.9a1.35 1.35 0 00.33 1.19 12.5 12.5 0 005.25 5.25 1.35 1.35 0 001.19.33l1.9-.4A1.5 1.5 0 0015.75 17v-1a1.5 1.5 0 011.5-1.5h2.25A1.5 1.5 0 0121 16v2.5A2.5 2.5 0 0118.5 21h-.25C9.61 20.9 3.1 14.39 3 5.75V5.5A2.5 2.5 0 015.5 3z"
    />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GithubIcon = () => (
  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.562 21.8 24 17.303 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

type ContactCardProps = {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
};

const ContactCard: React.FC<ContactCardProps> = ({ icon, label, value }) => (
  <div className="glass-panel rounded-2xl border border-white/10 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent-300/50 h-full">
    <div className="flex items-start gap-4">
      <IconBadge>{icon}</IconBadge>
      <div className="flex-1 min-w-0">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{label}</p>
        <div className="text-lg font-semibold text-white break-words leading-snug">{value}</div>
      </div>
    </div>
  </div>
);

const Home: React.FC = () => {
  const yearsOfStudy = new Date().getFullYear() - 2022 + 2;
  const mailDisplay = personalInfo.contact.email.replace('@', '@\u200b');

  return (
    <div className="relative overflow-hidden">
      <section className="relative">
        <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-gradient-to-br from-accent-400/30 via-primary-500/25 to-primary-900/10 blur-3xl opacity-80" />
        <div className="absolute -right-10 -bottom-10 h-72 w-72 rounded-full bg-gradient-to-tr from-primary-700/25 via-primary-500/15 to-accent-300/30 blur-3xl opacity-80" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            {/* Texto principal */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.24em] text-slate-200">
                Disponível para projetos & colaborações
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                  Crio experiências digitais
                  <span className="block gradient-text">rápidas, fluidas e memoráveis.</span>
                </h1>
                <p className="text-lg text-slate-200/90 max-w-2xl leading-relaxed">
                  {personalInfo.summary} Atualmente explorando interfaces cheias de movimento e foco absoluto na clareza
                  visual — inspirado pela fluidez da Apple e pela velocidade do mundo das pistas.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="/Portfolio/projects"
                  className="btn-primary"
                >
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
                      <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  Ver projetos em produção
                </a>
                <a
                  href="#contato"
                  className="btn-secondary"
                >
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
                      <path d="M4 4h16v12H5.5L4 17.5V4z" />
                      <path d="M8 9.5h8" strokeLinecap="round" />
                      <path d="M8 12.5h5" strokeLinecap="round" />
                    </svg>
                  </span>
                  Falar comigo agora
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: 'Projetos ao vivo', value: `${projects.length}+`, note: 'Mantidos e evoluindo' },
                  { label: 'Anos de jornada', value: `${yearsOfStudy}+`, note: 'Construindo para web' },
                  { label: 'Stack favorita', value: 'Python', note: 'Performance e UX' },
                ].map((item) => (
                  <div key={item.label} className="glass-panel rounded-2xl border border-white/10 p-4">
                    <p className="text-xs uppercase tracking-[0.22em] text-slate-400">{item.label}</p>
                    <div className="text-2xl font-bold text-white mt-2">{item.value}</div>
                    <p className="text-sm text-slate-300">{item.note}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Avatar e card lateral */}
            <div className="relative animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
              <div className="absolute -inset-10 bg-gradient-to-br from-white/10 via-white/5 to-white/10 blur-3xl" />
              <div className="relative glass-panel rounded-3xl border border-white/10 p-6 shadow-2xl">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-sm text-slate-200">Disponível</span>
                  </div>
                  <span className="text-xs uppercase tracking-[0.18em] text-slate-400">Full Stack</span>
                </div>

                <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                  <img
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    className="h-[420px] w-full object-cover object-[50%_20%]"
                    onError={(event) => {
                      const target = event.target as HTMLImageElement;
                      target.src =
                        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjQyMCIgdmlld0JveD0iMCAwIDMyMCA0MjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMjAiIGhlaWdodD0iNDIwIiByeD0iMjQiIGZpbGw9IiMwMzA3MTIiLz4KPHBhdGggZD0iTTI2MCAyNTZDMjYwIDI5OS4yMjggMjI2LjIyOCAzMzIgMTgzIDMzMkgxMzdDMTEzLjM2OCAzMzIgOTIgMzEwLjYzMiA5MiAyODdWMjcyQzkyIDI0OC4zNjggMTEzLjM2OCAyMjcgMTM3IDIyN0gxODNDMjA2LjYzMiAyMjcgMjI4IDI0OC4zNjggMjI4IDI3MlYyODdDMjI4IDMxMC42MzIgMjA2LjYzMiAzMzIgMTgzIDMzMkgxMzdDMTEzLjM2OCAzMzIgOTIgMzEwLjYzMiA5MiAyODdWMjcyQzkyIDI0OC4zNjggMTEzLjM2OCAyMjcgMTM3IDIyN0gxODNDMjA2LjYzMiAyMjcgMjI4IDI0OC4zNjggMjI4IDI3MlYyODdDMjI4IDMxMC42MzIgMjA2LjYzMiAzMzIgMTgzIDMzMkgxMzdDMTEzLjM2OCAzMzIgOTIgMzEwLjYzMiA5MiAyODdWMjcyQzkyIDI0OC4zNjggMTEzLjM2OCAyMjcgMTM3IDIyN0gxODNDMjA2LjYzMiAyMjcgMjI4IDI0OC4zNjggMjI4IDI3MiIvPgo8Y2lyY2xlIGN4PSIxNjAiIGN5PSIxNTIiIHI9IjcyIiBmaWxsPSIjMTMzMTM2Ii8+CjxwYXRoIGQ9Ik0xNjAgMjI0QzEzNC45MTIgMjI0IDExNCAyMDMuMDg4IDExNCAxNzdDMTE0IDE1MS45MTIgMTM0LjkxMiAxMzEgMTYwIDEzMUMxODUuMDg4IDEzMSAyMDYgMTUxLjkxMiAyMDYgMTc3QzIwNiAyMDMuMDg4IDE4NS4wODggMjI0IDE2MCAyMjRaIiBmaWxsPSIjRkZGIi8+Cjwvc3ZnPgo=';
                    }}
                  />

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl bg-white/10 backdrop-blur px-4 py-3 border border-white/15">
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-slate-200">Disponível</p>
                      <p className="text-lg font-semibold text-white">{personalInfo.name}</p>
                    </div>
                    <div className="flex -space-x-3">
                      <span className="h-8 w-8 rounded-full bg-gradient-to-br from-primary-500 to-accent-400 border border-white/30 shadow-lg animate-float" />
                      <span className="h-8 w-8 rounded-full bg-gradient-to-br from-accent-400 to-primary-700 border border-white/30 shadow-lg animate-float" style={{ animationDelay: '0.4s' }} />
                    </div>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Título</p>
                    <p className="text-lg font-semibold text-white">{personalInfo.title}</p>
                    <p className="text-sm text-slate-300">Frontend, Backend e DB.</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Base</p>
                    <p className="text-lg font-semibold text-white">Brasil · Remoto</p>
                    <p className="text-sm text-slate-300">Fuso flexível para o time.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de contato */}
      <section id="contato" className="relative bg-gradient-to-r from-white/5 via-white/0 to-white/5 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Contato direto</p>
              <h3 className="text-3xl font-bold text-white mt-2">Vamos construir algo memorável.</h3>
              <p className="text-slate-300 mt-2">
                Preferência por conversas objetivas e protótipos rápidos. Retorno em poucas horas.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary-500 to-accent-400 flex items-center justify-center text-white shadow-lg">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}>
                  <path d="M3 5h18M3 12h18M3 19h18" strokeLinecap="round" />
                </svg>
              </div>
              <span className="text-sm text-slate-200">Respostas rápidas via e-mail ou LinkedIn.</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            <ContactCard
              icon={<MailIcon />}
              label="Email"
              value={
                <a
                  href={`mailto:${personalInfo.contact.email}`}
                  className="text-white hover:text-accent-200 break-words"
                >
                  {mailDisplay}
                </a>
              }
            />
            <ContactCard
              icon={<PhoneIcon />}
              label="Telefone"
              value={
                <a
                  href={`tel:${personalInfo.contact.phone}`}
                  className="text-white hover:text-accent-200 whitespace-nowrap"
                >
                  {personalInfo.contact.phone}
                </a>
              }
            />
            <ContactCard
              icon={<LinkedInIcon />}
              label="LinkedIn"
              value={
                <a
                  href={personalInfo.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-accent-200 whitespace-normal sm:whitespace-nowrap"
                >
                  Ver perfil
                </a>
              }
            />
            <ContactCard
              icon={<GithubIcon />}
              label="GitHub"
              value={
                <a
                  href={personalInfo.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-accent-200 whitespace-normal sm:whitespace-nowrap"
                >
                  Repositórios
                </a>
              }
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
