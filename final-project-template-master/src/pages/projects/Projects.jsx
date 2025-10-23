import React from 'react'
import './projects.css'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      image: "🛒",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "📋",
      technologies: ["Vue.js", "Express.js", "Socket.io", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather application with location-based forecasts, interactive maps, and historical data visualization.",
      image: "🌤️",
      technologies: ["React", "TypeScript", "Chart.js", "OpenWeather API"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 4,
      title: "Social Media Analytics",
      description: "A comprehensive analytics dashboard for social media metrics with data visualization and reporting capabilities.",
      image: "📊",
      technologies: ["Next.js", "Python", "D3.js", "AWS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website with smooth animations, dark mode, and contact form integration.",
      image: "💼",
      technologies: ["React", "CSS3", "Framer Motion", "Netlify"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 6,
      title: "Chat Application",
      description: "A real-time chat application with group messaging, file sharing, and emoji reactions built with modern web technologies.",
      image: "💬",
      technologies: ["React", "Socket.io", "Node.js", "Redis"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ]

  return (
    <div className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">Some of my recent work and side projects</p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-card ${project.featured ? 'featured' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-image">
                <div className="project-icon">{project.image}</div>
                {project.featured && <div className="featured-badge">Featured</div>}
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a href={project.liveUrl} className="project-link live">
                    <span>🌐</span> Live Demo
                  </a>
                  <a href={project.githubUrl} className="project-link github">
                    <span>📁</span> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="projects-cta">
          <h3>Interested in working together?</h3>
          <p>I'm always open to discussing new projects and opportunities</p>
          <button className="cta-button">Get In Touch</button>
        </div>
      </div>
    </div>
  )
}

export default Projects
