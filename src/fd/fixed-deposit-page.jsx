import React from "react";
import content from "../content";
import _ from "lodash";
import Griddle from "griddle-react";
import $ from "jquery";

var accountDetailsCollection = [];
var accountNumberCollection = [];
var selectedAccountData = [];
var selectedAccount = '';

var selectedAccType = '';
var depositOpenDate = '';
var selectedTenure = '';
var principalPayment = '';
var interestPayment = '';
var selectedJointHolder1 = '';
var selectedJointHolder2 = '';
var originalPrincipalAmount = '';
var nomination = '';

var fdColumns = [
    {
        "columnName": "openRenewalDate",
        "displayName": "Open/ Renewal Date",
        "cssClassName": "griddleWidthStyle"

    },
    {
        "columnName": "principalAmount",
        "displayName": "Principal Amount",
        "cssClassName": "rightAlignColumn"

    },
    {
        "columnName": "interestCompounded",
        "displayName": "Interest Compounded",
        "cssClassName": "rightAlignColumn"
    },
    {
        "columnName": "interestRate",
        "displayName": "Interest Rate",
        "cssClassName": "griddleWidthStyle"
    },
    {
        "columnName": "interestAccrued",
        "displayName": "Interest Accured",
        "cssClassName": "rightAlignColumn"
    },
    {
        "columnName": "maturityDate",
        "displayName": "Maturity Date",
        "cssClassName": "griddleWidthStyle"
    },
    {
        "columnName": "maturityAmount",
        "displayName": "Maturity Amount**",
        "cssClassName": "rightAlignColumn"
    }
];

