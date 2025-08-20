// Projects.jsx
import React from "react";
import "../App.css";

const projects = [
  {
    title: "E-learning Website",
    link: "https://your-elearning.netlify.app",
    desc: "A responsive learning platform with courses and modules.",
  },
  {
    title: "Weather App",
    link: "https://appweathr.netlify.app/",
    desc: "Weather forecast with live API integration.",
  },
  {
    title: "Music Player",
    link: "https://your-musicplayer.netlify.app",
    desc: "Custom-built online music player.",
  },
  {
    title: "Portfolio Website",
    link: "https://your-portfolio.netlify.app",
    desc: "My personal portfolio showcasing projects and skills.",
  },
];

const Projects = () => (
  <section id="projects" className="projects-section">
    <h2 className="projects-title">Projects</h2>
    <div className="projects-grid">
      {projects.map((p, i) => (
        <a
          key={i}
          href={p.link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card"
        >
          <h3>{p.title}</h3>
          <p>{p.desc}</p>
        </a>
      ))}
    </div>
  </section>
);

export default Projects;
