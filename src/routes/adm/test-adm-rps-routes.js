"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var abstract_routes_1 = require("hornet-js-core/src/routes/abstract-routes");
var roles_1 = require("applitutoriel-js-test/src/utils/roles");
var adm_rps_page_1 = require("applitutoriel-js-test/src/views/adm/adm-rps-page");
var adm_rps_actions_1 = require("applitutoriel-js-test/src/actions/adm/adm-rps-actions");
var adm_fpo_service_page_impl_1 = require("applitutoriel-js-test/src/services/page/adm/adm-fpo-service-page-impl");
var urls_1 = require("applitutoriel-js-test/src/utils/urls");
var ProduitsRoutes = /** @class */ (function (_super) {
    tslib_1.__extends(ProduitsRoutes, _super);
    function ProduitsRoutes() {
        var _this = _super.call(this) || this;
        /* Route des pages */
        _this.addPageRoute("/", function () { return new abstract_routes_1.PageRouteInfos(adm_rps_page_1.RepartitionPage, null, adm_fpo_service_page_impl_1.FicheProduitServiceImpl); }, roles_1.Roles.ADMIN);
        /* Route des datas */
        _this.addDataRoute(urls_1.URL_PRODUITS, function () { return new abstract_routes_1.DataRouteInfos(adm_rps_actions_1.Repartition, null, adm_fpo_service_page_impl_1.FicheProduitServiceImpl); }, roles_1.Roles.ADMIN);
        return _this;
    }
    return ProduitsRoutes;
}(abstract_routes_1.AbstractRoutes));
exports.default = ProduitsRoutes;

//# sourceMappingURL=test-adm-rps-routes.js.map
