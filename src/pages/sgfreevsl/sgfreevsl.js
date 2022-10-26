import back from "../../assets/back.png";
import refresh from "../../assets/refresh.png";
import logo from "../../assets/ssy_logo.jpg";
import CAPEloader from "../../CAPEloader";
import "./sgfreevsl.css";
import React, {useEffect, useState} from "react";
import {getRequest} from "../../requestBuilder";
import {apiEndpoint} from "../../common";
import '../../Home.css';

const ViewSGfreevslpage = (props) => {
const [response, setResponse] = useState([]) 

useEffect(() => {
    refreshSGFreevsl();
}, [])

const refreshSGFreevsl = async () => {
    const pendingSGfreevslObject = await getRequest(apiEndpoint + '/SGfreeVsl')
    const SGFreevslFigure2 = pendingSGfreevslObject.data.SGfreeVsl.values
    const SGFreevslFigure = 
    <table className = "freevsl-figure-row-figure">
  <tr>
          <th>Vsl Name</th>
          <th>DWT</th>
          <th>BUILT YEAR</th>
          <th>ETA S.BAY</th>
          <th>ETA Tub</th>
        </tr>
    {
    SGFreevslFigure2.map( name => 
    <tr>
        <td>{name[0]}{" "}</td>
        <td>{name[1]}</td>
        <td>{name[2]}{" "}</td>
        <td>{name[3].replace("S.Bay","")}{" "}</td>
        <td>{name[4].replace("Tub","")}</td>
        </tr>)}
  </table>
    setResponse(SGFreevslFigure)
}



return (
    <div className="App">
        <div className="button-containers">
            <div className="back-button-container" onClick={() => props.navigate("")}>
                <img src={back} className="back-button interactive" alt="back"/>
            </div>
            <div className="refresh-button-container" onClick={refreshSGFreevsl}>
                <img src={refresh} className="refresh-button interactive" alt="refresh"/>
            </div>
        </div>
        <div className="logo-container interactive" onClick={() => props.navigate("")}>
            <img src={logo} className="submit-order-app-logo" alt="logo"/>
        </div>
     
  <div>
    
    {response}
  </div>
    </div>
)
}


export default ViewSGfreevslpage;