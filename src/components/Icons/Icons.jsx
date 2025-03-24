import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Icons() {
  const buttonStyle = {
    borderRadius: "50px",
    border: "1px solid #00FCEE", // Outline effect
    color: "#00FCEE", // Text/icon color
    backgroundColor: "transparent", // Transparent background
    padding: "0.375rem 0.75rem", // Default Bootstrap padding
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "40px", // Adjust size as needed
    height: "40px",
    textDecoration: "none",
    transition: "all 0.2s", // Smooth transition like Bootstrap
  };

  // Hover effect using CSS in JSX
  const hoverStyle = `
    .custom-btn:hover {
      background-color: rgba(0, 252, 238, 0.1); // Light background on hover
      color: #00FCEE;
      text-decoration: none;
    }
  `;

  return (
    <>
      <style>{hoverStyle}</style>
      <div>
        <a
          href="tel:+1234567890"
          className="custom-btn btn-floating m-1"
          role="button"
          style={buttonStyle}
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://wa.me/1234567890"
          className="custom-btn btn-floating m-1"
          role="button"
          style={buttonStyle}
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
        <a
          href="mailto:example@email.com"
          className="custom-btn btn-floating m-1"
          role="button"
          style={buttonStyle}
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="mailto:example@email.com"
          className="custom-btn btn-floating m-1"
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
