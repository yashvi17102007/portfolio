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
    link: "https://music-plyayer.netlify.app/",
    desc: "A stylish web-based music player built with React that allows users to play, pause, and switch between tracks with ease. It features a modern UI, album covers, and smooth audio controls for an engaging listening experience.",
  },
  {
    title: "Swiggy Clone (HTML + CSS)",
    link: "https://swigyy.netlify.app/ ",
    desc: "A static Swiggy homepage clone built using HTML and CSS. It features a clean and responsive design showcasing food delivery UI with modern styling and layout techniques.",
  },
  {
    title: "PhonePe Clone (HTML + CSS)",
    link: " https://phone-payy.netlify.app/",
    desc: "A clone of PhonePe’s homepage developed using HTML and CSS, designed with a responsive layout and visually appealing interface to replicate the popular payment app’s look.",
  },
  {
    title: "Clock (JavaScript)",
    link: " https://cloc-k.netlify.app/ ",
    desc: "An interactive analog clock built with JavaScript, HTML, and CSS. It dynamically updates in real-time, featuring smooth clock hand animations for hours, minutes, and seconds.",
  },
  {
    title: "Digital Clock (JavaScript)",
    link: " https://digital-colckk.netlify.app/",
    desc: "A simple yet elegant digital clock project using JavaScript. It displays the current time in real-time with a stylish UI and 24/12-hour format toggle.",
  },
  {
    title: "Hotel Website",
    link: "https://hhotell.netlify.app/ ",
    desc: "A responsive hotel booking website designed with HTML, CSS, and JavaScript. It includes sections for rooms, services, gallery, and contact details, with a user-friendly interface for showcasing hotel facilities.",
  },
  {
    title: "Post Website",
    link: "https://post-t.netlify.app/ ",
    desc: "A blog-style post sharing website developed using HTML, CSS, and JavaScript. It allows users to browse posts, view details, and features a clean, modern layout for better readability.",
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
