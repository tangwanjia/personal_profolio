import React from "react";
import aboutCSS from "./../About/About.module.css";
import jspic from "./../../assets/jspic.png";
import premier from "./../../assets/premier.png";
import illu from "./../../assets/illu.png";
import photo from "./../../assets/photo.png";
import react from "./../../assets/react.png";
import figmapic from "./../../assets/figmapic.png";
import github from "./../../assets/github.png";
import db from "./../../assets/db.png";
import htmlpic from "./../../assets/htmlpic.png";

function About() {
  return (
    <div className={`${aboutCSS.AboutWrapper} section`} id="About">
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
        <img src={jspic} alt="jspic" />
        <img src={premier} alt="premier" />
        <img src={illu} alt="illu" />
        <img src={photo} alt="photoshop" />
        <img src={react} alt="react" />
        <img src={figmapic} alt="figmapic" />
        <img src={github} alt="github" />
        <img src={db} alt="db" />
        <img src={htmlpic} alt="htmlpic" />
      </div>
    </div>
  );
}

export default About;
