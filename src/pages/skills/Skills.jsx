
import React from 'react';
import './skill.css';

const Skills = () => {
  const frontendSkills = [
    { name: 'HTML', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png' },
    { name: 'CSS', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/851px-CSS3_logo_and_wordmark.svg.png' },
    { name: 'JavaScript', image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
    { name: 'React', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' },
    { name: 'Redux Toolkit', image: 'https://cdn.worldvectorlogo.com/logos/redux.svg' },
    { name: 'TypeScript', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png' },
    { name: 'Bootstrap', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png' },
    { name: 'Tailwind CSS', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png' },
    { name: 'Next.js', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyjfCCA-JfbeJfTnpJ7uEqlXPM77vUZ8Fk_w&s' }
  ];

  const backendSkills = [
    { name: 'Node.js', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png' },
    { name: 'Express.js', image: 'https://www.pngfind.com/pngs/m/136-1363736_express-js-icon-png-transparent-png.png' },
    { name: 'MongoDB', image: 'https://w7.pngwing.com/pngs/63/19/png-transparent-mongodb-database-nosql-postgresql-mongo-text-logo-business-thumbnail.png' },
    { name: 'SQL', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwuqWn7rCVhqZ_pSlxwVUzlZtFWaOMdbm28A&s' },
    { name: 'Postman', image: 'https://www.svgrepo.com/show/354202/postman-icon.svg' },
    { name: 'GitHub', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThdZlszhihSfJBfoXkpJtOvDk9p_sskS4rSQ&s' },
    { name: 'GitLab', image: 'https://www.arm.com/-/media/global/Why%20Arm/partner/Partner%20Ecosystem/catalog/gitlab/gitlab-logo-200.png?rev=0df81e13edd940369f2647cee8709c39&revision=0df81e13-edd9-4036-9f26-47cee8709c39' },
    { name: 'VS Code', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png' },
    { name: 'Netlify', image: 'https://cdn.freebiesupply.com/logos/large/2x/netlify-logo-png-transparent.png' },
   
  ];

  const uiLibraries = [
    { name: 'React', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' },
    { name: 'Vue.js', image: 'https://cdn.freebiesupply.com/logos/thumbs/2x/vue-9-logo.png' },
    { name: 'Angular', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png' },
    { name: 'Svelte', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/747px-Svelte_Logo.svg.png?20191219133350' },
    { name: 'Docker ', image:  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0MHoa7F8iGLes6nN7qd2y2W0ZW2bQ4CyT7w&s'},
    { name: 'AWS ', image: 'https://cdn.freebiesupply.com/logos/large/2x/aws-logo-logo-png-transparent.png' },
  ];

  const renderSkillCards = (skills) => (
    <div className="skills-grid">
      {skills.map((skill, index) => (
        <div key={index} className="skill-card">
          <img src={skill.image} alt={skill.name} className="skill-img" />
          <p className="skill-name">{skill.name}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="skills-section">
      <div className="container">
        <h2 className="section-title">Frontend Skills</h2>
        {renderSkillCards(frontendSkills)}

        <h2 className="section-title">Backend Skills And Tools</h2>
        {renderSkillCards(backendSkills)}

        <h2 className="section-title">UI Libraries</h2>
        {renderSkillCards(uiLibraries)}
      </div>
    </div>
  );
};

export default Skills;
