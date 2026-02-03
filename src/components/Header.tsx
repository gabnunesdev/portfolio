import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.about, href: '#about' },
    { name: t.nav.skills, href: '#skills' },
    { name: t.nav.projects, href: '#projects' },
    { name: t.nav.education, href: '#education' },
    { name: t.nav.experience, href: '#experience' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo (Left) */}
          <a href="#" className="flex items-center">
            <img src="/gabdev-logo.svg" alt="Gabriel Nunes Logo" className="h-10 w-auto hover:opacity-80 transition-opacity" />
          </a>

          {/* Nav (Center) */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-text/60 hover:text-primary transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions (Right) */}
          <div className="hidden md:flex items-center gap-4">
             {/* Language Toggle */}
             <button 
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 hover:border-white/20 transition-all text-xs font-medium text-text/80 hover:bg-white/5"
             >
                <span className={language === 'pt' ? 'text-primary' : 'text-text/60'}>PT</span>
                <span className="text-white/20">|</span>
                <span className={language === 'en' ? 'text-primary' : 'text-text/60'}>EN</span>
             </button>

             {/* Contact Button */}
             <a 
                href="#contact" 
                className="px-5 py-2 bg-primary hover:bg-primary/90 text-white text-sm font-semibold rounded-full transition-all hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
             >
                {t.nav.contact}
             </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-text hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-white/10 animate-in slide-in-from-top-5">
           <nav className="flex flex-col p-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-medium text-text/80 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
               <button 
                  onClick={toggleLanguage}
                  className="flex items-center gap-2 text-sm text-text/80"
               >
                  <Globe size={16} />
                  {language === 'pt' ? 'Português' : 'English'}
               </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
