import React from 'react';
import { Link } from 'react-router-dom';

const Skills = () => {
  const skillsData = {
    programming: [
      { name: 'Python (Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn)', level: 'Experienced', icon: 'fab fa-python' },
      { name: 'R', level: 'Intermediate', icon: 'fas fa-chart-line' },
      { name: 'SQL', level: 'Experienced', icon: 'fas fa-database' }
    ],
    dataScience: [
      { name: 'Data Cleaning & Wrangling', level: 'Experienced', icon: 'fas fa-broom' },
      { name: 'Feature Engineering', level: 'Experienced', icon: 'fas fa-cogs' },
      { name: 'Statistical Analysis', level: 'Experienced', icon: 'fas fa-chart-area' },
      { name: 'Hypothesis Testing', level: 'Experienced', icon: 'fas fa-vial' },
      { name: 'Exploratory Data Analysis (EDA)', level: 'Experienced', icon: 'fas fa-search' }
    ],
    machineLearning: [
      { name: 'Supervised/Unsupervised Learning', level: 'Experienced', icon: 'fas fa-brain' },
      { name: 'Neural Networks', level: 'Intermediate', icon: 'fas fa-project-diagram' },
      { name: 'NLP', level: 'Intermediate', icon: 'fas fa-language' },
      { name: 'Predictive Modelling', level: 'Experienced', icon: 'fas fa-chart-line' }
    ],
    tools: [
      { name: 'Jupyter Notebooks', level: 'Experienced', icon: 'fas fa-book' },
      { name: 'Google Colab', level: 'Experienced', icon: 'fas fa-cloud' },
      { name: 'GitHub', level: 'Experienced', icon: 'fab fa-github' },
      { name: 'Microsoft Excel', level: 'Experienced', icon: 'fas fa-file-excel' },
      { name: 'IBM Watson AI/Studio', level: 'Intermediate', icon: 'fas fa-robot' },
      { name: 'IBM Cognos Analytics', level: 'Intermediate', icon: 'fas fa-chart-pie' }
    ],
    cloud: [
      { name: 'AWS', level: 'Intermediate', icon: 'fab fa-aws' },
      { name: 'IBM Cloud', level: 'Intermediate', icon: 'fas fa-cloud' },
      { name: 'Cloud Model Deployment', level: 'Intermediate', icon: 'fas fa-rocket' }
    ],
    methodologies: [
      { name: 'CRISP-DM', level: 'Experienced', icon: 'fas fa-project-diagram' },
      { name: 'Agile', level: 'Experienced', icon: 'fas fa-sync' },
      { name: 'SDLC', level: 'Intermediate', icon: 'fas fa-cogs' }
    ]
  };

  return (
    <main className="main-content">
      <div className="skills-container">
        <h1 className="section-title">Skills & Expertise</h1>
        <div className="divider"></div>

        <div className="skills-grid">
          {Object.entries(skillsData).map(([category, skills]) => (
            <section className="skills-section" key={category}>
              <h2>{category.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</h2>
              <div className="skills-list">
                {skills.map((skill, index) => (
                  <SkillItem key={index} skill={skill} />
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="skills-navigation">
          <Link to="/projects" className="nav-link">
            Projects <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </main>
  );
};

const SkillItem = ({ skill }) => {
  return (
    <div className="skill-item">
      <i className={skill.icon}></i>
      <div className="skill-details">
        <span className="skill-name">{skill.name}</span>
        <span className="skill-level">{skill.level}</span>
      </div>
    </div>
  );
};

export default Skills;
