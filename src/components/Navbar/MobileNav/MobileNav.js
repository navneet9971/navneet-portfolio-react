import React from "react";
import "../../../styles/Navbar/MobileNav.css";

import logo from "../../../assets/images/navbar-logo.jpg";

const MobileNav = ({ isOpen, toggleMenu }) => {

    return (
        <>
        <div className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}>

            <div className="mobile-menu-container">
                <img className="logo" src={logo} alt="" />

                <ul>
                    <li>
                        <a className="menu-item" href="#home">Home</a>
                        </li>
                        <li>
                    <a className="menu-item" href="#skills">Skills</a>
                </li>
                <li>
                    <a className="menu-item" href="#work">Work Experience</a>
                </li>
                <li>
                    <a className="menu-item" href="#contact">Contact us</a>
                </li>

                <button className="contact-btn" onClick={() => {}}>
                    Hire Me
                </button>
                </ul>
            </div>
        </div>
        </>
    )
}

export default MobileNav;