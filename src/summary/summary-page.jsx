import React from "react";
import Griddle from 'griddle-react';

import content from '../content';

var LinkComp = React.createClass({
    onLblClick:function (e) {
        let rowClick = this.props.rowData.accountType;
        console.log("rowClick=>"+rowClick);
        if(rowClick == 'SAVING ACCOUNTS'){
            this.context.router.transitionTo('/savings');
        }
        else if(rowClick == 'CURRENT ACCOUNTS'){
            this.context.router.transitionTo('/current');
        }
        else if(rowClick == 'FIXED DEPOSITS'){
            this.context.router.transitionTo('/fixed');
        }
        else if(rowClick == 'RECURRING DEPOSITS'){
            this.context.router.transitionTo('/recurring');
        }
        else if(rowClick == 'DEMAT'){
            this.context.router.transitionTo('/demat');
        }
        else if(rowClick == 'WEALTH'){
            this.context.router.transitionTo('/wealth');
        }
        
    },
    render: function() {
        let desc = this.props.data;
        if (desc == "" || desc == null || desc == undefined) {
            return <span></span>
        }
        else {
            return <label className="LinkBtnStyle" onClick={this.onLblClick}>{desc}</label>
        }
    }
});

LinkComp.contextTypes = {
    router: React.PropTypes.func
};

var summaryColumns = [
    {
        "columnName": "accountType",
        "displayName": "ACCOUNT TYPE",
        customComponent:LinkComp

    },
    {
        "columnName": "currency",
        "displayName": "CURRENCY"

    },
    {
        "columnName": "balance",
        "displayName": "BALANCE",
        "cssClassName": "rightAlignColumn"
    }

];



export default class Summary extends React.Component {

    constructor(props) {
        super(props);
        this.goToHome = this.goToHome.bind(this);
    }

    goToHome(e){
        e.preventDefault();
        this.context.router.transitionTo('/');
    }

    render() {
        let summaryData = content.homePage.billSummary;
        console.log("summaryData=>"+JSON.stringify(summaryData));
        /*const rowMetadata = {
            bodyCssClassName: rowData =>{
                if(rowData.accountType == 'BANKING RELATIONSHIP*') {
                    return 'isdRowStyle'
                }
            }
        };*/
        
        return (
            <div className="row blueback">
                <div className="savingBGStyle"></div>
                <div className="row">
                    <center>
                        <h3><strong>SUMMARY</strong></h3>
                        <div className="redHr"></div>
                    </center>
                    <br/>
                </div>
                <div className="col-md-12 col-sm-12 col-xs-12">
                    <div className="row">
                        <br/>
                        <div className="col-md-2"></div>
                        <div className="col-md-8 col-sm-12 col-xs-12">
                            <br/>
                            <div className="row">
                                <div className="scrollDiv">
                                    <Griddle id="griddle" results={summaryData} columnMetadata={summaryColumns}
                                             columns={["accountType","currency","balance"]}
                                             tableClassName="griddle-table1" resultsPerPage={summaryData.length}
                                             useGriddleStyles={false} showFilter={true} showPager={false}
                                    />
                                </div>
                            </div>
                            {/*<table className="customTable">
                                <tr>
                                    <td>BANKING RELATIONSHIP*</td>
                                    <td>INR</td>
                                    <td>10,05,300.00</td>
                                </tr>
                                <tr>
                                    <td>MUTUAL FUNDS*</td>
                                    <td>INR</td>
                                    <td>290000.00</td>
                                </tr>
                            </table>*/}
                            <br/>
                        </div>
                        <div className="col-md-2"></div>
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

Summary.contextTypes = {
    db: React.PropTypes.object,
    router: React.PropTypes.func.isRequired
};