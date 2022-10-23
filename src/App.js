import {apiEndpoint} from "./common";
import React, { useEffect, useState } from 'react';
import {getRequest} from "./requestBuilder";

import ViewPerformancePage from "./pages/sgfreevsl/sgfreevsl"

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
    const res = await fetch (apiEndpoint + "/SGfreeVsl");
    const json = await res.json();
    setData(json);
  })();
  }, []);

return <p>data: {JSON.stringify(data)}</p>;

// const [isLoading, setIsLoading] = useState(false)
// useEffect(() => {
//   refreshSalesFigure();
// }, [])

// const refreshSalesFigure = async () => {
//   setIsLoading(true)
//   const salesFigureObj = await getRequest(apiEndpoint + '/SGfreeVsl')
//   // const salesFigure = salesFigureObj.data.salesFigure

//   return <p>data: {JSON.stringify()}</p>;
// }
}
export default App
