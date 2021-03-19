import React, { useEffect, useState } from "react";

import Icon from "@mdi/react";
import {
  mdiCalendarCheckOutline,
  mdiCalendarRemoveOutline,
  mdiCalendarOutline,
  mdiClockTimeNine,
  mdiMapMarker,
  mdiCloseOctagonOutline,
  mdiTimer,
  mdiCheckOutline,
  mdiMessage,
  mdiCalendarQuestion,
  mdiCalendarClock,
} from "@mdi/js";
import moment from "moment";
import useWindowSize from "../../helpers/WindowSize";

export default function CardLunch({ lunch }) {
  const [width] = useWindowSize();

  const [color, setColor] = useState(null);
  const [user, setUser] = useState({});

  const userState = { name: "florent", id: "5fdb5e26078d5f0d10f844ca" };

  useEffect(() => {
    if (lunch.statut_invit === "Accepté") {
      setColor("#45827f");
    } else if (lunch.statut_invit === "Refusé") {
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
    justifyContent: "space-around",
    backgroundColor: "white",
  };
  const gridStyle = {
    width: "80%",
    display: "grid",
    gridGap: "10px",
    gridAutoRows: "minmax(100px, auto)",
    border: `1px solid ${color}`,
    borderRadius: "12px",
    boxShadow: "0 2px 4px 0 grey, 0 3px 20px 0 grey",
  };

  const gridItemStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Poppins-300",
    margin: "auto",
    marginTop: "20px",
  };

  const dateStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "50px",
  };

  const onButtonEnter = (e) => {
    if (e.target.localName === "button") {
      e.target.style.transition = "all 1s";
      e.target.style.borderRadius = "0";
      if (color === "#f9b34c") {
        e.target.style.border = `2px solid #e09891`;
      } else {
        e.target.style.border = `2px solid #f9b34c`;
      }
    }
  };
  const onButtonLeave = (e) => {
    if (e.target.localName === "button") {
      e.target.style.borderRadius = "12px";
      e.target.style.border = `2px solid ${color}`;
    }
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
        <div style={gridStyle}>
          <div
            style={{
              gridColumn: "1",
              gridRow: "1 / span 2",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                borderRadius: "50%",
                backgroundImage: `url(${user.photo}`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPositionY: "center",
                border: `2px solid ${color}`,

                width: `${width >= 600 ? "150px" : "80px"}`,
                height: `${width >= 600 ? "150px" : "80px"}`,
              }}
            ></div>
          </div>
          <div
            style={{
              gridColumn: "2 /span 3",
              gridRow: "1 / span 2",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p
                style={{
                  fontFamily: "Poppins-500",
                  margin: "auto",
                  marginTop: "20px",
                  fontSize: "24px",
                }}
              >
                Votre déjeuner avec {user.name}
              </p>
              <div
                style={{ display: "grid", gridTemplateColumns: "auto auto" }}
              >
                <div style={gridItemStyle}>
                  <Icon path={mdiClockTimeNine} size={1} color="grey" />
                  <p style={{ marginLeft: "12px" }}>
                    Rendez-vous:{" "}
                    <em style={{ color: color }}>
                      <b>
                        {lunch.heure === 12
                          ? "12H"
                          : lunch.heure === 12.5
                          ? "12H30"
                          : lunch.heure === 13
                          ? "13h"
                          : "13H30"}
                      </b>
                    </em>
                  </p>
                </div>
                <div style={gridItemStyle}>
                  <Icon path={mdiMapMarker} size={1} color="grey" />

                  <p style={{ marginLeft: "12px" }}>
                    Restaurant:{" "}
                    <em style={{ color: color }}>
                      <b>{lunch.lieu_propose}</b>
                    </em>
                  </p>
                </div>
                <div style={gridItemStyle}>
                  {lunch.statut_invit === "Accepté" ? (
                    <Icon path={mdiCheckOutline} size={1} color="grey" />
                  ) : lunch.statut_invit === "Refusé" ? (
                    <Icon path={mdiCloseOctagonOutline} size={1} color="grey" />
                  ) : (
                    <Icon path={mdiCalendarClock} size={1} color="grey" />
                  )}
                  <p style={{ marginLeft: "12px" }}>
                    Statut de l'invitation:{" "}
                    <em style={{ color: color }}>
                      <b>{lunch.statut_invit}</b>
                    </em>
                  </p>
                </div>
                <div style={gridItemStyle}>
                  <Icon path={mdiTimer} size={1} color="grey" />

                  <p style={{ marginLeft: "12px" }}>
                    Durée:{" "}
                    <em style={{ color: color }}>
                      <b>
                        {lunch.temps_propose === 0.5
                          ? "30 minutes"
                          : lunch.temps_propose === 1
                          ? "1 heure"
                          : lunch.temps_propose === 1.5
                          ? "1 heure et 30 minutes"
                          : "2 heures"}
                      </b>
                    </em>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              gridColumn: "1 / 5",
              gridRow: "3",
              display: "flex",
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: `2px solid ${color}`,
                  borderRadius: "12px",
                  backgroundColor: "white",
                }}
                onMouseEnter={(e) => onButtonEnter(e)}
                onMouseLeave={(e) => onButtonLeave(e)}
              >
                <span
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "10px",
                  }}
                >
                  <Icon path={mdiMessage} size={1} />
                  <b
                    style={{
                      padding: "0",
                      fontFamily: "Poppins-500",
                      marginLeft: "10px",
                    }}
                  >
                    Voir le message
                  </b>
                </span>
              </button>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <button
                style={{
                  border: `2px solid ${color}`,
                  borderRadius: "12px",
                  backgroundColor: "white",
                }}
                onMouseEnter={(e) => onButtonEnter(e)}
                onMouseLeave={(e) => onButtonLeave(e)}
              >
                <span
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "10px",
                  }}
                >
                  <Icon path={mdiCalendarQuestion} size={1} />
                  <b
                    style={{
                      padding: "0",
                      fontFamily: "Poppins-500",
                      marginLeft: "10px",
                    }}
                  >
                    Proposé un déjeuner à {user.name}
                  </b>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}
