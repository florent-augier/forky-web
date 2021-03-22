import "./App.css";

import Navbar from "./components/header/Navbar";
import useWindowSize from "./helpers/WindowSize";
import { ModalProvider } from "styled-react-modal";

function App() {
  const [height] = useWindowSize();
  return (
    <ModalProvider>
      <div
        style={{
          minHeight: height,
        }}
      >
        <Navbar useWindowSize={useWindowSize} />
      </div>
    </ModalProvider>
  );
}

export default App;
