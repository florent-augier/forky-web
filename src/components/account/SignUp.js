import React, { useState, useEffect, useCallback } from "react";

import useWindowSize from "../../helpers/WindowSize";

export default function SignUp() {
  const [width] = useWindowSize();

  const [emailValue, setEmailValue] = useState(""); // Etat qui gère l'email
  const [passwordValue, setPasswordValue] = useState(""); // Etat qui gère le mot de passe
  const [nameValue, setNameValue] = useState(""); // Etat qui gère le nom
  const [isError, setIsError] = useState(true); // Etat qui gère l'email
  const [isClicked, setIsClicked] = useState(false);

  const errorMessage =
    "Vérifiez que tous les champs de saisie soient correctement remplis.";

  useEffect(() => {
    if (!isError && isClicked) {
      const signUpDB = async () => {
        let rawResponse = await fetch(`/sign-up`, {
          method: "post",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: `name=${nameValue}&email=${emailValue}&password=${passwordValue}`,
        });
        console.log("my rawResponse", rawResponse);

        let response = await rawResponse.json();
        console.log("ma reponse", response);
      };

      signUpDB();
    }
  }, [isError, emailValue, nameValue, passwordValue, isClicked]);

  const handleSubmit = async () => {
    setIsClicked(true);
  };

  const checkValues = useCallback(() => {
    const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;

    if (
      nameValue.length >= 2 &&
      emailValue.match(emailRegex) &&
      passwordValue.match(passwordRegex)
    ) {
      setIsError(false);
    } else {
      setIsError(true);
    }
  }, [emailValue, nameValue, passwordValue]);

  useEffect(() => {
    console.log(emailValue, passwordValue, nameValue);
    checkValues();
  }, [emailValue, passwordValue, nameValue, checkValues]);

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

  return (
    <div>
      <div style={headerStyle}>
        <h1>S'inscrire</h1>
      </div>
      <div style={formContainer}>
        <form onSubmit={() => handleSubmit()}>
          {isError && (
            <p
              style={{
                display: "flex",
                justifyContent: "center",
                fontFamily: "Poppins-300italic",
              }}
            >
              {errorMessage}
            </p>
          )}
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
                value={nameValue}
                onChange={(e) => setNameValue(e.target.value)}
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
                value={emailValue}
                onChange={(e) => setEmailValue(e.target.value)}
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
                value={passwordValue}
                onChange={(e) => setPasswordValue(e.target.value)}
                placeholder="Ex: MotDePasse123"
                style={inputStyle}
              />
              <p style={tipsStyle}>
                Doit contenir au moins 10 caractères dont 1 majuscule et un
                chiffre.
              </p>
            </div>
          </div>
          {!isError && (
            <div style={submitStyle}>
              <button
                style={buttonStyle}
                onClick={(e) => e.preventDefault}
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
