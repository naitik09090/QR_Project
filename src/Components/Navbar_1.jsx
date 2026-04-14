// import img1 from "../assets/logo.jpg";
import React from "react";
import { FaQrcode } from "react-icons/fa";
// import { Link } from "react-bootstrap-icons";
import logo from "../assets/logo.webp";
// import "../css/Navbar.scss";

const Navbar = () => {
  return (

    <nav className="navbar custom-navbar navbar-expand-lg bg-white d-block">
      <div className="container-fluid d-flex align-items-center">
        {/* Left side: Brand Logo */}
        <a href="/" aria-label="Home page">
          <img src={logo} alt="TheQRIFY Logo" width={44} height={44} style={{ objectFit: "contain" }} />
        </a>

        {/* Right side: Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => {
            const navbar = document.getElementById('collapsibleNavbar');
            if (navbar.classList.contains('show')) {
              navbar.classList.remove('show');
            } else {
              navbar.classList.add('show');
            }
          }}
          aria-label="Toggle navigation"
        >
          <FaQrcode size={24} />
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <div className="d-flex flex-column flex-lg-row justify-content-end ms-auto text-center gap-1">
            <a href="/blog">Blog</a>
            <a href="/about">About</a>
            <a href="/privacy_policy">Privacy Policy</a>
            <a href="/terms">Terms</a>
            <a href="/contact">Contact</a>
          </div>
        </div>

      </div>
    </nav>
    // {/* Auth Buttons */}
    // {/* <div className="d-flex gap-2 justify-content-end ms-auto">
    //               <a href="/login">
    //                   <button className="btn btn-outline-secondary rounded-pill">Log In</button>
    //               </a>
    //               <a href="/signUp">
    //                   <button className="btn btn-primary rounded-pill">Register</button>
    //               </a>
    //           </div> */}
  );
};

export default Navbar;
