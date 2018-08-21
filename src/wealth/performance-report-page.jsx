import React from "react";
import content from "../content";
import _ from "lodash";
import {Table} from "react-bootstrap";

export default class PerformanceReport extends React.Component {
    render() {

        let fundDetailCollection = [];

        let fundDetail = [];

        let tempCollection = content.wealthPage.performanceReport.funds;

       // console.log('funds:: '+JSON.stringify(tempCollection));

        for(var i in tempCollection)
        {

            let funds = [];
            if(tempCollection[i].fundDetails.length > 1)
            {
                funds = tempCollection[i].fundDetails;
            }
            else
            {
                funds.push(tempCollection[i].fundDetails);
            }

            fundDetail = {"id":tempCollection[i].id,"fundDetails":funds,"fundTotal":tempCollection[i].fundTotal};

            fundDetailCollection.push(fundDetail);
        }

        //fundDetails = content.wealthPage.performanceReport.funds;
        return (
            <div className="container-fluid">
                <br/>
                <br/>
                <div className="scrollDiv">
                    {_.map(fundDetailCollection,(fd)=>
                        <Table bordered>
                            <tr>
                                <th>{fd.id}</th>
                                <th>Amount Invested</th>
                                <th>% of Total</th>
                                <th>Current Value</th>
                                <th>% of Total</th>
                                <th>Dividend</th>
                                <th>Realized Gain/Loss</th>
                                <th>Unrealized gain/Loss</th>
                                <th>IRR %</th>
                            </tr>
                            {_.map(fd.fundDetails,(fdd) =>
                                <tr>
                                    <td width="100">{fdd.name}</td>
                                    <td width="105">{fdd.amountInvested}</td>
                                    <td width="65">{fdd.percentAmountInvested}</td>
                                    <td width="85">{fdd.curentValue}</td>
                                    <td width="65">{fdd.percentageCurrentValue}</td>
                                    <td width="75">{fdd.dividend}</td>
                                    <td width="110">{fdd.realizedGainLoss}</td>
                                    <td width="120">{fdd.unrealizedGainLoss}</td>
                                    <td>{fdd.IRRPercentage}</td>
                                </tr>

                            )}
                            <tr>
                                <td>{fd.fundTotal.name}</td>
                                <td>{fd.fundTotal.amountInvested}</td>
                                <td>{fd.fundTotal.percentAmountInvested}</td>
                                <td>{fd.fundTotal.curentValue}</td>
                                <td>{fd.fundTotal.percentageCurrentValue}</td>
                                <td>{fd.fundTotal.dividend}</td>
                                <td>{fd.fundTotal.realizedGainLoss}</td>
                                <td>{fd.fundTotal.unrealizedGainLoss}</td>
                                <td>{fd.fundTotal.IRRPercentage}</td>
                            </tr>
                        </Table>
                    )}
                    <Table bordered>
                        <tr>
                            <th width="100">Grand Total</th>
                            <th width="105">{content.wealthPage.portfolioSummary.totalAmtInvested}</th>
                            <th width="65">{content.wealthPage.portfolioSummary.percentageOfTotalAmtInvested}</th>
                            <th width="85">{content.wealthPage.portfolioSummary.totalCurrentValue}</th>
                            <th width="65">{content.wealthPage.portfolioSummary.percentageOfTotalCurrentValue}</th>
                            <th width="75">{content.wealthPage.portfolioSummary.totalDividend}</th>
                            <th width="110">{content.wealthPage.portfolioSummary.totalRealisedGainLoss}</th>
                            <th width="120">{content.wealthPage.portfolioSummary.totalUnrealisedGainLoss}</th>
                            <th>{content.wealthPage.portfolioSummary.totalIRRPercent}</th>
                        </tr>
                    </Table>
                </div>
            </div>
        );
    }
}