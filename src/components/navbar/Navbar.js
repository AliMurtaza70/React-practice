import React from "react";
import "./navbar.css";
import { Link, useLocation } from "react-router-dom";

const socialLinks = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "Create Blog", path: "/create-blog" },
  { id: 3, name: "Contact", path: "/contact" },
  { id: 4, name: "About Us", path: "/about-us" },  
];

export default function Navbar() {
  const location = useLocation();

  return (
    <nav>
      <div className="container">
        <div className="nav-content">
          <h1>Blog Bazar</h1>
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
        </div>
      </div>
    </nav>
  );
}
