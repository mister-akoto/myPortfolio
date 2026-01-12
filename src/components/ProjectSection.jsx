import { ExternalLink, Github } from 'lucide-react'
import React from 'react'

const projects = [
  {
    name: 'Rest Countries',
    image: 'projects/rest countries.jpg',
    description: 'A webpage that fetches and display data about countries, their capital and their border countries too!',
    githubLink: 'https://github.com/mister-akoto/restcountries',
    demoLink:'https://countriesweb1.netlify.app/',
    tools: ['React.js', 'HTML/CSS']

  },
  {
    name: 'Trivia App',
    image: 'projects/trivia.jpg',
    description: 'A general knowledge trivia quiz, from music to movie trivia questions! ',
    githubLink: 'https://github.com/mister-akoto/Trivia-App',
    demoLink: 'https://illustrious-fudge-279012.netlify.app/',
    tools: ['React.js', 'HTML/CSS']

  }
]

const ProjectSection = () => {
  return (
    <section id='projects' className='min-h-screen flex flex-col justify-center items-center text-center my-10'>
      <div className='space-y-2'>
        <h2 className='text-2xl md:text-3xl text-primary'>Featured Projects</h2>
        <p className='max-w-2xl tracking-tight text-base md:text-lg'>A selection of my recent works and personal projects</p>
      </div>

      <div className='flex gap-10 flex-wrap justify-center items-center content-center w-full my-4 '>
        {
          projects.map((project)=>(
            <div className='w-80 border border-border h-100 overflow-hidden shadow-md rounded-lg '>
              <div className='w-full bg-amber-900 overflow-hidden'>
                <img src={project.image} className='w-full hover:scale-110 h-full transition-all delay-100' />
              </div>
              <div className='text-left p-4 space-y-4 flex flex-col'>
                <h3 className=' text-lg font-bold'>{project.name}</h3>
                <p className='text-foreground/60 grow min-h-18'>{project.description}</p>
                <div className='flex gap-2 '>
                {project.tools.map((tool)=>(
                  <div className='border rounded-full p-2 '>
                    {tool}
                  </div>
                ))}
                </div>
                <div className='flex gap-4'>
                  <a href={project.githubLink}>
                  <Github size={30} className='text-foreground hover:scale-105 transition-all delay-105 cursor-pointer'/>
                  </a>
                  <a href={project.demoLink}>
                    <ExternalLink size={30} className='text-foreground hover:scale-105 transition-all delay-105 cursor-pointer'/>
                    </a>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default ProjectSection
