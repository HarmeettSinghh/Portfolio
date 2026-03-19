import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

// Sections
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Certificates from './pages/Certificates';
import AchievementsEvents from './pages/AchievementsEvents';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-[var(--color-brand-bg)] min-h-screen text-white font-sans selection:bg-[var(--color-brand-creme)] selection:text-black">
      <CustomCursor />
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[var(--color-brand-creme)] origin-left z-[60]"
        style={{ scaleX }}
      />
      
      <Navbar />

      <main className="flex flex-col">
        <Home />
        <About />
        <Resume />
        <Education />
        <Skills />
        <Projects />
        <Certificates />
        <AchievementsEvents />
        {/* <Experience /> */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
