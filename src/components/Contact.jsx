import React from "react";
// import "./Contact.css";
import '../App.css'

const Contact = () => (
  <section id="contact" className="contact-section">
    <h2>Contact Me</h2>
    <p className="contact-intro">Feel free to reach out to me via the following platforms:</p>

    <div className="contact-info">
      <div className="contact-card">
        <h3>📧 Email</h3>
        <p>yashvi@example.com</p>
      </div>

      <div className="contact-card">
        <h3>📱 Phone</h3>
        <p>+91 98765 43210</p>
      </div>

      <div className="contact-card">
        <h3>💻 GitHub</h3>
        <a href="https://github.com/yourgithubid" target="_blank" rel="noopener noreferrer">
          github.com/yourgithubid
        </a>
      </div>
    </div>
  </section>
);

export default Contact;
