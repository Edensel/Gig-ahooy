


// AboutUs.js

import React, { useState } from "react";
import "../style.css";

const AboutUs = () => {
  const [selectedContact, setSelectedContact] = useState(null);

  const handleButtonClick = (contactType) => {
    setSelectedContact(contactType);
  };

  const renderContactInfo = () => {
    switch (selectedContact) {
      case "Contact":
        return <p>Contact information: XXX-XXX-XXXX</p>;
      case "Email":
        return <p>Email: example@example.com</p>;
      case "Twitter":
        return <p>Twitter: @example_twitter</p>;
      case "Instagram":
        return <p>Instagram: @example_instagram</p>;
      case "Facebook":
        return <p>Facebook: facebook.com/example</p>;
      default:
        return null;
    }
  };

  return (
    <div>
      <h1>About Us</h1>
      <p>
        Helping Hands is an organization started in 2024 with the aim of
        simplifying people's lives by providing the necessary services available
        when required.
      </p>
      <div className="closeNav" id="closeNav">
        <button onClick={() => handleButtonClick("Contact")}>Contact</button>
        <button onClick={() => handleButtonClick("Email")}>Email</button>
        <button onClick={() => handleButtonClick("Twitter")}>Twitter</button>
        <button onClick={() => handleButtonClick("Instagram")}>
          Instagram
        </button>
        <button onClick={() => handleButtonClick("Facebook")}>Facebook</button>
        {/* <button onClick={() => handleButtonClick("Feedback")}>Feedback</button> */}
      </div>
      {renderContactInfo()}
    </div>
  );
};

export default AboutUs;
