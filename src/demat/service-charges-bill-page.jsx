import React from "react";
import content from "../content";
import Griddle from "griddle-react";


var billColumns = [
    {
        "columnName": "date",
        "displayName": "Date"
    },
    {
        "columnName": "transactionNumber",
        "displayName": "Trans. No.",
        "cssClassName": "billGriddleWidthStyle"
    },
    {
        "columnName": "isinCode",
        "displayName": "ISIN Code",
        "cssClassName": "billGriddleWidthStyle"
    },
    {
        "columnName": "description",
        "displayName": "Scrip Name",
        "cssClassName": "billGriddleWidthStyle"
    },
    {
        "columnName": "quantity",
        "displayName": "Quantity",
        "cssClassName": "rightAlignColumn"
    },
    {
        "columnName": "value",
        "displayName": "Value(INR)",
        "cssClassName": "rightAlignColumn"
    },
    {
        "columnName": "rate",
        "displayName": "Rate",
        "cssClassName": "rightAlignColumn"
    },
    {
        "columnName": "amount",
        "displayName": "Amount(INR)",
        "cssClassName": "rightAlignColumn"
    }
];

export default class ServiceBill extends React.Component {
    render() {

        var bills = content.dematAccountPage.serviceChargesBills;
        var billDetailsCollection = bills.bill;
        var billAmtTotal = bills.billHeadTotal;
        var grossBillAmt = bills.grossBillAmt;
        var serviceTax = bills.serviceTax;
        var billTotal = bills.billTotal;
        var outstandingAmt = bills.outstandingAmt;
        var serviceTaxRegNo = bills.serviceTaxRegNum;



        return(
            <div className="container-fluid">
                <br/>
                <div className="row">Bill Date: {bills.billDate}</div>
                <br/>
                <div className="row">Bill No.: {bills.billNumber}</div>
                <br/>
                <div className="row relationshipSummaryRow">
                    Charges Bank A/C No.: {bills.accountNumber}
                </div>
                <div className="row">
                    <Griddle results={billDetailsCollection} columnMetadata={billColumns}
                                 tableClassName="griddle-table" enableInfiniteScroll={true}
                                 useGriddleStyles={false} bodyHeight={300}
                                 columns={["date","transactionNumber","isinCode","description","quantity","value","rate","amount"]}/>
                    <br/>
                </div>
                <div className="row blackBorderCtn">
                    <div className="col-md-6 col-sm-6 col-xs-12">
                        <div><span className="savingTitle">Bill Head Total : </span> {billAmtTotal}</div>
                        <div><span className="savingTitle">Gross Bill Amt (Rounded off) : </span> {grossBillAmt}</div>
                        <div><span className="savingTitle">Service Tax (Rounded Off) : </span> {serviceTax}</div>
                        <div><span className="savingTitle">Bill Total (Rounded Off) : </span> {billTotal}</div>
                        <div><span className="savingTitle">Net Amount : </span> {billTotal}</div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-12">
                        <div><span className="savingTitle">Account Position As On : </span> {bills.billDate}</div>
                        <div><span className="savingTitle">Outstanding Amount : </span> {outstandingAmt}</div>
                        <div><span className="savingTitle">Current Bill Amount : </span> {billTotal}</div>
                        <div><span className="savingTitle">Net Position : </span> {billTotal}</div>
                        <div><span className="savingTitle">Service Tax Registration No.: </span> {serviceTaxRegNo}</div>
                    </div>
                </div>
                <br/>
                <div className="row smallFontTxt">
                    Any discrepancy in the bill statement should be brought to the notice of YES BANK LIMITED within one month from the date of the statement.
                </div>
            </div>
        );
    }
}