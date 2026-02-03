import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../data/profile';

const iconMap: Record<string, React.FC<any>> = {
  Github: Github,
  Linkedin: Linkedin,
  Mail: Mail
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-surface/50 border-t border-white/5 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-text mb-2">{profile.name}</h3>
            <p className="text-text/60 text-sm max-w-md">
              Construindo experiências digitais memoráveis com código limpo e design intuitivo.
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            {profile.socials.map((social) => {
              const Icon = social.icon && iconMap[social.icon] ? iconMap[social.icon] : null;
              return (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text/60 hover:text-primary transition-colors transform hover:scale-110"
                  aria-label={social.platform}
                >
                  {Icon && <Icon size={24} />}
                </a>
              );
            })}
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/5 text-center text-text/40 text-sm">
          <p>© {new Date().getFullYear()} Gabriel Nunes Silva. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
