import "./App.css";

import Navbar from "./components/header/Navbar";
import useWindowSize from "./helpers/WindowSize";
import ListUsers from "./components/list-users/ListUsers";

function App() {
  const [width, height] = useWindowSize();

  return (
    <div>
      <Navbar />
      <span>
        Window size: {width} x {height}
      </span>
      <ListUsers />
    </div>
  );
}

export default App;
