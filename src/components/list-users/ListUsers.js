import React, { useEffect, useState } from "react";

import useWindowSize from "./../../helpers/WindowSize";

import CardUser from "./CardUser";

// import { PRIVATE_URL } from "./../../config";

export default function ListUsers({ id }) {
  const [listUser, setListUser] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      let rawResponse = await fetch(`/alluser?id=${id}`);
      let response = await rawResponse.json();

      setListUser(response.userExcl);
    };
    getUsers();
  }, [id]);

  const [width] = useWindowSize();

  const widest = "auto auto auto";
  const medium = "auto auto";
  const narrowest = "auto";

  const style = {
    display: "grid",
    gridTemplateColumns:
      width >= 1400 ? widest : width >= 900 ? medium : narrowest,
    gridGap: "40px",
    padding: "20px",
    justifyContent: "center",
  };

  return (
    <div style={style}>
      {listUser.map((user, i) => (
        <CardUser key={i} user={user} useWindowSize={useWindowSize} />
      ))}
    </div>
  );
}
