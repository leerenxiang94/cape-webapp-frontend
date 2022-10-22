import React, {useEffect, useState} from "react";
import {getRequest} from "../../requestBuilder";
import {apiEndpoint} from "../../common";

const ViewPerformancePage = (props) => {
    const [isLoading, setIsLoading] = useState(false)
    const [sales, setSales] = useState(0)
    const [cog, setCog] = useState(0)
    const [profit, setProfit] = useState(0)
    const [expense, setExpense] = useState(0)
    useEffect(() => {
        refreshSalesFigure();
    }, [])
    const refreshSalesFigure = async () => {
        setIsLoading(true)
        const salesFigureObj = await getRequest(apiEndpoint + '/salesFigure')
        const salesFigure = salesFigureObj.data.salesFigure
        setSales(salesFigure[0])
        setCog(salesFigure[1])
        setProfit(salesFigure[2])
        setExpense(salesFigure[3])
        setIsLoading(false)
    }
    const salesFigureModal = () => {
        return (
            <div className="sales-figure-modal">
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
     return (
        <div className="App">
            {salesFigureModal()}
        </div>
    )    
}
    export default ViewPerformancePage;
