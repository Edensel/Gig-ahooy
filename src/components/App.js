

// App.js

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Navigation from "./Navigation";
import SearchBar from "./SearchBar";
import IndustryContainer from "./IndustryContainer";
import HomePage from "./HomePage"; // Import HomePage if not already done
import AboutUs from "./AboutUs";
import Feedback from "./Feedback";
import HandsPage from "./HandsPage";

import "../style.css";

const App = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInputChange = (input) => {
    setSearchInput(input);
  };

  const industries = [

  ];

  const filteredIndustries = industries.filter((industry) =>
    industry.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <Router>
      <div>
        <Header />
        <Navigation />
        <SearchBar onSearchInputChange={handleSearchInputChange} />

        <Routes>
          <Route path="/" element={<HomePage filteredIndustries={filteredIndustries} />} />
          <Route path="/hands" element={<HandsPage industries={industries} />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>

        
      </div>
    </Router>
  );
};

export default App;
