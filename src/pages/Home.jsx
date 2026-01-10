import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import SkillSection from '../components/SkillSection'
import ProjectSection from '../components/ProjectSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Header/>
      <main>
      <HeroSection/>
      <AboutSection />
      <SkillSection/>
      <ProjectSection />
      <ContactSection/>
      </main>
      <footer>
        <Footer/>
      </footer>
      
    </div>
  )
}

export default Home
