import React from "react";
import "./internship.css";

import img from "..//..//src/assets/intern.png";

const Internship = () => {
  return (
    <section>
      <h5>What Experiance I have</h5>
      <h2> My Experiance</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={img} alt="" />
          </div>
        </div>
        <div className="intern__content">
          <h5 className="head">
            Web Developer Intern @ TRON SOFTECH SOLUTIONS
          </h5>

          <p>TimeFrame :Jan 2022 – Sept 2022</p>
          <h5>Role :</h5>

          <p>• Managing UI using HTML,CSS,BOOTSTRAP and ReactJS</p>
          <p>• Creating Dynamic Web Pages using java ,jsp</p>
          <p>• working on JDBC for fetching the data from backend</p>
        </div>
      </div>
    </section>
  );
};

export default Internship;
