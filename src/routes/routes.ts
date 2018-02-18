import { AbstractRoutes, PageRouteInfos, PUBLIC_ROUTE } from "hornet-js-core/src/routes/abstract-routes";
import {
    URL_SECTEURS,
    URL_PRODUITS
} from "applitutoriel-js-test/src/utils/urls";
import { HomePage } from "applitutoriel-js-test/src/views/gen-hom-page"

export class Routes extends AbstractRoutes {
    constructor() {
        super();

        /* Route des pages */
        this.addPageRoute("/",
            () => new PageRouteInfos(HomePage, null, null),
            PUBLIC_ROUTE
        );

        /* Routes lazy */
        this.addLazyRoutes(URL_SECTEURS, "adm/test-adm-lst-routes");
        this.addLazyRoutes(URL_PRODUITS, "adm/test-adm-rps-routes");

    }
}
