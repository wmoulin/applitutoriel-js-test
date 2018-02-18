"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hornet_js_utils_1 = require("hornet-js-utils");
var injector_1 = require("hornet-js-core/src/inject/injector");
var adm_secteur_service_data_1 = require("applitutoriel-js-test/src/services/data/adm/adm-secteur-service-data");
if (hornet_js_utils_1.Utils.config.getOrDefault("mock.enabled", false) && hornet_js_utils_1.Utils.config.getOrDefault("mock.serviceData.enabled", false)) {
}
else {
    Promise.all([
        Promise.resolve().then(function () { return require("applitutoriel-js-test/src/services/data/sec/secteur-service-impl"); })
    ]).then(function (_a) {
        var SecteurServiceImpl = _a[0];
        injector_1.Injector.register(adm_secteur_service_data_1.AdministrationSecteurServiceData, SecteurServiceImpl.SecteurServiceImpl);
    });
}

//# sourceMappingURL=injector-context-services-data.js.map
