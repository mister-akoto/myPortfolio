import { Code, LucideComputer, Smartphone } from 'lucide-react'
import React from 'react'

const AboutSection = () => {
  return (
    <section id='about' className='w-full min-h-screen flex flex-col justify-center items-center space-y-6'>
      <div className='flex flex-col justify-center items-center mx-8'>
        <h2 className='text-2xl md:text-3xl text-primary my-4'> About Me</h2>
        <p className='max-w-2xl tracking-tight text-base md:text-lg'>I'm a frontend developer with 1+ years of experience building web applications. I specialize in React, TailwindCss, with a passion for creating seamless user experiences.</p>
      </div>

      <div className='flex flex-col md:flex-row gap-8 mx-8 '>
        <div className=' border border-border rounded-lg p-6 bg-card hover:scale-105 transition-all delay-100 shadow-md space-y-2'>
          <Code size={40} className='bg-primary rounded-md p-1 text-white '/>
          <h3 className='font-medium text-lg'>Clean Code</h3>
          <p className='max-w-md'>Writing maintainable, scalable code following best practices and design patterns.</p>
        </div>
        <div className='border border-border rounded-lg p-6 bg-card hover:scale-105 transition-all delay-100 shadow-md space-y-2'>
          <LucideComputer size={40} className='bg-primary rounded-md p-1 text-white '/>
          <h3 className='font-medium text-lg'>UI/UX</h3>
          <p className='max-w-md'>Crafting beautiful interfaces with attention to detials and user experience.</p>
        </div>
        <div className='border border-border rounded-lg p-6 bg-card hover:scale-105 transition-all delay-100 shadow-md space-y-2'>
          <Smartphone size={40} className='bg-primary rounded-md p-1 text-white '/>
          <h3 className='font-medium text-lg'>Responsive</h3>
          <p className='max-w-md'>Building applications that work seamlessly across all devices and screen sizes.</p>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
