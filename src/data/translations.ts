import { profileData } from './profile';
import { projectsData } from './projects';
import { experienceData } from './experience';
import { educationData, certificationsData } from './education';

export const translations = {
  pt: {
    nav: {
      home: 'Início',
      about: 'Sobre',
      skills: 'Tecnologias',
      projects: 'Projetos',
      experience: 'Experiência',
      education: 'Formação',
      contact: 'Contato',
    },
    hero: {
      available: 'Disponível para novos projetos',
      roleSubtitle: 'Desenvolvedor Full Stack',
      buttons: {
        projects: 'Ver Projetos',
        contact: 'Contato',
      }
    },
    about: {
      title: 'Sobre Mim',
    },
    skills: {
      title: 'Tecnologias',
    },
    projects: {
      title: 'Projetos em Destaque',
    },
    experience: {
      title: 'Experiência Profissional',
    },
    education: {
        sectionTitle: 'Formação',
        title: 'Certificações & Educação',
        educationTitle: 'Educação',
        certificationsTitle: 'Certificações'
    },
    footer: {
      description: 'Construindo experiências digitais memoráveis com código limpo e design intuitivo.',
      rights: 'Todos os direitos reservados.'
    },
    data: {
        profile: profileData.pt,
        projects: projectsData.pt,
        experience: experienceData.pt,
        education: educationData.pt,
        certifications: certificationsData.pt
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      experience: 'Experience',
      education: 'Education',
      contact: 'Contact',
    },
    hero: {
      available: 'Available for new projects',
      roleSubtitle: 'Full Stack Developer',
      buttons: {
        projects: 'View Projects',
        contact: 'Contact',
      }
    },
    about: {
      title: 'About Me',
    },
    skills: {
      title: 'Technologies',
    },
    projects: {
      title: 'Featured Projects',
    },
    experience: {
      title: 'Professional Experience',
    },
    education: {
        sectionTitle: 'Education',
        title: 'Certifications & Education',
        educationTitle: 'Education',
        certificationsTitle: 'Certifications'
    },
    footer: {
      description: 'Building memorable digital experiences with clean code and intuitive design.',
      rights: 'All rights reserved.'
    },
    data: {
        profile: profileData.en,
        projects: projectsData.en,
        experience: experienceData.en,
        education: educationData.en,
        certifications: certificationsData.en
    }
  }
};

export type Language = 'pt' | 'en';
export type TranslationState = typeof translations.pt;
