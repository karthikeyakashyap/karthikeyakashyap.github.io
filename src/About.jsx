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
  Hi, this is Chitta Karthikeya Kashyap! 👋🏼<br/><br/>
  I'm a versatile Data Analyst with a passion for building end-to-end analytics products that solve real business problems. From turning raw, messy data into polished dashboards to deploying predictive models and conversational insight tools, I thrive at the intersection of data engineering, analysis, and storytelling.<br/><br/>
  I'm skilled in Python, SQL, dbt, and cloud-native stacks, with hands-on experience in forecasting, anomaly detection, and NLP. My recent work has helped retail, marketing, and product teams cut decision time by up to 70% and improve forecast accuracy by 20%.<br/><br/>
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