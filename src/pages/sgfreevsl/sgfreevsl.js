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
const [searchTerm, setSearchTerm] = useState("")

useEffect(() => {
    refreshSGFreevsl();
}, [])

const refreshSGFreevsl = async () => {
    const pendingSGfreevslObject = await getRequest(apiEndpoint + '/SGfreeVsl')
    const SGFreevslFigure = pendingSGfreevslObject.data.SGfreeVsl.values
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
  <h1 className = "freevsl-figure-row-figure" >SG Free Vsl - Heading West</h1>
    <input className = "searchbarwidth"
    type = "text"
    placeholder = "Type text to search Vsl/DWT/ETA..."
    onChange = {(event) => {
        setSearchTerm(event.target.value);
    }}></input>
    
     <table className = "freevsl-figure-row-figure">
  <tr>
          <th>Vsl</th>
          <th>DWT</th>
          <th>YR</th>
          <th>ETA S.Bay</th>
          <th>ETA Tub</th>
        </tr>
    {
    response.filter((val)=> {
        if (searchTerm === "") {
            return val
        } else if (val[0].toLowerCase().includes(searchTerm.toLowerCase()))  
        { return val
        } else if (val[1].toLowerCase().includes(searchTerm.toLowerCase()))
        { 
            return val
        } else if (val[3].toLowerCase().includes(searchTerm.toLowerCase()))
        { 
            return val
        } else if (val[4].toLowerCase().includes(searchTerm.toLowerCase()))
        { 
            return val
        }
    }).map( name => 
    <tr>
        <td>{name[0]}</td>
        <td>{name[1]}</td>
        <td>{name[2]}</td>
        <td>{name[3].replace("S.Bay","")}</td>
        <td>{name[4].replace("Tub","")}</td>
        </tr>)}
  </table>
  </div>
    </div>
)
}


export default ViewSGfreevslpage;