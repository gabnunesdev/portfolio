import type { Education, Certification } from '../types';

interface EducationData {
  pt: Education[];
  en: Education[];
}

interface CertificationData {
  pt: Certification[];
  en: Certification[];
}

export const educationData: EducationData = {
  pt: [
    {
      institution: "Rocketseat",
      degree: "Formação FullStack",
      period: "Out. 2024 - Out. 2025",
      status: "Concluído"
    },
    {
      institution: "Unifatecie",
      degree: "Análise e Desenvolvimento de Sistemas",
      period: "Abr. 2025 - Atual",
      status: "Cursando"
    },
    {
      institution: "Origamid",
      degree: "UX/UI Design",
      period: "Atual",
      status: "Cursando"
    }
  ],
  en: [
    {
      institution: "Rocketseat",
      degree: "FullStack Bootcamp",
      period: "Oct. 2024 - Oct. 2025",
      status: "Completed"
    },
    {
      institution: "Unifatecie",
      degree: "Analysis and Systems Development",
      period: "Apr. 2025 - Present",
      status: "In Progress"
    },
    {
      institution: "Origamid",
      degree: "UX/UI Design",
      period: "Present",
      status: "In Progress"
    }
  ]
};

// Update status to be compatible if it's a union type
// In types/index.ts status is 'Concluído' | 'Cursando' | 'Em andamento'
// I need to update the type definition to allow English statuses as well.

export const certificationsData: CertificationData = {
  pt: [
    {
      title: "Fullstack",
      institution: "Rocketseat",
      date: "Out/2025"
    },
    {
      title: "Introdução ao Node.js",
      institution: "Rocketseat",
      date: "Out/2025"
    },
    {
      title: "Entendendo Algoritmos e Fluxogramas",
      institution: "DIO",
      date: "Jul/2025"
    },
    {
      title: "JavaScript",
      institution: "Rocketseat",
      date: "Mai/2025"
    },
    {
      title: "Fundamentos de HTML e CSS",
      institution: "Rocketseat",
      date: "Mar/2025"
    },
    {
      title: "O básico de Git e GitHub",
      institution: "Rocketseat",
      date: "Out/2024"
    }
  ],
  en: [
    {
      title: "Fullstack",
      institution: "Rocketseat",
      date: "Oct/2025"
    },
    {
      title: "Introduction to Node.js",
      institution: "Rocketseat",
      date: "Oct/2025"
    },
    {
      title: "Understanding Algorithms and Flowcharts",
      institution: "DIO",
      date: "Jul/2025"
    },
    {
      title: "JavaScript",
      institution: "Rocketseat",
      date: "May/2025"
    },
    {
      title: "HTML and CSS Fundamentals",
      institution: "Rocketseat",
      date: "Mar/2025"
    },
    {
      title: "Git and GitHub Basics",
      institution: "Rocketseat",
      date: "Oct/2024"
    }
  ]
};
