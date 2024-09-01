import React, { useRef } from "react";
import emailjs from "emailjs-com";
import contactCSS from "./../Contact/Contact.module.css";

function Contact() {
  function sendEmail(event) {
    event.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        event.target,
        import.meta.env.VITE_EMAIL_USER_ID
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  }

  return (
    <div className={`${contactCSS.ContactWrapper} section`} id="Contact">
      <h2>Contact Me</h2>
      <p className={contactCSS.pera}>
        I usually response within 24 hours, I will get back to you as soon as I
        can!!!!
      </p>

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
          <h3> Let's Get In Touch</h3>

          <form onSubmit={sendEmail} action="">
            <div className={contactCSS.inputWrapper}>
              <input type="text" name="name" placeholder="Name*" required />
            </div>
            <div className={contactCSS.inputWrapper}>
              <input type="email" name="email" placeholder="Email*" required />
            </div>
            <textarea name="message" placeholder="Message" required></textarea>

            <button>
              Submit
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
