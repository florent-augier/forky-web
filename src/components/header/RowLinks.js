import React, { useRef } from "react";
import { Link } from "react-router-dom";

import { faUtensils, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function RowLinks({
  handleMouseEnter,
  handleMouseLeave,
  linkStyle,
  isOpen,
}) {
  const lunchLink = useRef(null);
  const myLunchesLink = useRef(null);

  return (
    <div className={isOpen ? "row-links active" : "row-links"}>
      <div
        ref={lunchLink}
        className="link-container"
        onMouseEnter={() => handleMouseEnter(lunchLink)}
        onMouseLeave={() => handleMouseLeave(lunchLink)}
      >
        <Link to="/" style={linkStyle}>
          <div className="link-inner">
            <FontAwesomeIcon icon={faUtensils} />
            <h1 className="nav-text-link">Déjeunez</h1>
          </div>
        </Link>
      </div>
      <div
        ref={myLunchesLink}
        className="link-container"
        onMouseEnter={() => handleMouseEnter(myLunchesLink)}
        onMouseLeave={() => handleMouseLeave(myLunchesLink)}
      >
        <Link to="/my-lunches" style={linkStyle}>
          <div className="link-inner">
            <FontAwesomeIcon icon={faCalendar} />
            <h1 className="nav-text-link">Mes lunchs</h1>
          </div>
        </Link>
      </div>
    </div>
  );
}
