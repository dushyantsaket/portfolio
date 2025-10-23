import React from 'react'
import './footer.css'

const Footer = () => {
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
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Portfolio</h3>
            <p className="footer-description">
              Creating exceptional digital experiences with passion and precision.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="LinkedIn">
                <span>💼</span>
              </a>
              <a href="#" className="social-link" aria-label="GitHub">
                <span>📁</span>
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <span>🐦</span>
              </a>
              <a href="#" className="social-link" aria-label="Email">
                <span>📧</span>
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul className="footer-links">
              <li><button onClick={() => scrollToSection('home')} className="footer-link">Home</button></li>
              <li><button onClick={() => scrollToSection('about')} className="footer-link">About</button></li>
              <li><button onClick={() => scrollToSection('skills')} className="footer-link">Skills</button></li>
              <li><button onClick={() => scrollToSection('projects')} className="footer-link">Projects</button></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">Contact Info</h4>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <span>your.email@example.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>Your City, Country</span>
              </div>
            </div>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-subtitle">Newsletter</h4>
            <p className="newsletter-text">Stay updated with my latest projects and insights.</p>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="newsletter-input"
              />
              <button className="newsletter-button">Subscribe</button>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © 2024 Portfolio. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <a href="#" className="footer-bottom-link">Privacy Policy</a>
              <a href="#" className="footer-bottom-link">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
