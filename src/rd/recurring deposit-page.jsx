import React from "react";
import _ from "lodash";
import Griddle from "griddle-react";
import content from "../content";

import $ from "jquery";

var transactionDetailCollection = [];
var transactionSummarycollection = [];
var accountNumberCollection = [];
var selectedAccount = '';
var selectedAccountData = [];

var noDataAvailableTxt = '';
var openingBalance = '';
var totalDeposits = '';
var totalCredits = '';
var closingBalance = '';
var nomination = '';
var nominationLink = '';

var casaGridColumns = [
    {
        "columnName": "date",
        "displayName": "Transaction Date",
        "cssClassName": "griddleWidthStyle"

    },
    {
        "columnName": "description",
        "displayName": "Description",
        "cssClassName": "griddleWidthStyle"

    },
    {
        "columnName": "debit",
        "displayName": "Debit",
        "cssClassName": "rightAlignColumn"
    },
    {
        "columnName": "credit",
        "displayName": "Credit",
        "cssClassName": "rightAlignColumn"
    },
    {
        "columnName": "balance",
        "displayName": "Balance",
        "cssClassName": "rightAlignColumn"
    }
];

export default class CurrentAccount extends React.Component {

    constructor(props){
        super(props);
        this.state = {accountData:[],selectedAccount:''};
    }

     componentDidMount(){
        $("#savingDetailsDiv1").hide();
    }

    onAccountChange (e){

        selectedAccount = e.target.value;
        if(selectedAccount == 'select'){
            $("#savingDetailsDiv1").hide();
        }else{
             $("#savingDetailsDiv1").show();
        }

        selectedAccountData = [];

        for (var j in transactionSummarycollection)
        {
            if(transactionSummarycollection[j].accountNumber == selectedAccount)
            {
                if(transactionSummarycollection[j].transaction.length > 1)
                {
                    selectedAccountData = transactionSummarycollection[j].transaction;
                }
                else {
                    selectedAccountData.push(transactionSummarycollection[j].transaction);
                }



                openingBalance = transactionSummarycollection[j].openingBalance;
                closingBalance = transactionSummarycollection[j].closingBalance;
                totalCredits = transactionSummarycollection[j].totalCredit;
                totalDeposits = transactionSummarycollection[j].totalDebit;
                nomination = transactionSummarycollection[j].nomination;
                //openingBalance = transactionDetailCollection[j].

                if(nomination == 'Not Availed')
                {
                    nominationLink = 'Add Nomination in NetBanking';
                }
                else
                {
                    nominationLink = '';
                }
            }
        }

        //console.log('transaction details::'+JSON.stringify(selectedAccountData));

        this.setState ({
            accountData:selectedAccountData,
            selectedAccount:selectedAccount
        });

       // console.log('account Data:: '+JSON.stringify(selectedAccountData));


    }

    render() {

        transactionDetailCollection = [];
        transactionSummarycollection = [];

        transactionSummarycollection[0] = {

            "accountNumber": "Select",

            "closingBalance": "",

            "openingBalance": "",

            "totalDebit": "",

            "totalCredit": "",

            "currency": "",

            "nomination": "",

            "transaction": []

        }

        for (var i in content.recurringDeposits.accountDetails)
        {
            transactionSummarycollection.push(content.recurringDeposits.accountDetails[i]);
            //transactionDetailCollection = content.recurringDeposits.accountDetails[i].transaction;
        }


        //console.log('transaction details::'+JSON.stringify(transactionDetailCollection));

        accountNumberCollection = _(transactionSummarycollection).map("accountNumber").uniq().value();


        return ( 
            <div className="row blueback">
                <div className="rdBGStyle">
                    <h1><strong>RECURRING DEPOSIT</strong></h1>
                    <h4>Savings made easy with small regular Goal-based investments at higher interest rates</h4>
                </div>

                <div className="row">
                    <center>
                        <h3><strong>Recurring Deposit</strong></h3>
                        <div className="redHr"></div>
                    </center>
                    <br/>
                    <div id="savingLinkDiv" className="col-md-12 col-sm-12 col-xs-12 savingNormalText">
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-8 col-sm-12 col-xs-12">
                                Hi Amit,<br/>You are maintaining the below Recurring Deposit Accounts with YES BANK. Please select the Account mentioned below to view details.
                                <div className="row">
                                    <br/>
                                    <center>
                                        <div><select className="selectInputStyle" onChange={this.onAccountChange.bind(this)}>
                                           <option value="select">Select</option>
                                            <option value="012345678901234">A/C No. 012345678901234</option>
                                            <option value="012345678901235">A/C No. 012345678901235</option>
                                        </select>
                                        </div>
                                        <br/>
                                    </center>
                                </div>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                    </div>
                    <div id="savingDetailsDiv1" className="savingNormalText">
                        <div className="col-md-2"></div>
                        <div className="col-md-8 col-sm-12 col-xs-12">
                           <br/>
                           
                                <center><p className="relationshipSummaryRow">Transaction Details for your RD ACCOUNT No. {this.state.selectedAccount} in INR</p></center>
                                <br/>
                                <div className="row">
                                    <div className="scrollDiv">
                                        <Griddle id="griddle" results={this.state.accountData} columnMetadata={casaGridColumns}
                                                 columns={["date","description","debit","credit","balance"]} rowCount={this.state.accountData.length}
                                                 tableClassName="griddle-table" useGriddleStyles={false} showPager={false}
                                        />
                                    </div>
                                </div>
                                <br/>
                                <br/>

                                <p>{noDataAvailableTxt}</p>

                                <div className="row">
                                    <div className="col-md-4 col-xs-12">
                                        <p>Opening Balance:     {openingBalance}</p>
                                    </div>

                                    <div className="col-md-4 col-xs-12">
                                        <p>Total Debits:     {totalDeposits}</p>
                                    </div>

                                    <div className="col-md-4 col-xs-12">
                                        <p>Total Credits:     {totalCredits}</p>
                                    </div>
                                </div>

                                <br/>

                                <div className="row">
                                    <div className="col-md-4 col-xs-12">
                                        <p>Closing Balance:     {closingBalance}</p>
                                    </div>

                                    <div className="col-md-4 col-xs-12">
                                        <p>Nomination:     {nomination}</p>
                                    </div>

                                    <div className="col-md-4 col-xs-12">
                                        <p><a href="https://www.yesbank.in/digital-banking/online-banking/netbanking-services" target="_blank">{nominationLink}</a></p>
                                    </div>
                                </div>

                                <br/>
                                <br/>

                                <div className="row">
                                    <div className="scrollDiv">
                                        <center><table className="table table-bordered col-md-12 col-xs-12">

                                            <tr>
                                                Transaction code for your account statement
                                            </tr>
                                            <tr>
                                                <td>ATW/CSW/ATD/ATI - ATM Withdrawal</td>
                                                <td>OBD/OBC - Mobile Fund Transfer</td>
                                            </tr>
                                            <tr>
                                                <td>AFD/AFC - ATM Fund Transfer</td>
                                                <td>PCD - Purchased</td>
                                            </tr>
                                            <tr>
                                                <td>R - RET - UTR - Returned RTGS</td>
                                                <td>R - UTR - RTGS Transaction</td>
                                            </tr>

                                        </table></center>
                                    </div>
                                </div>
                            
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