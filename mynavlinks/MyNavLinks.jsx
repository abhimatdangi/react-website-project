import React from "react";
import { NavLink } from "react-router-dom";

const MyNavLinks = () => {
  return (
    <div className="nav-links">
      {/* home */}
      <NavLink 
        to="/" 
        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
      >
        Home
      </NavLink>
      
      {/* project ko lagi */}
      <NavLink 
        to="/projects" 
        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
      >
        Projects
      </NavLink>
      
      {/* contact page */}
      <NavLink 
        to="/contact" 
        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
      >
        Contact
      </NavLink>
    </div>
    // yo chai navbar ko link haru ho
    // home - home page ko lagi
    // projects - project haru ko lagi
    // contact - contact form ko lagi
  );
};

export default MyNavLinks; 