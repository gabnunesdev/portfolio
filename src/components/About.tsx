import React from 'react';
import { profile } from '../data/profile';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-start gap-12">
          
          {/* Decorative / Image placeholder side */}
          <div className="w-full md:w-1/3 relative">
             <div className="aspect-square rounded-2xl overflow-hidden bg-surface/50 border border-white/5 flex items-center justify-center relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-50 group-hover:opacity-100 transition-opacity" />
                <span className="text-6xl font-bold text-white/5 select-none">GN</span>
             </div>
             {/* Decorative elements */}
             <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/20 blur-2xl rounded-full" />
             <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/10 blur-2xl rounded-full" />
          </div>

          {/* Content side */}
          <div className="w-full md:w-2/3">
             <h2 className="text-3xl md:text-4xl font-bold text-text mb-2">Sobre Mim</h2>
             <h3 className="text-xl text-primary font-medium mb-6">
                {profile.about[0]}
             </h3>
             
             <div className="space-y-4 text-text/70 leading-relaxed text-lg">
                {profile.about.slice(1).map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};
