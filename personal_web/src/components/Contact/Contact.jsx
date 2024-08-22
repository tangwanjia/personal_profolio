import React from "react";
import contactCSS from "./../Contact/Contact.module.css";

function Contact() {
  return (
    <div className={`${contactCSS.ContactWrapper} section`}>
      <h2>Contact Me</h2>
      <p className={contactCSS.pera}>XXXXXX</p>

      <div className={contactCSS.ContactContainer}>
        <div className={contactCSS.ContactInfo}>
          <div className={contactCSS.card}>
            <i className="ri-phone-line"></i>
            <h3>+1 613-200-0000</h3>
          </div>
          <div className={contactCSS.card}>
            <i className="ri-mail-line"></i>
            <h3>example@gmail.com</h3>
          </div>
          <div className={contactCSS.card}>
            <i className="ri-map-pin-line"></i>
            <h3>Toronttttt, ON, Canada </h3>
          </div>
        </div>
        <div className={contactCSS.Contactform}>
          <h3> Let's GET In Touch</h3>
          <div className={contactCSS.inputWrapper}>
            <input type="text" placeholder="Name*" />
          </div>
          <div className={contactCSS.inputWrapper}>
            <input type="email" placeholder="Email*" />
          </div>
          <textarea placeholder="Message"></textarea>

          <button>
            Submit
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
