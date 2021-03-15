import React, { useRef } from "react";
import { NavLink } from "react-router-dom";

import {
  faUtensils,
  faCalendar,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function RowLinks({
  handleMouseEnter,
  handleMouseLeave,
  linkStyle,
  isOpen,
}) {
  const lunchLink = useRef(null);
  const myLunchesLink = useRef(null);
  const homeLink = useRef(null);

  return (
    <div className={isOpen ? "row-links active" : "row-links"}>
      <div
        ref={homeLink}
        className="link-container"
        onMouseEnter={() => handleMouseEnter(homeLink)}
        onMouseLeave={() => handleMouseLeave(homeLink)}
      >
        <NavLink to="/" style={linkStyle}>
          <div className="link-inner">
            <FontAwesomeIcon icon={faHome} />
            <h1 className="nav-text-link">Accueil</h1>
          </div>
        </NavLink>
      </div>

      <div
        ref={lunchLink}
        className="link-container"
        onMouseEnter={() => handleMouseEnter(lunchLink)}
        onMouseLeave={() => handleMouseLeave(lunchLink)}
      >
        <NavLink to="/lunch" style={linkStyle}>
          <div className="link-inner">
            <FontAwesomeIcon icon={faUtensils} />
            <h1 className="nav-text-link">Déjeunez</h1>
          </div>
        </NavLink>
      </div>
      <div
        ref={myLunchesLink}
        className="link-container"
        onMouseEnter={() => handleMouseEnter(myLunchesLink)}
        onMouseLeave={() => handleMouseLeave(myLunchesLink)}
      >
        <NavLink to="/my-lunches" style={linkStyle}>
          <div className="link-inner">
            <FontAwesomeIcon icon={faCalendar} />
            <h1 className="nav-text-link">Mes lunchs</h1>
          </div>
        </NavLink>
      </div>
    </div>
  );
}
