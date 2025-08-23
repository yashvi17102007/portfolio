// Projects.jsx
import React from "react";
import "../App.css";

const projects = [
  {
    title: "Code-Editor",
    link: "https://online-code-editt.netlify.app/",
    desc: "A web-based code editor built with React that provides a clean and modern coding experience directly in the browser. It features syntax highlighting, a dark/light theme toggle, and a VS Code–like interface to give developers a familiar environment.",
  },
  {
    title: "Weather App",
    link: "https://appweathr.netlify.app/",
    desc: "A responsive weather application that provides real-time weather updates for any city worldwide. It integrates with the OpenWeather API to display temperature, humidity, wind speed, and current weather conditions with an attractive UI.",
  },
  {
    title: "Music Player",
    link: "https://musicplayer-r.netlify.app/",
    desc: "A stylish web-based music player built with React that allows users to play, pause, and switch between tracks with ease. It features a modern UI, album covers, and smooth audio controls for an engaging listening experience.",
  },
  {
    title: "Book-My-show",
    link: "https://bookmyyshow.netlify.app/",
    desc: "A responsive movie ticket booking application inspired by BookMyShow, built with React. It allows users to explore movies, view details, and book tickets with an interactive and user-friendly interface.",
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
