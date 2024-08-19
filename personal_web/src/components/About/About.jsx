import React from "react";
import aboutCSS from "./../About/About.module.css";
import ocean from "./../../assets/ocean.jpg";

function About() {
  return (
    <div className={"${aboutCSS.AboutWrapper} section"}>
      <div className={aboutCSS.aboutContainer}>
        <h2>About Me</h2>
        <p>
          Welcome to my page, I am <strong>Front-end Developer</strong>
          <br />
          looking for a position in website designer and various computer
          languages, good in js, react, network and database
        </p>
      </div>
      <div className={aboutCSS.skilWrapper}>
        <div className={aboutCSS.skil}>
          <h3>JavaScript</h3>
          <div className={aboutCSS.line}></div>
          <h3>HTML</h3>
          <div className={aboutCSS.line}></div>
          <h3>React</h3>
          <div className={aboutCSS.line}></div>
          <h3>Figma</h3>
          <div className={aboutCSS.line}></div>
          <h3>Network</h3>
          <div className={aboutCSS.line}></div>
          <h3>PhotoShop</h3>
          <div className={aboutCSS.line}></div>
          <h3>Illustrator</h3>
          <div className={aboutCSS.line}></div>
          <h3>Premiere</h3>
          <div className={aboutCSS.line}></div>
        </div>
      </div>

      <div className={aboutCSS.AboutImg}>
        <img src={ocean} alt="ocean" />
        <div className={aboutCSS.Intro}>
          <h2>1+ of Experience </h2>
        </div>
      </div>
    </div>
  );
}

export default About;
