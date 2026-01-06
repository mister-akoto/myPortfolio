import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import React from 'react'

const HeroSection = () => {
  return (
    <main id='hero' className='w-full min-h-screen flex flex-col justify-center items-center space-y-6'>
      <div className='flex flex-col justify-center items-center space-y-4 mx-8'>
        <h2 className='text-2xl md:text-3xl text-primary'> Hi, I'm Akoto Etornam</h2>
        <h3 className='text-xl md:text-2xl text-foreground'>Frontend Developer</h3>
        <p className='max-w-2xl tracking-tight text-base md:text-lg'>I craft beautiful, responsive web experiences with modern technologies. Passionate about clean code, intuitive design, and creating digital products that make a difference.</p>
      </div>

      <div className='flex justify-center items-center space-x-4 '>
        <a href="" className='bg-primary hover:bg-primary/70 rounded-md py-3 px-4 text-white hover:scale-110 transition-all delay-100'>View My Work</a>
        <a href="" className='border border-border rounded-md py-3 px-4 hover:scale-110 transition-all delay-300'>Contact Me</a>
      </div>
      <div className='flex gap-4 justify-center items-center'>
        <a href="" className='hover:scale-105 transition-all delay-100'><Github size={30}/></a>
        <a href="" className='hover:scale-105 transition-all delay-100'><Linkedin size={30}/></a>
        <a href="" className='hover:scale-105 transition-all delay-100'><Mail size={30}/></a>  
      </div>
        <div className='animate-bounce absolute top-11/12 '>
          <ArrowDown size={30} />
        </div>
    </main>
  )
}

export default HeroSection
