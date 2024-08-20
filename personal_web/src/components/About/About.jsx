import React from "react";
import aboutCSS from "./../About/About.module.css";
import ocean from "./../../assets/ocean.jpg";

function About() {
  return (
    <div className={`${aboutCSS.AboutWrapper} section`}>
      <div className={aboutCSS.aboutContainer}>
        <h2>About Me</h2>
        <p>
          Welcome to my page, I am <strong>Front-end Developer</strong>
          <br />
          looking for a position in website designer and various computer
          languages, good in js, react, network and database
        </p>

        <div className={aboutCSS.skils}>
          <h2>My Skills</h2>
          <p>xxxxxx</p>
          <div className={aboutCSS.skilWrapper}>
            <div className={aboutCSS.skil}>
              <h3>JavaScript</h3>
              <div className={aboutCSS.line}></div>
            </div>
            <div className={aboutCSS.skil}>
              <h3>HTML & CSS</h3>
              <div className={aboutCSS.line}></div>
            </div>
            <div className={aboutCSS.skil}>
              <h3>React</h3>
              <div className={aboutCSS.line}></div>
            </div>
            <div className={aboutCSS.skil}>
              <h3>Figma</h3>
              <div className={aboutCSS.line}></div>
            </div>

            <div className={aboutCSS.skil}>
              <h3>PhotoShop</h3>
              <div className={aboutCSS.line}></div>
            </div>
            <div className={aboutCSS.skil}>
              <h3>Illustrator</h3>
              <div className={aboutCSS.line}></div>
            </div>
            <div className={aboutCSS.skil}>
              <h3>Premier</h3>
              <div className={aboutCSS.line}></div>
            </div>
          </div>
        </div>
      </div>

      <div className={aboutCSS.AboutImg}>
        <img src={ocean} alt="ocean" />
        <div className={aboutCSS.Exp}>
          <h2>1+ of Experience </h2>
        </div>
      </div>
    </div>
  );
}

export default About;
