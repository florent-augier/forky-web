import React from "react";

import UserBM from "../../images/bm.jpeg";

export default function CardUser() {
  const style = {
    display: "flex",
    flexDirection: "row",
  };

  return (
    <div style={style}>
      <img src={UserBM} alt={UserBM} />
      <p>Jacques</p>
    </div>
  );
}
