import React from 'react';
import {RouteHandler} from "react-router";

import {Nav, NavItem, NavDropdown, MenuItem} from "react-bootstrap";






export default class DashboardPage extends React.Component {

    onTab(key, href) {
        this.context.router.transitionTo(href);
    }

    render() {

        return (
            <div >
                <br/>

                <div className="col-md-12 col-xs-12 col-sm-12 ">
                    <Nav  bsStyle="nav nav-tabs" onSelect={this.onTab.bind(this)}>

                        <NavItem href="/dashboard/portfolio-insight-page" active={this._activeTab == "portfolioInsight"}>Portfolio Insight</NavItem>
                        <NavItem href="/dashboard/account-statement-page" active={this._activeTab == "accountStatement"}>Account Statement</NavItem>
                        <NavItem href="/dashboard/capital-gain-page" active={this._activeTab == "capitalGain"}>Capital Gains</NavItem>
                        <NavItem href="/dashboard/stt-letter-page" active={this._activeTab == "sttLetter"}>STT Letter</NavItem>
                        <NavItem href="/dashboard/my-profile-page" active={this._activeTab == "myProfile"}>My Profile</NavItem>


                    </Nav>
                </div>
                <RouteHandler />
            </div>
        );

    }

    get _activeTab() {
        let routes = this.context.router.getCurrentRoutes();
        let route = routes[routes.length - 1];

        //console.log('tab name:: '+route.name);
        return route.name;
    }
}
DashboardPage.contextTypes = {
    db: React.PropTypes.object,
    router: React.PropTypes.func
}
//'account', 'currency', 'amount', 'type'

import PortfolioInsight from "./portfolio-insight-page.jsx";
import  AccountStatement from "./account-statement-page.jsx";
import CapitalGain from "./capital-gain-page.jsx";
import STTLetter from "./stt-letter-page.jsx";
import MyProfile from "./my-profile-page.jsx";

DashboardPage.PorfoliloSummary = PortfolioInsight;
DashboardPage.AccountSummary = AccountStatement;
DashboardPage.CapitalGain = CapitalGain;
DashboardPage.STTLetter = STTLetter;
DashboardPage.MyProfile = MyProfile;

export {PortfolioInsight,AccountStatement,CapitalGain,STTLetter,MyProfile};
