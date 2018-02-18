"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hornet_js_utils_1 = require("hornet-js-utils");
var urls_1 = require("applitutoriel-js-test/src/utils/urls");
var service_secure_1 = require("hornet-js-core/src/services/service-secure");
var logger = hornet_js_utils_1.Utils.getLogger("applitutoriel.services.adm.secteur-service-data-impl");
/**
 * Implementation des services pour les secteurs
 * @class
 * @extends { AdministrationSecteurService }
 * @extends { ServiceApi }
 */
var SecteurServiceImpl = /** @class */ (function (_super) {
    tslib_1.__extends(SecteurServiceImpl, _super);
    function SecteurServiceImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /* exemple : à utiliser pour changer le préfixe par défaut
    constructor() {
        super("Beared ");
    }*/
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
        return this.fetch({ method: "delete", url: this.buildUrl(urls_1.URL_SECTEURS + "/" + id) });
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
    SecteurServiceImpl.prototype.saveToken = function (response) {
    };
    SecteurServiceImpl.prototype.getToken = function () {
        // Ajout du token à l'envoi
        if (hornet_js_utils_1.Utils.getContinuationStorage().get("hornet.request") &&
            hornet_js_utils_1.Utils.getContinuationStorage().get("hornet.request").getSession() &&
            hornet_js_utils_1.Utils.getContinuationStorage().get("hornet.request").getSession().authorizationToken) {
            return hornet_js_utils_1.Utils.getContinuationStorage().get("hornet.request").getSession().authorizationToken;
        }
    };
    return SecteurServiceImpl;
}(service_secure_1.ServiceSecure));
exports.SecteurServiceImpl = SecteurServiceImpl;

//# sourceMappingURL=secteur-service-impl.js.map
