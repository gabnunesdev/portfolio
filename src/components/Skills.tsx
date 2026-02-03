import React from 'react';
import { skills } from '../data/skills';

export const Skills: React.FC = () => {
  // Group skills by category
  const categories = skills.reduce((acc, skill) => {
    const category = skill.category || 'Other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <section id="skills" className="py-20 bg-background relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Technical Skills</h2>
          <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(categories).map(([category, categorySkills]) => (
            <div 
              key={category} 
              className="bg-surface/50 border border-white/5 rounded-2xl p-6 hover:border-primary/20 transition-all hover:bg-surface/80"
            >
              <h3 className="text-xl font-semibold text-primary mb-6 border-b border-white/5 pb-2">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {categorySkills.map((skill) => (
                  <span 
                    key={skill.name}
                    className="px-3 py-1.5 bg-white/5 hover:bg-white/10 text-text/80 text-sm rounded-lg transition-colors border border-white/5"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
