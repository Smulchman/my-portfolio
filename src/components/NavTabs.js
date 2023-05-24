import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/index.css";
// potentially remove the contact tab, and move it to footer or move it to about page or both
// still think I can make it it's own indipendent js file
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav class="navbar fixed-top bg-light">
      <div>
        <ul className="nav">
          <li className="nav-item">
            <a
              href="#home"
              onClick={() => handlePageChange("Home")}
              // ternary statement to set current tab
              className={
                currentPage === "Home" ? "nav-link active" : "nav-link"
              }
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#about"
              onClick={() => handlePageChange("About")}
              className={
                currentPage === "About" ? "nav-link active" : "nav-link"
              }
            >
              About
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
