import React from "react";

import BreadCrumb from "./BreadCrumb";

export default function MyLunches({ myId, myName }) {
  return (
    <div style={{ margin: "20px" }}>
      <BreadCrumb myId={myId} myName={myName} />
    </div>
  );
}
