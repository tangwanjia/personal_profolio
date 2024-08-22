import React from "react";
import serviceCSS from "./../Serv/Serv.module.css";

function Service() {
  return (
    <div className={`${serviceCSS.ServiceWrapper} section`}>
      <h2>What I do</h2>
      <p className={serviceCSS.pera}>xxxxxxxxxx</p>

      <div className={serviceCSS.ServiceCards}>
        <div className={serviceCSS.ServiceCard}>
          <i className="ri-database-line"></i>
          <h3> Web Development </h3>
          <p>XXXX</p>
          <h4>
            Lean Morn <i className="ri-arrow-right-line"></i>
          </h4>
        </div>

        <div className={serviceCSS.ServiceCard}>
          <i className="ri-pantone-line"></i>
          <h3> UI/UX designer </h3>
          <p>XXXX</p>
          <h4>
            Lean Morn <i className="ri-arrow-right-line"></i>
          </h4>
        </div>

        <div className={serviceCSS.ServiceCard}>
          <i className="ri-smartphone-line"></i>
          <h3> App Development </h3>
          <p>XXXX</p>
          <h4>
            Lean Morn <i className="ri-arrow-right-line"></i>
          </h4>
        </div>
        <div className={serviceCSS.ServiceCard}>
          <i className="ri-video-line"></i>
          <h3> Video Maker </h3>
          <p>XXXX</p>
          <h4>
            Lean Morn <i className="ri-arrow-right-line"></i>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Service;
