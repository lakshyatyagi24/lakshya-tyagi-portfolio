// src/components/Projects.js
import React from 'react';

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-item">
        <h3>Conveyance Management System (CMS)</h3>
        <p>Developed using Express.js and Ionic/AngularJS. A comprehensive system to manage conveyance records and approvals.</p>
        <a href="#">View Project</a>
      </div>
      <div className="project-item">
        <h3>Website for Mother's Pure</h3>
        <p>Developed a responsive and SEO-optimized website using React.js, enhancing the company's online presence.</p>
        <a href="#">View Project</a>
      </div>
    </section>
  );
}

export default Projects;
