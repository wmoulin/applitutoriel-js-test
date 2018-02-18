"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hornet_js_utils_1 = require("hornet-js-utils");
var urls_1 = require("applitutoriel-js-test/src/utils/urls");
var sub_module_service_request_1 = require("applitutoriel-js-test/src/services/sub-module-service-request");
var logger = hornet_js_utils_1.Utils.getLogger("applitutoriel.services.adm.secteur-service-page-impl");
/**
 * Implementation des services pour les secteurs
 * @class
 * @implements {AdministrationSecteurService}
 * @extends {ServiceApi}
 */
var SecteurServiceImpl = /** @class */ (function (_super) {
    tslib_1.__extends(SecteurServiceImpl, _super);
    function SecteurServiceImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * liste tous les secteurs
     * @return Promise
     */
    SecteurServiceImpl.prototype.lister = function () {
        logger.trace("SERVICES - lister");
        return this.fetch({ method: "get", url: this.buildUrl(urls_1.URL_SECTEURS) });
    };
    /**
     * supprime un secteur
     * @param {number} id identifiant du secteur à supprimer
     * @return Promise
     */
    SecteurServiceImpl.prototype.supprimer = function (id) {
        logger.trace("SERVICES - supprimer : ", id);
        return this.fetch({
            method: "delete",
            url: this.buildUrl(urls_1.URL_SECTEURS + "/" + id),
            cacheLinkKey: [this.buildUrl(urls_1.URL_SECTEURS)]
        });
    };
    /**
     * creer un nouveau secteur
     * @param {object} secteur secteur à créer
     * @return Promise
     */
    SecteurServiceImpl.prototype.creer = function (secteur) {
        logger.trace("SERVICES - creer : ", secteur);
        return this.fetch({
            method: "post",
            url: this.buildUrl(urls_1.URL_SECTEURS),
            data: secteur
        });
    };
    /**
     * creer un nouveau secteur
     * @param {number} id identifiant du secteur à supprimer
     * @param {object} secteur secteur à modifier
     * @return Promise
     */
    SecteurServiceImpl.prototype.modifier = function (id, secteur) {
        logger.trace("SERVICES - modifier : ", id, secteur);
        return this.fetch({
            method: "put",
            url: this.buildUrl(urls_1.URL_SECTEURS + "/" + id),
            data: secteur,
            cacheLinkKey: [this.buildUrl(urls_1.URL_SECTEURS)]
        });
    };
    return SecteurServiceImpl;
}(/*AdministrationSecteurService*/ sub_module_service_request_1.SubModuleServiceRequest));
exports.SecteurServiceImpl = SecteurServiceImpl;

//# sourceMappingURL=secteur-service-page-impl.js.map
