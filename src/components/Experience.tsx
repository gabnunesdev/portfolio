import React from 'react';
import { Briefcase } from 'lucide-react';
import { experiences } from '../data/experience';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Professional Experience</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 md:pl-0">
                {/* Timeline Line (Desktop) */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2"></div>
                
                <div className={`flex flex-col md:flex-row items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} gap-8 group`}>
                  
                  {/* Timeline Dot (Desktop) */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-background border-2 border-primary rounded-full z-10 group-hover:scale-125 transition-transform"></div>

                  {/* Content Card */}
                  <div className="w-full md:w-[calc(50%-2rem)]">
                     <div className="bg-surface/30 p-6 rounded-2xl border border-white/5 hover:border-primary/20 transition-all hover:bg-surface/50 group-hover:shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                          <h3 className="text-lg font-bold text-primary flex items-center gap-2">
                            <Briefcase size={16} />
                            {exp.company}
                          </h3>
                             <span className="px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-text/60">
                            {exp.period}
                          </span>
                        </div>
                        
                        <h4 className="text-base font-semibold text-text mb-3">
                          {exp.role}
                        </h4>
                        
                        <p className="text-text/60 text-sm leading-relaxed">
                          {exp.description}
                        </p>
                     </div>
                  </div>

                  {/* Empty space for alternate side */}
                  <div className="hidden md:block w-full md:w-[calc(50%-2rem)]"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
