import React from 'react'
import './about.css'

const About = () => {
  return (
    <div className="about-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <div className="about-intro">
              <h3>Hello! I'm a passionate developer</h3>
              <p>
                I'm a creative and detail-oriented developer with a passion for building 
                exceptional digital experiences. With expertise in modern web technologies, 
                I love turning complex problems into simple, beautiful, and intuitive solutions.
              </p>
            </div>
            
            <div className="about-details">
              <div className="detail-item">
                <div className="detail-icon">🎯</div>
                <div className="detail-content">
                  <h4>Mission</h4>
                  <p>Creating user-centered solutions that make a difference</p>
                </div>
              </div>
              
              <div className="detail-item">
                <div className="detail-icon">🚀</div>
                <div className="detail-content">
                  <h4>Vision</h4>
                  <p>Pushing the boundaries of what's possible with technology</p>
                </div>
              </div>
              
              <div className="detail-item">
                <div className="detail-icon">💡</div>
                <div className="detail-content">
                  <h4>Values</h4>
                  <p>Innovation, quality, and continuous learning</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">3+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            
            <div className="stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
