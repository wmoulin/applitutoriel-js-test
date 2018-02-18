webpackJsonp([6],{

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var hornet_js_utils_1 = __webpack_require__(1);
var ReferentielAction = __webpack_require__(65);
var abstract_routes_1 = __webpack_require__(129);
var roles_1 = __webpack_require__(347);
var urls_1 = __webpack_require__(21);
var ref_pays_service_1 = __webpack_require__(65);
var injector_1 = __webpack_require__(66);
var logger = hornet_js_utils_1.Utils.getLogger("applitutoriel.src.routes.ref.ref-routes");
var ReferentielRoutes = /** @class */ (function (_super) {
    tslib_1.__extends(ReferentielRoutes, _super);
    function ReferentielRoutes() {
        var _this = _super.call(this) || this;
        _this.addDataRoute(urls_1.URL_REF_VILLES, function () { return new abstract_routes_1.DataRouteInfos(ReferentielAction.ListerVilles, null, injector_1.Injector.getRegistered(ref_pays_service_1.ReferentielPaysService)); }, roles_1.Roles.EVERYONE);
        _this.addDataRoute(urls_1.URL_PAYS, function () { return new abstract_routes_1.DataRouteInfos(ReferentielAction.ListerPays, null, injector_1.Injector.getRegistered(ref_pays_service_1.ReferentielPaysService)); }, roles_1.Roles.EVERYONE);
        _this.addDataRoute(urls_1.URL_REF_NATIONALITE, function () { return new abstract_routes_1.DataRouteInfos(ReferentielAction.ListerNationalites, null, injector_1.Injector.getRegistered(ref_pays_service_1.ReferentielPaysService)); }, roles_1.Roles.EVERYONE);
        _this.addDataRoute(urls_1.URL_REF_NATIONALITE + "/recherche", function (nationnalite) { return new abstract_routes_1.DataRouteInfos(ReferentielAction.ListerNationalites, null, injector_1.Injector.getRegistered(ref_pays_service_1.ReferentielPaysService)); }, roles_1.Roles.ADMIN, "post");
        return _this;
    }
    return ReferentielRoutes;
}(abstract_routes_1.AbstractRoutes));
exports.default = ReferentielRoutes;



/***/ }),

/***/ 347:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Classe regroupant les rôles disponibles dans l'appli-tuto
 */
var Roles = /** @class */ (function () {
    function Roles() {
    }
    Roles.USER_STR = "APPLI_TUTO_USER";
    Roles.ADMIN_STR = "APPLI_TUTO_ADMIN";
    Roles.USER = [Roles.USER_STR];
    Roles.ADMIN = [Roles.ADMIN_STR];
    Roles.EVERYONE = [Roles.USER_STR, Roles.ADMIN_STR];
    return Roles;
}());
exports.Roles = Roles;



/***/ })

});
//# sourceMappingURL=6.js.map