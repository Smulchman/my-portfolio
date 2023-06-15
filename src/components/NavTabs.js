// imports
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/index.css";

// navigation component
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar fixed-top bg-white">
      <div>
        <ul className="nav">
          <li className="nav-item">
            <a
              href=""
              onClick={() => handlePageChange("Home")}
              // ternary statement to set current tab's style
              className={
                currentPage === "Home" ? "nav-link active" : "nav-link"
              }
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#projects"
              onClick={() => handlePageChange("Projects")}
              className={
                currentPage === "Projects" ? "nav-link active" : "nav-link"
              }
            >
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#resume"
              onClick={() => handlePageChange("Resume")}
              className={
                currentPage === "Resume" ? "nav-link active" : "nav-link"
              }
            >
              Resume
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contact"
              onClick={() => handlePageChange("Contact")}
              className={
                currentPage === "Contact" ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavTabs;
