import { Github, Linkedin, Mail } from 'lucide-react'
import React from 'react'

const ContactSection = () => {
  return (
        <section id='contact' className='w-full min-h-screen flex flex-col justify-center items-center space-y-6'>
      <div className='flex flex-col justify-center items-center mx-8'>
        <h2 className='text-2xl md:text-3xl text-primary my-4'> Get In Touch</h2>
        <p className='max-w-2xl tracking-tight text-base md:text-lg text-center'>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!</p>
      </div>

      <div className='flex flex-col md:flex-row gap-8 mx-8 w-4/5 '>
        <a target='_black' href='mailto:etornamtutuakoto@gmail.com' className=' border border-border rounded-lg p-6 bg-card hover:scale-105 transition-all delay-100 shadow-md space-y-2 w-full flex flex-col justify-center items-center '>
          <Mail size={40} className='bg-primary rounded-md p-1 text-white '/>
          <h3 className='font-medium text-lg'>Email</h3>
          <p>etornamtutuakoto@gmail.com.</p>
        </a>
        <a target='_blank' href='https://github.com/mister-akoto' className='border border-border rounded-lg p-6 bg-card hover:scale-105 transition-all delay-100 shadow-md space-y-2 w-full flex flex-col justify-center items-center '>
          <Github size={40} className='bg-primary rounded-md p-1 text-white '/>
          <h3 className='font-medium text-lg'>Github</h3>
          <p >@mister.akoto</p>
        </a>
        <a target='_blank' href='https://www.linkedin.com/in/akoto-etornam/' className='border border-border rounded-lg p-6 bg-card hover:scale-105 transition-all delay-100 shadow-md space-y-2 w-full flex flex-col justify-center items-center '>
          <Linkedin size={40} className='bg-primary rounded-md p-1 text-white '/>
          <h3 className='font-medium text-lg'>LinkedIn</h3>
          <p >/in/akoto-etornam/</p>
        </a>
      </div>
      <a href="mailto:etornamtutuakoto@gmail.com" className='bg-primary rounded-xl p-4 hover:bg-primary text-white hover:scale-105 transition-all delay-100'>
       Send Me A Message
      </a>
    </section>
  )
}

export default ContactSection
