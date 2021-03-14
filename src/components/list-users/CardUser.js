import React, { useEffect, useState } from "react";

import defaultAvatar from "../../images/default_avatar.jpg";
import { BriefcaseOutline } from "react-ionicons";
import Icon from "@mdi/react";
import { mdiMapMarker, mdiSilverwareFork } from "@mdi/js";

export default function CardUser({ user, useWindowSize }) {
  const [width] = useWindowSize();

  const [beat, setBeat] = useState(false);

  const [distance] = useState(Math.floor(Math.random() * 7000));
  const [lunches] = useState(Math.floor(Math.random() * 25));

  useEffect(() => {
    console.log("chaque utilisateur", user);
  }, [user]);

  const style = {
    display: "flex",
    flexDirection: "row",
    width: `${width >= 600 ? "400px" : "300px"}`,
    height: `${width >= 600 ? "300px" : "200px"}`,
    backgroundColor: "white",
    borderRadius: "12px 12px 0px 0px",
    boxShadow: "0 2px 4px 0 grey, 0 3px 20px 0 grey",
    border: "1px solid #45827f",
  };

  return (
    <div onMouseOver={() => setBeat(true)} onMouseLeave={() => setBeat(false)}>
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
              border: "1.5px solid #45827f",
            }}
          ></div>
          <div style={{ display: "flex", margin: "auto" }}>
            <p
              style={{
                fontSize: "24px",
                fontFamily: "Roboto-300italic",
              }}
            >
              {user.name}
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            width: "100%",
            borderRadius: "0px 12px 0px 0px",
            borderLeft: "1px solid #45827f",
            justifyContent: "space-evenly",
          }}
        >
          <div style={{ margin: "12px" }}>
            <Icon
              path={mdiMapMarker}
              size={1}
              horizontal
              vertical
              color="#45827f"
              rotate={180}
            />
            <p style={{ margin: "12px", fontFamily: "Poppins-300" }}>
              Situé à {distance} m
            </p>
          </div>
          <div
            style={{
              margin: "12px",
            }}
          >
            <Icon
              path={mdiSilverwareFork}
              size={1}
              horizontal
              vertical
              color="#45827f"
              rotate={180}
            />
            <Icon
              path={mdiSilverwareFork}
              size={1}
              horizontal
              vertical
              color="#45827f"
              rotate={180}
            />

            <Icon
              path={mdiSilverwareFork}
              size={1}
              horizontal
              vertical
              color="#45827f"
              rotate={180}
            />

            <p style={{ margin: "12px", fontFamily: "Poppins-300" }}>
              {lunches} Déjeuners
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#45827f",
          borderRadius: "0px 0px 12px 12px",
          alignContent: "center",
        }}
      >
        <BriefcaseOutline
          color={"#00000"}
          beat={beat}
          height="24px"
          width="24px"
          onClick={() => alert("Hi!")}
          style={{ verticalAlign: "middle", margin: "12px" }}
        />
        <p
          style={{
            margin: "12px",
            fontFamily: "Poppins-300",
            fontWeight: "bold",
            verticalAlign: "center",
          }}
        >
          {user.profession}
        </p>
      </div>
    </div>
  );
}
