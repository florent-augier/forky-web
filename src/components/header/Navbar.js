import React, { useState, useRef, useEffect, useReducer } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import "../../stylesheets/Navbar.css";
import logo from "../../images/logo-green.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseUser } from "@fortawesome/free-solid-svg-icons";
import Burger from "@animated-burgers/burger-slip";
import "@animated-burgers/burger-slip/dist/styles.css";
import idReducer from "../../reducers/id";

import RowLinks from "./RowLinks";
import ListUsers from "../list-users/ListUsers";
import Account from "../account/Account";
import MyLunches from "../my-lunches/MyLunches";
import MyAccount from "../account/MyAccount";

export default function Navbar({ useWindowSize, myId, myName }) {
  const [id, dispatch] = useReducer(idReducer, "");

  const [isOpen, setIsOpen] = useState(false); // Hook gérant le toggle de l'hamburger
  const [isVisible, setIsVisible] = useState(true); // Hook gérant l'affichage de RowLinks selon le breakpoint

  const [width] = useWindowSize();

  const myAccountLink = useRef(null);
  const hamburger = useRef(null);

  useEffect(() => {
    console.log("depuis ma navbar", id);
  });

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
    <Router>
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
            {id !== "" || myId !== "" ? (
              <Link to="/my-account" style={linkStyle}>
                <div className="link-inner">
                  <FontAwesomeIcon
                    icon={faHouseUser}
                    size={width >= 600 ? "2x" : "3x"}
                  />
                  {width >= 600 && (
                    <h1 className="nav-text-link">Mon compte</h1>
                  )}
                </div>
              </Link>
            ) : (
              <Link to="/account" style={linkStyle}>
                <div className="link-inner">
                  <FontAwesomeIcon
                    icon={faHouseUser}
                    size={width >= 600 ? "2x" : "3x"}
                  />
                  {width >= 600 && (
                    <h1 className="nav-text-link">Mon compte</h1>
                  )}
                </div>
              </Link>
            )}
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
            toggleBurger={toggleBurger}
          />
        </div>
      )}

      <Switch>
        <Route exact path="/">
          <ListUsers myId={myId} />
        </Route>
        <Route path="/my-lunches">
          <MyLunches myId={myId} myName={myName} />
        </Route>
        <Redirect to="/my-account" from="/account/sign-up" />
        {id !== "" || myId !== "" ? (
          <Route>
            <MyAccount id={id} myId={myId} myName={myName} />
          </Route>
        ) : (
          <Route path="/account">
            <Account id={id} dispatch={dispatch} />
          </Route>
        )}
      </Switch>
    </Router>
  );
}
