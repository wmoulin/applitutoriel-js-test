"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hornet_js_utils_1 = require("hornet-js-utils");
var React = require("react");
var hornet_page_1 = require("hornet-js-react-components/src/widget/component/hornet-page");
var form_1 = require("hornet-js-react-components/src/widget/form/form");
var row_1 = require("hornet-js-react-components/src/widget/form/row");
var input_field_1 = require("hornet-js-react-components/src/widget/form/input-field");
var validationSchema = require("test/page/example-page-validation.json");
var logger = hornet_js_utils_1.Utils.getLogger("applitutoriel.test.page.example-page");
/**
 * Exemple simple de page utilisant un formulaire hornet.
 */
var ExamplePage = /** @class */ (function (_super) {
    tslib_1.__extends(ExamplePage, _super);
    function ExamplePage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /** @inheritDoc */
    ExamplePage.prototype.prepareClient = function () {
        /* Initialise les champs du formulaire */
        this.exampleForm.updateFields({
            nom: "Martin",
            prenom: "Henri"
        });
    };
    /**
     * Fonction déclenchée à la soumission du formulaire
     * @param formData données du formulaire
     */
    ExamplePage.prototype.onSubmit = function (formData) {
        logger.trace("Envoi du formulaire");
    };
    /**
     * @inheritDoc
     */
    ExamplePage.prototype.render = function () {
        var _this = this;
        logger.trace("render - form ");
        return (React.createElement("div", null,
            React.createElement("h2", null, "Exemple"),
            React.createElement(form_1.Form, { ref: function (form) { _this.exampleForm = form; }, onSubmit: this.onSubmit, schema: validationSchema },
                React.createElement(row_1.Row, null,
                    React.createElement(input_field_1.InputField, { name: "nom", label: "Nom", required: true }),
                    React.createElement(input_field_1.InputField, { name: "prenom", label: "Prénom", required: true })))));
    };
    return ExamplePage;
}(hornet_page_1.HornetPage));
exports.ExamplePage = ExamplePage;

//# sourceMappingURL=example-page.js.map
