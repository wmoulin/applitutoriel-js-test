"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hornet_js_utils_1 = require("hornet-js-utils");
var abstract_routes_1 = require("hornet-js-core/src/routes/abstract-routes");
var logger = hornet_js_utils_1.Utils.getLogger("applitutoriel.actions.pro.pro-actions");
var ListerProduits = /** @class */ (function (_super) {
    tslib_1.__extends(ListerProduits, _super);
    function ListerProduits() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ListerProduits.prototype.execute = function () {
        return this.getService().lister();
    };
    return ListerProduits;
}(abstract_routes_1.RouteActionService));
exports.ListerProduits = ListerProduits;

//# sourceMappingURL=pro-actions.js.map
