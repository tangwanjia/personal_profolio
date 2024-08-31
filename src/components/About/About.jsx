import React from "react";
import aboutCSS from "./../About/About.module.css";
import jspic from "./../../assets/jspic.png";
import premier from "./../../assets/premier.png";
import illu from "./../../assets/illu.png";
import photo from "./../../assets/photo.png";
import react from "./../../assets/react.png";
import figmapic from "./../../assets/figmapic.png";
import github from "./../../assets/github.jpg";
import db from "./../../assets/db.png";
import htmlpic from "./../../assets/htmlpic.png";
import powerapp from "./../../assets/powerapp.png";
import plateform from "./../../assets/plateform.png";
import audi from "./../../assets/audi.png";
import maria from "./../../assets/maria.png";
import ani from "./../../assets/ani.png";
import php from "./../../assets/php.png";

function About() {
  return (
    <div className={`${aboutCSS.AboutWrapper} section`} id="About">
      <div className={aboutCSS.aboutContainer}>
        <h2>About Me</h2>
        <p>
          Hello World! Welcome to my Page.
          <br />I am a student enrolled in Web Development and Internet
          Application(WDIA) program at Algonquin College at present.
          <br />
          <br />
          My whole passion and interests are put in building a website, although
          I am a new bird in this filed. During the past two years of studying
          and working, I could understand and build up websites from design to
          test. Every time when I meet and address the errors, I obtain a big
          sense of success. Meanwhile I am excited to explore new technologies
          and various new programming languages that allow me to improve my
          skills.
          <br />
          <br />I used to paint in 7 years and am crazy about colors. If you
          desire to know who is my favorite painter, I would say it has to be
          Claude Monet. My bachelor degree in Animation, and I am master to work
          in videos edited and graphic design with proper colors. I also have
          the related working experience when I was in China. If you are
          interested in me about work, please do not be hesitate to contact me
          :)
        </p>

        <div className={aboutCSS.skils}>
          <h2>My Skills</h2>
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
        <img src={maria} alt="maria" />
        <img src={db} alt="db" />
        <img src={php} alt="php" />
        <img src={react} alt="react" />
        <img src={jspic} alt="jspic" />
        <img src={github} alt="github" />
        <img src={htmlpic} alt="htmlpic" />
        <img src={powerapp} alt="powerapp" />

        <img src={plateform} alt="plateform" />
        <img src={figmapic} alt="figmapic" />
        <img src={audi} alt="audi" />
        <img src={premier} alt="premier" />
        <img src={illu} alt="illu" />
        <img src={ani} alt="ani" />
        <img src={photo} alt="photoshop" />
      </div>
    </div>
  );
}

export default About;
