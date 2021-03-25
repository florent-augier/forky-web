import React, { useRef } from "react";

import {
  BrowserRouter as Router,
  NavLink,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import MyAccount from "./MyAccount";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default function Account({ id, dispatch }) {
  const signInLinkRef = useRef(null);
  const signUpLinkRef = useRef(null);

  // let history = useHistory();

  const breadcrumbStyle = {
    display: "flex",
    justifyContent: "space-evenly",
    width: "100%",
    marginTop: "50px",
  };

  const handleActiveLink = (ref) => {
    if (ref.current.className !== "active") {
      ref.current.style.transition = "all 1s";
    }
  };

  return id !== "" ? (
    <Route>
      <Redirect to="/my-account" from>
        <MyAccount id={id} />
      </Redirect>
    </Route>
  ) : (
    <Router>
      <div style={breadcrumbStyle}>
        <div>
          <NavLink
            ref={signInLinkRef}
            onClick={() => handleActiveLink(signInLinkRef)}
            to="/account/sign-in"
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
            <h2>Se connecter</h2>
          </NavLink>
        </div>

        <div>
          <NavLink
            ref={signUpLinkRef}
            onClick={() => handleActiveLink(signUpLinkRef)}
            to="/account/sign-up"
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
            <h2>S'inscrire</h2>
          </NavLink>
        </div>
      </div>

      <Switch>
        <Route path="/account/sign-in">
          <SignIn dispatch={dispatch} />
        </Route>
        <Route path="/account/sign-up">
          <SignUp id={id} dispatch={dispatch} />
        </Route>
      </Switch>
    </Router>
  );
}
