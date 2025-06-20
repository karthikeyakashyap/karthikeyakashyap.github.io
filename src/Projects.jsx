import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'Collaborative Retail Inventory Forecasting Platform',
    description:
      'Built a multi-tenant web platform enabling store managers to co-create demand forecasts in real time using React, Flask, WebSockets, and Prophet. Integrated Power BI Embedded dashboards and secure PostgreSQL + dbt backend. Improved MAPE by 20% and cut stockouts by 15%.',
    github: '#', // Add actual GitHub repo if public
    icon: 'fas fa-store'
  },
  {
    title: 'AI-Powered Customer Sentiment & Decision Assistant',
    description:
      'Developed a chat-based dashboard using FastAPI, Hugging Face, spaCy, and OpenAI API to analyze customer sentiment and generate actionable insights. Visualized trends with D3.js. Cut feedback analysis time by 60%.',
    github: '#', // Add actual GitHub repo if public
    icon: 'fas fa-comments'
  },
  {
    title: 'Live Marketing Campaign Performance Dashboard & Anomaly Alerts',
    description:
      'Engineered a live marketing analytics pipeline with Python, Docker, PostgreSQL, dbt, and Looker. Created auto-refresh dashboards with anomaly detection and alerts using z-scores. Reduced campaign monitoring lag from 24h to under 1h.',
    github: '#', // Add actual GitHub repo if public
    icon: 'fas fa-bullhorn'
  }
];

  const certificates = [
    {
      title: 'IBM Data Science Professional Certificate',
      link: 'https://www.coursera.org/account/accomplishments/professional-cert/B9P2ETE5JPYE',
      image: '/Certificates/ibm ds.jpeg'
      
    },
    {
      title: 'IBM Artificial Intelligence Analyst Certificate',
      link: 'https://courses.ibmcep.cognitiveclass.ai/certificates/d4ad8a4f2fd14790a6d435c66ce05bd1',
      image: '/Certificates/ai ibm.jpg'
     
    }
  ];

  return (
    <main className="main-content">
      <div className="projects-certifications-container">
        <h1 className="section-title">Projects</h1>
        <div className="divider"></div>

        {/* Projects Grid */}
        <div className="grid-container">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <i className={`${project.icon} project-bg-icon`}></i>
              <div className="project-content">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                {project.github !== '#' && (
                  <a href={project.github} className="github-button" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <h2 className="section-title" style={{ marginTop: '3rem' }}>Certifications</h2>
        <div className="divider"></div>
        <div className="grid-container">
          {certificates.map((cert, index) => (
            <div key={index} className="certificate-card">
              <img src={cert.image} alt={cert.title} className="certificate-image" />
              <div className="certificate-overlay">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-certificate"
                >
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Link to Home Page */}
        <div className="projects-navigation">
          <Link to="/" className="nav-link">
            Home <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Projects;
