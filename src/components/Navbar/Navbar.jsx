import React, { useState, useEffect } from "react";
import logo from '../../assets/11.png';

function Navbar() {
  const [activeLink, setActiveLink] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (link) => {
    setActiveLink(link);
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu on resize or outside click
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleClickOutside = (event) => {
      if (!event.target.closest('.navbar')) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const navLinks = [
    "Home",
    "About",
    "Education",
    "Services",
    "Certificates",
    "Contact",
  ];

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <a
            href="/"
            onClick={() => handleNavClick("Home")}
            className="navbar-logo"
          >
            <img src={logo} alt="Logo" className="logo-img" />
          </a>

          <button
            className="hamburger"
            onClick={(e) => {
              e.stopPropagation();
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg 
              className={`hamburger-icon ${isMobileMenuOpen ? 'open' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={() => handleNavClick(link)}
                  className={`nav-link ${activeLink === link ? "active" : ""}`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu with Overlay */}
        <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu">
            <ul>
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    onClick={() => handleNavClick(link)}
                    className={`nav-link ${activeLink === link ? "active" : ""}`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Updated responsive styles */}
      <style>
        {`
          .navbar {
            // background-color: black;
            color: white;
            padding: 0.75rem 1.25rem;
            position: relative;
            z-index: 1000;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }

          .navbar-container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            max-width: 1200px;
            margin: 0 auto;
            width: 100%;
          }

          .navbar-logo {
            display: flex;
            align-items: center;
            text-decoration: none;
          }

          .logo-img {
            width: 130px;
            height: auto;
            transition: transform 0.3s ease;
          }

          .logo-img:hover {
            transform: scale(1.05);
          }

          .hamburger {
            display: none;
            background: none;
            border: none;
            color: white;
            cursor: pointer;
            padding: 0.5rem;
            border-radius: 0.25rem;
            transition: background-color 0.3s ease;
            z-index: 1001;
          }

          .hamburger:hover {
            background-color: rgba(255, 255, 255, 0.1);
          }

          .hamburger-icon {
            width: 1.5rem;
            height: 1.5rem;
            transition: transform 0.3s ease;
          }

          .hamburger-icon.open {
            transform: rotate(180deg);
          }

          .navbar-links {
            display: flex;
            gap: 0.5rem;
            margin: 0;
            padding: 0;
            list-style: none;
            align-items: center;
          }

          .nav-link {
            display: block;
            padding: 0.75rem 1rem;
            color: white;
            text-decoration: none;
            transition: all 0.3s ease;
            border-radius: 0.25rem;
            // font-weight: 500;
            position: relative;
          }

          .nav-link:hover {
            color: #00FCEE;
            // background-color: rgba(0, 252, 238, 0.1);
          }

          .nav-link.active {
            color: #00FCEE;
            // background-color: rgba(0, 252, 238, 0.2);
          }

          .mobile-menu-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.8);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 999;
          }

          .mobile-menu-overlay.open {
            opacity: 1;
            visibility: visible;
          }

          .mobile-menu {
            position: fixed;
            top: 0;
            left: 0;
            width: 80%;
            height: 100%;
            background-color: #060606;
            padding: 1.5rem;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
            transform: translateX(-100%);
            transition: transform 0.3s ease;
            border-right: 1px solid rgba(0, 252, 238, 0.2);
          }

          .mobile-menu-overlay.open .mobile-menu {
            transform: translateX(0);
          }

          .mobile-menu ul {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            margin: 0;
            padding: 0;
            list-style: none;
          }

          .mobile-menu .nav-link {
            padding: 1rem;
            text-align: left;
            border: 1px solid transparent;
            transition: all 0.3s ease;
          }

          .mobile-menu .nav-link:hover {
            border-color: #00FCEE;
            background-color: rgba(0, 252, 238, 0.1);
          }

          /* Tablet Styles */
          @media (max-width: 1024px) {
            .hamburger {
              display: block;
            }

            .navbar-links {
              display: none;
            }

            .navbar {
              padding: 1rem 1.25rem;
            }
          }

          /* Mobile Styles */
          @media (max-width: 768px) {
            .navbar {
              padding: 0.75rem 1rem;
            }

            .navbar-container {
              padding: 0;
            }

            .logo-img {
              width: 100px;
            }

            .mobile-menu {
              padding: 1rem;
            }

            .mobile-menu .nav-link {
              padding: 1rem;
              font-size: 1rem;
            }
          }

          /* Small Mobile Styles */
          @media (max-width: 480px) {
            .navbar {
              padding: 0.5rem 0.75rem;
            }

            .logo-img {
              width: 80px;
            }

            .mobile-menu {
              padding: 0.75rem;
            }

            .mobile-menu .nav-link {
              padding: 0.8rem;
              font-size: 0.95rem;
            }

            .hamburger-icon {
              width: 1.25rem;
              height: 1.25rem;
            }
          }

          /* Large Desktop Styles */
          @media (min-width: 1200px) {
            .navbar {
              padding: 1rem 2rem;
            }

            .logo-img {
              width: 150px;
            }

            .navbar-links {
              // gap: -1rem;
            }

            .nav-link {
              padding: 1rem 1.5rem;
              font-size: 1.1rem;
            }
          }

          /* Accessibility improvements */
          @media (prefers-reduced-motion: reduce) {
            .nav-link,
            .hamburger-icon,
            .mobile-menu,
            .mobile-menu-overlay,
            .logo-img {
              transition: none;
            }
          }
        `}
      </style>
    </>
  );
}

export default Navbar;