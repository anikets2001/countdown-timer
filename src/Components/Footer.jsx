import React from "react";
import Facebook from "../assets/images/icon-facebook.svg";
import Pinterest from "../assets/images/icon-pinterest.svg";
import Instagram from "../assets/images/icon-instagram.svg";

const Footer = () => {
  return (
    <div className="countdown-footer">
      <div className="links-wrapper">
        <a href="/" className="social-link">
          <img src={Facebook} alt="Facebook" aria-label="facebook" />
        </a>
        <a href="/" className="social-link" aria-label="pinterest">
          <img src={Pinterest} alt="Pinterest" />
        </a>
        <a href="/" className="social-link" aria-label="instagram">
          <img src={Instagram} alt="Instagram" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
