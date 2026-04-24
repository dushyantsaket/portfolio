import React from 'react'
import './home.css'

const Home = () => {
    return (
        <div className="hero-section">
            <div className="hero-content">

                {/* LEFT */
                <div className="hero-text">

                    <p className="hero-intro">👋 Hello, I'm</p>

                    <h1 className="hero-title">
                        <span className="highlight">Dushyant Saket</span>
                    </h1>

                    <h2 className="hero-subtitle">
                        Full Stack Developer | MERN | AI Integration
                    </h2>

                    <p className="hero-description">
                        Full Stack Developer with experience in building scalable web applications 
                        and AI-powered systems. Skilled in MERN stack, system design, and modern 
                        frontend technologies. Passionate about solving real-world problems using clean code.
                    </p>

                    {/* SKILLS */}
                    <div className="hero-skills">
                        <span>⚛️ React</span>
                        <span>🟢 Node.js</span>
                        <span>🍃 MongoDB</span>
                        <span>🐘 PostgreSQL</span>
                        <span>🤖 AI / LLM</span>
                        <span>☁️ AWS</span>
                    </div>

                    {/* EXPERIENCE HIGHLIGHT */}
                    <div className="hero-experience">
                        <p>💼 Intern @ <strong>SURE Trust</strong></p>
                        <p>🎨 Ex-Frontend Intern @ <strong>OLAcademy</strong></p>
                    </div>

                    {/* STATS */}
                    <div className="hero-stats">
                        <div>
                            <h3>4+</h3>
                            <p>Major Projects</p>
                        </div>
                        <div>
                            <h3>8+</h3>
                            <p>Certifications</p>
                        </div>
                        <div>
                            <h3>1+</h3>
                            <p>Years Experience</p>
                        </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="hero-buttons">
                        <button className="btn-primary">🚀 View Projects</button>
                        <button className="btn-secondary">📄 Download Resume</button>
                    </div>

                    {/* SOCIAL */}
                    <div className="hero-socials">
                        <a href="#">🐙 GitHub</a>
                        <a href="#">💼 LinkedIn</a>
                        <a href="#">🌐 Portfolio</a>
                    </div>

                </div>

                {/* RIGHT */}
                <div className="hero-image">
                    <div className="profile-card">

                        <div className="availability-badge">
                            🟢 Open to Work
                        </div>

                        <div className="profile-image">
                            <div className="avatar-placeholder">
                                👨‍💻
                            </div>
                        </div>

                        <div className="floating-elements">
                            <div className="floating-icon">⚛️</div>
                            <div className="floating-icon">🤖</div>
                            <div className="floating-icon">☁️</div>
                            <div className="floating-icon">🔥</div>
                        </div>

                    </div>
                </div>

            </div>

            <div className="scroll-indicator">
                <p>Scroll Down</p>
                <div className="scroll-arrow">↓</div>
            </div>
        </div>
    )
}

export default Home
