import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [message, setMessage] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      name: name,
      email: email,
      message: message
    };
    console.log(data);

    toast.success("Message sent successfully!");
    setName("")
    setEmail("")
    setMessage("")
  };
  
  return (
    <div className="contact-section">
      <ToastContainer />
      <h2>Get In Touch</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="5"
            required
          />
        </div>
        <button type="submit">Send Message</button>
      </form>

      <div className="contact-socials">
        <h3>Connect With Me</h3>
        <div className="social-icons">
          <a 
            href="https://www.linkedin.com/in/abhimatdangi/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaLinkedin />
          </a>
          <a 
            href="https://www.instagram.com/prodbyabhimat/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact; 