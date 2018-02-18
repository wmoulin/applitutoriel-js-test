"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var hornet_js_utils_1 = require("hornet-js-utils");
var hornet_page_1 = require("hornet-js-react-components/src/widget/component/hornet-page");
var button_1 = require("hornet-js-react-components/src/widget/button/button");
var buttons_area_1 = require("hornet-js-react-components/src/widget/form/buttons-area");
var Chart = require("chart.js");
var logger = hornet_js_utils_1.Utils.getLogger("applitutoriel.views.adm.adm-rps-page");
var RepartitionPage = /** @class */ (function (_super) {
    tslib_1.__extends(RepartitionPage, _super);
    function RepartitionPage(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.chart = null;
        _this.element = null;
        _this.data = null;
        _this.color = Chart.helpers.color;
        Chart.plugins.register({
            afterDatasetsDraw: function (chart, easing) {
                var ctx = chart.ctx;
                chart.data.datasets.forEach(function (dataset, i) {
                    var meta = chart.getDatasetMeta(i);
                    if (!meta.hidden) {
                        meta.data.forEach(function (element, index) {
                            // dessine en noir
                            ctx.fillStyle = "rgb(0, 0, 0)";
                            ctx.font = Chart.helpers.fontString("1em", "bold", "NotoSansUI");
                            ctx.textAlign = "center";
                            ctx.textBaseline = "middle";
                            var position = element.tooltipPosition();
                            ctx.fillText(dataset.data[index].toString(), position.x, position.y - 5);
                        });
                    }
                });
            }
        });
        return _this;
    }
    RepartitionPage.prototype.prepareClient = function () {
        var _this = this;
        this.data = {
            datasets: [{
                    data: [],
                    backgroundColor: [],
                    label: RepartitionPage.getI18n("repartitionPage.title")
                }],
            labels: []
        };
        this.getService().repartition().then(function (data) {
            //this.Donut.drawDonutWithData(data);
            for (var i = 0; i < data.length; i++) {
                _this.data.datasets[0].data.push(data[i].value);
                _this.data.datasets[0].backgroundColor.push(_this.color(data[i].color).alpha(0.5).rgbString());
                _this.data.labels.push(data[i].label);
            }
            _this.setState({ data: _this.data });
        });
    };
    /**
     * @inheritDoc
     */
    RepartitionPage.prototype.render = function () {
        var _this = this;
        logger.trace("VIEW RepartitionPage render");
        var maxWidth = 550;
        var maxHeight = 550;
        var style = { maxWidth: maxWidth, maxHeight: maxHeight, padding: "20px" };
        return (React.createElement("div", null,
            React.createElement("h2", null, this.i18n("repartitionPage.title")),
            React.createElement("div", { style: style, className: "center" },
                React.createElement("div", { id: "chartdiv", style: style },
                    React.createElement("canvas", { ref: function (element) {
                            _this.element = element;
                        }, width: 500, height: 500, style: style }))),
            React.createElement(buttons_area_1.ButtonsArea, null,
                React.createElement(button_1.Button, { id: "doughnut", className: "hornet-button", onClick: function (e) {
                        _this.setState({ type: "doughnut" });
                    }, label: this.i18n("repartitionPage.type.doughnut") }),
                React.createElement(button_1.Button, { id: "pie", className: "hornet-button", onClick: function (e) {
                        _this.setState({ type: "pie" });
                    }, label: this.i18n("repartitionPage.type.pie") }),
                React.createElement(button_1.Button, { id: "polarArea", className: "hornet-button", onClick: function (e) {
                        _this.setState({ type: "polarArea" });
                    }, label: this.i18n("repartitionPage.type.polarArea") }))));
    };
    RepartitionPage.prototype.componentDidUpdate = function () {
        if (this.chart)
            this.chart.destroy();
        this.chart = new Chart(this.element, {
            type: this.state.type,
            data: this.state.data,
            options: this.state.options
        }); // polarArea doughnut
    };
    RepartitionPage.defaultProps = {
        options: {
            title: {
                display: true,
                text: ""
            },
            legend: {
                position: "bottom"
            }
        },
        type: "polarArea"
    };
    return RepartitionPage;
}(hornet_page_1.HornetPage));
exports.RepartitionPage = RepartitionPage;

//# sourceMappingURL=adm-rps-page.js.map
