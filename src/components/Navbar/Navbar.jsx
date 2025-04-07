import React, { useState } from "react";
import "./navStyle.css";

function Navbar() {
  // State to track active link
  const [activeLink, setActiveLink] = useState("Home");

  // Handle link click
  const handleNavClick = (link) => {
    setActiveLink(link);
  };

  // Base styles for nav links
  const baseStyle = {
    textDecoration: "none",
    padding: "0.5rem 1rem",
    transition: "color 0.3s ease",
  };

  // Combine base style with active/inactive colors
  const getLinkStyle = (link) => ({
    ...baseStyle,
    color: activeLink === link ? "#00FCEE" : "#ffffff",
  });

  return (
    <nav className="navbar navbar-expand-lg navbar-dark p-3">
      <div className="container-fluid d-flex justify-content-around px-4">
        <a
          className="navbar-brand text-white"
          href="/"
          onClick={() => handleNavClick("Home")}
        >
          Hasaan <span style={{ color: "#00FCEE" }}>Qurashi</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                href="#home"
                style={getLinkStyle("Home")}
                className="nav-link"
                onClick={() => handleNavClick("Home")}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#about"
                style={getLinkStyle("About")}
                className="nav-link"
                onClick={() => handleNavClick("About")}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#edu"
                style={getLinkStyle("Education")}
                className="nav-link"
                onClick={() => handleNavClick("Education")}
              >
                Education
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#services"
                style={getLinkStyle("Services")}
                className="nav-link"
                onClick={() => handleNavClick("Services")}
              >
                Services
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#testimonies"
                style={getLinkStyle("Testimonies")}
                className="nav-link"
                onClick={() => handleNavClick("Testimonies")}
              >
                Testimonies
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#contact"
                style={getLinkStyle("Contact")}
                className="nav-link"
                onClick={() => handleNavClick("Contact")}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
