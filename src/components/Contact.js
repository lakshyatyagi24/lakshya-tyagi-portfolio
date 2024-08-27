// src/components/Contact.js
import React from 'react';
import GoogleButton from './GoogleButton';

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <p>Feel free to reach out to me through any of the platforms below:</p>
      <ul>
        <li>Email: lakshya.tyagi.dav@gmail.com</li>
        <li>Phone: +91 8882068839</li>
        <li>LinkedIn: <a href="#">linkedin.com/in/lakshya-tyagi</a></li>
        <li>GitHub: <a href="#">github.com/lakshya-tyagi</a></li>
        <li>Dev.to: <a href="#">dev.to/lakshya-tyagi</a></li>
        <li>X (Twitter): <a href="#">twitter.com/lakshya-tyagi</a></li>
        <li>Daily Dev: <a href="#">daily.dev/lakshya-tyagi</a></li>
      </ul>
      <GoogleButton />
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
