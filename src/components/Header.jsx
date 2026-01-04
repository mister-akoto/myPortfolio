import { Sun } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <header className='bg-red-600 flex justify-between items-center px-6 py-2 backdrop-blur-md'>
      <h1 className='text-2xl font-bold'>Akoto Etornam</h1>

      <div className='flex gap-8' >
        <nav className='text-lg'>
          <ul className='flex items-center space-x-4'>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </nav>
        <Sun size={24}/>
      </div>
      
    </header>
  )
}

export default Header
