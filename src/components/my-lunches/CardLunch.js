import React, { useEffect, useState } from "react";

import Icon from "@mdi/react";
import {
  mdiCalendarCheckOutline,
  mdiCalendarRemoveOutline,
  mdiCalendarOutline,
} from "@mdi/js";
import moment from "moment";

import useWindowSize from "../../helpers/WindowSize";

export default function CardLunch({ lunch }) {
  const [width] = useWindowSize();

  const [color, setColor] = useState(null);

  useEffect(() => {
    if (lunch.status === "accepté") {
      setColor("#45827f");
    } else if (lunch.status === "refusé") {
      setColor("#C73718");
    } else {
      setColor("#f9b34c");
    }
  }, [lunch]);
  const cardStyle = {
    display: "flex",
    flexDirection: "row",
    width: `${width >= 600 ? "400px" : "300px"}`,
    height: `${width >= 600 ? "300px" : "200px"}`,
    backgroundColor: "white",
    borderRadius: "12px",
    boxShadow: "0 2px 4px 0 grey, 0 3px 20px 0 grey",
    border: "1px solid #45827f",
  };
  const dateStyle = {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    marginBottom: "5px",
  };

  return (
    <div>
      <div style={dateStyle}>
        <Icon
          path={
            lunch.status === "accepté"
              ? mdiCalendarCheckOutline
              : lunch.status === "refusé"
              ? mdiCalendarRemoveOutline
              : mdiCalendarOutline
          }
          size={1.5}
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
          }}
        >
          {moment(lunch.day).format("DD/MM/YYYY")}
        </span>
      </div>
      <div style={cardStyle}>
        <p>{lunch.restaurant}</p>
      </div>
    </div>
  );
}
