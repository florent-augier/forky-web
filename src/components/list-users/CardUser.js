import React from "react";

import "./../../stylesheets/CardUser.css";

import UserBM from "../../images/bm.jpeg";

export default function CardUser() {
  return (
    <div className="card-user">
      <img src={UserBM} alt={UserBM} />
      <p>Jacques</p>
    </div>
  );
}
