import React from "react";
import "./About.css";
import about from "..//../assets//about.png";
import { FaAward } from "react-icons/fa";
import { BsPersonWorkspace } from "react-icons/bs";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>AboutMe</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={about} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experiance</h5>
            </article>
            <article className="about__card">
              <BsPersonWorkspace className="about__icon" />
              <h5>Projects</h5>
            </article>
          </div>

          <p>
            I am a recent graduate of Savitribai Phule Pune University, where I
            successfully completed my undergraduate degree. During my time at
            the university, I maintained a strong academic record, achieving a
            commendable Cumulative Grade Point Average (CGPA) of 8.2. This
            educational experience has provided me with a solid foundation in
            various subjects and a strong work ethic that I bring to my
            professional endeavors.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
