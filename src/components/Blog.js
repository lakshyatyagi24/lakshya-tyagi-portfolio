// src/components/Blog.js
import React from 'react';

function Blog() {
  return (
    <section id="blog" className="blog">
      <h2>Blog</h2>
      <div className="blog-post">
        <h3>Understanding Node.js and Express.js</h3>
        <p>A deep dive into building server-side applications using Node.js and Express.js.</p>
        <a href="#">Read More</a>
      </div>
      <div className="blog-post">
        <h3>Mastering React.js for Modern Web Development</h3>
        <p>An essential guide for mastering React.js to build dynamic and interactive web applications.</p>
        <a href="#">Read More</a>
      </div>
    </section>
  );
}

export default Blog;
