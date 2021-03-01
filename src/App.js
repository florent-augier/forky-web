import "./App.css";

import Navbar from "./components/header/Navbar";
import useWindowSize from "./helpers/WindowSize";
import ListUsers from "./components/list-users/ListUsers";

function App() {
  const [width, height] = useWindowSize();

  return (
    <div>
      <Navbar />
      <p>
        Window size: {width} x {height}
      </p>
      <ListUsers />
    </div>
  );
}

export default App;
