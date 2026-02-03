import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';

import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-text font-sans selection:bg-primary/30">
        <Header />
        
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
