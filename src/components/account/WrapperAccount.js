import React, { useEffect, useState } from "react";
import {
  useHistory,
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";
import MyAccount from "./MyAccount";
import Account from "./Account";

export default function WrapperAccount({ id, dispatch }) {
  const [isLogin, setIsLogin] = useState(false);

  let history = useHistory();

  useEffect(() => {
    if (id !== "") {
      setIsLogin(true);
    }
  }, [id]);

  const handleLogOut = () => {
    setIsLogin(false);
    dispatch({ type: "removeId" });
    history.replace("/account/hello");
  };

  return (
    <Router>
      {isLogin ? (
        <Redirect to="/my-account" />
      ) : (
        <Redirect to="/account/hello" />
      )}

      <Route path="/account/hello">
        <Account dispatch={dispatch} />
      </Route>

      <Route path="/my-account">
        <MyAccount handleLogOut={handleLogOut} id={id} />
      </Route>
    </Router>
  );
}
