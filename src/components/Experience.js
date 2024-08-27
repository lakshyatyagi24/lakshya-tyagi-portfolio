// src/components/Experience.js
import React from 'react';

function Experience() {
  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>
      <div className="experience-item">
        <h3>Senior Software Engineer</h3>
        <h4>Synoriq R&D Pvt. Ltd., Jaipur</h4>
        <p>Jun 2021 — Present</p>
        <ul>
          <li>Developed a Conveyance Management System (CMS) using Express.js and Ionic/AngularJS.</li>
          <li>Led a small team, owning and completing over 5 projects successfully.</li>
          <li>Managed a client account with a team of 20+, delivering 20+ projects.</li>
          <li>Led the Data Correction team, streamlining processes and handling client escalations.</li>
          <li>Currently leading the Migration team, responsible for onboarding clients by migrating data to our system.</li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;
