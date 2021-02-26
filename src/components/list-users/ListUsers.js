import React, { useEffect } from "react";

import useWindowSize from "./../../helpers/WindowSize";

import CardUser from "./CardUser";

export default function ListUsers() {
  useEffect(() => {
    const getUsers = async () => {
      console.log("hello");
    };
    getUsers();
  }, []);

  const [width] = useWindowSize();

  const widest = "auto auto auto";
  const medium = "auto auto";
  const narrowest = "auto";

  const style = {
    display: "grid",
    gridTemplateColumns:
      width >= 1200 ? widest : width >= 900 ? medium : narrowest,
    gridGap: "10px",
    backgroundColor: "#2196F3",
    padding: "20px",
    justifyContent: "space-around",
  };

  return (
    <div style={style}>
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
