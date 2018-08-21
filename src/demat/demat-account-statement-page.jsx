import React from "react";
import Griddle from "griddle-react";
import content from "../content";
import _ from "lodash";
import {Table} from "react-bootstrap";
import $ from "jquery";
var withTransactionCollection = [];
var withoutTransactionCollection = [];
var showAllTCollection = [];
var showAllNTCollection = [];


var withTransactionISINCollection = [];
var withoutTransactionISINCollection = [];

var selectedISIN = '';

var withTransactionFlag = true;

var selectedISINData = [];
var selectedISINTransactionData = [];

var closingBalance = '';
var openingBalance = '';

var withTTData = [];

var withTransactionsColumns = [
    {
        "columnName":"BkgDate",
        "displayName":"Date",
        "cssClassName":"griddleWidthStyle"
    
    },
    {
        "columnName":"transactionNumber",
        "displayName":"Trans No.",
        "cssClassName":"griddleWidthStyle"
    },
    {
        "columnName":"description",
        "displayName":"Description",
        "cssClassName":"griddleWidthStyle"
    },
    {
        "columnName":"creditDebit",
        "displayName":"Credit/Debit",
        "cssClassName":"rightAlignColumn"
    },
    {
        "columnName":"balance",
        "displayName":"Balance",
        "cssClassName":"rightAlignColumn"
    }
];

var withoutTransactionsColumns = [
    {
        "columnName":"holdingDesc",
        "displayName":"Description",
        "cssClassName":"griddleWidthStyle"

    },
    {
        "columnName":"closingBalance",
        "displayName":"Closing  Balance",
        "cssClassName":"rightAlignColumn"
    }
];


export default class DematStatement extends React.Component {

    constructor(props){
        super(props);
        this.state = {transactionData:[],ISINCollection:[]};
    }

    componentDidMount () {
        document.getElementById("withTransactionDiv").style.display = "none";
        document.getElementById("withoutTransactionDiv").style.display = "none";
        document.getElementById("showAllDiv").style.display = "none";
    }

    onWithTransactionClick() {
        //console.log('with transaction');
        $("#savingDetailsDiv1").hide();
        withTransactionISINCollection = _(withTransactionCollection).map("name").uniq().value();

        this.setState ({
            ISINCollection:withTransactionISINCollection
        });

        document.getElementById("withTransactionDiv").style.display = "block";
        document.getElementById("withoutTransactionDiv").style.display = "none";
        document.getElementById("showAllDiv").style.display = "none";

        withTransactionFlag = true;

    }
    onWithoutTransactionClick() {
        $("#savingDetailsDiv1").hide();
        //console.log('without transaction');
        withoutTransactionISINCollection = _(withoutTransactionCollection).map("name").uniq().value();

        this.setState ({
            ISINCollection:withoutTransactionISINCollection
        });

        document.getElementById("withTransactionDiv").style.display = "none";
        document.getElementById("withoutTransactionDiv").style.display = "block";
        document.getElementById("showAllDiv").style.display = "none";

        withTransactionFlag = false;

    }
    onShowAllClick() {
        //console.log('all transaction');
        document.getElementById("withTransactionDiv").style.display = "none";
        document.getElementById("withoutTransactionDiv").style.display = "none";
        document.getElementById("showAllDiv").style.display = "block";

    }

