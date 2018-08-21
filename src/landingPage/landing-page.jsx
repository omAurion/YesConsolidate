import React from "react";
import $ from "jquery";
import content from "../content.js";



export default class LandingPage extends React.Component {

    constructor(props) {
        super(props);
        this.tabClick = this.tabClick.bind(this);
    }

    tabClick(e) {
        var btnId = e.target.id;
        if (btnId == "summary") {
            e.preventDefault();
            this.context.router.transitionTo('/summary');
        }
        else if (btnId == "savings") {
            e.preventDefault();
            this.context.router.transitionTo('/savings');
        }
        else if (btnId == "current") {
            e.preventDefault();
            this.context.router.transitionTo('/current');
        }
        else if (btnId == "fd") {
            e.preventDefault();
            this.context.router.transitionTo('/fixed');
        }
        else if (btnId == "rd") {
            e.preventDefault();
            this.context.router.transitionTo('/recurring');
        }
        else if (btnId == "demat") {
            e.preventDefault();
            this.context.router.transitionTo('/demat');
        } 
        else if(btnId == "offers"){
            e.preventDefault();
            this.context.router.transitionTo('/offer');
        }
        else if(btnId == "details"){
            e.preventDefault();
            this.context.router.transitionTo('/details');
        }
        else if(btnId == "messages"){
            e.preventDefault();
            this.context.router.transitionTo('/impMessage');
        }
        else{
            e.preventDefault();
        }
    }

    onAppDownloadClick(){

    }

