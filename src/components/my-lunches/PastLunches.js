import React, { useState, useEffect } from "react";
import CardLunch from "./CardLunch";

export default function PastLunches({ myId, myName }) {
  const [pastInvits, setPastInvits] = useState([]);
  useEffect(() => {
    const getPastInvits = async () => {
      let rawResponse = await fetch(`/passed-invit?id=${myId}`);
      let response = await rawResponse.json();

      setPastInvits(response.invitations);
    };
    getPastInvits();
  }, [myId]);

  return myId !== "" ? (
    !pastInvits ? (
      <p
        style={{
          fontFamily: "Poppins-900",
          fontSize: "34px",
          textAlign: "center",
        }}
      >
        Aucunes invitations passées,
        <br /> commencez l'aventure maintenant !
      </p>
    ) : (
      <div>
        {pastInvits.map((lunch, i) => (
          <CardLunch lunch={lunch} key={i} myId={myId} myName={myName} />
        ))}
      </div>
    )
  ) : (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <p
        style={{
          fontFamily: "Poppins-900",
          fontSize: "34px",
          textAlign: "center",
        }}
      >
        Vous devez vous connecter pour voir vos déjeuners
      </p>
    </div>
  );
}
