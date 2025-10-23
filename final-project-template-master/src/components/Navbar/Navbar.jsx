import React from 'react'
import './nav.css'

const Navbar = () => {

    ////used for smooth scrolling to sections
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <nav className='navbar'>
      <div className="nav-brand">
        <h3>Portfolio</h3>
      </div>
      <div className="nav-links">
        <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
        <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
        <button onClick={() => scrollToSection('skills')} className="nav-link">Skills</button>
        <button onClick={() => scrollToSection('projects')} className="nav-link">Projects</button>
      </div>
    </nav>
  )
}

export default Navbar
