export const translations = {
  pt: {
    nav: {
      home: 'Início',
      about: 'Sobre',
      skills: 'Tecnologias',
      projects: 'Projetos',
      experience: 'Experiência',
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
    footer: {
      description: 'Construindo experiências digitais memoráveis com código limpo e design intuitivo.',
      rights: 'Todos os direitos reservados.'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      experience: 'Experience',
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
    footer: {
      description: 'Building memorable digital experiences with clean code and intuitive design.',
      rights: 'All rights reserved.'
    }
  }
};

export type Language = 'pt' | 'en';
export type TranslationState = typeof translations.pt;
