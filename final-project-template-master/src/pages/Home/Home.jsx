import React from 'react'
import './home.css'

const Home = () => {
    return (
        <div className="hero-section">
            <div className="hero-content">
                <div className="hero-text">
                    <h1 className="hero-title">
                        Hi, I'm <span className="highlight">Your Name</span>
                    </h1>
                    <h2 className="hero-subtitle">Full Stack Developer & UI/UX Designer</h2>
                    <p className="hero-description">
                        I create beautiful, functional, and user-centered digital experiences. 
                        Passionate about clean code, innovative solutions, and bringing ideas to life.
                    </p>
                    <div className="hero-buttons">
                        <button className="btn-primary">View My Work</button>
                        <button className="btn-secondary">Get In Touch</button>
                    </div>
                </div>
                <div className="hero-image">
                    <div className="profile-card">
                        <div className="profile-image">
                            <div className="avatar-placeholder">
                                <span>👨‍💻</span>
                            </div>
                        </div>
                        <div className="floating-elements">
                            <div className="floating-icon">💻</div>
                            <div className="floating-icon">🎨</div>
                            <div className="floating-icon">⚡</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="scroll-indicator">
                <div className="scroll-arrow">↓</div>
            </div>
        </div>
    )
}

export default Home
