import React from "react";
import content from "../content";


var image_banner = '';
var image_link = '';

export default class Products extends React.Component {

    render() {

        return (
            <div className="row blueback">
                <div className="col-md-12 col-sm-12 col-xs-12">
                    <div className="row">
                        <center>
                            <h3><strong>DETAILS OF RELATIONSHIP</strong></h3>
                            <div className="redHr"></div>
                        </center>
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
            </div>

        );
    }
}