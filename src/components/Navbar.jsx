import React, { useState } from "react";
import "../App.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className="nav">
      <div className="container nav-inner">
        <div className="brand" onClick={() => handleNav("home")}>
          <div className="logo" />
          <div>
            <div>Yashvi Patidar</div>
            <small>Frontend Developer</small>
          </div>
        </div>
        <div className="menu">
          {['home','about','skills','projects','contact'].map((id) => (
            <a key={id} href={`#${id}`} onClick={(e)=>{e.preventDefault();handleNav(id)}}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>
        <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </div>
      {menuOpen && (
        <div className="drawer">
          {['home','about','skills','projects','contact'].map((id) => (
            <a key={id} href={`#${id}`} onClick={(e)=>{e.preventDefault();handleNav(id)}}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;