import "./App.css";
import React, { useEffect, useReducer } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/header/Navbar";
import useWindowSize from "./helpers/WindowSize";
import { ModalProvider } from "styled-react-modal";
import idReducer from "./reducers/id";

import ListUsers from "./components/list-users/ListUsers";
import MyLunches from "./components/my-lunches/MyLunches";
import WrapperAccount from "./components/account/WrapperAccount";
import SignUp from "./components/account/SignUp";
import SignIn from "./components/account/SignIn";
import MyAccount from "./components/account/MyAccount";
import Account from "./components/account/Account";

function App() {
  const [id, dispatch] = useReducer(idReducer, "");

  useEffect(() => {
    if (id !== "" || id !== null) {
      localStorage.setItem("localId", id);
    }
  }, [id]);

  return (
    <Router>
      <ModalProvider id={id}>
        <Navbar useWindowSize={useWindowSize} id={id} dispatch={dispatch} />

        <Switch>
          <Route exact path="/">
            <ListUsers id={id} />
          </Route>
          <Route path="/my-lunches">
            <MyLunches id={id} />
          </Route>
          <Route path="/account">
            <WrapperAccount id={id} dispatch={dispatch} />
          </Route>
          <Route path="/account/hello">
            <Account dispatch={dispatch} />
          </Route>
          <Route path="/my-account">
            <MyAccount dispatch={dispatch} id={id} />
          </Route>
          <Route path="/account/sign-up">
            <SignUp dispatch={dispatch} />
          </Route>
          <Route path="/account/sign-in">
            <SignIn dispatch={dispatch} />
          </Route>
        </Switch>
      </ModalProvider>
    </Router>
  );
}

export default App;
