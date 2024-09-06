import React, { useRef } from "react";
import navCSS from "./Nav.module.css";
import logo from "./../assets/logo.png";

function Nav() {
  //dark light mode

  const DarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "Dark");
  };

  const LightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "Light");
  };

  DarkMode();

  const ThemeHandler = () => {
    if (document.querySelector("body").getAttribute("data-theme") === "Dark") {
      LightMode();
    } else {
      DarkMode();
    }
  };

  const Navbar = useRef();
  window.addEventListener("scroll", function () {
    if (this.window.scrollY > 100) {
      Navbar.current.classList.add(navCSS.navbarScroll);
    }
  });

  // const [theme, setTheme] = useState("Dark");

  // const toggleTheme = () => {
  //   const newTheme = theme === "Dark" ? "Light" : "Dark";

  //   setTheme(newTheme);

  //   document.querySelector("body").setAttribute("data-theme", newTheme);
  // };

  // useEffect(() => {
  //   document.body.setAttribute("data-theme", theme);
  // }, [theme]);

  // const Menu = useRef();
  // const menuHandler = () => {
  //   Menu.current.classList.toggle(navCSS.activeNav);
  // };
  const Menu = useRef();
  const menuHandler = () => {
    Menu.current.classList.toggle(navCSS.activeNav);
  };

  return (
    <div className={navCSS.Nav} ref={Navbar}>
      <div className={navCSS.logo}>
        {/* <a href="#">Claire Wanjia Tang</a> */}
        <img src={logo} alt="logo" />
      </div>

      <ul ref={Menu}>
        <li>
          <a href="#Home">
            <i className="ri-home-3-line"></i>Home
          </a>
        </li>
        <li>
          <a href="#About">
            <i className="ri-user-line"></i>About
          </a>
        </li>
        <li>
          <a href="#Serv">
            <i className="ri-instance-line"></i>Service
          </a>
        </li>
        <li>
          <a href="#Portft">
            <i className="ri-id-card-line"></i>Portfolio
          </a>
        </li>
        <li>
          <a href="#Contact">
            <i className="ri-phone-line"></i>Contact
          </a>
        </li>
      </ul>

      <div className={navCSS.NavBtns}>
        <i className="ri-moon-line" onClick={ThemeHandler}></i>
        {/* <i className="ri-menu-4-line" onClick={menuHandler}></i> */}
      </div>
    </div>
  );
}

export default Nav;
