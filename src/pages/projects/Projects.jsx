import React from "react";
import "./projects.css";
import pro from "../../assets/pro.png";
import two from "../../assets/two.png";
import three from "../../assets/three.png";
import four from "../../assets/four.png";
import five from "../../assets/five.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Brainwave - Modern UI/UX Website",
      description:
        "Developed using React.js and Tailwind CSS, exemplifies modern UI/UX principles. Sleek design and smooth animations for an elevated experience.",
      image: pro,
      technologies: ["React", "TailwindCSS", "JavaScript", "Scroll-lock"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Fashion Frenzy",
      description:
        "A full-featured eCommerce platform with a modern interface for fashion products, developed using React, Redux, and Node.js.",
      image: two ,
      technologies: ["React", "Redux", "Node.js", "Express.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Raj Police Theft Vehicle Module (Demo)",
      description:
        "An E-FIR module for reporting vehicle thefts, built using React and Ant Design to streamline public safety reports.",
      image: three,
      technologies: ["HTML", "CSS", "React", "Chakra-UI", "Ant-Design"],
      liveUrl: "#",
      githubUrl: "#",
    },
      {
      id: 4,
      title: "Raj Police Theft Vehicle Module (Demo)",
      description:
        "An E-FIR module for reporting vehicle thefts, built using React and Ant Design to streamline public safety reports.",
      image:four,
      technologies: ["HTML", "CSS", "React", "Chakra-UI", "Ant-Design"],
      liveUrl: "#",
      githubUrl: "#",
    },
      {
      id: 5,
      title: "Raj Police Theft Vehicle Module (Demo)",
      description:
        "An E-FIR module for reporting vehicle thefts, built using React and Ant Design to streamline public safety reports.",
      image: five,
      technologies: ["HTML", "CSS", "React", "Chakra-UI", "Ant-Design"],
      liveUrl: "#",
      githubUrl: "#",
    },
     
  ];

  return (
    <section className="projects-section">
      <h2 className="projects-title">Projects</h2>

      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            ) : (
              <div className="project-placeholder">🪐</div>
            )}

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tech-stack">
                <strong>Tech Stack:</strong>
                <div className="tech-tags">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx}>{tech}</span>
                  ))}
                </div>
              </div>

              <div className="buttons">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn code"
                >
                  💻 Source Code
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn live"
                >
                  🌐 Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
