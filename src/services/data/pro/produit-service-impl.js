"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hornet_js_utils_1 = require("hornet-js-utils");
var service_request_1 = require("hornet-js-core/src/services/service-request");
var urls_1 = require("applitutoriel-js-test/src/utils/urls");
var logger = hornet_js_utils_1.Utils.getLogger("applitutoriel.services.adm.secteur-service-page-impl");
var ProduitServiceImpl = /** @class */ (function (_super) {
    tslib_1.__extends(ProduitServiceImpl, _super);
    function ProduitServiceImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    ProduitServiceImpl.prototype.lister = function () {
        logger.trace("SERVICES - lister");
        return this.fetch({ method: "get", url: this.buildUrl(urls_1.URL_PRODUITS) });
    };
    return ProduitServiceImpl;
}(service_request_1.ServiceRequest));
exports.ProduitServiceImpl = ProduitServiceImpl;

//# sourceMappingURL=produit-service-impl.js.map
