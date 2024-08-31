import React from "react";
import headerCSS from "./../Header/header.module.css";
import flower from "./../../assets/flower.jpg";

function Header() {
  const resume = () => {
    const pdfURL = "claire.pdf";
    const link = document.createElement("a");
    link.href = pdfURL;
    link.download = "claire.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
        <button onClick={resume} className={headerCSS.cv}>
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
