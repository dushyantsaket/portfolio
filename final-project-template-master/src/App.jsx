import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Skills from './pages/skills/Skills'
import Projects from './pages/projects/Projects'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
