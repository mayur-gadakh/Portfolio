import React from "react";
import "./education.css";

import { AiOutlineArrowRight } from "react-icons/ai";

const Education = () => {
  return (
    <section>
      <h2>Education</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Bachelor's Degree</h3>
          </div>

          <ul className="service__list">
            <li>
              <AiOutlineArrowRight className="service__list-icon" />
              <p>College:</p>
              <p>GS Moze College Of Engineering,Pune</p>
            </li>
            <li>
              <AiOutlineArrowRight className="service__list-icon" />
              <p>Branch:</p>
              <p>Information Technology</p>
            </li>
            <li>
              <AiOutlineArrowRight className="service__list-icon" />
              <p>TimeFrame:</p>

              <p>June 2018 -Jully 2023</p>
            </li>
            <li>
              <AiOutlineArrowRight className="service__list-icon" />
              <p>CGPA:</p>
              <p>8.2/10</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>XII </h3>
          </div>

          <ul className="service__list">
            <li>
              <AiOutlineArrowRight className="service__list-icon" />
              <p>College:</p>
              <p>Shri Shanishwar Junior College,Sonai</p>
            </li>
            <li>
              <AiOutlineArrowRight className="service__list-icon" />

              <p>Branch:</p>
              <p>Computer Science</p>
            </li>
            <li>
              <AiOutlineArrowRight className="service__list-icon" />

              <p>TimeFrame:</p>
              <p>May 2017-June 2018</p>
            </li>
            <li>
              <AiOutlineArrowRight className="service__list-icon" />

              <p>Percentage:</p>
              <p>75% /100</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3> X </h3>
          </div>

          <ul className="service__list">
            <li>
              <AiOutlineArrowRight className="service__list-icon" />
              <p>School:</p>
              <p>New English School MK,Sonai</p>
            </li>
            <li>
              <AiOutlineArrowRight className="service__list-icon" />

              <p>Branch:</p>
              <p>Computer Science</p>
            </li>
            <li>
              <AiOutlineArrowRight className="service__list-icon" />

              <p>TimeFrame:</p>
              <p>May 2015-May 2016</p>
            </li>
            <li>
              <AiOutlineArrowRight className="service__list-icon" />
              <p>Percentage:</p>
              <p>83 % /100</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Education;
