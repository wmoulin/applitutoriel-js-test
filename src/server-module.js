"use strict";
/**
 * Copyright ou © ou Copr. Ministère de l'Europe et des Affaires étrangères (2017)
 * <p/>
 * pole-architecture.dga-dsi-psi@diplomatie.gouv.fr
 * <p/>
 * Ce logiciel est un programme informatique servant à faciliter la création
 * d'applications Web conformément aux référentiels généraux français : RGI, RGS et RGAA
 * <p/>
 * Ce logiciel est régi par la licence CeCILL soumise au droit français et
 * respectant les principes de diffusion des logiciels libres. Vous pouvez
 * utiliser, modifier et/ou redistribuer ce programme sous les conditions
 * de la licence CeCILL telle que diffusée par le CEA, le CNRS et l'INRIA
 * sur le site "http://www.cecill.info".
 * <p/>
 * En contrepartie de l'accessibilité au code source et des droits de copie,
 * de modification et de redistribution accordés par cette licence, il n'est
 * offert aux utilisateurs qu'une garantie limitée.  Pour les mêmes raisons,
 * seule une responsabilité restreinte pèse sur l'auteur du programme,  le
 * titulaire des droits patrimoniaux et les concédants successifs.
 * <p/>
 * A cet égard  l'attention de l'utilisateur est attirée sur les risques
 * associés au chargement,  à l'utilisation,  à la modification et/ou au
 * développement et à la reproduction du logiciel par l'utilisateur étant
 * donné sa spécificité de logiciel libre, qui peut le rendre complexe à
 * manipuler et qui le réserve donc à des développeurs et des professionnels
 * avertis possédant  des  connaissances  informatiques approfondies.  Les
 * utilisateurs sont donc invités à charger  et  tester  l'adéquation  du
 * logiciel à leurs besoins dans des conditions permettant d'assurer la
 * sécurité de leurs systèmes et ou de leurs données et, plus généralement,
 * à l'utiliser et l'exploiter dans les mêmes conditions de sécurité.
 * <p/>
 * Le fait que vous puissiez accéder à cet en-tête signifie que vous avez
 * pris connaissance de la licence CeCILL, et que vous en avez accepté les
 * termes.
 * <p/>
 * <p/>
 * Copyright or © or Copr. Ministry for Europe and Foreign Affairs (2017)
 * <p/>
 * pole-architecture.dga-dsi-psi@diplomatie.gouv.fr
 * <p/>
 * This software is a computer program whose purpose is to facilitate creation of
 * web application in accordance with french general repositories : RGI, RGS and RGAA.
 * <p/>
 * This software is governed by the CeCILL license under French law and
 * abiding by the rules of distribution of free software.  You can  use,
 * modify and/ or redistribute the software under the terms of the CeCILL
 * license as circulated by CEA, CNRS and INRIA at the following URL
 * "http://www.cecill.info".
 * <p/>
 * As a counterpart to the access to the source code and  rights to copy,
 * modify and redistribute granted by the license, users are provided only
 * with a limited warranty  and the software's author,  the holder of the
 * economic rights,  and the successive licensors  have only  limited
 * liability.
 * <p/>
 * In this respect, the user's attention is drawn to the risks associated
 * with loading,  using,  modifying and/or developing or reproducing the
 * software by the user in light of its specific status of free software,
 * that may mean  that it is complicated to manipulate,  and  that  also
 * therefore means  that it is reserved for developers  and  experienced
 * professionals having in-depth computer knowledge. Users are therefore
 * encouraged to load and test the software's suitability as regards their
 * requirements in conditions enabling the security of their systems and/or
 * data to be ensured and,  more generally, to use and operate it in the
 * same conditions as regards security.
 * <p/>
 * The fact that you are presently reading this means that you have had
 * knowledge of the CeCILL license and that you accept its terms.
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * hornet-js-core - Ensemble des composants qui forment le coeur de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.0
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
var hornet_js_utils_1 = require("hornet-js-utils");
Error.stackTraceLimit = hornet_js_utils_1.Utils.config.getOrDefault("server.stackTraceLimit", 100);
var logger = hornet_js_utils_1.Utils.getLogger("hornet-js-core.server");
process.on("uncaughtException", function (error) {
    logger.error("Exception non catchée : ", error);
    //throw new TechnicalError('ERR_TECH_UNKNOWN', null, error);
});
var parseUrl = require("parseurl");
var express = require("express");
var middlewares_1 = require("hornet-js-core/src/middleware/middlewares");
var hornet_app_1 = require("applitutoriel-js-test/src/views/layouts/hornet-app");
var hornet_layout_1 = require("applitutoriel-js-test/src/views/layouts/hornet-layout");
var error_page_1 = require("hornet-js-react-components/src/widget/component/error-page");
var routes_1 = require("applitutoriel-js-test/src/routes/routes");
var app_i18n_loader_1 = require("applitutoriel-js-test/src/i18n/app-i18n-loader");
var Menu = require("applitutoriel-js-test/src/resources/navigation.json");
var component_middleware_1 = require("hornet-js-react-components/src/middleware/component-middleware");
require("applitutoriel-js-test/src/injector-context-services-data");
require("applitutoriel-js-test/src/injector-context-services-data");
var ModuleServer = /** @class */ (function () {
    function ModuleServer(/*app: express.Express*/ prefix) {
        if (prefix === void 0) { prefix = "test"; }
        this.prefix = prefix;
        this.router = express.Router();
        this.configServer = {
            serverDir: __dirname,
            staticPath: "../static",
            appComponent: hornet_app_1.HornetApp,
            layoutComponent: hornet_layout_1.HornetLayout,
            errorComponent: error_page_1.ErrorPage,
            defaultRoutesClass: new routes_1.Routes(),
            routesDataContext: "/services",
            sessionStore: null,
            routesLoaderPaths: ["applitutoriel-js-test/src/routes/"],
            /*Directement un flux JSON >>internationalization:require("./i18n/messages-fr-FR.json"),*/
            /*Sans utiliser le système clé/valeur>> internationalization:null,*/
            internationalization: new app_i18n_loader_1.AppliI18nLoader(),
            menuConfig: Menu.menu,
            loginUrl: hornet_js_utils_1.Utils.config.get("authentication.loginUrl"),
            logoutUrl: hornet_js_utils_1.Utils.config.get("authentication.logoutUrl"),
            welcomePageUrl: hornet_js_utils_1.Utils.config.get("welcomePage"),
            publicZones: [
                hornet_js_utils_1.Utils.config.get("welcomePage")
            ]
        };
        //this.app = app;
    }
    /**
     * Fonction principale permettant d'initialiser le serveur NodeJS proprement dit. <br />
     * Elle effectue les opérations suivantes:
     * <ul>
     *     <li>Chargement de 'express'</li>
     *     <li>Application des middlewares</li>
     * </ul>
     * @param appConfig
     * @param hornetMiddlewareList
     * @returns {"express".e.Express}
     */
    ModuleServer.prototype.initRouter = function (appConfig) {
        if (appConfig === void 0) { appConfig = this.configServer; }
        logger.debug("Initialisation du serveur module");
        // on place par défaut les clés "loginUrl" & "logoutUrl" & "welcomePageUrl" dans les AppSharedProps
        // Initialisation du router
        var hornetMiddlewareList = new middlewares_1.HornetMiddlewareList(middlewares_1.DEFAULT_HORNET_MODULE_MIDDLEWARES);
        hornetMiddlewareList.addAfter(component_middleware_1.PageRenderingMiddleware, middlewares_1.RouterServerSubMiddleware);
        // si pas de liste fournie >> on prend la liste des middlewares par défaut d'hornet
        // Instanciation et insertion des middlewares dans l'application
        middlewares_1.AbstractHornetMiddleware.APP_CONFIG = appConfig;
        for (var i = 0; i < hornetMiddlewareList.list.length; i++) {
            var middleware = hornetMiddlewareList.list[i];
            if (middleware === undefined || middleware === null) {
                logger.warn("Un middleware de valeur '" + middleware + "' a été trouvé dans le tableau des middlewares.");
            }
            else {
                try {
                    var inst = new middleware(this.configServer, this.prefix);
                    inst.insertRouterMiddleware(this.router);
                }
                catch (e) {
                    logger.error("Une erreur a été levée lors de l'instanciation d'un middleware > erreur:", e);
                    throw e;
                }
            }
        }
        return new middlewares_1.HornetRouter(this.prefix, this.router);
    };
    return ModuleServer;
}());
exports.default = ModuleServer;

//# sourceMappingURL=server-module.js.map
