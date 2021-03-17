import React, { useEffect, useState } from "react";
import CardLunch from "./CardLunch";

export default function UpcomingLunches() {
  const userState = { name: "florent", id: "5fdb5e26078d5f0d10f844ca" };

  const [currentInvits, setCurrentInvits] = useState([]);

  useEffect(() => {
    const getCurrentInvits = async () => {
      let rawResponse = await fetch(`/current-invit?id=${userState.id}`);
      let response = await rawResponse.json();

      console.log(response);
      setCurrentInvits(response.invitations);
    };
    getCurrentInvits();
  }, [userState.id]);

  return currentInvits.length > 0 ? (
    <div>
      {currentInvits.map((lunch, i) => (
        <CardLunch lunch={lunch} key={i} />
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
  );
}
