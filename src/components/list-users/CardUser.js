import React, { useEffect } from "react";

import defaultAvatar from "../../images/default_avatar.jpg";

export default function CardUser({ user, useWindowSize }) {
  const [width] = useWindowSize();

  useEffect(() => {
    console.log("chaque utilisateur", user);
  }, [user]);

  const style = {
    display: "flex",
    flexDirection: "row",
    width: `${width >= 600 ? "400px" : "300px"}`,
    height: `${width >= 600 ? "300px" : "200px"}`,
    backgroundColor: "white",
    borderRadius: "12px",
    boxShadow: "0 2px 4px 0 grey, 0 3px 20px 0 grey",
    border: "1px solid #f9b34c",
  };

  return (
    <div style={style}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            width: `${width >= 600 ? "150px" : "80px"}`,
            height: `${width >= 600 ? "150px" : "80px"}`,
            backgroundImage: `url(${
              user.photo !== "" ? user.photo : defaultAvatar
            })`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPositionY: "center",
            borderRadius: "50%",
            margin: "10px",
            border: "1.5px solid #f9b34c",
          }}
        ></div>
        <div style={{ display: "flex", margin: "auto" }}>
          <p
            style={{
              fontSize: "24px",
              fontFamily: "Roboto-100italic",
              fontWeight: "bold",
            }}
          >
            {user.name}
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "left",
        }}
      ></div>
    </div>
  );
}
