import React from "react";

import BreadCrumb from "./BreadCrumb";

export default function MyLunches({ id }) {
  return (
    <div style={{ margin: "20px" }}>
      <BreadCrumb id={id} />
    </div>
  );
}
