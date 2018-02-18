"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var abstract_routes_1 = require("hornet-js-core/src/routes/abstract-routes");
var adm_lst_actions_1 = require("applitutoriel-js-test/src/actions/adm/adm-lst-actions");
var adm_lst_page_1 = require("applitutoriel-js-test/src/views/adm/adm-lst-page");
var roles_1 = require("applitutoriel-js-test/src/utils/roles");
var adm_secteur_service_1 = require("applitutoriel-js-test/src/services/page/adm/adm-secteur-service");
var adm_secteur_service_data_1 = require("applitutoriel-js-test/src/services/data/adm/adm-secteur-service-data");
var injector_1 = require("hornet-js-core/src/inject/injector");
var SecteursRoutes = /** @class */ (function (_super) {
    tslib_1.__extends(SecteursRoutes, _super);
    function SecteursRoutes() {
        var _this = _super.call(this) || this;
        /* Route des pages */
        _this.addPageRoute("/", function () { return new abstract_routes_1.PageRouteInfos(adm_lst_page_1.SecteursPage, null, injector_1.Injector.getRegistered(adm_secteur_service_1.AdministrationSecteurService)); }, roles_1.Roles.ADMIN);
        _this.addDataRoute("/", function () { return new abstract_routes_1.DataRouteInfos(adm_lst_actions_1.ListerSecteurs, null, injector_1.Injector.getRegistered(adm_secteur_service_data_1.AdministrationSecteurServiceData)); });
        /* Route des datas */
        _this.addDataRoute("/(\\d+)", function (id) { return new abstract_routes_1.DataRouteInfos(adm_lst_actions_1.ModifierSecteur, { id: id }, injector_1.Injector.getRegistered(adm_secteur_service_data_1.AdministrationSecteurServiceData)); }, roles_1.Roles.ADMIN, "put");
        _this.addDataRoute("/(\\d+)", function (id) { return new abstract_routes_1.DataRouteInfos(adm_lst_actions_1.SupprimerSecteur, { id: id }, injector_1.Injector.getRegistered(adm_secteur_service_data_1.AdministrationSecteurServiceData)); }, roles_1.Roles.ADMIN, "delete");
        _this.addDataRoute("/", function (id) { return new abstract_routes_1.DataRouteInfos(adm_lst_actions_1.CreerSecteur, null, injector_1.Injector.getRegistered(adm_secteur_service_data_1.AdministrationSecteurServiceData)); }, roles_1.Roles.ADMIN, "post");
        return _this;
    }
    return SecteursRoutes;
}(abstract_routes_1.AbstractRoutes));
exports.default = SecteursRoutes;

//# sourceMappingURL=test-adm-lst-routes.js.map
