import React from 'react';
import { Link } from 'react-router-dom';

const skillsData = {
  programming: [
    { name: 'SQL (ANSI, Window Functions)', level: 'Experienced', icon: 'fas fa-database' },
    { name: 'Python (Pandas, NumPy, Matplotlib, Seaborn)', level: 'Experienced', icon: 'fab fa-python' },
    { name: 'R', level: 'Intermediate', icon: 'fas fa-chart-line' },
    { name: 'Advanced Excel', level: 'Experienced', icon: 'fas fa-file-excel' }
  ],
  biAndVisualization: [
    { name: 'Tableau', level: 'Experienced', icon: 'fas fa-chart-bar' },
    { name: 'Power BI', level: 'Experienced', icon: 'fas fa-chart-pie' },
    { name: 'Looker / Looker Studio', level: 'Intermediate', icon: 'fas fa-binoculars' },
    { name: 'D3.js', level: 'Beginner', icon: 'fas fa-project-diagram' },
    { name: 'Data Storytelling', level: 'Experienced', icon: 'fas fa-comments' }
  ],
  dataWarehousing: [
    { name: 'Snowflake', level: 'Experienced', icon: 'fas fa-snowflake' },
    { name: 'BigQuery', level: 'Experienced', icon: 'fas fa-database' },
    { name: 'Redshift', level: 'Intermediate', icon: 'fas fa-server' },
    { name: 'PostgreSQL / MySQL', level: 'Experienced', icon: 'fas fa-database' },
    { name: 'MongoDB', level: 'Intermediate', icon: 'fas fa-leaf' }
  ],
  analyticsEngineering: [
    { name: 'dbt', level: 'Experienced', icon: 'fas fa-tools' },
    { name: 'ETL/ELT (Fivetran)', level: 'Experienced', icon: 'fas fa-random' },
    { name: 'Star/Snowflake Schema Design', level: 'Experienced', icon: 'fas fa-project-diagram' },
    { name: 'Data Quality Testing', level: 'Experienced', icon: 'fas fa-check-circle' }
  ],
  statisticsAndML: [
    { name: 'A/B Testing', level: 'Experienced', icon: 'fas fa-flask' },
    { name: 'Hypothesis Testing', level: 'Experienced', icon: 'fas fa-vial' },
    { name: 'Regression & Classification', level: 'Experienced', icon: 'fas fa-chart-line' },
    { name: 'Forecasting (Prophet)', level: 'Intermediate', icon: 'fas fa-chart-area' },
    { name: 'Anomaly Detection', level: 'Intermediate', icon: 'fas fa-exclamation-triangle' }
  ],
  cloudAndDevOps: [
    { name: 'AWS (S3, EC2, ECS, RDS, Glue)', level: 'Intermediate', icon: 'fab fa-aws' },
    { name: 'Docker', level: 'Intermediate', icon: 'fab fa-docker' },
    { name: 'Kubernetes', level: 'Beginner', icon: 'fas fa-network-wired' },
    { name: 'GitHub Actions', level: 'Experienced', icon: 'fab fa-github' },
    { name: 'CI/CD', level: 'Experienced', icon: 'fas fa-sync' }
  ],
  frameworksAndTools: [
    { name: 'Flask', level: 'Intermediate', icon: 'fas fa-fire' },
    { name: 'FastAPI', level: 'Intermediate', icon: 'fas fa-bolt' },
    { name: 'Streamlit', level: 'Intermediate', icon: 'fas fa-stream' },
    { name: 'Jupyter', level: 'Experienced', icon: 'fas fa-book' },
    { name: 'Google Colab', level: 'Experienced', icon: 'fas fa-cloud' },
    { name: 'IBM Watson Studio', level: 'Intermediate', icon: 'fas fa-robot' }
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
