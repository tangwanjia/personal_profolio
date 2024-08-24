import React from "react";
import serviceCSS from "./../Serv/Serv.module.css";

function Service() {
  return (
    <div className={`${serviceCSS.ServiceWrapper} section`} id="Serv">
      <h2>What I do</h2>
      <p className={serviceCSS.pera}>
        I have the related working experience in these four below areas:
      </p>

      <div className={serviceCSS.ServiceCards}>
        <div className={serviceCSS.ServiceCard}>
          <i className="ri-database-line"></i>
          <h3> Web Development </h3>
          <p>Work in react & javascript + build up projects in PowerApp.</p>
        </div>

        <div className={serviceCSS.ServiceCard}>
          <i className="ri-pantone-line"></i>
          <h3> Product & Website Designer </h3>
          <p>Design funtion & Web by Figma</p>
        </div>

        <div className={serviceCSS.ServiceCard}>
          <i className="ri-smartphone-line"></i>
          <h3> App Development </h3>
          <p>work in javascript and figma</p>
        </div>
        <div className={serviceCSS.ServiceCard}>
          <i className="ri-video-line"></i>
          <h3> Video Maker </h3>
          <p>Make videos + edit photos by premier & photoshop & audition</p>
        </div>
      </div>
    </div>
  );
}

export default Service;
