import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../Data/images";
import { Link } from "react-scroll";

import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  return (
    <header className="header">
      <nav className="navbar">
        <a href="/" className="logo">
          <img src={images.gericht} alt="logo" />
        </a>
        {/* desktop links */}
        <ul className="desktop-links">
          <li className="nav-item">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="menu"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onClick={closeMenu}
            >
              Menu
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="awards"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onClick={closeMenu}
            >
              Awards
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
        {/* mobile links */}
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a href="/" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" onClick={closeMenu}>
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#testimonials" onClick={closeMenu}>
              Menu
            </a>
          </li>
          <li className="nav-item">
            <a href="#demo" onClick={closeMenu}>
              Awards
            </a>
          </li>
          <li className="nav-item">
            <a href="#demo" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
        <div className="navbar-login">
          <a href="#login">Log In / Register</a>
          <div className="dash" />
          <a href="/">Book A Table</a>
        </div>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <MdOutlineRestaurantMenu
              size={30}
              style={{ color: "#dcca87" }}
              className="menu-icon"
            />
          ) : (
            <GiHamburgerMenu
              size={30}
              style={{ color: "#ffffff" }}
              className="menu-icon"
            />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
