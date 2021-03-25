import React, { useState } from "react";

export default function SignIn() {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const handleSubmit = () => {
    console.log("tu as submit");
  };

  const chechValues = () => {
    if (!!emailValue && !!passwordValue) {
      console.log("ok");
    }
  };

  const handleFocus = (e) => {
    console.log(e.target);
    e.target.style.outline = "none";
  };

  const headerStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    fontFamily: "Poppins-900",
  };

  const formContainer = {
    display: "flex",
    justifyContent: "center",
  };

  const labelAndInputStyle = {
    display: "flex",
    justifyContent: "flex-end",
  };
  const inputStyle = {
    margin: "12px",
    fontFamily: "Poppins-300",
    border: "2px solid #e09891",
    borderRadius: "12px",
    padding: "12px",
  };
  const labelStyle = {
    color: "#f9b34c",
    fontFamily: "Poppins-800",
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
  };

  return (
    <div>
      <div style={headerStyle}>
        <h1>Se connecter</h1>
      </div>

      <div style={formContainer}>
        <form onSubmit={() => handleSubmit()}>
          <div style={labelAndInputStyle}>
            <label style={labelStyle}>
              Email :
              <input
                onFocus={(e) => handleFocus(e)}
                type="email"
                value={emailValue}
                onChange={(e) => setEmailValue(e.target.value)}
                placeholder="something@mail.com"
                style={inputStyle}
              />
            </label>
          </div>
          <div style={labelAndInputStyle}>
            <label style={labelStyle}>
              Mot de passe :
              <input
                onFocus={(e) => handleFocus(e)}
                type="password"
                autoComplete="current-password"
                value={passwordValue}
                onChange={(e) => setPasswordValue(e.target.value)}
                placeholder="Votre mot de passe"
                style={inputStyle}
              />
            </label>
          </div>
          <div style={submitStyle}>
            <button
              style={buttonStyle}
              type="submit"
              onClick={() => chechValues()}
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