    onISINSelect (e) {

        selectedISIN = e.target.value;
       
        //console.log('ISIN:: '+selectedISIN);

        selectedISINTransactionData = [];
        if(withTransactionFlag == true)
        {
            for(var i in withTransactionCollection)
            {
                if(withTransactionCollection[i].name == selectedISIN)
                {
                    selectedISINData.push(withTransactionCollection[i]);
                    closingBalance = withTransactionCollection[i].closingBalance;
                    openingBalance = withTransactionCollection[i].openingBalance;


                    if(withTransactionCollection[i].transaction.length > 1)
                    {
                        selectedISINTransactionData = withTransactionCollection[i].transaction;
                    }
                    else
                    {
                        selectedISINTransactionData = withTransactionCollection[i].transaction;
                    }
                }
            }
            console.log("selectedISINTransactionData=>"+JSON.stringify(selectedISINTransactionData));
        }
        else
        {
            for(var i in withoutTransactionCollection)
            {
                if(withoutTransactionCollection[i].name == selectedISIN)
                {
                
                    selectedISINTransactionData.push(withoutTransactionCollection[i]);
                    /*closingBalance = withoutTransactionCollection[i].closingBalance;
                    openingBalance = withoutTransactionCollection[i].openingBalance;


                    if(withTransactionCollection[i].transaction.length > 1)
                    {
                        selectedISINTransactionData = withoutTransactionCollection[i].transaction;
                    }
                    else
                    {
                        selectedISINTransactionData.push(withoutTransactionCollection[i].transaction);
                    }*/
                }
            }
        }


       // console.log('Selelcted ISIN:: '+JSON.stringify(withTransactionCollection));

        this.setState ({
            transactionData:selectedISINTransactionData
        });

            console.log("selectedISIN=>"+selectedISIN);
         if(selectedISIN == 'Select'){
            $("#savingDetailsDiv1").hide();
        }
        else{
             $("#savingDetailsDiv1").show();
        }

    }
    render() {

        withTransactionCollection = [];
        withoutTransactionCollection = [];
        withTTData = [];
        showAllTCollection = [];
        showAllNTCollection = [];

       withTransactionCollection.push({

            "name": "Select",

            "transaction": [],

            "openingBalance": "",

            "closingBalance": ""

        });
       /* withoutTransactionCollection.push({

            "name": "Select",

            "holdingDesc": "",

            "closingBalance": ""

        });*/

        for(var i in content.dematAccountPage.withTransaction)
        {

            let wtc = [];

            wtc.name = content.dematAccountPage.withTransaction[i].name;

            wtc.transaction = [];

            if(content.dematAccountPage.withTransaction[i].transaction.length > 1)
            {
                wtc.transaction = content.dematAccountPage.withTransaction[i].transaction;
            }
            else
            {
                wtc.transaction.push(content.dematAccountPage.withTransaction[i].transaction);
            }

            wtc.openingBalance = content.dematAccountPage.withTransaction[i].openingBalance;
            wtc.closingBalance = content.dematAccountPage.withTransaction[i].closingBalance;

            //console.log("wtc:: "+JSON.stringify(wtc));

            withTransactionCollection.push(wtc);

            showAllTCollection.push(wtc);
        }

        console.log(JSON.stringify(withoutTransactionCollection));

        for(var i in content.dematAccountPage.withoutTransaction)
        {
            withoutTransactionCollection.push(content.dematAccountPage.withoutTransaction[i]);
            showAllNTCollection.push(content.dematAccountPage.withoutTransaction[i]);
        }



        //console.log('data:: '+JSON.stringify(withTransactionCollection));

        return(
            <div className="container-fluid">
                <div className="row">

                    <br/>
                    <center><div className="col-md-12 col-xs-12">
                        Select ISIN: &nbsp;&nbsp;&nbsp;
                        <label>
                            <input type="radio" name="optradio" onClick={this.onWithTransactionClick.bind(this)}/>With transaction
                        </label> &nbsp;&nbsp;&nbsp;
                        <label>
                            <input type="radio" name="optradio" onClick={this.onWithoutTransactionClick.bind(this)}/>Without transaction
                        </label> &nbsp;&nbsp;&nbsp;
                        <label>
                            <input type="radio" name="optradio" onClick={this.onShowAllClick.bind(this)}/>Show All
                        </label>
                    </div></center>

                    <br/>
                    <br/>

                    <div id="withTransactionDiv" className="row">
                        <div id="savingLinkDiv" className="col-md-12 col-sm-12 col-xs-12 savingNormalText">
                            <center>
                                <select className="selectInputStyle" onChange={this.onISINSelect.bind(this)}>
                                    {_.map(this.state.ISINCollection, (c)=><option value={c}>{c}</option>)}
                                </select>
                            </center>
                        </div>
                        <div id="savingDetailsDiv1" className="savingNormalText">
                            <div className="scrollDiv">
                                <Griddle results={this.state.transactionData} columns={["BkgDate","transactionNumber","description","creditDebit","balance"]}
                                         columnMetadata={withTransactionsColumns} rowCount={this.state.transactionData.length}
                                         tableClassName="griddle-table" showPager={false}
                                         useGriddleStyles={false}/>
                             </div>
                            <br/>
                            <p className="col-md-6 col-sm-6 col-xs-6">Opening Balance: {openingBalance}</p>
                            <p className="col-md-6 col-sm-6 col-xs-6">Closing Balance: {closingBalance}</p>
                        </div>
                    </div>

                    <div id="withoutTransactionDiv" className="row">
                        <div id="savingLinkDiv" className="col-md-12 col-sm-12 col-xs-12 savingNormalText">
                            <center>
                                <select className="selectInputStyle" onChange={this.onISINSelect.bind(this)}>
                                    <option value='Select'>Select</option>
                                    {_.map(this.state.ISINCollection, (c)=><option value={c}>{c}</option>)}
                                </select>
                            </center>
                        </div>
                        <div id="savingDetailsDiv1" className="savingNormalText">
                            <div className="scrollDiv">
                                <Griddle results={this.state.transactionData} columns={["holdingDesc","closingBalance"]}
                                         columnMetadata={withoutTransactionsColumns}
                                         rowCount={this.state.transactionData.length}
                                         tableClassName="griddle-table" showPager={false}
                                         useGriddleStyles={false} noDataMessage=""/>
                            </div>
                       </div>
                    </div>

                    <div id="showAllDiv" className="row">
                        <div className="scrollDiv">
                            {_.map(showAllTCollection,(t)=>
                            <Table bordered condensed hover>
                                <tr>
                                    <td>ISIN</td>
                                    <td>{t.name}</td>
                                </tr>
                                <tr>
                                    <td>Beneficiary</td>
                                    <td>Opening Balance: {t.openingBalance}</td>
                                </tr>
                                <tr>
                                    {_.map(t.transaction, (tt)=>
                                        <Table bordered condensed hover>
                                            <tr>
                                                <td>{tt.BkgDate}</td>
                                                <td>{tt.transactionNumber}</td>
                                                <td>{tt.description}</td>
                                                <td>{tt.creditDebit}</td>
                                                <td>{tt.balance}</td>
                                            </tr>
                                        </Table>
                                    )}
                                </tr>
                                <tr>
                                    <td>Closing Balance: {t.closingBalance}</td>
                                </tr>
                                <hr></hr>
                            </Table>)}

                        </div>
                        <br/>
                        <div className="smallFontTxt">No transactions recorded for the following ISINs during the given period.</div>
                        <br/>
                        <div className="scrollDiv">
                            {_.map(showAllNTCollection,(wt)=>
                            <Table bordered condensed hover>
                                <tr>
                                    <td>ISIN</td>
                                    <td></td>
                                    <td>{wt.name}</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>{wt.holdingDesc}</td>
                                    <td></td>
                                    <td></td>
                                    <td>Closing Balance: {wt.closingBalance}</td>
                                </tr>
                                <tr></tr>
                            </Table>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}