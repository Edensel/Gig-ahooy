// HomePage.js

import React from "react";
import IndustryContainer from "./IndustryContainer";

import "../style.css";

const HomePage = ({ filteredIndustries }) => {
  return (
    <div>
      <p>Suggestions:</p>
      <div className="container">
        {filteredIndustries.map((industry, index) => (
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

export default HomePage;
