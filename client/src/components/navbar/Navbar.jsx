import { useState, useEffect } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

import logo from "../../assets/logo.svg";

import "./navbar.css";
import { Link, Outlet } from "react-router-dom";

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#whpt3">WhatisGPT?</a>
    </p>
    <p>
      <a href="#possibility">OpenAI</a>
    </p>
    <p>
      <a href="#features">Case Studies</a>
    </p>
    <p>
      <a href="#blog">Library</a>
    </p>
  </>
);

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setNavbar(scrollY >= 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={navbar ? "gpt3__navbar active" : "gpt3__navbar"}>
        <div className="gpt3__navbar-links">
          <div className="gpt3__navbar-links_logo">
            <a href="#home">
              <img src={logo} alt="logo" />
            </a>
          </div>

          <div className="gpt3__navbar-links_container">
            <Menu />
          </div>
        </div>

        <div className="gpt3__navbar-sign">
          <p>
            <Link to="auth">Sign in</Link>
          </p>
          <button type="button">Sign Up</button>
        </div>

        <div className="gpt3__navbar-menu">
          {toggleMenu ? (
            <RiCloseLine
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="gpt3__navbar-menu_container scale-up-center">
              <div className="gpt3__navbar-menu_container-links">
                <Menu />
              </div>
              <div className="gpt3__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button className="singup-btn" type="button">
                  Sign up
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <Outlet />
    </>
  );
};
export default Navbar;
