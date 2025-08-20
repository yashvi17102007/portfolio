import React from "react";

const Skills = () => (
  <section id="skills" className="container">
    <h2>Skills</h2>
    <div className="skills">
      {["HTML", "CSS", "JavaScript", "React.js", "Git & GitHub", "Responsive Design"].map((skill) => (
        <span className="chip" key={skill}>{skill}</span>
      ))}
    </div>
  </section>
);

export default Skills;