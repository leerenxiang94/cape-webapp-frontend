import {apiEndpoint} from "./common";
import React, { useEffect, useState , Fragment} from 'react';

import {getRequest} from "./requestBuilder";

import ViewPerformancePage from "./pages/sgfreevsl/sgfreevsl"

// function App() {
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   (async () => {
  //   const res = await fetch (apiEndpoint + "/SGfreeVsl");
  //   const json = await res.json();
  //   setData(json);
  // })();
  // }, []);

// return <p>data: {JSON.stringify(data)}</p>;

const Page = () => {
  const [response, setResponse] = useState(null);

  const handlePost = async () => {
    try {
      const response = await fetch(apiEndpoint + "/SGfreeVsl");
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      setResponse(data);
    } catch (error) {
      setResponse(error.message);
    }
  };

  return (
    <div>
      <button onClick={handlePost}>SG Free Vsl List</button>
      <pre>{JSON.stringify(response, null, 2)}</pre>
    </div>
  );
};




export default Page
