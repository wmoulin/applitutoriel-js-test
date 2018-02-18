
import { Injector } from "hornet-js-core/src/inject/injector";
import { Utils } from "hornet-js-utils";

import { SecteurServiceImpl } from "applitutoriel-js-test/src/services/page/sec/secteur-service-page-impl";
import { AdministrationSecteurService } from "applitutoriel-js-test/src/services/page/adm/adm-secteur-service";
import { FicheProduitServiceImpl } from "applitutoriel-js-test/src/services/page/adm/adm-fpo-service-page-impl";
import { FicheProduitService } from "applitutoriel-js-test/src/services/page/adm/adm-fpo-service-page";


if (Utils.config.getOrDefault("mock.enabled", false) && Utils.config.getOrDefault("mock.servicePage.enabled", false)) {
    // Mock des services Page

} else {
    Injector.register(AdministrationSecteurService, SecteurServiceImpl);
    Injector.register(FicheProduitService, FicheProduitServiceImpl);
}