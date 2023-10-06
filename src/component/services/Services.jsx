import React from "react";
import "./services.css";

import { BsFillArrowRightCircleFill } from "react-icons/bs";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Website Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsFillArrowRightCircleFill className="service__list-icon" />
              <p>
                Tailored Designs: I work closely with each client to craft
                custom web designs..
              </p>
            </li>
            <li>
              <BsFillArrowRightCircleFill className="service__list-icon" />

              <p>
                User-Centric Approach: I ensure that every aspect of your
                website is user-friendly, engaging, and meets the specific needs
                of your target audience.
              </p>
            </li>
            <li>
              <BsFillArrowRightCircleFill className="service__list-icon" />

              <p>
                Mobile Responsiveness: I guarantee that your website will look
                and function flawlessly on all devices, from smartphones to
                desktops.
              </p>
            </li>
            <li>
              <BsFillArrowRightCircleFill className="service__list-icon" />

              <p>
                Lightning-Fast Speed: I optimize your website's performance to
                ensure fast loading times and smooth interactions.
              </p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Website Development </h3>
          </div>

          <ul className="service__list">
            <li>
              <BsFillArrowRightCircleFill className="service__list-icon" />
              <p>
                Custom Web Solutions: I specialize in crafting custom web
                solutions that precisely align with your unique business needs
                and objectives.
              </p>
            </li>
            <li>
              <BsFillArrowRightCircleFill className="service__list-icon" />

              <p>
                Database Integration: I have extensive experience in integrating
                databases, including MySQL, to efficiently store, manage, and
                retrieve data for your applications
              </p>
            </li>
            <li>
              <BsFillArrowRightCircleFill className="service__list-icon" />

              <p>
                Efficient Coding: I follow industry best practices and employ
                efficient coding techniques to build robust, scalable, and
                high-performance web applications
              </p>
            </li>
            <li>
              <BsFillArrowRightCircleFill className="service__list-icon" />

              <p>
                API Integration: I can integrate third-party APIs to expand the
                functionality of your web applications and provide additional
                features and services
              </p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>SEO </h3>
          </div>

          <ul className="service__list">
            <li>
              <BsFillArrowRightCircleFill className="service__list-icon" />
              <p>
                Customized SEO Strategies: I develop personalized SEO strategies
                tailored to your unique business goals and target audience
              </p>
            </li>
            <li>
              <BsFillArrowRightCircleFill className="service__list-icon" />

              <p>
                Content Creation: I create high-quality, SEO-friendly content
                that resonates with your audience and aligns with search engine
                best practices.
              </p>
            </li>
            <li>
              <BsFillArrowRightCircleFill className="service__list-icon" />

              <p>
                Technical SEO: I address technical aspects such as website
                speed, mobile-friendliness, and schema markup to improve overall
                website performance.
              </p>
            </li>
            <li>
              <BsFillArrowRightCircleFill className="service__list-icon" />

              <p>
                Local SEO: For businesses targeting local markets, I optimize
                your online presence to dominate local search results and
                attract local customers
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
