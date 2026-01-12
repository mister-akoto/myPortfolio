import { Menu, Moon, Sun } from 'lucide-react'
import React, { useEffect } from 'react'
import { useState } from 'react'

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isMenuOpen, setisMenuOpen] = useState(false)
  
  
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
    if(storedTheme === "dark"){
      document.documentElement.classList.add('dark')
      setIsDarkMode(true)
    }else{
      document.documentElement.classList.remove('dark')
      setIsDarkMode(false) 
    }
  })
  
  

  return (
    <header className='flex flex-col sm:flex-row justify-between items-center px-6 py-2 backdrop-blur-md fixed w-full z-40 shadow-md'>
      <div className='flex justify-between w-full'>
      <h1 className='text-2xl  font-bold text-primary'>Akoto Etornam</h1>
      <Menu size={24} className='text-primary sm:hidden' onClick={()=>setisMenuOpen(!isMenuOpen)} />
      </div>

      {/* desktop view */}
     <div className='sm:flex gap-8 hidden' >
        <nav className='text-lg text-primary ' >
          <ul className='flex items-center space-x-4  '>
            <li className='hover:text-foreground'><a href="#hero">Home</a></li>
            <li className='hover:text-foreground'><a href="#about">About</a></li>
            <li className='hover:text-foreground'><a href="#skills">Skills</a></li>
            <li className='hover:text-foreground'><a href="#projects">Projects</a></li>
            <li className='hover:text-foreground'><a href="#contact">Contact</a></li>
          </ul>
        </nav>
       {  isDarkMode?
         <Sun size={24} className='text-yellow-300 cursor-pointer' onClick={toggleTheme}/>:
         <Moon size={24} className='cursor-pointer text-blue-900' onClick={toggleTheme}/>
       }
      </div>
 
      {/*  mobile view */}
      {
        isMenuOpen?

        <div className='flex flex-col gap-8 sm:hidden w-full items-center justify-center' >
        <nav className='text-lg text-primary w-full ' >
          <ul className='flex flex-col items-center space-x-4 w-full'>
            <li className='hover:text-foreground mx-auto'><a href="#hero">Home</a></li>
            <li className='hover:text-foreground mx-auto'><a href="about">About</a></li>
            <li className='hover:text-foreground mx-auto'><a href="skills">Skills</a></li>
            <li className='hover:text-foreground mx-auto'><a href="projects">Projects</a></li>
            <li className='hover:text-foreground mx-auto'><a href="contact">Contact</a></li>
       {  isDarkMode?<div className='flex mt-2 gap-2 mx-auto' onClick={toggleTheme}>
         <Sun size={24} className='text-yellow-300 cursor-pointer' />
         <p>Light Mode</p>
         </div> :
         <div className='flex mt-2 gap-2 mx-auto ' onClick={toggleTheme}>
         <Moon size={24} className='cursor-pointer text-blue-900' />
         <p>Dark Mode</p>
         </div>
       }
          </ul>
        </nav>
      </div>: ""
        }
      
    </header>
  )
}

export default Header
