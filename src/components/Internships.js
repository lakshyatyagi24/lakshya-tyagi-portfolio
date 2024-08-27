// src/components/Internships.js
import React from 'react';

function Internships() {
  return (
    <section id="internships" className="internships">
      <h2>Internships</h2>
      <div className="internship-item">
        <h3>Intern</h3>
        <h4>ROAR Picture Company, Ghaziabad</h4>
        <p>Jun 2018 — Jul 2018</p>
        <ul>
          <li>Created a movie website using WordPress.</li>
          <li>Made various modifications to the company website.</li>
          <li>Conducted research and data analytics for the company’s movie project.</li>
        </ul>
      </div>
      <div className="internship-item">
        <h3>Technical Team Member</h3>
        <h4>Mother's Pure, Noida</h4>
        <p>Dec 2020 — Jan 2021</p>
        <ul>
          <li>Listed oil products across multiple platforms.</li>
          <li>Developed the company website using React.js.</li>
          <li>Improved SEO for the company’s products.</li>
        </ul>
      </div>
    </section>
  );
}

export default Internships;
