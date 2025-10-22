import React from "react";
import "./about.css";
import profilePic from "../../assets/profilePic.png";
// replace with your own image path

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-image">
          <img src={profilePic} alt="Profile" />
        </div>

        <div className="about-content">
          <h2>About Me</h2>
          <p className="intro">
            I’m <span className="highlight">Dushyant Saket </span>, a passionate{" "}
            <span className="highlight">Full Stack Developer</span> from
            Sidhi , Madhaya Pradesh, India.
          </p>

          <p className="details">
            I’m a highly focused and motivated developer with 6 Month 
            of experience. My expertise includes HTML, CSS,Vanilla JavaScript,BootStrap,Tailwind CSS, React.js,Redux js,Redux Toolkit Node.js, Express.js, MongoDB, Mongoose, . I love crafting interactive user experiences and
            building responsive web applications that push boundaries in
            technology.I’m committed to building fast, scalable, and visually appealing web applications.
            This project showcases my creativity and attention to design detail.
          </p>

          <a href="file:///C:/Users/dushy/Downloads/dushyant%20resume.pdf" className="resume-btn" target="_blank">
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
