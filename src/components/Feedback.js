
// Feedback.js

import React, { useState } from "react";
import "../style.css";


const Feedback = () => {
  const [userFeedback, setUserFeedback] = useState("");
  const [postedFeedback, setPostedFeedback] = useState([]);

  const handleFeedbackChange = (e) => {
    setUserFeedback(e.target.value);
  };

  const handlePostFeedback = () => {
    if (userFeedback.trim() !== "") {
      setPostedFeedback([...postedFeedback, userFeedback]);
      setUserFeedback("");
    }
  };

  return (
    <div className="container">
      <h1>Feedback</h1>
      <div className="feedback-section">
        <p>
          Please provide your valuable feedback below:
          <input
            type="text"
            value={userFeedback}
            onChange={handleFeedbackChange}
            placeholder="Type your feedback here"
          />
          <button onClick={handlePostFeedback}>Post Feedback</button>
        </p>
      </div>

      <div>
        <h2>Posted Feedback:</h2>
        <ul>
          {postedFeedback.map((feedback, index) => (
            <li key={index} className="posted-feedback">
              {feedback}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Feedback;
