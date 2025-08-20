import React from "react"
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { FaQrcode } from 'react-icons/fa';
import "bootstrap/dist/css/bootstrap.min.css";

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    setVisible(scrolled > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  return (
    <Button
      variant="dark"
      className="back-to-top-btn"
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: "10px",
        right: "10px",
        display: visible ? "inline" : "none",
        borderRadius: "50%",
        padding: "10px 15px",
        zIndex: 1000,
      }}
    >
      <FaQrcode size={24} />
    </Button>
  );
};

export default BackToTopButton;
