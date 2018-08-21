import React from "react";
import _ from "lodash";
import Griddle from "griddle-react";
import content from "../content";

window.jQuery = require("jquery");
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
        "columnName": "dateOfTransaction",
        "displayName": "TRANSACTION DATE",
        "cssClassName": "griddleWidthStyle"

    },
    {
        "columnName": "description",
        "displayName": "DESCRIPTION",
        "cssClassName": "griddleWidthStyle"

    },
    {
        "columnName": "debits",
        "displayName": "DEBIT",
        "cssClassName": "rightAlignColumn"
    },
    {
        "columnName": "credits",
        "displayName": "CREDIT",
        "cssClassName": "rightAlignColumn"
    },
    {
        "columnName": "balance",
        "displayName": "BALANCE",
        "cssClassName": "rightAlignColumn"
    }
];

export default class SavingsAccount extends React.Component {

    constructor(props){
        super(props);
        this.state = {accountData:[]};
        this.goToHome = this.goToHome.bind(this);
    }
    componentDidMount(){
        $("#savingDetailsDiv1").hide();
        $("#savingDetailsDiv2").hide();
    }

    onKnowMoreClick(e){
        let selPlan = e.target.value;
        //$("#savingLinkDiv").hide();
        if(selPlan == "012345678901234"){
            $("#savingDetailsDiv2").hide();
            $("#savingDetailsDiv1").show();
        }
        else if(selPlan == "012345678901235"){
            $("#savingDetailsDiv1").hide();
            $("#savingDetailsDiv2").show();
        }
    }
    onBack(){
        $("#savingDetailsDiv1").hide();
        $("#savingDetailsDiv2").hide();
        $("#savingLinkDiv").show();
    }

    goToHome(e){
        e.preventDefault();
        this.context.router.transitionTo('/');
    }

