//IndustryContainer.js



import React from "react";

import "../style.css";


const IndustryContainer = ({ title, companies }) => {
  return (
    <div className="industry-container">
      <h2 className="industry-title">{title}</h2>
      <ul className="company-list">
        {companies.map((company, index) => (
          <li key={index} className="company-list-item">
            {company}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IndustryContainer;
