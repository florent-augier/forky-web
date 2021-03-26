import "./App.css";

import Navbar from "./components/header/Navbar";
import useWindowSize from "./helpers/WindowSize";
import { ModalProvider } from "styled-react-modal";
import { useEffect, useState } from "react";

function App() {
  const [height] = useWindowSize();

  const [myName, setMyName] = useState("");
  const [myId, setMyId] = useState("");

  useEffect(() => {
    const id = localStorage.getItem("userId");
    console.log("dans mon useeffect", id);
    setMyId(id);
    const getMyData = async () => {
      let rawResponse = await fetch(`getmydata?id=${id}`);
      let response = await rawResponse.json();

      setMyName(response.myUser.name);
    };
    getMyData();
  }, []);

  if (myId !== "") {
  }

  console.log("en dehors mon useeffect", myId);

  return (
    <ModalProvider>
      <div
        style={{
          minHeight: height,
        }}
      >
        <Navbar useWindowSize={useWindowSize} myId={myId} myName={myName} />
      </div>
    </ModalProvider>
  );
}

export default App;
