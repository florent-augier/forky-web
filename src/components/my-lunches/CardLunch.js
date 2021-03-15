import React from "react";

export default function CardLunch({ lunch }) {
  console.log(lunch);

  const style = {
    backgroundColor: "grey",
    fontFamily: "Roboto-300italic",
    width: "400px",
    height: "300px",
  };

  return (
    <div style={style}>
      <p>{lunch.day}</p>
    </div>
  );
}
