import React, { useState, useEffect } from "react";
import CardLunch from "./CardLunch";

export default function PastLunches() {
  const userState = { name: "florent", id: "5fdb5e26078d5f0d10f844ca" };

  const [pastInvits, setPastInvits] = useState([]);
  useEffect(() => {
    const getPastInvits = async () => {
      let rawResponse = await fetch(`/passed-invit?id=${userState.id}`);
      let response = await rawResponse.json();

      console.log(response);
      setPastInvits(response.invitations);
    };
    getPastInvits();
  }, [userState.id]);

  return !pastInvits ? (
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
        <CardLunch lunch={lunch} key={i} />
      ))}
    </div>
  );
}
