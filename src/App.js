// import React, {useState} from "react";
// import ViewPerformancePage from "./pages/sgfreevsl/sgfreevsl";

// function App() {
//   return (
//     <div className="App">
//       <ViewPerformancePage/>
//     </div>
//   );
// }
// export default App;

import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
    const res = await fetch ("https://cape-webapp.herokuapp.com/api/SGfreeVsl");
    const json = await res.json();
    setData(json);
  })();
  }, []);

return <p>data: {JSON.stringify(data)}</p>;
}

export default App
