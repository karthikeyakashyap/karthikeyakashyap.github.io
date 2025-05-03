import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      title: 'Melanoma Detection Using SVM and CNN',
      description:
        'Developed an image analysis tool for early melanoma detection. Applied grayscale conversion, noise removal, and GLCM feature extraction. Trained SVM and CNN models with hyperparameter tuning for optimized classification performance.',
      github: '#', // Replace with actual repo if available
      icon: 'fas fa-notes-medical'
    },
    {
      title: 'Online Medical Consultation Application',
      description:
        'Built a telemedicine app integrating Python, SQL, and Agora for real-time consultations. Included vital sign monitoring, cloud-based patient data storage, and visualizations using Matplotlib and Seaborn.',
      github: '#', // Replace with actual repo if available
      icon: 'fas fa-stethoscope'
    },
    {
      title: 'Predicting SpaceX Falcon 9 Rocket Landing Success',
      description:
        'Created a predictive model using Python, Pandas, and Scikit-learn to forecast Falcon 9 landing success. Conducted EDA and built logistic regression models evaluated with ROC-AUC and accuracy metrics.',
      github: '#', // Replace with actual repo if available
      icon: 'fas fa-rocket'
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
