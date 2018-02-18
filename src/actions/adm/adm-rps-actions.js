"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var abstract_routes_1 = require("hornet-js-core/src/routes/abstract-routes");
var ListerProduits = /** @class */ (function (_super) {
    tslib_1.__extends(ListerProduits, _super);
    function ListerProduits() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ListerProduits.prototype.execute = function () {
        return this.getService().listerProduits();
    };
    return ListerProduits;
}(abstract_routes_1.RouteActionService));
exports.ListerProduits = ListerProduits;
var Repartition = /** @class */ (function (_super) {
    tslib_1.__extends(Repartition, _super);
    function Repartition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Repartition.prototype.execute = function () {
        return this.getService().repartition();
    };
    return Repartition;
}(abstract_routes_1.RouteActionService));
exports.Repartition = Repartition;

//# sourceMappingURL=adm-rps-actions.js.map