    onAccountChange (e){

        selectedAccount = e.target.value;

        selectedAccountData = [];

        for (var j in transactionDetailCollection)
        {
            if(transactionDetailCollection[j].accountNumber == selectedAccount)
            {
                selectedAccountData.push(transactionDetailCollection[j]);
                //openingBalance = transactionDetailCollection[j].
            }
        }

        for(var k in transactionSummarycollection)
        {
            if(transactionSummarycollection[k].accountNumber == selectedAccount)
            {
                openingBalance = transactionSummarycollection[k].openingBalance;
                closingBalance = transactionSummarycollection[k].closingBalance;
                totalCredits = transactionSummarycollection[k].totalCredits;
                totalDeposits = transactionSummarycollection[k].totalDebits;
                nomination = transactionSummarycollection[k].nomination;

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

        this.setState ({
            accountData:selectedAccountData
        });

        //console.log('account Data:: '+JSON.stringify(selectedAccountData));


    }

    render() {

        let transactions = content.casaPage.transaction;
        let transaction1 = [];
        transaction1.push(transactions[0]);
        let transaction2 = [];
        transaction2.push(transactions[1]);


        transactionDetailCollection = [];
        transactionSummarycollection = [];

        transactionDetailCollection[0] = {
            "accountNumber": "Select",
            "dateOfTransaction": "",
            "valueDate": "",
            "description": "",
            "debits": "",
            "credits": "",
            "balance": "",
            "typeOfAccount": "",
            "sqno": ""
        }

        for (var i in content.casaPage.transaction)
        {
            if(content.casaPage.transaction[i].typeOfAccount == 'SAVINGS')
            {
                transactionDetailCollection.push(content.casaPage.transaction[i]);
            }
        }


        //console.log('transaction details::'+JSON.stringify(transactionDetailCollection));

        accountNumberCollection = _(transactionDetailCollection).map("accountNumber").uniq().value();

        for (var i in content.casaPage.transactionSummary)
        {
            transactionSummarycollection.push(content.casaPage.transactionSummary[i]);
        }

        //console.log('accountNumberCollection::'+JSON.stringify(accountNumberCollection));

        for (var j in transactionDetailCollection)
        {
            if(transactionDetailCollection[j].accountNumber == accountNumberCollection[0])
            {
                selectedAccountData.push(transactionDetailCollection[j]);
                //openingBalance = transactionDetailCollection[j].
            }
        }

        for(var k in transactionSummarycollection)
        {
            if(transactionSummarycollection[k].accountNumber == accountNumberCollection[0])
            {
                openingBalance = transactionSummarycollection[k].openingBalance;
                closingBalance = transactionSummarycollection[k].closingBalance;
                totalCredits = transactionSummarycollection[k].totalCredits;
                totalDeposits = transactionSummarycollection[k].totalDebits;
                nomination = transactionSummarycollection[k].nomination;

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



        return (
            <div className="row blueback">
                <div className="savingBGStyle"></div>
                <div className="row">
                    <center>
                        <h3><strong>SAVINGS ACCOUNTS</strong></h3>
                        <div className="redHr"></div>
                    </center>
                    <br/>
                    <div id="savingLinkDiv" className="col-md-12 col-sm-12 col-xs-12 savingNormalText">
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-8 col-sm-12 col-xs-12">
                                Hi Amit,<br/>You are maintaining the below Saving Accounts with YES BANK. Please select the Account mentioned below to view details.
                                <div className="row">
                                    <br/>
                                    <center>
                                        <div><select className="selectInputStyle" onChange={this.onKnowMoreClick.bind(this)}>
                                            <option value="selct">Select</option>
                                            <option value="012345678901234">Saving Advantage, A/C No. 012345678901234</option>
                                            <option value="012345678901235">Saving Value, A/C No. 012345678901235</option>
                                        </select>
                                        </div>
                                        <br/>
                                    </center>
                                    {/*<div className="col-md-6 col-sm-6 col-xs-12">
                                        <div className="savingsAccTypeDiv">
                                            <div className="col-md-5 col-sm-5 col-xs-5 savingsAccTypeImg1"></div>
                                            <div className="col-md-7 col-sm-7 col-xs-7">
                                                <div className="blueText">SAVINGS <span className="redTxt">ADVANTAGE</span></div>
                                                <div className="greyText">Account Number<br/>37186012001</div>
                                                <a id="advantageId" onClick={this.onKnowMoreClick.bind(this)}>Know More</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-xs-12">
                                        <div className="savingsAccTypeDiv">
                                            <div className="col-md-5 col-sm-5 col-xs-5 savingsAccTypeImg2"></div>
                                            <div className="col-md-7 col-sm-7 col-xs-7">
                                                <div className="blueText">SAVINGS <span className="redTxt">VALUE</span></div>
                                                <div className="greyText">Account Number<br/>37186012002</div>
                                                <a id="valueId" onClick={this.onKnowMoreClick.bind(this)}>Know More</a>
                                            </div>
                                        </div>
                                    </div>*/}
                                </div>
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                    </div>
                    <div id="savingDetailsDiv1" className="savingNormalText">
                        <div className="col-md-2"></div>
                        <div className="col-md-8 col-sm-12 col-xs-12">
                            {/*<div className="rightAlignStyle" onClick={this.onBack.bind(this)}><u>Go back to Savings Accounts</u></div><br/>*/}
                            Hi Amit,<br/>You are maintaining the Saving Account Advantage with YES BANK, which has the following benefits for you.<br/>
                            <li>Higher interest rate of 6% p.a.</li>
                            <li>Unlimited free transaction on any ATM across the country.</li>
                            <li>Free demand draft and payable at-par cheque</li>
                            <br/>
                            The following information is registered with us with respect to your Saving Account against <span className="savingTitle">CUSTOMER ID</span> 12345:
                            <div className="row">
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                    <div><span className="savingTitle">ACCOUNT NUMBER </span> 012345678901234</div>
                                    <div><span className="savingTitle">JOINT ACCOUNT HOLDER </span> MANISHA MEHTA</div>
                                    <div><span className="savingTitle">REGISTERED EMAIL ID </span> rajat.mehta@gmail.com</div>
                                    <div><span className="savingTitle">PAN </span> AAJPM5445S</div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                    <div><span className="savingTitle">ACCOUNT OPENED ON </span> 01-08-2004</div>
                                    <div><span className="savingTitle">REGISTERED NOMINEE </span> Not Registered</div>
                                    <div><span className="savingTitle">REGISTERED MOBILE NO. </span> 9892512199</div>
                                    <div><span className="savingTitle">NET BANKING </span> Registered</div>
                                </div>
                                <br/>
                            </div>
                            In case of any discrepancy in the above mentioned information, please email us on <a>yestouch@yesbank.in</a> or call 1800 2000 (toll free).
                        </div>
                        <div className="col-md-2"></div>
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <br/>
                            <div className="row transactionStyle">
                                <div className="col-md-3 col-sm-3 col-xs-4 transactionIconStyle"></div>
                                <div className="col-md-7 col-sm-9 col-xs-8">
                                    <br/>
                                    <div className="darkBlueTxt">VIEW TRANSACTION DETAILS</div>
                                    Click here to get the list of all transactions on your YES BANK Savings Account as on 30th October 2016.<br/>
                                    Now, you can even sort, filter and search the transactions to get the information you want!<br/>
                                    <button className="button1Style" data-toggle="collapse" data-target="#transactId"><span className="spanIcon">Click To View</span></button>
                                </div>
                                <div className="col-md-2"></div>
                                <div id="transactId" className="col-md-12 col-sm-12 col-xs-12 collapse">
                                    <div className="row">
                                        <br/>
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-sm-12 col-xs-12">
                                            <br/>
                                            <div className="scrollDiv">
                                                <Griddle id="griddle" results={transaction1} columnMetadata={casaGridColumns}
                                                         columns={["dateOfTransaction","description","debits","credits","balance"]}
                                                         tableClassName="griddle-table" rowCount={transaction1.length}
                                                         useGriddleStyles={false} showFilter={true} showPager={false}
                                                />
                                                <br/>
                                                <table className="summaryTable">
                                                    <tr height="30">
                                                        <td width="200">Opening Balance </td>
                                                        <td width="200">: 0.00</td>
                                                        <td width="200">Total Debits </td>
                                                        <td width="200">: 0.00</td>
                                                    </tr>
                                                    <tr height="30">
                                                        <td>Closing Balance </td>
                                                        <td>: 0.00</td>
                                                        <td>Total Credits </td>
                                                        <td>: 0.00</td>
                                                    </tr>
                                                </table>
                                            </div>
                                            <br/>
                                            <p>Closing Balance figure includes unclear funds, hold amounts if any.</p>
                                            <br/>
                                            <p>W.e.f. 1st June 2015, Service Tax at the rate of 14% is applicable on all service charges levied by the bank. For Jammu & Kashmir, the State Tax rate applicable is 12.6%.</p>
                                            <br/>
                                            <center><div className="boldFont"><h3>Transaction code for your account statement</h3></div></center>
                                            <div>
                                                <div className="col-md-1"></div>
                                                <div className="col-md-11 col-sm-12 col-xs-12">
                                                    <span className="transCode">ATW/CSW/ATD/ATI - ATM Withdrawal</span>
                                                    <span className="transCode">OBD/OBC - Mobile Fund Transfer</span>
                                                    <span className="transCode">AFD/AFC - ATM Fund Transfer</span>
                                                    <span className="transCode">PCD - Purchased</span>
                                                    <span className="transCode">R - RET - UTR - Returned RTGS</span>
                                                    <span className="transCode">R - UTR - RTGS Transaction</span>
                                                </div>
                                            </div>
                                            <br/>
                                        </div>
                                        <div className="col-md-2"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="savingDetailsDiv2" className="savingNormalText">
                        <div className="col-md-2"></div>
                        <div className="col-md-8 col-sm-12 col-xs-12">
                            {/*<div className="rightAlignStyle" onClick={this.onBack.bind(this)}><u>Go back to Savings Accounts</u></div><br/>*/}
                            Hi Amit,<br/>You are maintaining the Saving Account Value with YES BANK, which has the following benefits for you.<br/>
                            <li>Higher interest rate of 6% p.a.</li>
                            <li>Unlimited free transaction on any ATM across the country.</li>
                            <li>Free demand draft and payable at-par cheque</li>
                            <br/>
                            The following information is registered with us with respect to your Saving Account against <span className="savingTitle">CUSTOMER ID</span> 12345:
                            <div className="row">
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                    <div><span className="savingTitle">ACCOUNT NUMBER </span> 012345678901234</div>
                                    <div><span className="savingTitle">JOINT ACCOUNT HOLDER </span> MANISHA MEHTA</div>
                                    <div><span className="savingTitle">REGISTERED EMAIL ID </span> rajat.mehta@gmail.com</div>
                                    <div><span className="savingTitle">PAN </span> AAJPM5445S</div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                    <div><span className="savingTitle">ACCOUNT OPENED ON </span> 01-08-2004</div>
                                    <div><span className="savingTitle">REGISTERED NOMINEE </span> <span className="redTxt">Not Registered</span></div>
                                    <div><span className="savingTitle">REGISTERED MOBILE NO. </span> 9892512199</div>
                                    <div><span className="savingTitle">NET BANKING </span> Registered</div>
                                </div>
                                <br/>
                            </div>
                            In case of any discrepancy in the above mentioned information, please email us on <a>yestouch@yesbank.in</a> or call 1800 2000 (toll free).
                        </div>
                        <div className="col-md-2"></div>
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <br/>
                            <div className="row transactionStyle">
                                <div className="col-md-3 col-sm-3 col-xs-3 transactionIconStyle"></div>
                                <div className="col-md-7 col-sm-9 col-xs-9">
                                    <br/>
                                    <div className="darkBlueTxt">VIEW TRANSACTION DETAILS</div>
                                    Click here to get the list of all transactions on your YES BANK Savings Account as on 30th October 2016.<br/>
                                    Now, you can even sort, filter and search the transactions to get the information you want!<br/>
                                    <button className="button1Style" data-toggle="collapse" data-target="#transactId1"><span className="spanIcon">Click To View</span></button>
                                </div>
                                <div className="col-md-2"></div>
                                <div id="transactId1" className="col-md-12 col-sm-12 col-xs-12 collapse">
                                    <div className="row">
                                        <br/>
                                        <div className="col-md-2"></div>
                                        <div className="col-md-8 col-sm-12 col-xs-12">
                                            <br/>
                                            <div className="scrollDiv">
                                                <Griddle id="griddle" results={transaction2} columnMetadata={casaGridColumns}
                                                         columns={["dateOfTransaction","description","debits","credits","balance"]}
                                                         tableClassName="griddle-table" rowCount={transaction2.length}
                                                         useGriddleStyles={false} showFilter={true} showPager={false}/>
                                                <br/>
                                            
                                                <table className="summaryTable">
                                                    <tr height="30">
                                                        <td width="200">Opening Balance : </td>
                                                        <td width="200">0.00</td>
                                                        <td width="200">Total Debits : </td>
                                                        <td width="200">0.00</td>
                                                    </tr>
                                                    <tr height="30">
                                                        <td>Closing Balance : </td>
                                                        <td>0.00</td>
                                                        <td>Total Credits : </td>
                                                        <td>0.00</td>
                                                    </tr>
                                                </table>
                                            </div>
                                            <br/>
                                            <p>Closing Balance figure includes unclear funds, hold amounts if any.</p>
                                            <br/>
                                            <p>W.e.f. 1st June 2015, Service Tax at the rate of 14% is applicable on all service charges levied by the bank. For Jammu & Kashmir, the State Tax rate applicable is 12.6%.</p>
                                            <br/>
                                            <center><div className="boldFont"><h3>Transaction code for your account statement</h3></div></center>
                                            <div>
                                                <div className="col-md-1"></div>
                                                <div className="col-md-11 col-sm-12 col-xs-12">
                                                    <span className="transCode">ATW/CSW/ATD/ATI - ATM Withdrawal</span>
                                                    <span className="transCode">OBD/OBC - Mobile Fund Transfer</span>
                                                    <span className="transCode">AFD/AFC - ATM Fund Transfer</span>
                                                    <span className="transCode">PCD - Purchased</span>
                                                    <span className="transCode">R - RET - UTR - Returned RTGS</span>
                                                    <span className="transCode">R - UTR - RTGS Transaction</span>
                                                </div>
                                            </div>
                                            <br/>
                                        </div>
                                        <div className="col-md-2"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
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

SavingsAccount.contextTypes = {
    db: React.PropTypes.object,
    router: React.PropTypes.func.isRequired
};