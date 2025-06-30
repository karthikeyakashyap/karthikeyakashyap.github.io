import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="page-section">
      <div className="hero-section">
        <div className="left-column">
          <h1 className="name-title">
            <span className="greeting">Hello, I'm</span>
            CHITTA KARTHIKEYA KASHYAP
          </h1>
          <p className="description">
  Versatile Data Analyst passionate about delivering end-to-end analytics solutions that drive business impact. 
  Experienced in transforming messy operational data into interactive dashboards, predictive tools, and AI-powered insight assistants. 
  Proficient in Python, SQL, Tableau/Power BI, dbt, and cloud-native stacks; known for delivering data-driven solutions that accelerate decision-making and improve forecasting outcomes through real-world projects.
</p>

          
          <Link to="/about" className="about-me-link">
            About Me <i className="fas fa-arrow-right"></i>
          </Link>
        </div>

        <div className="right-column">
          <div className="image-placeholder">
            <img 
              src={`${import.meta.env.BASE_URL}dp.jpg`}
              alt="Chitta Karthikeya Kashyap"
              className="profile-photo"
            />
          </div>
          <h2 className="job-title">Data Scientist </h2>
          <a 
            className="resume-button"
            href="/DA Resume.pdf" 
            download="DA Resume.pdf"
          >
            DOWNLOAD RESUME
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;