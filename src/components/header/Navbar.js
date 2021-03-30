import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import "../../stylesheets/Navbar.css";
import logo from "../../images/logo-green.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseUser } from "@fortawesome/free-solid-svg-icons";
import Burger from "@animated-burgers/burger-slip";
import "@animated-burgers/burger-slip/dist/styles.css";

import RowLinks from "./RowLinks";
export default function Navbar({ useWindowSize, id, dispatch }) {
  const [isOpen, setIsOpen] = useState(false); // Hook gérant le toggle de l'hamburger
  const [isVisible, setIsVisible] = useState(true); // Hook gérant l'affichage de RowLinks selon le breakpoint

  const [width] = useWindowSize();

  const myAccountLink = useRef(null);
  const hamburger = useRef(null);

  useEffect(() => {
    if (width >= 768) {
      setIsVisible(true);
      setIsOpen(false);
    }
  }, [isOpen, width]);

  const toggleBurger = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = (ref) => {
    if (width >= 600) {
      ref.current.style.borderBlockEnd = "2px solid #45827f";
    }
  };

  const handleMouseLeave = (ref) => {
    ref.current.style.borderBlockEnd = "none";
  };

  const linkStyle = {
    display: "flex",
    justifyContent: "center",
    textDecoration: "none",
  };

  return (
    <div>
      <nav className="navbar-row">
        <img src={logo} alt="logo" className="brand-image" />
        {isVisible && !isOpen && (
          <RowLinks
            isOpen={isOpen}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            linkStyle={linkStyle}
          />
        )}
        <div className="row-hamburger" ref={hamburger}>
          <Burger isOpen={isOpen} onClick={() => toggleBurger()} />
        </div>

        <div className="row-house">
          <div
            ref={myAccountLink}
            className="link-container"
            onMouseEnter={() => handleMouseEnter(myAccountLink)}
            onMouseLeave={() => handleMouseLeave(myAccountLink)}
          >
            <Link to="/account" style={linkStyle}>
              <div className="link-inner">
                <FontAwesomeIcon
                  icon={faHouseUser}
                  size={width >= 600 ? "2x" : "3x"}
                />
                {width >= 600 && <h1 className="nav-text-link">Mon compte</h1>}
              </div>
            </Link>
          </div>
        </div>
      </nav>
      {isVisible && isOpen && (
        <div className="row-links-out">
          <RowLinks
            isOpen={isOpen}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            linkStyle={linkStyle}
          />
        </div>
      )}
    </div>
  );
}
