import React from "react";
import { socialLinks } from "../utils/config";

const Footer = () => {
  return (
    <div className="countdown-footer">
      <div className="links-wrapper">
        {socialLinks.map((link) => (
          <a
            key={link?.id}
            href="/"
            aria-label={link?.label}
            className="social-link"
            onClick={(e) => e.preventDefault()}
          >
            <img src={link?.icon} alt={link?.label} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
