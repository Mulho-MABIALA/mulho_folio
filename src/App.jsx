import { useState, useEffect } from 'react'
import './App.css'
import './gold-theme.css'
import './theme.css'
import './accent-overrides.css'
import { LanguageProvider } from './contexts/LanguageContext'
import { ThemeProvider } from './contexts/ThemeContext'
import { ColorProvider } from './contexts/ColorContext'
import LoadingScreen from './components/LoadingScreen.jsx'
import BackgroundAnimation from './components/BackgroundAnimation.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Navbar from './components/navabar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Education from './components/Education.jsx'
import MernStack from './components/MernStack.jsx'
import Projects from './components/Projects.jsx'
import Testimonials from './components/Testimonials.jsx'
import Blog from './components/Blog.jsx'
import Stats from './components/Stats.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Chatbot from './components/Chatbot.jsx'
import CustomCursor from './components/CustomCursor.jsx'
import OpenToWork from './components/OpenToWork.jsx'
import EasterEgg from './components/EasterEgg.jsx'
import Terminal from './components/Terminal.jsx'


function AppContent() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Désactiver le clic droit pour inspecter le code
    const handleContextMenu = (e) => {
      e.preventDefault();
      return false;
    };

    // Désactiver également les raccourcis clavier pour ouvrir les devtools
    const handleKeyDown = (e) => {
      // F12 - DevTools
      if (e.key === 'F12') {
        e.preventDefault();
        return false;
      }
      // Ctrl+Shift+I ou Cmd+Option+I - Inspect
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'I') {
        e.preventDefault();
        return false;
      }
      // Ctrl+Shift+C ou Cmd+Option+C - Inspect Element
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'C') {
        e.preventDefault();
        return false;
      }
      // Ctrl+Shift+J ou Cmd+Option+J - Console
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'J') {
        e.preventDefault();
        return false;
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Si la page est en train de charger, afficher l'écran de chargement
  if (loading) {
    return <LoadingScreen onLoadingComplete={() => setLoading(false)} />
  }

  // Une fois le chargement terminé, afficher le portfolio
  return (
    <>
      <CustomCursor />
      <OpenToWork />
      <EasterEgg />
      <Terminal />
      <BackgroundAnimation />
      <ScrollToTop />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <MernStack />
      <Projects />
      <Testimonials />
      <Blog />
      <Stats />
      <Contact />
      <Footer />
      <Chatbot />
    </>
  )
}

function App() {
  return (
    <ColorProvider>
      <ThemeProvider>
        <LanguageProvider>
          <AppContent />
        </LanguageProvider>
      </ThemeProvider>
    </ColorProvider>
  )
}

export default App
