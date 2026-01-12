import React from 'react'

const Footer = () => {
  const year = new Date()


  return (
    <div className='text-center p-6 text-sm text-foreground/50'>
      <p>  
      &copy;{year.getFullYear()}, Akoto Etornam Tutu. Built with React and Tailwind Css
      </p>
      
    </div>
  )
}

export default Footer
