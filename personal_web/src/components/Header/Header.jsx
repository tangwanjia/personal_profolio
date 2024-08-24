import React from "react";
import headerCSS from "./../Header/header.module.css";
import flower from "./../../assets/flower.jpg";

function Header() {
  return (
    <div className={headerCSS.headerWrapper} id="Home">
      <div className={headerCSS.headerContainer}>
        <img src={flower} alt="flower" />
        <h1>
          Hello, I am <span>Claire Wanjia Tang</span>
        </h1>
        <p>
          Welcome to my page, I am <strong>Front-end Developer</strong>
          <br />
          With passion for coding and a focus on product and web design.
        </p>
        <div className={headerCSS.social}>
          <i className="ri-linkedin-line"></i>
          <i className="ri-github-line"></i>
        </div>
        <button>
          Download Resume
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  );
}

export default Header;
