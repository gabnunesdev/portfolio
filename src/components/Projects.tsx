import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Projects: React.FC = () => {
  const { t } = useLanguage();
  const { projects } = t.data;

  return (
    <section id="projects" className="py-20 bg-surface/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">{t.projects.title}</h2>
          <div className="w-16 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-background rounded-2xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
            >
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary">
                    {/* Folder icon removed as per instruction's import list */}
                  </div>
                  <div className="flex gap-3">
                    {project.repoUrl && (
                      <a 
                        href={project.repoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-text/60 hover:text-primary transition-colors"
                        title="View Code"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a 
                        href={project.demoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-text/60 hover:text-secondary transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-text mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-text/60 mb-6 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 text-xs font-medium text-primary bg-primary/10 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
