import React from "react";
import content from "../content";

export default class Offers extends React.Component {
    render() {

        return (
            <div className="row offerStyle">
                <div className="col-md-2"></div>
                <div className="col-md-8 col-sm-12 col-xs-12">
                    <div className="row">
                        <center>
                            <h3><strong>OFFERS FOR YOU</strong></h3>
                            <div className="redHr"></div>
                        </center>
                        <div className="col-md-3 col-sm-3 col-xs-12">
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
                        <div className="col-md-3 col-sm-3 col-xs-12">
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
                        <div className="col-md-3 col-sm-3 col-xs-12">
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
                        <div className="col-md-3 col-sm-3 col-xs-12">
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
                        {/*<div className="mdStyle">
                            <div className="mdPhoto"></div>
                            <div className="mdMsg">
                                <h4>MANAGING DIRECTOR &amp; CEO'S MESSAGE</h4>
                                <h5>"The sustained success of our Bank is based on the key pillar's of Growth, Trust, Technology, Knowledge driven Human Capital, Transparency and Responsible Banking."</h5>
                                <div className="blueText">Mr. Rana Kapoor</div>
                            </div>
                        </div>*/}
                     </div>
                    <div className="col-md-12 col-sm-12 col-xs-12 buttonDiv"><button className="button1Style" data-toggle="collapse" data-target="#transactId"><span className="spanIcon">View All</span></button></div>
                </div>
                <div className="col-md-2"></div>
            </div>
        );
    }
}