import React from "react";
import _ from "lodash";
import {Route, NotFoundRoute, DefaultRoute, RouteHandler, Link} from "react-router";

export default class WealthManagement extends React.Component {
    render() {
        var route = _.last(this.context.router.getCurrentRoutes());
        var name = route.name;

        return (

           <div className="row blueback">
                <div className="wealthBGStyle">
                    <h1><strong>Wealth Management</strong></h1>
                    <h4>Get expert guidance in managing & growing your wealth with our team of wealth management experts </h4>
                </div>

                <div className="row">
                    <center>
                        <h3><strong>Wealth Management</strong></h3>
                        <div className="redHr"></div>
                    </center>
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-8 col-sm-12 col-xs-12">
                                <div className="customNav3">
                                    <ul>
                                        <li>
                                            <Link to="portfolio">Portfolio Summary</Link>
                                        </li>
                                        <li>
                                            <Link to="performance">Performance Report</Link>
                                        </li>
                                        <li>
                                            <Link to="insurance">Insurance Details</Link>
                                        </li>
                                    </ul>
                                </div>
                            <div className="tab-content">
                                <RouteHandler data={this.props.data}/>
                            </div>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                    </div>

                    <br/>
                </div>
                <div className="row offerStyle">
                        <div className="col-md-3"></div>
                        <div className="col-md-6 col-sm-12 col-xs-12">
                            <div className="row">
                                <div className="col-md-4 col-sm-4 col-xs-12">
                                    <div className="offerBlock">
                                        <div className="iconDiv">
                                            <div className="innerIconDiv">
                                                <div className="offerIcon1Style"></div>
                                            </div>
                                        </div>
                                        <div className="titleOffer">
                                            <h4>DOWNLOAD YES MOBILE &amp; WIN CRUISE TRIP</h4>
                                        </div>
                                        <div className="detailsDiv">
                                            <h4>10% Discount</h4>
                                            <h5>10% discount on cruise packages</h5>
                                            <a>Know More</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-12">
                                    <div className="offerBlock">
                                        <div className="iconDiv">
                                            <div className="innerIconDiv">
                                                <div className="offerIcon2Style"></div>
                                            </div>
                                        </div>
                                        <div className="titleOffer">
                                            <h4>REGISTER FOR YES REMIT &amp; WIN STAY VOUCHER</h4>
                                        </div>
                                        <div className="detailsDiv">
                                            <h4>10% Discount</h4>
                                            <h5>10% discount on stay</h5>
                                            <a>Know More</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-12">
                                    <div className="offerBlock">
                                        <div className="iconDiv">
                                            <div className="innerIconDiv">
                                                <div className="offerIcon1Style"></div>
                                            </div>
                                        </div>
                                        <div className="titleOffer">
                                            <h4>DOWNLOAD YES MOBILE &amp; WIN CRUISE TRIP</h4>
                                        </div>
                                        <div className="detailsDiv">
                                            <h4>10% Discount</h4>
                                            <h5>10% discount on cruise packages</h5>
                                            <a>Know More</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 col-sm-12 col-xs-12 buttonDiv"><button className="button1Style" data-toggle="collapse" data-target="#transactId"><span className="spanIcon">View All</span></button></div>
                             </div>
                        </div>
                    <div className="col-md-3"></div>
                </div>
            </div>

        );
    }
}

WealthManagement.contextTypes = {
    router: React.PropTypes.func
}


import PortfolioSummary from "./portfolio-summary-page";
import PerformanceReport from "./performance-report-page";
import InsuranceDetails from "./insurance-details-page";

WealthManagement.PortfolioSummary = PortfolioSummary;
WealthManagement.PerformanceReport = PerformanceReport;
WealthManagement.InsuranceDetails = InsuranceDetails;