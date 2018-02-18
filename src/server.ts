// L'import de hornet-js-utils doit être fait le plus tôt possible
import { Utils } from "hornet-js-utils";
import { Logger } from "hornet-js-utils/src/logger";
import * as fs from "fs";
import { AppliI18nLoader } from "applitutoriel-js-test/src/i18n/app-i18n-loader";
import { ServerConfiguration } from "hornet-js-core/src/server-conf";
import * as HornetServer from "hornet-js-core/src/server";
import { HornetApp } from "applitutoriel-js-test/src/views/layouts/hornet-app";
import { HornetLayout } from "applitutoriel-js-test/src/views/layouts/hornet-layout";
import { ErrorPage } from "hornet-js-react-components/src/widget/component/error-page";
import { Routes } from "applitutoriel-js-test/src/routes/routes";
import {
    PageRenderingMiddleware,
    UnmanagedViewErrorMiddleware
} from "hornet-js-react-components/src/middleware/component-middleware";
import * as HornetMiddlewares from "hornet-js-core/src/middleware/middlewares";

// Authent passport
import { PassportAuthentication } from "hornet-js-passport/src/passport-authentication";
import { AuthenticationtConfiguration } from "hornet-js-passport/src/authentication-configuration";
// Saml
import { SamlConfiguration } from "hornet-js-passport/src/strategy/saml/saml-configuration";
import { SamlStrategy } from "hornet-js-passport/src/strategy/saml/saml-strategy";

import { HornetMiddlewareList } from "hornet-js-core/src/middleware/middlewares";

import * as Menu from "applitutoriel-js-test/src/resources/navigation.json";
import "applitutoriel-js-test/src/injector-context-services-data";
import "applitutoriel-js-test/src/injector-context-services-data";

let AuthenticationAPIMiddleware;

const logger: Logger = Utils.getLogger("applitutoriel.server");

export class Server {

    static configure(): ServerConfiguration {

        let configServer: ServerConfiguration = {
            serverDir: __dirname,
            staticPath: "../static",
            appComponent: HornetApp,
            layoutComponent: HornetLayout,
            errorComponent: ErrorPage,
            defaultRoutesClass: new Routes(),
            sessionStore: null, // new RedisStore({host: "localhost",port: 6379,db: 2,pass: "RedisPASS"}),
            routesLoaderPaths: ["applitutoriel-js-test/src/routes/"],
            /*Directement un flux JSON >>internationalization:require("./i18n/messages-fr-FR.json"),*/
            /*Sans utiliser le système clé/valeur>> internationalization:null,*/
            internationalization: new AppliI18nLoader(),
            menuConfig: (<any> Menu).menu,
            loginUrl: Utils.config.get("authentication.loginUrl"),
            logoutUrl: Utils.config.get("authentication.logoutUrl"),
            welcomePageUrl: Utils.config.get("welcomePage"),
            publicZones: [
                Utils.config.get("welcomePage")
            ]
        };

        const key = Utils.config.getOrDefault("server.https.key", false);
        const cert = Utils.config.getOrDefault("server.https.cert", false);
        if (key && cert) {
            configServer.httpsOptions = {
                key: fs.readFileSync(key, "utf8"),
                cert: fs.readFileSync(cert, "utf8"),
                passphrase: Utils.config.get("server.https.passphrase")
            };
        }
        return configServer;
    }

    static middleware(): HornetMiddlewareList {
        let hornetMiddlewareList = new HornetMiddlewares.HornetMiddlewareList()
            .addAfter(PageRenderingMiddleware, HornetMiddlewares.UserAccessSecurityMiddleware)
            .addAfter(UnmanagedViewErrorMiddleware, HornetMiddlewares.DataRenderingMiddleware);

        if (Utils.config.getOrDefault("authentication.saml.enabled", false)) {

            let configAuth = new AuthenticationtConfiguration(
                Utils.config.get("authentication.loginUrl"),
                Utils.config.get("authentication.logoutUrl")
            );

            let authent = new PassportAuthentication(configAuth);
            let configuration = new SamlConfiguration(
                Utils.config.get("authentication.saml.configuration.callbackUrl"),
                Utils.config.get("authentication.saml.configuration.logoutCallbackUrl"),
                // Page de retour par défaut
                Utils.config.get("authentication.saml.configuration.hostUrlReturnTo"),
                // Usually specified as `/shibboleth` from site root
                Utils.config.get("authentication.saml.configuration.issuer"),
                // Certificat applicatif
                fs.readFileSync(__dirname + "/../config/cert/cert.pem", "utf8"),
                // Clé privée de décryptage
                fs.readFileSync(__dirname + "/../config/cert/key.pem", "utf8"),
                Utils.config.get("authentication.saml.configuration.idp")
            );
            authent.initStrategy(new SamlStrategy(configuration));

            hornetMiddlewareList.addAfter(authent.getMiddleware(), HornetMiddlewares.ChangeI18nLocaleMiddleware);
        } else {
            hornetMiddlewareList.addAfter(AuthenticationAPIMiddleware, HornetMiddlewares.ChangeI18nLocaleMiddleware);
        }
        return hornetMiddlewareList;
    }

    static startApplication() {
        
            (AuthenticationAPI) => {
                AuthenticationAPIMiddleware = AuthenticationAPI.AuthenticationAPIMiddleware;
                let server = new HornetServer.Server(Server.configure(), Server.middleware());
                server.start();
            }
    }
}