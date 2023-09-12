import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return<header>
        
  <nav className="navbar navbar-expand-lg fixed-top p-3" style={{ backgroundColor: "#2C3E50", zIndex: 999999999999999999 , color:"white" }}>
  <div className="container-fluid">
      <Link className="navbar-brand p-lg-3 navbar-brand text-white text-uppercase fw-bolder fs-2"  to="/">START FRAMEWORK</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <i className="fa-solid fa-bars bar-icon"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
          <li className="nav-item">
          <Link className="nav-link scrollto p-lg-3 about-link nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2"   to="about">ABOUT</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link scrollto p-lg-3 services-link nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2"   to="portfolio">PORTFOLIO</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link scrollto p-lg-3 work-link nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2"  to="Contact">Contact</Link>
          </li>
      </ul>
      </div>
  </div>
  </nav>
</header>
}
