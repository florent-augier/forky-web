import React from "react";
import useWindowSize from "./../../helpers/WindowSize";

export default function Account() {
  const [width, height] = useWindowSize();

  return (
    <div>
      <p>
        Window size: {width} x {height}
      </p>
      <p>Hello from account</p>
    </div>
  );
}
