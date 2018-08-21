var _ = require("lodash");
var React = require("react");
var ReactDOM = require("react-dom");
var c3 = require("c3");

class ChartComponent extends React.Component {

    componentDidMount() {
        var c3Data = {
            onclick: this.props.onDataClick,
            onmouseover: this.props.onDataMouseover,
            onmouseout: this.props.onDataMouseout,
            onselected: this.props.onDataSelected,
            onunselected: this.props.onDataUnselected,
            type: this.props.type
        };
        _.extend(c3Data, this.props.data);

        var c3Graph = {
            size: {
                width: this.props.width,
                height: this.props.height
            },
            padding: this.props.padding,
            color: this.props.color,
            transition: this.props.transition,
            bindto: ReactDOM.findDOMNode(this),
            data: c3Data,
            axis: this.props.axis,
            pie: this.props.pie,
            tooltip: this.props.tooltip,
        };
        this.chart = c3.generate(c3Graph);
    }

    componentDidUpdate(oldProps) {
        if (this.chart) {
            if (oldProps.data !== this.props.data) {
                var newData = this.props.data.keys.value || [];
                var oldData = oldProps.data.keys.value || [];
                var added = _.difference(newData, oldData);
                var removed = _.difference(oldData, newData);

                if (removed.length > 0) {
                    var update = _.extend({}, this.props.data, {unload: removed});
                    this.chart.load(update);
                } else {
                    this.chart.load(this.props.data);
                }

                if (oldProps.data.names != this.props.data.names) {
                    this.chart.data.names(this.props.data.names);
                }
            }
        }
    }

    render() {
        return (
            <div className="chart"/>
        );
    }

}

module.exports = ChartComponent;