"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hornet_js_utils_1 = require("hornet-js-utils");
var React = require("react");
var hornet_page_1 = require("hornet-js-react-components/src/widget/component/hornet-page");
var modal_1 = require("hornet-js-react-components/src/widget/dialog/modal");
var notification_1 = require("hornet-js-react-components/src/widget/notification/notification");
var notification_manager_1 = require("hornet-js-core/src/notification/notification-manager");
var form_1 = require("hornet-js-react-components/src/widget/form/form");
var row_1 = require("hornet-js-react-components/src/widget/form/row");
var input_field_1 = require("hornet-js-react-components/src/widget/form/input-field");
var button_1 = require("hornet-js-react-components/src/widget/button/button");
var table_1 = require("hornet-js-react-components/src/widget/table/table");
var column_1 = require("hornet-js-react-components/src/widget/table/column");
var columns_1 = require("hornet-js-react-components/src/widget/table/columns");
var date_column_1 = require("hornet-js-react-components/src/widget/table/column/date-column");
var menu_actions_1 = require("hornet-js-react-components/src/widget/table/menu-actions");
var action_button_1 = require("hornet-js-react-components/src/widget/table/action-button");
var header_1 = require("hornet-js-react-components/src/widget/table/header");
var content_1 = require("hornet-js-react-components/src/widget/table/content");
var picto_1 = require("hornet-js-react-components/src/img/picto");
var action_column_1 = require("hornet-js-react-components/src/widget/table/column/action-column");
var toggle_columns_button_1 = require("hornet-js-react-components/src/widget/table/toggle-columns-button");
var datasource_1 = require("hornet-js-core/src/component/datasource/datasource");
var buttons_area_1 = require("hornet-js-react-components/src/widget/form/buttons-area");
var datasource_option_1 = require("hornet-js-core/src/component/datasource/options/datasource-option");
var edition_action_column_1 = require("hornet-js-react-components/src/widget/table/column/edition-action-column");
var sort_data_1 = require("hornet-js-core/src/component/sort-data");
var sort_data_2 = require("hornet-js-core/src/component/sort-data");
var schema = require("applitutoriel-js-test/src/views/adm/adm-lst-page-validation.json");
var schemaEditionTable = require("applitutoriel-js-test/src/views/adm/adm-lst-table-validation.json");
var logger = hornet_js_utils_1.Utils.getLogger("applitutoriel.views.adm.adm-lst-page");
/**
 * Page d'administration des secteurs. L'ajout ou l'édition d'un secteur se fait dans une fenêtre modale.
 */
