"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// L'import de hornet-js-utils doit être fait le plus tôt possible
var hornet_js_utils_1 = require("hornet-js-utils");
var fs = require("fs");
var app_i18n_loader_1 = require("applitutoriel-js-test/src/i18n/app-i18n-loader");
var HornetServer = require("hornet-js-core/src/server");
var hornet_app_1 = require("applitutoriel-js-test/src/views/layouts/hornet-app");
var hornet_layout_1 = require("applitutoriel-js-test/src/views/layouts/hornet-layout");
var error_page_1 = require("hornet-js-react-components/src/widget/component/error-page");
var routes_1 = require("applitutoriel-js-test/src/routes/routes");
var component_middleware_1 = require("hornet-js-react-components/src/middleware/component-middleware");
var HornetMiddlewares = require("hornet-js-core/src/middleware/middlewares");
// Authent passport
var passport_authentication_1 = require("hornet-js-passport/src/passport-authentication");
var authentication_configuration_1 = require("hornet-js-passport/src/authentication-configuration");
// Saml
var saml_configuration_1 = require("hornet-js-passport/src/strategy/saml/saml-configuration");
var saml_strategy_1 = require("hornet-js-passport/src/strategy/saml/saml-strategy");
var Menu = require("applitutoriel-js-test/src/resources/navigation.json");
require("applitutoriel-js-test/src/injector-context-services-data");
require("applitutoriel-js-test/src/injector-context-services-data");
var AuthenticationAPIMiddleware;
var logger = hornet_js_utils_1.Utils.getLogger("applitutoriel.server");
var Server = /** @class */ (function () {
    function Server() {
    }
    Server.configure = function () {
        var configServer = {
            serverDir: __dirname,
            staticPath: "../static",
            appComponent: hornet_app_1.HornetApp,
            layoutComponent: hornet_layout_1.HornetLayout,
            errorComponent: error_page_1.ErrorPage,
            defaultRoutesClass: new routes_1.Routes(),
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
        var key = hornet_js_utils_1.Utils.config.getOrDefault("server.https.key", false);
        var cert = hornet_js_utils_1.Utils.config.getOrDefault("server.https.cert", false);
        if (key && cert) {
            configServer.httpsOptions = {
                key: fs.readFileSync(key, "utf8"),
                cert: fs.readFileSync(cert, "utf8"),
                passphrase: hornet_js_utils_1.Utils.config.get("server.https.passphrase")
            };
        }
        return configServer;
    };
    Server.middleware = function () {
        var hornetMiddlewareList = new HornetMiddlewares.HornetMiddlewareList()
            .addAfter(component_middleware_1.PageRenderingMiddleware, HornetMiddlewares.UserAccessSecurityMiddleware)
            .addAfter(component_middleware_1.UnmanagedViewErrorMiddleware, HornetMiddlewares.DataRenderingMiddleware);
        if (hornet_js_utils_1.Utils.config.getOrDefault("authentication.saml.enabled", false)) {
            var configAuth = new authentication_configuration_1.AuthenticationtConfiguration(hornet_js_utils_1.Utils.config.get("authentication.loginUrl"), hornet_js_utils_1.Utils.config.get("authentication.logoutUrl"));
            var authent = new passport_authentication_1.PassportAuthentication(configAuth);
            var configuration = new saml_configuration_1.SamlConfiguration(hornet_js_utils_1.Utils.config.get("authentication.saml.configuration.callbackUrl"), hornet_js_utils_1.Utils.config.get("authentication.saml.configuration.logoutCallbackUrl"), 
            // Page de retour par défaut
            hornet_js_utils_1.Utils.config.get("authentication.saml.configuration.hostUrlReturnTo"), 
            // Usually specified as `/shibboleth` from site root
            hornet_js_utils_1.Utils.config.get("authentication.saml.configuration.issuer"), 
            // Certificat applicatif
            fs.readFileSync(__dirname + "/../config/cert/cert.pem", "utf8"), 
            // Clé privée de décryptage
            fs.readFileSync(__dirname + "/../config/cert/key.pem", "utf8"), hornet_js_utils_1.Utils.config.get("authentication.saml.configuration.idp"));
            authent.initStrategy(new saml_strategy_1.SamlStrategy(configuration));
            hornetMiddlewareList.addAfter(authent.getMiddleware(), HornetMiddlewares.ChangeI18nLocaleMiddleware);
        }
        else {
            hornetMiddlewareList.addAfter(AuthenticationAPIMiddleware, HornetMiddlewares.ChangeI18nLocaleMiddleware);
        }
        return hornetMiddlewareList;
    };
    Server.startApplication = function () {
        (function (AuthenticationAPI) {
            AuthenticationAPIMiddleware = AuthenticationAPI.AuthenticationAPIMiddleware;
            var server = new HornetServer.Server(Server.configure(), Server.middleware());
            server.start();
        });
    };
    return Server;
}());
exports.Server = Server;

//# sourceMappingURL=server.js.map
