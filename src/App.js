import {apiEndpoint} from "./common";
import React, { useEffect, useState , Fragment} from 'react';
import Home from "./Home";
import ViewPerformancePage from "./pages/sgfreevsl/sgfreevsl";

function App() {
  const setPage = (page) => {
      const res = page.split("/");
      const path = res[res.length - 1]
      switch (path) {
          case "":
              return (
                  <Home navigate={setCurrentPage} />
              )
        
          case "viewPerformance":
              return (
                  <ViewPerformancePage navigate={setCurrentPage}/>
              )
         default:
             return (
                 <Home navigate={setCurrentPage} />
             )
      }
  }

  const getPage = () => {
      const url = window.location.href.split("/");
      return url[url.length - 1];
  }

  const [currentPage, setCurrentPage] = useState(getPage());
  // const [response, setResponse] = useState(null);

  // const handlePost = async () => {
  //   try {
  //     const response = await fetch(apiEndpoint + "/SGfreeVsl");
  //     if (!response.ok) {
  //       throw new Error(response.statusText);
  //     }
  //     const data = await response.json();
  //     setResponse(data);
  //   } catch (error) {
  //     setResponse(error.message);
  //   }
  // };

  return (
  <div className="App">
      {setPage(currentPage)}
      <div>
      {/* <button onClick={handlePost}>SG Free Vsl List</button> */}
      {/* <pre>{JSON.stringify(response, null, 2)}</pre> */}
    </div>
  </div>
);
  }

export default App;

