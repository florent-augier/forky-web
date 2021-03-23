import React from "react";
import useWindowSize from "./../../helpers/WindowSize";
// import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default function Account() {
  const [width, height] = useWindowSize();

  return (
    <div>
      <p>
        {width} x {height}
      </p>
      <SignUp />
    </div>
  );
}
