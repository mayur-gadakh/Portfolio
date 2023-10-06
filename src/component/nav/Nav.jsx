import React from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineBook } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { FaComputer } from "react-icons/fa6";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <div className="navigation">
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experiance"
        onClick={() => setActiveNav("#experiance")}
        className={activeNav === "#experiance" ? "active" : ""}
      >
        <AiOutlineBook />
      </a>
      <a
        href="#portfoilo"
        onClick={() => setActiveNav("#portfoilo")}
        className={activeNav === "#portfoilo" ? "active" : ""}
      >
        <FaComputer />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <AiOutlinePhone />
      </a>
    </div>
  );
};

export default Nav;
