//SearchBar.js

import React from "react";

import { useNavigate } from "react-router-dom";

import "../style.css";

const SearchBar = ({ onSearchInputChange }) => {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    // Assuming you have a "/search" route for displaying search results
    navigate(`/search?query=${onSearchInputChange}`);
  };

  return (
    <div id="searchContainer">
      <input
        type="text"
        id="searchBar"
        placeholder="Search..."
        onChange={(e) => onSearchInputChange(e.target.value)}
      />
      <button id="searchButton" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};


// const SearchBar = ({ onSearchInputChange }) => {
//   return (
//     <div id="searchContainer">
//       <input
//         type="text"
//         id="searchBar"
//         placeholder="Search..."
//         onChange={(e) => onSearchInputChange(e.target.value)}
//       />
//       <button id="searchButton">Search</button>
//     </div>
//   );
// };

export default SearchBar;
