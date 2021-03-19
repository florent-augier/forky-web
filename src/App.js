import "./App.css";

import Navbar from "./components/header/Navbar";
import useWindowSize from "./helpers/WindowSize";

function App() {
  const [height] = useWindowSize();
  return (
    <div
      style={{
        minHeight: height,
      }}
    >
      <Navbar useWindowSize={useWindowSize} />
    </div>
  );
}

export default App;
