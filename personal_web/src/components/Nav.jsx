import React, { useRef } from "react";
import navCSS from "./Nav.module.css";

function Nav() {
  const Menu = useRef();

  const menuHandler = () => {
    Menu.current.classList.toggle(navCSS.activeNav);
  };

  return (
    <div className={navCSS.Nav}>
      <div className={navCSS.logo}>
        <a href="#">Claire Wanjia Tang</a>
      </div>

      <ul ref={Menu}>
        <li>
          <a href="#">
            <i className="ri-home-3-line"></i>Home
          </a>
        </li>
        <li>
          <a href="#">
            <i className="ri-user-line"></i>About
          </a>
        </li>
        <li>
          <a href="#">
            <i className="ri-instance-line"></i>Service
          </a>
        </li>
        <li>
          <a href="#">
            <i className="ri-id-card-line"></i>Portfolio
          </a>
        </li>
        <li>
          <a href="#">
            <i className="ri-group-line"></i> Testimonial
          </a>
        </li>
        <li>
          <a href="#">
            <i className="ri-news-line"></i>Blogs
          </a>
        </li>
        <li>
          <a href="#">
            <i className="ri-phone-line"></i>Contact
          </a>
        </li>
      </ul>

      <div className={navCSS.NavBtns}>
        <i className="ri-moon-line" onClick={menuHandler}></i>
        <i className="ri-menu-4-line"></i>
        {/* <i className="ri-menu-4-line" onClick={menuHandler}></i> */}
      </div>
    </div>
  );
}

export default Nav;
