import { useState } from 'react'
import './App.css'
import './gold-theme.css'
import LoadingScreen from './components/LoadingScreen.jsx'
import BackgroundAnimation from './components/BackgroundAnimation.jsx'
import Navbar from './components/navabar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import MernStack from './components/MernStack.jsx'
import Projects from './components/Projects.jsx'
import Stats from './components/Stats.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Input from './components/input.jsx'

function App() {
  const [loading, setLoading] = useState(true)

  // Si la page est en train de charger, afficher l'écran de chargement
  if (loading) {
    return <LoadingScreen onLoadingComplete={() => setLoading(false)} />
  }

  // Une fois le chargement terminé, afficher le portfolio
  return (
    <>
      <BackgroundAnimation />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <MernStack />
      <Projects />
      <Stats />
      <Contact />
      <Footer />

      {/* <Input /> */}
    </>
  )
}

export default App
