//Navigation.js


import React from "react";

import { Link } from "react-router-dom";

import "../style.css";

const Navigation = () => {
  return (
    <div className="nav" id="nav">
      <Link to="/hands">Our Services</Link>
      <Link to="/about">About Us</Link>
      <Link to="/feedback">Feedback</Link>
      <Link to="/register">Register</Link>
    </div>
  );
};


export default Navigation;
