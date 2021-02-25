import "./App.css";
import Navbar from "./components/header/Navbar";

import useWindowSize from "./helpers/WindowSize";

function App() {
  const [width, height] = useWindowSize();

  return (
    <div>
      <Navbar />
      <span>
        Window size: {width} x {height}
      </span>
    </div>
  );
}

export default App;
