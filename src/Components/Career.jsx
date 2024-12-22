import React from 'react';
import '../Style/Career.css';

const Career = () => {
  return (
    <div className="careers-container">
      <header className="careers-header">
        <h1>Build Your Career With Us...</h1>
      </header>
      <section className="careers-content">
        <h2>We Are Hiring!</h2>
        <p>
          At <span className="company-name">All Round Staffing</span>, we are looking for passionate individuals to join 
          our growing team. If you’re ready to take your career to the next level, we’d love to hear from you!
        </p>
        <h2>Why Join Us?</h2>
        <p>We value creativity, innovation, and teamwork.We Help You Growing Your Career</p>
        <ul>
          <li>Opportunities for growth and learning</li>
          <li>Flexible working environment</li>
          <li>Competitive salaries and benefits</li>
        </ul>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdJ3tuWhRS5dsmudKucRl4DXhsxKjHe6ZQv0O9Ceri5vB-zlQ/viewform?usp=header" className="btn-apply">
          Apply Now
        </a>
      </section>
    </div>
  );
};

export default Career;
