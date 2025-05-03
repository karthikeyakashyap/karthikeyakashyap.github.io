import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <main className="main-content">
      <div className="about-container">
        <h1 className="section-title">About Me</h1>
        <div className="divider"></div>
        
        <div className="about-text-full">
          <p className="about-description">
            Hi, This is Chitta Karthikeya Kahyap! 👋🏼<br/><br/>
            I'm a results-driven Data Scientist with a strong background in Machine Learning, Data Analytics, and Predictive Modelling. I specialize in data wrangling, statistical analysis, and feature engineering, and I’m proficient in Python, SQL, and R. 
            My experience spans from exploratory data analysis (EDA) and natural language processing (NLP) to deploying scalable, cloud-based solutions that solve real-world business problems.<br/><br/>
          </p>
        </div>

        {/* Navigation Link to Skills Page */}
        <div className="about-navigation">
          <Link to="/skills" className="nav-link">
            Skills <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default About;