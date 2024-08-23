import React from "react";
import portfolioCSS from "./../Portf/portfolio.module.css";
import books from "./../../assets/books.jpg";
import travel from "./../../assets/travel.jpg";
import coop from "./../../assets/coop.jpg";
import shoppin from "./../../assets/shoppin.jpg";

function Portfolio() {
  return (
    <div className={`${portfolioCSS.PortfWrapper} section`} id="Portft">
      <h1>Portfolio</h1>

      <div className={portfolioCSS.Worklist}>
        <div className={portfolioCSS.WorkProject}>
          <img src={books} alt="contact" />

          <h3> Contact Books</h3>
          <p>PHP</p>
          <a href="#">
            <i className="ri-external-link-line"></i>
          </a>
        </div>
        <div className={portfolioCSS.WorkProject}>
          <img src={travel} alt="travel" />

          <h3>Trave Web</h3>
          <p>Figma</p>
          <a href="#">
            <i className="ri-external-link-line"></i>
          </a>
        </div>
        <div className={portfolioCSS.WorkProject}>
          <img src={coop} alt="coop" />

          <h3> Kudo </h3>
          <p>React</p>
          <a href="#">
            <i className="ri-external-link-line"></i>
          </a>
        </div>
        <div className={portfolioCSS.WorkProject}>
          <img src={shoppin} alt="shoppin" />

          <h3> Shopping cart (Mobile App) </h3>
          <p>React</p>
          <a href="#">
            <i className="ri-external-link-line"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