var SecteursPage = /** @class */ (function (_super) {
    tslib_1.__extends(SecteursPage, _super);
    function SecteursPage(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.refHeaderTable.bind(_this);
        var sort = new datasource_option_1.DefaultSort([new sort_data_1.SortData("dateCreat"), new sort_data_1.SortData("auteurCreat", sort_data_2.SortDirection.ASC)]);
        _this.dataSource = new datasource_1.DataSource([], {}, [sort]);
        return _this;
    }
    /**
     * Alimente le tableau de liste des secteurs.
     * @override
     */
    SecteursPage.prototype.prepareClient = function () {
        this.refreshSecteurs();
    };
    /**
     * Met à jour le tableau de liste des secteurs
     */
    SecteursPage.prototype.refreshSecteurs = function () {
        var _this = this;
        this.getService().lister().then(function (result) {
            _this.dataSource.deleteAll();
            _this.dataSource.add(false, result);
        });
    };
    SecteursPage.prototype.refHeaderTable = function (element) {
        this.headerTable = element;
    };
    /**
     * @inheritDoc
     */
    SecteursPage.prototype.render = function () {
        var _this = this;
        // test d'erreur dans les render react
        // var i;
        // i.toString();
        // throw "test error";
        logger.trace("VIEW SecteursPage render");
        var intlMessages = this.i18n("administration.secteurs");
        var formI18n = this.i18n("administration.secteurs.form");
        return (React.createElement("div", null,
            React.createElement("h2", null, this.i18n("administration.secteurs.titreSecteur")),
            React.createElement(notification_1.Notification, { id: "notif2" }),
            React.createElement(table_1.Table, { id: "liste-secteurs" },
                React.createElement(header_1.Header, { title: this.i18n("administration.secteurs").table.tableTitle, ref: this.refHeaderTable },
                    React.createElement(toggle_columns_button_1.ToggleColumnsButton, { hiddenColumns: { desc: true, nom: false }, onChange: this.onChangeToggleColumns, selectAllItem: false }),
                    React.createElement(menu_actions_1.MenuActions, null,
                        React.createElement(action_button_1.ActionButton, { title: this.i18n("administration.secteurs.table.addTitle"), srcImg: picto_1.Picto.white.add, action: this.ajouterSecteur, priority: true }),
                        React.createElement(action_button_1.ActionButton, { title: this.i18n("administration.secteurs.table.sortMultiTitle"), srcImg: picto_1.Picto.white.consulter, action: this.sortMulti, priority: true }))),
                React.createElement(content_1.Content, { dataSource: this.dataSource, onSubmit: this.submitLineForm, schema: schemaEditionTable, notifId: "notif2" },
                    React.createElement(columns_1.Columns, null,
                        React.createElement(column_1.Column, { keyColumn: "nom", title: intlMessages.nom, editable: true, sortable: true }),
                        React.createElement(column_1.Column, { keyColumn: "desc", title: intlMessages.description, sortable: false }),
                        React.createElement(date_column_1.DateColumn, { keyColumn: "dateCreat", title: intlMessages.dateCr, sortable: true }),
                        React.createElement(date_column_1.DateColumn, { keyColumn: "dateMajEnreg", title: intlMessages.dateMaj, sortable: false }),
                        React.createElement(column_1.Column, { keyColumn: "auteurCreat", title: intlMessages.auteur, sortable: true }),
                        React.createElement(action_column_1.ActionColumn, { keyColumn: "id", alt: intlMessages.modificationTitle, srcImg: picto_1.Picto.blue.editer, action: this.editItem.bind(this) }),
                        React.createElement(action_column_1.ActionColumn, { keyColumn: "id", alt: intlMessages.suppressionAlt, srcImg: picto_1.Picto.blue.supprimer, action: this.supprimer.bind(this), messageAlert: this.i18n("administration.secteurs.confirmationSuppression"), titleAlert: this.i18n("administration.secteurs.suppressionTitle") }),
                        React.createElement(edition_action_column_1.EditionActionColumn, { keyColumn: "id", titleEdit: intlMessages.quickUpdateTitle, titleSave: "Enregistrer", titleCancel: "Annuler", messageAlert: this.i18n("administration.secteurs.confirmationAnnulationAction"), titleAlert: this.i18n("administration.secteurs.annulationTitle") })))),
            React.createElement(modal_1.Modal, { ref: function (modal) {
                    _this.maModale = modal;
                }, withoutOverflow: true, underlayClickExits: false, focusDialog: false, onClickClose: this.closeModal },
                React.createElement("div", { className: "content-modal-body" },
                    React.createElement(form_1.Form, { ref: function (form) {
                            _this.monForm = form;
                            if (_this.monForm) {
                                _this.monForm.updateFields(_this.item);
                            }
                        }, schema: schema, formMessages: formI18n, onSubmit: this.onSubmitEdition },
                        React.createElement(input_field_1.InputField, { name: "id", type: "hidden" }),
                        React.createElement(row_1.Row, null,
                            React.createElement(input_field_1.InputField, { name: "nom", label: formI18n.fields.nom.label, required: true, size: 40, maxLength: 50 })),
                        React.createElement(row_1.Row, null,
                            React.createElement(input_field_1.InputField, { name: "desc", label: formI18n.fields.desc.label, required: true, size: 40, maxLength: 200 })),
                        React.createElement(buttons_area_1.ButtonsArea, null,
                            React.createElement(button_1.Button, { type: "submit", id: "enregistrer", name: "action:save", value: "Enregistrer", className: "hornet-button", label: this.i18n("form.valid"), title: this.i18n("administration.validTitle") }),
                            React.createElement(button_1.Button, { type: "button", id: "cancel", name: "action:cancel", value: "Annuler", className: "hornet-button", label: this.i18n("form.cancel"), title: this.i18n("administration.cancelTitle"), onClick: this.closeModal })))))));
    };
    /**
     * Méthode permettant de connaître les colonnes affichées/masquées
     * @param columns
     */
    SecteursPage.prototype.onChangeToggleColumns = function (columns) {
        logger.debug("MAJ toggle columns :", columns);
    };
    /**
     * Fonction de submit du formulaire
     * @param item: l'item du tableau qu a été edité
     */
    SecteursPage.prototype.submitLineForm = function (item) {
        var _this = this;
        this.getService().modifier(item.id, item).then(function () {
            notification_manager_1.NotificationManager.notify(null, null, notification_manager_1.Notifications.makeSingleNotification("", _this.i18n("info.message.IN-AD-LST-01")));
            _this.refreshSecteurs();
        });
    };
    /**
     * Déclenche la suppression du secteur ayant l'identifiant indiqué
     * @param item
     */
    SecteursPage.prototype.supprimer = function (item) {
        var _this = this;
        logger.trace("Utilisateur est OK pour supprimer l item id:", item.id);
        notification_manager_1.NotificationManager.cleanAll();
        this.getService().supprimer(item.id).then(function (result) {
            if (!result.errors) {
                notification_manager_1.NotificationManager.notify(null, null, notification_manager_1.Notifications.makeSingleNotification("SECTEUR_DELETED", "info.message.IN-AD-LST-02"));
                _this.refreshSecteurs();
            }
        });
    };
    /**
     * Ouvre la fenêtre modale d'édition de secteur
     * @param item élément du tableau de secteurs
     */
    SecteursPage.prototype.editItem = function (item) {
        this.maModale.setTitle(this.i18n("administration.modification"));
        this.maModale.setCloseLabel(this.i18n("administration.closeModification"));
        this.item = item;
        this.maModale.open();
    };
    /**
     * Ouvre la fenêtre modale de création de secteur
     */
    SecteursPage.prototype.ajouterSecteur = function () {
        this.maModale.setTitle(this.i18n("administration.ajout"))
            .setCloseLabel(this.i18n("administration.closeAjout"))
            .open();
    };
    /**
     * exemple de tri multicolonnes
     */
    SecteursPage.prototype.sortMulti = function () {
        this.dataSource.sort([new sort_data_1.SortData("dateCreat", sort_data_2.SortDirection.DESC), new sort_data_1.SortData("auteurCreat")]);
    };
    /**
     * Ferme la modale de création/édition de secteur sans appliquer les changements.
     */
    SecteursPage.prototype.closeModal = function () {
        this.maModale.close();
        this.item = null;
    };
    /**
     * Fonction déclenchée lors de l'envoi du formulaire d'édition de secteur
     * @param data données du formulaire
     */
    SecteursPage.prototype.onSubmitEdition = function (data) {
        var _this = this;
        notification_manager_1.NotificationManager.cleanAll();
        var secteur = data;
        if (!_.isEmpty(secteur.id)) {
            this.getService().modifier(secteur.id, secteur).then(function (result) {
                if (!result.errors) {
                    _this.closeModal();
                    notification_manager_1.NotificationManager.notify(null, null, notification_manager_1.Notifications.makeSingleNotification("", _this.i18n("info.message.IN-AD-LST-01")));
                    _this.refreshSecteurs();
                }
            });
        }
        else {
            /* On ajoute le nom de l'utilisateur connecté aux informations saisies dans le formulaire */
            if (this.user) {
                secteur.user = this.user.name;
            }
            this.getService().creer(secteur).then(function (result) {
                if (!result.errors) {
                    _this.closeModal();
                    notification_manager_1.NotificationManager.notify(null, null, notification_manager_1.Notifications.makeSingleNotification("", _this.i18n("info.message.IN-AD-LST-03")));
                    _this.refreshSecteurs();
                }
            });
        }
    };
    return SecteursPage;
}(hornet_page_1.HornetPage));
exports.SecteursPage = SecteursPage;

//# sourceMappingURL=adm-lst-page.js.map
