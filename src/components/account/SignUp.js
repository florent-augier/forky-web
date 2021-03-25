import React, { useState, useCallback, useEffect } from "react";
import { Redirect } from "react-router";

import useWindowSize from "../../helpers/WindowSize";
import MyAccount from "./MyAccount";

export default function SignUp({ id, dispatch }) {
  const [width] = useWindowSize();

  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isGoodForm, setIsGoodForm] = useState(false);
  const errorMessage = `Si tous les champs sont valides, vous ne verrez plus ce message  `;

  // Function that handle form on submit
  const handleSignUp = async () => {
    if (isGoodForm) {
      let rawResponse = await fetch(`/sign-up`, {
        method: "post",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `name=${pseudo}&email=${email}&password=${password}`,
      });

      let response = await rawResponse.json();
      if (response.result) {
        localStorage.setItem("userToken", response.user.token);
        dispatch({ type: "saveId", id: response.user._id });
      }
    }
  };
  const checkValues = useCallback(() => {
    const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;

    if (
      pseudo.length >= 2 &&
      email.match(emailRegex) &&
      password.match(passwordRegex)
    ) {
      setIsGoodForm(true);
    }
  }, [email, pseudo, password]);

  useEffect(() => {
    checkValues();
  }, [checkValues, email]);
  useEffect(() => {
    checkValues();
  }, [checkValues, pseudo]);
  useEffect(() => {
    checkValues();
  }, [checkValues, password]);

  // All Styled objects
  const headerStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    fontFamily: "Poppins-900",
  };

  const handleFocus = (e) => {
    e.target.style.outline = "none";
  };

  const formContainer = {
    display: "flex",
    justifyContent: "center",
  };

  const wrapperStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 2fr",
    height: "100px",
    marginBottom: "20px",
    width: "80%",
  };
  // Styling column of grid which content label
  const labelColumn = {
    display: "flex",
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "start",
  };
  // Styling label only
  const labelStyle = {
    color: "#f9b34c",
    fontFamily: "Poppins-800",
  };
  // Styling Wrapper of input and tips
  const inputAndTipsStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  };
  // Styling Input only
  const inputStyle = {
    fontFamily: "Poppins-300",
    fontWeight: "bold",
    border: "2px solid #e09891",
    borderRadius: "12px",
    padding: "12px",
    width: width > 700 ? "400px" : width > 500 ? "300px" : "150px",
  };
  const tipsStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "0",
    fontFamily: "Poppins-200italic",
    fontSize: "16px",
  };
  const submitStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop: "50px",
  };
  const buttonStyle = {
    border: "4px solid #f9b34c",
    borderRadius: "20px",
    padding: "10px",
    backgroundColor: "#45827f",
    color: "#f9b34c",
    fontFamily: "Poppins-700",
  };

  return id !== "" ? (
    <Redirect to="/my-account">
      <MyAccount id={id} />
    </Redirect>
  ) : (
    <div>
      <div style={headerStyle}>
        <h1>S'inscrire</h1>
      </div>
      {!isGoodForm && <p>{errorMessage}</p>}
      <div style={formContainer}>
        <form onSubmit={(e) => e.preventDefault()}>
          <div style={wrapperStyle}>
            <div style={labelColumn}>
              <label style={labelStyle}>Prénom :</label>
            </div>
            <div style={inputAndTipsStyle}>
              <input
                onFocus={(e) => handleFocus(e)}
                minLength="2"
                require="true"
                type="text"
                aria-required="true"
                value={pseudo}
                onChange={(e) => setPseudo(e.target.value)}
                placeholder="ex: Jean"
                style={inputStyle}
              />
              <p style={tipsStyle}>Au moins 2 caractères.</p>
            </div>
          </div>
          <div style={wrapperStyle}>
            <div style={labelColumn}>
              <label style={labelStyle}>Email :</label>
            </div>
            <div style={inputAndTipsStyle}>
              <input
                defaultChecked
                onFocus={(e) => handleFocus(e)}
                type="email"
                require="true"
                aria-required="true"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="something@mail.com"
                style={inputStyle}
              />
              <p style={tipsStyle}>Vérifiez le format de l'email.</p>
            </div>
          </div>
          <div style={wrapperStyle}>
            <div style={labelColumn}>
              <label style={labelStyle}>Mot de passe :</label>
            </div>
            <div style={inputAndTipsStyle}>
              <input
                minLength={6}
                onFocus={(e) => handleFocus(e)}
                require="true"
                required
                aria-required="true"
                type="password"
                autoComplete="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Ex: MotDePasse123"
                style={inputStyle}
              />
              <p style={tipsStyle}>
                Doit contenir au moins 6 caractères dont 1 majuscule et un
                chiffre. N'utiliser pas les caractères spéciaux.
              </p>
            </div>
          </div>

          {isGoodForm && (
            <div style={submitStyle}>
              <button
                style={buttonStyle}
                onClick={() => handleSignUp()}
                onFocus={(e) => handleFocus(e)}
              >
                Envoyer
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
