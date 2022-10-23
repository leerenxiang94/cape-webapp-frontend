// import back from "../../assets/back.png";
// import refresh from "../../assets/refresh.png";
// import logo from "../../assets/logo_transparent.png";
// import RHQLoader from "../../RHQLoader";
import React, {useEffect, useState} from "react";
import {getRequest} from "../../requestBuilder";
import {apiEndpoint} from "../../common";
// import "./viewPerformance.css";
// import PerformanceGraph from "./performanceGraph";

const ViewPerformancePage = (props) => {
    const [isLoading, setIsLoading] = useState(false)
    const [sales, setSales] = useState(0)
    const [cog, setCog] = useState(0)
    const [profit, setProfit] = useState(0)
    const [expense, setExpense] = useState(0)
    const [netProfit, setNetProfit] = useState(0)
    useEffect(() => {
        refreshSalesFigure();
    }, [])

    const refreshSalesFigure = async () => {
        setIsLoading(true)
        const salesFigureObj = await getRequest(apiEndpoint + '/SGfreeVsl')
        const salesFigure = salesFigureObj.data.salesFigure
        setSales(salesFigure[0])
        setCog(salesFigure[1])
        setProfit(salesFigure[2])
        setExpense(salesFigure[3])
        setNetProfit(salesFigure[4])
        setIsLoading(false)
    }

    // const getMonth = () => {
    //     const d = new Date();
    //     const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    //     return months[d.getMonth()].substring(0, 3).toUpperCase() + " " + d.getFullYear()
    // }

    const salesFigureModal = () => {
       return (
           <div className="sales-figure-modal">
               <div className="sales-figure-line"></div>
               <div className="sales-figure-row">
                   <span className="sales-figure-row-title">Sales</span>
                   <span className="sales-figure-row-figure">${sales}</span>
               </div>
               <div className="sales-figure-row">
                   <span className="sales-figure-row-title">COG</span>
                   <span className="sales-figure-row-figure">${cog}</span>
               </div>
               <div className="sales-figure-row">
                   <span className="sales-figure-row-title">Gross Profit</span>
                   <span className="sales-figure-row-figure">${profit}</span>
               </div>
               <div className="sales-figure-row">
                   <span className="sales-figure-row-title">Total expense</span>
                   <span className="sales-figure-row-figure">${expense}</span>
               </div>
               <div className="sales-figure-row">
                   <span className="sales-figure-row-title">Net Profit/loss</span>
                   <span className="sales-figure-row-figure">${netProfit}</span>
               </div>
           </div>
       )
    }

    // return (
    //     <div className="App">
    //         <div className="button-containers">
    //             <div className="back-button-container" onClick={() => props.navigate("")}>
    //                 <img src={back} className="back-button interactive" alt="back"/>
    //             </div>
    //             <div className="refresh-button-container" onClick={refreshSalesFigure}>
    //                 <img src={refresh} className="refresh-button interactive" alt="refresh"/>
    //             </div>
    //         </div>
    //         <div className="logo-container interactive" onClick={() => props.navigate("")}>
    //             <img src={logo} className="submit-order-app-logo" alt="logo"/>
    //         </div>
    //         {isLoading ? <RHQLoader message={"Getting sales figures"} /> : salesFigureModal()}
    //         {PerformanceGraph()}
    //     </div>
    // )
}

export default ViewPerformancePage;