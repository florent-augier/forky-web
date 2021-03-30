import React, { useEffect, useState } from "react";
import defaultAvatar from "../../images/default_avatar.jpg";
import useWindowSize from "../../helpers/WindowSize";

import { useHistory } from "react-router-dom";

export default function MyAccount({ id, dispatch, handleLogOut }) {
  const [myData, setMyData] = useState({});
  const [width] = useWindowSize();

  let history = useHistory();

  useEffect(() => {
    console.log("my history", history);

    console.log("my id reducer", id);
  });

  useEffect(() => {
    console.log("id", id);
    if (id !== "") {
      const getUser = async () => {
        let rawResponse = await fetch(`/getmydata?id=${id}`);
        let response = await rawResponse.json();
        if (response.result) {
          setMyData(response.myUser);
        }
      };
      getUser();
    }
  }, [id]);

  const style = {
    display: "flex",
    width: "90%",
    justifyContent: "center",
    margin: "auto",
  };
  const cardStyle = {
    width: `${width >= 600 ? "400px" : "300px"}`,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "30px",
    marginBottom: "30px",
    border: "3px solid #f9b34c",
    borderRadius: "12px",
    boxShadow: "0 2px 4px 0 grey, 0 3px 20px 0 grey",
    fontFamily: "Poppins-500",
    color: "#4e5a65",
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", marginBottom: "50px" }}
    >
      <div style={style}>
        <div style={cardStyle}>
          <div
            style={{
              width: `${width >= 600 ? "400px" : "300px"}`,
              height: `${width >= 600 ? "400px" : "300px"}`,

              backgroundImage: `url(${
                myData.photo !== "" ? myData.photo : defaultAvatar
              })`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPositionY: "center",
              borderRadius: "9px 9px 0 0",
              border: "0",
            }}
          ></div>
          <div
            style={{
              borderRadius: "0 0 12px 12px",
              width: `${width >= 600 ? "400px" : "300px"}`,
              height: `${width >= 600 ? "400px" : "300px"}`,
              borderTop: "3px solid #f9b34c",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <p>
                Prénom: <b>{myData.name ? myData.name : "Non renseigné"}</b>
              </p>
              <p>
                Ville: <b>{myData.city ? myData.city : "Non renseigné"}</b>
              </p>
              <p>
                Profession:{" "}
                <b>{myData.profession ? myData.profession : "Non renseigné"}</b>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={() => handleLogOut()}>Se déconnecter</button>
      </div>
    </div>
  );
}
