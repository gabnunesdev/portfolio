import type { Profile } from '../types';

interface ProfileData {
  pt: Profile;
  en: Profile;
}

const commonSocials = [
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/gabrielnunes-dev/",
    icon: "Linkedin"
  },
  {
    platform: "GitHub",
    url: "https://github.com/gabnunesdev",
    icon: "Github"
  },
  {
    platform: "Email",
    url: "mailto:gabrielnunesdev@outlook.com",
    icon: "Mail"
  }
];

export const profileData: ProfileData = {
  pt: {
    name: "Gabriel Nunes Silva",
    role: "Desenvolvedor Full Stack",
    summary: "Desenvolvedor Full Stack (React/Node) com background em Design Gráfico, unindo sensibilidade visual à arquitetura de software. Focado em código limpo, interfaces de alta performance e na entrega de soluções escaláveis orientadas a resultados.",
    about: [
      "Transformando visão criativa em engenharia de software",
      "Sou um Desenvolvedor Full Stack com sólida trajetória no design visual, agora focado na construção de aplicações web modernas, escaláveis e centradas no usuário. Minha experiência anterior como Designer me confere um diferencial estratégico: a capacidade de construir interfaces impecáveis (UI) com total compreensão da experiência do usuário (UX), sem sacrificar a robustez técnica do código.",
      "Tenho forte compromisso com Clean Code, Componentização e Modularidade, garantindo que o software seja sustentável e de fácil manutenção. Minha trajetória transita entre a criatividade estratégica e a lógica de programação, permitindo uma comunicação fluida entre design e desenvolvimento.",
      "Atualmente, foco meu domínio técnico no ecossistema JavaScript/TypeScript (React, Node.js e Tailwind CSS), explorando arquiteturas de APIs, bancos de dados relacionais e práticas modernas de deploy e versionamento."
    ],
    socials: commonSocials
  },
  en: {
    name: "Gabriel Nunes Silva",
    role: "Full Stack Developer",
    summary: "Full Stack Developer (React/Node) with a background in Graphic Design, bridging visual sensitivity with software architecture. Focused on clean code, high-performance interfaces, and delivering scalable, result-oriented solutions.",
    about: [
      "Transforming creative vision into software engineering",
      "I am a Full Stack Developer with a solid background in visual design, now focused on building modern, scalable, and user-centric web applications. My previous experience as a Designer gives me a strategic advantage: the ability to build impeccable interfaces (UI) with a full understanding of user experience (UX), without sacrificing technical robustness.",
      "I have a strong commitment to Clean Code, Componentization, and Modularity, ensuring that software is sustainable and easy to maintain. My journey transitions between strategic creativity and programming logic, allowing fluid communication between design and development.",
      "Currently, I focus my technical expertise on the JavaScript/TypeScript ecosystem (React, Node.js, and Tailwind CSS), exploring API architectures, relational databases, and modern deployment and versioning practices."
    ],
    socials: commonSocials
  }
};
