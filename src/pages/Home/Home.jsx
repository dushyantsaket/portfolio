import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Dushyant Saket </span>
          </h1>
          <h2 className="hero-subtitle">
            {" "}
            Fronted Developer & UI/UX Designer{" "}
          </h2>
          <p className="hero-description">
            I create beautiful, functional, and user-centered digital
            experiences. Passionate about clean code, innovative solutions, and
            bringing ideas to life.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary">View My Work</button>
            <button className="btn-secondary">Get In Touch</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-image">
            <div className="avatar-placeholder">
              <img
                src="https://user-images.githubusercontent.com/74038190/212750672-2f3f2b50-c84f-4ed8-a60a-849ae69ff9df.gif"
                className="profile-avatar"
              />{" "}
            </div>
          </div>
          <div className="floating-elements"></div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-arrow">↓</div>
      </div>
    </div>
  );
};

export default Home;
