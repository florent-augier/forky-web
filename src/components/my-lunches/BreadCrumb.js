import React, { useRef } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import UpcomingLunches from "./UpcomingLunches";
import PastLunches from "./PastLunches";

export default function BreadCrumb() {
  const underlineRef = useRef(null);
  const divRef = useRef();
  const upcomingLinkRef = useRef(null);
  const pastLinkRef = useRef(null);

  const style = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    width: "100%",
    margin: "auto",
    fontFamily: "Poppins-500italic",
    fontSize: "48px",
    color: "#f9b34c",
  };

  const breadcrumbStyle = {
    display: "flex",
    justifyContent: "space-evenly",
    width: "100%",
    marginTop: "50px",
  };
  const underlineStyle = {
    display: "flex",
    margin: "auto",
    width: "50%",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: "#f9b34c",
  };

  const handleMouseEnter = () => {
    underlineRef.current.style.transition = "all 1s";
    divRef.current.style.transition = "all 1s";
    underlineRef.current.style.backgroundColor = "#45827f";
    underlineRef.current.style.borderRadius = "50%";
    divRef.current.style.color = "#45827f";
  };

  const handleMouseLeave = () => {
    underlineRef.current.style.transition = "all 1s";
    divRef.current.style.transition = "all 1s";
    underlineRef.current.style.backgroundColor = "#f9b34c";
    underlineRef.current.style.borderRadius = "0px";
    divRef.current.style.color = "#f9b34c";
  };

  const handleActiveLink = (ref) => {
    if (ref.current.className !== "active") {
      ref.current.style.transition = "all 1s";
    }
  };

  return (
    <Router>
      <div
        style={style}
        ref={divRef}
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={handleMouseLeave}
      >
        <p>Mes Lunchs</p>
      </div>
      <div style={underlineStyle} ref={underlineRef}></div>
      <div style={breadcrumbStyle}>
        <div>
          <NavLink
            ref={upcomingLinkRef}
            onClick={() => handleActiveLink(upcomingLinkRef)}
            to="/my-lunches/upcoming-lunches"
            activeStyle={{
              fontFamily: "Poppins-500italic",
              fontSize: "24px",
              textDecoration: "none",
            }}
            style={{
              textDecorationColor: "#e09891",
              fontFamily: "Poppins-300",
              color: "#e09891",
            }}
          >
            <h2>Déjeuners à venir</h2>
          </NavLink>
        </div>

        <div>
          <NavLink
            ref={pastLinkRef}
            onClick={() => handleActiveLink(pastLinkRef)}
            to="/my-lunches/past-lunches"
            activeStyle={{
              fontFamily: "Poppins-500italic",
              fontSize: "24px",
              textDecoration: "none",
            }}
            style={{
              textDecorationColor: "#e09891",
              fontFamily: "Poppins-300",
              color: "#e09891",
            }}
          >
            <h2>Déjeuners passés</h2>
          </NavLink>
        </div>
      </div>

      <Switch>
        <Route exact path="/my-lunches/upcoming-lunches">
          <UpcomingLunches />
        </Route>
        <Route exact path="/my-lunches/past-lunches">
          <PastLunches />
        </Route>
      </Switch>
    </Router>
  );
}
