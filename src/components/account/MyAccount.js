import React, { useEffect, useState } from "react";

export default function MyAccount({ id }) {
  const [myData, setMyData] = useState({});

  useEffect(() => {
    const getUser = async () => {
      let rawResponse = await fetch(`/getmydata?id=${id}`);
      let response = await rawResponse.json();
      if (response.result) {
        setMyData(response.myUser);
      }
    };
    getUser();
  }, [id]);

  return (
    <div>
      <p>{myData.name}</p>
      <p>{myData.email}</p>

      <p>Hello from my account with my id: {id}</p>
    </div>
  );
}
