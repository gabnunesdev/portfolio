export interface Project {
  title: string;
  description: string;
  repoUrl: string;
  demoUrl?: string;
  technologies: string[];
}

export interface Skill {
  name: string;
  category?: string; // Optional: Backend, Frontend, Tools
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  status: 'Concluído' | 'Cursando' | 'Em andamento' | 'Completed' | 'In Progress';
}

export interface Certification {
  title: string;
  institution: string;
  date: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon?: string; // Icon name from Lucide
}

export interface Profile {
  name: string;
  role: string;
  summary: string;
  about: string[]; // Array of paragraphs
  location?: string;
  socials: SocialLink[];
}
