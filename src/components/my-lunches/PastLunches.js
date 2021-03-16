import React from "react";
import CardLunch from "./CardLunch";

const myPastLunches = [
  {
    day: Date.now(),
    favorite: "Pizza",
    restaurant: "l'italien",
    status: "accepté",
  },
  {
    day: Date.now(),
    favorite: "Chinois",
    restaurant: "Le Nem",
    status: "en attente",
  },
  {
    day: Date.now(),
    favorite: "Pakistanais",
    restaurant: "Le Pak",
    status: "refusé",
  },
];

export default function PastLunches() {
  return (
    <div>
      {myPastLunches.map((lunch, i) => (
        <CardLunch lunch={lunch} key={i} />
      ))}
    </div>
  );
}
