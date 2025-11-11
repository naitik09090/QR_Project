// import img1 from "../assets/logo.jpg";
import React from "react";
import { FaQrcode } from "react-icons/fa";
import logo from "../assets/logo.webp";
import { Link } from "react-bootstrap-icons";

const Navbar = () => {
  return (

    <nav className="navbar navbar-expand-lg bg-white border-bottom px-4 py-2">
      <div className="container-fluid">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          {/* Left side: Brand Clock */}
          <a href="/" aria-label="Home page">
            <img src={logo} alt="QRIFY Logo" width={174} height={64} style={{ objectFit: "contain" }} />
          </a>

          {/* Right side: Toggle Button */}
          <button
            className="navbar-toggler border-0"
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
            <FaQrcode className="navbar-toggler-icon" size={24} />
          </button>
        </div>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <div className="d-flex flex-column flex-sm-row link11 gap-2 justify-content-sm-end align-items-sm-center ms-auto text-center">
            <a href="/about" className="text-nowrap">About</a>
            <a href="/privacy-policy" className="text-nowrap">Privacy Policy</a>
            <a href="/terms" className="text-nowrap">Terms</a>
            <a href="/contact" className="text-nowrap">Contact</a>
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
