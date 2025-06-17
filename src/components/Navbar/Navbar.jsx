import React, { useState } from "react";
import "./navStyle.css";
import logo from "../../assets/11.png";

function Navbar() {
  const [activeLink, setActiveLink] = useState("Home");

  const handleNavClick = (link) => {
    setActiveLink(link);
  };

  const baseStyle = {
    textDecoration: "none",
    padding: "0.5rem 1rem",
    transition: "color 0.3s ease",
  };

  const getLinkStyle = (link) => ({
    ...baseStyle,
    color: activeLink === link ? "#00FCEE" : "#ffffff",
  });

  return (
    <nav className="navbar navbar-expand-lg navbar-dark p-3 px-5">
      <div className="container-fluid">
        <a
          className="navbar-brand text-white"
          style={{ background: "inherit" }}
          href="/"
          onClick={() => handleNavClick("Home")}
        >
          <img src={logo} width={130} alt="" />
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

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mb-2 mb-lg-0 d-flex align-items-center">
            {[
              "Home",
              "About",
              "Education",
              "Services",
              "Certificates",
              "Contact",
            ].map((link) => (
              <li className="nav-item" key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  style={getLinkStyle(link)}
                  className="nav-link"
                  onClick={() => handleNavClick(link)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
