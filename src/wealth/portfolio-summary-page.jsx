import React from "react";
import Griddle from "griddle-react";
import content from "../content";
import _ from "lodash";
import Chart from "./../chart.jsx";
import {Grid, Col, Row, Table} from "react-bootstrap";

var portfolioColumns = [
    {
        "columnName":"assetType",
        "displayName":"Asset Type",
        "cssClassName":"griddleWidthStyle"
    },
    {
        "columnName":"CurrentValue",
        "displayName":"Current Value",
        "cssClassName":"griddleWidthStyle"
    },
    {
        "columnName":"allocationPercent",
        "displayName":"% Allocation",
        "cssClassName":"rightAlignColumn"
    }
];

export default class PortfolioSummary extends React.Component {

    pieChartData() {
        let assets = content.wealthPage.assetAllocation;
        let assetsData = [];



        if(assets != null)
        {
            assetsData = assets;
        }


        let columns = _(assetsData).map('assetType').uniq().value();
        assetsData = _.groupBy(assetsData, 'assetType');
        let services = _.reduce(assetsData, (services, value, type)=>{
            services[type] = _.reduce(value, (total, service) => {
                let Allocation = parseFloat(service.allocationPercent);
                if (!_.isNaN(Allocation)) {
                    return total + Allocation;
                } else {
                    return total;
                }
            }, 0);
            return services;
        }, {});
        return {
            json: [services],
            keys: {value: columns}
        };
    }
    
    render() {
        let assetDistribution  = [];

        if(content.wealthPage.assetAllocation.length > 1)
        {
            assetDistribution = content.wealthPage.assetAllocation;
        }
        else
        {
            assetDistribution.push(content.wealthPage.assetAllocation);
        }

        let totalAssetAllocation = 0;

        for(var i in assetDistribution)
        {
            totalAssetAllocation += parseFloat(assetDistribution[i].allocationPercent);
        }

        let portfolioInvestmentDetails = content.wealthPage.portfolioSummary;

        return (
            <div className="container-fluid">

                <br/>
                <br/>

                <div><h3>Assets Distribution</h3></div>

                <div className="row">
                    <div className="col-md-12 col-xs-12">
                        <h4>Investor Details</h4>
                        <div className="scrollDiv">
                            <Table bordered condensed hover>
                                <tr>
                                    <th>Investor Name</th>
                                    <th>Amount Invested</th>
                                    <th>% of Total</th>
                                    <th>Current Value</th>
                                    <th>% of Total</th>
                                    <th>Dividend</th>
                                    <th>Realized Gain/Loss</th>
                                    <th>Unrealized gain/Loss</th>
                                    <th>IRR %</th>
                                </tr>
                                <tr>
                                    <td>{portfolioInvestmentDetails.investorName}</td>
                                    <td>{portfolioInvestmentDetails.totalAmtInvested}</td>
                                    <td>{portfolioInvestmentDetails.percentageOfTotalAmtInvested}</td>
                                    <td>{portfolioInvestmentDetails.totalCurrentValue}</td>
                                    <td>{portfolioInvestmentDetails.percentageOfTotalCurrentValue}</td>
                                    <td>{portfolioInvestmentDetails.totalDividend}</td>
                                    <td>{portfolioInvestmentDetails.totalRealisedGainLoss}</td>
                                    <td>{portfolioInvestmentDetails.totalUnrealisedGainLoss}</td>
                                    <td>{portfolioInvestmentDetails.totalIRRPercent}</td>
                                </tr>
                                <tr>
                                    <td>Grand Total</td>
                                    <td>{portfolioInvestmentDetails.totalAmtInvested}</td>
                                    <td>{portfolioInvestmentDetails.percentageOfTotalAmtInvested}</td>
                                    <td>{portfolioInvestmentDetails.totalCurrentValue}</td>
                                    <td>{portfolioInvestmentDetails.percentageOfTotalCurrentValue}</td>
                                    <td>{portfolioInvestmentDetails.totalDividend}</td>
                                    <td>{portfolioInvestmentDetails.totalRealisedGainLoss}</td>
                                    <td>{portfolioInvestmentDetails.totalUnrealisedGainLoss}</td>
                                    <td>{portfolioInvestmentDetails.totalIRRPercent}</td>
                                </tr>
                            </Table>
                        </div>
                    </div>
                </div>

                <br/>
                <br/>

                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        <Griddle results={assetDistribution} columnMetadata={portfolioColumns}
                                 columns={["assetType","CurrentValue","allocationPercent"]}
                                 tableClassName="table" showPager={false} resultsPerPage={assetDistribution.length}
                                 useGriddleStyles={true}/>
                        <div>
                            <div className="col-md-4">Total</div>
                            <div className="col-md-4"></div>
                            <div className="col-md-4" align="right">{totalAssetAllocation}</div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xs-12">
                        <Chart data={this.pieChartData()}
                               type='pie'
                               height={250}/>
                    </div>
                </div>

                <br/>
                <br/>

                <div className="row">
                    <br/>
                    <br/>
                    <div className="col-md-12 col-xs-12"><p className="smallFontTxt">{content.wealthPage.infoTxt1}</p></div>

                </div>

                <br/>
                <br/>

            </div>
        );
    }
}