import { Utils } from "hornet-js-utils";
import { Logger } from "hornet-js-utils/src/logger";
import { ApplitutorielSecteursServiceImpl } from "applitutoriel-js-test/src/services/applitutoriel-secteurs-service-impl";
import { URL_SECTEURS } from "applitutoriel-js-test/src/utils/urls";
import { AdministrationSecteurServiceData } from "applitutoriel-js-test/src/services/data/adm/adm-secteur-service-data";

import { ServiceSecure } from "hornet-js-core/src/services/service-secure";
import { Response } from "superagent";
import { Promise } from 'hornet-js-utils/src/promise-api';

const logger: Logger = Utils.getLogger("applitutoriel.services.adm.secteur-service-data-impl");

/**
 * Implementation des services pour les secteurs
 * @class
 * @extends { AdministrationSecteurService }
 * @extends { ServiceApi }
 */
export class SecteurServiceImpl extends ServiceSecure implements AdministrationSecteurServiceData {

    /* exemple : à utiliser pour changer le préfixe par défaut
    constructor() {
        super("Beared ");
    }*/

    /**
     * liste tous les secteurs
     * @return Promise
     */
    lister() : Promise<any> {
        logger.trace("SERVICES - lister");
        return this.fetch({method : "get", url : this.buildUrl(URL_SECTEURS)});
    }

    /**
     * supprime un secteur
     * @param {number} id identifiant du secteur à supprimer
     * @return Promise
     */
    supprimer(id:number) : Promise<any> {
        logger.trace("SERVICES - supprimer : ", id);
        return this.fetch({method : "delete", url : this.buildUrl(URL_SECTEURS + "/" + id)});
    }

    /**
     * creer un nouveau secteur
     * @param {object} secteur secteur à créer
     * @return Promise
     */
    creer(secteur:any) : Promise<any> {
        logger.trace("SERVICES - creer : ", secteur);

        return this.fetch({
            method : "post",
            url : this.buildUrl(URL_SECTEURS),
            data: secteur
        });
    }


    /**
     * creer un nouveau secteur
     * @param {number} id identifiant du secteur à supprimer
     * @param {object} secteur secteur à modifier
     * @return Promise
     */
    modifier(id:number, secteur:any) : Promise<any> {
        logger.trace("SERVICES - modifier : ", id, secteur);

        return this.fetch({
            method : "put",
            url : this.buildUrl(URL_SECTEURS + "/" + id),
            data: secteur,
            cacheLinkKey: [this.buildUrl(URL_SECTEURS)]
        });
    }

    saveToken(response:Response) {
            
    }


    getToken() {
        // Ajout du token à l'envoi
        if ( Utils.getContinuationStorage().get("hornet.request") &&
            Utils.getContinuationStorage().get("hornet.request").getSession() && 
            Utils.getContinuationStorage().get("hornet.request").getSession().authorizationToken) {
            return Utils.getContinuationStorage().get("hornet.request").getSession().authorizationToken;
        }
    }
}
