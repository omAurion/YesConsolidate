import React from "react";
import content from "../content";
import Griddle from "griddle-react";

var insuranceColumns = [
    {
        "columnName":"investorName",
        "displayName":"Investor Name",
        "cssClassName":"griddleWidthStyle"
    },
    {
        "columnName":"policyNumber",
        "displayName":"Policy Number",
        "cssClassName":"griddleWidthStyle"
    },
    {
        "columnName":"planCodeName",
        "displayName":"Plan Code-Name",
        "cssClassName":"griddleWidthStyle"
    },
    {
        "columnName":"sumAssured",
        "displayName":"Sum Assured",
        "cssClassName":"rightAlignColumn"
    },
    {
        "columnName":"afyp",
        "displayName":"AFYP",
        "cssClassName":"griddleWidthStyle"
    }
];

export default class InsuranceDetails extends React.Component {
    render() {

        let insuranceCollection = [];
        if(content.wealthPage.insuranceDetails.length > 1)
        {
            insuranceCollection = content.wealthPage.insuranceDetails;
        }
        else 
        {
            insuranceCollection.push(content.wealthPage.insuranceDetails);
        }

        return (
            <div className="container-fluid">

                <br/>
                <br/>

                <Griddle results={insuranceCollection} columnMetadata={insuranceColumns}
                         columns={["investorName","policyNumber","planCodeName","sumAssured","afyp"]}
                          tableClassName="table" showPager={false}
                         useGriddleStyles={true}/>

                <br/>
                <br/>
                <br/>

                <p className="smallFontTxt">{content.wealthPage.infoTxt1}</p>

            </div>
        );
    }
}