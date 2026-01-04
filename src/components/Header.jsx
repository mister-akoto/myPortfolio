import { Moon, Sun } from 'lucide-react'
import React, { useEffect } from 'react'
import { useState } from 'react'

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  
  function toggleTheme(){
    setIsDarkMode(!isDarkMode)
    if(!isDarkMode){
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme','dark')
    }else{
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme','light')
    }
  }

  useEffect(()=>{
    const storedTheme = localStorage.getItem('theme')
    if(storedTheme ==="dark"){
      document.documentElement.classList.add('dark')
      setIsDarkMode(true)
    }else{
      document.documentElement.classList.remove('dark')
      setIsDarkMode(false) 
    }
  })
  
  

  return (
    <header className='flex justify-between items-center px-6 py-2 backdrop-blur-md '>
      <h1 className='text-2xl font-bold text-primary'>Akoto Etornam</h1>

      <div className='flex gap-8' >
        <nav className='text-lg text-primary ' >
          <ul className='flex items-center space-x-4  '>
            <li className='hover:text-foreground'><a href="#hero">Home</a></li>
            <li className='hover:text-foreground'><a href="about">About</a></li>
            <li className='hover:text-foreground'><a href="skills">Skills</a></li>
            <li className='hover:text-foreground'><a href="projects">Projects</a></li>
            <li className='hover:text-foreground'><a href="contact">Contact</a></li>
          </ul>
        </nav>
       {  isDarkMode?
         <Sun size={24} className='text-yellow-300 cursor-pointer' onClick={toggleTheme}/>:
         <Moon size={24} className='cursor-pointer text-blue-900' onClick={toggleTheme}/>
       }
      </div>
      
    </header>
  )
}

export default Header
