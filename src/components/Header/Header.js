import React, { useEffect, useRef, useState } from "react";
import "./Header.css";
import LanguageIcon from "@mui/icons-material/Language";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import { useHistory } from "react-router-dom";

function Header() {
  const ref = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [show, handleShow] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100 || window.location.pathname.includes("search")) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, [])

  return (
    <div data-testid='header_test' className={`header ${show && "header__white"}`}>
      <img
        className="header__icon"
        src={
          show
            ? "https://1000logos.net/wp-content/uploads/2017/08/Airbnb-Logo.png"
            : "https://1000logos.net/wp-content/uploads/2017/08/Airbnb-symbol.jpg"
        }
        alt=""
        onClick={(e) => history.push("/")}
      />
      <div className={`header__center ${show && "header__centerShow"}`}>
        <h1>Places to stay</h1>
        <h1>Experiences</h1>
        <h1>Online Experiences</h1>
      </div>

      <div className={`header__right ${show && "header__rightshow"}`} ref={ref}>
        <p>Become a Host</p>
        <LanguageIcon />
        <div
          className="header__rightOptions"
          onClick={() => setIsMenuOpen((oldState) => !oldState)}
        >
          <div className="header__rightInfo">
            <div className="header__rightMenu">
              <MenuIcon />
            </div>
            <AccountCircleIcon />
          </div>

          {isMenuOpen && (
            <div
              className="header__rightDropdown"
              style={{
                visibility: "visible",
                opacity: "1",
              }}
            >
              <h1>Sign Up</h1>
              <h2>Log in</h2>
              <h3>Host your home</h3>
              <h3>Host an experience</h3>
              <h3>Help</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
