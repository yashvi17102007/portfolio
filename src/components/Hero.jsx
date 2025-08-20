import React from "react";

const Hero = () => {
  return (
    <header id="home" className="hero container">
      <h1>Hi, I'm <span>Yashvi</span></h1>
      <p>Frontend Developer | 1st-year BCA | React.js Enthusiast</p>
      <button onClick={() => document.getElementById("projects").scrollIntoView({behavior:"smooth"})}>
        View Projects
      </button>
    </header>
  );
};

export default Hero;
