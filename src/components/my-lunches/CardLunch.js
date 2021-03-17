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

  useEffect(() => {
    if (lunch.status === "accepté") {
      setColor("#45827f");
    } else if (lunch.status === "refusé") {
      setColor("#C73718");
    } else {
      setColor("#f9b34c");
    }

    const getUserInfo = async () => {
      console.log("hello from card");
    };
    getUserInfo();
  }, [lunch]);

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

  return (
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
          <p>{lunch.restaurant}</p>
        </div>
      </div>
    </div>
  );
}
