import "./App.css";

import Navbar from "./components/header/Navbar";
import useWindowSize from "./helpers/WindowSize";

import pattern from "./images/pattern3.png";

function App() {
  return (
    <div style={{ backgroundImage: `url(${pattern})` }}>
      <Navbar useWindowSize={useWindowSize} />
    </div>
  );
}

export default App;
