"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hornet_js_utils_1 = require("hornet-js-utils");
var React = require("react");
var hornet_page_1 = require("hornet-js-react-components/src/widget/component/hornet-page");
var logger = hornet_js_utils_1.Utils.getLogger("applitutoriel.views.gen.gen-hom-page");
/**
 * Ecran de page d'accueil de l'application
 */
var HomePage = /** @class */ (function (_super) {
    tslib_1.__extends(HomePage, _super);
    function HomePage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HomePage.prototype.prepareClient = function () {
    };
    /**
     * @inheritDoc
     */
    HomePage.prototype.render = function () {
        logger.trace("VIEW HomePage render");
        return (React.createElement("div", { id: "pageAccueil" },
            React.createElement("h2", null, "Accueil"),
            React.createElement("div", null,
                React.createElement("h3", null, "Qu'est-ce que l'application TUTORIEL ?"),
                React.createElement("div", null,
                    React.createElement("p", { className: "texte" }, "L'application TUTORIEL a pour objectif de pr\u00E9senter une application bas\u00E9e sur le framework Hornet."),
                    React.createElement("p", { className: "texte" },
                        React.createElement("em", null, "A noter :")),
                    React.createElement("ul", null,
                        React.createElement("li", null, "Hornet facilite la mise en oeuvre du RGAA dans une application."),
                        React.createElement("li", null, "Mais l'utilisation de Hornet ne garantit pas qu'une application soit valide RGAA.")))),
            React.createElement("div", null,
                React.createElement("h3", null, "Mise en oeuvre"),
                React.createElement("div", null,
                    React.createElement("h4", null, "Cas fonctionnels"),
                    React.createElement("p", { className: "texte" }, "Les cas fonctionnels pr\u00E9sent\u00E9s dans l'application sont :"),
                    React.createElement("ul", null,
                        React.createElement("li", null, "Formulaire de recherche"),
                        React.createElement("li", null, "Pr\u00E9sentation du r\u00E9sultat sous forme de tableau \u00E9ditable"),
                        React.createElement("li", null, "Formulaire \u00E9tendu"),
                        React.createElement("li", null, "Tableau d'ajout/suppression/modification d'items")),
                    React.createElement("h4", null, "RGAA"),
                    React.createElement("p", { className: "texte" },
                        "Pour plus d'infos sur le RGAA, aller sur le lien\u00A0",
                        React.createElement("a", { href: this.genUrl("/politiqueAccessibilite") }, "Accessibilit\u00E9"),
                        "."),
                    React.createElement("p", { className: "texte" }, "Le framework fourni est un \u00E9l\u00E9ment facilitant la mise en conformit\u00E9 RGAA.")))));
    };
    return HomePage;
}(hornet_page_1.HornetPage));
exports.HomePage = HomePage;

//# sourceMappingURL=gen-hom-page.js.map
