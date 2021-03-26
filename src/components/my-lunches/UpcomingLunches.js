import React, { useEffect, useState } from "react";
import CardLunch from "./CardLunch";

export default function UpcomingLunches({ myId, myName }) {
  const [currentInvits, setCurrentInvits] = useState([]);

  console.log(myId);

  useEffect(() => {
    const getCurrentInvits = async () => {
      let rawResponse = await fetch(`/current-invit?id=${myId}`);
      let response = await rawResponse.json();

      setCurrentInvits(response.invitations);
    };
    getCurrentInvits();
  }, [myId]);

  return myId !== "" || myId !== null ? (
    currentInvits.length > 0 ? (
      <div>
        {currentInvits.map((lunch, i) => (
          <CardLunch lunch={lunch} key={i} myId={myId} myName={myName} />
        ))}
      </div>
    ) : (
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <p
          style={{
            fontFamily: "Poppins-900",
            fontSize: "34px",
            textAlign: "center",
          }}
        >
          Aucunes invitations à venir,
          <br /> à votre tour de proposer un déjeuner!
        </p>
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
