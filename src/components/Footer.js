

import React from "react";
import "../style.css"; // Assuming your styles are here. Adjust if necessary.

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 Gig Ahooy!!!. All rights reserved.</p>
        <p>Follow us on social media for updates and more!</p>
        <div className="social-links">
          <a href="https://twitter.com/example_twitter">Twitter</a> |
          <a href="https://instagram.com/example_instagram"> Instagram</a> |
          <a href="https://facebook.com/example"> Facebook</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
