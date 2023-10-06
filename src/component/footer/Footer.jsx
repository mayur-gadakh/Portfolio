import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <h4 className="footer__logo">Follow Me </h4>
      <div className="footer__social">
        <a href="https://www.linkedin.com/in/mayur-gadakh-b007371b2/">
          <BsLinkedin />
        </a>
        <a href="https://github.com/mayur-gadakh">
          <BsGithub />
        </a>
        <a href="https://twitter.com/MayurGadakh1311">
          <FaSquareXTwitter />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; .All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
