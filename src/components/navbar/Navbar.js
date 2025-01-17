import React from "react";
import "./navbar.css";
import { Link, useLocation } from "react-router-dom";

const socialLinks = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Menu", path: "/menu" },
  { id: 4, name: "Pages", path: "/pages" },
  { id: 5, name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <nav>
      <div className="container">
        <div className="nav-content">
          <img src="/images/Logo.png" alt="Logo" />
          <ul className="social-links">
            {socialLinks.map((link) => (
              <Link
                key={link.id}
                to={link.path}
                style={{
                  backgroundColor:
                    location.pathname === link.path ? "#DBDFD0" : "transparent",
                }}
                className="social-link"
              >
                {link.name}
              </Link>
            ))}
          </ul>
          <button>Book A Table</button>
        </div>
      </div>
    </nav>
  );
}
