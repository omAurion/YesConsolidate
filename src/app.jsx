window.jQuery = require("jquery");
require("bootstrap");
import $ from "jquery"
import _ from "lodash";
import React from 'react';
import {render} from 'react-dom';

import moment from 'moment';
var momentLocalizer = require('react-widgets/lib/localizers/moment')
momentLocalizer(moment);

import {Route, NotFoundRoute, DefaultRoute, RouteHandler, Link} from "react-router";
import Router from "react-router";
import Login from "./login-form.jsx";
import LandingPage from "./landingPage";
import Summary from "./summary";
import SavingsAccount from "./savings";
import CurrentAccount from "./current";
import FixedDeposit from "./fd";
import RecurrentDeposit from "./rd";
import Wealth from "./wealth";
import DematAccount from "./demat";
import Messages from "./message";
import Offer from "./offer";
import Details from "./product";

import content, {loadContent} from "./content.js";


import conn from "./conn";


var MobNavMenu = React.createClass({
    getInitialState: function() {
        return { childVisible: false };
    },

    onClick: function(e) {
        this.setState({childVisible: !this.state.childVisible});
    },

    render: function() {
        return (
            <div className="row">
                <div className="col-xs-12">
                    <div className="rightAlignStyle1">
                        <label className="navMIconStyle" onClick={this.onClick}></label>
                    </div>
                    {
                        <div className="customNavtab">
                            <ul>

                            </ul>
                        </div>
                    }
                </div>
            </div>
        );
    }
});

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        //this is only for debug
        /*setTimeout(()=> {
            this.decodeData("qwe", "qweqwe");
        }, 100);*/
    }

    mainContainerDyn() {
        if (navigator.userAgent.match(/iPhone/i)) {
            return "containerPaddingm"
        }
        else if (navigator.userAgent.match(/Android/i)) {
            return "containerPaddingm"
        }
        else if (navigator.userAgent.match(/BlackBerry/i)) {
            return "containerPaddingm"
        }
        else if (navigator.userAgent.match(/webOS/i)) {
            return "containerPaddingm"
        }
        else {
            return "containerPadding"
        }
    }

    decodeData(custId, dob) {
        if (loadContent(custId, dob)) {
            this.setState({error: null, data: content});
        } else {
            this.setState({error: "Customer Id or DOB mismatch!", data: null});
        }
    }


    mainImgDyn() {
        if (navigator.userAgent.match(/iPhone/i)) {
            return "main_image"
        }
        else if (navigator.userAgent.match(/Android/i)) {
            return "main_image"
        }
        else if (navigator.userAgent.match(/BlackBerry/i)) {
            return "main_image"
        }
        else if (navigator.userAgent.match(/webOS/i)) {
            return "main_image"
        }
        else {
            return "main_image"
        }
    }

    componentDidMount()
    {
        //console.log("Hi...");
        //this.context.router.transitionTo('/dashboard/portfolio-insight-page');
    }

    onAnchorClick(){
         var icon = $("#btnFooterArrow").children("span");
         $("#btnSelectAll").prepend(icon.toggleClass('footerArrowA footerArrowAactive') );
    }
    onSymbolClick(){
         var icon = $("#btnSymbol").children("span");
         $("#btnSymbol").prepend(icon.toggleClass('miniMaxSignAdd miniMaxSignMinus') );
    }
    onSymbolClick1(){
         var icon = $("#btnSymbol1").children("span");
         $("#btnSymbol1").prepend(icon.toggleClass('miniMaxSignAdd miniMaxSignMinus') );
    }
    onSymbolClick2(){
         var icon = $("#btnSymbol2").children("span");
         $("#btnSymbol2").prepend(icon.toggleClass('miniMaxSignAdd miniMaxSignMinus') );
    }
    onSymbolClick3(){
         var icon = $("#btnSymbol3").children("span");
         $("#btnSymbol3").prepend(icon.toggleClass('miniMaxSignAdd miniMaxSignMinus') );
    }
    onImpMsgClick(){
        $("#messageDropId").toggle();
    }
    onShareClick(){
        $("#mobSocialId").toggle();
    }
    /* Set the width of the side navigation to 250px */
    openNav() {
    document.getElementById("mySidenav").style.width = "300px";
    }
    /* Set the width of the side navigation to 0 */
    closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    }

    render() {
        if (this.state.data) {

            var route = this.context.router.getCurrentRoutes()[1];
           // var name = route.name;
            //console.log("name=>"+name)
            

            return (
                <div className="container-fluid">
                    <header className="headerStyle">
                        <div className="col-md-6 col-sm-6 col-xs-9">
                            <span className="navMIconStyle" onClick={this.openNav.bind(this)}></span><Link to="landing"><span className="yesBankLogo"></span></Link>
                        </div>
                        <div className="col-md-4 col-sm-4"></div>
                        <div className="col-md-2 col-sm-2 col-xs-3">
                            <a href="https://www.yesbank.in/gateway" target="_blank"><div className="loginBox"><span className="iconStyle"></span></div></a>
                        </div>
                        <div id="mySidenav" className="sidenav">
                            <a href="#" className="closebtn" onClick={this.closeNav.bind(this)}>&times;</a>
                            <ul>
                                <li className="sideMenuItemStyle" data-toggle="collapse" data-target="#subMenu1Id" onClick={this.onSymbolClick.bind(this)}><span className="liLabel">Account Statement</span><a id="btnSymbol"><span className="miniMaxSignAdd"></span></a>
                                    <div id="subMenu1Id" className="sideSubMenu collapse">
                                        <ul>
                                            <li><Link to="summary" onClick={this.closeNav.bind(this)}>Summary</Link></li>
                                            <li><Link to="savings" onClick={this.closeNav.bind(this)}>Saving</Link></li>
                                            <li><Link to="current" onClick={this.closeNav.bind(this)}>Current</Link></li>
                                            <li><Link to="fixed" onClick={this.closeNav.bind(this)}>Fixed Deposit</Link></li>
                                            <li><Link to="recurring" onClick={this.closeNav.bind(this)}>Recurring Deposit</Link></li>
                                            <li><Link to="wealth" onClick={this.closeNav.bind(this)}>wealth</Link></li>
                                            <li><Link to="demat" onClick={this.closeNav.bind(this)}>Demat</Link></li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="sideMenuItemStyle" data-toggle="collapse" data-target="#subMenu2Id" onClick={this.onSymbolClick1.bind(this)}><span className="liLabel">Important Messages</span><a id="btnSymbol1"><span className="miniMaxSignAdd"></span></a>
                                    <div id="subMenu2Id" className="sideSubMenu collapse">
                                        <ul>
                                            <li><Link to="impMessage" onClick={this.closeNav.bind(this)}>Messages</Link></li>
                                        </ul>
                                    </div>
                                </li>
                                 <li className="sideMenuItemStyle" data-toggle="collapse" data-target="#subMenu3Id" onClick={this.onSymbolClick2.bind(this)}><span className="liLabel">Details Of Relationship</span><a id="btnSymbol2"><span className="miniMaxSignAdd"></span></a>
                                    <div id="subMenu3Id" className="sideSubMenu collapse">
                                        <ul>
                                            <li><Link to="details" onClick={this.closeNav.bind(this)}>Details</Link></li>
                                        </ul>
                                    </div></li>
                                <li className="sideMenuItemStyle" data-toggle="collapse" data-target="#subMenu4Id" onClick={this.onSymbolClick3.bind(this)}><span className="liLabel">Offers For You</span><a id="btnSymbol3"><span className="miniMaxSignAdd"></span></a>
                                    <div id="subMenu4Id" className="sideSubMenu collapse">
                                        <ul>
                                            <li><Link to="offer" onClick={this.closeNav.bind(this)}>Offers</Link></li>
                                        </ul>
                                    </div></li>
                            </ul>
                        </div>
                    </header>
                    <section className="sectionStyle">
                        <RouteHandler data={this.state.data}/>
                    </section>
                    <footer>
                        <div className="row">
                            <div className="btmCont btmGray contentWrapper">
                                <div className="col-xs-12 col-md-6 col-sm-12 btmBox" >
                                    <div className="darkBlueTxt"><span className="mapLocation">LOCATE <span className="redTxt">US</span></span></div>
                                    <form action="/locate-us" method="post"><input type="HIDDEN" name="_authkey_"/>
                                        <div className="field">
                                            <input type="text" id="locsearch" name="location_text" maxlength="30" placeholder="Location"/>
                                        </div>
                                        <div className="field">
                                            <div className="checkbox">
                                                <label className="control control--checkbox">ATM
                                                    <input type="checkbox" value="isd"/>
                                                    <div className="control__indicator"></div>
                                                </label>
                                                <label className="control control--checkbox">Branch
                                                    <input type="checkbox" value="isd"/>
                                                    <div className="control__indicator"></div>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="field">
                                            <a href="www.yesbank.in" target="_blank"><button className="buttonStyle"><span className="spanIcon">View</span></button></a>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-xs-12 col-md-6 col-sm-12 btmBox">
                                    <div className="darkBlueTxt"><span className="phone">GET A  <span className="redTxt">CALL</span></span></div>
                                    <div className="getCallDiv">
                                        <p>A free call back facility exclusively for our customers.</p>
                                        <a>Click here to receive a call</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="btmCont btmBlue contentWrapper">
                                <div className="col-xs-12 col-md-6 col-sm-12 btmBox">
                                    <div className="darkBlueTxt"><span className="appDnld"> DOWNLOAD <span className="redTxt">APP</span></span></div>
                                    <div className="getCallDiv">
                                        <span className="googlePlayImg" onClick={this.onAppDownloadClick}></span>
                                        <span className="appStoreImg" onClick={this.onAppDownloadClick}></span>
                                    </div>
                                </div>
                                <div className="col-xs-12 col-md-6 col-sm-12 btmBox">
                                    <div className="darkBlueTxt"><span className="wallet">YES PAY WALLET</span></div>
                                    <div className="getCallDiv"><p>Digital Wallet with free Virtual card and UPI which can be used to send/receive money, mobile/DTH recharge, pay bills and much more</p></div>
                                    <div className="field">
                                        <button className="button1Style"><span className="spanIcon">Read More</span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="fixedWrap">
                            <div className="footerArrow" onClick={this.onAnchorClick.bind(this)} data-toggle="collapse" data-target="#footerHiddenDiv">
                                <a id="btnFooterArrow"><span className="footerArrowA"></span></a>
                            </div>
                            <div id="footerHiddenDiv" className="footerTop collapse">
                                <div className="row">
                                    <div className="col-md-10 col-sm-10 col-xs-12 quickLinkStyle">
                                        <ul>
                                            <li className="hidden-lg hidden-md hidden-sm" onClick={this.onShareClick.bind(this)}><span className="shareIcon"></span></li>
                                            <li><a href="https://www.yesbank.in/personal-banking/yes-individual/transaction-zone" target="_blank"><span className="transactionIcon"><span className="hidden-xs">Transaction Zone</span></span></a></li>
                                            <li><a href="https://www.yesbank.in/locate-us" target="_blank"><span className="locateUsIcon"><span className="hidden-xs">Locate Us</span></span></a></li>
                                            <li><a href="https://www.yesbank.in/contact-us" target="_blank"><span className="contactUsIcon"><span className="hidden-xs">Contact US</span></span></a></li>
                                            <li><a href="javascript:;" target="_blank"><span className="mySpaceIcon"><span className="hidden-xs">My Space</span></span></a></li>
                                            <li><a href="https://www.yesbank.in/transaction-zone/help-center" target="_blank"><span className="helpCenterIcon"><span className="hidden-xs">Help Center</span></span></a></li>
                                            <li><a href="https://www.yesbank.in/yes-app-store" target="_blank"><span className="appStoreIcon"><span className="hidden-xs">YES APP STORE</span></span></a></li>
                                        </ul>
                                    </div>
                                    {/*<div className="col-md-2 col-sm-2 col-xs-12 hidden-xs">
                                        <button id="impMsgId" className="impMsgStyle" onClick={this.onImpMsgClick.bind(this)}><span>Important Messages </span></button>
                                    </div>
                                    <div id="messageDropId" className="messageDropStyle">
                                        <h4>Important Messages</h4>
                                    </div>*/}
                                    <div className="col-md-2 col-sm-2 hidden-xs socialStyle">
                                        <a href="http://www.facebook.com/YESBANK" target="_blank"><span className="fb"></span></a>
                                        <a href="http://twitter.com/yesbank" target="_blank"><span className="twitter"></span></a>
                                        <a href="https://www.youtube.com/yesbank" target="_blank"><span className="yt"></span></a>
                                        <a href="https://www.linkedin.com/company/269604" target="_blank"><span className="linkedIn"></span></a>
                                    </div>
                                    <div id="mobSocialId" className="socialMobStyle">
                                        <a href="http://www.facebook.com/YESBANK" target="_blank"><span className="fb"></span></a><br/>
                                        <a href="http://twitter.com/yesbank" target="_blank"><span className="twitter"></span></a><br/>
                                        <a href="https://www.youtube.com/yesbank" target="_blank"><span className="yt"></span></a><br/>
                                        <a href="https://www.linkedin.com/company/269604" target="_blank"><span className="linkedIn"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            );
        } else {
            return <Login onLogin={this.decodeData.bind(this)} error={this.state.error}/>
        }
    }
}

App.contextTypes = {
    router: React.PropTypes.func
};



var routes = (
    <Route handler={App} path="/">
        <DefaultRoute name="landing" handler={LandingPage}/>
        <Route name="summary" handler={Summary}/>
        <Route name="savings" handler={SavingsAccount}/>
        <Route name="current" handler={CurrentAccount}/>
        <Route name="fixed" handler={FixedDeposit}/>
        <Route name="recurring" handler={RecurrentDeposit}/>
        <Route name="wealth" handler={Wealth}>
            <DefaultRoute name="portfolio" handler={Wealth.PortfolioSummary}/>
            <Route name="performance" handler={Wealth.PerformanceReport}/>
            <Route name="insurance" handler={Wealth.InsuranceDetails}/>
        </Route>
        <Route name="demat" handler={DematAccount}>
            <DefaultRoute name="dematStatement" handler={DematAccount.DematSatement}/>
            <Route name="serviceBill" handler={DematAccount.ServiceBill}/>
        </Route>
        <Route name="impMessage" handler={Messages}/>
        <Route name="details" handler={Details}/>
        <Route name="offer" handler={Offer}/>
    </Route>
);

Router.run(routes, function (Handler) {
    let appHost = document.getElementById('app');
    render(<Handler/>, appHost);
});

