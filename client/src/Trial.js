import React, { useState, useEffect } from "react";
import Axios from "./Axios";


function Trial() {
    const [backendData, setBackendData] = useState([]);

    useEffect(() => {
      Axios.get(`/`)
        .then((res) => {
          const recievedData = res.data.users;
          setBackendData(recievedData);
        })
        .catch((err) => {
          console.error(err);
        });
    }, []);

  return (
    <div>
    {backendData.length === 0 ? (
        <p>Loading</p>
      ) : (
        backendData.map((item, key) => {
          return <p key={key}>{item}</p>;
        })
      )}
    </div>
  )
}

export default Trial