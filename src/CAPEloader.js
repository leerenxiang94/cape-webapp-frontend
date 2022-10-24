// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import Loader from "react-loader-spinner";
import React from "react";
import "./CAPEloader.css"
const CAPEloader = (props) => {
    return (
        <div>
            {props.message.length !== 0 &&
            <div className="loading-message-container">
                <span className="loading-message">{props.message}</span>
            </div>
            }
            {/* <Loader type="Bars" color="#04AA6D" height={30} width={200} /> */}
        </div>
    );
}

export default CAPEloader;