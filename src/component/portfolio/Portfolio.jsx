import React from "react";
import "./porfolio.css";
import img1 from "..//..//assets/portfolio1png.png";
import img2 from "..//..//assets/clothing.png";
import img4 from "..//..//assets/todo.png";
import img3 from "..//..//assets/news.png";

const Portfolio = () => {
  return (
    <section id="portfoilo">
      <h5>My Recent Work</h5>
      <h2>Project's</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="porfolio__item-img">
            <img src={img1} alt="" />{" "}
          </div>
          <h3>TimepieceTrends (MERN-FullStack)</h3>
          <div className="portfolio___item-cta">
            <a
              href="https://github.com/mayur-gadakh/MERN-ECommerce.git"
              className="btn"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://ill-pink-macaw-tux.cyclic.cloud/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="porfolio__item-img">
            <img src={img2} alt="" />{" "}
          </div>
          <h3>ClothCrafters (FullStack-Java)</h3>
          <div className="portfolio___item-cta">
            <a
              href="https://github.com/mayur-gadakh/OnlineShoppingProject.git"
              className="btn"
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="porfolio__item-img">
            <img src={img3} alt="" />{" "}
          </div>
          <h3>NewsClone (React)</h3>
          <div className="portfolio___item-cta">
            <a
              href="https://github.com/mayur-gadakh/NewsClone.git"
              className="btn"
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="porfolio__item-img">
            <img src={img4} alt="" />{" "}
          </div>
          <h3>TaskTrackr (MERN-FullStack)</h3>
          <div className="portfolio___item-cta">
            <a
              href="https://github.com/mayur-gadakh/iNotebook.git"
              className="btn"
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
