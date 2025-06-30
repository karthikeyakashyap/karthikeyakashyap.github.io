import React from 'react';
import { Link } from 'react-router-dom';

const Skills = () => {
  const skillsData = {
    programming: [
      { name: 'Python (pandas, NumPy, matplotlib)', level: 'Experienced', icon: 'fab fa-python' },
      { name: 'SQL (ANSI, window functions)', level: 'Experienced', icon: 'fas fa-database' },
      { name: 'R', level: 'Intermediate', icon: 'fas fa-chart-line' },
      { name: 'Advanced Excel', level: 'Experienced', icon: 'fas fa-file-excel' }
    ],
    biVisualisation: [
      { name: 'Power BI', level: 'Experienced', icon: 'fas fa-chart-pie' },
      { name: 'Tableau', level: 'Experienced', icon: 'fas fa-chart-bar' },
      { name: 'Looker / Looker Studio', level: 'Experienced', icon: 'fas fa-chart-line' },
      { name: 'D3.js', level: 'Intermediate', icon: 'fas fa-project-diagram' },
      { name: 'Data Storytelling', level: 'Experienced', icon: 'fas fa-pen-nib' }
    ],
    analyticsEngineering: [
      { name: 'dbt', level: 'Experienced', icon: 'fas fa-tools' },
      { name: 'Fivetran', level: 'Intermediate', icon: 'fas fa-random' },
      { name: 'Star/Snowflake Schema Design', level: 'Experienced', icon: 'fas fa-sitemap' },
      { name: 'Data Quality Testing', level: 'Experienced', icon: 'fas fa-vial' }
    ],
    dataWarehousing: [
      { name: 'PostgreSQL', level: 'Experienced', icon: 'fas fa-database' },
      { name: 'Snowflake', level: 'Experienced', icon: 'fas fa-snowflake' },
      { name: 'BigQuery', level: 'Intermediate', icon: 'fas fa-server' },
      { name: 'Redshift', level: 'Intermediate', icon: 'fas fa-database' },
      { name: 'MySQL', level: 'Intermediate', icon: 'fas fa-database' },
      { name: 'MongoDB', level: 'Intermediate', icon: 'fas fa-leaf' }
    ],
    machineLearning: [
      { name: 'Forecasting (Prophet)', level: 'Experienced', icon: 'fas fa-chart-line' },
      { name: 'Anomaly Detection', level: 'Experienced', icon: 'fas fa-bug' },
      { name: 'A/B Testing & Hypothesis Testing', level: 'Experienced', icon: 'fas fa-vial' },
      { name: 'Regression & Classification', level: 'Experienced', icon: 'fas fa-sliders-h' }
    ],
    cloudDevOps: [
      { name: 'AWS (S3, EC2, ECS, RDS, Glue)', level: 'Intermediate', icon: 'fab fa-aws' },
      { name: 'Docker', level: 'Experienced', icon: 'fab fa-docker' },
      { name: 'Kubernetes', level: 'Intermediate', icon: 'fas fa-network-wired' },
      { name: 'GitHub Actions', level: 'Experienced', icon: 'fab fa-github' },
      { name: 'CI/CD', level: 'Experienced', icon: 'fas fa-code-branch' }
    ],
    frameworksTools: [
      { name: 'Flask', level: 'Experienced', icon: 'fas fa-flask' },
      { name: 'FastAPI', level: 'Experienced', icon: 'fas fa-tachometer-alt' },
      { name: 'React', level: 'Experienced', icon: 'fab fa-react' },
      { name: 'Streamlit', level: 'Intermediate', icon: 'fas fa-stream' },
      { name: 'Jupyter Notebooks / Google Colab', level: 'Experienced', icon: 'fas fa-book' },
      { name: 'OpenAI API', level: 'Intermediate', icon: 'fas fa-robot' },
      { name: 'spaCy / Hugging Face', level: 'Intermediate', icon: 'fas fa-language' }
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
