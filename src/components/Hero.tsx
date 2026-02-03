import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../data/profile';
import { useLanguage } from '../contexts/LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="pt-32 pb-20 md:pt-48 md:pb-32 flex items-center justify-center relative overflow-hidden bg-grid">
      {/* Radial Gradient overlay for grid */}
      <div className="absolute inset-0 bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)] pointer-events-none" />

      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/20 blur-[120px] rounded-full opacity-30 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-text/60 text-xs font-medium tracking-wide uppercase">{t.hero.available}</span>
        </div>
        
        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-2 tracking-tight">
          {profile.name.split(' ')[0]}
        </h1>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight bg-clip-text text-transparent bg-linear-to-r from-primary to-secondary">
          {profile.name.split(' ').slice(1).join(' ')}
        </h1>
        
        {/* Role */}
        <h2 className="text-lg md:text-xl font-mono text-text/60 mb-6">
          {t.hero.roleSubtitle}
        </h2>

        {/* Tech Stack Pills (Reference style) */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 opacity-80">
            <span className="text-primary font-medium">Java</span>
            <span className="text-text/40">•</span>
            <span className="text-primary font-medium">Spring Boot</span>
            <span className="text-text/40">•</span>
            <span className="text-primary font-medium">AWS</span>
            <span className="text-text/40">•</span>
            <span className="text-primary font-medium">Microservices</span>
        </div>
        
        {/* Intro Text */}
        <p className="text-lg text-text/60 mb-10 max-w-2xl mx-auto leading-relaxed">
           {profile.summary}
        </p>
        
        {/* Application Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
          <a 
            href="#projects" 
            className="w-full md:w-auto px-8 py-3.5 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
          >
            {t.hero.buttons.projects}
            <ArrowRight size={20} />
          </a>
          
          <a 
            href="#contact" 
            className="w-full md:w-auto px-8 py-3.5 bg-white/5 border border-white/10 hover:border-primary/50 text-text hover:text-white rounded-lg font-semibold transition-all hover:bg-white/10"
          >
            {t.hero.buttons.contact}
          </a>
        </div>

        {/* Social Icons (Reference Style: Square buttons below main actions) */}
        <div className="flex items-center justify-center gap-4">
            {profile.socials.map((social) => {
               // Simple icon mapping since we are inside component
               const Icon = social.icon === 'Github' ? Github : social.icon === 'Linkedin' ? Linkedin : Mail;
               return (
                  <a 
                     key={social.platform}
                     href={social.url}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="p-3 bg-white/5 border border-white/10 rounded-lg text-text/60 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all hover:-translate-y-1"
                  >
                     <Icon size={20} />
                  </a>
               )
            })}
        </div>

      </div>
    </section>
  );
};
