import React from "react";
import CardLunch from "./CardLunch";

const myLunches = [
  {
    day: Date.now,
    favorite: "Pizza",
    restaurant: "l'italien",
  },
  {
    day: Date.now,
    favorite: "Chinois",
    restaurant: "Le Nem",
  },
  {
    day: Date.now,
    favorite: "Pakistanais",
    restaurant: "Le Pak",
  },
];

export default function ListLunches() {
  return (
    <div style={{ backgroundColor: "blue", width: "100%", height: "400px" }}>
      {myLunches.map((lunch, i) => (
        <CardLunch lunch={lunch} key={i} />
      ))}
    </div>
  );
}
