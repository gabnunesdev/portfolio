import type { Project } from '../types';

export const projects: Project[] = [
  {
    title: "FutmaisApp",
    description: "Aplicativo de gestão de partidas de futebol, com funcionalidades de cadastro de times, jogadores, partidas e estatísticas.",
    repoUrl: "https://github.com/gabnunesdev/futmais-app",
    demoUrl: "https://futmais-app.vercel.app/login",
    technologies: ["React", "TypeScript"] // Infurred from skills, specific stack not listed in details but assumed
  },
  {
    title: "Softpet",
    description: "Aplicativo de gestão de pets, com funcionalidades de cadastro de pets. Projeto feito como desafio para uma vaga fullstack.",
    repoUrl: "https://github.com/gabnunesdev/desafio-jr",
    demoUrl: "https://soft-pet.vercel.app/",
    technologies: ["React", "TypeScript"]
  }
];
