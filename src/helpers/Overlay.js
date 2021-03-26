import React, { useEffect, useState } from "react";
import Modal from "styled-react-modal";

const StyledModal = Modal.styled`
  width: 20rem;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: "white";

`;

export default function Overlay({
  toggleModal,
  isOpen,
  color,
  message,
  name,
  myName,
  myId,
}) {
  const [informations, setInformations] = useState("Salut ca va");

  useEffect(() => {
    function setTheMessage() {
      setInformations(message);
    }
    setTheMessage();
  });

  const contentContainer = {
    backgroundColor: "white",
    width: "500px",
    height: "700px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  };

  const headerStyle = {
    display: "flex",
    justifyContent: "center",
    marginBottom: "50px",
    color: "#45827f",
    fontFamily: "Poppins-500",
  };

  const buttonStyle = {
    border: `2px solid ${color}`,
    borderRadius: "12px",
    backgroundColor: "white",
    padding: "20px",
    margin: "20px",
    fontFamily: "Poppins-500",
  };

  const divStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#e09891",
    margin: "30px",
    fontFamily: "Poppins-300italic",
  };
  return (
    <div>
      <StyledModal
        isOpen={isOpen}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
      >
        <div style={contentContainer}>
          {name === myName ? (
            <div style={headerStyle}>Votre message envoyé à {name}</div>
          ) : (
            <div style={headerStyle}>Le message reçu de {name}</div>
          )}
          <div style={divStyle}>"{informations}"</div>
          <button onClick={toggleModal} style={buttonStyle}>
            Fermer
          </button>
        </div>
      </StyledModal>
    </div>
  );
}
