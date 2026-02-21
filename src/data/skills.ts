import type { Skill } from "../types";

export const skills: Skill[] = [
  // Languages
  { name: "JavaScript (ES6+)", category: "Language" },
  { name: "TypeScript", category: "Language" },
  { name: "Python", category: "Language" },

  // Frontend
  { name: "React.js", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Vite", category: "Frontend" },
  { name: "HTML5", category: "Frontend" },
  { name: "CSS3", category: "Frontend" },

  // Backend
  { name: "Node.js", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "REST APIs", category: "Backend" },
  { name: "JWT (Authentication)", category: "Backend" },
  { name: "Prisma", category: "Backend" },
  { name: "Sequelize", category: "Backend" },

  // Databases
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },

  // DevOps, Tools & Methodologies
  { name: "Git & GitHub", category: "DevOps & Tools" },
  { name: "Docker", category: "DevOps & Tools" },
  { name: "Cloud Deployment", category: "DevOps & Tools" },
  { name: "CI/CD", category: "DevOps & Tools" },
  { name: "Agile / Scrum", category: "Methodologies" },
];