export default class FixedDeposit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {accountData: [],selectedAccount:''};
    }
    componentDidMount(){
        $("#savingDetailsDiv1").hide();
    }

    onAccountChange(e) {
        let selectedAccount = e.target.value;
        if(selectedAccount == 'select'){
            $("#savingDetailsDiv1").hide();
        }else{
             $("#savingDetailsDiv1").show();
        }
       
        for(var i in accountDetailsCollection)
        {
            if(selectedAccount == accountDetailsCollection[i].accountNumber)
            {
                selectedAccountData = [];
                selectedAccountData.push(accountDetailsCollection[i]);
                selectedAccType = selectedAccountData[0].accountType;
                depositOpenDate = selectedAccountData[0].originalDepositOpenDate;
                selectedTenure = selectedAccountData[0].tenure;
                principalPayment = selectedAccountData[0].princiaplPaymentInstruction;
                interestPayment = selectedAccountData[0].interestPaymentInstruction;
                selectedJointHolder1 = selectedAccountData[0].jointHolder1;
                selectedJointHolder2 = selectedAccountData[0].jointHolder2;
                originalPrincipalAmount = selectedAccountData[0].originalPrincipalAmount;
                nomination = selectedAccountData[0].nomination;
            }
        }

        this.setState({
            accountData: selectedAccountData,
            selectedAccount:selectedAccount
        });


        
    }

    render() {

        //accountDetailsCollection = content.termDeposite;

        accountDetailsCollection[0] = {
            "accountNumber": "Select",

            "openRenewalDate": "",

            "principalAmount": "",

            "interestCompounded": "",

            "interestRate": "",

            "interestAccrued": "",

            "maturityDate": "",

            "maturityAmount": "",

            "accountType": "",

            "tenure": "",

            "princiaplPaymentInstruction": "",

            "interestPaymentInstruction": "",

            "originalPrincipalAmount": "",

            "originalDepositOpenDate": "",

            "jointHolder1": "",

            "jointHolder2": "",

            "nomination": ""
        };

        for(var i in content.termDeposite)
        {
            accountDetailsCollection.push(content.termDeposite[i]);
        }

        accountNumberCollection = _(accountDetailsCollection).map("accountNumber").uniq().value();
        //selectedAccountData = content.termDeposite[0];
        //this.state.accountData = selectedAccountData;

        let nominationLink = '';

        if(nomination == 'Not Availed')
        {
                nominationLink = 'Add Nomination in NetBanking';
        }
        else {
            nominationLink = '';
        }

        return (
           <div className="row blueback">
                <div className="fdBGStyle">
                    <h1><strong>FIXED DEPOSIT</strong></h1>
                    <h4>Easy withdrawals with no penalties!</h4>
                </div>

                <div className="row">
                    <center>
                        <h3><strong>Fixed Deposit</strong></h3>
                        <div className="redHr"></div>
                    </center>
                    <br/>
                    <div id="savingLinkDiv" className="col-md-12 col-sm-12 col-xs-12 savingNormalText">
                        <div className="row">
                            <div className="col-md-2"></div>
                            <div className="col-md-8 col-sm-12 col-xs-12">
                                Hi Amit,<br/>You are maintaining the below Fixed Deposit Accounts with YES BANK. Please select the Account mentioned below to view details.
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
                           <div className="row">
                                <div className="col-md-4 col-xs-12">
                                    {content.homePage.customerInfo.name}
                                </div>
                                <div className="col-md-4 col-xs-12">
                                    Account No.: {this.state.selectedAccount}
                                </div>
                                <div className="col-md-4 col-xs-12">
                                    Customer ID: {content.homePage.customerInfo.customerID}
                                </div>
                            </div>
                            <br/>
                            <div className="row">
                                <div className="scrollDiv">
                                    <Griddle results={this.state.accountData} tableClassName="griddle-table" rowCount='1'
                                                         useGriddleStyles={false} showPager={false}
                                                         columnMetadata={fdColumns}
                                                         columns={["openRenewalDate","principalAmount", "interestCompounded","interestRate","interestAccrued","maturityDate","maturityAmount"]}/>
                                </div>
                                <br/>
                            </div>
                            <div className="row smallFontTxt">
                                <div className="col-md-6 col-xs-12 ">
                                    <div><span className="savingTitle">ACCOUNT TYPE</span>: {selectedAccType}</div>
                                </div>

                                <div className="col-md-6 col-xs-12 ">
                                    <div><span className="savingTitle">ORIGINAL DEPOSIT OPEN DATE</span>: {depositOpenDate}</div>
                                </div>
                            </div>
                            <div className="row smallFontTxt">
                                <div className="col-md-6 col-xs-12 ">
                                    <div><span className="savingTitle">TENURE</span>: {selectedTenure}</div>
                                </div>

                                <div className="col-md-6 col-xs-12 ">
                                    <div><span className="savingTitle">JOINT HOLDER 1</span>: {selectedJointHolder1}</div>
                                </div>

                            </div>

                            <div className="row smallFontTxt">
                                <div className="col-md-6 col-xs-12 ">
                                    <div><span className="savingTitle">PRINCIPAL PAYMENT INSTRUCTION</span>: {principalPayment}</div>
                                </div>
                                 <div className="col-md-6 col-xs-12 ">
                                    <div><span className="savingTitle">JOINT HOLDER 2</span>: {selectedJointHolder2}</div>
                                </div>

                            </div>

                            <div className="row smallFontTxt">

                                <div className="col-md-6 col-xs-12 ">
                                    <div><span className="savingTitle">INTEREST PAYMENT INSTRUCTION</span>: {interestPayment}</div>
                                </div>
                                <div className="col-md-6 col-xs-12 ">
                                    <div><span className="savingTitle">NOMINATION</span>: {nomination}</div>
                                </div>
                               

                            </div>

                            <div className="row smallFontTxt">

                                <div className="col-md-6 col-xs-12 ">
                                    <div><span className="savingTitle">ORIGINAL PRINCIPAL AMOUNT</span>: {originalPrincipalAmount}</div>
                                </div>

                            </div>
                            <div className="row smallFontTxt">

                                <div className="col-md-6 col-xs-12 ">

                                </div>

                                <div className="col-md-6 col-xs-12 ">
                                    <a href="https://www.yesbank.in/digital-banking/online-banking/netbanking-services" target="_blank">{nominationLink}</a>
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