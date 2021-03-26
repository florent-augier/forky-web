import React, { useEffect, useState } from "react";

import useWindowSize from "./../../helpers/WindowSize";

import CardUser from "./CardUser";

// import { PRIVATE_URL } from "./../../config";

export default function ListUsers({ myId }) {
  const [listUser, setListUser] = useState([]);

  useEffect(() => {
    if (myId !== "") {
      const getUsers = async () => {
        let rawResponse = await fetch(`/alluser?id=${myId}`);
        let response = await rawResponse.json();

        setListUser(response.userExcl);
      };
      getUsers();
    }
  }, [myId]);

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

  return myId !== "" ? (
    <div style={style}>
      {listUser.map((user, i) => (
        <CardUser key={i} user={user} useWindowSize={useWindowSize} />
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
        Vous devez vous connecter pour voir vos déjeuners
      </p>
    </div>
  );
}
