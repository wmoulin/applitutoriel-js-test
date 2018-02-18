import { Utils } from "hornet-js-utils";
import { Logger } from "hornet-js-utils/src/logger";
import { ServiceRequest } from "hornet-js-core/src/services/service-request";
import {URL_PRODUITS, URL_REPARTITIONS} from "applitutoriel-js-test/src/utils/urls";
import {FicheProduitService} from "applitutoriel-js-test/src/services/page/adm/adm-fpo-service-page";

const logger: Logger = Utils.getLogger("applitutoriel.services.adm.adm-fpo-service-page-impl");

/**
 * Implementation des services pour les produits
 * @class
 * @implements {FicheProduitService}
 * @extends {ServiceApi}
 */
export class FicheProduitServiceImpl extends ServiceRequest implements FicheProduitService {
    
    /**
     * liste les produit
     * @return Promise
     */
    listerProduits() : Promise<any> {
        logger.trace("SERVICES - repartition");
        return this.fetch({method : "get", url: this.buildUrl(URL_PRODUITS)});
    }

    repartition() : Promise<any> {
        logger.trace("SERVICES - repartition");
        return this.fetch({method : "get", url: this.buildUrl(URL_REPARTITIONS + URL_PRODUITS)});
    }


}
