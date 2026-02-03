import type { Project } from '../types';

interface ProjectsData {
  pt: Project[];
  en: Project[];
}

export const projectsData: ProjectsData = {
  pt: [
    {
      title: "FutmaisApp",
      description: "Aplicativo de gestão de partidas de futebol, com funcionalidades de cadastro de times, jogadores, partidas e estatísticas.",
      repoUrl: "https://github.com/gabnunesdev/futmais-app",
      demoUrl: "https://futmais-app.vercel.app/login",
      technologies: ["React", "TypeScript"]
    },
    {
      title: "Softpet",
      description: "Aplicativo de gestão de pets, com funcionalidades de cadastro de pets. Projeto feito como desafio para uma vaga fullstack.",
      repoUrl: "https://github.com/gabnunesdev/desafio-jr",
      demoUrl: "https://soft-pet.vercel.app/",
      technologies: ["React", "TypeScript"]
    }
  ],
  en: [
    {
      title: "FutmaisApp",
      description: "Soccer match management app, featuring team registration, player management, match scheduling, and statistics.",
      repoUrl: "https://github.com/gabnunesdev/futmais-app",
      demoUrl: "https://futmais-app.vercel.app/login",
      technologies: ["React", "TypeScript"]
    },
    {
      title: "Softpet",
      description: "Pet management application with pet registration features. Project created as a challenge for a fullstack position.",
      repoUrl: "https://github.com/gabnunesdev/desafio-jr",
      demoUrl: "https://soft-pet.vercel.app/",
      technologies: ["React", "TypeScript"]
    }
  ]
};
