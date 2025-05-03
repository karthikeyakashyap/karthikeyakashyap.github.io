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
          Results-driven Data Scientist with expertise in Machine Learning, Data Analytics, and Predictive Modelling. 
          Skilled in data wrangling, statistical analysis, and deploying cloud-based models. 
          Proficient in Python, SQL, and R.
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
            href="/Resume DS.pdf" 
            download="Resume DS.pdf"
          >
            DOWNLOAD RESUME
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;