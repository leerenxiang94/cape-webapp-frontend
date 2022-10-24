import back from "../../assets/back.png";
import refresh from "../../assets/refresh.png";
import logo from "../../assets/ssy_logo.jpg";
import CAPEloader from "../../CAPEloader";
import "./sgfreevsl.css";
import React, {useEffect, useState} from "react";
import {getRequest} from "../../requestBuilder";
import {apiEndpoint} from "../../common";

const ViewPerformancePage = (props) => {

const [response, setResponse] = useState([]);

useEffect(() => {
    refreshOrders();
}, [])

const refreshOrders = async () => {
    const pendingOrdersObject = await getRequest(apiEndpoint + '/SGfreeVsl')
    setResponse(pendingOrdersObject)
    }   

return (
    
  <div className="App">
    
       <div className="button-containers">
         <div className="back-button-container" onClick={() => props.navigate("")}>
              <img src={back} className="back-button interactive" alt="back"/>
         </div>
          <div className="refresh-button-container" onClick={refreshOrders}>
              <img src={refresh} className="refresh-button interactive" alt="refresh"/>
          </div>
      </div>
     <div className="logo-container interactive" onClick={() => props.navigate("")}>
          <img src={logo} className="submit-order-app-logo" alt="logo"/>
</div>
<div>
<pre>{JSON.stringify(response, null, 2)}</pre>

{/* {Object.values(response).map((value, index) => {
        return (
          <div key={response.index}>
            <h2>{response.value}</h2>

            <hr />
          </div>
        );
      })} */}
    </div>
</div>
);

}

export default ViewPerformancePage;