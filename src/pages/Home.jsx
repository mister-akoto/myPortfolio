import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import SkillSection from '../components/SkillSection'
import ProjectSection from '../components/ProjectSection'

const Home = () => {
  return (
    <div>
      <Header/>
      <main>
      <HeroSection/>
      <AboutSection />
      <SkillSection/>
      <ProjectSection />
      </main>
      
    </div>
  )
}

export default Home
