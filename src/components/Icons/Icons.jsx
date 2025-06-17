import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Icons() {
  const buttonStyle = {
    borderRadius: "50px",
    border: "1px solid #00FCEE",
    color: "#00FCEE",
    backgroundColor: "transparent",
    padding: "0.375rem 0.75rem",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "48px", // Increased from 40px
    height: "48px", // Increased from 40px
    fontSize: "1.5rem", // Larger icon size
    textDecoration: "none",
    margin: "0 8px", // Custom margin for consistent spacing
    transition: "transform 0.2s ease, border-color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease",
  };

  // Hover effect with scale, glow, and background
  const hoverStyle = `
    a.custom-btn:hover {
      transform: scale(1.1);
      border-color: #00FCEE;
      background-color: rgba(0, 252, 238, 0.2);
      box-shadow: 0 0 8px rgba(0, 252, 238, 0.6);
      color: #00FCEE;
      text-decoration: none;
    }
  `;

  return (
    <>
      <style>{hoverStyle}</style>
      <div>
        <a
          href="https://www.linkedin.com/in/your-profile"
          className="custom-btn"
          role="button"
          style={buttonStyle}
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://wa.me/1234567890"
          className="custom-btn"
          role="button"
          style={buttonStyle}
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
        <a
          href="https://github.com/your-username"
          className="custom-btn"
          role="button"
          style={buttonStyle}
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.instagram.com/your-username"
          className="custom-btn"
          role="button"
          style={buttonStyle}
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </>
  );
}

export default Icons;