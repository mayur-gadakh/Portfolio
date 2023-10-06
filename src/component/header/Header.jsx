import React from "react";
import "./header.css";
import CTA from "./CTA";

import bg from "../../assets/bg.png";
import HeaderSocial from "./HeaderSocial";
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hi.. I'm </h5>
        <h1>Mayur Gadakh</h1>
        <h5 className="text-light">FullStack Web Developer</h5>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={bg} alt="me" />
        </div>
      </div>
    </header>
  );
};

export default Header;
