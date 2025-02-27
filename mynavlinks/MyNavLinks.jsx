import React from "react";
import { NavLink } from "react-router-dom";

const MyNavLinks = () => {
  return (
    <div className="nav-links">
      <NavLink 
        to="/" 
        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
      >
        Home
      </NavLink>
      <NavLink 
        to="/projects" 
        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
      >
        Projects
      </NavLink>
      <NavLink 
        to="/contact" 
        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
      >
        Contact
      </NavLink>
    </div>
    /* 
    Nav Links:
    Home  Projects  Contact
    */
  );
};

export default MyNavLinks; 