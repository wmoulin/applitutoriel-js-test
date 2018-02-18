"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hornet_js_utils_1 = require("hornet-js-utils");
var React = require("react");
var hornet_page_1 = require("hornet-js-react-components/src/widget/component/hornet-page");
var spinner_1 = require("hornet-js-react-components/src/widget/spinner/spinner");
var header_page_1 = require("hornet-js-react-components/src/widget/header/header-page");
var footer_page_1 = require("hornet-js-react-components/src/widget/footer/footer-page");
var hornet_content_1 = require("hornet-js-react-components/src/widget/component/hornet-content");
var user_1 = require("hornet-js-react-components/src/widget/user/user");
var menu_1 = require("hornet-js-react-components/src/widget/navigation/menu");
var layout_switcher_1 = require("hornet-js-react-components/src/widget/screen/layout-switcher");
var change_language_1 = require("hornet-js-react-components/src/widget/language/change-language");
var dropdown_1 = require("hornet-js-react-components/src/widget/dropdown/dropdown");
var i18n_service_api_1 = require("hornet-js-core/src/services/i18n-service-api");
var navigation_utils_1 = require("hornet-js-components/src/utils/navigation-utils");
var _ = require("lodash");
var classNames = require("classnames");
var logger = hornet_js_utils_1.Utils.getLogger("applitutoriel.views.layouts.hornet-app");
var users = { "user": {
        "name": "user",
        "roles": [{ "id": 2, "name": "APPLI_TUTO_USER" }]
    }, "admin": {
        "name": "admin",
        "roles": [{ "id": 1, "name": "APPLI_TUTO_ADMIN" }, { "id": 2, "name": "APPLI_TUTO_USER" }]
    }
};
var HornetApp = /** @class */ (function (_super) {
    tslib_1.__extends(HornetApp, _super);
    function HornetApp(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.service = new i18n_service_api_1.I18nServiceApi();
        // Exemple de consommation d'une ressource externe :q
        // prérequis : - renseigner themeHost dans le default.json
        //             - mettre à jour la policy des images pour autoriser le host
        // L'exemple :
        // this.state.logoUrl = HornetComponent.genUrlThemeExternal("/img/ic_logo_hornet_header.png");
        _this.state.logoUrl = _this.genUrlStatic("/img/logoHornet.png");
        _this.state.headerTitleUrl = "http://intranet.diplomatie.gouv.fr/";
        _this.state.content = props.content;
        _this.listenUrlChangeEvent();
        return _this;
    }
    HornetApp.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        this.listenUpdatePageExpandEvent();
        if (this.state.error && this.state.error.hasBeenReported) {
            this.state.error = undefined;
        }
        else if (this.state.error) {
            this.state.error.hasBeenReported = true;
        }
    };
    HornetApp.prototype.componentWillUpdate = function (nextProps, nextState) {
        if (nextState.error && nextState.error.hasBeenReported) {
            nextState.error = undefined;
        }
    };
    HornetApp.prototype.prepareClient = function () {
    };
    /**
     * @inheritDoc
     */
    HornetApp.prototype.render = function () {
        var _this = this;
        logger.trace("VIEW HornetApp render");
        var title = _.concat(this.i18n("header").logoTitle, this.state.applicationTitle).join(" ");
        var classes = {
            "mode-fullscreen": this.state.modeFullscreen
        };
        var messIntl = this.i18n("header");
        var applicationTitle = this.i18n("applicationTitle");
        var lienAide = (this.state.linkHelpVisible) ?
            React.createElement("li", null,
                React.createElement("a", { title: messIntl.help + applicationTitle, href: this.genUrl("/aide") }, messIntl.help))
            : null;
        var lang = React.createElement(change_language_1.ChangeLanguage, { handleChangeLanguage: this.handleChangeLanguage, position: dropdown_1.Position.BOTTOMRIGHT });
        var user = hornet_js_utils_1.Utils.config.getOrDefault("fullSpa.enabled", false) && hornet_js_utils_1.Utils.config.getOrDefault("mock.enabled", false) ? React.createElement(dropdown_1.Dropdown, { items: [{ label: "as Admin", action: this.changeUserTo, valueCurrent: "admin", className: "link" },
                { label: "As User", action: this.changeUserTo, valueCurrent: "user", className: "link" }], title: "mock users", icon: "picto-user", className: "profil-content", id: "dropdown-user-mock" + "-drop", label: "Users", labelClassName: "profil-label", position: dropdown_1.Position.BOTTOMRIGHT }) : React.createElement(user_1.User, null);
        // todo add to banner
        var wrappedUserLang = (React.createElement("div", { className: "userlang fr full-height" },
            user,
            lang,
            React.createElement(layout_switcher_1.LayoutSwitcher, null)));
        return (React.createElement("div", { id: "site", className: classNames(classes) },
            React.createElement(header_page_1.HeaderPage, { scrollHeight: 35 },
                React.createElement("div", { id: "header" },
                    React.createElement("div", { id: "header-expanded-zone", className: "inside " + this.state.classNameExpanded, style: { maxWidth: this.state.currentWorkingZoneWidth } },
                        React.createElement("div", { className: "fl full-height" },
                            React.createElement("a", { className: "header-link", title: this.i18n("application.headerTitleText"), href: this.state.headerTitleUrl }, this.i18n("application.headerTitle"))),
                        React.createElement("div", { className: "fr full-height user", style: { display: "inline-flex" } },
                            user,
                            lang,
                            React.createElement(layout_switcher_1.LayoutSwitcher, null)))),
                React.createElement("div", { id: "banner" },
                    React.createElement("div", { id: "banner-expanded-zone", role: "banner", className: "inside " + this.state.classNameExpanded, style: { maxWidth: this.state.currentWorkingZoneWidth } },
                        React.createElement("div", { className: "fl menu-main-conteneur " },
                            React.createElement(menu_1.Menu, { showIconInfo: true, workingZoneWidth: this.state.currentWorkingZoneWidth, var: function (menu) { return _this.menu = menu; } })),
                        React.createElement("div", { className: "fl mls" },
                            React.createElement("a", { className: "sub-header-link", href: this.genUrl(hornet_js_utils_1.Utils.config.getOrDefault("welcomePage", "/")), title: title, id: "img-logo" },
                                React.createElement("img", { src: this.state.logoUrl, alt: this.i18n("applicationTitle") }))),
                        React.createElement("div", { className: "fl mls" },
                            React.createElement("a", { className: "sub-header-link", href: this.genUrl(hornet_js_utils_1.Utils.config.getOrDefault("welcomePage", "/")), title: title },
                                React.createElement("h1", { id: "app-title" }, this.i18n("applicationTitle")))),
                        wrappedUserLang),
                    React.createElement(spinner_1.Spinner, null))),
            React.createElement(hornet_content_1.HornetContent, { content: this.state.content, workingZoneWidth: this.state.workingZoneWidth, error: this.state.error }),
            React.createElement(footer_page_1.FooterPage, { workingZoneWidth: this.state.currentWorkingZoneWidth },
                React.createElement("div", { className: "fl mll" },
                    React.createElement("ul", { className: "footer-links" },
                        React.createElement("li", null,
                            React.createElement("a", { href: this.genUrl("/planAppli"), title: messIntl.planTitle + applicationTitle }, messIntl.plan)),
                        React.createElement("li", null,
                            React.createElement("a", { href: this.genUrl("/politiqueAccessibilite"), title: messIntl.accessTitle + applicationTitle }, messIntl.access)),
                        React.createElement("li", null,
                            React.createElement("a", { href: this.genUrl("/contact"), title: messIntl.contactTitle + applicationTitle }, messIntl.contact)),
                        lienAide)),
                React.createElement("div", { className: "fr mrl" },
                    React.createElement("p", null, applicationTitle + " - v" + hornet_js_utils_1.Utils.appSharedProps.get("appVersion"))))));
    };
    /**
     * Méthode permettant de passer en mode plein écran
     */
    HornetApp.prototype.onClickLinkFullscreen = function () {
        this.setState({
            modeFullscreen: !this.state.modeFullscreen
        });
    };
    /**
     * Méthode permettant de changer de langue
     * @param i18nLocale
     */
    HornetApp.prototype.handleChangeLanguage = function (i18nLocale) {
        this.service.changeLanguage({ "hornetI18n": i18nLocale }).then(function (retourApi) {
            logger.trace("Retour API PartenaireApi.rechercher :", retourApi.body);
            hornet_js_utils_1.Utils.setCls("hornet.internationalization", retourApi.body);
            window.location.reload();
        });
    };
    /**
     *
     * @param value valeur sélectionnée dans la liste des users mocké
     */
    HornetApp.prototype.changeUserTo = function (value) {
        var _this = this;
        hornet_js_utils_1.Utils.setCls("hornet.user", users[value]);
        this.navigateTo("accueil", {}, function () {
            _this.forceUpdate();
            _this.menu.forceUpdate();
            _this.menu.setState({ items: _this.menu.props.configMenu ? navigation_utils_1.NavigationUtils.getFilteredConfigNavigation(_.cloneDeep(_this.menu.props.configMenu), _this.user) : navigation_utils_1.NavigationUtils.getFilteredConfigNavigation(navigation_utils_1.NavigationUtils.getConfigMenu(), hornet_js_utils_1.Utils.getCls("hornet.user")) });
        });
    };
    HornetApp.defaultProps = {
        composantPage: null,
        workingZoneWidth: "1200px"
    };
    return HornetApp;
}(hornet_page_1.HornetPage));
exports.HornetApp = HornetApp;

//# sourceMappingURL=hornet-app.js.map
