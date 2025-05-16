import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills'; 
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <div className="fixed-space-background">
        {/* Scanline effect */}
        <div className="scanline"></div>
        {/* Glitch effect */}
        <div className="glitch"></div>
      </div>
      <Navbar />
      <Hero />
      <About />
      <Skills /> 
      <Projects />
      <Contact />
    </>
  );
}

export default App;
