"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hornet_js_utils_1 = require("hornet-js-utils");
var client_1 = require("hornet-js-core/src/client");
var routes_1 = require("applitutoriel-js-test/src/routes/routes");
var hornet_app_1 = require("applitutoriel-js-test/src/views/layouts/hornet-app");
var error_page_1 = require("hornet-js-react-components/src/widget/component/error-page");
var react_client_1 = require("hornet-js-react-components/src/react/react-client");
require("applitutoriel-js-test/src/injector-context-services-page");
(function startClient() {
    var logger = hornet_js_utils_1.Utils.getLogger("applitutoriel.client");
    function routeLoader(name, callback) {
        logger.trace("routeLoaderClient(" + name + ")");
        // WEBPACK_AUTO_GENERATE_CLIENT_ROUTE_LOADING
        return null;
    }
    try {
        Error.stackTraceLimit = Infinity;
        var configClient = {
            appComponent: hornet_app_1.HornetApp,
            errorComponent: error_page_1.ErrorPage,
            routesLoaderfn: routeLoader,
            defaultRoutesClass: new routes_1.Routes(),
            directorClientConfiguration: {
                html5history: true,
                strict: false,
                convert_hash_in_init: false,
                recurse: false,
                notfound: function () {
                    logger.error("Erreur. Cette route n'existe pas :'" + this.path + "'");
                }
            },
            onbeforeunload: function () {
                logger.trace(hornet_js_utils_1.Utils.getCls("hornet.navigateData"));
                if (hornet_js_utils_1.Utils.getCls("hornet.navigateData") && !_.isUndefined(hornet_js_utils_1.Utils.getCls("hornet.navigateData"))) {
                    window.localStorage.setItem("hornet.navigateData", JSON.stringify(hornet_js_utils_1.Utils.getCls("hornet.navigateData")));
                }
            },
            onload: function () {
                if (window.localStorage.getItem("hornet.navigateData")) {
                    window.HornetCLS["hornet.navigateData"] = JSON.parse(window.localStorage.getItem("hornet.navigateData"));
                    window.localStorage.removeItem("hornet.navigateData");
                }
            }
        };
        // On supprime le spinner de chargement de l'application
        // Cela ne gêne pas React car il est en dehors de sa div "app"
        var readyCallback = function () {
            var appLoading = document.getElementById("firstLoadingSpinner");
            if (appLoading) {
                appLoading.parentNode.removeChild(appLoading);
            }
        };
        var clientInit = new react_client_1.ReactClientInitializer(configClient.appComponent, readyCallback);
        client_1.Client.initAndStart(configClient, clientInit);
    }
    catch (exc) {
        logger.error("Erreur lors du chargement de l'appli côté client (Exception)", exc);
    }
})();

//# sourceMappingURL=client.js.map
