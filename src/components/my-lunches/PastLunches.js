import React, { useState, useEffect } from "react";
import CardLunch from "./CardLunch";

export default function PastLunches({ id }) {
  const [pastInvits, setPastInvits] = useState([]);

  useEffect(() => {
    if (id !== "") {
      const getPastInvits = async () => {
        let rawResponse = await fetch(`/passed-invit?id=${id}`);
        let response = await rawResponse.json();

        console.log(response);
        setPastInvits(response.invitations);
      };
      getPastInvits();
    }
  }, [id]);

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
