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
            I’m a versatile Data Analyst with a passion for delivering end-to-end analytics products that solve real business problems. 
            I specialize in transforming messy operational data into polished dashboards, predictive tools, and conversational insight assistants—leveraging Python, SQL, Tableau, Power BI, dbt, and modern cloud stacks.

             My recent work with retail, marketing, and product teams has reduced decision-making time by up to 70% and improved forecast accuracy by 20%. 
            Whether it’s surfacing insights or building data products, I focus on creating solutions that are not just accurate, but also actionable and easy to use.
<br/><br/>
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
