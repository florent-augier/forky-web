import React, { useEffect, useState } from "react";

import Icon from "@mdi/react";
import {
  mdiCalendarCheckOutline,
  mdiCalendarRemoveOutline,
  mdiCalendarOutline,
} from "@mdi/js";
import moment from "moment";

export default function CardLunch({ lunch }) {
  const [color, setColor] = useState(null);
  const [user, setUser] = useState({});

  const userState = { name: "florent", id: "5fdb5e26078d5f0d10f844ca" };

  useEffect(() => {
    if (lunch.status === "accepté") {
      setColor("#45827f");
    } else if (lunch.status === "refusé") {
      setColor("#C73718");
    } else {
      setColor("#f9b34c");
    }

    const getUserInfo = async () => {
      if (userState.id !== lunch.id_sender) {
        let rawResponse = await fetch(`/getmydata?id=${lunch.id_sender}`);
        const response = await rawResponse.json();
        if (response.result) {
          setUser(response.myUser);
        }
      } else {
        let rawResponse = await fetch(`/getmydata?id=${lunch.id_receiver}`);
        const response = await rawResponse.json();
        if (response.result) {
          setUser(response.myUser);
        }
      }
    };

    getUserInfo();
  }, [lunch, userState.id]);

  const containerCardStyle = {
    display: "flex",
    justifyContent: "center",
  };

  const cardStyle = {
    display: "flex",
    flexDirection: "row",
    width: "80%",
    height: "300px",
    backgroundColor: "white",
    borderRadius: "12px",
    boxShadow: "0 2px 4px 0 grey, 0 3px 20px 0 grey",
    border: `2px solid ${color}`,
    overflowAnchor: "auto",
  };
  const dateStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "50px",
  };

  return user.name ? (
    <div style={{ width: "100%", margin: "auto" }}>
      <div style={dateStyle}>
        <Icon
          path={
            lunch.status === "accepté"
              ? mdiCalendarCheckOutline
              : lunch.status === "refusé"
              ? mdiCalendarRemoveOutline
              : mdiCalendarOutline
          }
          size={2}
          horizontal
          vertical
          color={color}
          rotate={180}
        />
        <span
          style={{
            color: color,
            marginLeft: "12px",
            fontFamily: "Poppins-500italic",
            fontSize: "32px",
            fontWeight: "bolder",
          }}
        >
          {moment(lunch.date).format("DD/MM/YYYY")}
        </span>
      </div>
      <div style={containerCardStyle}>
        <div style={cardStyle}>
          <img
            src={user.photo}
            alt={user.name}
            style={{
              width: "200px",
              borderRadius: "12px 0 0 12px",
              borderRight: `1px solid ${color}`,
            }}
          ></img>
          <p>Votre déjeunez avec {user.name ? user.name : ""}</p>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}
