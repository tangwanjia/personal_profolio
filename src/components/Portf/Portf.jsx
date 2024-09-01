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
          <a href="https://www.figma.com/proto/tRuaOj9SjgQDoFUye9rjyg/Wireframes?page-id=136%3A631&node-id=237-705&starting-point-node-id=237%3A705&t=Hk0ce9w2pEan3obi-1">
            <img src={travel} alt="travel" />
          </a>
          <h3>Trave Web</h3>
          <p>Figma</p>
        </div>

        <div className={portfolioCSS.WorkProject}>
          <a href="https://www.figma.com/proto/kxoKkbRPWWyNVzy3pWe4kv/Untitled?page-id=0%3A1&node-id=1-2&node-type=FRAME&viewport=536%2C679%2C0.5&t=u7uOFESHOs1MAaps-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A2">
            <img src={coop} alt="coop" />
          </a>
          <h3> Kudo </h3>
          <p>React</p>
        </div>
        <div className={portfolioCSS.WorkProject}>
          <a href="https://www.figma.com/proto/5TzDJuDAi5TFb2Jo5KWjaE/TASK?node-id=105-509&node-type=FRAME&t=8u4I4wVydF8tuCMU-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=105%3A722">
            <img src={shoppin} alt="shoppin" />
          </a>
          <h3> Shopping cart (Mobile App) </h3>
          <p>React</p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
