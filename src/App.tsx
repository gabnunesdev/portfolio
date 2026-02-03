import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-text font-sans selection:bg-primary/30">
      <Header />
      
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
      </main>

      <Footer />
    </div>
  );
}

export default App;
