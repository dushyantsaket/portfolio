import React from 'react'
import './skill.css'

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 90, icon: "⚛️" },
        { name: "JavaScript", level: 85, icon: "🟨" },
        { name: "HTML/CSS", level: 95, icon: "🎨" },
        { name: "Vue.js", level: 75, icon: "💚" },
        { name: "TypeScript", level: 80, icon: "🔷" }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 85, icon: "🟢" },
        { name: "Python", level: 80, icon: "🐍" },
        { name: "Express.js", level: 85, icon: "🚀" },
        { name: "MongoDB", level: 75, icon: "🍃" },
        { name: "PostgreSQL", level: 70, icon: "🐘" }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", level: 90, icon: "📚" },
        { name: "Docker", level: 70, icon: "🐳" },
        { name: "AWS", level: 65, icon: "☁️" },
        { name: "Figma", level: 80, icon: "🎨" },
        { name: "VS Code", level: 95, icon: "💻" }
      ]
    }
  ]

  return (
    <div className="skills-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">Technologies I work with</p>
        </div>
        
        <div className="skills-content">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                        data-level={skill.level}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="skills-summary">
          <div className="summary-card">
            <h4>Continuous Learning</h4>
            <p>Always exploring new technologies and improving existing skills</p>
          </div>
          <div className="summary-card">
            <h4>Problem Solving</h4>
            <p>Strong analytical thinking and debugging capabilities</p>
          </div>
          <div className="summary-card">
            <h4>Team Collaboration</h4>
            <p>Experience working in agile teams and mentoring others</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
