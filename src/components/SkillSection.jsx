import React from 'react'
const skills = [
  {
    name: 'HTML/CSS',
    category: 'Frontend',
    knowledgePercent: 85,
  },
  {
    name: 'Javascript',
    category: 'Frontend',
    knowledgePercent: 75,
  },
  {
    name: 'Tailwind CSS',
    category: 'Frontend',
    knowledgePercent: 75,
  },
  {
    name: 'React',
    category: 'Frontend',
    knowledgePercent: 75,
  },
  {
    name: 'Git/GitHub',
    category: 'Tools',
    knowledgePercent: 70,
  },
  {
    name: 'Figma',
    category: 'Tools',
    knowledgePercent: 50,
  },
  {
    name: 'VS Code',
    category: 'Tools',
    knowledgePercent: 90,
  },
]

const SkillSection = () => {
  return (
    <section id='skills' className='w-full min-h-screen flex flex-col justify-center items-center space-y-4'>
      <div className='mx-8 flex flex-col justify-center items-center'>
        <h2 className=' text-2xl md:text-3xl text-primary my-4 '>Skills & Technologies</h2>
        <p className='max-w-2xl tracking-tight text-base md:text-lg'>Technologies and tools I work with to bring ideas to life</p>
      </div>
      <div className='flex flex-col md:flex-row md:flex-wrap gap-4 items-center justify-center content-center '>
     {skills.map((skill)=>(
        <div className='mx-8 border rounded-lg w-64 p-4 hover:scale-105 cursor-pointer transition-all delay-100'>
          <h4 className='text-lg font-medium'>{skill.name}</h4>
          <div className='flex justify-between items-center gap-4'>
          <p className='text-sm text-foreground/50 mb-2'>{skill.category}</p>
          <p className='text-xs text-foreground/50'>{skill.knowledgePercent}%</p>
          </div>
            <div className='bg-primary h-2 rounded-full' style={{width:`${skill.knowledgePercent}%`}}/>
        </div>
     )) 
    }
    </div>
    </section>
  )
}

export default SkillSection
