"use client"

import { useState } from "react"
import "../styles/Navbar.css"

const Navbar = ({ isMobile }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">LOGO</div>

        {isMobile ? (
          <>
            <div className={`mobile-menu-icon ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
              <ul>
                <li className="dropdown">
                  <span>Qualifications</span>
                  <div className="dropdown-content">
                    <a href="#">Option 1</a>
                    <a href="#">Option 2</a>
                    <a href="#">Option 3</a>
                  </div>
                </li>
                <li className="dropdown">
                  <span>Organizations</span>
                  <div className="dropdown-content">
                    <a href="#">Option 1</a>
                    <a href="#">Option 2</a>
                    <a href="#">Option 3</a>
                  </div>
                </li>
                <li className="dropdown">
                  <span>Research & Analysis</span>
                  <div className="dropdown-content">
                    <a href="#">Option 1</a>
                    <a href="#">Option 2</a>
                    <a href="#">Option 3</a>
                  </div>
                </li>
                <li className="dropdown">
                  <span>Lorem ipsum</span>
                  <div className="dropdown-content">
                    <a href="#">Option 1</a>
                    <a href="#">Option 2</a>
                    <a href="#">Option 3</a>
                  </div>
                </li>
                <li className="dropdown">
                  <span>Lorem ipsum</span>
                  <div className="dropdown-content">
                    <a href="#">Option 1</a>
                    <a href="#">Option 2</a>
                    <a href="#">Option 3</a>
                  </div>
                </li>
              </ul>
              <div className="nav-buttons">
                <button className="search-btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </button>
                <button className="enrollment-btn">Enrollment</button>
              </div>
            </div>
          </>
        ) : (
          <div className="desktop-menu">
            <ul>
              <li className="dropdown">
                <span>Qualifications</span>
                <div className="dropdown-content">
                  <a href="#">Option 1</a>
                  <a href="#">Option 2</a>
                  <a href="#">Option 3</a>
                </div>
              </li>
              <li className="dropdown">
                <span>Organizations</span>
                <div className="dropdown-content">
                  <a href="#">Option 1</a>
                  <a href="#">Option 2</a>
                  <a href="#">Option 3</a>
                </div>
              </li>
              <li className="dropdown">
                <span>Research & Analysis</span>
                <div className="dropdown-content">
                  <a href="#">Option 1</a>
                  <a href="#">Option 2</a>
                  <a href="#">Option 3</a>
                </div>
              </li>
              <li className="dropdown">
                <span>Lorem ipsum</span>
                <div className="dropdown-content">
                  <a href="#">Option 1</a>
                  <a href="#">Option 2</a>
                  <a href="#">Option 3</a>
                </div>
              </li>
              <li className="dropdown">
                <span>Lorem ipsum</span>
                <div className="dropdown-content">
                  <a href="#">Option 1</a>
                  <a href="#">Option 2</a>
                  <a href="#">Option 3</a>
                </div>
              </li>
            </ul>
            <div className="nav-buttons">
              <button className="search-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button>
              <button className="enrollment-btn">Enrollment</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
