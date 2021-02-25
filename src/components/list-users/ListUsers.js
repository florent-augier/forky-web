import React from "react";

import "./../../stylesheets/ListUsers.css";

import CardUser from "./CardUser";

export default function ListUsers() {
  return (
    <div className="list-users">
      <CardUser />
      <CardUser />
      <CardUser />
      <CardUser />
      <CardUser />
      <CardUser />
      <CardUser />
    </div>
  );
}
