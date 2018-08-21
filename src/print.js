import {render} from "react-dom";

export default function (component) {
    var printArea = document.createElement('DIV');
    printArea.className = "print-area";
    var originalContents = document.body.innerHTML;
    render(component, printArea);
    document.body.appendChild(printArea);
    window.print();
    document.body.removeChild(printArea);
}