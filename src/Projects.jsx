import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      title: 'Collaborative Retail Inventory Forecasting Platform',
      description:
        'Built a real-time web platform with React, Flask, and WebSockets enabling store managers to collaboratively forecast inventory. Integrated dbt-triggered Prophet models and Power BI Embedded for dashboards, improving forecast MAPE by 20% and cutting stockouts by 15%.',
      icon: 'fas fa-store'
    },
    {
      title: 'AI-Powered Customer Sentiment & Decision Assistant',
      description:
        'Developed a React-FastAPI dashboard that uses transformer models (Hugging Face, spaCy, OpenAI API) to analyze product feedback in natural language. Delivered topic modeling, quantified sentiment, and D3.js visualizations, reducing churn analysis time by 60%.',
      icon: 'fas fa-comments'
    },
    {
      title: 'Live Marketing Campaign Performance Dashboard & Alerts',
      description:
        'Engineered a live pipeline with Python, dbt, and Docker that streams marketing metrics and detects anomalies using z-scores. Looker dashboards issue real-time alerts, cutting reaction time from 24h to <1h and saving thousands quarterly.',
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
