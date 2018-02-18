"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var injector_1 = require("hornet-js-core/src/inject/injector");
var hornet_js_utils_1 = require("hornet-js-utils");
var secteur_service_page_impl_1 = require("applitutoriel-js-test/src/services/page/sec/secteur-service-page-impl");
var adm_secteur_service_1 = require("applitutoriel-js-test/src/services/page/adm/adm-secteur-service");
var adm_fpo_service_page_impl_1 = require("applitutoriel-js-test/src/services/page/adm/adm-fpo-service-page-impl");
var adm_fpo_service_page_1 = require("applitutoriel-js-test/src/services/page/adm/adm-fpo-service-page");
if (hornet_js_utils_1.Utils.config.getOrDefault("mock.enabled", false) && hornet_js_utils_1.Utils.config.getOrDefault("mock.servicePage.enabled", false)) {
    // Mock des services Page
}
else {
    injector_1.Injector.register(adm_secteur_service_1.AdministrationSecteurService, secteur_service_page_impl_1.SecteurServiceImpl);
    injector_1.Injector.register(adm_fpo_service_page_1.FicheProduitService, adm_fpo_service_page_impl_1.FicheProduitServiceImpl);
}

//# sourceMappingURL=injector-context-services-page.js.map
