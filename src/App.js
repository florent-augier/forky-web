import "./App.css";

import Navbar from "./components/header/Navbar";
import useWindowSize from "./helpers/WindowSize";
import ListUsers from "./components/list-users/ListUsers";

import pattern from "./images/pattern3.png";

function App() {
  const [width, height] = useWindowSize();

  return (
    <div style={{ backgroundImage: `url(${pattern})` }}>
      <Navbar />

      <p>
        Window size: {width} x {height}
      </p>

      <ListUsers />
    </div>
  );
}

export default App;
