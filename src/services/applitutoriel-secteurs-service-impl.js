"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hornet_js_utils_1 = require("hornet-js-utils");
var service_request_1 = require("hornet-js-core/src/services/service-request");
var logger = hornet_js_utils_1.Utils.getLogger("applitutoriel-js-common.services.applitutoriel-secteurs-service-impl");
/**
 * Exemple de surcharge de la classe ServiceApi fournie par le framework
 * afin de changer l'adresse du serveur tomcat pour gerer le multi service
 */
var ApplitutorielSecteursServiceImpl = /** @class */ (function (_super) {
    tslib_1.__extends(ApplitutorielSecteursServiceImpl, _super);
    /**
     * Le service par défaut est configuré dans default.json (partie services)
     * Mais il est possible d'en configurer d'autres (configuration "multi-services")
     * Exemple :
     * Si le service des secteurs est déployé sur un autre serveur que celui par défaut
     * alors on redéfinit les variables serviceHost et serviceName pour mettre l'adresse
     * du service spécifique des secteurs (secteursServices.host dans default.json)
     */
    function ApplitutorielSecteursServiceImpl() {
        var _this = _super.call(this) || this;
        if (hornet_js_utils_1.Utils.isServer) {
            // exemple de configuration multi-service
            // coté serveur (requetes depuis le serveur nodejs vers le serveur tomcat), on redéfinit l'adresse du service
            if (hornet_js_utils_1.Utils.config.getOrDefault("secteursServices", null)) {
                _super.prototype.setServiceHost.call(_this, hornet_js_utils_1.Utils.config.get("secteursServices.host"));
                _super.prototype.setServiceName.call(_this, hornet_js_utils_1.Utils.config.get("secteursServices.name"));
            }
            else {
                _super.prototype.setServiceHost.call(_this, hornet_js_utils_1.Utils.config.getOrDefault("defaultServices.host", ""));
                _super.prototype.setServiceName.call(_this, hornet_js_utils_1.Utils.config.getOrDefault("defaultServices.name", ""));
            }
            logger.trace("Redefinition de l'adresse des services pour les secteurs : ", _super.prototype.getServiceHost.call(_this), _super.prototype.getServiceName.call(_this));
        }
        else {
            // coté client, mode fullSpa (requêtes depuis le browser/client js vers le serveur tomcat),
            // on redéfinit aussi l'adresse du service
            var fullSpa = hornet_js_utils_1.Utils.config.getOrDefault("fullSpa.enabled", false);
            if (fullSpa) {
                _super.prototype.setServiceHost.call(_this, hornet_js_utils_1.Utils.config.getOrDefault("fullSpa.secteurs.host", ""));
                _super.prototype.setServiceName.call(_this, hornet_js_utils_1.Utils.buildContextPath(hornet_js_utils_1.Utils.config.getOrDefault("fullSpa.secteurs.name", "/services")));
                logger.trace("Redefinition de l'adresse des services pour les secteurs : ", _super.prototype.getServiceHost.call(_this), _super.prototype.getServiceName.call(_this));
            }
            else {
                // sinon (requêtes depuis le browser/client js vers le serveur nodejs)
                // on garde l'adresse du serveur node
            }
        }
        return _this;
    }
    return ApplitutorielSecteursServiceImpl;
}(service_request_1.ServiceRequest));
exports.ApplitutorielSecteursServiceImpl = ApplitutorielSecteursServiceImpl;

//# sourceMappingURL=applitutoriel-secteurs-service-impl.js.map
