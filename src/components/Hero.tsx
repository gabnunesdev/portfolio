import React from 'react';
import { ArrowRight } from 'lucide-react';
import { profile } from '../data/profile';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/20 blur-[120px] rounded-full opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-secondary/10 blur-[100px] rounded-full opacity-30 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <div className="inline-block px-3 py-1 mb-6 border border-primary/30 rounded-full bg-primary/10 backdrop-blur-sm">
          <span className="text-primary text-sm font-medium tracking-wide">Available for work</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-text mb-6 tracking-tight">
          Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">{profile.name}</span>
        </h1>
        
        <h2 className="text-2xl md:text-4xl font-semibold text-text/80 mb-8 max-w-3xl mx-auto">
          {profile.role}
        </h2>
        
        <p className="text-lg md:text-xl text-text/60 mb-12 max-w-2xl mx-auto leading-relaxed">
          {profile.summary}
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <a 
            href="#projects" 
            className="group px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-full font-semibold transition-all flex items-center gap-2 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
          >
            View Projects
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a 
            href="mailto:gabrielnunesdev@outlook.com" 
            className="px-8 py-3 bg-transparent border border-white/10 hover:border-primary/50 text-text hover:text-primary rounded-full font-semibold transition-all hover:bg-white/5"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};
