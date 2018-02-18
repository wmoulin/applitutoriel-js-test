"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hornet_js_utils_1 = require("hornet-js-utils");
var service_request_1 = require("hornet-js-core/src/services/service-request");
var urls_1 = require("applitutoriel-js-test/src/utils/urls");
var logger = hornet_js_utils_1.Utils.getLogger("applitutoriel.services.adm.adm-fpo-service-page-impl");
/**
 * Implementation des services pour les produits
 * @class
 * @implements {FicheProduitService}
 * @extends {ServiceApi}
 */
var FicheProduitServiceImpl = /** @class */ (function (_super) {
    tslib_1.__extends(FicheProduitServiceImpl, _super);
    function FicheProduitServiceImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * liste les produit
     * @return Promise
     */
    FicheProduitServiceImpl.prototype.listerProduits = function () {
        logger.trace("SERVICES - repartition");
        return this.fetch({ method: "get", url: this.buildUrl(urls_1.URL_PRODUITS) });
    };
    FicheProduitServiceImpl.prototype.repartition = function () {
        logger.trace("SERVICES - repartition");
        return this.fetch({ method: "get", url: this.buildUrl(urls_1.URL_REPARTITIONS + urls_1.URL_PRODUITS) });
    };
    return FicheProduitServiceImpl;
}(service_request_1.ServiceRequest));
exports.FicheProduitServiceImpl = FicheProduitServiceImpl;

//# sourceMappingURL=adm-fpo-service-page-impl.js.map
