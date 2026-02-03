import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { education, certifications } from '../data/education';
import { useLanguage } from '../contexts/LanguageContext';

export const Education: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="education" className="py-20 bg-background relative overflow-hidden">
        {/* Background Splashes */}
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-secondary/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-2 block">
            {t.education.sectionTitle}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            {t.education.title.split('&')[0]} <span className="text-primary">&</span> {t.education.title.split('&')[1]}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Education Column */}
          <div className="bg-surface/30 border border-white/5 rounded-3xl p-8 hover:border-primary/20 transition-all">
            <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                    <GraduationCap size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">{t.education.educationTitle}</h3>
            </div>

            <div className="space-y-8">
                {education.map((edu, index) => (
                    <div key={index} className="relative pl-6 border-l border-white/10 last:border-0">
                        <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background" />
                        
                        <span className="text-primary text-sm font-mono mb-1 block">{edu.period}</span>
                        <h4 className="text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors">
                            {edu.degree}
                        </h4>
                        <p className="text-text/60">{edu.institution}</p>
                        <span className="inline-block mt-2 text-xs px-2 py-0.5 rounded bg-white/5 text-text/40">
                            {edu.status}
                        </span>
                    </div>
                ))}
            </div>
          </div>

          {/* Certifications Column */}
          <div className="bg-surface/30 border border-white/5 rounded-3xl p-8 hover:border-secondary/20 transition-all">
             <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-secondary/10 rounded-xl text-secondary">
                    <Award size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">{t.education.certificationsTitle}</h3>
            </div>

            <div className="space-y-8">
                {certifications.map((cert, index) => (
                    <div key={index} className="relative pl-6 border-l border-white/10 last:border-0">
                        <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full bg-secondary ring-4 ring-background" />
                        
                        <span className="text-secondary text-sm font-mono mb-1 block">{cert.date}</span>
                        <h4 className="text-lg font-bold text-white mb-1">
                            {cert.title}
                        </h4>
                        <p className="text-text/60">{cert.institution}</p>
                    </div>
                ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
