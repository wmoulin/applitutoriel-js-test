"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var abstract_routes_1 = require("hornet-js-core/src/routes/abstract-routes");
var urls_1 = require("applitutoriel-js-test/src/utils/urls");
var Routes = /** @class */ (function (_super) {
    tslib_1.__extends(Routes, _super);
    function Routes() {
        var _this = _super.call(this) || this;
        /* Routes lazy */
        _this.addLazyRoutes(urls_1.URL_SECTEURS, "adm/test-adm-lst-routes");
        _this.addLazyRoutes(urls_1.URL_PRODUITS, "adm/test-adm-rps-routes");
        return _this;
    }
    return Routes;
}(abstract_routes_1.AbstractRoutes));
exports.Routes = Routes;

//# sourceMappingURL=sub-module-routes.js.map
