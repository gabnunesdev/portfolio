import type { Experience } from '../types';

interface ExperienceData {
  pt: Experience[];
  en: Experience[];
}

export const experienceData: ExperienceData = {
  pt: [
    {
      company: "Designer Gráfico Freelancer (Autônomo)",
      role: "Visual Strategy & UI Design",
      period: "2020 - 2025",
      description: "Foco em soluções visuais otimizadas para conversão e performance em lançamentos digitais. Experiência em traduzir necessidades de negócio em interfaces atraentes, mantendo a consistência da marca em múltiplos canais."
    },
    {
      company: "GS Impressão Digital",
      role: "Designer Gráfico & Produção Técnica",
      period: "2020 - 2024",
      description: "Gestão de fluxo de trabalho (workflow) sob demanda, com foco em entrega contínua e precisão técnica. Atuação direta na resolução de problemas visuais complexos e suporte a campanhas de marketing."
    },
    {
      company: "CNA / Banco do Nordeste",
      role: "Suporte Operacional & Processos",
      period: "2016 - 2018",
      description: "Experiência em ambientes estruturados, lidando com organização de dados, conformidade documental e atendimento ao cliente, desenvolvendo uma base sólida em organização e atenção aos detalhes técnicos."
    }
  ],
  en: [
    {
      company: "Freelance Graphic Designer (Self-employed)",
      role: "Visual Strategy & UI Design",
      period: "2020 - 2025",
      description: "Focused on visual solutions optimized for conversion and performance in digital launches. Experience in translating business needs into attractive interfaces, maintaining brand consistency across multiple channels."
    },
    {
      company: "GS Digital Printing",
      role: "Graphic Designer & Technical Production",
      period: "2020 - 2024",
      description: "Management of on-demand workflow, focusing on continuous delivery and technical precision. Direct involvement in solving complex visual problems and supporting marketing campaigns."
    },
    {
      company: "CNA / Banco do Nordeste",
      role: "Operational Support & Processes",
      period: "2016 - 2018",
      description: "Experience in structured environments, dealing with data organization, document compliance, and customer service, developing a solid foundation in organization and attention to technical details."
    }
  ]
};
