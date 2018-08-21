import React from "react";
import {Route, NotFoundRoute, DefaultRoute, RouteHandler, Link} from "react-router";
import _ from "lodash";

export default class DematAccount extends React.Component {

    render() {
        var route = _.last(this.context.router.getCurrentRoutes());
        var name = route.name;


        return (
            <div className="row blueback">
                <div className="dematBGStyle">
                    <h1><strong>DEMAT ACCOUNT</strong></h1>
                    <h4>Keep track and manage your shares in an electronically safe and secure way</h4>
                </div>

                <div className="row">
                    <center>
                        <h3><strong>Demat Account</strong></h3>
                        <div className="redHr"></div>
                    </center>
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-8 col-sm-12 col-xs-12">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li role="presentation" className={name == 'statement' ? "active" : ''}>
                                        <Link to="dematStatement">Statement of Demat Account</Link>
                                    </li>
                                    <li role="presentation" className={name == 'bill' ? "active" : ''}>
                                        <Link to="serviceBill">Bill of Service Charges</Link>
                                    </li>
                                </ul>

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
                             </div>
                            <div className="col-md-12 col-sm-12 col-xs-12 buttonDiv"><button className="button1Style" data-toggle="collapse" data-target="#transactId"><span className="spanIcon">View All</span></button></div>
                        </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        );
    }
}

DematAccount.contextTypes = {
    router: React.PropTypes.func
}

import DematStatement from "./demat-account-statement-page";
import ServiceBill from "./service-charges-bill-page";

DematAccount.DematSatement = DematStatement;
DematAccount.ServiceBill = ServiceBill;