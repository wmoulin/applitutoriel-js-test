import { Utils } from "hornet-js-utils";
import { Injector } from "hornet-js-core/src/inject/injector";
import { Scope } from "hornet-js-core/src/inject/injectable";
import { AdministrationSecteurServiceData } from 'applitutoriel-js-test/src/services/data/adm/adm-secteur-service-data';

if (Utils.config.getOrDefault("mock.enabled", false) && Utils.config.getOrDefault("mock.serviceData.enabled", false)) {
} else {
    Promise.all([
        import("applitutoriel-js-test/src/services/data/sec/secteur-service-impl")
    ]).then(([SecteurServiceImpl]) => {
        Injector.register(AdministrationSecteurServiceData, SecteurServiceImpl.SecteurServiceImpl);
    });
}

