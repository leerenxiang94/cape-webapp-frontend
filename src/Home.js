import logo from "./assets/ssy_logo.jpg";
import React, {useEffect} from "react";
import {createRequestOptions} from "./requestBuilder";
import {apiEndpoint} from "./common";


const Home = (props) => {
    useEffect(() => {
        triggerBackend();
    })

    const triggerBackend = async () => {
        const getBossNamesRO = createRequestOptions('GET')
        await fetch(apiEndpoint + '/AccessName', getBossNamesRO)
    }

    return (
        <div className="App">
            <img src={logo} className="App-logo" alt="logo"/>
            <div className="button" onClick={() => props.navigate("viewPerformance")}>
                View SG Free Vsl
            </div>

        </div>
    )

    }
export default Home