    render() {

        return(
            <div className="subMainContainerStyle">
                <div className="row">
                    <div className="homePageImg">
                        <div className="col-xs-12 col-md-4 col-sm-6">
                            <div className="custDetailsStyle">
                                <p>Statement Period :{content.homePage.customerInfo.statementPeriod}</p>
                                <div className="redHr"></div>
                                <br/>
                                <p>Name: Mr. RAJAT MEHTA</p>
                                <p>Customer ID: {content.homePage.customerInfo.customerID}</p>
                                <p>Email ID: {content.homePage.customerInfo.email}</p>
                                <p>Address: {content.homePage.customerInfo.address}</p>
                            </div>
                        </div>
                        <div className="col-md-3 invisibleDiv">
                        </div>
                        <div className="col-xs-12 col-md-5 col-sm-6">
                            <div className="row animateWrap">
                                <div className="col-xs-6 col-md-6 col-sm-6 animatingBlueBox">
                                    <div className="transDiv">
                                        <h2>ACCOUNT</h2>
                                        <h4>STATEMENT</h4>
                                        <div className="row redHr1"></div>
                                        <div className="row">
                                            <span id="summary" className="linkSpan" onClick={this.tabClick}>Summary</span>&nbsp;&nbsp;
                                            <span id="savings" className="linkSpan" onClick={this.tabClick}>Savings</span>&nbsp;&nbsp;
                                            {/*<span id="current" className="linkSpan" onClick={this.tabClick}>Current</span>&nbsp;&nbsp;
                                            <span id="fd" className="linkSpan" onClick={this.tabClick}>Fixed Deposit</span>&nbsp;&nbsp;
                                            <span id="rd" className="linkSpan" onClick={this.tabClick}>Recurring Deposit</span>&nbsp;&nbsp;
                                            <span id="demat" className="linkSpan" onClick={this.tabClick}>Demat</span>&nbsp;&nbsp;*/}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-md-6 col-sm-6 animatingBlueBox">
                                    <div className="transDiv">
                                        <h2>IMPORTANT</h2>
                                        <h4>MESSAGES</h4>
                                        <div className="redHr1"></div>
                                        <div className="row">
                                            <span id="messages" className="linkSpan" onClick={this.tabClick}>Read</span>
                                            {/*<span id="savings" className="linkSpan" onClick={this.tabClick}>Savings</span>&nbsp;&nbsp;
                                            <span id="demat" className="linkSpan" onClick={this.tabClick}>Demat</span>&nbsp;&nbsp;
                                            <span id="wealth" className="linkSpan" onClick={this.tabClick}>Wealth</span><br/>
                                            <span id="creditcard" className="linkSpan" onClick={this.tabClick}>Credit Cards</span>&nbsp;&nbsp;
                                            <span id="loans" className="linkSpan" onClick={this.tabClick}>Loans</span>*/}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-md-6 col-sm-6 animatingBlueBox">
                                    <div className="transDiv">
                                        <h2>DETAILS OF</h2>
                                        <h4>RELATIONSHIP</h4>
                                        <div className="redHr1"></div>
                                        <div className="row">
                                            <span id="details" className="linkSpan" onClick={this.tabClick}>Details</span>
                                            {/*<span id="savings" className="linkSpan" onClick={this.tabClick}>Savings</span>&nbsp;&nbsp;
                                             <span id="demat" className="linkSpan" onClick={this.tabClick}>Demat</span>&nbsp;&nbsp;
                                             <span id="wealth" className="linkSpan" onClick={this.tabClick}>Wealth</span><br/>
                                             <span id="creditcard" className="linkSpan" onClick={this.tabClick}>Credit Cards</span>&nbsp;&nbsp;
                                             <span id="loans" className="linkSpan" onClick={this.tabClick}>Loans</span>*/}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xs-6 col-md-6 col-sm-6 animatingBlueBox">
                                    <div className="transDiv">
                                        <h2>OFFERS</h2>
                                        <h4>FOR YOU</h4>
                                        <div className="redHr1"></div>
                                        <div className="row">
                                            <span id="offers" className="linkSpan" onClick={this.tabClick}>Know More</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-md-4 col-md-push-4 col-sm-12 col-sm-12 col-sm-push-4">
                        <div className="row">
                            <a className="hideNextSlide" href=".carousel" role="button" data-slide="next">
                                <div className="sliderNextDiv"><span className="sliderNextIcon"></span></div>
                            </a>
                            <div className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner" role="listbox">
                                    <div className="item active">
                                        <div className="adImg1"></div>
                                    </div>

                                    <div className="item">
                                        <div className="adImg2"></div>
                                    </div>

                                    <div className="item">
                                        <div className="adImg1"></div>
                                    </div>

                                    <div className="item">
                                        <div className="adImg2"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xs-12 col-md-4 col-md-pull-4 col-sm-12 col-sm-pull-4">
                        <div className="row">
                            <a href=".carousel" role="button" data-slide="prev">
                                <div className="sliderPrevDiv"><span className="sliderPrevIcon"></span></div>
                            </a>
                            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner" role="listbox">
                                    <div className="item active">
                                        <div className="sliderContentDiv">
                                            <h2 className="darkBlueTxt">CUSTOMER TESTIMONIALS</h2>
                                            <hr/>
                                            <h3 className="lightBlueTxt">APPRECIATION FROM AOUR VALUED CUSTOMERS</h3>
                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="sliderContentDiv">
                                            <h2 className="darkBlueTxt">NOTICE</h2>
                                            <hr/>
                                            <h3 className="lightBlueTxt">Current List Of Recalibrated and Reactivated ATM'S</h3>
                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="sliderContentDiv">
                                            <h2 className="darkBlueTxt">CUSTOMER TESTIMONIALS</h2>
                                            <hr/>
                                            <h3 className="lightBlueTxt">APPRECIATION FROM AOUR VALUED CUSTOMERS</h3>
                                        </div>
                                    </div>

                                    <div className="item">
                                        <div className="sliderContentDiv">
                                            <h2 className="darkBlueTxt">NOTICE</h2>
                                            <hr/>
                                            <h3 className="lightBlueTxt">Current List Of Recalibrated and Reactivated ATM'S</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-12 hideSlide">
                        <div className="row">
                            <a href=".carousel" role="button" data-slide="next">
                                <div className="sliderNextDiv"><span className="sliderNextIcon"></span></div>
                            </a>
                            <div className="carousel slide blurDiv" data-ride="carousel">
                                <div className="carousel-inner" role="listbox">
                                    <div className="item active">
                                        <div className="adImg2"></div>
                                    </div>

                                    <div className="item">
                                        <div className="adImg1"></div>
                                    </div>

                                    <div className="item">
                                        <div className="adImg2"></div>
                                    </div>

                                    <div className="item">
                                        <div className="adImg1"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

LandingPage.contextTypes = {
    db: React.PropTypes.object,
    router: React.PropTypes.func.isRequired
};