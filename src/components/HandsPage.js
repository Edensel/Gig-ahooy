// HandsPage.js

import React from "react";
import IndustryContainer from "./IndustryContainer";

import "../style.css";

const HandsPage = () => {
  const industries = [
    // Your industries data here
    
  ];

  return (
    <div>
      <h1>Our Services</h1>
      <div className="container">
        {industries.map((industry, index) => (
          <IndustryContainer
            key={index}
            title={industry.title}
            companies={industry.companies}
          />
        ))}
      </div>
    </div>
  );
};

export default HandsPage;
