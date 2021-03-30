import React, { useEffect, useState } from "react";
import CardLunch from "./CardLunch";

import { PRIVATE_URL } from "../../config";

export default function UpcomingLunches({ id }) {
  const [currentInvits, setCurrentInvits] = useState([]);

  useEffect(() => {
    if (id !== "") {
      const getCurrentInvits = async () => {
        let rawResponse = await fetch(`${PRIVATE_URL}/current-invit?id=${id}`);
        let response = await rawResponse.json();

        console.log(response);
        setCurrentInvits(response.invitations);
      };
      getCurrentInvits();
    }
  }, [id]);

  return currentInvits.length > 0 ? (
    <div>
      {currentInvits.map((lunch, i) => (
        <CardLunch lunch={lunch} key={i} id={id} />
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
