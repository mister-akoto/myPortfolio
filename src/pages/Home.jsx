import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'

const Home = () => {
  return (
    <div>
      <Header/>
      <main>
      <HeroSection/>
      <AboutSection />
      </main>
      
    </div>
  )
}

export default Home
