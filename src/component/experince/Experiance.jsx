import React from "react";
import "./experiance.css";
import { AiFillHtml5 } from "react-icons/ai";
import { BiLogoCss3 } from "react-icons/bi";
import { FaBootstrap } from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";
import { BiLogoReact } from "react-icons/bi";
import { BiLogoJava } from "react-icons/bi";
import { BiLogoMongodb } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import { BiLogoSpringBoot } from "react-icons/bi";
import { SiSpringboot } from "react-icons/si";

const Experiance = () => {
  return (
    <section id="experiance">
      <h5>What Skill's I have</h5>
      <h2> My Skill's</h2>

      <div className="container experiance__container">
        <div className="experiance__frontend">
          <h3>Frontend Development </h3>
          <div className="experiance__content">
            <article className="experiance__details">
              <AiFillHtml5 className="experiance__details-icon" />
              <div>
                <h4>HTML</h4>
              </div>
            </article>
            <article className="experiance__details">
              <BiLogoCss3 className="experiance__details-icon" />
              <div>
                <h4>CSS</h4>
              </div>
            </article>
            <article className="experiance__details">
              <BiLogoJavascript className="experiance__details-icon" />
              <div>
                <h4>JavaScript</h4>
              </div>
            </article>
            <article className="experiance__details">
              <BiLogoReact className="experiance__details-icon" />
              <div>
                <h4>React</h4>
              </div>
            </article>
            <article className="experiance__details">
              <FaBootstrap className="experiance__details-icon" />
              <div>
                <h4>BootStrap</h4>
              </div>
            </article>
          </div>
        </div>

        <div className="container__backend">
          <h3>Backend Development </h3>
          <div className="experiance__content">
            <article className="experiance__details">
              <BiLogoJava className="experiance__details-icon" />
              <div>
                <h4>Java</h4>
              </div>
            </article>
            <article className="experiance__details">
              <BiLogoSpringBoot className="experiance__details-icon" />
              <div>
                <h4>JSP</h4>
              </div>
            </article>
            <article className="experiance__details">
              <SiSpringboot className="experiance__details-icon" />
              <div>
                <h4>JDBC</h4>
              </div>{" "}
            </article>
            <article className="experiance__details">
              <BiLogoMongodb className="experiance__details-icon" />
              <div>
                <h4>MongoDB</h4>
              </div>
            </article>
            <article className="experiance__details">
              <SiMysql className="experiance__details-icon" />
              <div>
                <h4>MySql</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiance;
