import "./App.css";

import Navbar from "./components/header/Navbar";
import useWindowSize from "./helpers/WindowSize";

import pattern from "./images/pattern3.png";

function App() {
  const [height] = useWindowSize();
  return (
    <div
      style={{
        backgroundImage: `url(${pattern})`,
        backgroundRepeat: "repeat",
        minHeight: height,
      }}
    >
      <Navbar useWindowSize={useWindowSize} />
    </div>
  );
}

export default App;
