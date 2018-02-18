webpackJsonp([3],{

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var pro_actions_1 = __webpack_require__(65);
var abstract_routes_1 = __webpack_require__(129);
var roles_1 = __webpack_require__(347);
var pro_lst_page_1 = __webpack_require__(697);
var secteur_service_page_impl_1 = __webpack_require__(70);
var produit_service_impl_1 = __webpack_require__(65);
var PartenairesRoutes = /** @class */ (function (_super) {
    tslib_1.__extends(PartenairesRoutes, _super);
    function PartenairesRoutes() {
        var _this = _super.call(this) || this;
        /* Routes des pages */
        /* Nouvelle page de recherche avec critères par défaut */
        _this.addPageRoute("/", function () { return new abstract_routes_1.PageRouteInfos(pro_lst_page_1.ListeProduitsPage, null, secteur_service_page_impl_1.SecteurServiceImpl); }, roles_1.Roles.EVERYONE);
        /* Routes des pages */
        /* Nouvelle page de recherche avec critères par défaut */
        _this.addDataRoute("/", function () { return new abstract_routes_1.DataRouteInfos(pro_actions_1.ListerProduits, null, produit_service_impl_1.ProduitServiceImpl); }, abstract_routes_1.PUBLIC_ROUTE);
        return _this;
    }
    return PartenairesRoutes;
}(abstract_routes_1.AbstractRoutes));
exports.default = PartenairesRoutes;



/***/ }),

/***/ 311:
/***/ (function(module, exports, __webpack_require__) {

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
var tslib_1 = __webpack_require__(0);
/**
 * hornet-js-react-components - Ensemble des composants web React de base de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.0
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
var hornet_js_utils_1 = __webpack_require__(1);
var React = __webpack_require__(2);
var classNames = __webpack_require__(19);
var _ = __webpack_require__(6);
var dom_adapter_1 = __webpack_require__(327);
var field_error_1 = __webpack_require__(355);
var html_attributes_1 = __webpack_require__(356);
var tool_tip_1 = __webpack_require__(359);
var logger = hornet_js_utils_1.Utils.getLogger("hornet-js-react-components.widget.form.abstract-field");
var InlineStyle;
(function (InlineStyle) {
    InlineStyle[InlineStyle["NONE"] = 0] = "NONE";
    InlineStyle[InlineStyle["FIELD"] = 1] = "FIELD";
    InlineStyle[InlineStyle["ALL"] = 2] = "ALL";
})(InlineStyle = exports.InlineStyle || (exports.InlineStyle = {}));
/**
 * Représente un champ de formulaire.
 */
var AbstractField = /** @class */ (function (_super) {
    tslib_1.__extends(AbstractField, _super);
    function AbstractField(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.makeState(_this.state);
        return _this;
    }
    AbstractField.prototype.componentDidMount = function () {
        this.mounted = true;
        if (this.htmlElement) {
            this.htmlElement.addEventListener("focus", this.handleSimulateScroll);
        }
        else {
            if (this.multipleElement) {
                for (var element in this.multipleElement) {
                    this.multipleElement[element].addEventListener("focus", this.handleSimulateScroll);
                }
            }
        }
    };
    AbstractField.prototype.componentWillUnmount = function () {
        this.mounted = false;
        if (this.htmlElement) {
            this.htmlElement.removeEventListener("focus", this.handleSimulateScroll);
        }
        else {
            if (this.multipleElement) {
                for (var element in this.multipleElement) {
                    this.multipleElement[element].removeEventListener("focus", this.handleSimulateScroll);
                }
            }
        }
    };
    /**
     * Génère l'état interne du composant à partir des propriétés indiquées
     * @param props
     */
    AbstractField.prototype.makeState = function (state) {
        this.processHtmlProps(state);
    };
    // Setters
    AbstractField.prototype.setAbbr = function (abbr, callback) {
        this.setState({ abbr: abbr }, callback);
        return this;
    };
    AbstractField.prototype.setGroupClass = function (groupClass, callback) {
        this.setState({ groupClass: groupClass }, callback);
        return this;
    };
    AbstractField.prototype.setLabelClass = function (labelClass, callback) {
        this.setState({ labelClass: labelClass }, callback);
        return this;
    };
    AbstractField.prototype.setFieldClass = function (fieldClass, callback) {
        this.setState({ fieldClass: fieldClass }, callback);
        return this;
    };
    AbstractField.prototype.setToolTip = function (toolTip, callback) {
        this.setState({ toolTip: toolTip }, callback);
        return this;
    };
    AbstractField.prototype.setIcoToolTip = function (icoToolTip, callback) {
        this.setState({ icoToolTip: icoToolTip }, callback);
        return this;
    };
    AbstractField.prototype.setPrefix = function (prefix, callback) {
        this.setState({ prefix: prefix }, callback);
        return this;
    };
    AbstractField.prototype.setSuffix = function (suffix, callback) {
        this.setState({ suffix: suffix }, callback);
        return this;
    };
    AbstractField.prototype.setMarkRequired = function (markRequired, callback) {
        this.setState({ markRequired: markRequired }, callback);
        return this;
    };
    AbstractField.prototype.setrequiredLabel = function (requiredLabel, callback) {
        this.setState({ requiredLabel: requiredLabel }, callback);
        return this;
    };
    AbstractField.prototype.setImgFilePath = function (imgFilePath, callback) {
        this.setState({ imgFilePath: imgFilePath }, callback);
        return this;
    };
    AbstractField.prototype.setErrorComponent = function (errorComponent, callback) {
        this.setState({ errorComponent: errorComponent }, callback);
        return this;
    };
    AbstractField.prototype.setErrors = function (errors, callback) {
        this.setState({ errors: errors }, callback);
        return this;
    };
    /**
     * @override
     */
    AbstractField.prototype.setAttribute = function (name, value) {
        _super.prototype.setAttribute.call(this, name, value);
        /* L'adaptateur DOM met à jour l'élément dans le DOM : on met ici à jour l'état interne du composant */
        var newState = {};
        newState[name] = value;
        this.setState(newState);
        return this;
    };
    /**
     * @override
     */
    AbstractField.prototype.setCurrentChecked = function (value) {
        _super.prototype.setCurrentChecked.call(this, value);
        /* L'adaptateur DOM met à jour l'élément dans le DOM : on met ici à jour l'état interne du composant */
        this.setState({ currentChecked: value });
        return this;
    };
    /**
     * @override
     */
    AbstractField.prototype.setCurrentValue = function (value) {
        _super.prototype.setCurrentValue.call(this, value);
        /* L'adaptateur DOM met à jour l'élément dans le DOM : on met ici à jour l'état interne du composant */
        this.setState({ currentValue: value });
        return this;
    };
    /**
     * @override
     */
    AbstractField.prototype.setReadOnly = function (value) {
        this.setState({ readOnly: value });
        return this;
    };
    /**
     * @override
     */
    AbstractField.prototype.setDisabled = function (value) {
        this.setState({ disabled: value });
        return this;
    };
    AbstractField.prototype.hasErrors = function () {
        var fieldErrors = null;
        if (this.state.errors) {
            fieldErrors = this.state.errors.filter(function (error) {
                return (error.field == this.state.name || error.additionalInfos.linkedFieldsName == this.state.name);
            }, this);
        }
        if (fieldErrors && (fieldErrors.length > 0)) {
            return true;
        }
        return false;
    };
    /**
     * @inheritDoc
     */
    AbstractField.prototype.render = function () {
        var type = this.state.type;
        if (type) {
            type = type.toLowerCase();
        }
        var cx = classNames(this.state.groupClass, "abstractfield-container", {
            "inline": this.state.inline == InlineStyle.ALL,
            "readonly": this.state.readOnly
        });
        /* On ne génère pas le rendu du label et des div conteneurs lorsque le champ est caché */
        return ((type == "hidden") ? this.renderWidget() :
            React.createElement("div", { className: cx },
                this.state.label ? this.renderLabel(this.state.id, this.state.name, this.state.label, this.state.required) : null,
                this.renderField()));
    };
    /**
     * Met à jour l'état interne avec les nouvelles propriétés.
     * Surcharge la méthode parente : les attributs HTML standards sont initialisés via la fonction générique setAttribute.
     * @param nextProps nouvelles propriétés
     * @param nextContext nouveau contexte
     * @override
     */
    AbstractField.prototype.componentWillReceiveProps = function (nextProps, nextContext) {
        for (var key in nextProps) {
            /* On doit s'assurer que chaque propriété a effectivement changé, car componentWillReceiveProps peut aussi
             * être appelée alors qu'aucune propriété n'a changé (cf.http://facebook.github.io/react/blog/2016/01/08/A-implies-B-does-not-imply-B-implies-A.html)
             * Dans ce cas cela poserait problème, car l'état pourrait avaoir été modifié
             * via un setter alors que la propriété utilisée initialement pour le constructeur n'a pas changé.*/
            if (this.props[key] != nextProps[key]) {
                if (key in html_attributes_1.HTML_ATTRIBUTES) {
                    /* Propriété HTML standard */
                    this.setAttribute(key, nextProps[key]);
                }
                else {
                    /* Propriété spécifique hornet : un 'setter' est certainement présent */
                    var setterName = _.camelCase("set " + (key));
                    if (this[setterName]) {
                        this[setterName](nextProps[key]);
                    }
                    else {
                        var state = void 0;
                        state[key] = nextProps[key];
                        this.setState(state);
                    }
                }
            }
        }
    };
    /**
     * Génère le rendu des erreurs de validation éventuelles
     */
    AbstractField.prototype.renderErrors = function () {
        var fieldErrorProps = {
            errors: this.state.errors,
            fieldName: this.state.name,
            hideError: this.state.hideError
        };
        // get the field error component by state ?
        var Error = this.state.errorComponent;
        return React.createElement(Error, tslib_1.__assign({}, fieldErrorProps));
    };
    /**
     * Génère le rendu du libellé pour le champ
     * @param fieldId identifiant du champ
     * @param fieldName nom du champ
     * @param label libellé à afficher
     * @param required indique si le champ est obligatoire
     * @returns {any}
     */
    AbstractField.prototype.renderLabel = function (fieldId, fieldName, label, required) {
        var urlTheme = this.state.imgFilePath || AbstractField.genUrlTheme(), urlIcoTooltip = urlTheme + this.state.icoToolTip;
        if (this.state.abbr && !this.state.lang) {
            logger.warn("Field ", fieldName, " Must have lang with abbr configuration");
        }
        var ariaDescribedby = { "aria-describedby": fieldName + "Tooltip" };
        return (React.createElement("div", { className: this.state.labelClass + " label-container" },
            React.createElement("label", tslib_1.__assign({ htmlFor: fieldId, id: fieldName + "Label", className: "label-content" }, this.state.toolTip ? ariaDescribedby : null),
                (this.state.abbr) ?
                    React.createElement("abbr", { lang: this.state.lang, title: this.state.abbr },
                        React.createElement("span", { className: "label-abbr" }, label)) : React.createElement("span", { className: "label" }, label),
                required && this.state.markRequired ?
                    React.createElement("span", { className: "label-required" },
                        React.createElement("abbr", { title: this.getRequiredLabel() }, "*")) : null,
                this.state.toolTip ?
                    React.createElement(tool_tip_1.ToolTip, { alt: this.state.toolTip, src: urlIcoTooltip, idSpan: fieldName + "Tooltip" }) : null)));
    };
    AbstractField.prototype.getRequiredLabel = function () {
        var requiredLabel = this.state.requiredLabel;
        if (!requiredLabel) {
            var i18nRequiredLabel = this.i18n("form.requiredLabel");
            if (i18nRequiredLabel) {
                requiredLabel = i18nRequiredLabel;
            }
            else {
                requiredLabel = "Obligatoire";
            }
        }
        return requiredLabel;
    };
    /**
     * Applique certaines règles par défaut sur les propriétés HTML standards
     * @param propriétés à traiter. Cet objet est éventuellement modifié.
     */
    AbstractField.prototype.processHtmlProps = function (state) {
        if (state) {
            /* Si l'id n'est pas explicitement spécifié, on lui affecte la même valeur que le nom, car il sera utilisé
             * comme ancre pour les messages d'erreur de validation */
            if (state.name && !state.id) {
                state.id = state.name;
            }
            /* Lorsque le champ est requis, ajoute automatiquement la propriété "aria-required" pour assurer le maximum
             de compatibilité avec les outils d'accessibilité */
            if (state.required === true) {
                state["aria-required"] = true;
            }
        }
    };
    /**
     * @returns {TResult} les propriétés html standard de ce champ
     */
    AbstractField.prototype.getHtmlProps = function () {
        /* On n'inclut pas les propriétés spécifiques qui ne concernent pas un champ HTML standard */
        var htmlProps = { name: "" };
        for (var key in this.state) {
            if (key in html_attributes_1.HTML_ATTRIBUTES) {
                htmlProps[key] = this.state[key];
            }
        }
        if (this.hasErrors()) {
            htmlProps["aria-describedby"] = this.state.name + "-error";
        }
        this.processHtmlProps(htmlProps);
        delete htmlProps["label"];
        return htmlProps;
    };
    /**
     * Génère le rendu des élements assurant la saisie des valeurs
     * @returns {any}
     */
    AbstractField.prototype.renderField = function () {
        return (React.createElement("div", { className: this.state.fieldClass + " abstractfield-field-content" },
            this.state.prefix ? React.createElement("span", { className: "abstractfield-field-prefix" }, this.state.prefix) : null,
            this.renderWidget(),
            this.state.suffix ? React.createElement("span", { className: "abstractfield-field-suffix" }, this.state.suffix) : null,
            this.renderErrors()));
    };
    /**
     *  Lorsque le champ prends le focus on verifie qu'il n'est pas caché par le bandeau
     *  si c'est le cas on effecteur un scroll du double de la hauteur du bandeau
     */
    AbstractField.prototype.handleSimulateScroll = function () {
        var elementWithFocusPosTop = this.htmlElement ? this.htmlElement.getBoundingClientRect().top : this.multipleElement[0].getBoundingClientRect().top;
        var stickyElmtPos = (document.getElementById("banner")) ? document.getElementById("banner").offsetHeight : null;
        if (elementWithFocusPosTop <= stickyElmtPos) {
            window.scrollBy(0, -(window.innerHeight / 2));
        }
    };
    /** Valeurs par défaut des propriétés */
    AbstractField.defaultProps = {
        /* Le libellé occupe la moitié du neoud parent */
        labelClass: "",
        /* Le champ occupe la moitié du neoud parent */
        fieldClass: "",
        icoToolTip: "/img/tooltip/tooltip.svg",
        markRequired: true,
        errorComponent: field_error_1.FieldError,
        lang: (hornet_js_utils_1.Utils.getCls("hornet.internationalization") && hornet_js_utils_1.Utils.getCls("hornet.internationalization").lang) ? hornet_js_utils_1.Utils.getCls("hornet.internationalization").lang : "fr",
        inline: InlineStyle
    };
    AbstractField.Inline = InlineStyle;
    return AbstractField;
}(dom_adapter_1.DomAdapter));
exports.AbstractField = AbstractField;



/***/ }),

/***/ 312:
/***/ (function(module, exports, __webpack_require__) {

"use strict";



module.exports = {
  copy: copy,
  checkDataType: checkDataType,
  checkDataTypes: checkDataTypes,
  coerceToTypes: coerceToTypes,
  toHash: toHash,
  getProperty: getProperty,
  escapeQuotes: escapeQuotes,
  equal: __webpack_require__(324),
  ucs2length: __webpack_require__(404),
  varOccurences: varOccurences,
  varReplace: varReplace,
  cleanUpCode: cleanUpCode,
  finalCleanUpCode: finalCleanUpCode,
  schemaHasRules: schemaHasRules,
  schemaHasRulesExcept: schemaHasRulesExcept,
  toQuotedString: toQuotedString,
  getPathExpr: getPathExpr,
  getPath: getPath,
  getData: getData,
  unescapeFragment: unescapeFragment,
  unescapeJsonPointer: unescapeJsonPointer,
  escapeFragment: escapeFragment,
  escapeJsonPointer: escapeJsonPointer
};


function copy(o, to) {
  to = to || {};
  for (var key in o) to[key] = o[key];
  return to;
}


function checkDataType(dataType, data, negate) {
  var EQUAL = negate ? ' !== ' : ' === '
    , AND = negate ? ' || ' : ' && '
    , OK = negate ? '!' : ''
    , NOT = negate ? '' : '!';
  switch (dataType) {
    case 'null': return data + EQUAL + 'null';
    case 'array': return OK + 'Array.isArray(' + data + ')';
    case 'object': return '(' + OK + data + AND +
                          'typeof ' + data + EQUAL + '"object"' + AND +
                          NOT + 'Array.isArray(' + data + '))';
    case 'integer': return '(typeof ' + data + EQUAL + '"number"' + AND +
                           NOT + '(' + data + ' % 1)' +
                           AND + data + EQUAL + data + ')';
    default: return 'typeof ' + data + EQUAL + '"' + dataType + '"';
  }
}


function checkDataTypes(dataTypes, data) {
  switch (dataTypes.length) {
    case 1: return checkDataType(dataTypes[0], data, true);
    default:
      var code = '';
      var types = toHash(dataTypes);
      if (types.array && types.object) {
        code = types.null ? '(': '(!' + data + ' || ';
        code += 'typeof ' + data + ' !== "object")';
        delete types.null;
        delete types.array;
        delete types.object;
      }
      if (types.number) delete types.integer;
      for (var t in types)
        code += (code ? ' && ' : '' ) + checkDataType(t, data, true);

      return code;
  }
}


var COERCE_TO_TYPES = toHash([ 'string', 'number', 'integer', 'boolean', 'null' ]);
function coerceToTypes(optionCoerceTypes, dataTypes) {
  if (Array.isArray(dataTypes)) {
    var types = [];
    for (var i=0; i<dataTypes.length; i++) {
      var t = dataTypes[i];
      if (COERCE_TO_TYPES[t]) types[types.length] = t;
      else if (optionCoerceTypes === 'array' && t === 'array') types[types.length] = t;
    }
    if (types.length) return types;
  } else if (COERCE_TO_TYPES[dataTypes]) {
    return [dataTypes];
  } else if (optionCoerceTypes === 'array' && dataTypes === 'array') {
    return ['array'];
  }
}


function toHash(arr) {
  var hash = {};
  for (var i=0; i<arr.length; i++) hash[arr[i]] = true;
  return hash;
}


var IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
var SINGLE_QUOTE = /'|\\/g;
function getProperty(key) {
  return typeof key == 'number'
          ? '[' + key + ']'
          : IDENTIFIER.test(key)
            ? '.' + key
            : "['" + escapeQuotes(key) + "']";
}


function escapeQuotes(str) {
  return str.replace(SINGLE_QUOTE, '\\$&')
            .replace(/\n/g, '\\n')
            .replace(/\r/g, '\\r')
            .replace(/\f/g, '\\f')
            .replace(/\t/g, '\\t');
}


function varOccurences(str, dataVar) {
  dataVar += '[^0-9]';
  var matches = str.match(new RegExp(dataVar, 'g'));
  return matches ? matches.length : 0;
}


function varReplace(str, dataVar, expr) {
  dataVar += '([^0-9])';
  expr = expr.replace(/\$/g, '$$$$');
  return str.replace(new RegExp(dataVar, 'g'), expr + '$1');
}


var EMPTY_ELSE = /else\s*{\s*}/g
  , EMPTY_IF_NO_ELSE = /if\s*\([^)]+\)\s*\{\s*\}(?!\s*else)/g
  , EMPTY_IF_WITH_ELSE = /if\s*\(([^)]+)\)\s*\{\s*\}\s*else(?!\s*if)/g;
function cleanUpCode(out) {
  return out.replace(EMPTY_ELSE, '')
            .replace(EMPTY_IF_NO_ELSE, '')
            .replace(EMPTY_IF_WITH_ELSE, 'if (!($1))');
}


var ERRORS_REGEXP = /[^v.]errors/g
  , REMOVE_ERRORS = /var errors = 0;|var vErrors = null;|validate.errors = vErrors;/g
  , REMOVE_ERRORS_ASYNC = /var errors = 0;|var vErrors = null;/g
  , RETURN_VALID = 'return errors === 0;'
  , RETURN_TRUE = 'validate.errors = null; return true;'
  , RETURN_ASYNC = /if \(errors === 0\) return data;\s*else throw new ValidationError\(vErrors\);/
  , RETURN_DATA_ASYNC = 'return data;'
  , ROOTDATA_REGEXP = /[^A-Za-z_$]rootData[^A-Za-z0-9_$]/g
  , REMOVE_ROOTDATA = /if \(rootData === undefined\) rootData = data;/;

function finalCleanUpCode(out, async) {
  var matches = out.match(ERRORS_REGEXP);
  if (matches && matches.length == 2) {
    out = async
          ? out.replace(REMOVE_ERRORS_ASYNC, '')
               .replace(RETURN_ASYNC, RETURN_DATA_ASYNC)
          : out.replace(REMOVE_ERRORS, '')
               .replace(RETURN_VALID, RETURN_TRUE);
  }

  matches = out.match(ROOTDATA_REGEXP);
  if (!matches || matches.length !== 3) return out;
  return out.replace(REMOVE_ROOTDATA, '');
}


function schemaHasRules(schema, rules) {
  if (typeof schema == 'boolean') return !schema;
  for (var key in schema) if (rules[key]) return true;
}


function schemaHasRulesExcept(schema, rules, exceptKeyword) {
  if (typeof schema == 'boolean') return !schema && exceptKeyword != 'not';
  for (var key in schema) if (key != exceptKeyword && rules[key]) return true;
}


function toQuotedString(str) {
  return '\'' + escapeQuotes(str) + '\'';
}


function getPathExpr(currentPath, expr, jsonPointers, isNumber) {
  var path = jsonPointers // false by default
              ? '\'/\' + ' + expr + (isNumber ? '' : '.replace(/~/g, \'~0\').replace(/\\//g, \'~1\')')
              : (isNumber ? '\'[\' + ' + expr + ' + \']\'' : '\'[\\\'\' + ' + expr + ' + \'\\\']\'');
  return joinPaths(currentPath, path);
}


function getPath(currentPath, prop, jsonPointers) {
  var path = jsonPointers // false by default
              ? toQuotedString('/' + escapeJsonPointer(prop))
              : toQuotedString(getProperty(prop));
  return joinPaths(currentPath, path);
}


var JSON_POINTER = /^\/(?:[^~]|~0|~1)*$/;
var RELATIVE_JSON_POINTER = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
function getData($data, lvl, paths) {
  var up, jsonPointer, data, matches;
  if ($data === '') return 'rootData';
  if ($data[0] == '/') {
    if (!JSON_POINTER.test($data)) throw new Error('Invalid JSON-pointer: ' + $data);
    jsonPointer = $data;
    data = 'rootData';
  } else {
    matches = $data.match(RELATIVE_JSON_POINTER);
    if (!matches) throw new Error('Invalid JSON-pointer: ' + $data);
    up = +matches[1];
    jsonPointer = matches[2];
    if (jsonPointer == '#') {
      if (up >= lvl) throw new Error('Cannot access property/index ' + up + ' levels up, current level is ' + lvl);
      return paths[lvl - up];
    }

    if (up > lvl) throw new Error('Cannot access data ' + up + ' levels up, current level is ' + lvl);
    data = 'data' + ((lvl - up) || '');
    if (!jsonPointer) return data;
  }

  var expr = data;
  var segments = jsonPointer.split('/');
  for (var i=0; i<segments.length; i++) {
    var segment = segments[i];
    if (segment) {
      data += getProperty(unescapeJsonPointer(segment));
      expr += ' && ' + data;
    }
  }
  return expr;
}


function joinPaths (a, b) {
  if (a == '""') return b;
  return (a + ' + ' + b).replace(/' \+ '/g, '');
}


function unescapeFragment(str) {
  return unescapeJsonPointer(decodeURIComponent(str));
}


function escapeFragment(str) {
  return encodeURIComponent(escapeJsonPointer(str));
}


function escapeJsonPointer(str) {
  return str.replace(/~/g, '~0').replace(/\//g, '~1');
}


function unescapeJsonPointer(str) {
  return str.replace(/~1/g, '/').replace(/~0/g, '~');
}


/***/ }),

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

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
var tslib_1 = __webpack_require__(0);
/**
 * hornet-js-react-components - Ensemble des composants web React de base de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.0
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
var hornet_js_utils_1 = __webpack_require__(1);
var React = __webpack_require__(2);
var abstract_cell_1 = __webpack_require__(369);
var template_1 = __webpack_require__(346);
var classNames = __webpack_require__(19);
var logger = hornet_js_utils_1.Utils.getLogger("hornet-js-react-components.widget.table.column.cell.abstract-body-cell");
/**
 * Classe permettant de générer le rendu html d'un cellule du corps d'un tableau
 */
var AbstractBodyCell = /** @class */ (function (_super) {
    tslib_1.__extends(AbstractBodyCell, _super);
    function AbstractBodyCell(props, context) {
        var _this = _super.call(this, props, context) || this;
        var altValue = (typeof props.value[props.keyColumn] == "number") ? "0" : "";
        _this.state.value = new template_1.Template("${" + props.keyColumn + "}").process(props.value, _this.props.replaceUndef || altValue);
        _this.defaultClassName = "default-body-cell";
        if (_this.state.titleCell) {
            _this.state.titleCell = new template_1.Template(_this.state.titleCell).process(_this.props.value, _this.props.replaceUndef || "?");
        }
        return _this;
    }
    /**
     * @inheritDoc
     */
    AbstractBodyCell.prototype.render = function () {
        logger.trace("render BodyCell -> column:", this.props.coordinates.column, " - line:", this.props.coordinates.row, "- isFocused:", this.state.isFocused, "- tabIndex:", this.state.tabIndex);
        return (React.createElement("td", tslib_1.__assign({}, this.getDefaultTdProps()), this.renderCell()));
    };
    AbstractBodyCell.prototype.renderCell = function () {
        return (this.state.value);
    };
    /**
     * gestion de l'event on hover
     */
    AbstractBodyCell.prototype.getCellTitle = function () {
        return "";
    };
    /**
     * Return l'indicateur Disabled
     * @returns {boolean}
     */
    AbstractBodyCell.prototype.setDisabled = function () {
        return this.props.contentState.itemInEdition !== undefined
            && this.props.contentState.itemInEdition !== null
            && this.state.isEditing === false;
    };
    /***
     * Retourne les propriétés par défaut d'un élément de type Td
     * @returns {{ref: ((instance:HTMLTableCellElement)=>undefined), className: string, onKeyDown: any, tabIndex: number, aria-selected: (((props:any)=>boolean)|any), onFocus: any, style: any}}
     */
    AbstractBodyCell.prototype.getDefaultTdProps = function () {
        var _this = this;
        var classes = { "datatable-cell": true };
        classes["datatable-cell-custom-" + this.props.keyColumn] = true;
        classes["datatable-cell-in-edition"] = this.props.contentState.itemInEdition && this.state.abstractisEditing;
        var key = this.props.id + "-colBody-" + this.props.cellCoordinate.row + "-" + this.props.coordinates.column;
        classes[this.props.id + "-" + this.props.keyColumn] = true;
        classes[this.defaultClassName] = true;
        return ({
            ref: function (instance) {
                _this.tableCellRef = instance;
            },
            className: classNames(classes),
            onKeyDown: this.props.handleKeyDown || this.handleKeyDown.bind(this),
            tabIndex: this.getTabIndex(),
            "aria-selected": this.state.isFocused,
            onFocus: function (e) {
                _this.props.contentState.setFocusOn(_this.props.cellCoordinate);
            },
            // disabled s'il existe un item en cours d'edition et l'indicateur isEditing  est a false pour cette cellule
            disabled: this.setDisabled(),
            style: this.props.style,
            key: key,
            id: key,
            role: "gridcell",
            title: this.state.titleCell instanceof Function ? this.state.titleCell(this.state.value) :
                this.state.titleCell ? this.state.titleCell : this.getCellTitle()
        });
    };
    return AbstractBodyCell;
}(abstract_cell_1.AbstractCell));
exports.AbstractBodyCell = AbstractBodyCell;



/***/ }),

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {

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
 * hornet-js-utils - Partie commune et utilitaire à tous les composants hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.0
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
var _ = __webpack_require__(6);
/**
 * Classe utilitaire sur les arrays.
 */
var ArrayUtils = /** @class */ (function () {
    function ArrayUtils() {
    }
    /**
     * retoure l'index de l'objet dans une liste via son ID
     * @param objectList
     * @param object
     * @returns {number}
     */
    ArrayUtils.getIndexById = function (objectList, object) {
        var result = -1;
        result = object && objectList ? _.findIndex(objectList, function (item) {
            return item.id === object.id;
        }) : result;
        return result;
    };
    /**
     * fonction qui test si une liste d'objet est incluse dans une autre
     * @param objectList1
     * @param objectList2
     * @returns {boolean}
     */
    ArrayUtils.isInclude = function (objectList1, objectList2) {
        var _this = this;
        if (objectList1 && objectList1.length === 0 && objectList2 && objectList2.length === 0) {
            return false;
        }
        var result = _.filter(objectList1, function (item) {
            var index = _this.getIndexById(objectList2, item);
            return (index === -1);
        });
        return result.length === 0;
    };
    /**
     * fonction qui fait l'union de deux liste avec le predicat id different
     * @param object
     * @param other
     *  @returns {any[]}
     */
    ArrayUtils.unionWith = function (object, other) {
        var listResult = _.unionWith(object, other, function (item1, item2) {
            return item1.id === item2.id;
        });
        return listResult;
    };
    /**
     * retourne l'intersection de deux liste
     * @param object
     * @param other
     * @returns {any[]}
     */
    ArrayUtils.intersectionWith = function (object, other) {
        var listResult = _.intersectionWith(object, other, function (item1, item2) {
            return item1.id === item2.id;
        });
        return listResult;
    };
    return ArrayUtils;
}());
exports.ArrayUtils = ArrayUtils;



/***/ }),

/***/ 315:
/***/ (function(module, exports, __webpack_require__) {

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
var tslib_1 = __webpack_require__(0);
/**
 * hornet-js-react-components - Ensemble des composants web React de base de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.0
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
var hornet_js_utils_1 = __webpack_require__(1);
var hornet_component_1 = __webpack_require__(4);
var header_cell_1 = __webpack_require__(463);
var body_cell_1 = __webpack_require__(458);
var input_text_in_line_body_cell_1 = __webpack_require__(464);
var logger = hornet_js_utils_1.Utils.getLogger("hornet-js-react-components.widget.table.column");
/**
 * Classe abstraite d'une colonne de tableau
 */
var Column = /** @class */ (function (_super) {
    tslib_1.__extends(Column, _super);
    function Column(props, context) {
        return _super.call(this, props, context) || this;
    }
    /**
     * @inheritDoc
     */
    Column.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        return false;
    };
    /**
     * @inheritDoc
     */
    Column.prototype.render = function () {
        logger.trace("render Column");
        var cellProps = this.getCellProps();
        cellProps.key = "wc-" + cellProps.key;
        if (this.props.isHeader) {
            return this.wrap(this.getHeaderCell(), cellProps);
        }
        return this.wrap(this.getBodyCell(), cellProps);
    };
    /**
     * Getter pour le composant générant le entête de colonne
     * @return Class<HeaderCell<HeaderCellProps, any>>
     */
    Column.prototype.getHeaderCell = function () {
        return header_cell_1.HeaderCell;
    };
    /**
     * Getter pour le composant générant le contenu de colonne
     * @return Class<BodyCell<BodyCellProps, any>>
     */
    Column.prototype.getBodyCell = function () {
        return (this.props.editable) ? Column.getEditableCell() : body_cell_1.BodyCell;
    };
    /**
     * @inheritDoc
     */
    Column.getEditableCell = function () {
        return input_text_in_line_body_cell_1.InputTextInLineBodyCell;
    };
    /***
     * Méthode permettant de récupérer les propriétés d'une cellule
     * @returns {any} Propriétés d'une cellule
     */
    Column.prototype.getCellProps = function () {
        var props = {
            coordinates: this.props.cellCoordinate,
            isSelected: this.props.isSelected,
            id: this.props.id
        };
        if (this.props.style) {
            props.style = this.props.style;
        }
        //
        // if (this.props.headerFixed || this.props.defaultStyle) {
        //     props.style = _.merge(props.style, this.props.defaultStyle);
        // }
        props.isEditing = this.state.isEditing;
        props.nbColumns = this.props.nbColumns;
        props.key = Column.getCellKey(props);
        return props;
    };
    Column.getCellKey = function (cellProps) {
        return "cell-" + cellProps.id + "-" + cellProps.coordinates.row + "-" + cellProps.coordinates.column + "-wrapped";
    };
    Column.defaultProps = {
        sortable: false,
        defaultStyle: { "width": "10em" },
        hiddenable: true
    };
    return Column;
}(hornet_component_1.HornetComponent));
exports.Column = Column;



/***/ }),

/***/ 316:
/***/ (function(module, exports, __webpack_require__) {

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
/**
 * Enumération des sens de tri de tableau
 * @enum
 */
var SortDirection;
(function (SortDirection) {
    SortDirection[SortDirection["ASC"] = 0] = "ASC";
    SortDirection[SortDirection["DESC"] = 1] = "DESC";
})(SortDirection = exports.SortDirection || (exports.SortDirection = {}));
/***
 * @description Classe de configuration pour le lancement d'un tri
 * @interface
  */
var SortData = /** @class */ (function () {
    /***
     * @param {string} key Clé de la colonnne sur laquelle le tri est effectué
     * @param {SortDirection} dir Sens du tri
     */
    function SortData(key, dir) {
        if (dir === void 0) { dir = SortDirection.ASC; }
        this.key = key;
        this.dir = dir;
    }
    return SortData;
}());
exports.SortData = SortData;



/***/ }),

/***/ 317:
/***/ (function(module, exports, __webpack_require__) {

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
var tslib_1 = __webpack_require__(0);
/**
 * hornet-js-react-components - Ensemble des composants web React de base de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.0
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
var events = __webpack_require__(35);
var _ = __webpack_require__(6);
var TableState = /** @class */ (function (_super) {
    tslib_1.__extends(TableState, _super);
    function TableState() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.contentsState = [];
        return _this;
    }
    TableState.prototype.addContent = function (contentState) {
        contentState.on(ContentState.ITEMS_CHANGE_EVENT, this.setIndexAfterItemsChangeEvent.bind(this));
        this.contentsState.push(contentState);
    };
    TableState.prototype.removeContent = function (contentState) {
        contentState.removeListener(ContentState.ITEMS_CHANGE_EVENT, this.setIndexAfterItemsChangeEvent.bind(this));
        _.remove(this.contentsState, contentState);
    };
    TableState.prototype.removeContents = function () {
        var _this = this;
        this.contentsState.map(function (contentState) { return _this.removeContent(contentState); });
    };
    TableState.prototype.setIndexAfterItemsChangeEvent = function (items) {
        var _this = this;
        this.contentsState.map(function (contentState, index) {
            if (items === contentState.items) {
                _this.index = index;
                _this.emit(TableState.INDEX_CHANGE_EVENT, null, _this.contentsState[index].items);
            }
        });
    };
    TableState.prototype.getIndex = function () {
        return this.index;
    };
    TableState.INDEX_CHANGE_EVENT = "onIndexChange";
    TableState.RESIZE_EVENT = "onResizeChange";
    return TableState;
}(events.EventEmitter));
exports.TableState = TableState;
var ContentState = /** @class */ (function (_super) {
    tslib_1.__extends(ContentState, _super);
    function ContentState() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.items = [];
        _this.hiddenColumns = {};
        return _this;
    }
    ContentState.prototype.setFocusOn = function (focusedCell) {
        this.emit(ContentState.BLUR_EVENT, this.focusedCell);
        this.emit(ContentState.FOCUS_CHANGE_EVENT, this.focusedCell, focusedCell);
        this.focusedCell = focusedCell;
    };
    ContentState.prototype.setItemInEdition = function (itemInEditionValue, lineIndex) {
        this.itemInEdition = itemInEditionValue;
        if (this.itemInEdition) {
            this.itemInEdition["row"] = lineIndex;
        }
        this.emit(ContentState.EDITION_CLIC_EVENT, lineIndex);
    };
    ContentState.prototype.setItems = function (items) {
        this.items = items;
        this.emit(ContentState.ITEMS_CHANGE_EVENT, this.items);
    };
    ContentState.prototype.setHiddenColumns = function (hiddenColumns) {
        this.hiddenColumns = hiddenColumns;
        this.emit(ContentState.TOGGLE_COLUMNS_EVENT, this.hiddenColumns, this.firstVisibleColumnState, this.oldFirstVisibleColumnState);
    };
    ContentState.prototype.setFirstVisibleColumnState = function (columnState) {
        if (columnState != this.firstVisibleColumnState) {
            this.oldFirstVisibleColumnState = this.firstVisibleColumnState;
            this.firstVisibleColumnState = columnState;
        }
    };
    ContentState.FOCUS_CHANGE_EVENT = "onFocusChange";
    ContentState.ITEMS_CHANGE_EVENT = "onItemsChange";
    ContentState.RESIZE_EVENT = "onResizeChange";
    ContentState.EDITION_CLIC_EVENT = "onEditionClic";
    ContentState.BLUR_EVENT = "onBlur";
    ContentState.TOGGLE_COLUMNS_EVENT = "toggleColumns";
    return ContentState;
}(events.EventEmitter));
exports.ContentState = ContentState;



/***/ }),

/***/ 318:
/***/ (function(module, exports, __webpack_require__) {

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
var tslib_1 = __webpack_require__(0);
/**
 * hornet-js-react-components - Ensemble des composants web React de base de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.0
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
var hornet_component_1 = __webpack_require__(4);
var React = __webpack_require__(2);
var classNames = __webpack_require__(19);
/**
 * Class permettant la gestion des images en SVG
 */
var Picto = /** @class */ (function (_super) {
    tslib_1.__extends(Picto, _super);
    function Picto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Picto.prototype.render = function () {
        return (React.createElement("div", { className: "svg-container", style: { "width": "32px", "height": "35px" } },
            React.createElement("div", { className: "svg-content", style: { "width": this.props.width, "height": this.props.height } }, this.renderSvg())));
    };
    /**
     * Rendu graphique de svg
     * @returns {any}
     */
    Picto.prototype.renderSvg = function () {
        var svgClass = {
            "picto-svg": true
        };
        if (this.props.className) {
            svgClass[this.props.className] = true;
        }
        var svgProps = {
            viewBox: "0 0 24 24",
            fill: this.props.color,
            xmlns: "http://www.w3.org/2000/svg",
            height: "24",
            width: "24",
            className: classNames(svgClass)
        };
        var svg = null;
        switch (this.props.picto) {
            case "editer":
                svg =
                    React.createElement("g", null,
                        React.createElement("path", { d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" }),
                        React.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }));
                break;
            case "consulter":
                svg =
                    React.createElement("g", null,
                        React.createElement("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" }),
                        React.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }));
                break;
            case "supprimer":
                svg =
                    React.createElement("g", null,
                        React.createElement("path", { d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" }),
                        React.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }));
                break;
            case "addCircle":
                // xml = '';
                break;
            case "settings":
                // xml = '';
                break;
            case "close":
                // xml = '';
                break;
            case "add":
                svg =
                    React.createElement("g", null,
                        React.createElement("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" }),
                        React.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }));
                break;
            case "user":
                svg =
                    React.createElement("g", null,
                        React.createElement("circle", { id: "svg_1", r: "4", cy: "9", cx: "11.631579" }),
                        React.createElement("path", { id: "svg_2", d: "m11.631579,15c-2.67,0 -8,1.34 -8,4l0,2l16,0l0,-2c0,-2.66 -5.329999,-4 -7.999999,-4zm7.759999,-9.64" }),
                        React.createElement("path", { id: "svg_3", fill: "none", d: "m2.631579,-0.328947l24,0l0,24l-24,0l0,-24z" }));
                break;
            case "userCircle":
                svg =
                    React.createElement("g", null,
                        React.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" }),
                        React.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }));
                break;
            case "arrowDown":
                svg =
                    React.createElement("g", null,
                        React.createElement("path", { d: "M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" }),
                        React.createElement("path", { d: "M0-.75h24v24H0z", fill: "none" }));
                break;
            case "settings":
                svg = React.createElement("g", null,
                    React.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
                    React.createElement("path", { d: "M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" }));
                break;
            case "moreActions":
                svg = React.createElement("g", null,
                    React.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
                    React.createElement("path", { d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" }));
                break;
            default:
                svg =
                    React.createElement("g", null,
                        React.createElement("path", { fill: "#989898", d: "M23.1,0H0.9C0.4,0,0,0.4,0,0.9v18.2C0,19.6,0.4,20,0.9,20h22.2c0.5,0,0.9-0.4,0.9-0.9V0.9   C24,0.4,23.6,0,23.1,0z M22,11.6L18.5,8c0,0-1-1-1.9-1c-1,0-1.9,1-1.9,1s-2.6,3-3.6,4c1.6,0.7,4,4.6,2.2,3.5   C11.4,14.3,8.2,13,8.2,13l-6.1,4V2h20v9.6H22z M3.8,6c0-1.2,1-2.2,2.2-2.2s2.2,1,2.2,2.2S7.2,8.2,6,8.2S3.8,7.2,3.8,6z" }));
                break;
        }
        return (React.createElement("svg", tslib_1.__assign({}, svgProps), svg));
    };
    Picto.defaultProps = {
        width: 24,
        height: 24,
        color: "#000000"
    };
    Picto.black = {
        editer: hornet_component_1.HornetComponent.genUrlTheme("/img/tableau/black/ico_editer.svg"),
        consulter: hornet_component_1.HornetComponent.genUrlTheme("/img/tableau/black/ico_consulter.svg"),
        supprimer: hornet_component_1.HornetComponent.genUrlTheme("/img/tableau/black/ico_supprimer.svg"),
        addCircle: hornet_component_1.HornetComponent.genUrlTheme("/img/tableau/black/ico_ajouter.svg"),
        settings: hornet_component_1.HornetComponent.genUrlTheme("/img/picto/black/ico_settings.svg"),
        close: hornet_component_1.HornetComponent.genUrlTheme("/img/picto/black/ico_close.svg"),
        add: hornet_component_1.HornetComponent.genUrlTheme("/img/picto/black/ico_add.svg"),
        user: hornet_component_1.HornetComponent.genUrlTheme("/img/picto/black/ico_user.svg"),
        userCircle: hornet_component_1.HornetComponent.genUrlTheme("/img/picto/black/account_circle_white.svg")
    };
    Picto.blue = {
        editer: hornet_component_1.HornetComponent.genUrlTheme("/img/tableau/blue/ico_editer.svg"),
        consulter: hornet_component_1.HornetComponent.genUrlTheme("/img/tableau/blue/ico_consulter.svg"),
        supprimer: hornet_component_1.HornetComponent.genUrlTheme("/img/tableau/blue/ico_supprimer.svg"),
        quickEdit: hornet_component_1.HornetComponent.genUrlTheme("/img/tableau/blue/ico_editer_line.svg"),
        addCircle: hornet_component_1.HornetComponent.genUrlTheme("/img/tableau/blue/ico_ajouter.svg"),
        settings: hornet_component_1.HornetComponent.genUrlTheme("/img/picto/blue/ico_settings.svg"),
        close: hornet_component_1.HornetComponent.genUrlTheme("/img/picto/blue/ico_close.svg"),
        add: hornet_component_1.HornetComponent.genUrlTheme("/img/picto/blue/ico_add.svg"),
        user: hornet_component_1.HornetComponent.genUrlTheme("/img/picto/blue/ico_user.svg"),
        userCircle: hornet_component_1.HornetComponent.genUrlTheme("/img/picto/blue/account_circle_white.svg")
    };
    Picto.white = {
        editer: hornet_component_1.HornetComponent.genUrlTheme("/img/tableau/white/ico_editer.svg"),
        consulter: hornet_component_1.HornetComponent.genUrlTheme("/img/tableau/white/ico_consulter.svg"),
        supprimer: hornet_component_1.HornetComponent.genUrlTheme("/img/tableau/white/ic_delete_white_24px.svg"),
        ajouter: hornet_component_1.HornetComponent.genUrlTheme("/img/tableau/white/ico_ajouter.svg"),
        info: hornet_component_1.HornetComponent.genUrlTheme("/img/picto/white/ico_info.svg"),
        settings: hornet_component_1.HornetComponent.genUrlTheme("/img/picto/white/ico_settings.svg"),
        close: hornet_component_1.HornetComponent.genUrlTheme("/img/picto/white/ico_close.svg"),
        add: hornet_component_1.HornetComponent.genUrlTheme("/img/picto/white/ico_add.svg"),
        user: hornet_component_1.HornetComponent.genUrlTheme("/img/picto/white/ico_user.svg"),
        userCircle: hornet_component_1.HornetComponent.genUrlTheme("/img/picto/white/account_circle_white.svg")
    };
    Picto.grey = {
        close: hornet_component_1.HornetComponent.genUrlTheme("/img/picto/grey/ico_close.svg"),
        add: hornet_component_1.HornetComponent.genUrlTheme("/img/picto/grey/ico_add.svg"),
        user: hornet_component_1.HornetComponent.genUrlTheme("/img/picto/grey/ico_user.svg"),
        userCircle: hornet_component_1.HornetComponent.genUrlTheme("/img/picto/grey/account_circle_white.svg")
    };
    Picto.editable = {
        editer: hornet_component_1.HornetComponent.genUrlTheme("/img/tableau/ico_editer_line.svg"),
        valider: hornet_component_1.HornetComponent.genUrlTheme("/img/tableau/ico_enregistrer.svg"),
        annuler: hornet_component_1.HornetComponent.genUrlTheme("/img/tableau/ico_annuler.svg"),
    };
    Picto.export = {
        csv: hornet_component_1.HornetComponent.genUrlTheme("/img/tableau/ico_export_csv.svg"),
        ods: hornet_component_1.HornetComponent.genUrlTheme("/img/tableau/ico_export_ods.svg"),
        odt: hornet_component_1.HornetComponent.genUrlTheme("/img/tableau/ico_export_odt.svg"),
        pdf: hornet_component_1.HornetComponent.genUrlTheme("/img/tableau/ico_export_pdf.svg"),
        xls: hornet_component_1.HornetComponent.genUrlTheme("/img/tableau/ico_export_xls.svg")
    };
    return Picto;
}(hornet_component_1.HornetComponent));
exports.Picto = Picto;



/***/ }),

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {

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
var tslib_1 = __webpack_require__(0);
/**
 * hornet-js-react-components - Ensemble des composants web React de base de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.0
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
var React = __webpack_require__(2);
var hornet_component_1 = __webpack_require__(4);
/**
 * Champ de formulaire Hornet de type Checkbox
 */
var CheckBox = /** @class */ (function (_super) {
    tslib_1.__extends(CheckBox, _super);
    function CheckBox(props, context) {
        return _super.call(this, props, context) || this;
    }
    /**
     * @inheritDoc
     */
    CheckBox.prototype.render = function () {
        return (React.createElement("label", { className: "checkbox-content", disabled: this.props.disabled, title: this.props.title },
            React.createElement("input", tslib_1.__assign({ type: "checkbox", value: "true" }, this.props)),
            React.createElement("span", { className: "checkbox-material" },
                React.createElement("span", { className: "check" })),
            (this.state.label) ? this.state.label : ""));
    };
    return CheckBox;
}(hornet_component_1.HornetComponent));
exports.CheckBox = CheckBox;



/***/ }),

/***/ 320:
/***/ (function(module, exports, __webpack_require__) {

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
var tslib_1 = __webpack_require__(0);
/**
 * hornet-js-react-components - Ensemble des composants web React de base de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.0
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
var hornet_js_utils_1 = __webpack_require__(1);
var array_utils_1 = __webpack_require__(314);
var sort_data_1 = __webpack_require__(316);
var React = __webpack_require__(2);
var hornet_component_1 = __webpack_require__(4);
var alert_1 = __webpack_require__(362);
var spinner_table_1 = __webpack_require__(466);
var paginate_datasource_1 = __webpack_require__(328);
var columns_1 = __webpack_require__(331);
var action_column_1 = __webpack_require__(358);
var edition_action_column_1 = __webpack_require__(448);
var check_column_1 = __webpack_require__(446);
var cell_coordinates_1 = __webpack_require__(459);
var table_state_1 = __webpack_require__(317);
var navigation_direction_1 = __webpack_require__(373);
var form_1 = __webpack_require__(350);
var line_before_1 = __webpack_require__(465);
var line_after_1 = __webpack_require__(449);
var classNames = __webpack_require__(19);
var _ = __webpack_require__(6);
var hornet_event_1 = __webpack_require__(8);
var paginate_datasource_2 = __webpack_require__(328);
exports.UNIT_SIZE = "em";
exports.UPDATE_COLUMN_VISIBILITY = new hornet_event_1.HornetEvent("UPDATE_COLUMN_VISIBILITY");
/**
 * Modes de d'interaction accessible au clavier
 */
var KeyboardInteractionMode;
(function (KeyboardInteractionMode) {
    /** Navigation en lecture seule avec les flèches */
    KeyboardInteractionMode[KeyboardInteractionMode["NAVIGATION"] = 0] = "NAVIGATION";
    /** Edition : même si les cellules ne sont pas éditables, des boutons d'édition peuvent être disponibles.
     * Ils sont accédés via la tabulation */
    KeyboardInteractionMode[KeyboardInteractionMode["ACTIONABLE"] = 1] = "ACTIONABLE";
})(KeyboardInteractionMode = exports.KeyboardInteractionMode || (exports.KeyboardInteractionMode = {}));
var logger = hornet_js_utils_1.Utils.getLogger("hornet-js-react-components.widget.table.content");
/**
 * Classe permettant de générer le rendu graphique d'uncomposant Tableau
 */
var Content = /** @class */ (function (_super) {
    tslib_1.__extends(Content, _super);
    function Content(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.tableTrsRef = [];
        /** Collection de colonne avec coordonnées et état */
        _this.columnsWithVisibilityMap = new Array();
        _this.props.contentState.setMaxListeners(Infinity);
        _this.props.dataSource && _this.props.dataSource.setMaxListeners(Infinity);
        _this.state.keyboardMode = KeyboardInteractionMode.NAVIGATION;
        _this.state.items = [];
        _this.state.inProgress = false;
        _this.state.isContentVisible = true;
        var result = _this.props.dataSource && _this.props.dataSource.results;
        if (result) {
            _this.state.items = _this.props.dataSource instanceof paginate_datasource_1.PaginateDataSource ?
                _this.props.dataSource.getItemsByPage(_this.props.dataSource.pagination.pageIndex || paginate_datasource_2.Direction.FIRST) : result;
            _this.props.dataSource.select([]);
        }
        _this.state.spinner = false;
        _this.state.actionMassEnabled = _this.hasChildrenOfComponentTypeOf(columns_1.Columns, check_column_1.CheckColumn);
        _this.hiddenColumns = props.hiddenColumns;
        _this.totalColumns = _this.getTotalColumnsVisible();
        _this.props.contentState.on(table_state_1.ContentState.TOGGLE_COLUMNS_EVENT, _this.handleChangeHiddenColumns);
        if (_this.props.dataSource && _this.props.dataSource.getDefaultSort()) {
            _this.sortData = _this.props.dataSource.getDefaultSort().sort;
        }
        // chaque cellule ecoute levent de clic sur l'icone d'edition d'une ligne du tableau
        _this.handleEdition = _this.handleEdition.bind(_this);
        _this.props.contentState.on(table_state_1.ContentState.EDITION_CLIC_EVENT, _this.handleEdition);
        _this.initializeColumnVisibilityWithCoord();
        return _this;
    }
    /**
     * @inheritDoc
     */
    Content.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        var result = this.props.dataSource.results;
        if (result) {
            if (this.props.dataSource instanceof paginate_datasource_1.PaginateDataSource) {
                // nothing
            }
            else {
                this.props.contentState.setItems(result);
            }
        }
        this.props.dataSource.on("init", this.setItem);
        this.props.dataSource.on("fetch", this.setItem);
        this.props.dataSource.on("pagination", this.setItemPaginate);
        this.props.dataSource.on("sort", this.sort);
        this.props.dataSource.on("delete", this.setItem);
        this.props.dataSource.on("add", this.setItem);
        this.props.dataSource.on("filter", this.setItem);
        this.props.dataSource.on("loadingData", this.displaySpinner);
        this.props.dataSource.on("select", this.handleChangeSelectedItems.bind(this));
        this.listen(exports.UPDATE_COLUMN_VISIBILITY, this.updateColumnVisibility);
    };
    /**
     * @inheritDoc
     */
    Content.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        this.props.dataSource.removeListener("fetch", this.setItem);
        this.props.dataSource.removeListener("init", this.setItem);
        this.props.dataSource.removeListener("pagination", this.setItemPaginate);
        this.props.dataSource.removeListener("sort", this.sort);
        this.props.dataSource.removeListener("add", this.setItem);
        this.props.dataSource.removeListener("filter", this.setItem);
        this.props.dataSource.removeListener("delete", this.setItem);
        this.props.dataSource.removeListener("loadingData", this.displaySpinner);
        this.props.dataSource.removeListener("select", this.handleChangeSelectedItems.bind(this));
        this.remove(exports.UPDATE_COLUMN_VISIBILITY, this.updateColumnVisibility);
    };
    /**
     * @inheritDoc
     */
    Content.prototype.render = function () {
        logger.trace("rendu du tableau ", this.state.onSubmit ? "avec un formulaire" : "sans formulaire");
        // On réinitialise les tableau des ref liées aux Tr
        this.tableTrsRef = [];
        // lorque la fonction submit est definit, on met le content dans un composant form
        return (this.state.onSubmit && !this.props.withoutForm ?
            React.createElement(form_1.Form, { ref: "lineForm", hideButtons: true, className: "form-table", schema: this.state.schema, notifId: this.state.notifId, onSubmit: this.handleSubmit, isMandatoryFieldsHidden: true }, this.renderContent()) : this.renderContent());
    };
    /**
     * Calcule le nombre de colonnes à afficher
     * @returns {number}
     */
    Content.prototype.getTotalColumnsVisible = function () {
        var nbColumns = this.getChildrenOf(columns_1.Columns).length;
        if (this.hiddenColumns) {
            nbColumns -= _.keys(_.pickBy(this.hiddenColumns, _.identity)).length;
        }
        return nbColumns;
    };
    /**
     * Calcule le nombre de colonnes à afficher
     * @returns {number}
     */
    Content.prototype.getTotalColumnsVisibleFromState = function () {
        var visibleColumnState = this.columnsWithVisibilityMap.filter(function (columnState) {
            if (columnState.isVisible) {
                return true;
            }
        });
        return visibleColumnState.length;
    };
    /**
     * Méthode permettant de mettre à jour le nombre de colonnes
     * @param hiddenColumns
     */
    Content.prototype.handleChangeHiddenColumns = function (hiddenColumns) {
        this.hiddenColumns = hiddenColumns;
        this.totalColumns = this.getTotalColumnsVisible();
    };
    /**
     * met a true la props isEditing a true lorsque la cellule est en cours d'edition
     * @param lineIndex
     */
    Content.prototype.handleEdition = function (lineIndex) {
        if (Array.isArray(this.tableTrsRef)) {
            this.tableTrsRef.map(function (tr, index) {
                if (tr.instance && tr.instance.classList) {
                    var list = tr.instance.classList;
                    (index === lineIndex) ? list.add("datatable-line-selected") : list.remove("datatable-line-selected");
                }
            });
        }
    };
    /**
     * Méthode qui controle l'affichage et la suppression du spinner
     * @param flag booléen true pour l'afficher false sinon
     */
    Content.prototype.displaySpinner = function (flag) {
        if (!this.props.hideSpinner) {
            flag ? this.showSpinnerComponent() : this.hideSpinnerComponent();
        }
    };
    /**
     * Méthode permettant de setter les data dans le tableau
     * @param result tableau d'élément
     */
    Content.prototype.setItem = function (result) {
        var _this = this;
        this.props.contentState.setItems(result);
        this.setState({ items: result }, function () {
            if (_this.tBodyRef && _this.tBodyRef.scrollHeight > _this.tBodyRef.clientHeight && _this.state.items.length > 0) {
                _this.props.contentState.emit(table_state_1.ContentState.RESIZE_EVENT, _this.props.width - 1.2);
            }
        });
    };
    /**
     * Méthode permettant de setter les data dans le tableau
     * @param result tableau d'éléments
     */
    Content.prototype.setItemPaginate = function (result) {
        var _this = this;
        this.props.contentState.setItems(result.list);
        this.setState({ items: result.list }, function () {
            if (_this.tBodyRef && _this.tBodyRef.scrollHeight > _this.tBodyRef.clientHeight && _this.state.items.length > 0) {
                _this.props.contentState.emit(table_state_1.ContentState.RESIZE_EVENT, _this.props.width - 1.2);
            }
        });
    };
    /**
     * Méthode permettant de tri les data
     * @param result tableau d'éléments
     * @param {SortData[]} sortData critères de tri.
     */
    Content.prototype.sort = function (result, sortData) {
        this.props.contentState.setItems(result);
        this.sortData = sortData;
        this.setState({ items: result });
    };
    /**
     * @inheritDoc
     */
    Content.prototype.setDataSource = function (value, callback) {
        this.setState({ dataSource: value }, callback);
        return this;
    };
    /**
     * Fonction de validation du formulaire
     * elle rappel la fonction de validation passé dans les props avec l'item qui etait en cours d'edition mis a jour avec les valeurs saisies
     * @param data
     */
    Content.prototype.handleSubmit = function (data) {
        var _this = this;
        if (this.state.onSubmit) {
            var item_1 = this.props.contentState.itemInEdition;
            // merge les data avec l'item
            for (var name_1 in data) {
                if (item_1[name_1]) {
                    item_1[name_1] = data[name_1];
                }
            }
            Promise.resolve()
                .then(function () {
                _this.state.onSubmit(item_1);
            })
                .then(function () {
                _this.props.contentState.setItemInEdition(null, null);
            });
        }
    };
    /**
     * Rendu du content
     * @returns {any}
     */
    Content.prototype.renderContent = function () {
        logger.trace("renderContent ");
        var columns = this.initColumnsProps();
        if (this.props.dataSource.results.length > 500) {
            console.log("TROP DE DATA POUR LE TABLEAU");
        }
        var tableProps = {
            role: "grid",
            "aria-readonly": "true",
            key: this.props.id,
            id: this.props.id
        };
        var headerTable = this.state.isContentVisible ? this.renderTHeader(columns) : null;
        return (React.createElement("div", { className: "datatable-content", tabIndex: this.state.tabIndex },
            React.createElement(spinner_table_1.SpinnerOverlay, { ref: "spinnerOverlay", isVisible: this.state.spinner, nbColumns: this.getTotalColumnsVisible(), width: this.props.width }),
            React.createElement("table", tslib_1.__assign({}, tableProps),
                this.renderCaption(columns),
                headerTable,
                this.renderTBody(columns)),
            React.createElement(alert_1.Alert, { ref: "alert", message: "", onClickCancel: this.closeAlert, onClickClose: this.closeAlert })));
    };
    /**
     * Rendu HTML du caption avec notion d'ordre de tri (si tri il y a)
     * @param columns
     * @returns {any}
     */
    Content.prototype.renderCaption = function (columns) {
        var _this = this;
        var title = this.props.title;
        if (this.sortData) {
            columns.map(function (column) {
                if (column.props) {
                    var sortColumn = _.find(_this.sortData, { key: column.props.keyColumn });
                    if (sortColumn) {
                        title += ":" + _this.i18n("table.sortedByTitle", { columnTitle: column.props.title }) + " ";
                        title += sortColumn.dir == sort_data_1.SortDirection.ASC ? _this.i18n("table.ascending") : _this.i18n("table.descending");
                    }
                }
            });
        }
        return (React.createElement("caption", { className: "hidden" }, title));
    };
    /**
     * Evènement permettant de déclencher le tri
     * @param sortData
     */
    Content.prototype.onSort = function (sortData) {
        var conf = sortData;
        this.sortData = [sortData];
        if (this.state.clientSideSorting) {
            conf.clientSideSorting = true;
        }
        this.props.dataSource.sort([sortData]);
    };
    /**
     * Rendu du header du tableau HTML
     * @param columns: colonnes déclarées dans le composant Page
     * @returns {any}
     */
    Content.prototype.renderTHeader = function (columns) {
        var classnameThead = classNames({
            "datatable-columns": !this.state.headerFixed,
            "datatable-columns-fixed": this.state.headerFixed && this.state.items.length > 0,
            "datatable-columns-disabled": this.state.items.length == 0
        });
        var tHeadProps = {
            className: classnameThead,
            id: this.props.id + "-thead"
        };
        return (React.createElement("thead", tslib_1.__assign({}, tHeadProps),
            React.createElement("tr", { id: this.props.id + "-tr-header" }, this.renderRowHeader(columns)),
            React.createElement(spinner_table_1.SpinnerLoader, { ref: "spinnerLoader", isVisible: this.state.spinner, className: this.props.id, nbColumns: this.getTotalColumnsVisible() })));
    };
    /**
     * Rendu HTML d'un ligne du composant Table
     * @param columns: colonnes déclaréesisContentVisible dans le composant Page
     * @returns {any}
     */
    Content.prototype.renderRowHeader = function (columns) {
        var _this = this;
        var Ths = [];
        logger.trace("renderRowHeader ");
        var selectedElements = this.props.dataSource ? this.props.dataSource.selected : [];
        columns.map(function (column, index) {
            var props = _this.getColProps(columns, index);
            var sortColumn = _.find(_this.sortData, { key: column.props.keyColumn });
            if (_this.sortData && sortColumn) {
                props.sortData = sortColumn;
            }
            // si la colonne ne contient que le checkBox, on applique pas (text-overflow: ellipsis;)
            if (column.type == check_column_1.CheckColumn) {
                props.className = classNames({ "datatable-header-no-text-overflow": true });
            }
            props.isSelected = array_utils_1.ArrayUtils.isInclude(_this.props.contentState.items, selectedElements);
            props.onSort = _this.onSort.bind(_this);
            props.cellCoordinate = new cell_coordinates_1.CellCoordinates(index, -1);
            props.isHeader = true;
            props.style = props.style || column.props.style;
            props.key = _this.state.id + "-" + props.cellCoordinate.row + "-" + props.cellCoordinate.column + "-wrapped";
            var Wrapped = hornet_component_1.HornetComponent.wrap(column.type, column, props, column.props);
            var col = React.createElement(Wrapped, { key: "wc-" + props.key });
            Ths.push(col);
        });
        return Ths;
    };
    Content.prototype.renderDatatableMessage = function (content) {
        logger.trace("renderDatatableMessage ");
        var tdProps = {};
        tdProps.colSpan = this.totalColumns;
        tdProps.className = classNames({ "datatable-message-content": true, "txtcenter": true });
        tdProps.style = { width: this.state.width + exports.UNIT_SIZE };
        return (React.createElement("tr", { key: "emptyRow" },
            React.createElement("td", tslib_1.__assign({}, tdProps), content)));
    };
    /**
     * Crée le body du tableau HTML
     * @param columns
     * @returns {any}
     */
    Content.prototype.renderTBody = function (columns) {
        var _this = this;
        logger.trace("renderTBody ");
        var rows = [];
        if (!(this.state.items && this.state.items.length > 0 && this.state.isContentVisible)) {
            // Cas d'un tableau sans résultats
            rows.push(this.renderDatatableMessage(this.state.emptyResult || this.i18n("table.emptyResult")));
        }
        else {
            this.state.items.map(function (item, lineIndex) {
                var rowBefore = _this.renderExpandableRow(item, columns, lineIndex, true);
                if (rowBefore) {
                    rows.push(rowBefore);
                }
                rows.push(_this.renderRowBody(item, columns, lineIndex));
                var rowAfter = _this.renderExpandableRow(item, columns, lineIndex);
                if (rowAfter) {
                    rows.push(rowAfter);
                }
            });
        }
        var classNameTbody = classNames({
            "datatable-data": !this.props.headerFixed,
            "datatable-data-fixed": this.state.headerFixed && this.state.items.length > 0
        });
        var tBodyProps = {
            className: classNameTbody,
            ref: function (element) { return _this.tBodyRef = element; }
        };
        // if (!this.props.headerFixed) {
        //     tBodyProps.style = {
        //         width: this.props.width + UNIT_SIZE
        //     }
        // }
        return (React.createElement("tbody", tslib_1.__assign({}, tBodyProps), rows));
    };
    /**
     * Rendu HTML d'une ligne LineAfter
     * @param item
     * @param columns
     * @param lineIndex
     * @param isBefore
     * @returns {any}
     */
    Content.prototype.renderExpandableRow = function (item, columns, lineIndex, isBefore) {
        var _this = this;
        logger.trace("renderExpandableRow ");
        var ComponentType = isBefore ? line_before_1.LineBefore : line_after_1.LineAfter;
        var rowType = isBefore ? "before" : "after";
        var cells = [], row = null;
        columns.map(function (column, index) {
            var children = Content.getChildrenFrom(column, ComponentType);
            if (children && Array.isArray(children) && children.length > 0) {
                var LineComponent = Content.getComponentFromParentBy(column, ComponentType);
                if (!LineComponent.props.visible || (LineComponent.props.visible && LineComponent.props.visible(item))) {
                    var colSpan = _this.totalColumns;
                    var kids_1 = [];
                    children.map(function (child, i) {
                        var Wrapped = Content.wrap(child.type, child, child.props, {
                            value: item,
                            rowType: rowType,
                            key: _this.props.id + "expandable-line-wrapped" + index + "-" + i + "-" + lineIndex
                        });
                        kids_1.push(React.createElement(Wrapped, null));
                    });
                    cells.push(React.createElement("td", { colSpan: colSpan, key: _this.props.id + "-expandable-line-cell" + rowType + "-" + lineIndex },
                        React.createElement("div", null, kids_1)));
                    var key = _this.props.id + "-expandable-line-" + rowType + "-" + lineIndex;
                    var TrClassName = {
                        "datatable-expandable-line": true,
                        "datatable-expandable-line-hidden": !LineComponent.props.displayed,
                        "datatable-expandable-line-displayed": LineComponent.props.displayed
                    };
                    TrClassName[_this.props.id + "-tr-with-colspan"] = true;
                    var trProps = {
                        ref: function (instance) {
                            if (instance) {
                                // referme les lignes expanded.
                                instance.classList.add("datatable-expandable-line-hidden");
                                instance.classList.remove("datatable-expandable-line-displayed");
                            }
                        },
                        style: {},
                        id: key,
                        key: key,
                        className: classNames(TrClassName)
                    };
                    row = React.createElement("tr", tslib_1.__assign({}, trProps), cells);
                }
            }
        });
        return row;
    };
    /**
     * Rendu HTML d'une ligne de tableau
     * @param item
     * @param columns
     * @param lineIndex
     * @returns {any}
     */
    Content.prototype.renderRowBody = function (item, columns, lineIndex) {
        var _this = this;
        logger.trace("renderRowBody ");
        var tds = [];
        var classNamesRow = {};
        var isSelected = array_utils_1.ArrayUtils.getIndexById(this.props.dataSource.selected, item) !== -1;
        // Injection de la class CSS surchargée
        if (this.state.customRowsClass) {
            classNamesRow = this.state.customRowsClass(item);
        }
        classNamesRow["datatable-odd"] = (lineIndex % 2) != 0;
        classNamesRow["datatable-even"] = (lineIndex % 2) == 0;
        columns.map(function (column, index) {
            var props = _this.getColProps(columns, index);
            props.value = item;
            props.isSelected = isSelected;
            props.cellCoordinate = new cell_coordinates_1.CellCoordinates(index, lineIndex);
            props.key = _this.props.id + "-columns-colBody-" + props.cellCoordinate.row + "-" + props.cellCoordinate.column + "-wrapped";
            props.style = props.style || column.props.style;
            // TODO: voi si on peut accéder aux propriétés d'un ActionColumn et s'assurer qu'elles matchent avec l'interface
            if (column.type === action_column_1.ActionColumn
                || column.type === edition_action_column_1.EditionActionColumn) {
                props.showAlert = _this.showAlert;
            }
            var Wrapped = hornet_component_1.HornetComponent.wrap(column.type, column, props, column.props);
            var wrappedElement = React.createElement(Wrapped, { key: "wc-" + props.key });
            tds.push(wrappedElement);
        });
        var trProps = {
            ref: function (instance) {
                if (instance) {
                    _this.tableTrsRef.push({ "instance": instance, "value": item });
                    Content.updateClasslistSelectedLine(instance, isSelected);
                }
            },
            key: this.props.id + "-line-" + lineIndex,
            className: classNames(classNamesRow),
            role: "row"
        };
        return (React.createElement("tr", tslib_1.__assign({}, trProps), tds));
    };
    /**
     * Evènement lancé lors d'une déctection de sélection de ligne: ajout/suppression d'une class
     */
    Content.prototype.handleChangeSelectedItems = function (selectedItems) {
        this.tableTrsRef.map(function (element) {
            if (element && element.instance.classList) {
                if (_.findIndex(selectedItems, { "id": element.value.id }) !== -1) {
                    if (!element.instance.classList.contains("datatable-line-selected")) {
                        element.instance.classList.add("datatable-line-selected");
                    }
                }
                else if (element.instance.classList.contains("datatable-line-selected")) {
                    element.instance.classList.remove("datatable-line-selected");
                }
            }
        });
    };
    /**
     * Initialisation des colonnes et des propriétés associées
     * @returns {columns}
     */
    Content.prototype.initColumnsProps = function () {
        logger.trace("initColumnsProps ");
        var columns = this.getChildrenOf(columns_1.Columns);
        if (this.props.headerFixed) {
            columns = this.fixColumnsWidth(columns);
        }
        return columns;
    };
    /***
     * Méthode permettant de fixer la largeur des colonnes dans le cas d'un header Fixe
     * @param columns
     * @returns {any}
     */
    Content.prototype.fixColumnsWidth = function (columns) {
        logger.trace("fixColumnsWidth ");
        var totalColumnWidth = this.state.width;
        var nbColumnsWithoutDefaultWidth = 0;
        columns.map(function (cell) {
            if (cell.props.width) {
                totalColumnWidth = totalColumnWidth - cell.props.width;
            }
            else {
                nbColumnsWithoutDefaultWidth++;
            }
        });
        var defaultColumnWidth = totalColumnWidth / nbColumnsWithoutDefaultWidth;
        columns.map(function (cell, index) {
            if (!cell.props.width) {
                columns[index].props.width = defaultColumnWidth;
            }
        });
        return columns;
    };
    /**
     * Modifie le mode d'accessibilité au clavier
     * @param mode NAVIGATION ou ACTIONABLE
     */
    Content.prototype.handleChangeKeyboardMode = function (mode) {
        /* La condition permet d'éviter de mettre à jour inutilement l'état React et ainsi de déclencher un rendu complet */
        if (mode != this.state.keyboardMode) {
            this.setState({
                keyboardMode: mode
            });
        }
    };
    /**
     * Méthode premettant d'afficher le spinner
     * @returns {Table}
     */
    Content.prototype.showSpinnerComponent = function () {
        this.refs.spinnerLoader.progress(true);
        this.refs.spinnerOverlay.progress(true);
        return this;
    };
    /**
     * Méthode premettant de masquer le spinner
     * @returns {Table}
     */
    Content.prototype.hideSpinnerComponent = function () {
        this.refs.spinnerLoader.progress(false);
        this.refs.spinnerOverlay.progress(false);
        return this;
    };
    /**
     * Méthode déclenchant la fermeture de la fenêtre modale de suppresion d'un partenaire
     */
    Content.prototype.closeAlert = function () {
        this.refs.alert.close();
    };
    /**
     * Méthode déclenchant la fermeture de la fenêtre modale de suppresion d'un partenaire
     */
    Content.prototype.validateAlert = function (fct) {
        this.refs.alert.close(fct);
    };
    /***
     * Déclenche l'affichage de la modale de suppression d'un partenaire
     * @param message
     * @param title
     * @param {Function} fct fonction exécutée sur la validation
     */
    Content.prototype.showAlert = function (message, title, fct) {
        var _this = this;
        this.refs.alert.setMessage(message);
        this.refs.alert.setTitle(title);
        this.refs.alert.setOnClickOk(function () {
            _this.validateAlert(fct);
        }).open();
    };
    /**
     *  Méthode permettant de cocher/décocher une(des) ligne(s) du tableau
     * @param item (l'item selectioonné : deselectioné)
     * @param selectAll (le teoggle de selection multiple
     */
    Content.prototype.toggleSelectLines = function (item, selectAll) {
        var _this = this;
        // recupere la liste des items selectionnés sur la page courante
        var selectedItems = array_utils_1.ArrayUtils.intersectionWith(this.props.dataSource.selected, this.state.items);
        if (item) {
            this.removeOrPush(selectedItems, item, true);
        }
        else if (selectAll) {
            selectedItems = this.state.items;
        }
        else {
            this.state.items.map(function (item) {
                _this.removeOrPush(selectedItems, item);
            });
        }
        this.props.dataSource.select(selectedItems);
    };
    /***
     *
     * @param coordinates coordonnées de la cellule qui a déclenché la navigation
     * @param direction sens de la direction choisie
     */
    Content.prototype.navigateToCell = function (coordinates, direction) {
        var focusCell = null;
        var targetColumn;
        var columnState;
        switch (direction) {
            case navigation_direction_1.NavigateDirection.BOTOM:
                focusCell = new cell_coordinates_1.CellCoordinates(coordinates.column, Math.min(this.state.items.length, coordinates.row + 1));
                break;
            case navigation_direction_1.NavigateDirection.TOP:
                focusCell = new cell_coordinates_1.CellCoordinates(coordinates.column, Math.max(-1, coordinates.row - 1));
                break;
            case navigation_direction_1.NavigateDirection.LEFT:
                targetColumn = coordinates.column - 1;
                columnState = this.columnsWithVisibilityMap[targetColumn];
                while (columnState && !columnState.isVisible) {
                    targetColumn -= 1;
                    columnState = this.columnsWithVisibilityMap[targetColumn];
                }
                if (columnState) {
                    focusCell = new cell_coordinates_1.CellCoordinates(targetColumn, coordinates.row);
                }
                break;
            case navigation_direction_1.NavigateDirection.RIGHT:
                targetColumn = coordinates.column + 1;
                columnState = this.columnsWithVisibilityMap[targetColumn];
                while (columnState && !columnState.isVisible) {
                    targetColumn += 1;
                    columnState = this.columnsWithVisibilityMap[targetColumn];
                }
                if (columnState) {
                    focusCell = new cell_coordinates_1.CellCoordinates(targetColumn, coordinates.row);
                }
                break;
            case navigation_direction_1.NavigateDirection.HOME_COL:
                targetColumn = 0;
                columnState = this.columnsWithVisibilityMap[targetColumn];
                while (columnState && !columnState.isVisible) {
                    targetColumn += 1;
                    columnState = this.columnsWithVisibilityMap[targetColumn];
                }
                focusCell = new cell_coordinates_1.CellCoordinates(targetColumn, coordinates.row);
                break;
            case navigation_direction_1.NavigateDirection.END_COL:
                targetColumn = this.columnsWithVisibilityMap.length - 1;
                columnState = this.columnsWithVisibilityMap[targetColumn];
                while (columnState && !columnState.isVisible) {
                    targetColumn -= 1;
                    columnState = this.columnsWithVisibilityMap[targetColumn];
                }
                focusCell = new cell_coordinates_1.CellCoordinates(targetColumn, coordinates.row);
                break;
            case navigation_direction_1.NavigateDirection.HOME_LINE:
                focusCell = new cell_coordinates_1.CellCoordinates(coordinates.column, 0);
                break;
            case navigation_direction_1.NavigateDirection.END_LINE:
                var items = this.state.items;
                focusCell = new cell_coordinates_1.CellCoordinates(coordinates.column, items.length - 1);
                break;
        }
        //verifier que la table n'est pas en edition
        //sinon verifier que la cellule n'est pas disabled
        if (!this.props.contentState.itemInEdition) {
            this.props.contentState.setFocusOn(focusCell);
        }
        else if (focusCell.row === this.props.contentState.itemInEdition.row) {
            this.props.contentState.setFocusOn(focusCell);
        }
    };
    /***
     * Méthode permettant de récupérer les propriétés d'une cellule
     * @param columns: colonnes déclarées dans le composant Page
     * @param columnIndex: Index de colonne
     * @returns {any} Propriétés d'une cellule
     */
    Content.prototype.getColProps = function (columns, columnIndex) {
        logger.trace("getColProps ");
        var props = {};
        props.coordinates = { column: columnIndex };
        props.handleChangeKeyboardMode = this.handleChangeKeyboardMode;
        props.toggleSelectLines = this.toggleSelectLines.bind(this);
        props.nbColumns = columns.length;
        props.actionMassEnabled = this.state.actionMassEnabled;
        props.navigateFct = this.navigateToCell.bind(this);
        props.keyboardMode = this.state.keyboardMode;
        props.headerFixed = this.props.headerFixed;
        props.contentState = this.props.contentState;
        props.dataSource = this.props.dataSource;
        props.id = this.props.id;
        var style = Content.mergeObjects({}, columns[columnIndex].props.style);
        if (columns[columnIndex].props.width) {
            style["width"] = columns[columnIndex].props.width;
        }
        // Permet de masquer des colonnes par défaut
        if (this.hiddenColumns && this.hiddenColumns[columns[columnIndex].props.keyColumn]) {
            style.display = "none";
            this.hiddenColumns["hidden_" + columnIndex] = props.keyColumn;
        }
        else {
            style.display = "table-cell";
        }
        props.style = Content.mergeObjects(columns[columnIndex].props.defaultStyle, style);
        return props;
    };
    /**
     * permet de supprimer ou d'ajouter l'item dans la liste selectedItems
     * et de le supprimer dans le dataSource.
     * @param selectedItems
     * @param item
     * @param orPush
     */
    Content.prototype.removeOrPush = function (selectedItems, item, orPush) {
        var indexOf = array_utils_1.ArrayUtils.getIndexById(selectedItems, item);
        if (indexOf !== -1) {
            selectedItems.splice(indexOf, 1);
            this.props.dataSource.removeUnSelectedItem(item);
        }
        else if (orPush) {
            selectedItems.push(item);
        }
    };
    /**
     * Méthode qui met a jour le style css pour la selection des lignes
     * @param instance
     * @param isSelected
     */
    Content.updateClasslistSelectedLine = function (instance, isSelected) {
        if (isSelected && !instance.classList.contains("datatable-line-selected")) {
            instance.classList.add("datatable-line-selected");
        }
        else if (!isSelected) {
            instance.classList.remove("datatable-line-selected");
        }
    };
    /**
     * met à jour la visibilité d'une colonne dans la collection référentielle
     * Cette méthode est déclenchée par un HornetEvent
     * @param ev hornetEvent contenant la valeur en booléen sur le visibilité de la colonne
     */
    Content.prototype.updateColumnVisibility = function (ev) {
        this.columnsWithVisibilityMap.map(function (state) {
            if (typeof ev.detail == "string") {
                if (state.column == ev.detail) {
                    state.isVisible = !state.isVisible;
                }
            }
            else {
                var myObject = ev.detail;
                if (state.column == myObject.column) {
                    state.isVisible = myObject.isVisible;
                }
            }
        });
        this.setFirstVisibleColumnState();
    };
    /**
     * Initilisation des états de visibilité des colonnes
     * On commence à true car les colonnes masquées par défaut
     * seront traitées dans le ToggleColumnsButton
     * et que celles ne pouvant pas être maquées et donc toujours visibles
     * ne sont pas gérées dans le ToggleColumnsButton
     */
    Content.prototype.initializeColumnVisibilityWithCoord = function () {
        var _this = this;
        var columns = this.getChildrenOf(columns_1.Columns);
        columns.forEach(function (column, index) {
            if (column) {
                _this.columnsWithVisibilityMap.push({
                    column: column.props.keyColumn,
                    coordinates: index,
                    isVisible: true
                });
            }
        });
        this.setFirstVisibleColumnState();
    };
    /**
     * Propage dans le contentState le columnState de la première column visible
     *
     */
    Content.prototype.setFirstVisibleColumnState = function () {
        var visibleColumnStates = this.columnsWithVisibilityMap.filter(function (column) {
            if (column.isVisible) {
                return true;
            }
        });
        this.props.contentState.setFirstVisibleColumnState(visibleColumnStates[0]);
    };
    return Content;
}(hornet_component_1.HornetComponent));
exports.Content = Content;



/***/ }),

/***/ 321:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  metaSchemaRef: metaSchemaRef
};

var META_SCHEMA_ID = 'http://json-schema.org/draft-06/schema';

function metaSchemaRef(ajv) {
  var defaultMeta = ajv._opts.defaultMeta;
  if (typeof defaultMeta == 'string') return { $ref: defaultMeta };
  if (ajv.getSchema(META_SCHEMA_ID)) return { $ref: META_SCHEMA_ID };
  console.warn('meta schema not defined');
  return {};
}


/***/ }),

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var resolve = __webpack_require__(323);

module.exports = {
  Validation: errorSubclass(ValidationError),
  MissingRef: errorSubclass(MissingRefError)
};


function ValidationError(errors) {
  this.message = 'validation failed';
  this.errors = errors;
  this.ajv = this.validation = true;
}


MissingRefError.message = function (baseId, ref) {
  return 'can\'t resolve reference ' + ref + ' from id ' + baseId;
};


function MissingRefError(baseId, ref, message) {
  this.message = message || MissingRefError.message(baseId, ref);
  this.missingRef = resolve.url(baseId, ref);
  this.missingSchema = resolve.normalizeId(resolve.fullPath(this.missingRef));
}


function errorSubclass(Subclass) {
  Subclass.prototype = Object.create(Error.prototype);
  Subclass.prototype.constructor = Subclass;
  return Subclass;
}


/***/ }),

/***/ 323:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var url = __webpack_require__(48)
  , equal = __webpack_require__(324)
  , util = __webpack_require__(312)
  , SchemaObject = __webpack_require__(335)
  , traverse = __webpack_require__(430);

module.exports = resolve;

resolve.normalizeId = normalizeId;
resolve.fullPath = getFullPath;
resolve.url = resolveUrl;
resolve.ids = resolveIds;
resolve.inlineRef = inlineRef;
resolve.schema = resolveSchema;

/**
 * [resolve and compile the references ($ref)]
 * @this   Ajv
 * @param  {Function} compile reference to schema compilation funciton (localCompile)
 * @param  {Object} root object with information about the root schema for the current schema
 * @param  {String} ref reference to resolve
 * @return {Object|Function} schema object (if the schema can be inlined) or validation function
 */
function resolve(compile, root, ref) {
  /* jshint validthis: true */
  var refVal = this._refs[ref];
  if (typeof refVal == 'string') {
    if (this._refs[refVal]) refVal = this._refs[refVal];
    else return resolve.call(this, compile, root, refVal);
  }

  refVal = refVal || this._schemas[ref];
  if (refVal instanceof SchemaObject) {
    return inlineRef(refVal.schema, this._opts.inlineRefs)
            ? refVal.schema
            : refVal.validate || this._compile(refVal);
  }

  var res = resolveSchema.call(this, root, ref);
  var schema, v, baseId;
  if (res) {
    schema = res.schema;
    root = res.root;
    baseId = res.baseId;
  }

  if (schema instanceof SchemaObject) {
    v = schema.validate || compile.call(this, schema.schema, root, undefined, baseId);
  } else if (schema !== undefined) {
    v = inlineRef(schema, this._opts.inlineRefs)
        ? schema
        : compile.call(this, schema, root, undefined, baseId);
  }

  return v;
}


/**
 * Resolve schema, its root and baseId
 * @this Ajv
 * @param  {Object} root root object with properties schema, refVal, refs
 * @param  {String} ref  reference to resolve
 * @return {Object} object with properties schema, root, baseId
 */
function resolveSchema(root, ref) {
  /* jshint validthis: true */
  var p = url.parse(ref, false, true)
    , refPath = _getFullPath(p)
    , baseId = getFullPath(this._getId(root.schema));
  if (refPath !== baseId) {
    var id = normalizeId(refPath);
    var refVal = this._refs[id];
    if (typeof refVal == 'string') {
      return resolveRecursive.call(this, root, refVal, p);
    } else if (refVal instanceof SchemaObject) {
      if (!refVal.validate) this._compile(refVal);
      root = refVal;
    } else {
      refVal = this._schemas[id];
      if (refVal instanceof SchemaObject) {
        if (!refVal.validate) this._compile(refVal);
        if (id == normalizeId(ref))
          return { schema: refVal, root: root, baseId: baseId };
        root = refVal;
      } else {
        return;
      }
    }
    if (!root.schema) return;
    baseId = getFullPath(this._getId(root.schema));
  }
  return getJsonPointer.call(this, p, baseId, root.schema, root);
}


/* @this Ajv */
function resolveRecursive(root, ref, parsedRef) {
  /* jshint validthis: true */
  var res = resolveSchema.call(this, root, ref);
  if (res) {
    var schema = res.schema;
    var baseId = res.baseId;
    root = res.root;
    var id = this._getId(schema);
    if (id) baseId = resolveUrl(baseId, id);
    return getJsonPointer.call(this, parsedRef, baseId, schema, root);
  }
}


var PREVENT_SCOPE_CHANGE = util.toHash(['properties', 'patternProperties', 'enum', 'dependencies', 'definitions']);
/* @this Ajv */
function getJsonPointer(parsedRef, baseId, schema, root) {
  /* jshint validthis: true */
  parsedRef.hash = parsedRef.hash || '';
  if (parsedRef.hash.slice(0,2) != '#/') return;
  var parts = parsedRef.hash.split('/');

  for (var i = 1; i < parts.length; i++) {
    var part = parts[i];
    if (part) {
      part = util.unescapeFragment(part);
      schema = schema[part];
      if (schema === undefined) break;
      var id;
      if (!PREVENT_SCOPE_CHANGE[part]) {
        id = this._getId(schema);
        if (id) baseId = resolveUrl(baseId, id);
        if (schema.$ref) {
          var $ref = resolveUrl(baseId, schema.$ref);
          var res = resolveSchema.call(this, root, $ref);
          if (res) {
            schema = res.schema;
            root = res.root;
            baseId = res.baseId;
          }
        }
      }
    }
  }
  if (schema !== undefined && schema !== root.schema)
    return { schema: schema, root: root, baseId: baseId };
}


var SIMPLE_INLINED = util.toHash([
  'type', 'format', 'pattern',
  'maxLength', 'minLength',
  'maxProperties', 'minProperties',
  'maxItems', 'minItems',
  'maximum', 'minimum',
  'uniqueItems', 'multipleOf',
  'required', 'enum'
]);
function inlineRef(schema, limit) {
  if (limit === false) return false;
  if (limit === undefined || limit === true) return checkNoRef(schema);
  else if (limit) return countKeys(schema) <= limit;
}


function checkNoRef(schema) {
  var item;
  if (Array.isArray(schema)) {
    for (var i=0; i<schema.length; i++) {
      item = schema[i];
      if (typeof item == 'object' && !checkNoRef(item)) return false;
    }
  } else {
    for (var key in schema) {
      if (key == '$ref') return false;
      item = schema[key];
      if (typeof item == 'object' && !checkNoRef(item)) return false;
    }
  }
  return true;
}


function countKeys(schema) {
  var count = 0, item;
  if (Array.isArray(schema)) {
    for (var i=0; i<schema.length; i++) {
      item = schema[i];
      if (typeof item == 'object') count += countKeys(item);
      if (count == Infinity) return Infinity;
    }
  } else {
    for (var key in schema) {
      if (key == '$ref') return Infinity;
      if (SIMPLE_INLINED[key]) {
        count++;
      } else {
        item = schema[key];
        if (typeof item == 'object') count += countKeys(item) + 1;
        if (count == Infinity) return Infinity;
      }
    }
  }
  return count;
}


function getFullPath(id, normalize) {
  if (normalize !== false) id = normalizeId(id);
  var p = url.parse(id, false, true);
  return _getFullPath(p);
}


function _getFullPath(p) {
  var protocolSeparator = p.protocol || p.href.slice(0,2) == '//' ? '//' : '';
  return (p.protocol||'') + protocolSeparator + (p.host||'') + (p.path||'')  + '#';
}


var TRAILING_SLASH_HASH = /#\/?$/;
function normalizeId(id) {
  return id ? id.replace(TRAILING_SLASH_HASH, '') : '';
}


function resolveUrl(baseId, id) {
  id = normalizeId(id);
  return url.resolve(baseId, id);
}


/* @this Ajv */
function resolveIds(schema) {
  var schemaId = normalizeId(this._getId(schema));
  var baseIds = {'': schemaId};
  var fullPaths = {'': getFullPath(schemaId, false)};
  var localRefs = {};
  var self = this;

  traverse(schema, {allKeys: true}, function(sch, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex) {
    if (jsonPtr === '') return;
    var id = self._getId(sch);
    var baseId = baseIds[parentJsonPtr];
    var fullPath = fullPaths[parentJsonPtr] + '/' + parentKeyword;
    if (keyIndex !== undefined)
      fullPath += '/' + (typeof keyIndex == 'number' ? keyIndex : util.escapeFragment(keyIndex));

    if (typeof id == 'string') {
      id = baseId = normalizeId(baseId ? url.resolve(baseId, id) : id);

      var refVal = self._refs[id];
      if (typeof refVal == 'string') refVal = self._refs[refVal];
      if (refVal && refVal.schema) {
        if (!equal(sch, refVal.schema))
          throw new Error('id "' + id + '" resolves to more than one schema');
      } else if (id != normalizeId(fullPath)) {
        if (id[0] == '#') {
          if (localRefs[id] && !equal(sch, localRefs[id]))
            throw new Error('id "' + id + '" resolves to more than one schema');
          localRefs[id] = sch;
        } else {
          self._refs[id] = fullPath;
        }
      }
    }
    baseIds[jsonPtr] = baseId;
    fullPaths[jsonPtr] = fullPath;
  });

  return localRefs;
}


/***/ }),

/***/ 324:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function equal(a, b) {
  if (a === b) return true;

  var arrA = Array.isArray(a)
    , arrB = Array.isArray(b)
    , i;

  if (arrA && arrB) {
    if (a.length != b.length) return false;
    for (i = 0; i < a.length; i++)
      if (!equal(a[i], b[i])) return false;
    return true;
  }

  if (arrA != arrB) return false;

  if (a && b && typeof a === 'object' && typeof b === 'object') {
    var keys = Object.keys(a);
    if (keys.length !== Object.keys(b).length) return false;

    var dateA = a instanceof Date
      , dateB = b instanceof Date;
    if (dateA && dateB) return a.getTime() == b.getTime();
    if (dateA != dateB) return false;

    var regexpA = a instanceof RegExp
      , regexpB = b instanceof RegExp;
    if (regexpA && regexpB) return a.toString() == b.toString();
    if (regexpA != regexpB) return false;

    for (i = 0; i < keys.length; i++)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = 0; i < keys.length; i++)
      if(!equal(a[keys[i]], b[keys[i]])) return false;

    return true;
  }

  return false;
};


/***/ }),

/***/ 325:
/***/ (function(module, exports, __webpack_require__) {

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
var tslib_1 = __webpack_require__(0);
/**
 * hornet-js-core - Ensemble des composants qui forment le coeur de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.0
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
var events = __webpack_require__(35);
var _ = __webpack_require__(6);
var promise_api_1 = __webpack_require__(20);
var technical_error_1 = __webpack_require__(11);
var codes_error_1 = __webpack_require__(47);
var object_utils_1 = __webpack_require__(127);
var array_utils_1 = __webpack_require__(314);
var datasource_option_1 = __webpack_require__(349);
var datasource_config_1 = __webpack_require__(434);
var datasource_config_page_1 = __webpack_require__(348);
var DataSourceStatus;
(function (DataSourceStatus) {
    DataSourceStatus[DataSourceStatus["Dummy"] = 0] = "Dummy";
    DataSourceStatus[DataSourceStatus["Initialized"] = 1] = "Initialized";
})(DataSourceStatus = exports.DataSourceStatus || (exports.DataSourceStatus = {}));
/***
 * @classdesc Classe de base des datasources
 * elle contient une methode pour récupérer des datas, varie selon le type de datasource;
 * elle implémente une methode qui transforme les données récupérées selon une classe de mapping  {@link DataSourceMap} afin de l'exploiter directement par l'IHM.
 * liste des events déclenchés par le datasource lorsque les opérations sont effectuées:
 * -init
 * -fetch
 * -add
 * -delete
 * -select
 * -sort
 * -filter
 * -error see{@link CodesError.DATASOURCE*}
 * @class
 * @extends EventEmitter
 */
var DataSource = /** @class */ (function (_super) {
    tslib_1.__extends(DataSource, _super);
    /***
     * @param {DataSourceConfig|DataSourceConfigPage|Array<T>} config : accepte soit une liste de l'éléments Array<T>, soit un service DataSourceConfig | DataSourceConfigPage
     * @param {DataSourceMap} keysMap  : utilisée pour la transformation des resultats du fetch.
     * @param {DataSourceOption[]} options : liste de paramètres supplémentaires à transmettre au fetch
     * Pour un config de type
     */
    function DataSource(config, keysMap, options) {
        if (keysMap === void 0) { keysMap = {}; }
        var _this = _super.call(this) || this;
        _this.config = config;
        _this.keysMap = keysMap;
        _this.options = options;
        /***
         * tableau d'item selectionné du datasource
         * @instance
         */
        _this._selected = [];
        /***
         * tableau de résultats du datasource
         * @instance
         */
        _this._results = [];
        /***
         * backup des résultats du datasource
         * @instance
         */
        _this._results_backup = [];
        /***
         * mode filtre
         * @instance
         */
        _this._filtering_flag = false;
        /**
         * Indique si le datasource courant est de type DataSourceArray.
         */
        _this.isDataSourceArray = false;
        /**
         * Sauvegarde des argument du fetch pour rejouer lors du tri
         */
        _this.fetchArgsSaved = null;
        /**
         * nom des argument du fetch pour rejouer lors du tri en lui ajoutant le sortData
         */
        _this.fetchAttrName = "criteres";
        _this._status = DataSourceStatus.Dummy;
        _this.config = config;
        if (!_this.config) {
            _this.config = [];
        }
        if (_this.config instanceof datasource_config_1.DataSourceConfig) {
            _this.scope = _this.config.scope;
            _this.method = _this.config.scope[_this.config.methodName];
            _this.fetchAttrName = _this.config.fetchAttrName || "criteres";
        }
        if (_this.config instanceof datasource_config_page_1.DataSourceConfigPage) {
            _this.scope = _this.config.page.getService();
            _this.method = _this.config.method;
            _this.fetchAttrName = _this.config.fetchAttrName || "criteres";
        }
        if (_this.config instanceof Array) {
            _this.isDataSourceArray = true;
            _this.init();
        }
        var init = _.find(options, function (option) {
            return option instanceof datasource_option_1.InitAsync;
        });
        var sort = _.find(options, function (option) {
            return option instanceof datasource_option_1.DefaultSort;
        });
        _this.defaultSort = sort ? sort : null;
        _this.initAsync = init ? init : null;
        return _this;
    }
    /***
     * Méthode qui déclenche un fetch appelé pour initialiser un datasource.
     * @param {any} args  paramètres à renseigner pour l'appel de la méthode de récupération des données.
     * Déchenche un event init
     */
    DataSource.prototype.init = function (args) {
        (this.initAsync && this.initAsync.isAsync) ? this.initData(args) : this.initDataSync(args);
    };
    /***
     * Méthode qui déclenche un fetch appelé pour initialiser un datasource.
     * @param {any} args  paramètres à renseigner pour l'appel de la méthode de récupération des données.
     * Déchenche un event init
     */
    DataSource.prototype.initDataSync = function (args) {
        var _this = this;
        if (this.isDataSourceArray) {
            this.addDataSync(false, this.config);
            //nettoyage
            this.config = [];
            this.emit("init", this.results);
            this._status = DataSourceStatus.Initialized;
            return this.results;
        }
        else {
            this.fetchData(false, args).then(function () {
                _this.emit("init", _this.results);
                _this._status = DataSourceStatus.Initialized;
                return _this.results;
            });
        }
    };
    /***
     * Méthode qui déclenche un fetch appelé pour initialiser un datasource.
     * @param {any} args  paramètres à renseigner pour l'appel de la méthode de récupération des données.
     * Déchenche un event init
     */
    DataSource.prototype.initData = function (args) {
        var _this = this;
        return this.isDataSourceArray ? this.addData(false, this.config).then(function () {
            //nettoyage
            _this.config = [];
            _this.emit("init", _this.results);
            _this._status = DataSourceStatus.Initialized;
            return _this.results;
        }).catch(function (error) {
            throw error;
        }) : this.fetchData(false, args).then(function () {
            _this.emit("init", _this.results);
            _this._status = DataSourceStatus.Initialized;
            return _this.results;
        });
    };
    /**
     * On considère que les données sont dèjà présentes dans le datasource, on envoie juste l'event fetch au composant
     * pour forcer le rendu avec ses anciennes données.
     */
    DataSource.prototype.reload = function () {
        var _this = this;
        promise_api_1.Promise.resolve().then(function () {
            _this.emit("fetch", _this.results);
        });
    };
    Object.defineProperty(DataSource.prototype, "selected", {
        /**
         * renvoie la valeur selectionnée courante.
         */
        get: function () {
            return this._selected;
        },
        set: function (value) {
            this._selected = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * supprime l'item du dataSource
     * @param item
     */
    DataSource.prototype.removeUnSelectedItem = function (item) {
        var indexOf = array_utils_1.ArrayUtils.getIndexById(this._selected, item);
        if (indexOf !== -1) {
            this._selected.splice(indexOf, 1);
        }
    };
    Object.defineProperty(DataSource.prototype, "results", {
        /**
         * renvoie le tableau des résultats.
         */
        get: function () {
            return this._results;
        },
        /**
         * enregistre les résultats dans le datasource
         * @param {any[]} results les données du data source (post-transformation {@link DataSource#transformData}).
         */
        set: function (results) {
            this._results = results;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSource.prototype, "status", {
        get: function () {
            return this._status;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * renvoie le tri par defaut
     */
    DataSource.prototype.getDefaultSort = function () {
        return this.defaultSort;
    };
    /***
     * Méthode qui implémente la méthode de récupération des datas (une par type de datasource)
     * Déchenche un event fetch
     * @param {Boolean} triggerFetch  déclenche un évènement "fetch" après l'opération si true.
     * @param {any} args  paramètres à renseigner pour l'appel de la méthode de récupération des données.
     * @param {boolean} noSave indicateur pour sauvegarder ou non les paramètres du fetch pour les rejouer sur un sort service
     * @example
     * dataSource.on("fetch", (MappedResult)=>{
     *       //staff
     *   })
     * dataSource.fetch();
     * @void
     */
    DataSource.prototype.fetch = function (triggerFetch, args, noSave) {
        //suppression de l'historique de selection
        // le mae n'est pas prêt...
        this.selectClean(!noSave);
        if (!noSave) {
            this.fetchArgsSaved = args;
        }
        this.fetchData(triggerFetch, args);
    };
    /***
     * Méthode qui déclenche les events
     **/
    DataSource.prototype.emitEvent = function (name) {
        var _this = this;
        var arg = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            arg[_i - 1] = arguments[_i];
        }
        if (this._status === DataSourceStatus.Dummy) {
            this._status = DataSourceStatus.Initialized;
        }
        setTimeout(function () {
            _this.emit.apply(_this, [name].concat(arg));
        }, 0);
    };
    /***
     * Méthode qui implémente la méthode de récupération des datas (une par type de datasource)
     * @param {Boolean} triggerFetch déclenche un évènement "fetch" après l'opération si true.
     * @param {any[]} ...args paramètres à renseigner pour l'appel de la méthode de récupération des données.
     * @return {T} une promesse de type result de T.
     * @example
     * dataSource.on("fetch", (MappedResult)=>{
     *       //staff
     *   })
     * dataSource.fetch();
     * @void
     */
    DataSource.prototype.fetchData = function (triggerFetch, args) {
        var _this = this;
        this.emit("loadingData", true);
        var fetchOptions = _.filter(this.options, function (option) {
            return option.sendToFetch();
        });
        var fetchArgs = (typeof args !== "undefined") ? [args].concat(fetchOptions) : fetchOptions;
        var p = this.isDataSourceArray ?
            //déclenchement de l'event fetch (si demandé) avec le result du data source en datasourceArray
            promise_api_1.Promise.resolve().then(function () {
                if (triggerFetch) {
                    _this.emit("fetch", _this.results);
                    if (_this.defaultSort && !(args && args["sort"])) {
                        _this.sortData(_this.defaultSort.sort, _this.defaultSort);
                    }
                }
                else {
                    return false;
                }
            }) :
            //déclenchement de l'event fetch (si demandé) avec datasourceService
            //après la requete de service, une transformation sera appliquée sur les données récoltées
            this.method.apply(this.scope, fetchArgs)
                .then(function (result) {
                return _this.transformData([result]).then(function (res) {
                    //affectation des data dans le result du datasource
                    _this.results = res;
                    var args = fetchArgs[0];
                    if (_this.defaultSort && !(args && args["sort"])) {
                        _this.sortData(_this.defaultSort.sort, _this.defaultSort);
                    }
                    triggerFetch ? _this.emit("fetch", _this.results) : null;
                    return _this.results;
                }).catch(function (e) {
                    var error = new technical_error_1.TechnicalError("ERR_TECH_" + codes_error_1.CodesError.DATASOURCE_FETCH_ERROR, null, e);
                    _this.emit("error", error);
                    throw error;
                });
            });
        return p.finally(function () {
            _this.emitEvent("loadingData", false);
        });
    };
    /***
     * Ajout un élément ou des éléments au result du datasource
     * cette action déclenche l'évènement add.
     * @param {Boolean} triggerFetch déclenche un évènement "fetch" après l'opération si true.
     * @param {(T|T[])[]} items correspond aux données à ajouter, un appel à la méthode {@link DataSource#transformData} sera effectué
     * @example
     * dataSource.on("add", (IncreasedResult)=>{
     *       //staff
     *   })
     * dataSource.add();
     * @void
     */
    DataSource.prototype.add = function (triggerFetch) {
        var _this = this;
        var items = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            items[_i - 1] = arguments[_i];
        }
        this.addData.apply(this, [triggerFetch].concat(items)).then(function (result) {
            _this.emit("add", result);
            return _this.results;
        });
    };
    /***
     * Ajout un élément ou des éléments au result du datasource
     * @param {Boolean} triggerFetch déclenche un évènement "fetch" après l'opération si true.
     * @param {(T|T[])[]} items correspond aux données à ajouter, un appel à la méthode {@link DataSource#transformData} sera effectué
     * @return une promise du result modifié
     */
    DataSource.prototype.addData = function (triggerFetch) {
        var _this = this;
        var items = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            items[_i - 1] = arguments[_i];
        }
        this.emit("loadingData", true);
        return promise_api_1.Promise.resolve().then(function () {
            return _this.transformData(items).then(function (result) {
                try {
                    _this._results = _this._results.concat(result);
                    if (_this.defaultSort) {
                        _this.sortData(_this.defaultSort.sort, _this.defaultSort);
                    }
                    if (triggerFetch)
                        _this.emit("fetch", _this.results);
                    return _this._results;
                }
                catch (e) {
                    var error = new technical_error_1.TechnicalError("ERR_TECH_" + codes_error_1.CodesError.DATASOURCE_ADD_ERROR, null, e);
                    _this.emit("error", error);
                    throw error;
                }
            });
        }).finally(function () {
            _this.emitEvent("loadingData", false);
        });
    };
    /***
     * Ajout un élément ou des éléments au result du datasource
     * @param {Boolean} triggerFetch déclenche un évènement "fetch" après l'opération si true.
     * @param {(T|T[])[]} items correspond aux données à ajouter, un appel à la méthode {@link DataSource#transformData} sera effectué
     * @return {any[]} result modifié
     */
    DataSource.prototype.addDataSync = function (triggerFetch) {
        var items = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            items[_i - 1] = arguments[_i];
        }
        this.emit("loadingData", true);
        var res = null;
        try {
            var result = this.transformDataSync(items);
            this._results = this._results.concat(result);
            if (this.defaultSort) {
                this.sortData(this.defaultSort.sort, this.defaultSort);
            }
            if (triggerFetch)
                this.emit("fetch", this.results);
            res = this._results;
        }
        catch (e) {
            var error = new technical_error_1.TechnicalError("ERR_TECH_" + codes_error_1.CodesError.DATASOURCE_ADD_ERROR, null, e);
            this.emit("error", error);
            throw error;
        }
        this.emit("loadingData", false);
        return res;
    };
    /***
     * enlève un élément ou des éléments au result du datasource
     * cette action déclenche l'évènement delete
     * @param {Boolean} triggerFetch déclenche un évènement "fetch" après l'opération si true.
     * @param {(T|T[])[]} items correspond aux données à ajouter, un appel à la méthode {@link DataSource#transformData} sera effectué
     * @void
     */
    DataSource.prototype.delete = function (triggerFetch) {
        var _this = this;
        var items = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            items[_i - 1] = arguments[_i];
        }
        this.deleteData.apply(this, [triggerFetch].concat(items)).then(function (result) {
            _this.emit("delete", result);
            return _this.results;
        });
    };
    /**
     * supprime toutes les données du datasource.
     */
    DataSource.prototype.deleteAll = function () {
        this.selectClean(true);
        this.results = [];
        this.emit("delete", this.results);
    };
    /***
     * enlève un élément ou des éléments au result du datasource
     * @param {Boolean} triggerFetch déclenche un évènement "fetch" après l'opération si true.
     * @param {(T|T[])[]} items correspond aux données à ajouter, un appel à la méthode {@link DataSource#transformData} sera effectué
     * @return {Promise<Array<<any>>} une promise du result modifié
     */
    DataSource.prototype.deleteData = function (triggerFetch) {
        var _this = this;
        if (triggerFetch === void 0) { triggerFetch = false; }
        var items = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            items[_i - 1] = arguments[_i];
        }
        this.emit("loadingData", true);
        return promise_api_1.Promise.resolve().then(function () {
            return _this.transformData(items).then(function (result) {
                _.map(result, function (item) {
                    _.remove(_this._results, item);
                });
                if (triggerFetch)
                    _this.emit("fetch", _this.results);
                return _this.results;
            }).catch(function (e) {
                var error = new technical_error_1.TechnicalError("ERR_TECH_" + codes_error_1.CodesError.DATASOURCE_DELETE_ERROR, null, e);
                _this.emit("error", error);
                throw error;
            });
        }).finally(function () {
            _this.emitEvent("loadingData", false);
        });
    };
    /**
     * permet de normaliser les elements du spread
     * @param {(T|T[])[]} data : les paramètres à normaliser
     */
    DataSource.prototype.getSpreadValues = function (data) {
        var _data = data;
        if (_data.length == 0)
            return [];
        //for spread operator
        if (_data[0] instanceof Array) {
            _data = _data[0];
        }
        return _data;
    };
    /***
     * méthode qui convertie les données brutes en données exploitable par l'IHM.
     * @param {(T|T[])[]} data les données brutes.
     * @return {Promise<Array<<any>>} renvoie les données transformées à partir des données brutes et la classe de mapping  {@link DataSourceMap}
     */
    DataSource.prototype.transformData = function (data) {
        var _this = this;
        return promise_api_1.Promise.resolve().then(function () {
            return _this.transformDataSync(data);
        });
    };
    /***
     * méthode qui convertie les données brutes en données exploitable par l'IHM.
     * @param {(T|T[])[]} data les données brutes.
     * @return {Array<any>} renvoie les données transformées à partir des données brutes et la classe de mapping  {@link DataSourceMap}
     */
    DataSource.prototype.transformDataSync = function (data) {
        var _this = this;
        if (data["errors"]) {
            var error = new technical_error_1.TechnicalError("ERR_TECH_" + codes_error_1.CodesError.DATASOURCE_RESPONSE_ERROR, data["errors"]);
            this.emit("error", error);
            throw error;
        }
        var _data = this.getSpreadValues(data);
        if (!this.keysMap || Object.keys(this.keysMap) == 0) {
            return _data;
        }
        return _data.map(function (item) {
            if (item) {
                var resultKeys_1 = {};
                Object.keys(_this.keysMap).map(function (key) {
                    resultKeys_1[key] = object_utils_1.ObjectUtils.getSubObject(item, _this.keysMap[key]);
                });
                return resultKeys_1;
            }
        });
    };
    /**
     * Fonction de tri
     * @param {SortData[]} sort  données de tri
     * @param {(a: any, b: any) => number} Fonction de comparaison.
     */
    DataSource.prototype.sortData = function (sort, compare) {
        if (compare) {
            compare.sortDatas = sort;
            this.results.sort(compare.compare);
        }
        else {
            var keys = [];
            var directions = [];
            for (var i = 0; i < sort.length; i++) {
                keys.push(sort[i].key);
                directions.push(sort[i].dir ? "desc" : "asc");
            }
            this.results = _.orderBy(this.results, keys, directions);
        }
        /*this.results = _.sortBy(this.results, sort.key instanceof Array ? sort.key : [ sort.key ]); // seulement ascendant
         if (sort.dir == SortDirection.DESC) {
         this.results = this.results.reverse();
         }*/
    };
    /***
     * Fonction de tri
     * @param {SortData[]} sortData.
     * @param {(a: any, b: any) => number} Fonction de comparaison.
     * @example
     * dataSource.on("sort", (SortedResult)=>{
     *       //staff
     *   })
     * dataSource.sort(sortData);
     * @void
     */
    DataSource.prototype.sort = function (sortDatas, compare) {
        var _this = this;
        this.emit("loadingData", true);
        promise_api_1.Promise.resolve().then(function () {
            try {
                if (_this.isDataSourceArray) {
                    if (_this.defaultSort)
                        _this.defaultSort.sort = sortDatas;
                    _this.sortData(sortDatas, compare || _this.defaultSort);
                    _this.emitEvent("sort", _this.results, sortDatas);
                    return _this.results;
                }
                else {
                    return _this.fetchData(false, _this.getFetchArgs("sort", sortDatas))
                        .then(function (results) {
                        _this.emitEvent("sort", _this.results, sortDatas);
                        return results;
                    });
                }
            }
            catch (e) {
                var error = new technical_error_1.TechnicalError("ERR_TECH_" + codes_error_1.CodesError.DATASOURCE_SORT_ERROR, null, e);
                _this.emit("error", error);
                throw error;
            }
        }).finally(function () {
            _this.emitEvent("loadingData", false);
        });
    };
    /***
     * Renvoie un sous-ensemble des resultats filtrés
     * @param config correspond soit aux critères de filtrage soit à une fonction (appelée à chaque itération) {@link https://lodash.com/docs/#filter}
     * @param cancelFilterHistory false si on souhaite garder un historique des filtres true sinon. false par défaut
     * @example
     * dataSource.on("filter", (filteredResult)=>{
     *       //staff
     *   })
     * dataSource.filter(config, cancelFilterHistory);
     * @void
     */
    DataSource.prototype.filter = function (config, cancelFilterHistory) {
        var _this = this;
        if (cancelFilterHistory === void 0) { cancelFilterHistory = false; }
        this.emit("loadingData", true);
        if (this.isDataSourceArray) {
            if (cancelFilterHistory) {
                if (!this._filtering_flag) {
                    //backup
                    this._results_backup = this._results;
                    this._filtering_flag = true;
                }
                else {
                    //restore
                    this._results = this._results_backup;
                }
            }
        }
        promise_api_1.Promise.resolve().then(function () {
            try {
                if (_this.isDataSourceArray) {
                    _this._results = _.filter(_this.results, config);
                    _this.emitEvent("filter", _this.results);
                }
                else {
                    _this.fetchData(false, _this.getFetchArgs("filter", config)).then(function () {
                        _this.emitEvent("filter", _this.results);
                    });
                }
            }
            catch (e) {
                var error = new technical_error_1.TechnicalError("ERR_TECH_" + codes_error_1.CodesError.DATASOURCE_FILTER_ERROR, null, e);
                _this.emit("error", error);
                throw error;
            }
        }).finally(function () {
            _this.emitEvent("loadingData", false);
        });
    };
    /***
     * Annule tous les filtres et restaure les valeurs d'origine.
     * dataSource.cancelFilter();
     * @void
     */
    DataSource.prototype.cancelFilter = function () {
        if (this._filtering_flag) {
            this._results = this._results_backup;
        }
    };
    /***
     * Permet de selectionner un element ou des elements du datasource
     * déclenche un evènement "select".
     * @param args correspond aux éléments sélectionnées
     * @param index dans le cas de la selection d'une ligne
     * @example
     * dataSource.on("select", (selectedItems)=>{
     *       //staff
     *   })
     * dataSource.select(items);
     * @void
     */
    DataSource.prototype.select = function (args) {
        this._selected = args;
        this.emit("select", this.selected);
    };
    /***
     * Supprime toute sélection dans le datasource.
     * @void
     */
    DataSource.prototype.selectClean = function (flag) {
        if (flag) {
            this.select([]);
        }
        this._selected = [];
    };
    /**
     * reconstitue un objet parametre du fetch
     * @param {string} attrName nom de l'attribut ajouter
     * @param {objet} value valeur de l'attribut ajouter
     * @param {objet=} param
     */
    DataSource.prototype.getFetchArgs = function (attrName, value, param) {
        var fetchArgs = value;
        if (param || this.fetchArgsSaved) {
            if (value) {
                fetchArgs = param || {};
                if (!param) {
                    fetchArgs[this.fetchAttrName] = this.fetchArgsSaved;
                }
                fetchArgs[attrName] = value;
            }
            else {
                fetchArgs = param || this.fetchArgsSaved;
            }
        }
        return fetchArgs;
    };
    return DataSource;
}(events.EventEmitter));
exports.DataSource = DataSource;



/***/ }),

/***/ 326:
/***/ (function(module, exports, __webpack_require__) {

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
var tslib_1 = __webpack_require__(0);
/**
 * hornet-js-react-components - Ensemble des composants web React de base de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.0
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
var React = __webpack_require__(2);
var hornet_component_1 = __webpack_require__(4);
var classNames = __webpack_require__(19);
/**
 * Composant Button
 */
var Button = /** @class */ (function (_super) {
    tslib_1.__extends(Button, _super);
    function Button(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.state.effect = false;
        _this.state.css = { dislay: "none" };
        return _this;
    }
    /**
     * @inheritDoc
     */
    Button.prototype.render = function () {
        return ((this.state.type === "link") ? this.renderLink() : this.renderButton());
    };
    /**
     * Rendu type Button
     * @returns {any}
     * @private
     */
    Button.prototype.renderButton = function () {
        var classes = {};
        if (this.state.className) {
            classes[this.state.className] = true;
        }
        return (React.createElement("button", { type: this.state.type, id: this.state.id, name: this.state.name, value: this.state.value, onClick: this.handleClick, className: classNames(classes), title: this.state.title, disabled: this.state.disabled, "aria-haspopup": this.props.hasPopUp },
            this.state.label,
            this.state.effect ? React.createElement("div", { className: "ripple-effect", style: this.state.css }) : null));
    };
    /**
     * Rendu Type Link
     * @returns {any}
     * @private
     */
    Button.prototype.renderLink = function () {
        var classes = {};
        if (this.state.className) {
            classes[this.state.className] = true;
        }
        return (React.createElement("a", { href: this.state.url, className: classNames(classes), title: this.state.title, onClick: this.linkHandleClick, disabled: this.state.disabled },
            this.state.label,
            this.state.effect ? React.createElement("div", { className: "ripple-effect", style: this.state.css }) : null));
    };
    /**
     * Evènement déclenché lors du clic sur le bouton
     * @param e
     * @private
     */
    Button.prototype.handleClick = function (e) {
        if (this.state.onClick != null) {
            this.state.onClick(e);
        }
        this.rippleEffect(e);
    };
    Button.prototype.linkHandleClick = function (e) {
        this.rippleEffect(e);
    };
    /**
     * Effet activé lors d'un lcick sur un bouton
     * @param e
     */
    Button.prototype.rippleEffect = function (e) {
        var _this = this;
        var xPos = e.pageX - e.target.offsetLeft;
        var yPos = e.pageY - e.target.offsetTop;
        var size = e.target.clientHeight;
        var css = ({
            top: yPos - (size / 2),
            left: xPos - (size / 2),
            height: size + "px",
            width: size + "px"
        });
        this.setState({ effect: true, css: css });
        setTimeout(function () {
            if (_this.mounted) {
                _this.setState({ effect: false });
            }
        }, 1500);
    };
    Button.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        this.mounted = false;
    };
    Button.defaultProps = {
        disabled: false
    };
    return Button;
}(hornet_component_1.HornetComponent));
exports.Button = Button;



/***/ }),

/***/ 327:
/***/ (function(module, exports, __webpack_require__) {

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
var tslib_1 = __webpack_require__(0);
var hornet_component_1 = __webpack_require__(4);
var form_utils_1 = __webpack_require__(330);
var hornet_js_utils_1 = __webpack_require__(1);
var logger = hornet_js_utils_1.Utils.getLogger("hornet-js-react-components.widget.form.dom-adapter");
/**
 * Adaptateur DOM pour un champ de formulaire
 */
var DomAdapter = /** @class */ (function (_super) {
    tslib_1.__extends(DomAdapter, _super);
    function DomAdapter(props, context) {
        return _super.call(this, props, context) || this;
    }
    DomAdapter.prototype.getElementType = function (elt) {
        var tag = this.htmlElement.tagName.toLowerCase();
        var type = null;
        if (tag == "input") {
            type = this.htmlElement["type"];
        }
        else if (tag == "textarea") {
            type = "textarea";
        }
        else if (tag == "select") {
            type = "select";
        }
        return type;
    };
    DomAdapter.prototype.getHornetForm = function () {
        if (this.htmlElement) {
            return this.htmlElement.form.__component;
        }
        else {
            return this.multipleElement[0].form.__component;
        }
    };
    DomAdapter.prototype.registerHtmlElement = function (elt) {
        if (elt == null) {
            if (this.htmlElement) {
                this.htmlElement["__component"] = null;
            }
            this.name = null;
            this.type = null;
            this.htmlElement = null;
        }
        else {
            if (this.htmlElement) {
                this.addHtmlElement(elt);
            }
            else {
                this.htmlElement = elt;
                this.name = this.htmlElement.name;
                this.type = this.getElementType(elt);
                this.htmlElement["__component"] = this;
            }
        }
    };
    DomAdapter.prototype.addHtmlElement = function (elt) {
        if (this.htmlElement) {
            var type = this.getElementType(elt);
            if (this.type == type && type == "radio") {
                this.multipleElement = [];
                this.multipleElement.push(this.htmlElement);
                elt["__component"] = this;
                this.multipleElement.push(elt);
                this.htmlElement = null;
            }
            else {
                logger.error("DomAdapter.addHtmlElement > different or unallowed types : " + this.type + " and " + type);
            }
        }
        else {
            elt["__component"] = this;
            this.multipleElement.push(elt);
        }
    };
    /**
     * Renvoie la valeur de la propriété HTML indiquée
     * @param name nom de la propriété
     * @returns {string} la valeur ou null si la propriété n'est pas définie
     */
    DomAdapter.prototype.getAttribute = function (name) {
        return this.htmlElement.getAttribute(name);
    };
    /**
     * Initialise la propriété HTML avec la valeur indiquée
     * @param name nom de la propriété
     * @param value valeur
     * @returns {DomAdapter} cette instance
     */
    DomAdapter.prototype.setAttribute = function (name, value) {
        if (this.htmlElement) {
            this.htmlElement.setAttribute(name, value);
        }
        else if (this.multipleElement) {
            for (var i = 0; i < this.multipleElement.length; i++) {
                this.multipleElement[i].setAttribute(name, value);
            }
        }
        return this;
    };
    /**
     * Pour une case à cocher, initialise la propriété checked
     * @param value booléen
     * @returns {DomAdapter} cette instance
     */
    DomAdapter.prototype.setCurrentChecked = function (value) {
        if (this.htmlElement && this.type == "checkbox") {
            this.htmlElement.checked = value;
        }
        return this;
    };
    /**
     * Initialise la valeur courante du champ de formulaire
     * @param value valeur à utiliser
     * @returns {DomAdapter} cette instance
     */
    DomAdapter.prototype.setCurrentValue = function (value) {
        var _this = this;
        var strValue = (value != null && value.toString) ? value.toString() : "";
        var type = this.type;
        if (type) {
            type = type.toLowerCase();
        }
        if (this.htmlElement) {
            if (type == "text" || type == "textarea" || type == "hidden" || type == "checkbox"
                || (type == "select" && this.htmlElement.multiple === false)) {
                this.htmlElement.value = (this.htmlElement.dataset && this.htmlElement.dataset.multiple === "true") ? (value ? JSON.stringify(value) : "") : strValue;
            }
            else if (type == "select" /*select multiple*/) {
                if (value instanceof Array) {
                    this.htmlElement.value = null;
                    value.forEach(function (val) {
                        for (var i = 0; i < _this.htmlElement.options.length; i++) {
                            if (_this.htmlElement.options[i].value == val) {
                                _this.htmlElement.options[i].selected = true;
                                return;
                            }
                        }
                    });
                }
                else {
                    this.htmlElement.value = value;
                }
            }
        }
        else if (this.multipleElement) {
            for (var i = 0; i < this.multipleElement.length; i++) {
                if (this.multipleElement[i].value == strValue) {
                    this.multipleElement[i].checked = true;
                }
                else {
                    this.multipleElement[i].checked = false;
                }
            }
        }
        return this;
    };
    /**
     * Renvoie la valeur courante du champ de formulaire
     * @returns {null}
     */
    DomAdapter.prototype.getCurrentValue = function () {
        var val = null;
        if (this.htmlElement) {
            var type = this.type;
            if (type) {
                type = type.toLowerCase();
            }
            if (type == "text" || type == "textarea" || type == "hidden"
                || (type == "select" && this.htmlElement.multiple === false)) {
                try {
                    if (Array.isArray(JSON.parse(this.htmlElement.value))) {
                        val = JSON.parse(this.htmlElement.value);
                    }
                    else {
                        val = this.htmlElement.value;
                    }
                }
                catch (e) {
                    val = this.htmlElement.value;
                }
            }
            else if (type == "select" /*select multiple*/) {
                val = [];
                /* Note : l'attribut selectedOptions n'est pas supporté par Internet Explorer */
                for (var i = 0; i < this.htmlElement.options.length; i++) {
                    var option = this.htmlElement.options[i];
                    if (option.selected) {
                        val.push(option.value);
                    }
                }
            }
            else if (type == "checkbox") {
                // if(!_.isEmpty(this.htmlElement.value) && this.htmlElement.value != "on") {
                //     /* Cas où une valeur est explicitement spécifiée */
                //     if (this.htmlElement.checked) {
                //         val = this.htmlElement.value;
                //     } else {
                //         val = "";
                //     }
                // } else {
                /* Pas de valeur spécifique : la valeur est un booléen égal à checked */
                val = this.htmlElement.checked;
                // }
            }
            else if (type == "file") {
                var fileList = this.htmlElement.files;
                if (fileList && fileList.length >= 1) {
                    /* Pour simplifier la validation et la transmission via super-agent,
                     un seul fichier par champ de type "file" est pris en compte */
                    val = fileList[0];
                }
                else {
                    /* Aucun fichier n'a été sélectionné : on récupère les informations de celui qui avait
                     éventuellement déjà été transmis */
                    // TODO à réactiver : voir pourquoi le composant UploadFileField ne peut être utilisé
                    val = form_utils_1.FormUtils.extractFileData(this.htmlElement);
                }
            }
        }
        else if (this.multipleElement) {
            for (var i = 0; i < this.multipleElement.length; i++) {
                if (this.multipleElement[i].checked) {
                    val = this.multipleElement[i].value;
                    break;
                }
            }
        }
        return val;
    };
    /**
     * Bascule le champ en readOnly
     * @param value valeur à utiliser
     * @returns {DomAdapter} cette instance
     */
    DomAdapter.prototype.setReadOnly = function (value) {
        if (this.htmlElement) {
            this.htmlElement.readOnly = value;
            if (value) {
                this.htmlElement.classList.add("readonly");
            }
            else {
                this.htmlElement.classList.remove("readonly");
            }
        }
        return this;
    };
    /**
     * Bascule le champ en readOnly
     * @param value valeur à utiliser
     * @returns {DomAdapter} cette instance
     */
    DomAdapter.prototype.setDisabled = function (value) {
        if (this.htmlElement) {
            this.htmlElement.disabled = value;
        }
        return this;
    };
    return DomAdapter;
}(hornet_component_1.HornetComponent));
exports.DomAdapter = DomAdapter;



/***/ }),

/***/ 328:
/***/ (function(module, exports, __webpack_require__) {

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
var tslib_1 = __webpack_require__(0);
var _ = __webpack_require__(6);
var promise_api_1 = __webpack_require__(20);
var datasource_1 = __webpack_require__(325);
var technical_error_1 = __webpack_require__(11);
var codes_error_1 = __webpack_require__(47);
var hornet_js_utils_1 = __webpack_require__(1);
var array_utils_1 = __webpack_require__(314);
var logger = hornet_js_utils_1.Utils.getLogger("hornet-js-core.component.datasource.paginate-datasource");
exports.ITEMS_PER_PAGE_ALL = 2147483647;
/**
 * @enum enumeration pour la navigation dans le paginateur
 */
var Direction;
(function (Direction) {
    Direction[Direction["PREVIOUS"] = -1] = "PREVIOUS";
    Direction[Direction["NEXT"] = -2] = "NEXT";
    Direction[Direction["FIRST"] = -3] = "FIRST";
    Direction[Direction["LAST"] = -4] = "LAST";
})(Direction = exports.Direction || (exports.Direction = {}));
/***
 * @classdesc Classe de representation d'une pagination
 * @class
  */
var Paginator = /** @class */ (function () {
    /**
     * @constructs
     * @param {Pagination} pagination configuration de la pagination
     */
    function Paginator(pagination) {
        this._pagination = pagination;
        this.items = [];
    }
    Object.defineProperty(Paginator.prototype, "pagination", {
        get: function () {
            return this._pagination;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Paginator.prototype, "sort", {
        get: function () {
            return this._sort;
        },
        set: function (sort) {
            this._sort = sort;
        },
        enumerable: true,
        configurable: true
    });
    Paginator.prototype.calculateNbPages = function (itemsTot) {
        var nbTot = itemsTot || this._pagination.totalItems;
        return _.round(nbTot / this._pagination.itemsPerPage) + ((nbTot % this._pagination.itemsPerPage) > 0 ? 1 : 0);
    };
    /**
     * Methode de gestion de la pagination
     * @param {(number|Direction)} page numero de la page ou la direction, première page à index 1.
     */
    Paginator.prototype.paginate = function (page) {
        if (page > 0) {
            this._pagination.pageIndex = page;
        }
        else if (page >= Direction.LAST && page < 0) {
            switch (page) {
                case Direction.FIRST:
                    this._pagination.pageIndex = 1;
                    break;
                case Direction.LAST:
                    this._pagination.pageIndex = this.items.length;
                    break;
                case Direction.PREVIOUS:
                    this._pagination.pageIndex = this._pagination.pageIndex - 1;
                    break;
                case Direction.NEXT:
                    this._pagination.pageIndex = this._pagination.pageIndex + 1;
                    break;
            }
        }
        else if (page < Direction.LAST) {
            //TODO throw
        }
        return this.extractPage(null, false);
    };
    /**
     * Extraction des données de la page de pagination
     * @param {Array<T>} itemsTot liste pour vant servir pour l'extraction
     * @param {boolean} forceUpdate force la mise a jour et va lire de itemsTot sinon prend dans la variable d'instance
     */
    Paginator.prototype.extractPage = function (itemsTot, forceUpdate) {
        if (forceUpdate === void 0) { forceUpdate = false; }
        var page = [];
        if (!forceUpdate && this.items.length >= this._pagination.pageIndex) {
            page = this.items[this._pagination.pageIndex];
        }
        else if (itemsTot && this._pagination.itemsPerPage) {
            page = itemsTot;
            if (this._pagination.pageIndex) {
                page = page.slice((this._pagination.pageIndex - 1) * this._pagination.itemsPerPage);
                page = page.slice(0, this._pagination.itemsPerPage);
            }
            this.items[this._pagination.pageIndex] = page;
        }
        return page;
    };
    /**FIRST
     * Change le nombre d'items par page
     * @param {number} itemsPerPage nombre d'items par page
     */
    Paginator.prototype.setItemsPerPage = function (itemsPerPage) {
        this._pagination.itemsPerPage = itemsPerPage;
        this._pagination.pageIndex = 1;
        this.items = [];
    };
    Paginator.prototype.reset = function () {
        this._pagination.pageIndex = 1;
        this.items = [];
        this._pagination.totalItems = 0;
        this._pagination.nbPages = 0;
    };
    /**
     * initialise les differentes pages suivant l'objet de pagination
     * @param {Array<T>} itemsTot liste des items à decouper en page
     * @param {number} totalItems nombre total d'items (pagination serveur)
     */
    Paginator.prototype.preparePagination = function (itemsTot, totalItems) {
        this.paginate(Direction.FIRST);
        while (this.extractPage(itemsTot, true).length == this._pagination.itemsPerPage) {
            this.paginate(Direction.NEXT);
        }
        this.paginate(Direction.FIRST);
        this._pagination.totalItems = totalItems || itemsTot.length;
        //this._pagination.nbPages = this.items.length / this._pagination.itemsPerPage;
        this._pagination.nbPages = this.calculateNbPages();
    };
    /**
     * initialise les differentes pages suivant l'objet de pagination
     * @param {Array<T>} itemsTot liste des items à decouper en page
     * @param {number} totalItems nombre total d'items (pagination serveur)
     */
    Paginator.prototype.setCurrentPage = function (items, totalItems) {
        this.extractPage(items, true);
        this._pagination.totalItems = totalItems || items.length;
        this._pagination.nbPages = this.calculateNbPages();
    };
    return Paginator;
}());
exports.Paginator = Paginator;
/***
 * @classdesc Classe de base des datasources
 * elle contient une methode pour récupérer des datas, varie selon le type de datasource;
 * elle implémente une methode qui transforme les données récupérées selon une classe de mapping  {@link DataSourceMap} afin de l'exploiter directement par l'IHM.
 * @class
 * @extends EventEmitter
 */
var PaginateDataSource = /** @class */ (function (_super) {
    tslib_1.__extends(PaginateDataSource, _super);
    /***
     * @param {(DataSourceConfig|DataSourceConfigPage|Array<T>)} config accepte soit une liste de l'éléments Array<T>, soit un service DataSourceConfig | DataSourceConfigPage
     * @param {Pagination} pagination pagination à appliquer.
     * @param {DataSourceMap} keysMap  utilisée pour la transformation des resultats du fetch.
     * @param {Object} options liste de paramètres supplémentaires à transmettre au fetch
     */
    function PaginateDataSource(config, pagination, keysMap, options) {
        var _this = _super.call(this, config, keysMap, options) || this;
        _this.config = config;
        _this.keysMap = keysMap;
        _this.options = options;
        _this._paginator = new Paginator(pagination);
        _this.initPaginateDataSource();
        _this.initSort();
        _.map(["sort", "pagination", "select", "add", "filter", "delete"], function (event) {
            _this.on(event, _this.saveSelected);
        });
        return _this;
    }
    PaginateDataSource.prototype.initPaginateDataSource = function () {
        if (this.isDataSourceArray) {
            (this.initAsync && this.initAsync.isAsync) ? this.initData() : this.initDataSync() && this.updatePaginator(this._results);
        }
    };
    /***
     * Méthode qui déclenche un fetch appelé pour initialiser un datasource.
     * @param {any} args  paramètres à renseigner pour l'appel de la méthode de récupération des données.
     * Déchenche un event init
     */
    PaginateDataSource.prototype.init = function (args) {
        //pour le paginate-datasource on fera plutot un initPaginateDataSource
    };
    Object.defineProperty(PaginateDataSource.prototype, "pagination", {
        get: function () {
            return this._paginator.pagination;
        },
        set: function (pagination) {
            this._paginator = new Paginator(pagination);
        },
        enumerable: true,
        configurable: true
    });
    PaginateDataSource.prototype.updatePaginator = function (items, totalItems) {
        if (this.isDataSourceArray) {
            this._paginator.preparePagination(items, totalItems);
        }
        else {
            this._paginator.setCurrentPage(items, totalItems);
        }
    };
    /***
     * Réinitialise la pagination et envoie un event de pagination
     */
    PaginateDataSource.prototype.initPaginator = function () {
        this.emit("pagination", {
            list: this.results, pagination: {
                pageIndex: 0,
                itemsPerPage: this._paginator.pagination.itemsPerPage,
                totalItems: 0
            }
        });
    };
    /***
     * Réinitialise le sort
     */
    PaginateDataSource.prototype.initSort = function () {
        this._paginator.sort = this.defaultSort ? this.defaultSort.sort : null;
    };
    /***
     * @inheritdoc
     */
    PaginateDataSource.prototype.deleteAll = function () {
        _super.prototype.deleteAll.call(this);
        this.initSort();
        this.initPaginator();
    };
    /***
     * @inheritdoc
     * @param {boolean} reloadPage indicateur pour recharger la page en cours, sinon ce sera la première page.
     */
    PaginateDataSource.prototype.reload = function (reloadPage, forceUpdate) {
        if (reloadPage === void 0) { reloadPage = false; }
        if (forceUpdate === void 0) { forceUpdate = false; }
        this.initSort();
        this.updatePaginator(this.results, this._paginator.pagination.totalItems);
        reloadPage ? this.reloadPage(forceUpdate) : this.goToPage(Direction.FIRST);
    };
    /***
     * @inheritdoc
     */
    PaginateDataSource.prototype.fetch = function (triggerFetch, args, noSave) {
        if (!noSave) {
            this.fetchArgsSaved = args;
            args = this.getFetchArgs("pagination", this.pagination);
        }
        return _super.prototype.fetch.call(this, triggerFetch, args, true);
    };
    /***
     * @inheritdoc
     */
    PaginateDataSource.prototype.fetchData = function (triggerFetch, args) {
        var _this = this;
        return _super.prototype.fetchData.call(this, triggerFetch, this._paginator.sort ? _.extend(this.getFetchArgs("sort", this._paginator.sort), args) : args)
            .then(function (results) {
            _this.pagination.pageIndex = _this.pagination.pageIndex || 1;
            _this.updatePaginator(_this._results, _this._paginator.pagination.totalItems);
            //this.emit('pagination', {list: results, pagination: this._paginator.pagination});
            return results;
        });
    };
    /***
     * méthode qui appelle (juste après un fetch) la fonction de {@link Datasource#transformData} et déclenche un evènement "fetch" lorsque les données sont disponibles
     * @param result les données brutes.
     * @return renvoie les données transformées à partir des données brutes et la classe de mapping  {@link DataSourceMap}
     */
    PaginateDataSource.prototype.transformData = function (result) {
        var data = result[0];
        if (data["errors"]) {
            var error = new technical_error_1.TechnicalError("ERR_TECH_" + codes_error_1.CodesError.DATASOURCE_RESPONSE_ERROR, data["errors"]);
            this.emit("error", error);
            throw error;
        }
        if (!this.isDataSourceArray) {
            if (!data) {
                this._paginator.pagination.totalItems = 0;
                this._paginator.pagination.pageIndex = 1;
                return _super.prototype.transformData.call(this, []);
            }
            else {
                this._paginator.pagination.totalItems = data["nbTotal"];
                this._paginator.pagination.pageIndex = data["pagination"].pageIndex;
                return _super.prototype.transformData.call(this, data["liste"]);
            }
        }
        else {
            return _super.prototype.transformData.call(this, data);
        }
    };
    /***
     * @inheritdoc
     */
    PaginateDataSource.prototype.sort = function (sort, compare) {
        var _this = this;
        this.emit("loadingData", true);
        this._paginator.sort = sort;
        promise_api_1.Promise.resolve().then(function () {
            try {
                if (_this.isDataSourceArray) {
                    _super.prototype.sortData.call(_this, sort, compare || _this.defaultSort);
                    _this.updatePaginator(_this._results);
                    var firstPage = _this._paginator.paginate(1);
                    _this.emit("sort", firstPage, sort);
                    return firstPage;
                }
                else {
                    return _this.fetchData(false, _this.getFetchArgs("pagination", _this.pagination))
                        .then(function (results) {
                        _this.emit("sort", results, sort);
                        return results;
                    });
                }
            }
            catch (e) {
                var error = new technical_error_1.TechnicalError("ERR_TECH_" + codes_error_1.CodesError.DATASOURCE_SORT_ERROR, null, e);
                _this.emit("error", error);
                throw error;
            }
        }).finally(function () {
            _this.emitEvent("loadingData", false);
        });
    };
    /***
     * Renvoie un sous-ensemble des resultats filtrés
     * @param config correspond soit aux critères de filtrage soit à une fonction (appelée à chaque itération) {@link https://lodash.com/docs/#filter}
     * @param cancelFilterHistory false si on souhaite garder un historique des filtres true sinon. false par défaut
     * @example
     * dataSource.on("filter", (filteredResult)=>{
     *       //staff
     *   })
     * dataSource.filter(config, cancelFilterHistory);
     * @void
     */
    PaginateDataSource.prototype.filter = function (config, cancelFilterHistory) {
        var _this = this;
        if (cancelFilterHistory === void 0) { cancelFilterHistory = false; }
        this.emit("loadingData", true);
        if (this.isDataSourceArray) {
            if (cancelFilterHistory) {
                if (!this._filtering_flag) {
                    //backup
                    this._results_backup = this._results;
                    this._filtering_flag = true;
                }
                else {
                    //restore
                    this._results = this._results_backup;
                }
            }
        }
        promise_api_1.Promise.resolve().then(function () {
            try {
                if (_this.isDataSourceArray) {
                    _this._results = _.filter(_this.results, config);
                    _this.updatePaginator(_this._results);
                    _this.goToPage(Direction.FIRST);
                }
                else {
                    _this.fetchData(false, _this.getFetchArgs("filter", config)).then(function () {
                        _this.emitEvent("filter", _this.results);
                    });
                }
            }
            catch (e) {
                var error = new technical_error_1.TechnicalError("ERR_TECH_" + codes_error_1.CodesError.DATASOURCE_FILTER_ERROR, null, e);
                _this.emit("error", error);
                throw error;
            }
        }).finally(function () {
            _this.emitEvent("loadingData", false);
        });
    };
    /***
     * Ajout un élément ou des éléments au result du datasource
     * cette action déclenche l'évènement pagination.
     * @param {Boolean} triggerFetch déclenche un évènement "fetch" après l'opération si true.
     * @param {(T|T[])[]} items correspond aux données à ajouter, un appel à la méthode {@link DataSource#transformData} sera effectué
     * @example
     * dataSource.on("add", (IncreasedResult)=>{
     *       //staff
     *   })
     * dataSource.add();
     * @void
     */
    PaginateDataSource.prototype.add = function (triggerFetch) {
        var items = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            items[_i - 1] = arguments[_i];
        }
        this.addData.apply(this, [false].concat(items));
    };
    /***
     * @inheritdoc
     */
    PaginateDataSource.prototype.addData = function (triggerFetch) {
        var _this = this;
        if (triggerFetch === void 0) { triggerFetch = false; }
        var items = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            items[_i - 1] = arguments[_i];
        }
        return _super.prototype.addData.apply(this, [false].concat(items)).then(function (result) {
            if (result.length != 0) {
                _this.updatePaginator(_this._results);
                _this.goToPage(Direction.FIRST);
            }
            return result;
        });
    };
    /***
     * @inheritdoc
     */
    PaginateDataSource.prototype.deleteData = function (triggerFetch) {
        var _this = this;
        if (triggerFetch === void 0) { triggerFetch = false; }
        var items = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            items[_i - 1] = arguments[_i];
        }
        return _super.prototype.deleteData.apply(this, [false].concat(items)).then(function (result) {
            _this.updatePaginator(_this._results);
            _this.goToPage(Direction.FIRST);
            return result;
        });
    };
    /***
     * enlève un élément ou des éléments au result du datasource
     * cette action déclenche l'évènement pagination
     * @param {Boolean} triggerFetch déclenche un évènement "fetch" après l'opération si true.
     * @param {(T|T[])[]} items correspond aux données à ajouter, un appel à la méthode {@link DataSource#transformData} sera effectué
     * @void
     */
    PaginateDataSource.prototype.delete = function (triggerFetch) {
        var items = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            items[_i - 1] = arguments[_i];
        }
        this.deleteData.apply(this, [false].concat(items));
    };
    /**
     * navigue vers une page
     * @param {(number|Direction)} page la page a extraire
     */
    PaginateDataSource.prototype.goToPage = function (page) {
        var _this = this;
        if (this.isDataSourceArray) {
            this.emit("loadingData", true);
            this.emit("pagination", { list: this._paginator.paginate(page), pagination: this._paginator.pagination });
            this.emit("loadingData", false);
        }
        else {
            this._paginator.paginate(page);
            this.fetchData(false, this.getFetchArgs("pagination", this.pagination)).then(function (results) {
                _this.emit("pagination", { list: results, pagination: _this._paginator.pagination });
            });
        }
    };
    /**
     * retourne les items d'une page en particulier
     * @param {(number|Direction)} page la page a extraire
     */
    PaginateDataSource.prototype.getItemsByPage = function (page) {
        return this._paginator.paginate(page);
    };
    /**
     * redéclanche la navigation de la page en cours, si la page en cours n'est pas initialisé ou va sur la première
     * @param {boolean} forceUpdate indicateur pour redéclancher le requêtage
     */
    PaginateDataSource.prototype.reloadPage = function (forceUpdate) {
        if (forceUpdate === void 0) { forceUpdate = false; }
        if (forceUpdate) {
            this.goToPage(this.pagination.pageIndex || Direction.FIRST);
        }
        else {
            this.emit("pagination", { list: this._results, pagination: this._paginator.pagination });
        }
    };
    /**
     * change le nombre d'items par page
     * @param {number} itemsPerPage items par page
     */
    PaginateDataSource.prototype.updatePerPage = function (itemsPerPage) {
        var _this = this;
        if (this.isDataSourceArray) {
            this.pagination.itemsPerPage = itemsPerPage;
            this.updatePaginator(this._results);
            this.emit("pagination", { list: this._paginator.paginate(Direction.FIRST), pagination: this._paginator.pagination });
        }
        else {
            this.pagination.itemsPerPage = itemsPerPage;
            this._paginator.paginate(Direction.FIRST);
            this.fetchData(true, { criteres: this.fetchArgsSaved, pagination: this.pagination }).then(function (results) {
                _this.emit("pagination", { list: results, pagination: _this._paginator.pagination });
            });
        }
    };
    /***
     * @inheritdoc
     */
    PaginateDataSource.prototype.getFetchArgs = function (attrName, value, param) {
        var fetchArgs = param || {};
        if (!param && this.fetchArgsSaved) {
            fetchArgs[this.fetchAttrName] = this.fetchArgsSaved;
        }
        if (value) {
            fetchArgs[attrName] = value;
        }
        return fetchArgs;
    };
    /***
     * Supprime toute sélection dans le datasource.
     * @void
     */
    PaginateDataSource.prototype.selectClean = function (flag) {
        _super.prototype.selectClean.call(this, flag);
        this._paginator.reset();
    };
    /**
     * Sélectionne des items dans le datasource.
     * Dans le cadre d'un datasource paginate, les items devront obligatoirement avoir un attribut id pour être pris en compte.
     * @param {any[]} items les éléments à sélectionnés dans le datasource.
     * @param index de la ligne selectionnée
     */
    PaginateDataSource.prototype.select = function (items) {
        var temp = [];
        if (items)
            _.forEach(items, function (item) {
                if (item.id) {
                    temp.push(item);
                }
            });
        this._currentItemSelected = temp;
        this.emit('select', this._currentItemSelected);
    };
    /**
     * Enregistre la sélection courante dans le datasource.
     */
    PaginateDataSource.prototype.saveSelected = function () {
        this._selected = this.getAllSelected();
        this._currentItemSelected = null;
    };
    /**
     * Récupère la sélection courante + la selection existante
     * @returns {any}
     */
    PaginateDataSource.prototype.getAllSelected = function () {
        var result;
        if (this._selected && this._selected instanceof Array) {
            result = array_utils_1.ArrayUtils.unionWith(this._selected, this._currentItemSelected);
        }
        else {
            result = this._currentItemSelected;
        }
        return result;
    };
    Object.defineProperty(PaginateDataSource.prototype, "selected", {
        /**
         * renvoie les valeurs sélectionnées du datasource.
         */
        get: function () {
            return this.getAllSelected();
        },
        enumerable: true,
        configurable: true
    });
    return PaginateDataSource;
}(datasource_1.DataSource));
exports.PaginateDataSource = PaginateDataSource;



/***/ }),

/***/ 329:
/***/ (function(module, exports, __webpack_require__) {

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
var tslib_1 = __webpack_require__(0);
/**
 * hornet-js-react-components - Ensemble des composants web React de base de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.0
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
var React = __webpack_require__(2);
var hornet_component_1 = __webpack_require__(4);
var abstract_field_1 = __webpack_require__(311);
var classNames = __webpack_require__(19);
var _ = __webpack_require__(6);
/**
 * Composant représentant les buttons d'action du formulaire
 */
var ButtonsArea = /** @class */ (function (_super) {
    tslib_1.__extends(ButtonsArea, _super);
    function ButtonsArea(props, context) {
        return _super.call(this, props, context) || this;
    }
    /**
     * Génère la configuration des boutons par défaut : "Valider" de type "submit" et "Annuler" de type "reset".
     * @returns {*[]}
     */
    ButtonsArea.prototype.getDefaultButtons = function () {
        return [
            {
                type: "submit",
                id: "form_btnValider",
                name: "action:valid",
                value: this.i18n("form").valid,
                className: "hornet-button",
                label: this.i18n("form").valid,
                title: this.i18n("form").validTitle
            },
            {
                type: "reset",
                id: "form_btnCancel",
                name: "action:cancel",
                value: this.i18n("form").cancel,
                className: "hornet-button",
                onClick: null,
                label: this.i18n("form").cancel,
                title: this.i18n("form").cancelTitle
            }
        ];
    };
    /**
     * @inheritDoc
     */
    ButtonsArea.prototype.render = function () {
        var buttons;
        if (!this.state.children) {
            buttons = this.getDefaultButtons();
        }
        var classList = {
            "button-area": true,
            "grid": true,
            "has-gutter": ((this.state.children) && (this.state.children.length > 1)) ? true : false,
            "flex-container": true
        };
        if (this.props.className)
            classList[this.props.className] = true;
        var width = this.props.width + "%";
        return (React.createElement("div", { className: classNames(classList), style: { width: width } }, this.state.children));
    };
    ButtonsArea.defaultProps = _.assign(_.cloneDeep(abstract_field_1.AbstractField.defaultProps), {
        width: 100
    });
    return ButtonsArea;
}(hornet_component_1.HornetComponent));
exports.ButtonsArea = ButtonsArea;



/***/ }),

/***/ 330:
/***/ (function(module, exports, __webpack_require__) {

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
var notification_manager_1 = __webpack_require__(125);
var _ = __webpack_require__(6);
var IntlMessageFormat = __webpack_require__(130);
var FormUtils = /** @class */ (function () {
    function FormUtils() {
    }
    /**
     * Extrait le nom du champ depuis l'erreur de validation indiquée
     * Le nom du champ peut être un "path" tel que "ville.pays.id".
     * @param error une erreur de validation ajv
     * @return le nom du champ, ou une chaîne vide si non renseigné
     */
    FormUtils.extractFieldName = function (error) {
        var fieldName = "";
        if (error) {
            if (error.dataPath && error.dataPath.length > 1) {
                var offset = 0;
                if (error.dataPath.charAt(0) == ".") {
                    offset = 1;
                }
                fieldName = error.dataPath.substring(offset);
            }
            if (error.keyword == "required") {
                if (error.params && error.params.missingProperty) {
                    if (fieldName) {
                        fieldName += ".";
                    }
                    fieldName += error.params.missingProperty;
                }
            }
        }
        return fieldName;
    };
    /**
     * Génère le message d'erreur correspondant au mot-clé et au champ indiqués
     * @param keyword mot clé de validation json-schema
     * @param fieldName nom du champ (peut être un "path" tel que "ville.pays.id")
     * @param fieldsMessages messages spécifiques aux champs du formulaire
     * @param genericValidationMessages messages d'erreur génériques
     * @param complement
     * @return le message ou undefined lorsqu'aucun n'est défini pour le mot-clé indiqué
     */
    FormUtils.extractMessage = function (keyword, fieldName, fieldsMessages, genericValidationMessages, complement) {
        var message;
        var specificMessage = _.get(fieldsMessages, fieldName + "." + keyword);
        if (_.isString(specificMessage)) {
            message = specificMessage;
            if (complement) {
                complement["field"] = fieldName;
                var intlMsg = new IntlMessageFormat(specificMessage);
                message = intlMsg.format(complement);
            }
        }
        else if (genericValidationMessages) {
            var genericMessage = genericValidationMessages[keyword] || genericValidationMessages["generic"];
            if (_.isString(genericMessage)) {
                var intlMsg = new IntlMessageFormat(genericMessage);
                message = intlMsg.format({ field: fieldName });
            }
        }
        return message;
    };
    /**
     * Traite les erreurs de validation de formulaire : renvoie des notifications d'erreur.
     * @param errors liste d'erreurs éventuellement vide
     * @param fields Liste des champs du formulaire
     * @param fieldsMessages messages spécifiques aux champs du formulaire
     * @param genericValidationMessages messages d'erreur génériques
     * @return {Notifications} les notifications correspondant aux erreurs de validation
     */
    FormUtils.getErrors = function (errors, fields, fieldsMessages, genericValidationMessages) {
        var notificationsError = new notification_manager_1.Notifications();
        for (var index = 0; index < errors.length; index++) {
            var error = errors[index];
            var erreurNotification = new notification_manager_1.NotificationType();
            erreurNotification.id = "ACTION_ERREUR_" + index;
            erreurNotification.text = error.message;
            var fieldName = FormUtils.extractFieldName(error);
            if (fieldName) {
                erreurNotification.anchor = fieldName + "_anchor";
                erreurNotification.field = fieldName;
                erreurNotification.additionalInfos = error.params;
                var complement = {};
                // Gestion des champs editables d'un tableau
                if (fields[fieldName] && fields[fieldName].props && fields[fieldName].props.title) {
                    var data = fieldName.split(".");
                    if (!isNaN(data[data.length - 2])) {
                        fieldName = data[data.length - 1];
                        complement = { complement: (parseInt(data[data.length - 2]) + 1).toString() };
                    }
                }
                var message = FormUtils.extractMessage(error.keyword, fieldName, fieldsMessages, genericValidationMessages, complement);
                if (message) {
                    /* Surcharge du message produit par ajv */
                    erreurNotification.text = message;
                }
            }
            notificationsError.addNotification(erreurNotification);
        }
        return notificationsError;
    };
    /**
     * Récupère les informations du fichier éventuellement déjà sélectionné associé à un champ de type "file"
     * @param inputItem champ de formulaire de type envoi de fichier
     * @returns {UploadedFile} une instance de UploadedFile ou undefined
     */
    FormUtils.extractFileData = function (inputItem) {
        var selectedFile;
        if (inputItem.dataset && inputItem.dataset["fileId"]) {
            selectedFile = {
                id: parseInt(inputItem.dataset["fileId"]),
                originalname: inputItem.dataset["fileOriginalname"],
                name: inputItem.dataset["fileName"],
                mimeType: inputItem.dataset["fileMimeType"],
                encoding: inputItem.dataset["fileEncoding"],
                size: parseInt(inputItem.dataset["fileSize"]),
                buffer: null
            };
        }
        return selectedFile;
    };
    return FormUtils;
}());
exports.FormUtils = FormUtils;



/***/ }),

/***/ 331:
/***/ (function(module, exports, __webpack_require__) {

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
var tslib_1 = __webpack_require__(0);
/**
 * hornet-js-react-components - Ensemble des composants web React de base de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.0
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
var React = __webpack_require__(2);
var hornet_component_1 = __webpack_require__(4);
/**
 * Classe permettant de générer le rendu html des colonnes
 */
var Columns = /** @class */ (function (_super) {
    tslib_1.__extends(Columns, _super);
    function Columns(props, context) {
        return _super.call(this, props, context) || this;
    }
    /**
     * @inheritDoc
     */
    Columns.prototype.render = function () {
        return (React.createElement("div", null));
    };
    return Columns;
}(hornet_component_1.HornetComponent));
exports.Columns = Columns;



/***/ }),

/***/ 332:
/***/ (function(module, exports, __webpack_require__) {

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
var tslib_1 = __webpack_require__(0);
/**
 * hornet-js-react-components - Ensemble des composants web React de base de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.0
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
var hornet_js_utils_1 = __webpack_require__(1);
var React = __webpack_require__(2);
var abstract_field_1 = __webpack_require__(311);
var spinner_component_input_1 = __webpack_require__(367);
var logger = hornet_js_utils_1.Utils.getLogger("hornet-js-react-components.widget.form.abstract-field-datasource");
/**
 * Représente un champ de formulaire qui possède un datasource
 */
var AbstractFieldDatasource = /** @class */ (function (_super) {
    tslib_1.__extends(AbstractFieldDatasource, _super);
    function AbstractFieldDatasource(props, context) {
        return _super.call(this, props, context) || this;
    }
    /**
     * Méthode qui controle l'affichage et la suppression du spinner
     * @param flag booléen true pour l'afficher false sinon
     */
    AbstractFieldDatasource.prototype.displaySpinner = function (flag) {
        this.state.inProgress = flag;
        if (!this.props.hideSpinner) {
            this.refs.spinnerLoader && this.refs.spinnerLoader.progress(flag);
            flag ? this.showSpinnerComponent() : this.hideSpinnerComponent();
        }
    };
    /**
     * @inheritDoc
     */
    AbstractFieldDatasource.prototype.componentWillMount = function () {
        _super.prototype.componentWillMount.call(this);
        if (this.props.dataSource) {
            this.setItem();
        }
    };
    /**
     * @inheritDoc
     */
    AbstractFieldDatasource.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        if (this.props.dataSource) {
            this.props.dataSource.on("fetch", this.setItem);
            this.props.dataSource.on("init", this.setItem);
            this.props.dataSource.on("add", this.setItem);
            this.props.dataSource.on("delete", this.setItem);
            this.props.dataSource.on("sort", this.setItem);
            this.props.dataSource.on("filter", this.setItem);
            this.props.dataSource.on("loadingData", this.displaySpinner);
        }
    };
    /**
     * @inheritDoc
     */
    AbstractFieldDatasource.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        if (this.props.dataSource) {
            this.props.dataSource.removeListener("fetch", this.setItem);
            this.props.dataSource.removeListener("init", this.setItem);
            this.props.dataSource.removeListener("add", this.setItem);
            this.props.dataSource.removeListener("delete", this.setItem);
            this.props.dataSource.removeListener("sort", this.setItem);
            this.props.dataSource.removeListener("filter", this.setItem);
            this.props.dataSource.removeListener("loadingData", this.displaySpinner);
        }
    };
    /**
     * enregistre la liste des choix possibles
     */
    AbstractFieldDatasource.prototype.setItem = function () {
        this.setState({ items: this.props.dataSource.results });
        /* permet de faire appel a la méthode setCurrentValue de dom-adapter pour cocher les valeurs*/
        this.setCurrentValue(this.state.currentValue);
    };
    /**
     * Méthode premettant d'afficher le spinner
     * @returns {Table}
     */
    AbstractFieldDatasource.prototype.showSpinnerComponent = function () {
        this.setState({ spinner: true });
        return this;
    };
    /**
     * Méthode premettant de masquer le spinner
     * @returns {Table}
     */
    AbstractFieldDatasource.prototype.hideSpinnerComponent = function () {
        this.setState({ spinner: false });
        return this;
    };
    AbstractFieldDatasource.prototype.setDataSource = function (value, callback) {
        /** liste des choix disponibles */
        this.setState({ dataSource: value }, callback);
        return this;
    };
    AbstractFieldDatasource.prototype.updateDataSource = function (value) {
        this.setDataSource(value);
    };
    /**
     * Génère le rendu des élements assurant la saisie des valeurs
     * @returns {any}
     */
    AbstractFieldDatasource.prototype.renderField = function () {
        return (React.createElement("div", { className: this.state.fieldClass + " abstractfield-field-content" },
            React.createElement(spinner_component_input_1.SpinnerComponentInput, { ref: "spinnerLoader", isVisible: this.state.spinner }),
            this.state.prefix ? React.createElement("span", { className: "abstractfield-field-prefix" }, this.state.prefix) : null,
            this.renderWidget(),
            this.state.suffix ? React.createElement("span", { className: "abstractfield-field-suffix" }, this.state.suffix) : null,
            this.renderErrors()));
    };
    return AbstractFieldDatasource;
}(abstract_field_1.AbstractField));
exports.AbstractFieldDatasource = AbstractFieldDatasource;



/***/ }),

/***/ 333:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var TIME = /^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d:\d\d)?$/i;
var DATE_TIME_SEPARATOR = /t|\s/i;

var COMPARE_FORMATS = {
  date: compareDate,
  time: compareTime,
  'date-time': compareDateTime
};

module.exports = function (minMax) {
  var keyword = 'format' + minMax;
  return function defFunc(ajv) {
    defFunc.definition = {
      type: 'string',
      inline: __webpack_require__(380),
      statements: true,
      errors: 'full',
      metaSchema: {
        anyOf: [
          { type: 'string' },
          {
            type: 'object',
            required: [ '$data' ],
            properties: {
              $data: {
                type: 'string',
                anyOf: [
                  { format: 'relative-json-pointer' },
                  { format: 'json-pointer' }
                ]
              }
            },
            additionalProperties: false
          }
        ]
      }
    };

    ajv.addKeyword(keyword, defFunc.definition);
    ajv.addKeyword('formatExclusive' + minMax);
    extendFormats(ajv);
    return ajv;
  };
};


function extendFormats(ajv) {
  var formats = ajv._formats;
  for (var name in COMPARE_FORMATS) {
    var format = formats[name];
    // the last condition is needed if it's RegExp from another window
    if (typeof format != 'object' || format instanceof RegExp || !format.validate)
      format = formats[name] = { validate: format };
    if (!format.compare)
      format.compare = COMPARE_FORMATS[name];
  }
}


function compareDate(d1, d2) {
  if (!(d1 && d2)) return;
  if (d1 > d2) return 1;
  if (d1 < d2) return -1;
  if (d1 === d2) return 0;
}


function compareTime(t1, t2) {
  if (!(t1 && t2)) return;
  t1 = t1.match(TIME);
  t2 = t2.match(TIME);
  if (!(t1 && t2)) return;
  t1 = t1[1] + t1[2] + t1[3] + (t1[4]||'');
  t2 = t2[1] + t2[2] + t2[3] + (t2[4]||'');
  if (t1 > t2) return 1;
  if (t1 < t2) return -1;
  if (t1 === t2) return 0;
}


function compareDateTime(dt1, dt2) {
  if (!(dt1 && dt2)) return;
  dt1 = dt1.split(DATE_TIME_SEPARATOR);
  dt2 = dt2.split(DATE_TIME_SEPARATOR);
  var res = compareDate(dt1[0], dt2[0]);
  if (res === undefined) return;
  return res || compareTime(dt1[1], dt2[1]);
}


/***/ }),

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__(321);

module.exports = function defFunc(ajv) {
  if (ajv.RULES.keywords.switch && ajv.RULES.keywords.if) return;

  var metaSchemaRef = util.metaSchemaRef(ajv);

  defFunc.definition = {
    inline: __webpack_require__(382),
    statements: true,
    errors: 'full',
    metaSchema: {
      type: 'array',
      items: {
        required: [ 'then' ],
        properties: {
          'if': metaSchemaRef,
          'then': {
            anyOf: [
              { type: 'boolean' },
              metaSchemaRef
            ]
          },
          'continue': { type: 'boolean' }
        },
        additionalProperties: false,
        dependencies: {
          'continue': [ 'if' ]
        }
      }
    }
  };

  ajv.addKeyword('switch', defFunc.definition);
  return ajv;
};


/***/ }),

/***/ 335:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__(312);

module.exports = SchemaObject;

function SchemaObject(obj) {
  util.copy(obj, this);
}


/***/ }),

/***/ 336:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function generate__limit(it, $keyword, $ruleType) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $errorKeyword;
  var $data = 'data' + ($dataLvl || '');
  var $isData = it.opts.$data && $schema && $schema.$data,
    $schemaValue;
  if ($isData) {
    out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
    $schemaValue = 'schema' + $lvl;
  } else {
    $schemaValue = $schema;
  }
  var $isMax = $keyword == 'maximum',
    $exclusiveKeyword = $isMax ? 'exclusiveMaximum' : 'exclusiveMinimum',
    $schemaExcl = it.schema[$exclusiveKeyword],
    $isDataExcl = it.opts.$data && $schemaExcl && $schemaExcl.$data,
    $op = $isMax ? '<' : '>',
    $notOp = $isMax ? '>' : '<',
    $errorKeyword = undefined;
  if ($isDataExcl) {
    var $schemaValueExcl = it.util.getData($schemaExcl.$data, $dataLvl, it.dataPathArr),
      $exclusive = 'exclusive' + $lvl,
      $exclType = 'exclType' + $lvl,
      $exclIsNumber = 'exclIsNumber' + $lvl,
      $opExpr = 'op' + $lvl,
      $opStr = '\' + ' + $opExpr + ' + \'';
    out += ' var schemaExcl' + ($lvl) + ' = ' + ($schemaValueExcl) + '; ';
    $schemaValueExcl = 'schemaExcl' + $lvl;
    out += ' var ' + ($exclusive) + '; var ' + ($exclType) + ' = typeof ' + ($schemaValueExcl) + '; if (' + ($exclType) + ' != \'boolean\' && ' + ($exclType) + ' != \'undefined\' && ' + ($exclType) + ' != \'number\') { ';
    var $errorKeyword = $exclusiveKeyword;
    var $$outStack = $$outStack || [];
    $$outStack.push(out);
    out = ''; /* istanbul ignore else */
    if (it.createErrors !== false) {
      out += ' { keyword: \'' + ($errorKeyword || '_exclusiveLimit') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: {} ';
      if (it.opts.messages !== false) {
        out += ' , message: \'' + ($exclusiveKeyword) + ' should be boolean\' ';
      }
      if (it.opts.verbose) {
        out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
      }
      out += ' } ';
    } else {
      out += ' {} ';
    }
    var __err = out;
    out = $$outStack.pop();
    if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
      if (it.async) {
        out += ' throw new ValidationError([' + (__err) + ']); ';
      } else {
        out += ' validate.errors = [' + (__err) + ']; return false; ';
      }
    } else {
      out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
    }
    out += ' } else if ( ';
    if ($isData) {
      out += ' (' + ($schemaValue) + ' !== undefined && typeof ' + ($schemaValue) + ' != \'number\') || ';
    }
    out += ' ' + ($exclType) + ' == \'number\' ? ( (' + ($exclusive) + ' = ' + ($schemaValue) + ' === undefined || ' + ($schemaValueExcl) + ' ' + ($op) + '= ' + ($schemaValue) + ') ? ' + ($data) + ' ' + ($notOp) + '= ' + ($schemaValueExcl) + ' : ' + ($data) + ' ' + ($notOp) + ' ' + ($schemaValue) + ' ) : ( (' + ($exclusive) + ' = ' + ($schemaValueExcl) + ' === true) ? ' + ($data) + ' ' + ($notOp) + '= ' + ($schemaValue) + ' : ' + ($data) + ' ' + ($notOp) + ' ' + ($schemaValue) + ' ) || ' + ($data) + ' !== ' + ($data) + ') { var op' + ($lvl) + ' = ' + ($exclusive) + ' ? \'' + ($op) + '\' : \'' + ($op) + '=\';';
  } else {
    var $exclIsNumber = typeof $schemaExcl == 'number',
      $opStr = $op;
    if ($exclIsNumber && $isData) {
      var $opExpr = '\'' + $opStr + '\'';
      out += ' if ( ';
      if ($isData) {
        out += ' (' + ($schemaValue) + ' !== undefined && typeof ' + ($schemaValue) + ' != \'number\') || ';
      }
      out += ' ( ' + ($schemaValue) + ' === undefined || ' + ($schemaExcl) + ' ' + ($op) + '= ' + ($schemaValue) + ' ? ' + ($data) + ' ' + ($notOp) + '= ' + ($schemaExcl) + ' : ' + ($data) + ' ' + ($notOp) + ' ' + ($schemaValue) + ' ) || ' + ($data) + ' !== ' + ($data) + ') { ';
    } else {
      if ($exclIsNumber && $schema === undefined) {
        $exclusive = true;
        $errorKeyword = $exclusiveKeyword;
        $errSchemaPath = it.errSchemaPath + '/' + $exclusiveKeyword;
        $schemaValue = $schemaExcl;
        $notOp += '=';
      } else {
        if ($exclIsNumber) $schemaValue = Math[$isMax ? 'min' : 'max']($schemaExcl, $schema);
        if ($schemaExcl === ($exclIsNumber ? $schemaValue : true)) {
          $exclusive = true;
          $errorKeyword = $exclusiveKeyword;
          $errSchemaPath = it.errSchemaPath + '/' + $exclusiveKeyword;
          $notOp += '=';
        } else {
          $exclusive = false;
          $opStr += '=';
        }
      }
      var $opExpr = '\'' + $opStr + '\'';
      out += ' if ( ';
      if ($isData) {
        out += ' (' + ($schemaValue) + ' !== undefined && typeof ' + ($schemaValue) + ' != \'number\') || ';
      }
      out += ' ' + ($data) + ' ' + ($notOp) + ' ' + ($schemaValue) + ' || ' + ($data) + ' !== ' + ($data) + ') { ';
    }
  }
  $errorKeyword = $errorKeyword || $keyword;
  var $$outStack = $$outStack || [];
  $$outStack.push(out);
  out = ''; /* istanbul ignore else */
  if (it.createErrors !== false) {
    out += ' { keyword: \'' + ($errorKeyword || '_limit') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { comparison: ' + ($opExpr) + ', limit: ' + ($schemaValue) + ', exclusive: ' + ($exclusive) + ' } ';
    if (it.opts.messages !== false) {
      out += ' , message: \'should be ' + ($opStr) + ' ';
      if ($isData) {
        out += '\' + ' + ($schemaValue);
      } else {
        out += '' + ($schemaValue) + '\'';
      }
    }
    if (it.opts.verbose) {
      out += ' , schema:  ';
      if ($isData) {
        out += 'validate.schema' + ($schemaPath);
      } else {
        out += '' + ($schema);
      }
      out += '         , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
    }
    out += ' } ';
  } else {
    out += ' {} ';
  }
  var __err = out;
  out = $$outStack.pop();
  if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
    if (it.async) {
      out += ' throw new ValidationError([' + (__err) + ']); ';
    } else {
      out += ' validate.errors = [' + (__err) + ']; return false; ';
    }
  } else {
    out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
  }
  out += ' } ';
  if ($breakOnError) {
    out += ' else { ';
  }
  return out;
}


/***/ }),

/***/ 337:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function generate__limitItems(it, $keyword, $ruleType) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $errorKeyword;
  var $data = 'data' + ($dataLvl || '');
  var $isData = it.opts.$data && $schema && $schema.$data,
    $schemaValue;
  if ($isData) {
    out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
    $schemaValue = 'schema' + $lvl;
  } else {
    $schemaValue = $schema;
  }
  var $op = $keyword == 'maxItems' ? '>' : '<';
  out += 'if ( ';
  if ($isData) {
    out += ' (' + ($schemaValue) + ' !== undefined && typeof ' + ($schemaValue) + ' != \'number\') || ';
  }
  out += ' ' + ($data) + '.length ' + ($op) + ' ' + ($schemaValue) + ') { ';
  var $errorKeyword = $keyword;
  var $$outStack = $$outStack || [];
  $$outStack.push(out);
  out = ''; /* istanbul ignore else */
  if (it.createErrors !== false) {
    out += ' { keyword: \'' + ($errorKeyword || '_limitItems') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { limit: ' + ($schemaValue) + ' } ';
    if (it.opts.messages !== false) {
      out += ' , message: \'should NOT have ';
      if ($keyword == 'maxItems') {
        out += 'more';
      } else {
        out += 'less';
      }
      out += ' than ';
      if ($isData) {
        out += '\' + ' + ($schemaValue) + ' + \'';
      } else {
        out += '' + ($schema);
      }
      out += ' items\' ';
    }
    if (it.opts.verbose) {
      out += ' , schema:  ';
      if ($isData) {
        out += 'validate.schema' + ($schemaPath);
      } else {
        out += '' + ($schema);
      }
      out += '         , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
    }
    out += ' } ';
  } else {
    out += ' {} ';
  }
  var __err = out;
  out = $$outStack.pop();
  if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
    if (it.async) {
      out += ' throw new ValidationError([' + (__err) + ']); ';
    } else {
      out += ' validate.errors = [' + (__err) + ']; return false; ';
    }
  } else {
    out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
  }
  out += '} ';
  if ($breakOnError) {
    out += ' else { ';
  }
  return out;
}


/***/ }),

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function generate__limitLength(it, $keyword, $ruleType) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $errorKeyword;
  var $data = 'data' + ($dataLvl || '');
  var $isData = it.opts.$data && $schema && $schema.$data,
    $schemaValue;
  if ($isData) {
    out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
    $schemaValue = 'schema' + $lvl;
  } else {
    $schemaValue = $schema;
  }
  var $op = $keyword == 'maxLength' ? '>' : '<';
  out += 'if ( ';
  if ($isData) {
    out += ' (' + ($schemaValue) + ' !== undefined && typeof ' + ($schemaValue) + ' != \'number\') || ';
  }
  if (it.opts.unicode === false) {
    out += ' ' + ($data) + '.length ';
  } else {
    out += ' ucs2length(' + ($data) + ') ';
  }
  out += ' ' + ($op) + ' ' + ($schemaValue) + ') { ';
  var $errorKeyword = $keyword;
  var $$outStack = $$outStack || [];
  $$outStack.push(out);
  out = ''; /* istanbul ignore else */
  if (it.createErrors !== false) {
    out += ' { keyword: \'' + ($errorKeyword || '_limitLength') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { limit: ' + ($schemaValue) + ' } ';
    if (it.opts.messages !== false) {
      out += ' , message: \'should NOT be ';
      if ($keyword == 'maxLength') {
        out += 'longer';
      } else {
        out += 'shorter';
      }
      out += ' than ';
      if ($isData) {
        out += '\' + ' + ($schemaValue) + ' + \'';
      } else {
        out += '' + ($schema);
      }
      out += ' characters\' ';
    }
    if (it.opts.verbose) {
      out += ' , schema:  ';
      if ($isData) {
        out += 'validate.schema' + ($schemaPath);
      } else {
        out += '' + ($schema);
      }
      out += '         , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
    }
    out += ' } ';
  } else {
    out += ' {} ';
  }
  var __err = out;
  out = $$outStack.pop();
  if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
    if (it.async) {
      out += ' throw new ValidationError([' + (__err) + ']); ';
    } else {
      out += ' validate.errors = [' + (__err) + ']; return false; ';
    }
  } else {
    out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
  }
  out += '} ';
  if ($breakOnError) {
    out += ' else { ';
  }
  return out;
}


/***/ }),

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function generate__limitProperties(it, $keyword, $ruleType) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $errorKeyword;
  var $data = 'data' + ($dataLvl || '');
  var $isData = it.opts.$data && $schema && $schema.$data,
    $schemaValue;
  if ($isData) {
    out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
    $schemaValue = 'schema' + $lvl;
  } else {
    $schemaValue = $schema;
  }
  var $op = $keyword == 'maxProperties' ? '>' : '<';
  out += 'if ( ';
  if ($isData) {
    out += ' (' + ($schemaValue) + ' !== undefined && typeof ' + ($schemaValue) + ' != \'number\') || ';
  }
  out += ' Object.keys(' + ($data) + ').length ' + ($op) + ' ' + ($schemaValue) + ') { ';
  var $errorKeyword = $keyword;
  var $$outStack = $$outStack || [];
  $$outStack.push(out);
  out = ''; /* istanbul ignore else */
  if (it.createErrors !== false) {
    out += ' { keyword: \'' + ($errorKeyword || '_limitProperties') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { limit: ' + ($schemaValue) + ' } ';
    if (it.opts.messages !== false) {
      out += ' , message: \'should NOT have ';
      if ($keyword == 'maxProperties') {
        out += 'more';
      } else {
        out += 'less';
      }
      out += ' than ';
      if ($isData) {
        out += '\' + ' + ($schemaValue) + ' + \'';
      } else {
        out += '' + ($schema);
      }
      out += ' properties\' ';
    }
    if (it.opts.verbose) {
      out += ' , schema:  ';
      if ($isData) {
        out += 'validate.schema' + ($schemaPath);
      } else {
        out += '' + ($schema);
      }
      out += '         , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
    }
    out += ' } ';
  } else {
    out += ' {} ';
  }
  var __err = out;
  out = $$outStack.pop();
  if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
    if (it.async) {
      out += ' throw new ValidationError([' + (__err) + ']); ';
    } else {
      out += ' validate.errors = [' + (__err) + ']; return false; ';
    }
  } else {
    out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
  }
  out += '} ';
  if ($breakOnError) {
    out += ' else { ';
  }
  return out;
}


/***/ }),

/***/ 340:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function generate_validate(it, $keyword, $ruleType) {
  var out = '';
  var $async = it.schema.$async === true,
    $refKeywords = it.util.schemaHasRulesExcept(it.schema, it.RULES.all, '$ref'),
    $id = it.self._getId(it.schema);
  if (it.isTop) {
    if ($async) {
      it.async = true;
      var $es7 = it.opts.async == 'es7';
      it.yieldAwait = $es7 ? 'await' : 'yield';
    }
    out += ' var validate = ';
    if ($async) {
      if ($es7) {
        out += ' (async function ';
      } else {
        if (it.opts.async != '*') {
          out += 'co.wrap';
        }
        out += '(function* ';
      }
    } else {
      out += ' (function ';
    }
    out += ' (data, dataPath, parentData, parentDataProperty, rootData) { \'use strict\'; ';
    if ($id && (it.opts.sourceCode || it.opts.processCode)) {
      out += ' ' + ('/\*# sourceURL=' + $id + ' */') + ' ';
    }
  }
  if (typeof it.schema == 'boolean' || !($refKeywords || it.schema.$ref)) {
    var $keyword = 'false schema';
    var $lvl = it.level;
    var $dataLvl = it.dataLevel;
    var $schema = it.schema[$keyword];
    var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
    var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
    var $breakOnError = !it.opts.allErrors;
    var $errorKeyword;
    var $data = 'data' + ($dataLvl || '');
    var $valid = 'valid' + $lvl;
    if (it.schema === false) {
      if (it.isTop) {
        $breakOnError = true;
      } else {
        out += ' var ' + ($valid) + ' = false; ';
      }
      var $$outStack = $$outStack || [];
      $$outStack.push(out);
      out = ''; /* istanbul ignore else */
      if (it.createErrors !== false) {
        out += ' { keyword: \'' + ($errorKeyword || 'false schema') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: {} ';
        if (it.opts.messages !== false) {
          out += ' , message: \'boolean schema is false\' ';
        }
        if (it.opts.verbose) {
          out += ' , schema: false , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
        }
        out += ' } ';
      } else {
        out += ' {} ';
      }
      var __err = out;
      out = $$outStack.pop();
      if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
        if (it.async) {
          out += ' throw new ValidationError([' + (__err) + ']); ';
        } else {
          out += ' validate.errors = [' + (__err) + ']; return false; ';
        }
      } else {
        out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
      }
    } else {
      if (it.isTop) {
        if ($async) {
          out += ' return data; ';
        } else {
          out += ' validate.errors = null; return true; ';
        }
      } else {
        out += ' var ' + ($valid) + ' = true; ';
      }
    }
    if (it.isTop) {
      out += ' }); return validate; ';
    }
    return out;
  }
  if (it.isTop) {
    var $top = it.isTop,
      $lvl = it.level = 0,
      $dataLvl = it.dataLevel = 0,
      $data = 'data';
    it.rootId = it.resolve.fullPath(it.self._getId(it.root.schema));
    it.baseId = it.baseId || it.rootId;
    delete it.isTop;
    it.dataPathArr = [undefined];
    out += ' var vErrors = null; ';
    out += ' var errors = 0;     ';
    out += ' if (rootData === undefined) rootData = data; ';
  } else {
    var $lvl = it.level,
      $dataLvl = it.dataLevel,
      $data = 'data' + ($dataLvl || '');
    if ($id) it.baseId = it.resolve.url(it.baseId, $id);
    if ($async && !it.async) throw new Error('async schema in sync schema');
    out += ' var errs_' + ($lvl) + ' = errors;';
  }
  var $valid = 'valid' + $lvl,
    $breakOnError = !it.opts.allErrors,
    $closingBraces1 = '',
    $closingBraces2 = '';
  var $errorKeyword;
  var $typeSchema = it.schema.type,
    $typeIsArray = Array.isArray($typeSchema);
  if ($typeIsArray && $typeSchema.length == 1) {
    $typeSchema = $typeSchema[0];
    $typeIsArray = false;
  }
  if (it.schema.$ref && $refKeywords) {
    if (it.opts.extendRefs == 'fail') {
      throw new Error('$ref: validation keywords used in schema at path "' + it.errSchemaPath + '" (see option extendRefs)');
    } else if (it.opts.extendRefs !== true) {
      $refKeywords = false;
      console.warn('$ref: keywords ignored in schema at path "' + it.errSchemaPath + '"');
    }
  }
  if ($typeSchema) {
    if (it.opts.coerceTypes) {
      var $coerceToTypes = it.util.coerceToTypes(it.opts.coerceTypes, $typeSchema);
    }
    var $rulesGroup = it.RULES.types[$typeSchema];
    if ($coerceToTypes || $typeIsArray || $rulesGroup === true || ($rulesGroup && !$shouldUseGroup($rulesGroup))) {
      var $schemaPath = it.schemaPath + '.type',
        $errSchemaPath = it.errSchemaPath + '/type';
      var $schemaPath = it.schemaPath + '.type',
        $errSchemaPath = it.errSchemaPath + '/type',
        $method = $typeIsArray ? 'checkDataTypes' : 'checkDataType';
      out += ' if (' + (it.util[$method]($typeSchema, $data, true)) + ') { ';
      if ($coerceToTypes) {
        var $dataType = 'dataType' + $lvl,
          $coerced = 'coerced' + $lvl;
        out += ' var ' + ($dataType) + ' = typeof ' + ($data) + '; ';
        if (it.opts.coerceTypes == 'array') {
          out += ' if (' + ($dataType) + ' == \'object\' && Array.isArray(' + ($data) + ')) ' + ($dataType) + ' = \'array\'; ';
        }
        out += ' var ' + ($coerced) + ' = undefined; ';
        var $bracesCoercion = '';
        var arr1 = $coerceToTypes;
        if (arr1) {
          var $type, $i = -1,
            l1 = arr1.length - 1;
          while ($i < l1) {
            $type = arr1[$i += 1];
            if ($i) {
              out += ' if (' + ($coerced) + ' === undefined) { ';
              $bracesCoercion += '}';
            }
            if (it.opts.coerceTypes == 'array' && $type != 'array') {
              out += ' if (' + ($dataType) + ' == \'array\' && ' + ($data) + '.length == 1) { ' + ($coerced) + ' = ' + ($data) + ' = ' + ($data) + '[0]; ' + ($dataType) + ' = typeof ' + ($data) + ';  } ';
            }
            if ($type == 'string') {
              out += ' if (' + ($dataType) + ' == \'number\' || ' + ($dataType) + ' == \'boolean\') ' + ($coerced) + ' = \'\' + ' + ($data) + '; else if (' + ($data) + ' === null) ' + ($coerced) + ' = \'\'; ';
            } else if ($type == 'number' || $type == 'integer') {
              out += ' if (' + ($dataType) + ' == \'boolean\' || ' + ($data) + ' === null || (' + ($dataType) + ' == \'string\' && ' + ($data) + ' && ' + ($data) + ' == +' + ($data) + ' ';
              if ($type == 'integer') {
                out += ' && !(' + ($data) + ' % 1)';
              }
              out += ')) ' + ($coerced) + ' = +' + ($data) + '; ';
            } else if ($type == 'boolean') {
              out += ' if (' + ($data) + ' === \'false\' || ' + ($data) + ' === 0 || ' + ($data) + ' === null) ' + ($coerced) + ' = false; else if (' + ($data) + ' === \'true\' || ' + ($data) + ' === 1) ' + ($coerced) + ' = true; ';
            } else if ($type == 'null') {
              out += ' if (' + ($data) + ' === \'\' || ' + ($data) + ' === 0 || ' + ($data) + ' === false) ' + ($coerced) + ' = null; ';
            } else if (it.opts.coerceTypes == 'array' && $type == 'array') {
              out += ' if (' + ($dataType) + ' == \'string\' || ' + ($dataType) + ' == \'number\' || ' + ($dataType) + ' == \'boolean\' || ' + ($data) + ' == null) ' + ($coerced) + ' = [' + ($data) + ']; ';
            }
          }
        }
        out += ' ' + ($bracesCoercion) + ' if (' + ($coerced) + ' === undefined) {   ';
        var $$outStack = $$outStack || [];
        $$outStack.push(out);
        out = ''; /* istanbul ignore else */
        if (it.createErrors !== false) {
          out += ' { keyword: \'' + ($errorKeyword || 'type') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { type: \'';
          if ($typeIsArray) {
            out += '' + ($typeSchema.join(","));
          } else {
            out += '' + ($typeSchema);
          }
          out += '\' } ';
          if (it.opts.messages !== false) {
            out += ' , message: \'should be ';
            if ($typeIsArray) {
              out += '' + ($typeSchema.join(","));
            } else {
              out += '' + ($typeSchema);
            }
            out += '\' ';
          }
          if (it.opts.verbose) {
            out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
          }
          out += ' } ';
        } else {
          out += ' {} ';
        }
        var __err = out;
        out = $$outStack.pop();
        if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
          if (it.async) {
            out += ' throw new ValidationError([' + (__err) + ']); ';
          } else {
            out += ' validate.errors = [' + (__err) + ']; return false; ';
          }
        } else {
          out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
        }
        out += ' } else {  ';
        var $parentData = $dataLvl ? 'data' + (($dataLvl - 1) || '') : 'parentData',
          $parentDataProperty = $dataLvl ? it.dataPathArr[$dataLvl] : 'parentDataProperty';
        out += ' ' + ($data) + ' = ' + ($coerced) + '; ';
        if (!$dataLvl) {
          out += 'if (' + ($parentData) + ' !== undefined)';
        }
        out += ' ' + ($parentData) + '[' + ($parentDataProperty) + '] = ' + ($coerced) + '; } ';
      } else {
        var $$outStack = $$outStack || [];
        $$outStack.push(out);
        out = ''; /* istanbul ignore else */
        if (it.createErrors !== false) {
          out += ' { keyword: \'' + ($errorKeyword || 'type') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { type: \'';
          if ($typeIsArray) {
            out += '' + ($typeSchema.join(","));
          } else {
            out += '' + ($typeSchema);
          }
          out += '\' } ';
          if (it.opts.messages !== false) {
            out += ' , message: \'should be ';
            if ($typeIsArray) {
              out += '' + ($typeSchema.join(","));
            } else {
              out += '' + ($typeSchema);
            }
            out += '\' ';
          }
          if (it.opts.verbose) {
            out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
          }
          out += ' } ';
        } else {
          out += ' {} ';
        }
        var __err = out;
        out = $$outStack.pop();
        if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
          if (it.async) {
            out += ' throw new ValidationError([' + (__err) + ']); ';
          } else {
            out += ' validate.errors = [' + (__err) + ']; return false; ';
          }
        } else {
          out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
        }
      }
      out += ' } ';
    }
  }
  if (it.schema.$ref && !$refKeywords) {
    out += ' ' + (it.RULES.all.$ref.code(it, '$ref')) + ' ';
    if ($breakOnError) {
      out += ' } if (errors === ';
      if ($top) {
        out += '0';
      } else {
        out += 'errs_' + ($lvl);
      }
      out += ') { ';
      $closingBraces2 += '}';
    }
  } else {
    if (it.opts.v5 && it.schema.patternGroups) {
      console.warn('keyword "patternGroups" is deprecated and disabled. Use option patternGroups: true to enable.');
    }
    var arr2 = it.RULES;
    if (arr2) {
      var $rulesGroup, i2 = -1,
        l2 = arr2.length - 1;
      while (i2 < l2) {
        $rulesGroup = arr2[i2 += 1];
        if ($shouldUseGroup($rulesGroup)) {
          if ($rulesGroup.type) {
            out += ' if (' + (it.util.checkDataType($rulesGroup.type, $data)) + ') { ';
          }
          if (it.opts.useDefaults && !it.compositeRule) {
            if ($rulesGroup.type == 'object' && it.schema.properties) {
              var $schema = it.schema.properties,
                $schemaKeys = Object.keys($schema);
              var arr3 = $schemaKeys;
              if (arr3) {
                var $propertyKey, i3 = -1,
                  l3 = arr3.length - 1;
                while (i3 < l3) {
                  $propertyKey = arr3[i3 += 1];
                  var $sch = $schema[$propertyKey];
                  if ($sch.default !== undefined) {
                    var $passData = $data + it.util.getProperty($propertyKey);
                    out += '  if (' + ($passData) + ' === undefined) ' + ($passData) + ' = ';
                    if (it.opts.useDefaults == 'shared') {
                      out += ' ' + (it.useDefault($sch.default)) + ' ';
                    } else {
                      out += ' ' + (JSON.stringify($sch.default)) + ' ';
                    }
                    out += '; ';
                  }
                }
              }
            } else if ($rulesGroup.type == 'array' && Array.isArray(it.schema.items)) {
              var arr4 = it.schema.items;
              if (arr4) {
                var $sch, $i = -1,
                  l4 = arr4.length - 1;
                while ($i < l4) {
                  $sch = arr4[$i += 1];
                  if ($sch.default !== undefined) {
                    var $passData = $data + '[' + $i + ']';
                    out += '  if (' + ($passData) + ' === undefined) ' + ($passData) + ' = ';
                    if (it.opts.useDefaults == 'shared') {
                      out += ' ' + (it.useDefault($sch.default)) + ' ';
                    } else {
                      out += ' ' + (JSON.stringify($sch.default)) + ' ';
                    }
                    out += '; ';
                  }
                }
              }
            }
          }
          var arr5 = $rulesGroup.rules;
          if (arr5) {
            var $rule, i5 = -1,
              l5 = arr5.length - 1;
            while (i5 < l5) {
              $rule = arr5[i5 += 1];
              if ($shouldUseRule($rule)) {
                var $code = $rule.code(it, $rule.keyword, $rulesGroup.type);
                if ($code) {
                  out += ' ' + ($code) + ' ';
                  if ($breakOnError) {
                    $closingBraces1 += '}';
                  }
                }
              }
            }
          }
          if ($breakOnError) {
            out += ' ' + ($closingBraces1) + ' ';
            $closingBraces1 = '';
          }
          if ($rulesGroup.type) {
            out += ' } ';
            if ($typeSchema && $typeSchema === $rulesGroup.type && !$coerceToTypes) {
              out += ' else { ';
              var $schemaPath = it.schemaPath + '.type',
                $errSchemaPath = it.errSchemaPath + '/type';
              var $$outStack = $$outStack || [];
              $$outStack.push(out);
              out = ''; /* istanbul ignore else */
              if (it.createErrors !== false) {
                out += ' { keyword: \'' + ($errorKeyword || 'type') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { type: \'';
                if ($typeIsArray) {
                  out += '' + ($typeSchema.join(","));
                } else {
                  out += '' + ($typeSchema);
                }
                out += '\' } ';
                if (it.opts.messages !== false) {
                  out += ' , message: \'should be ';
                  if ($typeIsArray) {
                    out += '' + ($typeSchema.join(","));
                  } else {
                    out += '' + ($typeSchema);
                  }
                  out += '\' ';
                }
                if (it.opts.verbose) {
                  out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
                }
                out += ' } ';
              } else {
                out += ' {} ';
              }
              var __err = out;
              out = $$outStack.pop();
              if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
                if (it.async) {
                  out += ' throw new ValidationError([' + (__err) + ']); ';
                } else {
                  out += ' validate.errors = [' + (__err) + ']; return false; ';
                }
              } else {
                out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
              }
              out += ' } ';
            }
          }
          if ($breakOnError) {
            out += ' if (errors === ';
            if ($top) {
              out += '0';
            } else {
              out += 'errs_' + ($lvl);
            }
            out += ') { ';
            $closingBraces2 += '}';
          }
        }
      }
    }
  }
  if ($breakOnError) {
    out += ' ' + ($closingBraces2) + ' ';
  }
  if ($top) {
    if ($async) {
      out += ' if (errors === 0) return data;           ';
      out += ' else throw new ValidationError(vErrors); ';
    } else {
      out += ' validate.errors = vErrors; ';
      out += ' return errors === 0;       ';
    }
    out += ' }); return validate;';
  } else {
    out += ' var ' + ($valid) + ' = errors === errs_' + ($lvl) + ';';
  }
  out = it.util.cleanUpCode(out);
  if ($top) {
    out = it.util.finalCleanUpCode(out, $async);
  }

  function $shouldUseGroup($rulesGroup) {
    var rules = $rulesGroup.rules;
    for (var i = 0; i < rules.length; i++)
      if ($shouldUseRule(rules[i])) return true;
  }

  function $shouldUseRule($rule) {
    return it.schema[$rule.keyword] !== undefined || ($rule.implements && $ruleImlementsSomeKeyword($rule));
  }

  function $ruleImlementsSomeKeyword($rule) {
    var impl = $rule.implements;
    for (var i = 0; i < impl.length; i++)
      if (it.schema[impl[i]] !== undefined) return true;
  }
  return out;
}


/***/ }),

/***/ 341:
/***/ (function(module, exports) {


/**
 * slice() reference.
 */

var slice = Array.prototype.slice;

/**
 * Expose `co`.
 */

module.exports = co['default'] = co.co = co;

/**
 * Wrap the given generator `fn` into a
 * function that returns a promise.
 * This is a separate function so that
 * every `co()` call doesn't create a new,
 * unnecessary closure.
 *
 * @param {GeneratorFunction} fn
 * @return {Function}
 * @api public
 */

co.wrap = function (fn) {
  createPromise.__generatorFunction__ = fn;
  return createPromise;
  function createPromise() {
    return co.call(this, fn.apply(this, arguments));
  }
};

/**
 * Execute the generator function or a generator
 * and return a promise.
 *
 * @param {Function} fn
 * @return {Promise}
 * @api public
 */

function co(gen) {
  var ctx = this;
  var args = slice.call(arguments, 1)

  // we wrap everything in a promise to avoid promise chaining,
  // which leads to memory leak errors.
  // see https://github.com/tj/co/issues/180
  return new Promise(function(resolve, reject) {
    if (typeof gen === 'function') gen = gen.apply(ctx, args);
    if (!gen || typeof gen.next !== 'function') return resolve(gen);

    onFulfilled();

    /**
     * @param {Mixed} res
     * @return {Promise}
     * @api private
     */

    function onFulfilled(res) {
      var ret;
      try {
        ret = gen.next(res);
      } catch (e) {
        return reject(e);
      }
      next(ret);
    }

    /**
     * @param {Error} err
     * @return {Promise}
     * @api private
     */

    function onRejected(err) {
      var ret;
      try {
        ret = gen.throw(err);
      } catch (e) {
        return reject(e);
      }
      next(ret);
    }

    /**
     * Get the next value in the generator,
     * return a promise.
     *
     * @param {Object} ret
     * @return {Promise}
     * @api private
     */

    function next(ret) {
      if (ret.done) return resolve(ret.value);
      var value = toPromise.call(ctx, ret.value);
      if (value && isPromise(value)) return value.then(onFulfilled, onRejected);
      return onRejected(new TypeError('You may only yield a function, promise, generator, array, or object, '
        + 'but the following object was passed: "' + String(ret.value) + '"'));
    }
  });
}

/**
 * Convert a `yield`ed value into a promise.
 *
 * @param {Mixed} obj
 * @return {Promise}
 * @api private
 */

function toPromise(obj) {
  if (!obj) return obj;
  if (isPromise(obj)) return obj;
  if (isGeneratorFunction(obj) || isGenerator(obj)) return co.call(this, obj);
  if ('function' == typeof obj) return thunkToPromise.call(this, obj);
  if (Array.isArray(obj)) return arrayToPromise.call(this, obj);
  if (isObject(obj)) return objectToPromise.call(this, obj);
  return obj;
}

/**
 * Convert a thunk to a promise.
 *
 * @param {Function}
 * @return {Promise}
 * @api private
 */

function thunkToPromise(fn) {
  var ctx = this;
  return new Promise(function (resolve, reject) {
    fn.call(ctx, function (err, res) {
      if (err) return reject(err);
      if (arguments.length > 2) res = slice.call(arguments, 1);
      resolve(res);
    });
  });
}

/**
 * Convert an array of "yieldables" to a promise.
 * Uses `Promise.all()` internally.
 *
 * @param {Array} obj
 * @return {Promise}
 * @api private
 */

function arrayToPromise(obj) {
  return Promise.all(obj.map(toPromise, this));
}

/**
 * Convert an object of "yieldables" to a promise.
 * Uses `Promise.all()` internally.
 *
 * @param {Object} obj
 * @return {Promise}
 * @api private
 */

function objectToPromise(obj){
  var results = new obj.constructor();
  var keys = Object.keys(obj);
  var promises = [];
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var promise = toPromise.call(this, obj[key]);
    if (promise && isPromise(promise)) defer(promise, key);
    else results[key] = obj[key];
  }
  return Promise.all(promises).then(function () {
    return results;
  });

  function defer(promise, key) {
    // predefine the key in the result
    results[key] = undefined;
    promises.push(promise.then(function (res) {
      results[key] = res;
    }));
  }
}

/**
 * Check if `obj` is a promise.
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */

function isPromise(obj) {
  return 'function' == typeof obj.then;
}

/**
 * Check if `obj` is a generator.
 *
 * @param {Mixed} obj
 * @return {Boolean}
 * @api private
 */

function isGenerator(obj) {
  return 'function' == typeof obj.next && 'function' == typeof obj.throw;
}

/**
 * Check if `obj` is a generator function.
 *
 * @param {Mixed} obj
 * @return {Boolean}
 * @api private
 */
function isGeneratorFunction(obj) {
  var constructor = obj.constructor;
  if (!constructor) return false;
  if ('GeneratorFunction' === constructor.name || 'GeneratorFunction' === constructor.displayName) return true;
  return isGenerator(constructor.prototype);
}

/**
 * Check for plain object.
 *
 * @param {Mixed} val
 * @return {Boolean}
 * @api private
 */

function isObject(val) {
  return Object == val.constructor;
}


/***/ }),

/***/ 342:
/***/ (function(module, exports, __webpack_require__) {

var json = typeof JSON !== 'undefined' ? JSON : __webpack_require__(431);

module.exports = function (obj, opts) {
    if (!opts) opts = {};
    if (typeof opts === 'function') opts = { cmp: opts };
    var space = opts.space || '';
    if (typeof space === 'number') space = Array(space+1).join(' ');
    var cycles = (typeof opts.cycles === 'boolean') ? opts.cycles : false;
    var replacer = opts.replacer || function(key, value) { return value; };

    var cmp = opts.cmp && (function (f) {
        return function (node) {
            return function (a, b) {
                var aobj = { key: a, value: node[a] };
                var bobj = { key: b, value: node[b] };
                return f(aobj, bobj);
            };
        };
    })(opts.cmp);

    var seen = [];
    return (function stringify (parent, key, node, level) {
        var indent = space ? ('\n' + new Array(level + 1).join(space)) : '';
        var colonSeparator = space ? ': ' : ':';

        if (node && node.toJSON && typeof node.toJSON === 'function') {
            node = node.toJSON();
        }

        node = replacer.call(parent, key, node);

        if (node === undefined) {
            return;
        }
        if (typeof node !== 'object' || node === null) {
            return json.stringify(node);
        }
        if (isArray(node)) {
            var out = [];
            for (var i = 0; i < node.length; i++) {
                var item = stringify(node, i, node[i], level+1) || json.stringify(null);
                out.push(indent + space + item);
            }
            return '[' + out.join(',') + indent + ']';
        }
        else {
            if (seen.indexOf(node) !== -1) {
                if (cycles) return json.stringify('__cycle__');
                throw new TypeError('Converting circular structure to JSON');
            }
            else seen.push(node);

            var keys = objectKeys(node).sort(cmp && cmp(node));
            var out = [];
            for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                var value = stringify(node, key, node[key], level+1);

                if(!value) continue;

                var keyValue = json.stringify(key)
                    + colonSeparator
                    + value;
                ;
                out.push(indent + space + keyValue);
            }
            seen.splice(seen.indexOf(node), 1);
            return '{' + out.join(',') + indent + '}';
        }
    })({ '': obj }, '', obj, 0);
};

var isArray = Array.isArray || function (x) {
    return {}.toString.call(x) === '[object Array]';
};

var objectKeys = Object.keys || function (obj) {
    var has = Object.prototype.hasOwnProperty || function () { return true };
    var keys = [];
    for (var key in obj) {
        if (has.call(obj, key)) keys.push(key);
    }
    return keys;
};


/***/ }),

/***/ 343:
/***/ (function(module, exports, __webpack_require__) {

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
var tslib_1 = __webpack_require__(0);
/**
 * hornet-js-react-components - Ensemble des composants web React de base de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.0
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
var events = __webpack_require__(35);
var AutoCompleteState = /** @class */ (function (_super) {
    tslib_1.__extends(AutoCompleteState, _super);
    function AutoCompleteState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * mets à jour l'élément focus
     * @param choiceFocused
     * @param {string} value
     */
    AutoCompleteState.prototype.setFocusOn = function (choiceFocused, value, index) {
        var _this = this;
        setTimeout(function () {
            _this.emit(AutoCompleteState.FOCUS_CHANGE_EVENT, _this.choiceFocused, choiceFocused, value, index);
        });
        this.choiceFocused = choiceFocused;
    };
    AutoCompleteState.FOCUS_CHANGE_EVENT = "onFocusChange";
    return AutoCompleteState;
}(events.EventEmitter));
exports.AutoCompleteState = AutoCompleteState;



/***/ }),

/***/ 344:
/***/ (function(module, exports, __webpack_require__) {

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
var tslib_1 = __webpack_require__(0);
/**
 * hornet-js-react-components - Ensemble des composants web React de base de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.0
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
var React = __webpack_require__(2);
var abstract_field_1 = __webpack_require__(311);
var picto_1 = __webpack_require__(318);
var _ = __webpack_require__(6);
var classNames = __webpack_require__(19);
var InputField = /** @class */ (function (_super) {
    tslib_1.__extends(InputField, _super);
    function InputField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Génère le rendu spécifique du champ
     * @returns {any}
     * @override
     */
    InputField.prototype.renderWidget = function () {
        var _this = this;
        var htmlProps = _.cloneDeep(this.getHtmlProps());
        if (this.state.currentValue != null) {
            _.assign(htmlProps, { "defaultValue": this.props.currentValue });
        }
        var inputClasses = {
            "has-error": this.hasErrors(),
            "input": true
        };
        if (htmlProps["className"]) {
            inputClasses[htmlProps["className"]] = true;
        }
        if (this.state.alignment) {
            inputClasses[this.state.alignment] = true;
        }
        htmlProps["onChange"] = this.state.resettable ? this.handleChangeInput : htmlProps["onChange"];
        htmlProps["className"] = classNames(inputClasses);
        return (React.createElement("div", null,
            React.createElement("input", tslib_1.__assign({ ref: function (elt) { return _this.registerHtmlElement(elt); } }, htmlProps)),
            this.state.resettable && this.state.valued && !this.state.readOnly && !this.state.disabled ? this.renderResetButton() :
                React.createElement("div", null)));
    };
    /**
     * Surcharge de la méthode
     * @param value
     * @returns {InputField}
     */
    InputField.prototype.setCurrentValue = function (value) {
        _super.prototype.setCurrentValue.call(this, value);
        this.setState({ valued: (value !== "" && value) });
        return this;
    };
    InputField.prototype.isValued = function () {
        return this.state.valued || this.props.value;
    };
    /**
     * rendu html du bouton reset
     * @returns {any}
     */
    InputField.prototype.renderResetButton = function () {
        var htmlProps = _.cloneDeep(this.getHtmlProps());
        var hidden = htmlProps["type"] === "hidden";
        var classList = {
            "input-reset": true,
            "input-reset-hidden": (!this.isValued() || hidden)
        };
        var aProps = {};
        if (this.isValued()) {
            aProps["onClick"] = this.resetValue;
        }
        var prefixID = this.props.id || this.props.name;
        return (React.createElement("span", { className: classNames(classList), role: "button", "aria-hidden": !this.state.valued, id: prefixID + "ResetButton" },
            React.createElement("a", tslib_1.__assign({}, aProps),
                React.createElement("img", { src: picto_1.Picto.grey.close }))));
    };
    /**
     * Permet de rendre à null la valeur du champ et de masquer la colonne
     */
    InputField.prototype.resetValue = function () {
        this.htmlElement.value = null;
        if (this.htmlElement && this.htmlElement.onchange)
            this.htmlElement.onchange();
        this.setState({ valued: false });
    };
    /**
     * Action exécutée lors d'un changement de valeur du champ
     * @param e
     */
    InputField.prototype.handleChangeInput = function (e) {
        if (this.htmlElement && this.htmlElement.value) {
            if (!this.state.valued) {
                this.setState({ valued: true });
            }
        }
        else if (this.state.valued) {
            this.setState({ valued: false });
        }
        var htmlProps = this.getHtmlProps();
        if (_.isFunction(htmlProps["onChange"])) {
            htmlProps["onChange"](e);
        }
    };
    InputField.defaultProps = _.assign({ type: "text", resettable: true }, abstract_field_1.AbstractField.defaultProps);
    return InputField;
}(abstract_field_1.AbstractField));
exports.InputField = InputField;



/***/ }),

/***/ 345:
/***/ (function(module, exports, __webpack_require__) {

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
var tslib_1 = __webpack_require__(0);
/**
 * hornet-js-react-components - Ensemble des composants web React de base de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.0
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
var hornet_js_utils_1 = __webpack_require__(1);
var React = __webpack_require__(2);
var sort_data_1 = __webpack_require__(316);
var abstract_cell_1 = __webpack_require__(369);
var classNames = __webpack_require__(19);
var table_state_1 = __webpack_require__(317);
var logger = hornet_js_utils_1.Utils.getLogger("hornet-js-react-components.widget.table.column.cell.abstract-header-cell");
/**
 * Classe permettant de générer le rendu html d'un cellule du header d'un tableau
 */
var AbstractHeaderCell = /** @class */ (function (_super) {
    tslib_1.__extends(AbstractHeaderCell, _super);
    function AbstractHeaderCell(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.props.contentState.on(table_state_1.ContentState.TOGGLE_COLUMNS_EVENT, _this.handleChangeHiddenColumns);
        _this.props.contentState.on(table_state_1.ContentState.EDITION_CLIC_EVENT, _this.handleEditionQuit);
        return _this;
    }
    /**
     * @inheritDoc
     */
    AbstractHeaderCell.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        return true;
    };
    /**
     * @inheritDoc
     */
    AbstractHeaderCell.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        this.props.contentState.removeListener(table_state_1.ContentState.EDITION_CLIC_EVENT, this.handleEditionQuit);
    };
    /**
     * @inheritDoc
     */
    AbstractHeaderCell.prototype.render = function () {
        logger.trace("render AbstractHeaderCell -> column:", this.props.coordinates.column, " - line:", this.props.coordinates.row, "- isFocused:", this.state.isFocused, "- tabIndex:", this.state.tabIndex);
        return (React.createElement("th", tslib_1.__assign({}, this.getDefaultThProps(-1)), this.renderCell()));
    };
    AbstractHeaderCell.prototype.renderCell = function () {
        return (this.state.value);
    };
    /***
     * Retourne les propriétés par défaut d'un élément de type Td
     * @returns {{ref: ((instance:HTMLTableCellElement)=>undefined), className: string, onKeyDown: any, tabIndex: number, aria-selected: (((props:any)=>boolean)|any), onFocus: any, style: any}}
     */
    AbstractHeaderCell.prototype.getDefaultThProps = function (lineIndex) {
        var _this = this;
        logger.trace("Rendu Header column Tableau");
        var classes = { "datatable-header": true, "fixed": (this.props.headerFixed) };
        if (this.props.className) {
            classes[this.props.className] = true;
        }
        var ariasort = "none";
        var title;
        if (this.props.sortable && !this.props.contentState.itemInEdition) {
            var isTriActifSurColonne = this.isSortedColumn(this.props.sortData);
            // Gestion de la classe de l'entête th
            classes["datatable-header-sortable-column"] = true;
            if (isTriActifSurColonne) {
                classes["datatable-header-sorted"] = true;
                if (this.props.sortData.dir == sort_data_1.SortDirection.DESC) {
                    classes["datatable-header-sorted-desc"] = true;
                }
                else {
                    classes["datatable-header-sorted-asc"] = true;
                }
            }
            classes["datatable-cell-custom"] = true;
            classes["datatable-cell-custom-" + this.props.keyColumn] = true;
            var titleObject = this.handleSortTitle(isTriActifSurColonne, ariasort);
            ariasort = titleObject.ariasort;
            title = titleObject.title;
        }
        classes[this.props.id + "-" + this.props.keyColumn] = true;
        classes["is_disabled"] = this.props.contentState.itemInEdition !== undefined && this.props.contentState.itemInEdition !== null;
        var key = this.props.id + "-colHeader-0-" + this.props.coordinates.column;
        var tabIndex = this.getTabIndexFullKind();
        return ({
            ref: function (instance) {
                if (instance) {
                    _this.tableCellRef = instance;
                }
            },
            className: classNames(classes),
            onFocus: this.handleFocus.bind(this),
            onBlur: this.handleBlur.bind(this),
            onKeyDown: this.handleKeyDown.bind(this),
            style: this.props.style,
            key: key,
            title: title ? title : this.state.title,
            "aria-sort": ariasort,
            id: key,
            tabIndex: tabIndex
        });
    };
    AbstractHeaderCell.prototype.handleSortTitle = function (isTriActifSurColonne, ariasort) {
        // Gestion du title
        var sortDirection;
        if (isTriActifSurColonne) {
            /* Le tri est actif sur la colonne : on indique donc le sens de tri qui s'appliquera au prochain tri.
             * L'attribut aria-sort indique par contre le sens de tri courant (cf. https://www.w3.org/TR/wai-aria-1.1/#aria-sort) */
            if (this.props.sortData.dir == sort_data_1.SortDirection.DESC) {
                sortDirection = this.i18n("table.ascending");
                ariasort = "descending";
            }
            else {
                sortDirection = this.i18n("table.descending");
                ariasort = "ascending";
            }
        }
        else {
            sortDirection = this.i18n("table.ascending");
            /* Pas de tri actif : on ne doit pas valoriser l'attribut aria-sort */
        }
        var title = this.getSortByTitle(this.props.title, sortDirection);
        return { ariasort: ariasort, title: title };
    };
    /**
     * Génère le texte du bouton de tri par colonne
     * @param columnTitle titre de la colonne
     * @param sortDirection description de la direction du tri
     */
    AbstractHeaderCell.prototype.getSortByTitle = function (columnTitle, sortDirection) {
        return this.i18n((this.props.sortByTitle) || this.i18n("table.sortByTitle"), {
            "columnTitle": columnTitle.render ?
                columnTitle.render() : columnTitle,
            "sortTitle": sortDirection
        });
    };
    /**
     * Test si une column est trié
     * @param column colonne de tableau
     * @param sort données de tri courant du tableau
     * @return true lorsque le tri du tableau est actif sur la colonne indiquée
     */
    AbstractHeaderCell.prototype.isSortedColumn = function (sort) {
        var sorted = false;
        if (sort && sort.key) {
            if (this.props.keyColumn && sort.key === this.props.keyColumn) {
                // tri personnalisé sur la colonne : la clé de tri du tableau doit être égale à la clé de tri personnalisé/
                sorted = true;
            }
            else {
                // tri simple : la clé de tri du tableau doit être égale à la clé de la colonne
                sorted = false;
            }
        }
        return sorted;
    };
    /**
     * Retourne le tabIndex pour les éléments du tableau
     * Si la colonne est la première on autorise la tabulation
     * @returns valeur pour l'index de tabulation
     */
    AbstractHeaderCell.prototype.getTabIndexFullKind = function () {
        var firstVisibleCoord = this.props.contentState.firstVisibleColumnState.coordinates;
        return (this.props.coordinates.column == firstVisibleCoord) ? 0 : -1;
    };
    /**
     * Gestion des tabulations pour la première colonne visible
     */
    AbstractHeaderCell.prototype.handleChangeHiddenColumns = function (hiddenColumns, firstVisibleColumnState, oldFirstiVisibleColumnState) {
        if (firstVisibleColumnState.coordinates == this.props.coordinates.column) {
            this.tableCellRef.tabIndex = 0;
        }
        if (oldFirstiVisibleColumnState && oldFirstiVisibleColumnState.coordinates == this.props.coordinates.column) {
            this.tableCellRef.tabIndex = -1;
        }
    };
    /**
     * Prise en compte de la sortie du mode edition
     * @param lineIndex
     */
    AbstractHeaderCell.prototype.handleEditionQuit = function (lineIndex) {
        if (lineIndex) {
            this.setState({ edition: true });
        }
        else {
            this.setState({ edition: false });
        }
    };
    return AbstractHeaderCell;
}(abstract_cell_1.AbstractCell));
exports.AbstractHeaderCell = AbstractHeaderCell;



/***/ }),

/***/ 346:
/***/ (function(module, exports, __webpack_require__) {

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
 * hornet-js-utils - Partie commune et utilitaire à tous les composants hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.0
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
var common_register_1 = __webpack_require__(14);
var logger = common_register_1.Register.getLogger("hornet-js-utils.template");
/**
 * @classdesc classe de templating de string
 */
var Template = /** @class */ (function () {
    /**
     * @class
     */
    function Template(template) {
        this.template = template;
        this.stringKey = [];
        var regex = /(\$\{[^\{\}\s;]+\})/g;
        var corresp = regex.exec(this.template);
        while (corresp) {
            this.stringKey.push({
                key: corresp[0],
                index: corresp.index,
                keys: corresp[0].substring(2, corresp[0].length - 1).split(/[\.\[\]]/)
            });
            corresp = regex.exec(this.template);
        }
        logger.trace("Template : ", this.template, "extract : ", this.stringKey);
    }
    /**
     * lance le templating avec un objet
     * @param {Object} obj objet servant au templating
     * @param {string} remplaceUndef remplacement si undefined
     * @return la chaine avec les valeurs remplacées
     */
    Template.prototype.process = function (obj, remplaceUndef) {
        var returnValue = this.template;
        for (var part in this.stringKey) {
            var partKey = this.stringKey[part];
            var value = obj;
            for (var attr in partKey.keys) {
                attr = partKey.keys[attr];
                if (attr) {
                    value = value[attr];
                    if (!value) {
                        value = remplaceUndef;
                        break;
                    }
                }
            }
            returnValue = returnValue.replace(partKey.key, value);
        }
        logger.trace("Template generate : ", returnValue);
        return returnValue;
    };
    return Template;
}());
exports.Template = Template;



/***/ }),

/***/ 347:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Classe regroupant les rôles disponibles dans l'appli-tuto
 */
var Roles = /** @class */ (function () {
    function Roles() {
    }
    Roles.USER_STR = "APPLI_TUTO_USER";
    Roles.ADMIN_STR = "APPLI_TUTO_ADMIN";
    Roles.USER = [Roles.USER_STR];
    Roles.ADMIN = [Roles.ADMIN_STR];
    Roles.EVERYONE = [Roles.USER_STR, Roles.ADMIN_STR];
    return Roles;
}());
exports.Roles = Roles;



/***/ }),

/***/ 348:
/***/ (function(module, exports, __webpack_require__) {

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
 * @classdesc Classe de configuration pour les datasources de type service
 * @class
 */
var DataSourceConfigPage = /** @class */ (function () {
    function DataSourceConfigPage(page, method, fetchAttrName) {
        this.page = page;
        this.method = method;
        this.fetchAttrName = fetchAttrName;
    }
    return DataSourceConfigPage;
}());
exports.DataSourceConfigPage = DataSourceConfigPage;



/***/ }),

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {

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
var sort_data_1 = __webpack_require__(316);
var CompareMethod;
(function (CompareMethod) {
    CompareMethod[CompareMethod["COMPARE_DEFAULT"] = 1] = "COMPARE_DEFAULT";
    CompareMethod[CompareMethod["COMPARE_WITH_LOWERCASE"] = 2] = "COMPARE_WITH_LOWERCASE";
    CompareMethod[CompareMethod["COMPARE_WITH_UPPERCASE"] = 3] = "COMPARE_WITH_UPPERCASE";
})(CompareMethod = exports.CompareMethod || (exports.CompareMethod = {}));
/**
 * Option de tri par defaut dans un datasourcede
 */
var DefaultSort = /** @class */ (function () {
    /***
     * @param {SortData[]} sort  données de tri
     * @param {(a: any, b: any) => number} Fonction de comparaison (optionnel).
     * @param {boolean} sendFetch définit si l'option doit être envoyée au fetch ou pas.
     *
     */
    function DefaultSort(sort, initCompare, sendFetch) {
        if (initCompare === void 0) { initCompare = CompareMethod.COMPARE_DEFAULT; }
        if (sendFetch === void 0) { sendFetch = false; }
        var _this = this;
        this.sort = sort;
        this.initCompare = initCompare;
        this.sendFetch = sendFetch;
        this.compare = function (a, b) {
            if (_this.initCompare && typeof _this.initCompare == "function") {
                return _this.initCompare(a, b);
            }
            else {
                var sortDatas = (_this.sort && _this.sort.length > 0) ? _this.sort : _this.sortDatas;
                var result_1;
                sortDatas.every(function (sortData) {
                    var aValue = a[sortData["key"]];
                    var bValue = b[sortData["key"]];
                    if (_this.initCompare == CompareMethod.COMPARE_WITH_LOWERCASE) {
                        aValue = (typeof a[sortData["key"]] == "string") ? a[sortData["key"]].toLowerCase() : (typeof a[sortData["key"]] == "undefined") ? "" : a[sortData["key"]];
                        bValue = (typeof b[sortData["key"]] == "string") ? b[sortData["key"]].toLowerCase() : (typeof b[sortData["key"]] == "undefined") ? "" : b[sortData["key"]];
                    }
                    else if (_this.initCompare == CompareMethod.COMPARE_WITH_UPPERCASE) {
                        aValue = (typeof a[sortData["key"]] == "string") ? a[sortData["key"]].toUpperCase() : (typeof a[sortData["key"]] == "undefined") ? "" : a[sortData["key"]];
                        bValue = (typeof b[sortData["key"]] == "string") ? b[sortData["key"]].toUpperCase() : (typeof b[sortData["key"]] == "undefined") ? "" : b[sortData["key"]];
                    }
                    if (aValue < bValue) {
                        result_1 = (sortData.dir == sort_data_1.SortDirection.ASC) ? -1 : 1;
                        return false;
                    }
                    if (aValue == bValue) {
                        return true;
                    }
                    if (aValue > bValue) {
                        result_1 = (sortData.dir == sort_data_1.SortDirection.ASC) ? 1 : -1;
                        return false;
                    }
                });
                return result_1;
            }
        };
    }
    /**
     * définit si l'option doit être envoyée au fetch ou pas
     * @returns {boolean}
     */
    DefaultSort.prototype.sendToFetch = function () {
        return this.sendFetch;
    };
    return DefaultSort;
}());
exports.DefaultSort = DefaultSort;
var SpinnerOption = /** @class */ (function () {
    /**
     * @param {SpinnerType} type : type de spinner
     * @param {boolean} sendFetch définit si l'option doit être envoyée au fetch ou pas.
     */
    function SpinnerOption(type, sendFetch) {
        this.type = type;
        this.sendFetch = sendFetch;
    }
    /**
     * définit si l'option doit etre envoyée au fetch ou pas
     * @returns {boolean}
     */
    SpinnerOption.prototype.sendToFetch = function () {
        return false;
    };
    return SpinnerOption;
}());
exports.SpinnerOption = SpinnerOption;
/**
 * Mode d'initialisation de l'init dans un datasource
 */
var InitAsync = /** @class */ (function () {
    /**
     * @param {boolean} isAsync : type d'initialisation
     * @param {boolean} sendFetch définit si l'option doit être envoyée au fetch ou pas.
     */
    function InitAsync(isAsync, sendFetch) {
        this.isAsync = isAsync;
        this.sendFetch = sendFetch;
    }
    /**
     * définit si l'option doit etre envoyée au fetch ou pas
     * @returns {boolean}
     */
    InitAsync.prototype.sendToFetch = function () {
        return false;
    };
    return InitAsync;
}());
exports.InitAsync = InitAsync;



/***/ }),

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {

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
var tslib_1 = __webpack_require__(0);
/**
 * hornet-js-react-components - Ensemble des composants web React de base de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.0
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
var hornet_js_utils_1 = __webpack_require__(1);
var React = __webpack_require__(2);
var notification_1 = __webpack_require__(45);
var abstract_field_1 = __webpack_require__(311);
var abstract_form_1 = __webpack_require__(363);
var upload_file_field_1 = __webpack_require__(366);
var form_utils_1 = __webpack_require__(330);
var dom_adapter_1 = __webpack_require__(327);
var auto_complete_field_1 = __webpack_require__(353);
var notification_manager_1 = __webpack_require__(125);
var checkbox_field_1 = __webpack_require__(354);
var data_validator_1 = __webpack_require__(435);
var classNames = __webpack_require__(19);
var _ = __webpack_require__(6);
var select_field_1 = __webpack_require__(365);
var buttons_area_1 = __webpack_require__(329);
var logger = hornet_js_utils_1.Utils.getLogger("hornet-js-react-components.widget.form.form");
/**
 * Composant permettant de rendre un formulaire Hornet de manière standardisée
 */
var Form = /** @class */ (function (_super) {
    tslib_1.__extends(Form, _super);
    function Form(props, context) {
        var _this = _super.call(this, props, context) || this;
        var calendarLocale = _this.i18n("calendar");
        if (calendarLocale == null) {
            calendarLocale = {};
        }
        /* Messages génériques */
        /* Configuration locale des calendriers et dates */
        _this.state.calendarLocale = calendarLocale;
        _this.state.customNotif = props.notifId != null;
        _this.state.notifId = props.notifId != null ? props.notifId : "Form-" + (Form.idx++);
        return _this;
    }
    // Setters (pas de setter sur defaultValues, car cette propriété sert uniquement lors du montage initial du composant
    Form.prototype.setName = function (value, callback) {
        this.setState({ name: value }, callback);
        return this;
    };
    Form.prototype.setOnSubmit = function (handler, callback) {
        this.setState({ onSubmit: handler }, callback);
        return this;
    };
    Form.prototype.setOnFormChange = function (handler, callback) {
        this.setState({ onFormChange: handler }, callback);
        return this;
    };
    Form.prototype.setIsMandatoryFieldsHidden = function (value, callback) {
        this.setState({ isMandatoryFieldsHidden: value }, callback);
        return this;
    };
    Form.prototype.setSubTitle = function (value, callback) {
        this.setState({ subTitle: value }, callback);
        return this;
    };
    Form.prototype.setText = function (value, callback) {
        this.setState({ text: value }, callback);
        return this;
    };
    Form.prototype.setClassName = function (value, callback) {
        this.setState({ className: value }, callback);
        return this;
    };
    Form.prototype.setMarkRequired = function (value, callback) {
        this.setState({ markRequired: value }, callback);
        /* Propagation de la propriété aux champs Hornet appartenant à ce formulaire */
        this.updateMarkRequiredFields(value);
        return this;
    };
    Form.prototype.setImgFilePath = function (value, callback) {
        this.setState({ imgFilePath: value }, callback);
        /* Propagation de la propriété aux champs Hornet appartenant à ce formulaire */
        this.updateImagFilePathFields(value);
        return this;
    };
    Form.prototype.setSchema = function (value, callback) {
        this.setState({ schema: value }, callback);
        return this;
    };
    Form.prototype.setValidationOptions = function (value, callback) {
        this.setState({ validationOptions: value }, callback);
        return this;
    };
    Form.prototype.setFormMessages = function (value, callback) {
        this.setState({ formMessages: value }, callback);
        return this;
    };
    Form.prototype.setCustomValidators = function (value, callback) {
        this.setState({ customValidators: value }, callback);
        return this;
    };
    Form.prototype.setNotifId = function (value, callback) {
        if (value != null) {
            this.setState({ notifId: value, customNotif: true }, callback);
        }
        else {
            this.setState({ notifId: "Form-" + (Form.idx++), customNotif: false }, callback);
        }
        return this;
    };
    Form.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        notification_manager_1.NotificationManager.clean(this.state.notifId);
        if (this.formElement) {
            this.formElement["__component"] = null;
        }
    };
    Form.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        /* On évite la soumission intempestive du formulaire en cas de clics répétés ou de touche entrée maintenue
         sur le bouton de soumission*/
        this.debouncedValidateAndSubmit = _.debounce(this.validateAndSubmit, 500);
        if (this.state.defaultValues) {
            this.updateFields(this.state.defaultValues);
        }
        if (!this.isOneRequired(this.state.children)) {
            this.setMarkRequired(false);
        }
    };
    /**
     * Met à jour la propriété markRequired sur chacun des champs héritant de AbstractField contenus dans le formulaire
     * @param isMarkRequired valeur à assigner à la propriété 'markRequired'
     * @return ce formulaire
     */
    Form.prototype.updateMarkRequiredFields = function (isMarkRequired) {
        var fields = this.extractFields();
        /* Met à jour l'affichage de chaque champ en cas de readOnly*/
        Object.keys(fields).every(function (key) {
            var field = fields[key];
            if (field instanceof abstract_field_1.AbstractField) {
                field.setMarkRequired(isMarkRequired);
            }
            return true;
        });
        return this;
    };
    /**
     * Met à jour la propriété imgFilePath sur chacun des champs héritant de AbstractField contenus dans le formulaire
     * @param imgFilePath valeur à assigner à la propriété 'imgFilePath'
     * @return ce formulaire
     */
    Form.prototype.updateImagFilePathFields = function (imgFilePath) {
        var fields = this.extractFields();
        Object.keys(fields).every(function (key) {
            var field = fields[key];
            if (field instanceof abstract_field_1.AbstractField) {
                field.setImgFilePath(imgFilePath);
            }
            return true;
        });
        return this;
    };
    /**
     * Met à jour les valeurs courantes des champs du formulaire
     * @param data données du formulaire (clé : nom du champ -> valeur du champ)
     */
    Form.prototype.updateFields = function (data) {
        var fields = this.extractFields();
        this.propagateParentState();
        for (var nameField in fields) {
            var val = _.get(data, nameField);
            if (val != null) {
                if (fields[nameField] instanceof checkbox_field_1.CheckBoxField) {
                    /* Traitement spécifique pour une checkbox : on affecte currentChecked lorsque la valeur est booléenne*/
                    // if (val === true || val === false) {
                    //     fields[name].setCurrentValue("");
                    fields[nameField].setCurrentChecked(val);
                    // } else {
                    //     fields[name].setCurrentValue(val);
                    // }
                }
                else {
                    if (fields[nameField] instanceof select_field_1.SelectField || fields[nameField] instanceof auto_complete_field_1.AutoCompleteField) {
                        if (val instanceof Array) {
                            var choices = [];
                            /** TODO : a deplace dans le composant autocompleteField */
                            if (fields[nameField].state.multiple) {
                                for (var i = 0; i < fields[nameField].state.allChoices.length; i++) {
                                    var choice = fields[nameField].state.allChoices[i];
                                    for (var j = 0; j < val.length; j++) {
                                        if (val[j].toString() == choice["value"]) {
                                            choices.push(choice["value"]);
                                            break;
                                        }
                                    }
                                }
                            }
                            else {
                                for (var i = 0; i < fields[nameField].state.dataSource.length; i++) {
                                    var choice = fields[nameField].state.dataSource[i];
                                    for (var j = 0; j < val.length; j++) {
                                        if (val[j].toString() == choice[fields[nameField].state.valueKey]) {
                                            choices.push(choice[fields[nameField].state.valueKey]);
                                            break;
                                        }
                                    }
                                }
                            }
                            fields[nameField].setCurrentValue(choices);
                        }
                        else {
                            fields[nameField].setCurrentValue(val);
                        }
                    }
                    else {
                        /* Traitement des champs radio et select en mode readOnly */
                        if ((fields[nameField].state.choices) && (this.state.readOnly || fields[nameField].state.readOnly)) {
                            for (var i = 0; i < fields[nameField].state.dataSource.length; i++) {
                                var choice = fields[nameField].state.dataSource[i];
                                if (val.toString() == choice[fields[nameField].state.valueKey]) {
                                    fields[nameField].setCurrentValue(choice[fields[nameField].state.valueKey]);
                                    break;
                                }
                            }
                        }
                        else {
                            fields[nameField].setCurrentValue(val);
                        }
                    }
                }
            }
            else {
                if (fields[nameField] instanceof checkbox_field_1.CheckBoxField) {
                    fields[nameField].setCurrentChecked(false);
                }
                else {
                    fields[nameField].setCurrentValue(null);
                }
            }
        }
    };
    /**
     * Traitement spécifique des notifications concernant les champs d'autocomplétion
     * @param fields champs du formulaire
     * @param notifs notifications d'erreurs de validation
     */
    Form.prototype.processAutocompleteErrors = function (fields, notifs) {
        var processedNotifs = notifs.getNotifications().map(function (notif) {
            /* Parcours de tous les champs */
            Object.keys(fields).every(function (key) {
                var field = fields[key];
                if (field instanceof auto_complete_field_1.AutoCompleteField) {
                    var autoField = field;
                    /* La notification référence le nom global du champ d'auto-complétion
                     ou bien le champ caché contenant la valeur :
                     on modifie cette référence pour pointer vers le champ de saisie libre */
                    // if (notif.field == autoField.getAttribute("name") ||
                    if (notif.field == autoField.state.name ||
                        notif.field == (autoField.getValueFieldName())) {
                        notif.field = autoField.getFreeTypingFieldName();
                        /* Fin de la boucle de parcours des auto-complete */
                        return false;
                    }
                }
                return true;
            }, this);
            return notif;
        }, this);
        notifs.setNotifications(processedNotifs);
    };
    /**
     * Déclenche les notifications correspondant aux éventuelles erreurs de validation
     * @param errors erreurs de validation de formulaire, éventuellement vides
     */
    Form.prototype.notifyErrors = function (errors) {
        if (errors) {
            var fieldsMessages = this.state.formMessages && this.state.formMessages.fields;
            var genericValidationMessages = this.i18n("form.validation");
            var fields_1 = this.extractFields();
            var notificationsError_1 = form_utils_1.FormUtils.getErrors(errors, fields_1, fieldsMessages, genericValidationMessages);
            /* Post-traitement des notifications concernant les champs d'autocomplétion */
            this.processAutocompleteErrors(fields_1, notificationsError_1);
            /* Met à jour les erreurs affichées par chaque composant champ */
            Object.keys(fields_1).every(function (key) {
                var field = fields_1[key];
                if (field instanceof abstract_field_1.AbstractField) {
                    field.setErrors(notificationsError_1.getNotifications());
                }
                return true;
            });
            /* Emission des notifications */
            notification_manager_1.NotificationManager.notify(null, notificationsError_1);
        }
    };
    /**
     * Transforme les valeurs des champs déclarés avec le format "date-time" dans le schéma de validation :
     * effectue la conversion depuis la locale courante, vers le format ISO 8601. Ceci permet une validation isomorphique
     * côté client comme serveur en utilisant le même schéma, et la conversion automatique en objet Date côté backend REST
     * reste possible.
     * @param schema schéma de validation JSON-Schema
     * @param data données de formualaire
     */
    Form.prototype.transformDatesToISO = function (schema, data) {
        if (schema && schema.properties && data) {
            var propNames = Object.keys(schema.properties);
            var property = void 0, propName = void 0;
            for (var i = 0; i < propNames.length; i++) {
                propName = propNames[i];
                property = schema.properties[propName];
                if (property.type == "object") {
                    /* Appel récursif sur les éventuelles propriétés incluses dans le sous-schéma */
                    this.transformDatesToISO(property, data[propName]);
                }
                else if (property.format == "date-time") {
                    if (data[propName]) {
                        var date = hornet_js_utils_1.Utils.dateUtils.parseInTZ(data[propName], this.state.calendarLocale.dateFormat);
                        if (date) {
                            /* La chaîne de caractères est une date valide pour la locale : on convertit en représentation ISO 8601.*/
                            data[propName] = date.toISOString();
                        }
                        /* Sinon la valeur incorrecte est conservée*/
                    }
                }
            }
        }
    };
    /**
     * Déclenche la validation du formulaire, notifie les erreurs éventuelles et exécute la fonction
     * onSubmit présente dans les propriétés s'il n'y a pas d'erreurs
     * @private
     */
    Form.prototype.validateAndSubmit = function () {
        if (this.formElement) {
            logger.trace("Validation et envoi du formulaire");
            var data = this.extractData();
            var options = this.state.validationOptions;
            var schema = data_validator_1.DataValidator.transformRequiredStrings(this.state.schema);
            this.transformDatesToISO(this.state.schema, data);
            var validationRes = new data_validator_1.DataValidator(schema, this.state.customValidators, options).validate(data);
            if (!validationRes.valid) {
                this.notifyErrors(validationRes.errors);
            }
            else {
                this.cleanFormErrors();
                if (this.state.onSubmit) {
                    this.state.onSubmit(data);
                }
            }
        }
    };
    /**
     * Supprime les nofifications d'erreurs et les erreurs associées à chaque champ de ce formulaire
     */
    Form.prototype.cleanFormErrors = function () {
        var fields = this.extractFields();
        for (var fieldName in fields) {
            var field = fields[fieldName];
            if (field instanceof abstract_field_1.AbstractField) {
                field.setErrors(null);
            }
        }
        notification_manager_1.NotificationManager.clean(this.state.notifId);
    };
    /**
     * Met à jour les valeurs courantes des champs du formulaire et
     * supprime les nofifications d'erreurs et les erreurs associées à chaque champ de ce formulaire
     * @param data données du formulaire (clé : nom du champ -> valeur du champ)
     */
    Form.prototype.updateFieldsAndClean = function (data) {
        this.updateFields(data);
        this.cleanFormErrors();
    };
    /**
     * Méthode permettant d'alimenter le bloc Notifications d'erreurs puis de déléguer l'évent au composant parent
     * @param e
     * @private
     */
    Form.prototype._submitHornetForm = function (e) {
        /* e.preventDefault ne doit pas être 'débouncée', sinon la soumission par défaut du formulaire serait effectuée */
        e.preventDefault();
        this.debouncedValidateAndSubmit();
    };
    /** @override */
    Form.prototype.propagateParentState = function () {
        /* Le composant parent se charge de propager les propriétés readOnly et disabled */
        _super.prototype.propagateParentState.call(this);
        var fields = this.extractFields();
        Object.keys(fields).every(function (key) {
            var field = fields[key];
            if (field instanceof abstract_field_1.AbstractField) {
                field.setMarkRequired(this.state.markRequired);
                field.setImgFilePath(this.state.imgFilePath);
            }
            return true;
        }, this);
    };
    /** @override */
    Form.prototype.extractFields = function () {
        var fields = {};
        if (this.formElement) {
            for (var index = 0; index < this.formElement.elements.length; index++) {
                var item = this.formElement.elements[index];
                if (item["name"]) {
                    if (item["__component"]) {
                        fields[item["name"]] = item["__component"];
                    }
                    else {
                        if (fields[item["name"]]) {
                            fields[item["name"]].addHtmlElement(item);
                        }
                        else {
                            fields[item["name"]] = new dom_adapter_1.DomAdapter();
                            fields[item["name"]].registerHtmlElement(item);
                        }
                    }
                }
            }
        }
        return fields;
    };
    /**
     * Méthode permettant de déterminer si le formulaire dispose d'un champ de type UploadFileField
     * Dans ce cas, on ajoute la propriété ["encType"] = "multipart/form-data" au formulaire
     * @param items
     * @returns {boolean}
     */
    Form.prototype.isMultiPartForm = function (items) {
        var _this = this;
        var isMultiPart = false;
        React.Children.map(items, function (child) {
            if (!isMultiPart) {
                if (child != null) {
                    if (child["props"] && child["props"].children) {
                        isMultiPart = _this.isMultiPartForm(child["props"].children);
                    }
                    if (!isMultiPart && child.type === upload_file_field_1.UploadFileField) {
                        isMultiPart = true;
                    }
                }
            }
        });
        return isMultiPart;
    };
    /**
     * Méthode permettant de déterminer s'il y a au moins un champ requis.
     * @param items
     * @returns {boolean}
     */
    Form.prototype.isOneRequired = function (items) {
        var _this = this;
        var isOneRequired = false;
        React.Children.map(items, function (child) {
            if (!isOneRequired) {
                if (child != null) {
                    if (child["props"] && child["props"].children) {
                        isOneRequired = _this.isOneRequired(child["props"].children);
                    }
                    if (!isOneRequired && child.props && child.props.required == true) {
                        isOneRequired = true;
                    }
                }
            }
        });
        return isOneRequired;
    };
    /**
     * @inheritDoc
     */
    Form.prototype.render = function () {
        var classes = {
            "form": true,
            "clear": true,
            /* Application du style CSS readonly à tout le bloc lorsque tous les champs sont en lecture seule */
            "readonly": this.state.readOnly
        };
        logger.trace("render(), HornetForm ");
        var customNotif = null;
        if (!this.state.customNotif) {
            customNotif = (React.createElement(notification_1.Notification, { id: this.state.notifId }));
        }
        /* La validation de formulaire HTML 5 est désactivée (noValidate="true") :
         on s'appuie uniquement sur la validation à la soumission et on a ainsi un rendu cohérent entre navigateurs. */
        var formProps = {
            name: this.state.name,
            className: this.state.className,
            method: "post",
            onSubmit: this._submitHornetForm,
            noValidate: true,
            onChange: this.state.onFormChange ? this.state.onFormChange : undefined,
            ref: this.registerForm
        };
        if (this.isMultiPartForm(this.state.children)) {
            formProps["encType"] = "multipart/form-data";
        }
        return (React.createElement("section", { className: "form-container" },
            customNotif,
            React.createElement("div", { className: classNames(classes) },
                React.createElement("form", tslib_1.__assign({}, formProps),
                    (this.state.subTitle || this.state.text
                        || (this.state.markRequired && !this.state.isMandatoryFieldsHidden)) ?
                        React.createElement("div", { className: "form-titles" },
                            this.state.subTitle ? React.createElement("h1", { className: "form-soustitre" }, this.state.subTitle) : null,
                            this.state.text ? React.createElement("p", { className: "form-texte" }, this.state.text) : null,
                            this.state.markRequired && !this.state.isMandatoryFieldsHidden ?
                                React.createElement("p", { className: "discret" }, this.i18n("form.fillField")) : null)
                        : null,
                    (this.state.children) ?
                        React.createElement("div", { className: "form-content" },
                            React.createElement("div", null, this.state.children))
                        : null))));
    };
    /**
     * retourne un tableau de bouton pour la validation du formulaire
     * @param children
     * @returns {Array<any>}
     */
    Form.prototype.getButtonsArea = function (children) {
        var tableauButtonsArea = [];
        React.Children.map(children, function (child) {
            if (child.type === buttons_area_1.ButtonsArea) {
                tableauButtonsArea.push(child);
            }
        });
        return tableauButtonsArea;
    };
    Form.idx = 0;
    /** Valeur de propriétés par défaut */
    Form.defaultProps = _.assign(_.cloneDeep(abstract_form_1.AbstractForm.defaultProps), {
        markRequired: true,
        isMandatoryFieldsHidden: false,
        subTitle: null,
        className: "formRecherche",
        customValidators: [],
        validationOptions: data_validator_1.DataValidator.DEFAULT_VALIDATION_OPTIONS
    });
    return Form;
}(abstract_form_1.AbstractForm));
exports.Form = Form;



/***/ }),

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

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
var tslib_1 = __webpack_require__(0);
/**
 * hornet-js-react-components - Ensemble des composants web React de base de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.0
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
var hornet_js_utils_1 = __webpack_require__(1);
var array_utils_1 = __webpack_require__(314);
var React = __webpack_require__(2);
var classNames = __webpack_require__(19);
var hornet_component_1 = __webpack_require__(4);
var menu_actions_1 = __webpack_require__(372);
var toggle_columns_button_1 = __webpack_require__(352);
var table_state_1 = __webpack_require__(317);
var alert_1 = __webpack_require__(362);
var paginate_datasource_1 = __webpack_require__(328);
var logger = hornet_js_utils_1.Utils.getLogger("hornet-js-components.widget.table.header");
/**
 * Header de tableau
 */
var Header = /** @class */ (function (_super) {
    tslib_1.__extends(Header, _super);
    function Header(props, context) {
        var _this = _super.call(this, props, context) || this;
        if (!_this.props.id) {
            _this.state.id = _this.state.parentId;
        }
        _this.state.libelleNombreTotalItem = _this.state.libelleNombreTotalItem ?
            _this.state.libelleNombreTotalItem : "table.numberElementTitle";
        _this.state.items = [];
        _this.state.selectedItems = [];
        // gestion de l'event de changement de la liste des items du tableau
        _this.handleChangeDataTable = _this.handleChangeDataTable.bind(_this);
        _this.props.tableState.on(table_state_1.TableState.INDEX_CHANGE_EVENT, _this.handleChangeDataTable);
        // gestion de l'event d'edidtion du tableau
        _this.props.contentState.setMaxListeners(Infinity);
        _this.handleEdition = _this.handleEdition.bind(_this);
        _this.props.contentState.on(table_state_1.ContentState.EDITION_CLIC_EVENT, _this.handleEdition);
        _this.hiddenColumns = props.hiddenColumns;
        props.contentState.on(table_state_1.ContentState.TOGGLE_COLUMNS_EVENT, _this.handleChangeHiddenColumns);
        return _this;
    }
    Header.prototype.componentWillUnmount = function () {
        var _this = this;
        this.props.tableState.removeListener(table_state_1.TableState.INDEX_CHANGE_EVENT, this.handleChangeDataTable);
        this.props.contentState.removeListener(table_state_1.ContentState.EDITION_CLIC_EVENT, this.handleEdition);
        if (this.props.dataSourcesList) {
            this.props.dataSourcesList.map(function (dataSource, index) {
                _this.props.dataSourcesList[index].removeListener("select", _this.handleChangeDataTable);
            });
        }
    };
    Header.prototype.componentDidMount = function () {
        var _this = this;
        // gestion de l'event de selection des lignes du tableau
        // on s'abonne au select du dataSource de chaque content
        if (this.props.dataSourcesList && Array.isArray(this.props.dataSourcesList) && this.props.dataSourcesList.length > 0) {
            this.props.dataSourcesList.map(function (dataSource, index) {
                _this.props.dataSourcesList[index].setMaxListeners(Infinity);
                _this.props.dataSourcesList[index].on("select", _this.handleChangeDataTable);
            });
        }
        this.props.tableState.emit(table_state_1.TableState.RESIZE_EVENT, this.headerRef.clientWidth);
    };
    /**
     * @inheritDoc
     */
    Header.prototype.render = function () {
        var _this = this;
        logger.trace("render");
        var headerContainerProps = {
            id: this.state.id,
            className: classNames({
                "datatable-header-title": true,
                "flex-container": true,
                "badge-selected-items-before": this.getTotalSelectedItemsForAllDataSource() != 0
            }),
            "data-badge": this.getTotalSelectedItemsForAllDataSource(),
            tabIndex: this.state.tabIndex
        };
        return (React.createElement("div", tslib_1.__assign({}, headerContainerProps, { ref: function (instance) { _this.headerRef = instance; } }),
            React.createElement("div", { className: "datatable-title" },
                React.createElement("span", { className: "datatable-title-span" }, this.state.title + " " + this.i18n(this.state.libelleNombreTotalItem, { count: this.getTotalItemsForAllDataSource() }))),
            (!this.state.hideMenuActions) ? this.renderMenuActions() : null,
            React.createElement(alert_1.Alert, { ref: "alert", message: "", onClickCancel: this.closeAlert, onClickClose: this.closeAlert })));
    };
    /**
     * Méthode permettant de mettre à jour le nombre de colonnes
     * @param hiddenColumns
     */
    Header.prototype.handleChangeHiddenColumns = function (hiddenColumns) {
        this.hiddenColumns = hiddenColumns;
    };
    /**
     * Rendu HTML du menu des actions
     * @returns {any}
     */
    Header.prototype.renderMenuActions = function () {
        logger.trace("renderMenuActions");
        var children = this.getChildrenOf(menu_actions_1.MenuActions);
        var actions = [];
        // cas ou une seule action est déclarée
        if (children.props && !children.length) {
            actions.push(children);
        }
        else {
            actions = children;
        }
        // Détection de la présence du toggleColumnsButton
        var toggleColumnsButton = this.getComponentBy(toggle_columns_button_1.ToggleColumnsButton);
        var WrappedToggleColumns = null;
        if (toggleColumnsButton) {
            var key = this.state.id + "toggleColumnsButton";
            WrappedToggleColumns = Header.wrap(toggle_columns_button_1.ToggleColumnsButton, toggleColumnsButton, toggleColumnsButton.props, {
                id: this.state.id,
                key: key,
                tabIndex: -1,
                columns: this.props.columns,
                contentState: this.props.contentState,
                hiddenColumns: this.hiddenColumns
            });
        }
        var menuActionsProps = {
            actions: actions,
            items: this.state.items,
            showAlert: this.showAlert,
            showIconInfo: this.props.showIconInfo,
            selectedItems: this.getSelectedItemsForAllContent(),
            id: this.state.id + "-menu-action",
            columns: this.props.columns,
            toggleColumnsButton: WrappedToggleColumns,
            contentState: this.props.contentState
        };
        return (React.createElement(menu_actions_1.MenuActions, tslib_1.__assign({}, menuActionsProps)));
    };
    /**
     * cache le menuActions lorsque la table est en cours d'edition.
     * @param lineIndex
     */
    Header.prototype.handleEdition = function (lineIndex) {
        this.setState({ hideMenuActions: lineIndex !== undefined && lineIndex !== null });
    };
    /**
     *
     * @param selectedItems
     * @param items
     */
    Header.prototype.handleChangeDataTable = function (selectedItems, items) {
        this.setState({ selectedItems: selectedItems, items: items ? items : this.state.items });
    };
    /**
     * Méthode déclenchant la fermeture de la fenêtre modale de suppresion d'un partenaire
     */
    Header.prototype.closeAlert = function () {
        this.refs.alert.close();
    };
    /**
     * Méthode déclenchant la fermeture de la fenêtre modale de suppresion d'un partenaire
     */
    Header.prototype.validateAlert = function (fct) {
        this.refs.alert.close(fct);
    };
    /***
     * Déclenche l'affichage de la modale de suppression d'un partenaire
     * @param message
     * @param title
     * @param {Function} fct fonction exécutée sur la validation
     */
    Header.prototype.showAlert = function (message, title, fct) {
        var _this = this;
        this.refs.alert.setMessage(message);
        this.refs.alert.setTitle(title);
        this.refs.alert.setOnClickOk(function () {
            _this.validateAlert(fct);
        }).open();
    };
    /**
     * fonction qui retourne la liste des items selectionés sur l'ihm lors de la pagination
     * @returns {any[]}
     */
    Header.prototype.getSelectedItemsForAllContent = function () {
        var _this = this;
        logger.trace("getSelectedItemsForAllContent");
        var resultList = [];
        // recupere la liste de tous les items selectionés dans les dataSources des contents
        this.props.dataSourcesList.map(function (dataSource, index) {
            resultList = array_utils_1.ArrayUtils.unionWith(_this.props.dataSourcesList[index].selected, resultList);
        });
        // intersection des items affichés avec les items selectionés dans le dataSource
        resultList = array_utils_1.ArrayUtils.intersectionWith(resultList, this.state.items);
        return resultList;
    };
    /**
     * Retourne la somme totale des items de tous les dataSource de tous les contents
     * @returns {number}
     */
    Header.prototype.getTotalItemsForAllDataSource = function () {
        logger.trace("getTotalItemsForAllDataSource");
        var result = 0;
        this.props.dataSourcesList.map(function (dataSource) {
            var nbItem = 0;
            if (dataSource) {
                // si le dataSource est de type PaginateDataSource, on prend le totalItems sinon on prend le result.length
                if (dataSource instanceof paginate_datasource_1.PaginateDataSource) {
                    var pagDt = dataSource;
                    nbItem = pagDt && pagDt.pagination && pagDt.pagination.totalItems ? pagDt.pagination.totalItems : 0;
                }
                else {
                    nbItem = dataSource.results ? dataSource.results.length : 0;
                }
                result += nbItem;
            }
        });
        return result;
    };
    /**
     * Retourne la somme totale des items de tous les dataSource de tous les contents
     * @returns {number}
     */
    Header.prototype.getTotalSelectedItemsForAllDataSource = function () {
        logger.trace("getTotalSelectedItemsForAllDataSource");
        var result = 0;
        this.props.dataSourcesList.map(function (dataSource) {
            if (dataSource) {
                // si le dataSource est de type PaginateDataSource, on prend le totalItems sinon on prend le result.length
                result += (dataSource.selected) ? dataSource.selected.length : 0;
            }
        });
        return result;
    };
    return Header;
}(hornet_component_1.HornetComponent));
exports.Header = Header;



/***/ }),

/***/ 352:
/***/ (function(module, exports, __webpack_require__) {

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
var tslib_1 = __webpack_require__(0);
/**
 * hornet-js-react-components - Ensemble des composants web React de base de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.0
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
var React = __webpack_require__(2);
var hornet_component_1 = __webpack_require__(4);
var dropdown_1 = __webpack_require__(46);
var checkbox_1 = __webpack_require__(319);
var hornet_event_1 = __webpack_require__(8);
var hornet_js_utils_1 = __webpack_require__(1);
var logger = hornet_js_utils_1.Utils.getLogger("hornet-js-react-components.widget.table.toggle-columns-button");
var SELECTALL_KEYCOLUMN = "selectAll";
/**
 * Classe permettant de générer le rendu html du bouton permettant d'afficher/masquer les colonnes
 */
var ToggleColumnsButton = /** @class */ (function (_super) {
    tslib_1.__extends(ToggleColumnsButton, _super);
    function ToggleColumnsButton(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.state.title = _this.i18n("toggleColumnsButton.title");
        return _this;
    }
    /**
     * @inheritDoc
     */
    ToggleColumnsButton.prototype.render = function () {
        return (React.createElement(dropdown_1.Dropdown, { id: "table-settings", icon: "ico-table-settings-white", items: this.configureDropDownItems(), position: dropdown_1.Position.BOTTOMRIGHT, closeClick: false, title: this.state.title }));
    };
    /**
     * Rendu du HTML
     * @param column
     * @returns {any}
     */
    ToggleColumnsButton.prototype.renderDropDownItem = function (column) {
        var checked = !(this.props.hiddenColumns && this.props.hiddenColumns[column.keyColumn]);
        if (column.keyColumn === SELECTALL_KEYCOLUMN) {
            checked = this.isAllChecked();
        }
        var checkBoxProps = {
            checked: checked,
            onChange: column.action,
            title: column.label,
            name: this.props.columns.id + "-checkbox-" + column.keyColumn,
            id: this.props.columns.id + "-checkbox-" + column.keyColumn
        };
        return (React.createElement("div", { className: "toggle-column-item-content" },
            React.createElement("div", { className: "toggle-column-item-checkbox fl" },
                React.createElement(checkbox_1.CheckBox, tslib_1.__assign({}, checkBoxProps))),
            React.createElement("div", { className: "toggle-column-item-label fl" }, column.title)));
    };
    ToggleColumnsButton.prototype.componentDidMount = function () {
        var _this = this;
        _super.prototype.componentDidMount.call(this);
        this.state.columns.columns.map(function (column) {
            var isVisible = !_this.state.hiddenColumns[column.keyColumn];
            hornet_event_1.fireHornetEvent(new hornet_event_1.HornetEvent("UPDATE_COLUMN_VISIBILITY").withData({
                column: column.keyColumn,
                isVisible: isVisible
            }));
        });
    };
    /**
     * méthode permettant de configurer les items de la liste
     * @returns {Array}
     */
    ToggleColumnsButton.prototype.configureDropDownItems = function () {
        var _this = this;
        var dropdownItems = [];
        if (this.props.selectAllItem) {
            dropdownItems.push(this.configureSelectAllItem());
        }
        this.props.columns.columns.map(function (column, index) {
            column.action = _this.handleToggleColumn.bind(_this, column.keyColumn, _this.props.columns.id);
            dropdownItems.push({
                label: _this.renderDropDownItem(column),
                action: column.action,
                className: "material-dropdown-menu__link",
                key: column.id || index + "-table-settings-" + index
            });
        });
        return dropdownItems;
    };
    /**
     * Méthode de sélection/déselection associé au "Sélectionner tout"
     */
    ToggleColumnsButton.prototype.handleToggleAllColumns = function () {
        var _this = this;
        var checkbox = document.getElementById(this.props.columns.id + "-checkbox-" + SELECTALL_KEYCOLUMN);
        var checked = checkbox.checked;
        Promise.resolve(this.props.columns.columns.map(function (column) {
            _this.toggleColumn(column.keyColumn, !checked);
            _this.toggleCheckBox(column.keyColumn, !checked);
            hornet_event_1.fireHornetEvent(new hornet_event_1.HornetEvent("UPDATE_COLUMN_VISIBILITY").withData({
                column: column.keyColumn,
                isVisible: !checked
            }));
        })).then(function () {
            _this.toggleCheckBox(SELECTALL_KEYCOLUMN, !checked);
        });
        // On exécute la méthode applicative de changement si elle a été déclarée
        if (this.props.onChange) {
            this.props.onChange(this.getColumnsState());
        }
        // On met à jour le ContentState
        this.state.contentState.setHiddenColumns(this.getColumnsState());
    };
    /**
     * Méthode permettant de masquer/afficher une colonne
     * @param keyColumn: string
     */
    ToggleColumnsButton.prototype.handleToggleColumn = function (keyColumn) {
        // Récupération de l'état de la checkbox
        var checkbox = document.getElementsByName(this.props.columns.id + "-checkbox-" + keyColumn)[0];
        this.toggleColumn(keyColumn, !checkbox.checked);
        this.toggleCheckBox(keyColumn, !checkbox.checked);
        if (this.props.selectAllItem) {
            this.controlSelectAllChecked();
        }
        // On exécute la méthode applicative de changement si elle a été déclarée
        if (this.props.onChange) {
            this.props.onChange(this.getColumnsState());
        }
        hornet_event_1.fireHornetEvent(new hornet_event_1.HornetEvent("UPDATE_COLUMN_VISIBILITY").withData(keyColumn));
        // On met à jour le ContentState
        this.state.contentState.setHiddenColumns(this.getColumnsState());
    };
    /**
     * contrôle si l'état de toutes les checkbox afin de gérer l'état de la checkbox "selectAll"
     */
    ToggleColumnsButton.prototype.controlSelectAllChecked = function () {
        var _this = this;
        // On contrôle si tout est sélectionné afin de cocher/décocher le sélectionner tous
        var bool = true;
        this.props.columns.columns.map(function (column) {
            if (bool) {
                var checkbox = document.getElementsByName(_this.props.columns.id + "-checkbox-" + column.keyColumn)[0];
                bool = checkbox.checked;
            }
        });
        this.toggleCheckBox(SELECTALL_KEYCOLUMN, bool);
    };
    /**
     * Permet de connaître l'état des colonnes sélectionnées
     * @returns {{}}
     */
    ToggleColumnsButton.prototype.getColumnsState = function () {
        var _this = this;
        var columnsState = {};
        this.props.columns.columns.map(function (column, index) {
            var checkbox = document.getElementsByName(_this.props.columns.id + "-checkbox-" + column.keyColumn)[0];
            if (column.keyColumn !== SELECTALL_KEYCOLUMN) {
                columnsState[column.keyColumn] = !checkbox.checked;
                if (!checkbox.checked) {
                    columnsState["hidden-" + index] = index;
                }
            }
        });
        return columnsState;
    };
    /**
     * Méthode de toggleColumn
     * @param keyColumn
     * @param checked
     */
    ToggleColumnsButton.prototype.toggleColumn = function (keyColumn, checked) {
        // Gestion du masquage des cellules
        var cells = document.getElementsByClassName(this.props.columns.id + "-" + keyColumn);
        for (var i = 0; i < cells.length; i++) {
            // La colonne est à afficher
            if (checked) {
                cells[i].style.display = "table-cell";
            }
            else {
                cells[i].style.display = "none";
            }
        }
        // Gestion du colspan du/des loader(s)
        var loader = document.getElementsByClassName(this.props.columns.id + "-tr-with-colspan");
        var nbColumns = this.getNbColumnsAlreadyDisplayed();
        for (var i = 0; i < loader.length; i++) {
            loader[i].childNodes[0].colSpan = nbColumns;
        }
    };
    /**
     * Permet de cocher/décocher une checkbox
     * @param keyColumn
     * @param checked
     */
    ToggleColumnsButton.prototype.toggleCheckBox = function (keyColumn, checked) {
        var checkbox = document.getElementsByName(this.props.columns.id + "-checkbox-" + keyColumn)[0];
        checkbox.checked = checked;
    };
    /**
     * Récupération du nombre de colonnes affichées
     * @returns {number}
     */
    ToggleColumnsButton.prototype.getNbColumnsAlreadyDisplayed = function () {
        // Calcul du nombre de colonnes déjà affichées
        var columns = document.getElementById(this.props.columns.id + "-tr-header").childNodes;
        var nbColumns = columns.length;
        for (var i = 0; i < columns.length; i++) {
            if (columns[i].style.display == "none") {
                nbColumns--;
            }
        }
        return nbColumns;
    };
    /**
     * Permet de configurer l'item selectAll
     * @returns {{label: JSX.Element, action: any, className: string, key: string}}
     */
    ToggleColumnsButton.prototype.configureSelectAllItem = function () {
        var conf = {
            keyColumn: SELECTALL_KEYCOLUMN,
            label: this.i18n("dropdown.selectAll"),
            title: this.i18n("dropdown.selectAll"),
            action: this.handleToggleAllColumns
        };
        return {
            label: this.renderDropDownItem(conf),
            action: conf.action,
            className: "material-dropdown-menu__link",
            key: this.props.columns.id + "-table-settings-select-all"
        };
    };
    /**
     * Méthode permettant de déterminer si toutes les cases sont cochées
     * @returns {boolean}
     */
    ToggleColumnsButton.prototype.isAllChecked = function () {
        var _this = this;
        var bool = true;
        if (this.props.hiddenColumns) {
            this.props.columns.columns.map(function (column) {
                if (_this.props.hiddenColumns[column.keyColumn]) {
                    bool = false;
                }
            });
        }
        return bool;
    };
    ToggleColumnsButton.defaultProps = {
        selectAllItem: true
    };
    return ToggleColumnsButton;
}(hornet_component_1.HornetComponent));
exports.ToggleColumnsButton = ToggleColumnsButton;



/***/ }),

/***/ 353:
/***/ (function(module, exports, __webpack_require__) {

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
var tslib_1 = __webpack_require__(0);
/**
 * hornet-js-react-components - Ensemble des composants web React de base de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.0
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
var hornet_js_utils_1 = __webpack_require__(1);
var React = __webpack_require__(2);
var abstract_field_1 = __webpack_require__(311);
var auto_complete_selector_1 = __webpack_require__(364);
var _ = __webpack_require__(6);
var key_codes_1 = __webpack_require__(9);
var auto_complete_state_1 = __webpack_require__(343);
var datasource_master_1 = __webpack_require__(361);
var abstract_field_datasource_1 = __webpack_require__(332);
var logger = hornet_js_utils_1.Utils.getLogger("hornet-js-react-components.widget.form.auto-complete-field");
var FilterTextType;
(function (FilterTextType) {
    FilterTextType[FilterTextType["beginWith"] = 1] = "beginWith";
    FilterTextType[FilterTextType["indexOf"] = 2] = "indexOf";
})(FilterTextType = exports.FilterTextType || (exports.FilterTextType = {}));
/**
 * Composant d'auto-complétion.
 * Les fonctions getCurrentValue et setCurrentValue s'appuient sur le champ caché contenant la valeur sélectionnée.
 */
var AutoCompleteField = /** @class */ (function (_super) {
    tslib_1.__extends(AutoCompleteField, _super);
    function AutoCompleteField(props, context) {
        var _this = _super.call(this, props, context) || this;
        var ariaSelectorId = props.name + "_select";
        //liste des choix possibles
        _this.state.choices = [];
        //item sélectionné
        _this.state.selectedIndex = null;
        //indique si la liste des choix est visible ou non
        _this.state.shouldShowChoices = false;
        //identifiant du selector
        _this.state.ariaSelectorId = ariaSelectorId;
        //loader
        _this.state.isApiLoading = false;
        if (_this.props.dataSource.results) {
            //liste de tous les choix (non filtré par le texte)
            _this.state.allChoices = _this.props.dataSource.results;
        }
        _this.autoCompleteState = new auto_complete_state_1.AutoCompleteState();
        return _this;
    }
    /**
     * Setter indiquant que l'API est en cours d'exécution
     * @param value valeur à utiliser
     * @param callback fonction de callback éventuelle
     * @returns {AutoComplete}
     */
    AutoCompleteField.prototype.setIsApiLoading = function (value, callback) {
        this.setState({ isApiLoading: value }, callback);
        return this;
    };
    /**
     * Setter des choix du composant
     * @param value tableau de choix
     * @param callback fonction de callback éventuelle
     * @returns {AutoComplete}
     */
    AutoCompleteField.prototype.setChoices = function (value, callback) {
        this.setState({ choices: value }, callback);
        return this;
    };
    /**
     * @inheritDoc
     */
    AutoCompleteField.prototype.componentDidMount = function () {
        if (!hornet_js_utils_1.Utils.isServer) {
            if (!_.isUndefined(this.props["var"])) {
                logger.warn("The var props is only available in DEV");
            }
        }
        this.mounted = true;
        logger.trace("auto-complete componentDidMount");
        this._throttledTriggerAction = _.throttle(this.triggerAction, this.state.delay);
        this.props.dataSource.on("fetch", this.fetchEventCallback);
        this.props.dataSource.on("add", this.addEventCallback);
        this.props.dataSource.on("delete", this.setResultCallback);
        this.props.dataSource.on("sort", this.setResultCallback);
        this.props.dataSource.on("filter", this.filterEventCallback);
        this.props.dataSource.on("init", this.initEventCallback);
        this.props.dataSource.on("loadingData", this.displaySpinner);
    };
    /**
     * @inheritDoc
     */
    AutoCompleteField.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        this.mounted = false;
        this.props.dataSource.removeListener("fetch", this.fetchEventCallback);
        this.props.dataSource.removeListener("add", this.addEventCallback);
        this.props.dataSource.removeListener("filter", this.filterEventCallback);
        this.props.dataSource.removeListener("init", this.initEventCallback);
        this.props.dataSource.removeListener("delete", this.setResultCallback);
        this.props.dataSource.removeListener("sort", this.setResultCallback);
        this.props.dataSource.removeListener("loadingData", this.displaySpinner);
    };
    /**
     * @inheritDoc
     */
    AutoCompleteField.prototype.componentWillUpdate = function (nextProps, nextState, nextContext) {
        _super.prototype.componentWillUpdate.call(this, nextProps, nextState, nextContext);
        if (this.state.delay != nextState.delay) {
            /* Le délai d'appel de l'action a changé : on doit donc refaire ici l'encaspulation avec _.throttle */
            this._throttledTriggerAction = _.throttle(this.triggerAction, nextState.delay);
        }
    };
    /**
     * @inheritDoc
     */
    AutoCompleteField.prototype.shouldComponentUpdate = function (nextProps, nextState, nextContext) {
        _super.prototype.componentWillUpdate.call(this, nextProps, nextState, nextContext);
        if (this.state.shouldShowChoices != nextState.shouldShowChoices
            || this.state.listDefaultValue !== nextState.listDefaultValue
            || ((nextState.choices && !this.state.choices)
                || (!nextState.choices && this.state.choices)
                || (nextState.choices && this.state.choices.length != nextState.choices.length))
            || !_.isEqual(nextState.choices, this.state.choices)
            || (this.state.errors != nextState.errors)
            || (this.state.readOnly != nextState.readOnly)
            || (this.state.disabled != nextState.disabled)) {
            return true;
        }
        return false;
    };
    /**
     * Génère le rendu spécifique du champ
     * @returns {any}
     */
    AutoCompleteField.prototype.renderWidget = function () {
        logger.trace("auto-complete  render");
        var shouldShow = this.shouldShowChoices();
        var hasError = this.hasErrors() ? " has-error" : "";
        var className = " autocomplete-content" + hasError;
        if (this.state.className) {
            className += " " + this.state.className;
        }
        var htmlProps = this.getHtmlProps();
        htmlProps = _.assign(htmlProps, {
            "onKeyDown": this.handleOnKeyDown,
            "onFocus": this.handleOnFocus,
            "onBlur": this.handleOnBlur,
            "onDoubleClick": this.handleOnFocus,
            "onClick": this.handleOnFocus,
            "onChange": this.handleChangeTextInput,
            "autoComplete": "off",
            "aria-autocomplete": "list",
            "aria-expanded": shouldShow,
            "aria-owns": this.state.ariaSelectorId,
            "aria-activedescendant": shouldShow ? this.state.ariaSelectorId + "_" + this.state.selectedIndex : undefined,
            "id": this.state.id ? this.state.id : this.getFreeTypingFieldName(),
            "type": "text",
            "name": this.getFreeTypingFieldName(),
            "className": className
        });
        /* Le champ caché contient l'identifiant de l'élément sélectionné. C'est cet identifiant qui est ensuite
         utilisé par les actions. */
        return (React.createElement("div", { className: "autocomplete-container" },
            React.createElement("input", { type: "hidden", name: this.getValueFieldName(), ref: this.registerHiddenInput }),
            React.createElement("input", tslib_1.__assign({}, htmlProps, { ref: this.registerTextInput, readOnly: !this.props.writable, "data-writable": this.props.writable })),
            React.createElement(auto_complete_selector_1.AutoCompleteSelector, { ref: "selector", choices: this.state.choices, onOptionSelected: this.onListWidgetSelected, selectorId: this.state.ariaSelectorId, maxHeight: this.props.maxHeight, showComponent: shouldShow, choicesSelected: this.state.listDefaultValue, autoCompleteState: this.autoCompleteState, disabled: this.state.disabled || this.state.readOnly, noResultLabel: this.state.noResultLabel })));
    };
    /**
     *
     * @param result
     */
    AutoCompleteField.prototype.fetchEventCallback = function (result) {
        this.choicesLoaderCallback(result);
        //dans le cas writable, le composant n'a pas besoin de recharger la liste des choix
        // elle est disponible directement
        if (this.props.writable) {
            if (!this.state.onListWidgetSelected) {
                this.prepareChoices(true);
            }
            else {
                this.prepareChoices(false);
            }
        }
        this.state.onListWidgetSelected = false;
    };
    /**
     * récupération des choix dans le datasource
     * @param result
     */
    AutoCompleteField.prototype.addEventCallback = function (result) {
        this.setResultCallback(result);
    };
    /**
     * récupération des choix dans le datasource
     * @param result
     */
    AutoCompleteField.prototype.setResultCallback = function (result) {
        this.state.allChoices = this.props.dataSource.results;
    };
    /**
     * récupération des choix possibles dans le datasource
     * @param filtered
     */
    AutoCompleteField.prototype.filterEventCallback = function (filtered) {
        this.state.allChoices = filtered;
        this.choicesLoaderCallback(filtered);
    };
    /**
     * récupération des choix à l'initialisation
     * @param result
     */
    AutoCompleteField.prototype.initEventCallback = function (result) {
        this.state.allChoices = result;
    };
    /**
     * retourne le texte saisi
     * @return {any} le texte actuellement saisi dans le champ de saisie libre
     */
    AutoCompleteField.prototype.getCurrentText = function () {
        var text = "";
        if (this.textInput) {
            text = this.textInput.value;
        }
        return text;
    };
    /**
     * Modifie la valeur du texte présent dans l'input
     * @param value texte à mettre dans l'input
     */
    AutoCompleteField.prototype.setCurrentText = function (value) {
        this.textInput.value = value;
    };
    /**
     * Réinitialise le champs autocomplete
     */
    AutoCompleteField.prototype.resetField = function () {
        this.resetSelectedValue();
        this.resetSelectedText();
        this.state.selectedIndex = -1;
        return this;
    };
    /**
     * Réinitialise la valeur de l'élément sélectionné contenu dans le champ caché
     */
    AutoCompleteField.prototype.resetSelectedValue = function () {
        if (this.hiddenInput) {
            this.hiddenInput.value = "";
        }
        this.autoCompleteState.choiceFocused = null;
        this.state.selectedIndex = -1;
    };
    /**
     * Réinitialise la valeur de l'élément sélectionné contenu dans le champ caché
     */
    AutoCompleteField.prototype.resetSelectedText = function () {
        if (this.textInput) {
            this.textInput.value = "";
        }
        if (this.refs.selector) {
            this.refs.selector.setCurrentTypedText("");
        }
    };
    /**
     * Fonction appelée lors d'un appui de touche sur le champ de saisie libre
     * @param e évènement
     * @protected
     */
    AutoCompleteField.prototype.handleOnKeyDown = function (e) {
        /* L'attribut DOM onKeyDown est éventuellement aussi renseigné sur le composant auto-complete */
        if (this.state.onKeyDown) {
            this.state.onKeyDown(event);
        }
        var key = e.keyCode;
        var shouldShow = this.state.shouldShowChoices === true;
        if (key == key_codes_1.KeyCodes.DOWN_ARROW) {
            if (e.altKey) {
                this.autoCompleteState.setFocusOn(this.state.selectedIndex, this.hiddenInput.value, null);
                this.showChoices();
            }
            else {
                this.navigateInChoices(1);
                this.isUpdated = true;
            }
            e.preventDefault();
        }
        else if (key == key_codes_1.KeyCodes.UP_ARROW) {
            if (e.altKey) {
                this.hideChoices();
            }
            else {
                this.navigateInChoices(-1);
                this.isUpdated = true;
            }
            e.preventDefault();
        }
        else if (key == key_codes_1.KeyCodes.ESCAPE) {
            //test si une valeur existait
            if (this.hiddenInput.value) {
                this.selectedChoice(this.hiddenInput.value);
                this.selectCurrentIndex();
            }
            // On demande le masquage des choix
            this.hideChoices();
            e.preventDefault();
        }
        else if (key == key_codes_1.KeyCodes.ENTER) {
            //valide un choix si on est sur un autocomplete simple et writable
            //ne fait rien sinon (valide le formulaire)
            if (this.state.shouldShowChoices && this.state.writable) {
                e.preventDefault();
                this.validateSelectedValue(shouldShow);
            }
        }
        else if (key == key_codes_1.KeyCodes.SPACEBAR && !this.state.writable) {
            //valide un choix si on est sur un autocomplete et non writable
            if (this.state.shouldShowChoices) {
                e.preventDefault();
                this.validateSelectedValue(shouldShow);
            }
        }
        else if (key == key_codes_1.KeyCodes.TAB && !e.shiftKey && this.state.shouldShowChoices) {
            this.tabHandlerForValueChange(e, shouldShow);
        }
        else if (key == key_codes_1.KeyCodes.TAB && e.shiftKey) {
            this.tabHandlerForValueChange(e, shouldShow);
        }
        else if (key == key_codes_1.KeyCodes.HOME) {
            if (shouldShow) {
                this.state.selectedIndex = null;
                this.navigateInChoices(1);
            }
            else {
                this.state.selectedIndex = 0;
                this.selectCurrentIndex();
                this.hideChoices();
            }
            this.isUpdated = true;
            e.preventDefault();
        }
        else if (key == key_codes_1.KeyCodes.END) {
            if (shouldShow) {
                this.state.selectedIndex = null;
                this.navigateInChoices(-1);
            }
            else {
                this.state.selectedIndex = this.state.choices.length - 1;
                this.selectCurrentIndex();
                this.hideChoices();
            }
            this.isUpdated = true;
            e.preventDefault();
        }
    };
    /**
     * gère la tabulation
     * @param {__React.KeyboardEvent<HTMLElement>} e
     * @param {boolean} shouldShow
     * @param {boolean} preventDefault
     */
    AutoCompleteField.prototype.tabHandlerForValueChange = function (e, shouldShow) {
        if (this.isUpdated) {
            this.validateSelectedValue(shouldShow);
            this.isUpdated = false;
        }
        else {
            this.selectCurrentIndex();
            this.hideChoices();
        }
    };
    /**
     * valide le choix sélectionné
     * @param shouldShow indique si les résultats doivent être affichés
     */
    AutoCompleteField.prototype.validateSelectedValue = function (shouldShow) {
        var _this = this;
        if (shouldShow) {
            // place le selectedIndex sur le choix
            if (!this.state.selectedIndex) {
                this.state.choices.map(function (element, index) {
                    if (element.text == _this.getCurrentText()) {
                        _this.state.selectedIndex = index;
                    }
                });
            }
            //choix sélectionné
            var selection = (this.state.choices[this.state.selectedIndex] || this.state.allChoices[this.state.selectedIndex]);
            if (selection != null) {
                this.setCurrentValue(selection.value);
                this.props.dataSource.select(selection.value);
            }
            else {
                this.setCurrentValue(null);
                this.props.dataSource.select(null);
            }
            this.selectCurrentIndex();
            this.hideChoices();
        }
        else {
            this.showChoices();
        }
    };
    /**
     * Gestion de l'évènement onFocus pour le champ de saisie libre.
     * @param event
     */
    AutoCompleteField.prototype.handleOnFocus = function (event) {
        var _this = this;
        this.typedValueOnFocus = this.getCurrentText();
        this.state.focused = true;
        this.showChoices();
        /* L'attribut DOM onBlur est éventuellement aussi renseigné sur le composant auto-complete */
        if (this.state.onFocus) {
            this.state.onFocus(event);
        }
        if (this.state.allChoices) {
            if (this.isValidText(this.typedValueOnFocus) || !this.props.writable) {
                logger.trace("auto-complete : prise en compte du texte présent au focus : ", this.typedValueOnFocus);
                if (!this.props.dataSource.status) {
                    this.props.dataSource.init();
                }
                else {
                    if ((!this.props.writable) || this.state.choices.length == 0 && this.hiddenInput.value) {
                        this.setChoices(this.state.allChoices, function () {
                            if (_this.state.allChoices.length > 0) {
                                var index = _.findIndex(_this.state.allChoices, { text: _this.typedValueOnFocus });
                                _this.state.selectedIndex = index === undefined ? -1 : index;
                                _this.showChoices();
                                _this.changeSelectedChoiceWhenOneChoice(_this.typedValueOnFocus);
                            }
                        });
                    }
                }
                //this._throttledTriggerAction(this.typedValueOnFocus);
                this.changeSelectedChoiceWhenOneChoice(this.typedValueOnFocus);
            }
            else {
                this.setChoices(this.state.allChoices, function () {
                    if (_this.state.allChoices.length > 0) {
                        _this.showChoices();
                        _this.state.selectedIndex = -1;
                        _this.autoCompleteState.setFocusOn(_this.state.selectedIndex, "", null);
                    }
                });
            }
        }
        else {
            this.showChoices();
        }
        if (!this.hiddenInput || this.hiddenInput.value.length == 0 || !this.textInput || this.textInput.value.length == 0) {
            this.clearFilterData();
            this.state.selectedIndex = -1;
            this.autoCompleteState.setFocusOn(this.state.selectedIndex, "", null);
        }
        else {
            this.state.selectedIndex = _.findIndex(this.state.allChoices, { text: this.typedValueOnFocus });
            this.autoCompleteState.setFocusOn(this.state.selectedIndex, this.hiddenInput.value, null);
        }
    };
    /**
     * Fonction déclenchée lorsque le champ de saisie libre perd le focus
     * @param event
     */
    AutoCompleteField.prototype.handleOnBlur = function (event) {
        this.state.focused = false;
        /* L'attribut DOM onBlur est éventuellement aussi renseigné sur ce composant auto-complete */
        if (this.state.onBlur) {
            this.state.onBlur(event);
        }
        var currentText = this.getCurrentText();
        if (this.state.allChoices) {
            this.state.allChoices.filter(function (choice) {
                var res = false;
                if (!choice.text) {
                    res = choice.text.toLowerCase() === currentText.toLowerCase();
                }
                return res;
            });
        }
        if (!this.hiddenInput || !this.hiddenInput.value || this.hiddenInput.value.length == 0) {
            this.clearFilterData();
            if (!this.state.isShiftTab)
                this.props.dataSource.select(null);
        }
        else {
            this.props.dataSource.select(this.hiddenInput.value);
        }
        this.hideChoices();
        this.isUpdated = false;
    };
    /**
     * indique aux élément esclave qu'un filter a été fait sur le maitre si le datasource en est un
     */
    AutoCompleteField.prototype.clearFilterData = function () {
        if (this.props.dataSource instanceof datasource_master_1.DataSourceMaster) {
            this.props.dataSource.getSlaves().forEach(function (item) {
                item.emit("filter", []);
            });
        }
    };
    /**
     * Fonction déclenchée sur une modification du champ de saisie libre
     * @param event
     */
    AutoCompleteField.prototype.handleChangeTextInput = function (event) {
        var _this = this;
        logger.trace("auto-complete handleChangeTextInput");
        /* Le texte a changé donc on réinitialise la valeur */
        this.resetSelectedValue();
        this.state.selectedIndex = null;
        /* L'attribut DOM onChange est éventuellement aussi renseigné sur le composant auto-complete */
        if (this.state.onChange) {
            this.state.onChange(event);
        }
        var newText = this.getCurrentText();
        this.clearFilterData();
        this.isUpdated = true;
        if (this.refs.selector) {
            this.refs.selector.setCurrentTypedText(newText);
        }
        if (this.isValidText(newText)) {
            logger.trace("auto-complete : prise en compte du texte saisi : ", newText);
            this._throttledTriggerAction(newText);
        }
        else {
            this.hideChoices();
        }
        if (newText.length == 0) {
            this.setChoices(this.state.allChoices, function () {
                if (_this.state.allChoices.length > 0) {
                    _this.showChoices();
                }
                else {
                    _this.props.dataSource.select(null);
                }
            });
        }
    };
    /**
     * si il n'y a plus qu'un choix écrit dans sa totalité,
     * valid ele choix
     * @param {string} newText
     */
    AutoCompleteField.prototype.changeSelectedChoiceWhenOneChoice = function (newText) {
        if (this.state.choices && this.state.choices[0] && this.state.choices.length === 1
            && _.deburr(newText).toLowerCase() == _.deburr(this.state.choices[0].text).toLowerCase()) {
            this.changeSelectedChoice(this.state.choices[0]);
            this.props.dataSource.select(this.state.choices[0].value);
            this.autoCompleteState.setFocusOn(0, this.state.choices[0].value, 0);
        }
    };
    /**
     * change la valeur courrante
     * @param value
     * @returns {this}
     */
    AutoCompleteField.prototype.setCurrentValue = function (value) {
        _super.prototype.setCurrentValue.call(this, value);
        this.setState({ listDefaultValue: value });
        return this;
    };
    /**
     * Déclenche le chargement des éléments correspondant au texte saisi
     * @param newText texte saisi
     */
    AutoCompleteField.prototype.triggerAction = function (newText) {
        this.setIsApiLoading(true);
        this.props.dataSource.fetch(true, newText, true);
    };
    /**
     * Controle la longeur du text saisie avant de déclancher la recherche
     * @param cnt : boolean
     */
    AutoCompleteField.prototype.isMaxElementNumberReached = function (cnt) {
        return this.state.maxElements && cnt >= this.state.maxElements;
    };
    /**
     * Charge la liste de choix dans le composant
     */
    AutoCompleteField.prototype.prepareChoices = function (display) {
        var _this = this;
        if (display === void 0) { display = true; }
        var newChoices = [];
        var cnt = 0;
        if (this.state.choices) {
            this.state.choices.map(function (choice) {
                if (_this.findText(choice, _this.getCurrentText().toLowerCase()) && !_this.isMaxElementNumberReached(cnt)) {
                    newChoices.push(choice);
                    cnt++;
                }
            });
        }
        // mets a jour la liste des choix
        this.setChoices(newChoices, function () {
            if (newChoices.length > 0 && display) {
                //si il n'y a plus qu'un choix on le valide
                _this.changeSelectedChoiceWhenOneChoice(_this.getCurrentText());
                _this.showChoices();
            }
            else {
                _this.hiddenInput.value = "";
                _this.props.dataSource.select(null);
                _this.showChoices();
            }
        });
    };
    /**
     * Fonction déclenchée une fois les éléments de choix obtenus par la fonction choicesLoader
     * @param resultItems éléments obtenus. ceux-ci doivent contenir une propr
     */
    AutoCompleteField.prototype.choicesLoaderCallback = function (resultItems) {
        this.setIsApiLoading(false);
        this.setChoices(resultItems);
    };
    /**
     * test si le choix choice commence par current
     * @param choice
     * @param current
     * @returns {boolean}
     */
    AutoCompleteField.prototype.startsWithText = function (choice, current) {
        var choiceText = choice ? choice["text"] ? choice["text"].toLowerCase() : null : null;
        return _.startsWith(choiceText, current);
    };
    /**
     * teste si le texte current est contenu dans le choix choice
     * @param choice
     * @param current
     * @returns {boolean}
     */
    AutoCompleteField.prototype.indexOfText = function (choice, current) {
        var choiceText = choice ? choice["text"] ? choice["text"].toLowerCase() : null : null;
        if (choiceText && (choiceText.indexOf(current) >= 0)) {
            return true;
        }
        return false;
    };
    /**
     * indique si le texte current se trouve dans le choix
     * @param choice
     * @param current
     * @returns {boolean}
     */
    AutoCompleteField.prototype.findText = function (choice, current) {
        if (typeof this.props.filterText == "function") {
            return this.props.filterText(choice, current);
        }
        else if (this.props.filterText == FilterTextType.beginWith) {
            return this.startsWithText(choice, current);
        }
        else if (this.props.filterText == FilterTextType.indexOf) {
            return this.indexOfText(choice, current);
        }
        return false;
    };
    /**
     * Fonction appelée lorsque l'utilisateur a choisi un élément de la liste de choix.
     * @param choice élément sélectionné
     */
    AutoCompleteField.prototype.changeSelectedChoice = function (choice) {
        if (this.refs.selector) {
            this.refs.selector.setCurrentTypedText("");
        }
        this.textInput.value = choice ? choice.text : "";
        this.hiddenInput.value = choice ? choice.value : "";
    };
    /**
     * Recupere l'index de l'element selectionné
     * @param choice
     */
    AutoCompleteField.prototype.selectedChoice = function (choice) {
        var indexSelected = null;
        if (this.state.choices) {
            this.state.choices.map(function (item, index) {
                if (item.value == choice) {
                    indexSelected = index;
                }
            });
            this.setCurrentValue(choice);
        }
    };
    /**
     * Fonction appelée lorsque l'utilisateur clique sur un item de la liste des valeurs possibles
     * @param event
     */
    AutoCompleteField.prototype.onListWidgetSelected = function (event) {
        var selectedText = event.currentTarget["getAttribute"]("data-real-text");
        var selectedValue = event.currentTarget["getAttribute"]("data-real-value");
        /* On n'utilise pas la syntaxe getAttribute dataset.realText car la propriété dataset n'est pas définie sous IE10 */
        if (selectedValue) {
            logger.trace("Selection click [", selectedValue, "]:", selectedText);
            var index = _.findIndex(this.state.choices, { text: selectedText });
            this.state.selectedIndex = index;
            this.autoCompleteState.choiceFocused = index;
            this.changeSelectedChoice({ text: selectedText, value: selectedValue });
            this.hiddenInput.value = selectedValue;
            this.selectedChoice(selectedValue);
            this.props.dataSource.select(selectedValue);
        }
        this.state.onListWidgetSelected = true;
        this.hideChoices();
    };
    /**
     * Retourne true si le texte indiqué correspond aux critères de taille minimale
     * @param text
     * @returns {boolean}
     * @protected
     */
    AutoCompleteField.prototype.isValidText = function (text) {
        return (text != null && text.length >= this.state.minValueLength);
    };
    /**
     * Navigue au sein de la liste de choix
     * @param delta {number} indique de combien d'éléments on doit se déplacer par rapport à l'élément actuellement sélectionné
     * @protected
     */
    AutoCompleteField.prototype.navigateInChoices = function (delta) {
        var _this = this;
        var newIndex = this.state.selectedIndex === null ? (delta === 1 ? 0 : delta) : this.state.selectedIndex + delta;
        var choicesLength = this.state.choices ? this.state.choices.length : 0;
        if (newIndex < 0) {
            //On va à la fin
            newIndex = choicesLength - 1;
        }
        else if (newIndex >= choicesLength) {
            //On retourne au début
            newIndex = 0;
        }
        // on valide le choix sur lequel on est
        this.setState({ selectedIndex: newIndex }, function () {
            _this.selectCurrentIndex();
            if (!_this.state.shouldShowChoices) {
                var selection = (_this.state.choices[_this.state.selectedIndex]);
                if (selection != null) {
                    _this.changeSelectedChoice(selection);
                    _this.setCurrentValue(selection.value);
                }
            }
            _this.autoCompleteState.setFocusOn(_this.state.selectedIndex, _this.hiddenInput.value, newIndex);
        });
        // On s'assure de l'affichage de la liste déroulante
        if (this.state.shouldShowChoices) {
            this.showChoices();
        }
    };
    /**
     * Selectionne l'élement actuellement en surbrillance dans la liste de choix
     * @return boolean si une sélection a effectivement eu lieu
     * @protected
     */
    AutoCompleteField.prototype.selectCurrentIndex = function () {
        var selection = (this.state.choices || [])[this.state.selectedIndex];
        if (selection != null) {
            this.changeSelectedChoice(selection);
            return true;
        }
        return false;
    };
    /**
     * Demande l'affichage du composant de choix
     * @public
     */
    AutoCompleteField.prototype.showChoices = function () {
        if (this.state.shouldShowChoices !== true && this.state.focused) {
            if (this.isValidText(this.textInput.value) || this.textInput.value.length == 0 || !this.props.writable) {
                this.setState({ shouldShowChoices: true });
            }
        }
    };
    /**
     * Demande le masquage du composant de choix
     * @public
     */
    AutoCompleteField.prototype.hideChoices = function () {
        if (this.state.shouldShowChoices !== false) {
            this.setState({ shouldShowChoices: false });
        }
    };
    /**
     * @return {boolean} true si le composant de liste doit s'afficher
     * @protected
     */
    AutoCompleteField.prototype.shouldShowChoices = function () {
        return this.state.shouldShowChoices === true;
    };
    /**
     * @return {string} le nom du champ caché contenant la valeur
     */
    AutoCompleteField.prototype.getValueFieldName = function () {
        return this.state.name + "." + this.state.valueKey;
    };
    /**
     * @return {string} le nom du champ de saisie libre
     */
    AutoCompleteField.prototype.getFreeTypingFieldName = function () {
        return this.state.name + "." + this.state.labelKey;
    };
    /**
     * Surcharge le rendu des erreurs de validation : le nom du champ à mettre en évidence est le champ de saisie libre
     * @override
     */
    AutoCompleteField.prototype.renderErrors = function () {
        var fieldErrorProps = {
            errors: this.state.errors,
            fieldName: this.getFreeTypingFieldName()
        };
        var basicFieldErrorProps = {
            errors: this.state.errors,
            fieldName: this.state.name
        };
        var Error = this.state.errorComponent;
        return (React.createElement("div", null,
            React.createElement(Error, tslib_1.__assign({}, fieldErrorProps)),
            React.createElement(Error, tslib_1.__assign({}, basicFieldErrorProps))));
    };
    /**
     * On enregistre également le champ contenant la valeur dans la classe parente DomAdapter, ce qui fait les liens
     entre le formulaire, le champ HTML et le composant React.
     * @param hiddenInput
     */
    AutoCompleteField.prototype.registerHiddenInput = function (hiddenInput) {
        this.hiddenInput = hiddenInput;
        this.registerHtmlElement(hiddenInput);
    };
    /**
     *  Conserve la valeur du champs saisie
     * @param textInput
     */
    AutoCompleteField.prototype.registerTextInput = function (textInput) {
        this.textInput = textInput;
    };
    /** on mets le focus sur l'input */
    AutoCompleteField.prototype.setFocus = function () {
        this.state.focused = true;
        this.textInput.focus();
        return this;
    };
    /**
     * teste si le composant a des erreurs
     * @override
     */
    AutoCompleteField.prototype.hasErrors = function () {
        var fieldErrors = null;
        if (this.state.errors) {
            fieldErrors = this.state.errors.filter(function (error) {
                var name = this.state.name + "." + this.state.labelKey;
                return (error.field == name || error.field == this.state.name);
            }, this);
        }
        if (fieldErrors && (fieldErrors.length > 0)) {
            return true;
        }
        return false;
    };
    AutoCompleteField.defaultProps = _.assign({
        minValueLength: 1,
        readOnly: false,
        disabled: false,
        delay: 1000,
        valueKey: "value",
        labelKey: "text",
        maxHeight: null,
        writable: true,
        filterText: FilterTextType.indexOf
    }, abstract_field_1.AbstractField.defaultProps);
    return AutoCompleteField;
}(abstract_field_datasource_1.AbstractFieldDatasource));
exports.AutoCompleteField = AutoCompleteField;



/***/ }),

/***/ 354:
/***/ (function(module, exports, __webpack_require__) {

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
var tslib_1 = __webpack_require__(0);
/**
 * hornet-js-react-components - Ensemble des composants web React de base de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.0
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
var React = __webpack_require__(2);
var abstract_field_1 = __webpack_require__(311);
var _ = __webpack_require__(6);
var classNames = __webpack_require__(19);
var key_codes_1 = __webpack_require__(9);
/**
 * Champ de formulaire Hornet de type Checkbox
 */
var CheckBoxField = /** @class */ (function (_super) {
    tslib_1.__extends(CheckBoxField, _super);
    function CheckBoxField(props, context) {
        var _this = _super.call(this, props, context) || this;
        if (props.readOnly) {
            // permet de désactiver le click lorsqu'uniquement readOnly par défaut
            _this.copyInitialPropsToState({ readOnly: true, disabled: true }, _this.state);
        }
        if (!_this.props.labelOnOff) {
            _this.state.labelOnOff = {
                "on": _this.i18n("form.checkbox.booleanOui"),
                "off": _this.i18n("form.checkbox.booleanNon")
            };
        }
        return _this;
    }
    /**
     * Génère le rendu spécifique du champ
     * @returns {any}
     * @override
     */
    CheckBoxField.prototype.renderWidget = function () {
        var cx = classNames(this.state.groupClass, "checkbox-container", {
            "inline": this.state.inline == abstract_field_1.InlineStyle.ALL || this.state.inline == abstract_field_1.InlineStyle.FIELD,
            "readonly": this.state.readOnly
        });
        var htmlProps = this.getHtmlProps();
        if (this.state.currentChecked != null) {
            _.assign(htmlProps, { "defaultChecked": this.state.currentChecked });
        }
        if (this.state.readOnly && !this.state.disabled) {
            htmlProps.disabled = true;
        }
        var element;
        if (this.state.readOnly) {
            delete htmlProps["onChange"];
        }
        if (this.state.switch) {
            element = this.renderSwitch(htmlProps);
        }
        else {
            element = this.renderCheckbox(htmlProps);
        }
        return (React.createElement("section", { className: cx }, element));
    };
    /**
     * Génère le rendu du champ en mode switch
     * @returns {any}
     */
    CheckBoxField.prototype.renderSwitch = function (htmlProps) {
        var _this = this;
        var labelOn = this.state.labelOnOff.on;
        var labelOff = this.state.labelOnOff.off;
        return (React.createElement("div", { className: "switch-content" },
            React.createElement("label", { className: "switch", onKeyDown: this.handleKeyDown },
                React.createElement("input", tslib_1.__assign({ ref: function (elt) { return _this.registerHtmlElement(elt); }, type: "checkbox", className: "switch-input" }, htmlProps, { value: "true" })),
                React.createElement("span", { "data-off": labelOff, "data-on": labelOn, className: "switch-label" }),
                React.createElement("span", { className: "switch-handle" }))));
    };
    /**
     * Génère le rendu du champ en mode checkbox
     * @returns {any}
     */
    CheckBoxField.prototype.renderCheckbox = function (htmlProps) {
        var _this = this;
        var classNamesSpan = {
            check: true,
            readonly: this.state.readOnly
        };
        return (React.createElement("div", { className: "checkbox-container" },
            React.createElement("label", { className: "checkbox-content", onKeyDown: this.handleKeyDown },
                React.createElement("input", tslib_1.__assign({ ref: function (elt) { return _this.registerHtmlElement(elt); }, type: "checkbox" }, htmlProps, { value: "true" })),
                React.createElement("span", { className: "checkbox-material" },
                    React.createElement("span", { className: classNames(classNamesSpan) })))));
    };
    /**
     * prise en compte de la navigation clavier pour les touches entrée et espace
     * @param e
     */
    CheckBoxField.prototype.handleKeyDown = function (e) {
        if (e.keyCode == key_codes_1.KeyCodes.ENTER) {
            this.setCurrentChecked(!this.getCurrentValue());
            e.preventDefault();
            e.stopPropagation();
        }
    };
    CheckBoxField.defaultProps = _.assign(abstract_field_1.AbstractField.defaultProps, {
        switch: false
    });
    return CheckBoxField;
}(abstract_field_1.AbstractField));
exports.CheckBoxField = CheckBoxField;



/***/ }),

/***/ 355:
/***/ (function(module, exports, __webpack_require__) {

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
var tslib_1 = __webpack_require__(0);
/**
 * hornet-js-react-components - Ensemble des composants web React de base de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.0
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
var React = __webpack_require__(2);
var hornet_component_1 = __webpack_require__(4);
/**
 * Génère le rendu d'un ou plusieurs message d'erreur de validation au-dessus d'un champ de formulaire
 */
var FieldError = /** @class */ (function (_super) {
    tslib_1.__extends(FieldError, _super);
    function FieldError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    FieldError.prototype.render = function () {
        var _this = this;
        /* Filtrage des erreurs correspondant au nom du champ*/
        var fieldErrors;
        if (this.state.errors) {
            fieldErrors = this.state.errors.filter(function (error) {
                return (error.field == this.state.fieldName && !this.state.hideError);
            }, this);
        }
        else {
            fieldErrors = new Array(0);
        }
        return (fieldErrors.length > 0 ?
            React.createElement("div", { className: "fielderror-container" }, fieldErrors.map(function (error) {
                return React.createElement("div", { key: error.id, className: "fielderror-content formmgr-message-text", id: _this.props.fieldName + "-error" }, error.text);
            })) : null);
    };
    FieldError.defaultProps = {
        errors: new Array(0)
    };
    return FieldError;
}(hornet_component_1.HornetComponent));
exports.FieldError = FieldError;



/***/ }),

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

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
var html_const_attributes_1 = __webpack_require__(357);
var _ = __webpack_require__(6);
/**
 * Object contenant toutes les propriétés standards HTML définies dans HornetHTMLAttributes.
 * Sert à vérifier si une propriété est une propriété standard HTML.
 */
exports.HTML_ATTRIBUTES = _.assign(html_const_attributes_1.HtmlAttributes.HTML_NON_STANDARD_ATTRIBUTES, html_const_attributes_1.HtmlAttributes.HTML_RDFA_ATTRIBUTES, html_const_attributes_1.HtmlAttributes.HTML_STANDARD_CONFIG_ATTRIBUTES, html_const_attributes_1.HtmlAttributes.HTML_STANDARD_PRESENTATION_ATTRIBUTES, html_const_attributes_1.HtmlAttributes.HTML_STANDARD_FORM_ATTRIBUTES, html_const_attributes_1.HtmlAttributes.HTML_STANDARD_GLOBAL_ATTRIBUTES, html_const_attributes_1.HtmlAttributes.HTML_STANDARD_MEDIA_ATTRIBUTES, html_const_attributes_1.HtmlAttributes.HTML_STANDARD_META_ATTRIBUTES, html_const_attributes_1.HtmlAttributes.REACT_CLIPBOARD_DOM_ATTRIBUTES, html_const_attributes_1.HtmlAttributes.REACT_COMPOSE_DOM_ATTRIBUTES, html_const_attributes_1.HtmlAttributes.REACT_FOCUS_DOM_ATTRIBUTES, html_const_attributes_1.HtmlAttributes.REACT_FORM_DOM_ATTRIBUTES, html_const_attributes_1.HtmlAttributes.REACT_IMAGE_DOM_ATTRIBUTES, html_const_attributes_1.HtmlAttributes.REACT_KEYBOARD_DOM_ATTRIBUTES, html_const_attributes_1.HtmlAttributes.REACT_MEDIA_DOM_ATTRIBUTES, html_const_attributes_1.HtmlAttributes.REACT_BASIC_MOUSE_DOM_ATTRIBUTES, html_const_attributes_1.HtmlAttributes.REACT_DRAG_DOM_ATTRIBUTES, html_const_attributes_1.HtmlAttributes.REACT_SELECT_DOM_ATTRIBUTES, html_const_attributes_1.HtmlAttributes.REACT_TOUCH_DOM_ATTRIBUTES, html_const_attributes_1.HtmlAttributes.REACT_SCROLL_DOM_ATTRIBUTES, html_const_attributes_1.HtmlAttributes.REACT_WHEEL_DOM_ATTRIBUTES, html_const_attributes_1.HtmlAttributes.REACT_ANIMATION_DOM_ATTRIBUTES, html_const_attributes_1.HtmlAttributes.REACT_TRANSITION_DOM_ATTRIBUTES, html_const_attributes_1.HtmlAttributes.REACT_BASIC_DOM_ATTRIBUTES);



/***/ }),

/***/ 357:
/***/ (function(module, exports, __webpack_require__) {

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
// TODO tetaudf - retirer les constantes en évitant la valorisation explicite grâce au décorateur @AutoInit
exports.HTML_STANDARD_CONFIG_ATTRIBUTES = {
    accept: "",
    acceptCharset: "",
    action: "",
    autoComplete: "",
    charSet: "",
    challenge: "",
    checked: true,
    classID: "",
    dateTime: "",
    default: true,
    defer: true,
    disabled: true,
    download: null,
    encType: "",
    high: 1,
    href: "",
    hrefLang: "",
    htmlFor: "",
    inputMode: "",
    integrity: "",
    is: "",
    keyParams: "",
    keyType: "",
    list: "",
    low: 1,
    manifest: "",
    method: "",
    multiple: true,
    name: "",
    open: true,
    optimum: 1,
    pattern: "",
    placeholder: "",
    radioGroup: "",
    readOnly: true,
    rel: "",
    role: "",
    sandbox: "",
    scrolling: "",
    seamless: true,
    sizes: "",
    summary: "",
    target: "",
    type: "",
    useMap: ""
};
exports.HTML_STANDARD_FORM_ATTRIBUTES = {
    form: "",
    formAction: "",
    formEncType: "",
    formMethod: "",
    formNoValidate: true,
    formTarget: "",
    noValidate: true,
    required: true,
    wrap: ""
};
exports.HTML_STANDARD_GLOBAL_ATTRIBUTES = {
    accessKey: "",
    className: "",
    contentEditable: true,
    contextMenu: "",
    data: "",
    dir: "",
    draggable: true,
    hidden: true,
    id: "",
    lang: "",
    spellCheck: true,
    style: null,
    tabIndex: 1,
    title: ""
};
exports.HTML_STANDARD_MEDIA_ATTRIBUTES = {
    allowFullScreen: true,
    allowTransparency: true,
    async: true,
    autoPlay: true,
    capture: true,
    controls: true,
    coords: "",
    crossOrigin: "",
    kind: "",
    label: "",
    loop: true,
    media: "",
    mediaGroup: "",
    muted: true,
    poster: "",
    preload: "",
    src: "",
    srcLang: "",
    srcSet: "",
    wmode: ""
};
exports.HTML_STANDARD_META_ATTRIBUTES = {
    content: "",
    httpEquiv: ""
};
exports.HTML_STANDARD_PRESENTATION_ATTRIBUTES = {
    alt: "",
    autoFocus: true,
    cellPadding: "",
    cellSpacing: "",
    cols: 1,
    colSpan: 1,
    frameBorder: "",
    headers: "",
    height: "",
    icon: "",
    marginHeight: 1,
    marginWidth: 1,
    max: "",
    maxLength: 1,
    min: "",
    minLength: 1,
    rows: 1,
    rowSpan: 1,
    scope: "",
    scoped: true,
    selected: true,
    shape: "",
    size: 1,
    span: 1,
    srcDoc: "",
    start: 1,
    step: "",
    width: ""
};
exports.HTML_RDFA_ATTRIBUTES = {
    about: "",
    datatype: "",
    inlist: null,
    prefix: "",
    property: "",
    resource: "",
    typeof: "",
    vocab: ""
};
exports.HTML_NON_STANDARD_ATTRIBUTES = {
    autoCapitalize: "",
    autoCorrect: "",
    autoSave: "",
    color: "",
    itemProp: "",
    itemScope: true,
    itemType: "",
    itemID: "",
    itemRef: "",
    results: 1,
    security: "",
    unselectable: true
};
exports.REACT_CLIPBOARD_DOM_ATTRIBUTES = {
    onCopy: null,
    onCut: null,
    onPaste: null
};
exports.REACT_COMPOSE_DOM_ATTRIBUTES = {
    onCompositionEnd: null,
    onCompositionStart: null,
    onCompositionUpdate: null
};
exports.REACT_FOCUS_DOM_ATTRIBUTES = {
    onFocus: null,
    onBlur: null
};
exports.REACT_FORM_DOM_ATTRIBUTES = {
    onChange: null,
    onInput: null,
    onSubmit: null
};
exports.REACT_IMAGE_DOM_ATTRIBUTES = {
    onLoad: null,
    onError: null
};
exports.REACT_KEYBOARD_DOM_ATTRIBUTES = {
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null
};
exports.REACT_MEDIA_DOM_ATTRIBUTES = {
    onAbort: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onDurationChange: null,
    onEmptied: null,
    onEncrypted: null,
    onEnded: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadStart: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onProgress: null,
    onRateChange: null,
    onSeeked: null,
    onSeeking: null,
    onStalled: null,
    onSuspend: null,
    onTimeUpdate: null,
    onVolumeChange: null,
    onWaiting: null
};
exports.REACT_BASIC_MOUSE_DOM_ATTRIBUTES = {
    onClick: null,
    onContextMenu: null,
    onDoubleClick: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null
};
exports.REACT_DRAG_DOM_ATTRIBUTES = {
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null
};
exports.REACT_SELECT_DOM_ATTRIBUTES = {
    onSelect: null
};
exports.REACT_TOUCH_DOM_ATTRIBUTES = {
    onTouchCancel: null,
    onTouchEnd: null,
    onTouchMove: null,
    onTouchStart: null
};
exports.REACT_SCROLL_DOM_ATTRIBUTES = {
    onScroll: null
};
exports.REACT_WHEEL_DOM_ATTRIBUTES = {
    onWheel: null
};
exports.REACT_ANIMATION_DOM_ATTRIBUTES = {
    onAnimationStart: null,
    onAnimationEnd: null,
    onAnimationIteration: null
};
exports.REACT_TRANSITION_DOM_ATTRIBUTES = {
    onTransitionEnd: null
};
exports.REACT_BASIC_DOM_ATTRIBUTES = {};
// TODO tetaudf utiliser un decorator @AutoInit pour ne plus avoir à déclarer un objet avec des valeurs par défaut
// TODO tetaudf ex : @AutoInit
// TODO tetaudf      HTML_STANDARD_CONFIG_ATTRIBUTES: HTMLStandardConfigAttributes;
var HtmlAttributes = /** @class */ (function () {
    function HtmlAttributes() {
    }
    HtmlAttributes.HTML_STANDARD_CONFIG_ATTRIBUTES = exports.HTML_STANDARD_CONFIG_ATTRIBUTES;
    HtmlAttributes.HTML_STANDARD_FORM_ATTRIBUTES = exports.HTML_STANDARD_FORM_ATTRIBUTES;
    HtmlAttributes.HTML_STANDARD_GLOBAL_ATTRIBUTES = exports.HTML_STANDARD_GLOBAL_ATTRIBUTES;
    HtmlAttributes.HTML_STANDARD_MEDIA_ATTRIBUTES = exports.HTML_STANDARD_MEDIA_ATTRIBUTES;
    HtmlAttributes.HTML_STANDARD_META_ATTRIBUTES = exports.HTML_STANDARD_META_ATTRIBUTES;
    HtmlAttributes.HTML_STANDARD_PRESENTATION_ATTRIBUTES = exports.HTML_STANDARD_PRESENTATION_ATTRIBUTES;
    HtmlAttributes.HTML_RDFA_ATTRIBUTES = exports.HTML_RDFA_ATTRIBUTES;
    HtmlAttributes.HTML_NON_STANDARD_ATTRIBUTES = exports.HTML_NON_STANDARD_ATTRIBUTES;
    HtmlAttributes.REACT_CLIPBOARD_DOM_ATTRIBUTES = exports.REACT_CLIPBOARD_DOM_ATTRIBUTES;
    HtmlAttributes.REACT_COMPOSE_DOM_ATTRIBUTES = exports.REACT_COMPOSE_DOM_ATTRIBUTES;
    HtmlAttributes.REACT_FOCUS_DOM_ATTRIBUTES = exports.REACT_FOCUS_DOM_ATTRIBUTES;
    HtmlAttributes.REACT_FORM_DOM_ATTRIBUTES = exports.REACT_FORM_DOM_ATTRIBUTES;
    HtmlAttributes.REACT_IMAGE_DOM_ATTRIBUTES = exports.REACT_IMAGE_DOM_ATTRIBUTES;
    HtmlAttributes.REACT_KEYBOARD_DOM_ATTRIBUTES = exports.REACT_KEYBOARD_DOM_ATTRIBUTES;
    HtmlAttributes.REACT_MEDIA_DOM_ATTRIBUTES = exports.REACT_MEDIA_DOM_ATTRIBUTES;
    HtmlAttributes.REACT_BASIC_MOUSE_DOM_ATTRIBUTES = exports.REACT_BASIC_MOUSE_DOM_ATTRIBUTES;
    HtmlAttributes.REACT_DRAG_DOM_ATTRIBUTES = exports.REACT_DRAG_DOM_ATTRIBUTES;
    HtmlAttributes.REACT_SELECT_DOM_ATTRIBUTES = exports.REACT_SELECT_DOM_ATTRIBUTES;
    HtmlAttributes.REACT_TOUCH_DOM_ATTRIBUTES = exports.REACT_TOUCH_DOM_ATTRIBUTES;
    HtmlAttributes.REACT_SCROLL_DOM_ATTRIBUTES = exports.REACT_SCROLL_DOM_ATTRIBUTES;
    HtmlAttributes.REACT_WHEEL_DOM_ATTRIBUTES = exports.REACT_WHEEL_DOM_ATTRIBUTES;
    HtmlAttributes.REACT_ANIMATION_DOM_ATTRIBUTES = exports.REACT_ANIMATION_DOM_ATTRIBUTES;
    HtmlAttributes.REACT_TRANSITION_DOM_ATTRIBUTES = exports.REACT_TRANSITION_DOM_ATTRIBUTES;
    HtmlAttributes.REACT_BASIC_DOM_ATTRIBUTES = exports.REACT_BASIC_DOM_ATTRIBUTES;
    return HtmlAttributes;
}());
exports.HtmlAttributes = HtmlAttributes;
;



/***/ }),

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {

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
var tslib_1 = __webpack_require__(0);
/**
 * hornet-js-react-components - Ensemble des composants web React de base de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.0
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
var column_1 = __webpack_require__(315);
var action_body_cell_1 = __webpack_require__(445);
var action_header_cell_1 = __webpack_require__(370);
/**
 * Classe permettant de gérer les colonnes de type date
 */
var ActionColumn = /** @class */ (function (_super) {
    tslib_1.__extends(ActionColumn, _super);
    function ActionColumn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Getter pour le composant générant le entête de colonne
     * @return Class<HeaderCell<HeaderCellProps, any>>
     */
    ActionColumn.prototype.getHeaderCell = function () {
        return action_header_cell_1.ActionHeaderCell;
    };
    /**
     * @inheritDoc
     */
    ActionColumn.prototype.getBodyCell = function () {
        return action_body_cell_1.ActionBodyCell;
    };
    ActionColumn.defaultProps = column_1.Column.mergeObjects(column_1.Column.defaultProps, {
        defaultStyle: { "textAlign": "center", "paddingLeft": 0, "width": "1.7em" },
        sortable: false,
        hiddenable: false
    });
    return ActionColumn;
}(column_1.Column));
exports.ActionColumn = ActionColumn;



/***/ }),

/***/ 359:
/***/ (function(module, exports, __webpack_require__) {

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
var tslib_1 = __webpack_require__(0);
/**
 * hornet-js-react-components - Ensemble des composants web React de base de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.0
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
var hornet_js_utils_1 = __webpack_require__(1);
var React = __webpack_require__(2);
var hornet_component_1 = __webpack_require__(4);
var key_codes_1 = __webpack_require__(9);
var logger = hornet_js_utils_1.Utils.getLogger("hornet-js-component.widget.tool-tip.tool-tip");
/**
 * Composant ToolTip
 */
var ToolTip = /** @class */ (function (_super) {
    tslib_1.__extends(ToolTip, _super);
    function ToolTip() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    ToolTip.prototype.render = function () {
        var urlIcoTooltip = this.state.src || ToolTip.genUrlTheme(this.state.icoToolTip);
        return (React.createElement("span", { onFocus: this.showTip, onMouseOver: this.showTip, onBlur: this.hideTip, onMouseLeave: this.hideTip, className: this.state.classSpan, "aria-haspopup": true, role: "tooltip" },
            React.createElement("img", { id: this.state.idImg, alt: this.state.alt, src: urlIcoTooltip, className: this.state.classImg, tabIndex: 0 }),
            React.createElement("span", { id: this.state.idSpan, "data-tooltip": this.state.alt, role: "tooltip", "aria-hidden": "true" })));
    };
    /**
     * @inheritDoc
     */
    ToolTip.prototype.componentDidMount = function () {
        document.addEventListener("keydown", this.handleKeyDown, false);
    };
    /**
     * @inheritDoc
     */
    ToolTip.prototype.componentWillUnmount = function () {
        document.removeEventListener("keydown", this.handleKeyDown, false);
    };
    /**
     * Gestion des touches du clavier
     * @param event
     */
    ToolTip.prototype.handleKeyDown = function (event) {
        var keyCode = event.keyCode;
        if (keyCode == key_codes_1.KeyCodes.ESCAPE) {
            this.hideTip(event);
        }
    };
    /**
     * Fonction déclenchée lorsque le champ de saisie libre perd le focus
     * @param event
     */
    ToolTip.prototype.hideTip = function (event) {
        if (this.state.idSpan) {
            document.getElementById(this.state.idSpan).setAttribute("aria-hidden", "true");
            document.getElementById(this.state.idSpan).style.display = "none";
        }
    };
    ToolTip.prototype.showTip = function (event) {
        if (this.state.idSpan) {
            document.getElementById(this.state.idSpan).setAttribute("aria-hidden", "false");
            document.getElementById(this.state.idSpan).style.display = "inline";
        }
    };
    ToolTip.defaultProps = {
        classImg: "tooltip-image",
        classSpan: "tooltip",
        icoToolTip: "/img/tooltip/tooltip.svg"
    };
    return ToolTip;
}(hornet_component_1.HornetComponent));
exports.ToolTip = ToolTip;



/***/ }),

/***/ 361:
/***/ (function(module, exports, __webpack_require__) {

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
var tslib_1 = __webpack_require__(0);
/**
 * hornet-js-core - Ensemble des composants qui forment le coeur de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.0
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
var datasource_1 = __webpack_require__(325);
var _ = __webpack_require__(6);
/*
* @classdesc Classe représentant les datasources de type MASTER-SLAVE
* @class
*/
var DataSourceMaster = /** @class */ (function (_super) {
    tslib_1.__extends(DataSourceMaster, _super);
    function DataSourceMaster(config, keysMap, options) {
        var _this = _super.call(this, config, keysMap, options) || this;
        _this.keysMap = keysMap;
        _this.options = options;
        _this._datasources = [];
        return _this;
    }
    /***
     * Ajout d'un datasource slave
     * @param datasource esclave du master
     * @return une promise du result modifié
     */
    DataSourceMaster.prototype.addSlave = function (datasource) {
        this._datasources.push(datasource);
    };
    /***
     * retirer un datasource slave
     * @param datasource esclave du master
     */
    DataSourceMaster.prototype.removeDatasource = function (datasource) {
        _.remove(this._datasources, datasource);
    };
    /***
     * Retourne les datasources slaves du master
     * @return slaves
     */
    DataSourceMaster.prototype.getSlaves = function () {
        return this._datasources;
    };
    /***
     * Permet de selectionner un element ou des elements du datasource et de déclencher le fetch sur les slaves.
     * déclenche un evènement "select", si le datasource est de type Service un event fetch est lancé lorsque les données arrivées
     * @param args correspond aux éléments à envoyer au fetch des datasources esclaves.
     * @void
     */
    DataSourceMaster.prototype.select = function (args) {
        _super.prototype.select.call(this, args);
        if (this._datasources.length > 0) {
            var isArrayDS_1 = this.isDataSourceArray;
            _.map(this._datasources, function (item) {
                item.fetch(isArrayDS_1 ? false : true, args);
            });
        }
    };
    return DataSourceMaster;
}(datasource_1.DataSource));
exports.DataSourceMaster = DataSourceMaster;



/***/ }),

/***/ 362:
/***/ (function(module, exports, __webpack_require__) {

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
var tslib_1 = __webpack_require__(0);
/**
 * hornet-js-react-components - Ensemble des composants web React de base de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.0
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
var React = __webpack_require__(2);
var hornet_component_1 = __webpack_require__(4);
var button_1 = __webpack_require__(326);
var modal_1 = __webpack_require__(131);
var notification_1 = __webpack_require__(45);
var Alert = /** @class */ (function (_super) {
    tslib_1.__extends(Alert, _super);
    function Alert(props, context) {
        return _super.call(this, props, context) || this;
    }
    Alert.prototype.setTitle = function (title, cb) {
        this.setState({ title: title }, cb);
        return this;
    };
    Alert.prototype.setMessage = function (message, cb) {
        this.setState({ message: message }, cb);
        return this;
    };
    Alert.prototype.setOnClickOk = function (onClickOk, cb) {
        this.setState({ onClickOk: onClickOk }, cb);
        return this;
    };
    Alert.prototype.setOnClickCancel = function (onClickCancel, cb) {
        this.setState({ onClickCancel: onClickCancel }, cb);
        return this;
    };
    Alert.prototype.setOnClickClose = function (onClickClose, cb) {
        this.setState({ onClickClose: onClickClose }, cb);
        return this;
    };
    Alert.prototype.open = function (cb) {
        this.setState({ isVisible: true }, cb);
        return this;
    };
    Alert.prototype.close = function (cb) {
        this.setState({ isVisible: false }, cb);
        return this;
    };
    /**
     * @inheritDoc
     */
    Alert.prototype.render = function () {
        if (!this.state.isVisible)
            return null;
        var notificationId = this.state.notificationId || "nAlert";
        return (React.createElement(modal_1.Modal, { alert: true, isVisible: true, onClickClose: this.state.onClickClose, underlayClickExits: this.state.underlayClickExits, escapeKeyExits: this.state.escapeKeyExits, title: this.state.title, dialogId: this.state.dialogId },
            React.createElement(notification_1.Notification, { id: notificationId }),
            React.createElement("div", { className: "widget-alert-body" }, this.state.message),
            React.createElement("div", { className: "widget-dialogue-footer" },
                React.createElement("div", { className: "grid has-gutter hornet-alert-buttons button-group" },
                    React.createElement(button_1.Button, tslib_1.__assign({}, this.configOKButton())),
                    React.createElement(button_1.Button, tslib_1.__assign({}, this.configCancelButton()))))));
    };
    /**
     * Configuration du bouton OK
     * @returns {{type: string, id: string, name: string, value: string, className: string, label: (boolean|string), onClick: (*|defaultFunction)}}
     */
    Alert.prototype.configOKButton = function () {
        return {
            type: "button",
            id: "alertOK",
            name: "action:validMessage",
            value: "Valider",
            className: "hornet-button hornet-alert-button-ok",
            label: this.getValid(),
            title: this.getValidTitle(),
            onClick: this.state.onClickOk
        };
    };
    /**
     * Configuration du bouton ANNULER
     * @returns {{type: string, id: string, name: string, value: string, className: string, label: (*|string|cancel), onClick: (*|defaultFunction)}}
     */
    Alert.prototype.configCancelButton = function () {
        return {
            type: "button",
            id: "alertCancel",
            name: "action:annulerMessage",
            value: "Annuler",
            className: "hornet-button hornet-alert-button-cancel",
            label: this.getCancel(),
            title: this.getCancelTitle(),
            onClick: this.state.onClickCancel
        };
    };
    /**
     * Extrait le libelle valid passé dans les propriétés du composant ou indique un libellé par défaut
     * @returns Titre
     * @private
     */
    Alert.prototype.getValid = function () {
        return this.state.valid || this.i18n("form.valid");
    };
    /**
     * Extrait le libelle cancel passé dans les propriétés du composant ou indique un libellé par défaut
     * @returns Titre
     * @private
     */
    Alert.prototype.getCancel = function () {
        return this.state.cancel || this.i18n("form.cancel");
    };
    /**
     * Extrait le libelle valid passé dans les propriétés du composant ou indique un libellé par défaut
     * @returns Titre
     * @private
     */
    Alert.prototype.getValidTitle = function () {
        return this.state.validTitle || this.i18n("form.validTitle");
    };
    /**
     * Extrait le libelle cancel passé dans les propriétés du composant ou indique un libellé par défaut
     * @returns Titre
     * @private
     */
    Alert.prototype.getCancelTitle = function () {
        return this.state.cancelTitle || this.i18n("form.cancelTitle");
    };
    Alert.defaultProps = {
        isVisible: false,
        underlayClickExits: false,
        escapeKeyExits: true
    };
    return Alert;
}(hornet_component_1.HornetComponent));
exports.Alert = Alert;



/***/ }),

/***/ 363:
/***/ (function(module, exports, __webpack_require__) {

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
var tslib_1 = __webpack_require__(0);
/**
 * hornet-js-react-components - Ensemble des composants web React de base de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.0
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
var hornet_js_utils_1 = __webpack_require__(1);
var hornet_component_1 = __webpack_require__(4);
var _ = __webpack_require__(6);
var logger = hornet_js_utils_1.Utils.getLogger("hornet-js-react-components.widget.form.form");
/**
 * Composant permettant de rendre un formulaire Hornet de manière standardisée
 */
var AbstractForm = /** @class */ (function (_super) {
    tslib_1.__extends(AbstractForm, _super);
    function AbstractForm(props, context) {
        return _super.call(this, props, context) || this;
    }
    AbstractForm.prototype.setReadOnly = function (value, callback) {
        this.setState({ readOnly: value }, callback);
        /* Propage la propriété à tous les champs du groupe */
        this.updateReadOnlyFields(value);
        return this;
    };
    AbstractForm.prototype.setDisabled = function (value, callback) {
        this.setState({ disabled: value }, callback);
        /* Propage la propriété à tous les champs du groupe */
        this.updateDisabledFields(value);
        return this;
    };
    AbstractForm.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        this.propagateParentState();
    };
    AbstractForm.prototype.registerForm = function (formInstance) {
        this.formElement = formInstance;
        if (this.formElement) {
            this.formElement["__component"] = this;
        }
    };
    AbstractForm.prototype.registerFieldSet = function (fieldSetInstance) {
        this.fieldSetElement = fieldSetInstance;
        if (this.fieldSetElement) {
            this.fieldSetElement["__component"] = this;
        }
    };
    /**
     * Met à jour la propriété readOnly sur chacun des champs enfants
     * @param isReadOnly valeur à assigner à la propriété 'readOnly'
     * @return cet objet
     */
    AbstractForm.prototype.updateReadOnlyFields = function (isReadOnly) {
        var fields = this.extractFields();
        Object.keys(fields).every(function (key) {
            var field = fields[key];
            if (field.props && field.props.writable && !isReadOnly) {
                if (field.setState && (field && field.mounted)) {
                    field.setState({ readOnly: isReadOnly });
                }
                else {
                    field.setReadOnly(isReadOnly);
                }
            }
            else if (field.getAttribute("data-writable") !== "false") {
                field.setReadOnly(isReadOnly);
            }
            else {
                field.setReadOnly(true);
            }
            return true;
        });
        return this;
    };
    /**
     * Met à jour la propriété disabled sur chacun des champs enfants
     * @param isDisabled valeur à assigner à la propriété 'disabled'
     * @return cet objet
     */
    AbstractForm.prototype.updateDisabledFields = function (isDisabled) {
        var fields = this.extractFields();
        Object.keys(fields).every(function (key) {
            var field = fields[key];
            // if (field instanceof AbstractField) {
            if (field.setState && (field && field.mounted)) {
                field.setState({ disabled: isDisabled });
            }
            else {
                field.setDisabled(isDisabled);
            }
            // }
            return true;
        });
        return this;
    };
    /**
     * Propage les propriétés devant être transmises aux champs enfants
     */
    AbstractForm.prototype.propagateParentState = function () {
        var fields = this.extractFields();
        Object.keys(fields).every(function (key) {
            var field = fields[key];
            if (this.state.readOnly == true) {
                field.setReadOnly(this.state.readOnly);
            }
            if (this.state.disabled == true) {
                field.setDisabled(this.state.disabled);
            }
            return true;
        }, this);
    };
    /**
     * Extrait les données du formulaire
     * @param removeEmptyStrings indique si les champs ayant pour valeur une chaîne de caractères vide ne doivent pas
     * être présents dans l'objet résultat.
     * @returns {Object}
     */
    AbstractForm.prototype.extractData = function (removeEmptyStrings) {
        if (removeEmptyStrings === void 0) { removeEmptyStrings = true; }
        var data = {};
        var fields = this.extractFields();
        for (var name_1 in fields) {
            var value = fields[name_1].getCurrentValue();
            if (value != "" || !removeEmptyStrings) {
                _.set(data, name_1, value);
            }
            else {
                /* Le champ est vide : si son nom correspond à une arborescence d'objets, on s'assure tout de même
                que l'objet parent existe */
                var lastDotIndex = name_1.lastIndexOf(".");
                if (lastDotIndex > 0) {
                    var parentPath = name_1.substring(0, lastDotIndex);
                    if (_.get(data, parentPath) == null) {
                        _.set(data, parentPath, {});
                    }
                }
            }
        }
        return data;
    };
    /** Valeur de propriétés par défaut */
    AbstractForm.defaultProps = {
        readOnly: false,
        disabled: false
    };
    return AbstractForm;
}(hornet_component_1.HornetComponent));
exports.AbstractForm = AbstractForm;



/***/ }),

/***/ 364:
/***/ (function(module, exports, __webpack_require__) {

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
var tslib_1 = __webpack_require__(0);
/**
 * hornet-js-react-components - Ensemble des composants web React de base de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.0
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
var hornet_js_utils_1 = __webpack_require__(1);
var classNames = __webpack_require__(19);
var _ = __webpack_require__(6);
var hornet_component_1 = __webpack_require__(4);
var checkbox_1 = __webpack_require__(319);
var auto_complete_state_1 = __webpack_require__(343);
var React = __webpack_require__(2);
var logger = hornet_js_utils_1.Utils.getLogger("hornet-js-react-components.widget.form.auto-complete-selector");
/**
 * Liste de choix de l'auto completion
 */
var AutoCompleteSelector = /** @class */ (function (_super) {
    tslib_1.__extends(AutoCompleteSelector, _super);
    function AutoCompleteSelector(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.noResultLabelDefault = AutoCompleteSelector.getI18n("form.autoCompleteField.noResultLabel");
        _this.state.maxLengthItem = 0;
        _this.props.autoCompleteState.on(auto_complete_state_1.AutoCompleteState.FOCUS_CHANGE_EVENT, _this.handleFocus);
        _this.liElts = [];
        _this.liReact = [];
        _this.choicesSelected = [];
        return _this;
    }
    AutoCompleteSelector.prototype.shouldComponentUpdate = function (nextProps, nextState, nextContext) {
        _super.prototype.componentWillUpdate.call(this, nextProps, nextState, nextContext);
        return true;
    };
    // Setters
    AutoCompleteSelector.prototype.setChoices = function (value, callback) {
        this.setState({ choices: value }, callback);
        return this;
    };
    AutoCompleteSelector.prototype.setOnOptionSelected = function (value, callback) {
        this.setState({ onOptionSelected: value }, callback);
        return this;
    };
    AutoCompleteSelector.prototype.setCurrentTypedText = function (currentTypedText, callback) {
        this.setState({ currentTypedText: currentTypedText }, callback);
        return this;
    };
    AutoCompleteSelector.prototype.setCurrentIndex = function (value, callback) {
        this.setState({ currentIndex: value }, callback);
        return this;
    };
    AutoCompleteSelector.prototype.setSelectorId = function (value, callback) {
        this.setState({ selectorId: value }, callback);
        return this;
    };
    AutoCompleteSelector.prototype.setShowComponent = function (value, callback) {
        this.setState({ showComponent: value }, callback);
        return this;
    };
    /**
     * Fonction appelée lors du click sur un élément de la liste
     **/
    AutoCompleteSelector.prototype.onListClick = function (event) {
        event.preventDefault();
        this.state.onListClick = true;
        return this.state.onOptionSelected(event);
    };
    /**
     * Fonction appelée pour scroller de un item vers le bas
     * @param {HTMLElement} element la liste déroulante
     * @param {HTMLElement} checkedElement l'élément sélectionné
     **/
    AutoCompleteSelector.prototype.scrollDown = function (element, checkedElement) {
        element.scrollTop += ((checkedElement.offsetTop + checkedElement.offsetHeight) - ((element.scrollTop ? element.scrollTop : 5) + element.offsetHeight)) + 5;
    };
    /**
     * Fonction appelée pour scroller de un item vers le haut
     * @param {HTMLElement} element la liste déroulante
     * @param {HTMLElement} checkedElement l'élément sélectionné
     **/
    AutoCompleteSelector.prototype.scrollUp = function (element, checkedElement) {
        element.scrollTop -= (((element.scrollTop ? element.scrollTop : 5) - checkedElement.offsetTop + 5));
    };
    /**
     * Fonction appelée pour scroller au début de la liste
     * @param {HTMLElement} element la liste déroulante
     **/
    AutoCompleteSelector.prototype.scrollToBegin = function (element) {
        element.scrollTop = 0;
    };
    /**
     * Fonction appelée pour scroller à la toute fin de la liste
     * @param {HTMLElement} element la liste déroulante
     * @param {HTMLElement} checkedElement l'élément sélectionné
     **/
    AutoCompleteSelector.prototype.scrollToEnd = function (element, checkedElement) {
        element.scrollTop = element.offsetHeight - checkedElement.offsetHeight;
    };
    /**
     * Fonction appelée tester si la position de l'élément est en amont dans la liste
     * @param {HTMLElement} element la liste déroulante
     * @param {HTMLElement} checkedElement l'élément sélectionné
     **/
    AutoCompleteSelector.prototype.isBefore = function (element, checkedElement) {
        return (checkedElement.offsetTop < (element.scrollTop ? element.scrollTop : 5));
    };
    /**
     * Fonction appelée tester si la position de l'élément est en aval dans la liste
     * @param {HTMLElement} element la liste déroulante
     * @param {HTMLElement} checkedElement l'élément sélectionné
     **/
    AutoCompleteSelector.prototype.isAfter = function (element, checkedElement) {
        return (checkedElement.offsetTop + checkedElement.offsetHeight >= (element.scrollTop ? element.scrollTop : 5) + element.offsetHeight);
    };
    /**
     * Fonction appelée la taille  de l'écart
     * @param {HTMLElement} element la liste déroulante
     * @param {HTMLElement} checkedElement l'élément sélectionné
     **/
    AutoCompleteSelector.prototype.hasBigGap = function (element, checkedElement) {
        return Math.abs(checkedElement.offsetTop - (element.scrollTop ? element.scrollTop : 5)) > element.offsetHeight;
    };
    /**
     * Fonction appelée pour position la liste directement sur l'élément
     * @param {HTMLElement} element la liste déroulante
     * @param {HTMLElement} checkedElement l'élément sélectionné
     **/
    AutoCompleteSelector.prototype.goToElement = function (element, checkedElement) {
        element.scrollTop = checkedElement.offsetTop - 5;
    };
    /**
     * Fonction appelée pour scroller vers un élément
     * @param {HTMLElement} checkedElement l'élément sélectionné
     **/
    AutoCompleteSelector.prototype.scrollToElement = function (checkedElement) {
        var element = document.getElementById(this.state.selectorId);
        if (this.isBefore(element, checkedElement)) {
            if (this.hasBigGap(element, checkedElement)) {
                this.goToElement(element, checkedElement);
            }
            else {
                this.scrollUp(element, checkedElement);
            }
        }
        else if (this.isAfter(element, checkedElement)) {
            if (this.hasBigGap(element, checkedElement)) {
                this.goToElement(element, checkedElement);
            }
            else {
                this.scrollDown(element, checkedElement);
            }
        }
        this.setActive(checkedElement);
    };
    /**
     * Fonction appelée pour déselectionner
     **/
    AutoCompleteSelector.prototype.cleanActived = function () {
        var lastCheckedElement = document.querySelectorAll("#" + _.replace(this.state.selectorId, ".", "\\.") + " .autocomplete-item-active");
        if (lastCheckedElement) {
            _.forEach(lastCheckedElement, function (item) {
                item.className = "autocomplete-item";
            });
        }
    };
    /**
     * Fonction appelée pour activer un item
     * @param {HTMLElement} checkedElement l'élément sélectionné
     **/
    AutoCompleteSelector.prototype.setActive = function (checkedElement) {
        this.cleanActived();
        if (checkedElement) {
            checkedElement.focus();
            checkedElement.className = "autocomplete-item autocomplete-item-active";
        }
    };
    /**
     * Fonction appelée pour scroller vers un élément par son id
     * @param {string} id l'élément sélectionné
     **/
    AutoCompleteSelector.prototype.scrollToElementById = function (id) {
        var checkedElement = document.getElementById(id);
        this.scrollToElement(checkedElement);
    };
    /**
     * Lorsque l'element selectionné change, on scroll vers celui-ci
     */
    AutoCompleteSelector.prototype.componentDidUpdate = function () {
        this.cleanActived();
        var element = document.getElementById(this.state.selectorId);
        if (!this.state.onListClick) {
            if (this.state.autoCompleteState.choiceFocused !== undefined) {
                var idToScroll = this.state.selectorId + "_" + this.state.autoCompleteState.choiceFocused;
                var checkedElement = document.getElementById(idToScroll);
                this.setActive(checkedElement);
                if (checkedElement) {
                    checkedElement.className = "autocomplete-item autocomplete-item-active";
                    this.scrollToElement(checkedElement);
                }
            }
            else {
                element.scrollTop = 5;
            }
        }
        this.state.onListClick = false;
    };
    /**
     * Retourne le rendu de la liste de choix
     **/
    AutoCompleteSelector.prototype.renderOptionList = function () {
        var _this = this;
        logger.trace("render AutoCompleteSelector option list");
        var res = [];
        if (this.state.choices) {
            this.state.choices.forEach(function (choice, indexTab) {
                if (choice) {
                    var choiceTextFormatted = _.deburr(choice.text).toLowerCase();
                    var currentTextFormatted = _.deburr(_this.state.currentTypedText).toLowerCase();
                    var index = choiceTextFormatted.indexOf(currentTextFormatted);
                    if (index === -1) {
                        if (currentTextFormatted != "") {
                            return null;
                        }
                        else {
                            index = 0;
                        } // Valeur saisie non présente
                    }
                    var classes = {
                        "autocomplete-item": true,
                    };
                    var classList = classNames(classes);
                    res.push((React.createElement("li", { onMouseDown: !_this.props.readOnly && !_this.props.disabled ? _this.onListClick : null, id: _this.state.selectorId + "_" + indexTab, className: classList, "data-real-text": choice.text, "data-real-value": choice.value, role: "option", key: "autocomplete-" + choice.text + "-" + choice.value, ref: function (liElt) {
                            if (liElt != null)
                                _this.liElts.push(liElt);
                        } },
                        choice.text ? choice.text.substring(0, index) : "",
                        React.createElement("b", null, _this.state.currentTypedText),
                        choice.text ? choice.text.substring(index + _this.state.currentTypedText.length) : "")));
                }
            });
        }
        return res;
    };
    /**
     * indique un clic sur une checkbox
     **/
    AutoCompleteSelector.prototype.multiClick = function () {
        this.state.onListClick = true;
    };
    /**
     * Retourne le rendu de la liste de choix
     **/
    AutoCompleteSelector.prototype.renderOptionMultipleList = function () {
        var _this = this;
        logger.trace("render AutoCompleteSelector option multiple");
        var res = [];
        if (this.state.choices) {
            this.state.choices.forEach(function (choice, indexTab) {
                if (choice) {
                    var choiceTextFormatted = _.deburr(choice.text).toLowerCase();
                    var currentTextFormatted = _.deburr(_this.state.currentTypedText).toLowerCase();
                    var index = choiceTextFormatted.indexOf(currentTextFormatted);
                    if (index === -1)
                        return null; // Valeur saisie non présente
                    var classes = {
                        "autocomplete-item": true,
                        "autocomplete-item-active": _this.props.autoCompleteState.choiceFocused === indexTab
                    };
                    var checkboxChecked = false;
                    if (_.indexOf(_this.props.choicesSelected, choice.value) > -1) {
                        checkboxChecked = true;
                    }
                    var classList = classNames(classes);
                    res.push((React.createElement("li", { onMouseDown: !_this.props.readOnly && !_this.props.disabled ? _this.onListClick : null, id: _this.state.selectorId + "_" + indexTab, className: classList, "data-real-text": choice.text, "data-real-value": choice.value, role: "option", key: "autocomplete-" + choice.text + "-" + choice.value, ref: function (liElt) {
                            if (liElt != null)
                                _this.liElts.push(liElt);
                        } },
                        React.createElement(checkbox_1.CheckBox, { onMouseUp: _this.multiClick, label: choice.text, onChange: function () { }, checked: checkboxChecked, readOnly: _this.props.readOnly, disabled: _this.props.disabled }))));
                }
            });
        }
        return res;
    };
    /**
     * @inheritDoc
     */
    AutoCompleteSelector.prototype.render = function () {
        logger.trace("render AutoCompleteSelector");
        this.liElts = [];
        this.liReact = (this.props.isMultiple) ? this.renderOptionMultipleList() : this.renderOptionList();
        // On construit le ul englobant
        var classes = {
            "autocomplete-selector": true,
            "widget-positioned": true,
            "autocomplete-selector-hidden": this.state.showComponent === false
        };
        var classList = classNames(classes);
        var styleUl = {
            "minWidth": "100%",
            "maxHeight": this.props.maxHeight ? this.props.maxHeight + "px" : "none"
        };
        if (this.props.maxHeight) {
            styleUl.overflow = "auto";
        }
        var classesContent = {
            "autocomplete-content-selector": true
        };
        var no_result = (React.createElement("div", { style: { fontStyle: "italic" } }, this.state.noResultLabel ? this.state.noResultLabel : this.noResultLabelDefault));
        var classContentList = classNames(classesContent);
        return (React.createElement("div", { className: classList },
            React.createElement("div", { className: classContentList },
                React.createElement("ul", { className: "autocomplete-selector-list", role: "listbox", id: this.state.selectorId, style: styleUl }, this.liReact.length > 0 ? this.liReact : no_result))));
    };
    /**
     * Fonction appelée pour scroller vers un élément
     * @param {number} oldChoiceFocused l'ancien indice de l'élément sélectionné
     * @param {number} newChoiceFocused l'indice de l'élément sélectionné
     * @param {string} value l'élément sélectionné
     * @param {number} index l'élément sélectionné
     **/
    AutoCompleteSelector.prototype.handleFocus = function (oldChoiceFocused, newChoiceFocused, value, index) {
        if (value && value.length > 0) {
            var elmt = document.querySelector("#" + _.replace(this.state.selectorId, ".", "\\.") + " [data-real-value='" + value + "']");
            if (elmt) {
                this.scrollToElement(elmt);
                var _index = _.findIndex(this.liElts, elmt);
                this.state.autoCompleteState.choiceFocused = _index;
                this.setFocusElement(elmt);
            }
        }
        else {
            if (newChoiceFocused !== undefined && newChoiceFocused != null && newChoiceFocused >= 0 && this.liElts.length > 0) {
                var elmt = this.liElts[newChoiceFocused];
                if (elmt && this.props.isMultiple) {
                    this.setFocusElement(elmt);
                }
                else {
                    if (elmt && (elmt.getAttribute("data-real-value") === value)) {
                        this.setFocusElement(elmt);
                    }
                }
            }
            else {
                this.scrollToBegin(document.getElementById(this.state.selectorId));
            }
        }
    };
    /**
     * Fonction appelée pour focus un item
     * @param {HTMLElement} elmt l'élément sélectionné à focus
     **/
    AutoCompleteSelector.prototype.setFocusElement = function (elmt) {
        this.scrollToElement(elmt);
    };
    AutoCompleteSelector.defaultProps = {
        onOptionSelected: function (event) {
            event.preventDefault();
        },
        currentTypedText: "",
        showComponent: true,
        choices: [],
        readOnly: false,
        disabled: false
    };
    return AutoCompleteSelector;
}(hornet_component_1.HornetComponent));
exports.AutoCompleteSelector = AutoCompleteSelector;



/***/ }),

/***/ 365:
/***/ (function(module, exports, __webpack_require__) {

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
var tslib_1 = __webpack_require__(0);
/**
 * hornet-js-react-components - Ensemble des composants web React de base de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.0
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
var React = __webpack_require__(2);
var abstract_field_datasource_1 = __webpack_require__(332);
var _ = __webpack_require__(6);
var object_utils_1 = __webpack_require__(127);
/**
 * Composant liste déroulante
 */
var SelectField = /** @class */ (function (_super) {
    tslib_1.__extends(SelectField, _super);
    function SelectField(props, context) {
        var _this = _super.call(this, props, context) || this;
        if (_this.state.dataSource && _this.state.data) {
            throw new Error("Le SelectField " + _this.state.name + " possède une props dataSource et une props data");
        }
        return _this;
    }
    // Setters
    SelectField.prototype.setData = function (data, cb) {
        this.setState({ data: data }, cb);
        return this;
    };
    SelectField.prototype.setValueKey = function (key, cb) {
        this.setState({ valueKey: key }, cb);
        return this;
    };
    SelectField.prototype.setLabelKey = function (key, cb) {
        this.setState({ labelKey: key }, cb);
        return this;
    };
    /**
     * Override
     * @param props
     */
    SelectField.prototype.processHtmlProps = function (state) {
        _super.prototype.processHtmlProps.call(this, state);
        if (state.readOnly === true) {
            state.disabled = true;
        }
    };
    /**
     * Génère le rendu du selectField à partir d'un dataSource
     * @returns {any}
     */
    SelectField.prototype.renderOptionsDataSource = function () {
        if (this.state.items && this.state.items.length > 0) {
            return this.state.items.map(this.renderOption);
        }
    };
    /**
     * Génère le rendu d'un radio bouton et son libellé
     * @param choice choix sélectionnable
     * @returns {any}
     */
    SelectField.prototype.renderOption = function (choice) {
        var _value = object_utils_1.ObjectUtils.getSubObject(choice, this.state.valueKey);
        var _label = object_utils_1.ObjectUtils.getSubObject(choice, this.state.labelKey);
        var value = (_value != null && _value.toString) ? _value.toString() : "";
        var label = (_label != null && _label.toString) ? _label.toString() : value;
        var optionsProps = {
            key: this.state.name + "-" + label + "-" + value,
            value: value
        };
        return React.createElement("option", tslib_1.__assign({}, optionsProps), label);
    };
    /**
     * Génère le rendu spécifique du champ : une liste déroulante dont les éléments correspondent au tableau dataSource
     * @returns {any}
     */
    SelectField.prototype.renderWidget = function () {
        var _this = this;
        var hasError = this.hasErrors() ? " has-error" : "";
        var htmlProps = this.getHtmlProps();
        _.assign(htmlProps, { "className": htmlProps["className"] ? htmlProps["className"] + " selectfield" + hasError : " selectfield" + hasError });
        var hasData = this.state.data && this.state.data.length > 0;
        var hasDataSource = this.state.dataSource && this.state.dataSource.results && this.state.dataSource.results.length > 0;
        return (React.createElement("select", tslib_1.__assign({ ref: function (elt) { return _this.registerHtmlElement(elt); } }, htmlProps),
            hasDataSource ? this.renderOptionsDataSource() : null,
            hasData ? this.state.data.map(this.renderOption) : null));
    };
    SelectField.defaultProps = _.assign(_.cloneDeep(abstract_field_datasource_1.AbstractFieldDatasource.defaultProps), {
        labelClass: "blocLabelUp",
        valueKey: "value",
        labelKey: "label"
    });
    return SelectField;
}(abstract_field_datasource_1.AbstractFieldDatasource));
exports.SelectField = SelectField;



/***/ }),

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

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
var tslib_1 = __webpack_require__(0);
/**
 * hornet-js-react-components - Ensemble des composants web React de base de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.0
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
var hornet_js_utils_1 = __webpack_require__(1);
var React = __webpack_require__(2);
var _ = __webpack_require__(6);
var abstract_field_1 = __webpack_require__(311);
var key_codes_1 = __webpack_require__(9);
var logger = hornet_js_utils_1.Utils.getLogger("hornet-js-react-components.widget.form.upload-file-field");
/**
 * Composant champ de formulaire de type envoi de fichier
 */
var UploadFileField = /** @class */ (function (_super) {
    tslib_1.__extends(UploadFileField, _super);
    function UploadFileField(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.state.readOnlyFile = _this.state.defaultFile;
        if (!_this.state.buttonLabel) {
            _this.state.buttonLabel = _this.state.name;
        }
        _this.state.activeButtonLabel = _this.state.buttonLabel;
        return _this;
    }
    UploadFileField.prototype.setReadOnlyFile = function (readOnlyFile, callback) {
        this.setState({ readOnlyFile: readOnlyFile }, callback);
        return this;
    };
    /**
     * Gestion du changement de fichier sélectionné
     * @param e évènement
     */
    UploadFileField.prototype.handleChange = function (e) {
        var input = e.target;
        var hasSelected = false;
        if (input.files && input.files.length > 0) {
            hasSelected = true;
            this.setState({ activeButtonLabel: this.i18n("uploadFile.selectedFile", { "count": input.files.length }) });
        }
        else {
            this.setState({ activeButtonLabel: this.i18n("uploadFile.selectedFile", { "count": 0 }) });
        }
        /* Déclenchement de la fonction onChange éventuellement passée en propriété */
        if (this.state.onChange) {
            this.state.onChange(e);
        }
    };
    /**setReadOnlyFile
     * @returns {any} les propriétés du fichier en consultation converties en attributs html data
     */
    UploadFileField.prototype.getDataFileProps = function () {
        var dataProps = {};
        if (this.state.defaultFile) {
            dataProps["data-file-id"] = this.state.defaultFile.id;
            dataProps["data-file-originalname"] = this.state.defaultFile.originalname;
            dataProps["data-file-name"] = this.state.defaultFile.name;
            dataProps["data-file-mime-type"] = this.state.defaultFile.mimeType;
            dataProps["data-file-encoding"] = this.state.defaultFile.encoding;
            dataProps["data-file-size"] = this.state.defaultFile.size;
        }
        return dataProps;
    };
    /**
     * @override
     */
    UploadFileField.prototype.setCurrentValue = function (formData) {
        //let value:any = _.get(formData, this.state.name);
        if (!formData) {
            this.handleDelete();
        }
        this.setState({
            readOnlyFile: formData,
            defaultFile: formData
        });
        return this;
    };
    /**
     * Génère le rendu spécifique du champ
     * @returns {any}
     */
    UploadFileField.prototype.renderWidget = function () {
        var _this = this;
        var preview = "";
        if (this.props.renderPreviewFile) {
            preview = this.props.renderPreviewFile(this.state.readOnlyFile);
        }
        /* On n'inclut pas les propriétés spécifiques ou celles dont on surcharge la valeur */
        var htmlProps = _.omit(this.getHtmlProps(), ["defaultFile", "type", "onChange"]);
        _.assign(htmlProps, { "className": htmlProps["className"] ? htmlProps["className"] + " uploadfile" : " uploadfile" });
        _.assign(htmlProps, { "data-multiple-caption": this.state.fileSelectedLabel });
        var cssDelete = (this.props.classNameDelete) ? "hornet-button hornet-button-right upload-delete-button " + this.props.classNameDelete : "hornet-button hornet-button-right upload-delete-button";
        /* On ne peut assigner programmatiquement la valeur d'un champ de type fichier (problème de sécurité potentiel)
         * on utilise donc ici les attributs data-* pour stocker les propriétés de l'éventuel fichier déjà sélectionné.
         * Celles-ci seront ensuite récupérées lors de l'envoi du formulaire, si un autre fichier n'a pas été sélectionné.*/
        var dataProps = this.getDataFileProps();
        var inputFile = React.createElement("input", tslib_1.__assign({ ref: function (elt) {
                _this.registerHtmlElement(elt);
                _this.inputFileElement = elt;
            }, type: "file", onChange: this.handleChange }, dataProps, htmlProps));
        var labelProps = {
            htmlFor: htmlProps["id"],
            readOnly: htmlProps["readOnly"],
            className: "upload-content"
        };
        return (React.createElement("div", { className: "upload-container" },
            inputFile,
            React.createElement("label", tslib_1.__assign({}, labelProps),
                React.createElement("a", { href: "#", "aria-haspopup": true, onClick: this.downloadButtonActionHandler, onKeyDown: this.downloadButtonKeyDownHandler, disabled: htmlProps["readOnly"] },
                    React.createElement("span", { className: "upload-text" }, this.state.activeButtonLabel))),
            (this.htmlElement) && this.htmlElement.files.length ?
                React.createElement("button", { type: "button", className: cssDelete, onClick: this.handleDelete, "aria-label": this.i18n("uploadFile.labelSupprimer"), disabled: this.state.readOnly }, "X")
                : "",
            preview));
    };
    /* suppression du fichier sélectionné  dans le champs input */
    UploadFileField.prototype.handleDelete = function () {
        this.htmlElement.value = "";
        this.setState({ defaultFile: null, activeButtonLabel: this.i18n("uploadFile.selectedFile", { "count": 0 }) });
    };
    /**
     * Déclenchement d'un click sur l'input file afin d'ouvrir la boite de dialogue
     * d'upload de fichier
     */
    UploadFileField.prototype.downloadButtonActionHandler = function () {
        this.inputFileElement.click();
    };
    /**
     * Appel au gestionnaire d'action pour l'ouverture de la boite de dialogue
     * uniquement sur presse des touches entrée et espace
     * @param e
     */
    UploadFileField.prototype.downloadButtonKeyDownHandler = function (e) {
        if (!(e.ctrlKey || e.shiftKey || e.altKey || e.metaKey)) {
            var keyCode = e.keyCode;
            if (keyCode == key_codes_1.KeyCodes.ENTER || keyCode == key_codes_1.KeyCodes.SPACEBAR) {
                this.downloadButtonActionHandler();
            }
        }
    };
    UploadFileField.defaultProps = _.assign(abstract_field_1.AbstractField.defaultProps, {
        fileSelectedLabel: UploadFileField.getI18n("uploadFile.selectedFile", { "count": 0 })
    });
    return UploadFileField;
}(abstract_field_1.AbstractField));
exports.UploadFileField = UploadFileField;



/***/ }),

/***/ 367:
/***/ (function(module, exports, __webpack_require__) {

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
var tslib_1 = __webpack_require__(0);
/**
 * hornet-js-react-components - Ensemble des composants web React de base de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.0
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
var hornet_js_utils_1 = __webpack_require__(1);
var React = __webpack_require__(2);
var spinner_component_1 = __webpack_require__(128);
var logger = hornet_js_utils_1.Utils.getLogger("hornet-js-react-components.widget.spinner.spinner-component-input");
/**
 * Composant affichant une image sur un champ type field
 */
var SpinnerComponentInput = /** @class */ (function (_super) {
    tslib_1.__extends(SpinnerComponentInput, _super);
    function SpinnerComponentInput(props, context) {
        return _super.call(this, props, context) || this;
    }
    /**
     * @inheritDoc
     */
    SpinnerComponentInput.prototype.render = function () {
        return (React.createElement("div", { style: { "visibility": this.state.isVisible ? "visible" : "hidden" }, className: "component-spinner spinner-input spinner-loading" }));
    };
    return SpinnerComponentInput;
}(spinner_component_1.SpinnerComponent));
exports.SpinnerComponentInput = SpinnerComponentInput;



/***/ }),

/***/ 368:
/***/ (function(module, exports, __webpack_require__) {

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
var tslib_1 = __webpack_require__(0);
/**
 * hornet-js-react-components - Ensemble des composants web React de base de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.0
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
var hornet_js_utils_1 = __webpack_require__(1);
var React = __webpack_require__(2);
var button_1 = __webpack_require__(326);
var classNames = __webpack_require__(19);
var _ = __webpack_require__(6);
var logger = hornet_js_utils_1.Utils.getLogger("hornet-js-react-components.widget.table.action-button");
/**
 * Enumeration des types d'action
 */
var TypeAction;
(function (TypeAction) {
    TypeAction[TypeAction["ACTION_MASSE"] = 1] = "ACTION_MASSE";
    TypeAction[TypeAction["ACTION_UNITAIRE"] = 2] = "ACTION_UNITAIRE";
})(TypeAction = exports.TypeAction || (exports.TypeAction = {}));
var ActionButton = /** @class */ (function (_super) {
    tslib_1.__extends(ActionButton, _super);
    function ActionButton(props, context) {
        var _this = _super.call(this, props, context) || this;
        if (props.url) {
            _this.state.url = _this.genUrlWithParams(props.url, props.value);
        }
        _this.state.visible = true;
        if (props.visible) {
            _this.state.visible = props.visible(_this.props.value);
        }
        return _this;
    }
    /**
     * @inheritDoc
     */
    ActionButton.prototype.render = function () {
        var _this = this;
        logger.trace("render actionButtons");
        var classes = {};
        if (this.props.className) {
            classes[this.props.className] = true;
        }
        classes["picto-svg"] = true;
        classes["button-action"] = true;
        var img = null;
        if (typeof this.props.srcImg === "string") {
            img = React.createElement("img", { src: this.props.srcImg, className: this.props.classNameImg, alt: this.props.title });
        }
        else {
            img = this.props.srcImg;
        }
        var keyDownFunction = null;
        if (this.props.onKeyDown) {
            keyDownFunction = function (e) {
                _this.props.onKeyDown(e, _this.props.onClick || _this.onClick);
            };
        }
        return (this.state.visible ?
            React.createElement("a", { href: this.props.url || "#", className: classNames(classes), title: this.props.title, "aria-label": this.props.title, onClick: this.props.onClick || this.onClick, onKeyDown: keyDownFunction, "aria-haspopup": this.props.hasPopUp },
                img,
                React.createElement("span", { className: "label-button-action" }, this.props.label))
            : null);
    };
    /**
     * Click sur le lien
     */
    ActionButton.prototype.onClick = function (e) {
        if (this.props.messageAlert) {
            e.stopPropagation();
            this.props.showAlert(this.props.messageAlert, this.props.titleAlert, this.onAction);
        }
        else {
            this.onAction();
        }
    };
    /**
     * action sur la confirmation
     */
    ActionButton.prototype.onAction = function () {
        if (this.state.url) {
            window.location.href = this.state.url;
        }
        else if (this.props.action) {
            this.props.action(this.props.value, this.props.selectedItems);
        }
    };
    ActionButton.defaultProps = _.assign(button_1.Button.defaultProps, {
        displayedWithoutResult: false
    });
    return ActionButton;
}(button_1.Button));
exports.ActionButton = ActionButton;



/***/ }),

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

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
var tslib_1 = __webpack_require__(0);
/**
 * hornet-js-react-components - Ensemble des composants web React de base de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.0
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
var hornet_js_utils_1 = __webpack_require__(1);
var hornet_component_1 = __webpack_require__(4);
var navigation_direction_1 = __webpack_require__(373);
var table_state_1 = __webpack_require__(317);
var key_codes_1 = __webpack_require__(9);
var _ = __webpack_require__(6);
var logger = hornet_js_utils_1.Utils.getLogger("hornet-js-react-components.widget.table.column.cell.abstract-cell");
/**
 * Classe abstraite d'une cellule de tableau
 */
var AbstractCell = /** @class */ (function (_super) {
    tslib_1.__extends(AbstractCell, _super);
    function AbstractCell(props, context) {
        var _this = _super.call(this, props, context) || this;
        /**
         * Action exécutée sur un click de la checkbox
         * @param e
         */
        _this.handleBlur = function (oldCell) {
            if (_this.props.cellCoordinate.isSame(oldCell) && _this.tableCellRef) {
                _this.blurActions(_this.tableCellRef);
            }
        };
        /**
         * methode qui permet de mettre le focus sur une cellule
         * @param oldCell cellule à vérifier pour un départ
         * @param newCell cellule à vérifier pour l'arrivée
         */
        _this.handleFocus = function (oldCell, newCell) {
            if (_this.props.cellCoordinate) {
                if (_this.props.cellCoordinate.isSame(oldCell)) {
                    if (_this.tableCellRef) {
                        _this.tableCellRef.tabIndex = -1;
                    }
                    _this.setState({ isFocused: false });
                }
                if (_this.props.cellCoordinate.isSame(newCell)) {
                    _this.setState({ isFocused: true }, _this.handleCellFocus(_this.tableCellRef));
                }
            }
        };
        _this.state.isFocused = false;
        _this.state.isEditing = false;
        _this.props.contentState.on(table_state_1.ContentState.FOCUS_CHANGE_EVENT, _this.handleFocus);
        _this.props.contentState.on(table_state_1.ContentState.BLUR_EVENT, _this.handleBlur);
        // chaque cellule ecoute levent de clic sur licone d'edition d'une ligne du tableau
        _this.handleEdition = _this.handleEdition.bind(_this);
        // chaque cellule ecoute l'event de clic sur l'icone d'edition d'une ligne du tableau
        _this.props.contentState.on(table_state_1.ContentState.EDITION_CLIC_EVENT, _this.handleEdition);
        return _this;
    }
    AbstractCell.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        return this.state.editable !== undefined && this.state.isEditing !== nextState.isEditing;
    };
    AbstractCell.prototype.componentWillUnmount = function () {
        this.props.contentState.removeListener(table_state_1.ContentState.FOCUS_CHANGE_EVENT, this.handleFocus);
        this.props.contentState.removeListener(table_state_1.ContentState.BLUR_EVENT, this.handleBlur);
        this.props.contentState.removeListener(table_state_1.ContentState.EDITION_CLIC_EVENT, this.handleEdition);
    };
    /**
     * Gère les évènements clavier déclenchés par les cellules
     * @param e évènement
     */
    AbstractCell.prototype.handleKeyDown = function (e) {
        if ((this.props.toggleSelectLines) && (e.ctrlKey || e.shiftKey || e.altKey || e.metaKey)) {
            this.handleKeyDownWithModifier(e);
        }
        else if (this.props.navigateFct) {
            /* On ne prend en compte que les évènements clavier sans modificateur, pour ne pas surcharger
             * des raccourcis standards tels Alt+ArrowLeft */
            var keyCode = e.keyCode;
            var preventDefault = true;
            /* Implémentation des interactions clavier correspondant au rôle ARIA "grid"
             * (cf. https://www.w3.org/TR/wai-aria-practices/#grid) */
            switch (keyCode) {
                case key_codes_1.KeyCodes.RIGHT_ARROW:
                    logger.trace("Focus sur la cellule suivante de la même ligne");
                    this.props.navigateFct(this.props.cellCoordinate, navigation_direction_1.NavigateDirection.RIGHT);
                    break;
                case key_codes_1.KeyCodes.LEFT_ARROW:
                    logger.trace("Focus sur la cellule précédente de la même ligne");
                    this.props.navigateFct(this.props.cellCoordinate, navigation_direction_1.NavigateDirection.LEFT);
                    break;
                case key_codes_1.KeyCodes.DOWN_ARROW:
                    logger.trace("Focus sur la cellule suivante de la même colonne");
                    this.props.navigateFct(this.props.cellCoordinate, navigation_direction_1.NavigateDirection.BOTOM);
                    break;
                case key_codes_1.KeyCodes.UP_ARROW:
                    logger.trace("Focus sur la cellule précédente de la même colonne");
                    this.props.navigateFct(this.props.cellCoordinate, navigation_direction_1.NavigateDirection.TOP);
                    break;
                case key_codes_1.KeyCodes.HOME:
                    logger.trace("Focus sur la première cellule de la ligne");
                    this.props.navigateFct(this.props.cellCoordinate, navigation_direction_1.NavigateDirection.HOME_COL);
                    break;
                case key_codes_1.KeyCodes.END:
                    logger.trace("Focus sur la dernière cellule de la ligne");
                    this.props.navigateFct(this.props.cellCoordinate, navigation_direction_1.NavigateDirection.END_COL);
                    break;
                case key_codes_1.KeyCodes.PAGE_UP:
                    logger.trace("Focus sur la première cellule de la colonne");
                    this.props.navigateFct(this.props.cellCoordinate, navigation_direction_1.NavigateDirection.HOME_LINE);
                    break;
                case key_codes_1.KeyCodes.PAGE_DOWN:
                    logger.trace("Focus sur la dernière cellule de la colonne");
                    this.props.navigateFct(this.props.cellCoordinate, navigation_direction_1.NavigateDirection.END_LINE);
                    break;
                case key_codes_1.KeyCodes.ENTER:
                    /* Lorsque la cellule contient un lien ou un bouton, on la touche entrée sert à activer celui-ci */
                    if (e.target != this.tableCellRef[this.props.cellCoordinate.row]) {
                        preventDefault = false;
                        break;
                    }
                default:
                    preventDefault = false;
            }
            /* On supprime le comportement par défaut pour les touches utilisées pour la navigation :
             pour éviter par exemple de faire défiler les ascenseurs */
            if (preventDefault) {
                e.preventDefault();
            }
        }
    };
    /**
     * Gère les évènements clavier déclenchés par les cellules permettant de sélectionner des cellules de tableau
     * @param e évènement clavier
     */
    AbstractCell.prototype.handleKeyDownWithModifier = function (e) {
        var _this = this;
        var preventDefault = false;
        /* Implémentation des interactions clavier correspondant au rôle ARIA "grid",
         * permettant la sélection de cellules
         * (cf. https://www.w3.org/TR/wai-aria-practices/#grid) */
        switch (e.keyCode) {
            case key_codes_1.KeyCodes.SPACEBAR:
                if (e.shiftKey) {
                    logger.trace("Shift + Space : sélection/déselection de la ligne");
                    this.props.toggleSelectLines(this.props.value);
                }
                preventDefault = true;
                break;
            case 65:
                if (e.ctrlKey) {
                    logger.trace("Ctrl + A : sélection/déselection de toutes les lignes");
                    this.props.toggleSelectLines(null, !this.props.isSelected);
                }
                preventDefault = true;
                break;
            case 67:// Gestion de la copie de la cellule dans le presse-papier
                if (e.ctrlKey) {
                    document.addEventListener("copy", function (e) {
                        // Cas d'un champ input
                        var value = _this.getInputValue(_this.tableCellRef);
                        if (_this.tableCellRef && _this.tableCellRef.textContent && !value) {
                            value = _this.tableCellRef.textContent;
                        }
                        e.clipboardData.setData("text/plain", value);
                        e.preventDefault(); // default behaviour is to copy any selected text
                    });
                    document.execCommand("copy");
                }
                break;
        }
        /* On supprime le comportement par défaut pour les raccoourcis de sélection, pour éviter par exemple
         de sélectionner tous les éléments de la page */
        if (preventDefault) {
            e.preventDefault();
        }
    };
    /**
     * Méthode permettant de récupérer la valeur d'un champ input
     * @param node
     * @returns {string}
     */
    AbstractCell.prototype.getInputValue = function (node) {
        var value = "";
        if (node && node.children) {
            for (var i = 0; i < node.children.length; i++) {
                if (!value) {
                    if (node.children[i].localName != "input" && node.children[i].children) {
                        value = this.getInputValue(node.children[i]);
                    }
                    else if (node.children[i].localName == "input") {
                        value = node.children[i].value;
                    }
                }
            }
        }
        return value;
    };
    /**
     * met a true la props isEditing a true lorsque la cellule est en cours d'edition
     * @param lineIndex
     */
    AbstractCell.prototype.handleEdition = function (lineIndex) {
        var nameClass = "default-body-cell";
        if (_.isNull(lineIndex)) {
            this.setState({ isEditing: false });
            this.tableCellRef.removeAttribute("disabled");
            this.tableCellRef.classList.remove("datatable-cell-in-edition");
        }
        else if (lineIndex === this.props.cellCoordinate.row) {
            this.setState({ isEditing: (lineIndex === this.props.cellCoordinate.row) });
            this.tableCellRef.classList.add("datatable-cell-in-edition");
        }
        else {
            if (this.tableCellRef.localName == "th") {
                this.tableCellRef.classList.add("is_disabled");
                this.tableCellRef.classList.remove("datatable-header-sortable-column", "datatable-header-sorted", "datatable-header-sorted-asc");
            }
            else {
                this.tableCellRef.setAttribute("disabled", "true");
            }
        }
    };
    /**
     * Méthode encapsulant le traitement qui permet de gerer la perte de focus sur une cellule
     * cette méthode à vocation à permettre la surcharge
     * @param oldCell
     */
    AbstractCell.prototype.blurActions = function (tableCellRef) {
        this.setCellTabIndex(tableCellRef, -1);
    };
    /**
     * Mise à jour de l'index de tabulation et positionnement facultatif du focus
     * pour la cellule du tableau
     * @param tableCellRef cellule à atteindre
     * @param value valeur pour tabIndex de la cellule
     * @param isFocus indicateur si le focus doit aussi être appliqué
     */
    AbstractCell.prototype.setCellTabIndex = function (tableCellRef, value, isFocus) {
        if (tableCellRef && tableCellRef.firstChild && tableCellRef.firstChild.focus) {
            tableCellRef.firstChild.tabIndex = value;
            if (isFocus) {
                tableCellRef.firstChild.focus();
            }
        }
        else {
            tableCellRef.tabIndex = value;
            if (isFocus) {
                tableCellRef.focus();
            }
        }
    };
    /**
     * Permet de mettre le focus sur l'AbstractBodyCell
     * Si le contenu de la cellule est de type HTMLElement (button ou input text etc), on place le focus sur cet element
     * sinon on met le focus sur toute la cellule
     */
    AbstractCell.prototype.handleCellFocus = function (tableCellRef) {
        if (tableCellRef) {
            this.setCellTabIndex(this.tableCellRef, 0, true);
        }
    };
    /**
     * @inheritDoc
     */
    AbstractCell.prototype.render = function () {
        throw new Error("not use this render !");
    };
    /**
     * @returns {boolean} la valeur de l'attribut HTML tabIndex à attribuer à la cellule
     */
    AbstractCell.prototype.getTabIndex = function () {
        return -1;
    };
    return AbstractCell;
}(hornet_component_1.HornetComponent));
exports.AbstractCell = AbstractCell;



/***/ }),

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

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
var tslib_1 = __webpack_require__(0);
/**
 * hornet-js-react-components - Ensemble des composants web React de base de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.0
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
var hornet_js_utils_1 = __webpack_require__(1);
var React = __webpack_require__(2);
var abstract_header_cell_1 = __webpack_require__(345);
var logger = hornet_js_utils_1.Utils.getLogger("hornet-js-react-components.widget.table.column.cell.action.action-header-cell");
/**
 * Classe Permettant de générer le rendu html d'un cellule d'entête de tableau
 */
var ActionHeaderCell = /** @class */ (function (_super) {
    tslib_1.__extends(ActionHeaderCell, _super);
    /**
     * @class
     */
    function ActionHeaderCell(props, context) {
        return _super.call(this, props, context) || this;
    }
    /**
     * @inheritDoc
     */
    ActionHeaderCell.prototype.renderCell = function () {
        logger.trace("render ActionHeaderCell-> column:", this.props.coordinates.column, " - line:", this.props.coordinates.row);
        return ((this.state.abbr) ?
            React.createElement("abbr", { lang: this.state.lang, title: this.state.abbr }, this.state.title) : this.state.title);
    };
    return ActionHeaderCell;
}(abstract_header_cell_1.AbstractHeaderCell));
exports.ActionHeaderCell = ActionHeaderCell;



/***/ }),

/***/ 371:
/***/ (function(module, exports, __webpack_require__) {

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
var tslib_1 = __webpack_require__(0);
/**
 * hornet-js-react-components - Ensemble des composants web React de base de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.0
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
var React = __webpack_require__(2);
var hornet_component_1 = __webpack_require__(4);
/**
 * Classe permettant de générer le rendu html d'ajout de ligne après
 */
var Line = /** @class */ (function (_super) {
    tslib_1.__extends(Line, _super);
    function Line() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Line.prototype.render = function () {
        return React.createElement("div", null);
    };
    Line.defaultProps = {
        displayed: false
    };
    return Line;
}(hornet_component_1.HornetComponent));
exports.Line = Line;



/***/ }),

/***/ 372:
/***/ (function(module, exports, __webpack_require__) {

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
var tslib_1 = __webpack_require__(0);
/**
 * hornet-js-react-components - Ensemble des composants web React de base de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.0
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
var hornet_js_utils_1 = __webpack_require__(1);
var React = __webpack_require__(2);
var hornet_component_1 = __webpack_require__(4);
var dropdown_1 = __webpack_require__(46);
var picto_1 = __webpack_require__(318);
var action_button_1 = __webpack_require__(368);
var table_button_info_accessibilite_1 = __webpack_require__(467);
var _ = __webpack_require__(6);
var logger = hornet_js_utils_1.Utils.getLogger("hornet-js-react-components.widget.table.menu-actions");
/**
 * Classe permettant de générer le rendu html du Menu d'actions d'un tableau
 */
var MenuActions = /** @class */ (function (_super) {
    tslib_1.__extends(MenuActions, _super);
    function MenuActions(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.state.title = _this.i18n("table.menuActions.title");
        return _this;
    }
    /**
     * @inheritDoc
     */
    MenuActions.prototype.render = function () {
        logger.trace("render MenuActions");
        var actions = this.getMenuActions();
        return (React.createElement("div", { className: "datatable-header-menu flex-container fr" },
            (actions.priorityActions.length > 0) ? MenuActions.renderPriorityActions(actions.priorityActions) :
                React.createElement("div", { className: "menu-priority-container" }),
            (actions.dropdownItems.length > 0) ? this.renderDropDownActions(actions.dropdownItems) : React.createElement("div", null)));
    };
    /**
     * retourne les actions du menu contextuel
     * @returns {Array}
     */
    MenuActions.prototype.getMenuActions = function () {
        var _this = this;
        var priorityActions = [];
        var dropdownItems = [];
        var item = this.props.selectedItems ? this.props.selectedItems[0] : {};
        var self = this;
        if (this.props.showIconInfo) {
            priorityActions.push(React.createElement(table_button_info_accessibilite_1.TableButtonInfoAccessibilite, { srcImg: picto_1.Picto.white.info, key: this.props.id + "-icon-info" }));
        }
        if (this.props.toggleColumnsButton) {
            var WrappedToggleColumnsButton = this.props.toggleColumnsButton;
            priorityActions.push(React.createElement(WrappedToggleColumnsButton, null));
        }
        if (this.props.actions && this.props.actions.length > 0) {
            this.props.actions.map(function (action, index) {
                if ((action.props.typeAction === action_button_1.TypeAction.ACTION_MASSE && self.props.selectedItems && self.props.selectedItems.length > 0)
                    || (action.props.typeAction === action_button_1.TypeAction.ACTION_UNITAIRE && self.props.selectedItems && self.props.selectedItems.length == 1)
                    || !action.props.typeAction) {
                    var propsButtons = _.cloneDeep(action.props);
                    propsButtons.showAlert = _this.props.showAlert;
                    propsButtons.selectedItems = _this.props.selectedItems;
                    propsButtons.items = _this.props.items;
                    propsButtons["key"] = self.props.id + "-menuAction-" + index;
                    propsButtons["value"] = item;
                    var isVisible = propsButtons.items.length > 0 || propsButtons.displayedWithoutResult;
                    if (isVisible && (!propsButtons.visible || propsButtons.visible && propsButtons.visible())) {
                        if (!propsButtons.priority) {
                            dropdownItems.push({
                                label: propsButtons.label,
                                action: propsButtons.action,
                                url: propsButtons.url ? _this.genUrlWithParams(propsButtons.url, item || {}) : null,
                                srcImg: propsButtons.srcImg,
                                className: "material-dropdown-menu__link",
                                key: propsButtons.id || index + "-menuAction-" + index,
                                valueCurrent: item
                            });
                        }
                        else {
                            var newProps = _.cloneDeep(propsButtons);
                            newProps.label = null;
                            var actionButton = React.createElement(action_button_1.ActionButton, tslib_1.__assign({}, newProps));
                            priorityActions.push(actionButton);
                        }
                    }
                }
            });
        }
        return {
            priorityActions: priorityActions,
            dropdownItems: dropdownItems
        };
    };
    /**
     * Rendu Html du composant dropDown du Header du menu Table
     * @param actions
     * @returns {any}
     */
    MenuActions.prototype.renderDropDownActions = function (actions) {
        return (React.createElement("div", { className: "fr menu-contextuel-container" },
            React.createElement(dropdown_1.Dropdown, { id: this.props.id, icon: "more-actions", className: "menu-contextuel", items: actions, title: this.state.title, position: dropdown_1.Position.BOTTOMRIGHT })));
    };
    /**
     * Rendu Html des actions prioritaires du Header du menu Table
     * @param actions
     * @returns {any}
     */
    MenuActions.renderPriorityActions = function (actions) {
        return (React.createElement("div", { className: "menu-priority-container" },
            React.createElement("div", { className: "menu-priority-content" },
                React.createElement("ul", null, actions.map(function (action) {
                    return React.createElement("li", { key: "li-" + action.key },
                        React.createElement("div", { className: "menu-priority-content-action" }, action));
                })))));
    };
    return MenuActions;
}(hornet_component_1.HornetComponent));
exports.MenuActions = MenuActions;



/***/ }),

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {

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
 * hornet-js-react-components - Ensemble des composants web React de base de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.0
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
/**
 * Direction de navigation de cellule de tableau
 */
var NavigateDirection;
(function (NavigateDirection) {
    NavigateDirection[NavigateDirection["RIGHT"] = 0] = "RIGHT";
    NavigateDirection[NavigateDirection["LEFT"] = 1] = "LEFT";
    NavigateDirection[NavigateDirection["TOP"] = 2] = "TOP";
    NavigateDirection[NavigateDirection["BOTOM"] = 3] = "BOTOM";
    NavigateDirection[NavigateDirection["HOME_LINE"] = 4] = "HOME_LINE";
    NavigateDirection[NavigateDirection["END_LINE"] = 5] = "END_LINE";
    NavigateDirection[NavigateDirection["HOME_COL"] = 6] = "HOME_COL";
    NavigateDirection[NavigateDirection["END_COL"] = 7] = "END_COL";
})(NavigateDirection = exports.NavigateDirection || (exports.NavigateDirection = {}));



/***/ }),

/***/ 374:
/***/ (function(module, exports, __webpack_require__) {

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
var tslib_1 = __webpack_require__(0);
/**
 * hornet-js-react-components - Ensemble des composants web React de base de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.0
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
var hornet_js_utils_1 = __webpack_require__(1);
var React = __webpack_require__(2);
var hornet_component_1 = __webpack_require__(4);
var header_1 = __webpack_require__(351);
var content_1 = __webpack_require__(320);
var columns_1 = __webpack_require__(331);
var footer_1 = __webpack_require__(437);
var table_state_1 = __webpack_require__(317);
var notification_1 = __webpack_require__(45);
var toggle_columns_button_1 = __webpack_require__(352);
var content_2 = __webpack_require__(320);
var logger = hornet_js_utils_1.Utils.getLogger("hornet-js-components.widget.table.table");
/**
 * Component Table
 */
var Table = /** @class */ (function (_super) {
    tslib_1.__extends(Table, _super);
    function Table(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.tableState = new table_state_1.TableState();
        _this.contentState = new table_state_1.ContentState();
        if (!props.width) {
            _this.tableState.once(table_state_1.TableState.RESIZE_EVENT, _this.handleResize.bind(_this));
        }
        _this.state.isMounted = false;
        return _this;
    }
    Table.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        return this.state.isVisible != nextState.isVisible;
    };
    Table.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        this.tableState.removeContents();
    };
    Table.prototype.componentDidMount = function () {
        _super.prototype.componentDidMount.call(this);
        this.setState({ isMounted: true });
    };
    /**
     * @inheritDoc
     */
    Table.prototype.render = function () {
        logger.trace("render Table");
        // si au moins un content n'a pas de notifId specifé, on instancie le composant Notification
        var myContents = this.getComponentsBy(content_1.Content);
        var notifId = "notif-" + this.props.id;
        var componentContent;
        if (myContents && myContents.length > 0) {
            myContents.map(function (myContent) {
                if (!myContent.props.notifId && myContent.props.onSubmit) {
                    componentContent = myContent;
                }
            });
        }
        if (this.state.isVisible) {
            return componentContent ?
                React.createElement("div", null,
                    React.createElement(notification_1.Notification, { id: notifId }),
                    " ",
                    this.renderTable(myContents)) :
                React.createElement("div", null,
                    " ",
                    this.renderTable(myContents),
                    " ");
        }
        return React.createElement("div", null);
    };
    /**
     * Méthode de redimensionnement du s
     * @param width
     */
    Table.prototype.handleResize = function (width) {
        this.setState({ width: width });
    };
    /**
     * rendu du composant table
     * @returns {any}
     */
    Table.prototype.renderTable = function (myContents) {
        var myHeader = this.getComponentBy(header_1.Header);
        return (React.createElement("div", { className: "datatable-container" },
            this.renderHeader(myHeader, myContents),
            this.renderContent(myHeader, myContents),
            React.createElement("div", { className: "hornet-datatable-bottom" }, this.renderFooter())));
    };
    /**
     * Méthode permettant de remonter les informations liées aux colonnes
     * @returns {Array}
     */
    Table.prototype.getColumnsInformation = function (myContents) {
        var infoColumns = {};
        var id = this.props.id;
        if (myContents && myContents.length > 0) {
            myContents.map(function (myContent, index) {
                var myColumns = hornet_component_1.HornetComponent.getChildrenFrom(myContent, columns_1.Columns);
                var keyColumns = [];
                id += "-" + index;
                if (myColumns.length > 0) {
                    myColumns.map(function (column) {
                        if (column && column.props && column.props.hiddenable) {
                            keyColumns.push({
                                keyColumn: column.props.keyColumn,
                                title: column.props.title,
                                width: (column.props.defaultWidth || column.props.width) + content_2.UNIT_SIZE
                            });
                        }
                    });
                }
                infoColumns = { columns: keyColumns, id: id };
            });
        }
        return infoColumns;
    };
    /**
     * fonction qui retourne la liste des PaginateDataSource de tous les contents du composant table
     * @returns {PaginateDataSource<any>[]}
     */
    Table.prototype.getContentsDataSources = function (myContents) {
        var listPaginateDataSource = [];
        myContents.map(function (myContent) {
            listPaginateDataSource.push(myContent.props.dataSource);
        });
        return listPaginateDataSource;
    };
    /**
     * Création d'un composant React
     * @returns {any}
     */
    Table.prototype.renderHeader = function (myComponent, myContents) {
        if (myComponent) {
            var key = "header-" + this.props.id + "-wrapped";
            var Wrapped = Table.wrap(header_1.Header, this, myComponent.props, {
                parentId: this.props.id,
                key: key,
                tableState: this.tableState,
                contentState: this.contentState,
                dataSourcesList: this.getContentsDataSources(myContents),
                tabIndex: -1,
                columns: this.getColumnsInformation(myContents),
                hiddenColumns: this.getHiddenColumns(myComponent)
            });
            return React.createElement(Wrapped, { key: "wc-" + key });
        }
        else {
            return React.createElement("div", { tabIndex: -1 });
        }
    };
    /**
     * Création d'un composant React
     * @returns {any}
     */
    Table.prototype.renderFooter = function () {
        var myComponent = this.getComponentBy(footer_1.Footer);
        if (myComponent) {
            return React.createElement(footer_1.Footer, tslib_1.__assign({}, myComponent.props, { contentState: this.contentState }));
        }
        else {
            return React.createElement("div", null);
        }
    };
    /**
     * Rendu Html du/des content(s) du Table
     * @param myHeader
     * @param myContents
     * @returns {any}
     */
    Table.prototype.renderContent = function (myHeader, myContents) {
        var _this = this;
        var Contents = [];
        if (myContents && myContents.length > 0) {
            myContents.map(function (myContent, index) {
                if (_this.state.isMounted || _this.state.isVisible) {
                    _this.tableState.addContent(_this.contentState);
                    var id = myContent.props.id || _this.props.id + "-" + index;
                    var width = (_this.props.width || _this.state.width) / 13 - 0.3;
                    var key = "content-" + _this.props.id + "-" + index + "-wrapped";
                    var notifId = myContent.props.notifId || "notif-" + _this.props.id;
                    var Wrapped = Table.wrap(content_1.Content, myContent, myContent.props, {
                        id: id,
                        key: key,
                        contentState: _this.contentState,
                        width: width,
                        notifId: notifId,
                        tabIndex: -1,
                        hiddenColumns: _this.getHiddenColumns(myHeader),
                        title: (myHeader && myHeader.props && myHeader.props.title) ? myHeader.props.title : null
                    });
                    Contents.push(React.createElement(Wrapped, { key: "wc-" + key }));
                }
            });
            return Contents;
        }
        else {
            return React.createElement("div", { tabIndex: -1 });
        }
    };
    /**
     * Permet de récupérer les colonnes masquées par défaut
     * @param myHeader
     * @returns {any}
     */
    Table.prototype.getHiddenColumns = function (myHeader) {
        var myToggleColumnsButton = null;
        React.Children.map(myHeader.props.children, function (child) {
            if (child.type === toggle_columns_button_1.ToggleColumnsButton) {
                myToggleColumnsButton = child;
            }
        }) || null;
        if (myToggleColumnsButton
            && myToggleColumnsButton.props
            && myToggleColumnsButton.props["hiddenColumns"]) {
            return myToggleColumnsButton.props["hiddenColumns"];
        }
        return {};
    };
    Table.defaultProps = {
        className: "hornet-datatable-header",
        isVisible: true
    };
    return Table;
}(hornet_component_1.HornetComponent));
exports.Table = Table;



/***/ }),

/***/ 375:
/***/ (function(module, exports) {

module.exports = {
	"$schema": "http://json-schema.org/draft-06/schema#",
	"$id": "https://raw.githubusercontent.com/epoberezkin/ajv/master/lib/refs/$data.json#",
	"description": "Meta-schema for $data reference (JSON-schema extension proposal)",
	"type": "object",
	"required": [
		"$data"
	],
	"properties": {
		"$data": {
			"type": "string",
			"anyOf": [
				{
					"format": "relative-json-pointer"
				},
				{
					"format": "json-pointer"
				}
			]
		}
	},
	"additionalProperties": false
};

/***/ }),

/***/ 376:
/***/ (function(module, exports) {

module.exports = {
	"$schema": "http://json-schema.org/draft-06/schema#",
	"$id": "http://json-schema.org/draft-06/schema#",
	"title": "Core schema meta-schema",
	"definitions": {
		"schemaArray": {
			"type": "array",
			"minItems": 1,
			"items": {
				"$ref": "#"
			}
		},
		"nonNegativeInteger": {
			"type": "integer",
			"minimum": 0
		},
		"nonNegativeIntegerDefault0": {
			"allOf": [
				{
					"$ref": "#/definitions/nonNegativeInteger"
				},
				{
					"default": 0
				}
			]
		},
		"simpleTypes": {
			"enum": [
				"array",
				"boolean",
				"integer",
				"null",
				"number",
				"object",
				"string"
			]
		},
		"stringArray": {
			"type": "array",
			"items": {
				"type": "string"
			},
			"uniqueItems": true,
			"default": []
		}
	},
	"type": [
		"object",
		"boolean"
	],
	"properties": {
		"$id": {
			"type": "string",
			"format": "uri-reference"
		},
		"$schema": {
			"type": "string",
			"format": "uri"
		},
		"$ref": {
			"type": "string",
			"format": "uri-reference"
		},
		"title": {
			"type": "string"
		},
		"description": {
			"type": "string"
		},
		"default": {},
		"multipleOf": {
			"type": "number",
			"exclusiveMinimum": 0
		},
		"maximum": {
			"type": "number"
		},
		"exclusiveMaximum": {
			"type": "number"
		},
		"minimum": {
			"type": "number"
		},
		"exclusiveMinimum": {
			"type": "number"
		},
		"maxLength": {
			"$ref": "#/definitions/nonNegativeInteger"
		},
		"minLength": {
			"$ref": "#/definitions/nonNegativeIntegerDefault0"
		},
		"pattern": {
			"type": "string",
			"format": "regex"
		},
		"additionalItems": {
			"$ref": "#"
		},
		"items": {
			"anyOf": [
				{
					"$ref": "#"
				},
				{
					"$ref": "#/definitions/schemaArray"
				}
			],
			"default": {}
		},
		"maxItems": {
			"$ref": "#/definitions/nonNegativeInteger"
		},
		"minItems": {
			"$ref": "#/definitions/nonNegativeIntegerDefault0"
		},
		"uniqueItems": {
			"type": "boolean",
			"default": false
		},
		"contains": {
			"$ref": "#"
		},
		"maxProperties": {
			"$ref": "#/definitions/nonNegativeInteger"
		},
		"minProperties": {
			"$ref": "#/definitions/nonNegativeIntegerDefault0"
		},
		"required": {
			"$ref": "#/definitions/stringArray"
		},
		"additionalProperties": {
			"$ref": "#"
		},
		"definitions": {
			"type": "object",
			"additionalProperties": {
				"$ref": "#"
			},
			"default": {}
		},
		"properties": {
			"type": "object",
			"additionalProperties": {
				"$ref": "#"
			},
			"default": {}
		},
		"patternProperties": {
			"type": "object",
			"additionalProperties": {
				"$ref": "#"
			},
			"default": {}
		},
		"dependencies": {
			"type": "object",
			"additionalProperties": {
				"anyOf": [
					{
						"$ref": "#"
					},
					{
						"$ref": "#/definitions/stringArray"
					}
				]
			}
		},
		"propertyNames": {
			"$ref": "#"
		},
		"const": {},
		"enum": {
			"type": "array",
			"minItems": 1,
			"uniqueItems": true
		},
		"type": {
			"anyOf": [
				{
					"$ref": "#/definitions/simpleTypes"
				},
				{
					"type": "array",
					"items": {
						"$ref": "#/definitions/simpleTypes"
					},
					"minItems": 1,
					"uniqueItems": true
				}
			]
		},
		"format": {
			"type": "string"
		},
		"allOf": {
			"$ref": "#/definitions/schemaArray"
		},
		"anyOf": {
			"$ref": "#/definitions/schemaArray"
		},
		"oneOf": {
			"$ref": "#/definitions/schemaArray"
		},
		"not": {
			"$ref": "#"
		}
	},
	"default": {}
};

/***/ }),

/***/ 377:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var KEYWORDS = __webpack_require__(387);

module.exports = defineKeywords;


/**
 * Defines one or several keywords in ajv instance
 * @param  {Ajv} ajv validator instance
 * @param  {String|Array<String>|undefined} keyword keyword(s) to define
 * @return {Ajv} ajv instance (for chaining)
 */
function defineKeywords(ajv, keyword) {
  if (Array.isArray(keyword)) {
    for (var i=0; i<keyword.length; i++)
      get(keyword[i])(ajv);
    return ajv;
  }
  if (keyword) {
    get(keyword)(ajv);
    return ajv;
  }
  for (keyword in KEYWORDS) get(keyword)(ajv);
  return ajv;
}


defineKeywords.get = get;

function get(keyword) {
  var defFunc = KEYWORDS[keyword];
  if (!defFunc) throw new Error('Unknown keyword ' + keyword);
  return defFunc;
}


/***/ }),

/***/ 378:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__(321);

module.exports = function defFunc(ajv) {
  defFunc.definition = {
    type: 'object',
    macro: function (schema) {
      var schemas = [];
      for (var pointer in schema)
        schemas.push(getSchema(pointer, schema[pointer]));
      return { 'allOf': schemas };
    },
    metaSchema: {
      type: 'object',
      propertyNames: {
        type: 'string',
        format: 'json-pointer'
      },
      additionalProperties: util.metaSchemaRef(ajv)
    }
  };

  ajv.addKeyword('deepProperties', defFunc.definition);
  return ajv;
};


function getSchema(jsonPointer, schema) {
  var segments = jsonPointer.split('/');
  var rootSchema = {};
  var pointerSchema = rootSchema;
  for (var i=1; i<segments.length; i++) {
    var segment = segments[i];
    var isLast = i == segments.length - 1;
    segment = unescapeJsonPointer(segment);
    var properties = pointerSchema.properties = {};
    var items = undefined;
    if (/[0-9]+/.test(segment)) {
      var count = +segment;
      items = pointerSchema.items = [];
      while (count--) items.push({});
    }
    pointerSchema = isLast ? schema : {};
    properties[segment] = pointerSchema;
    if (items) items.push(pointerSchema);
  }
  return rootSchema;
}


function unescapeJsonPointer(str) {
  return str.replace(/~1/g, '/').replace(/~0/g, '~');
}


/***/ }),

/***/ 379:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function defFunc(ajv) {
  defFunc.definition = {
    type: 'object',
    inline: function (it, keyword, schema) {
      var expr = '';
      for (var i=0; i<schema.length; i++) {
        if (i) expr += ' && ';
        expr += '(' + getData(schema[i], it.dataLevel) + ' !== undefined)';
      }
      return expr;
    },
    metaSchema: {
      type: 'array',
      items: {
        type: 'string',
        format: 'json-pointer'
      }
    }
  };

  ajv.addKeyword('deepRequired', defFunc.definition);
  return ajv;
};


function getData(jsonPointer, lvl) {
  var data = 'data' + (lvl || '');
  if (!jsonPointer) return data;

  var expr = data;
  var segments = jsonPointer.split('/');
  for (var i=1; i<segments.length; i++) {
    var segment = segments[i];
    data += getProperty(unescapeJsonPointer(segment));
    expr += ' && ' + data;
  }
  return expr;
}


var IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
var INTEGER = /^[0-9]+$/;
var SINGLE_QUOTE = /'|\\/g;
function getProperty(key) {
  return INTEGER.test(key)
          ? '[' + key + ']'
          : IDENTIFIER.test(key)
            ? '.' + key
            : "['" + key.replace(SINGLE_QUOTE, '\\$&') + "']";
}


function unescapeJsonPointer(str) {
  return str.replace(/~1/g, '/').replace(/~0/g, '~');
}


/***/ }),

/***/ 380:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function generate__formatLimit(it, $keyword, $ruleType) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $errorKeyword;
  var $data = 'data' + ($dataLvl || '');
  var $valid = 'valid' + $lvl;
  out += 'var ' + ($valid) + ' = undefined;';
  if (it.opts.format === false) {
    out += ' ' + ($valid) + ' = true; ';
    return out;
  }
  var $schemaFormat = it.schema.format,
    $isDataFormat = it.opts.$data && $schemaFormat.$data,
    $closingBraces = '';
  if ($isDataFormat) {
    var $schemaValueFormat = it.util.getData($schemaFormat.$data, $dataLvl, it.dataPathArr),
      $format = 'format' + $lvl,
      $compare = 'compare' + $lvl;
    out += ' var ' + ($format) + ' = formats[' + ($schemaValueFormat) + '] , ' + ($compare) + ' = ' + ($format) + ' && ' + ($format) + '.compare;';
  } else {
    var $format = it.formats[$schemaFormat];
    if (!($format && $format.compare)) {
      out += '  ' + ($valid) + ' = true; ';
      return out;
    }
    var $compare = 'formats' + it.util.getProperty($schemaFormat) + '.compare';
  }
  var $isMax = $keyword == 'formatMaximum',
    $exclusiveKeyword = 'formatExclusive' + ($isMax ? 'Maximum' : 'Minimum'),
    $schemaExcl = it.schema[$exclusiveKeyword],
    $isDataExcl = it.opts.$data && $schemaExcl && $schemaExcl.$data,
    $op = $isMax ? '<' : '>',
    $result = 'result' + $lvl;
  var $isData = it.opts.$data && $schema && $schema.$data,
    $schemaValue;
  if ($isData) {
    out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
    $schemaValue = 'schema' + $lvl;
  } else {
    $schemaValue = $schema;
  }
  if ($isDataExcl) {
    var $schemaValueExcl = it.util.getData($schemaExcl.$data, $dataLvl, it.dataPathArr),
      $exclusive = 'exclusive' + $lvl,
      $opExpr = 'op' + $lvl,
      $opStr = '\' + ' + $opExpr + ' + \'';
    out += ' var schemaExcl' + ($lvl) + ' = ' + ($schemaValueExcl) + '; ';
    $schemaValueExcl = 'schemaExcl' + $lvl;
    out += ' if (typeof ' + ($schemaValueExcl) + ' != \'boolean\' && ' + ($schemaValueExcl) + ' !== undefined) { ' + ($valid) + ' = false; ';
    var $errorKeyword = $exclusiveKeyword;
    var $$outStack = $$outStack || [];
    $$outStack.push(out);
    out = ''; /* istanbul ignore else */
    if (it.createErrors !== false) {
      out += ' { keyword: \'' + ($errorKeyword || '_formatExclusiveLimit') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: {} ';
      if (it.opts.messages !== false) {
        out += ' , message: \'' + ($exclusiveKeyword) + ' should be boolean\' ';
      }
      if (it.opts.verbose) {
        out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
      }
      out += ' } ';
    } else {
      out += ' {} ';
    }
    var __err = out;
    out = $$outStack.pop();
    if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
      if (it.async) {
        out += ' throw new ValidationError([' + (__err) + ']); ';
      } else {
        out += ' validate.errors = [' + (__err) + ']; return false; ';
      }
    } else {
      out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
    }
    out += ' }  ';
    if ($breakOnError) {
      $closingBraces += '}';
      out += ' else { ';
    }
    if ($isData) {
      out += ' if (' + ($schemaValue) + ' === undefined) ' + ($valid) + ' = true; else if (typeof ' + ($schemaValue) + ' != \'string\') ' + ($valid) + ' = false; else { ';
      $closingBraces += '}';
    }
    if ($isDataFormat) {
      out += ' if (!' + ($compare) + ') ' + ($valid) + ' = true; else { ';
      $closingBraces += '}';
    }
    out += ' var ' + ($result) + ' = ' + ($compare) + '(' + ($data) + ',  ';
    if ($isData) {
      out += '' + ($schemaValue);
    } else {
      out += '' + (it.util.toQuotedString($schema));
    }
    out += ' ); if (' + ($result) + ' === undefined) ' + ($valid) + ' = false; var ' + ($exclusive) + ' = ' + ($schemaValueExcl) + ' === true; if (' + ($valid) + ' === undefined) { ' + ($valid) + ' = ' + ($exclusive) + ' ? ' + ($result) + ' ' + ($op) + ' 0 : ' + ($result) + ' ' + ($op) + '= 0; } if (!' + ($valid) + ') var op' + ($lvl) + ' = ' + ($exclusive) + ' ? \'' + ($op) + '\' : \'' + ($op) + '=\';';
  } else {
    var $exclusive = $schemaExcl === true,
      $opStr = $op;
    if (!$exclusive) $opStr += '=';
    var $opExpr = '\'' + $opStr + '\'';
    if ($isData) {
      out += ' if (' + ($schemaValue) + ' === undefined) ' + ($valid) + ' = true; else if (typeof ' + ($schemaValue) + ' != \'string\') ' + ($valid) + ' = false; else { ';
      $closingBraces += '}';
    }
    if ($isDataFormat) {
      out += ' if (!' + ($compare) + ') ' + ($valid) + ' = true; else { ';
      $closingBraces += '}';
    }
    out += ' var ' + ($result) + ' = ' + ($compare) + '(' + ($data) + ',  ';
    if ($isData) {
      out += '' + ($schemaValue);
    } else {
      out += '' + (it.util.toQuotedString($schema));
    }
    out += ' ); if (' + ($result) + ' === undefined) ' + ($valid) + ' = false; if (' + ($valid) + ' === undefined) ' + ($valid) + ' = ' + ($result) + ' ' + ($op);
    if (!$exclusive) {
      out += '=';
    }
    out += ' 0;';
  }
  out += '' + ($closingBraces) + 'if (!' + ($valid) + ') { ';
  var $errorKeyword = $keyword;
  var $$outStack = $$outStack || [];
  $$outStack.push(out);
  out = ''; /* istanbul ignore else */
  if (it.createErrors !== false) {
    out += ' { keyword: \'' + ($errorKeyword || '_formatLimit') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { comparison: ' + ($opExpr) + ', limit:  ';
    if ($isData) {
      out += '' + ($schemaValue);
    } else {
      out += '' + (it.util.toQuotedString($schema));
    }
    out += ' , exclusive: ' + ($exclusive) + ' } ';
    if (it.opts.messages !== false) {
      out += ' , message: \'should be ' + ($opStr) + ' "';
      if ($isData) {
        out += '\' + ' + ($schemaValue) + ' + \'';
      } else {
        out += '' + (it.util.escapeQuotes($schema));
      }
      out += '"\' ';
    }
    if (it.opts.verbose) {
      out += ' , schema:  ';
      if ($isData) {
        out += 'validate.schema' + ($schemaPath);
      } else {
        out += '' + (it.util.toQuotedString($schema));
      }
      out += '         , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
    }
    out += ' } ';
  } else {
    out += ' {} ';
  }
  var __err = out;
  out = $$outStack.pop();
  if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
    if (it.async) {
      out += ' throw new ValidationError([' + (__err) + ']); ';
    } else {
      out += ' validate.errors = [' + (__err) + ']; return false; ';
    }
  } else {
    out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
  }
  out += '}';
  return out;
}


/***/ }),

/***/ 381:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function generate_patternRequired(it, $keyword, $ruleType) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $data = 'data' + ($dataLvl || '');
  var $valid = 'valid' + $lvl;
  var $key = 'key' + $lvl,
    $idx = 'idx' + $lvl,
    $matched = 'patternMatched' + $lvl,
    $dataProperties = 'dataProperties' + $lvl,
    $closingBraces = '',
    $ownProperties = it.opts.ownProperties;
  out += 'var ' + ($valid) + ' = true;';
  if ($ownProperties) {
    out += ' var ' + ($dataProperties) + ' = undefined;';
  }
  var arr1 = $schema;
  if (arr1) {
    var $pProperty, i1 = -1,
      l1 = arr1.length - 1;
    while (i1 < l1) {
      $pProperty = arr1[i1 += 1];
      out += ' var ' + ($matched) + ' = false;  ';
      if ($ownProperties) {
        out += ' ' + ($dataProperties) + ' = ' + ($dataProperties) + ' || Object.keys(' + ($data) + '); for (var ' + ($idx) + '=0; ' + ($idx) + '<' + ($dataProperties) + '.length; ' + ($idx) + '++) { var ' + ($key) + ' = ' + ($dataProperties) + '[' + ($idx) + ']; ';
      } else {
        out += ' for (var ' + ($key) + ' in ' + ($data) + ') { ';
      }
      out += ' ' + ($matched) + ' = ' + (it.usePattern($pProperty)) + '.test(' + ($key) + '); if (' + ($matched) + ') break; } ';
      var $missingPattern = it.util.escapeQuotes($pProperty);
      out += ' if (!' + ($matched) + ') { ' + ($valid) + ' = false;  var err =   '; /* istanbul ignore else */
      if (it.createErrors !== false) {
        out += ' { keyword: \'' + ('patternRequired') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { missingPattern: \'' + ($missingPattern) + '\' } ';
        if (it.opts.messages !== false) {
          out += ' , message: \'should have property matching pattern \\\'' + ($missingPattern) + '\\\'\' ';
        }
        if (it.opts.verbose) {
          out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
        }
        out += ' } ';
      } else {
        out += ' {} ';
      }
      out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; }   ';
      if ($breakOnError) {
        $closingBraces += '}';
        out += ' else { ';
      }
    }
  }
  out += '' + ($closingBraces);
  return out;
}


/***/ }),

/***/ 382:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function generate_switch(it, $keyword, $ruleType) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $data = 'data' + ($dataLvl || '');
  var $valid = 'valid' + $lvl;
  var $errs = 'errs__' + $lvl;
  var $it = it.util.copy(it);
  var $closingBraces = '';
  $it.level++;
  var $nextValid = 'valid' + $it.level;
  var $ifPassed = 'ifPassed' + it.level,
    $currentBaseId = $it.baseId,
    $shouldContinue;
  out += 'var ' + ($ifPassed) + ';';
  var arr1 = $schema;
  if (arr1) {
    var $sch, $caseIndex = -1,
      l1 = arr1.length - 1;
    while ($caseIndex < l1) {
      $sch = arr1[$caseIndex += 1];
      if ($caseIndex && !$shouldContinue) {
        out += ' if (!' + ($ifPassed) + ') { ';
        $closingBraces += '}';
      }
      if ($sch.if && it.util.schemaHasRules($sch.if, it.RULES.all)) {
        out += ' var ' + ($errs) + ' = errors;   ';
        var $wasComposite = it.compositeRule;
        it.compositeRule = $it.compositeRule = true;
        $it.createErrors = false;
        $it.schema = $sch.if;
        $it.schemaPath = $schemaPath + '[' + $caseIndex + '].if';
        $it.errSchemaPath = $errSchemaPath + '/' + $caseIndex + '/if';
        out += '  ' + (it.validate($it)) + ' ';
        $it.baseId = $currentBaseId;
        $it.createErrors = true;
        it.compositeRule = $it.compositeRule = $wasComposite;
        out += ' ' + ($ifPassed) + ' = ' + ($nextValid) + '; if (' + ($ifPassed) + ') {  ';
        if (typeof $sch.then == 'boolean') {
          if ($sch.then === false) {
            var $$outStack = $$outStack || [];
            $$outStack.push(out);
            out = ''; /* istanbul ignore else */
            if (it.createErrors !== false) {
              out += ' { keyword: \'' + ('switch') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { caseIndex: ' + ($caseIndex) + ' } ';
              if (it.opts.messages !== false) {
                out += ' , message: \'should pass "switch" keyword validation\' ';
              }
              if (it.opts.verbose) {
                out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
              }
              out += ' } ';
            } else {
              out += ' {} ';
            }
            var __err = out;
            out = $$outStack.pop();
            if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
              if (it.async) {
                out += ' throw new ValidationError([' + (__err) + ']); ';
              } else {
                out += ' validate.errors = [' + (__err) + ']; return false; ';
              }
            } else {
              out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
            }
          }
          out += ' var ' + ($nextValid) + ' = ' + ($sch.then) + '; ';
        } else {
          $it.schema = $sch.then;
          $it.schemaPath = $schemaPath + '[' + $caseIndex + '].then';
          $it.errSchemaPath = $errSchemaPath + '/' + $caseIndex + '/then';
          out += '  ' + (it.validate($it)) + ' ';
          $it.baseId = $currentBaseId;
        }
        out += '  } else {  errors = ' + ($errs) + '; if (vErrors !== null) { if (' + ($errs) + ') vErrors.length = ' + ($errs) + '; else vErrors = null; } } ';
      } else {
        out += ' ' + ($ifPassed) + ' = true;  ';
        if (typeof $sch.then == 'boolean') {
          if ($sch.then === false) {
            var $$outStack = $$outStack || [];
            $$outStack.push(out);
            out = ''; /* istanbul ignore else */
            if (it.createErrors !== false) {
              out += ' { keyword: \'' + ('switch') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { caseIndex: ' + ($caseIndex) + ' } ';
              if (it.opts.messages !== false) {
                out += ' , message: \'should pass "switch" keyword validation\' ';
              }
              if (it.opts.verbose) {
                out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
              }
              out += ' } ';
            } else {
              out += ' {} ';
            }
            var __err = out;
            out = $$outStack.pop();
            if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
              if (it.async) {
                out += ' throw new ValidationError([' + (__err) + ']); ';
              } else {
                out += ' validate.errors = [' + (__err) + ']; return false; ';
              }
            } else {
              out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
            }
          }
          out += ' var ' + ($nextValid) + ' = ' + ($sch.then) + '; ';
        } else {
          $it.schema = $sch.then;
          $it.schemaPath = $schemaPath + '[' + $caseIndex + '].then';
          $it.errSchemaPath = $errSchemaPath + '/' + $caseIndex + '/then';
          out += '  ' + (it.validate($it)) + ' ';
          $it.baseId = $currentBaseId;
        }
      }
      $shouldContinue = $sch.continue
    }
  }
  out += '' + ($closingBraces) + 'var ' + ($valid) + ' = ' + ($nextValid) + '; ';
  out = it.util.cleanUpCode(out);
  return out;
}


/***/ }),

/***/ 383:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var sequences = {};

var DEFAULTS = {
  timestamp: function() { return Date.now(); },
  datetime: function() { return (new Date).toISOString(); },
  date: function() { return (new Date).toISOString().slice(0, 10); },
  time: function() { return (new Date).toISOString().slice(11); },
  random: function() { return Math.random(); },
  randomint: function (args) {
    var limit = args && args.max || 2;
    return function() { return Math.floor(Math.random() * limit); };
  },
  seq: function (args) {
    var name = args && args.name || '';
    sequences[name] = sequences[name] || 0;
    return function() { return sequences[name]++; };
  }
};

module.exports = function defFunc(ajv) {
  defFunc.definition = {
    compile: function (schema, parentSchema, it) {
      var funcs = {};

      for (var key in schema) {
        var d = schema[key];
        var func = getDefault(typeof d == 'string' ? d : d.func);
        funcs[key] = func.length ? func(d.args) : func;
      }

      return it.opts.useDefaults && !it.compositeRule
              ? assignDefaults
              : noop;

      function assignDefaults(data) {
        for (var prop in schema)
          if (data[prop] === undefined) data[prop] = funcs[prop]();
        return true;
      }

      function noop() { return true; }
    },
    DEFAULTS: DEFAULTS,
    metaSchema: {
      type: 'object',
      additionalProperties: {
        type: ['string', 'object'],
        additionalProperties: false,
        required: ['func', 'args'],
        properties: {
          func: { type: 'string' },
          args: { type: 'object' }
        }
      }
    }
  };

  ajv.addKeyword('dynamicDefaults', defFunc.definition);
  return ajv;

  function getDefault(d) {
    var def = DEFAULTS[d];
    if (def) return def;
    throw new Error('invalid "dynamicDefaults" keyword property value: ' + d);
  }
};


/***/ }),

/***/ 384:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(333)('Maximum');


/***/ }),

/***/ 385:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(333)('Minimum');


/***/ }),

/***/ 386:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function defFunc(ajv) {
  if (!ajv.RULES.keywords.switch) __webpack_require__(334)(ajv);

  defFunc.definition = {
    macro: function (schema, parentSchema) {
      if (parentSchema.then === undefined)
        throw new Error('keyword "then" is absent');
      var cases = [ { 'if': schema, 'then': parentSchema.then } ];
      if (parentSchema.else !== undefined)
        cases[1] = { 'then': parentSchema.else };
      return { switch: cases };
    }
  };

  ajv.addKeyword('if', defFunc.definition);
  ajv.addKeyword('then');
  ajv.addKeyword('else');
  return ajv;
};


/***/ }),

/***/ 387:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  'instanceof': __webpack_require__(388),
  range: __webpack_require__(391),
  regexp: __webpack_require__(392),
  'typeof': __webpack_require__(394),
  dynamicDefaults: __webpack_require__(383),
  'if': __webpack_require__(386),
  prohibited: __webpack_require__(390),
  uniqueItemProperties: __webpack_require__(395),
  deepProperties: __webpack_require__(378),
  deepRequired: __webpack_require__(379),
  formatMinimum: __webpack_require__(385),
  formatMaximum: __webpack_require__(384),
  patternRequired: __webpack_require__(389),
  'switch': __webpack_require__(334),
  select: __webpack_require__(393)
};


/***/ }),

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

var CONSTRUCTORS = {
  Object: Object,
  Array: Array,
  Function: Function,
  Number: Number,
  String: String,
  Date: Date,
  RegExp: RegExp
};

module.exports = function defFunc(ajv) {
  /* istanbul ignore else */
  if (typeof Buffer != 'undefined')
    CONSTRUCTORS.Buffer = Buffer;

  defFunc.definition = {
    compile: function (schema) {
      if (typeof schema == 'string') {
        var Constructor = getConstructor(schema);
        return function (data) {
          return data instanceof Constructor;
        };
      }

      var constructors = schema.map(getConstructor);
      return function (data) {
        for (var i=0; i<constructors.length; i++)
          if (data instanceof constructors[i]) return true;
        return false;
      };
    },
    CONSTRUCTORS: CONSTRUCTORS,
    metaSchema: {
      anyOf: [
        { type: 'string' },
        {
          type: 'array',
          items: { type: 'string' }
        }
      ]
    }
  };

  ajv.addKeyword('instanceof', defFunc.definition);
  return ajv;

  function getConstructor(c) {
    var Constructor = CONSTRUCTORS[c];
    if (Constructor) return Constructor;
    throw new Error('invalid "instanceof" keyword value ' + c);
  }
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13).Buffer))

/***/ }),

/***/ 389:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function defFunc(ajv) {
  defFunc.definition = {
    type: 'object',
    inline: __webpack_require__(381),
    statements: true,
    errors: 'full',
    metaSchema: {
      type: 'array',
      items: {
        type: 'string',
        format: 'regex'
      },
      uniqueItems: true
    }
  };

  ajv.addKeyword('patternRequired', defFunc.definition);
  return ajv;
};


/***/ }),

/***/ 390:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function defFunc(ajv) {
  defFunc.definition = {
    type: 'object',
    macro: function (schema) {
      if (schema.length == 0) return {};
      if (schema.length == 1) return { not: { required: schema } };
      var schemas = schema.map(function (prop) {
        return { required: [prop] };
      });
      return { not: { anyOf: schemas } };
    },
    metaSchema: {
      type: 'array',
      items: {
        type: 'string'
      }
    }
  };

  ajv.addKeyword('prohibited', defFunc.definition);
  return ajv;
};



/***/ }),

/***/ 391:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function defFunc(ajv) {
  defFunc.definition = {
    type: 'number',
    macro: function (schema, parentSchema) {
      var min = schema[0]
        , max = schema[1]
        , exclusive = parentSchema.exclusiveRange;

      validateRangeSchema(min, max, exclusive);

      return exclusive === true
              ? {exclusiveMinimum: min, exclusiveMaximum: max}
              : {minimum: min, maximum: max};
    },
    metaSchema: {
      type: 'array',
      minItems: 2,
      maxItems: 2,
      items: { type: 'number' }
    }
  };

  ajv.addKeyword('range', defFunc.definition);
  ajv.addKeyword('exclusiveRange');
  return ajv;

  function validateRangeSchema(min, max, exclusive) {
    if (exclusive !== undefined && typeof exclusive != 'boolean')
      throw new Error('Invalid schema for exclusiveRange keyword, should be boolean');

    if (min > max || (exclusive && min == max))
      throw new Error('There are no numbers in range');
  }
};


/***/ }),

/***/ 392:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function defFunc(ajv) {
  defFunc.definition = {
    type: 'string',
    inline: function (it, keyword, schema) {
      return getRegExp() + '.test(data' + (it.dataLevel || '') + ')';

      function getRegExp() {
        try {
          if (typeof schema == 'object')
            return new RegExp(schema.pattern, schema.flags);

          var rx = schema.match(/^\/(.*)\/([gimy]*)$/);
          if (rx) return new RegExp(rx[1], rx[2]);
          throw new Error('cannot parse string into RegExp');
        } catch(e) {
          console.error('regular expression', schema, 'is invalid');
          throw e;
        }
      }
    },
    metaSchema: {
      type: ['string', 'object'],
      properties: {
        pattern: { type: 'string' },
        flags: { type: 'string' }
      },
      required: ['pattern'],
      additionalProperties: false
    }
  };

  ajv.addKeyword('regexp', defFunc.definition);
  return ajv;
};


/***/ }),

/***/ 393:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__(321);

module.exports = function defFunc(ajv) {
  if (!ajv._opts.$data) {
    console.warn('keyword select requires $data option');
    return ajv;
  }
  var metaSchemaRef = util.metaSchemaRef(ajv);
  var compiledCaseSchemas = [];

  defFunc.definition = {
    validate: function v(schema, data, parentSchema) {
      if (parentSchema.selectCases === undefined)
        throw new Error('keyword "selectCases" is absent');
      var compiled = getCompiledSchemas(parentSchema, false);
      var validate = compiled.cases[schema];
      if (validate === undefined) validate = compiled.default;
      if (typeof validate == 'boolean') return validate;
      var valid = validate(data);
      if (!valid) v.errors = validate.errors;
      return valid;
    },
    $data: true,
    metaSchema: { type: ['string', 'number', 'boolean', 'null'] }
  };

  ajv.addKeyword('select', defFunc.definition);
  ajv.addKeyword('selectCases', {
    compile: function (schemas, parentSchema) {
      var compiled = getCompiledSchemas(parentSchema);
      for (var value in schemas)
        compiled.cases[value] = compileOrBoolean(schemas[value]);
      return function() { return true; };
    },
    valid: true,
    metaSchema: {
      type: 'object',
      additionalProperties: metaSchemaRef
    }
  });
  ajv.addKeyword('selectDefault', {
    compile: function (schema, parentSchema) {
      var compiled = getCompiledSchemas(parentSchema);
      compiled.default = compileOrBoolean(schema);
      return function() { return true; };
    },
    valid: true,
    metaSchema: metaSchemaRef
  });
  return ajv;


  function getCompiledSchemas(parentSchema, create) {
    var compiled;
    compiledCaseSchemas.some(function (c) {
      if (c.parentSchema === parentSchema) {
        compiled = c;
        return true;
      }
    });
    if (!compiled && create !== false) {
      compiled = {
        parentSchema: parentSchema,
        cases: {},
        default: true
      };
      compiledCaseSchemas.push(compiled);
    }
    return compiled;
  }

  function compileOrBoolean(schema) {
    return typeof schema == 'boolean'
            ? schema
            : ajv.compile(schema);
  }
};


/***/ }),

/***/ 394:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var KNOWN_TYPES = ['undefined', 'string', 'number', 'object', 'function', 'boolean', 'symbol'];

module.exports = function defFunc(ajv) {
  defFunc.definition = {
    inline: function (it, keyword, schema) {
      var data = 'data' + (it.dataLevel || '');
      if (typeof schema == 'string') return 'typeof ' + data + ' == "' + schema + '"';
      schema = 'validate.schema' + it.schemaPath + '.' + keyword;
      return schema + '.indexOf(typeof ' + data + ') >= 0';
    },
    metaSchema: {
      anyOf: [
        {
          type: 'string',
          enum: KNOWN_TYPES
        },
        {
          type: 'array',
          items: {
            type: 'string',
            enum: KNOWN_TYPES
          }
        }
      ]
    }
  };

  ajv.addKeyword('typeof', defFunc.definition);
  return ajv;
};


/***/ }),

/***/ 395:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function defFunc(ajv) {
  defFunc.definition = {
    type: 'array',
    compile: function(keys, parentSchema, it) {
      var equal = it.util.equal;
      return function(data) {
        if (data.length > 1) {
          for (var k=0; k < keys.length; k++) {
            var key = keys[k];
            for (var i = data.length; i--;) {
              if (typeof data[i] != 'object') continue;
              for (var j = i; j--;) {
                if (typeof data[j] == 'object' && equal(data[i][key], data[j][key]))
                  return false;
              }
            }
          }
        }
        return true;
      };
    },
    metaSchema: {
      type: 'array',
      items: {type: 'string'}
    }
  };

  ajv.addKeyword('uniqueItemProperties', defFunc.definition);
  return ajv;
};


/***/ }),

/***/ 396:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var KEYWORDS = [
  'multipleOf',
  'maximum',
  'exclusiveMaximum',
  'minimum',
  'exclusiveMinimum',
  'maxLength',
  'minLength',
  'pattern',
  'additionalItems',
  'maxItems',
  'minItems',
  'uniqueItems',
  'maxProperties',
  'minProperties',
  'required',
  'additionalProperties',
  'enum',
  'format',
  'const'
];

module.exports = function (metaSchema, keywordsJsonPointers) {
  for (var i=0; i<keywordsJsonPointers.length; i++) {
    metaSchema = JSON.parse(JSON.stringify(metaSchema));
    var segments = keywordsJsonPointers[i].split('/');
    var keywords = metaSchema;
    var j;
    for (j=1; j<segments.length; j++)
      keywords = keywords[segments[j]];

    for (j=0; j<KEYWORDS.length; j++) {
      var key = KEYWORDS[j];
      var schema = keywords[key];
      if (schema) {
        keywords[key] = {
          anyOf: [
            schema,
            { $ref: 'https://raw.githubusercontent.com/epoberezkin/ajv/master/lib/refs/$data.json#' }
          ]
        };
      }
    }
  }

  return metaSchema;
};


/***/ }),

/***/ 397:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var compileSchema = __webpack_require__(402)
  , resolve = __webpack_require__(323)
  , Cache = __webpack_require__(398)
  , SchemaObject = __webpack_require__(335)
  , stableStringify = __webpack_require__(342)
  , formats = __webpack_require__(401)
  , rules = __webpack_require__(403)
  , $dataMetaSchema = __webpack_require__(396)
  , patternGroups = __webpack_require__(424)
  , util = __webpack_require__(312)
  , co = __webpack_require__(341);

module.exports = Ajv;

Ajv.prototype.validate = validate;
Ajv.prototype.compile = compile;
Ajv.prototype.addSchema = addSchema;
Ajv.prototype.addMetaSchema = addMetaSchema;
Ajv.prototype.validateSchema = validateSchema;
Ajv.prototype.getSchema = getSchema;
Ajv.prototype.removeSchema = removeSchema;
Ajv.prototype.addFormat = addFormat;
Ajv.prototype.errorsText = errorsText;

Ajv.prototype._addSchema = _addSchema;
Ajv.prototype._compile = _compile;

Ajv.prototype.compileAsync = __webpack_require__(400);
var customKeyword = __webpack_require__(423);
Ajv.prototype.addKeyword = customKeyword.add;
Ajv.prototype.getKeyword = customKeyword.get;
Ajv.prototype.removeKeyword = customKeyword.remove;

var errorClasses = __webpack_require__(322);
Ajv.ValidationError = errorClasses.Validation;
Ajv.MissingRefError = errorClasses.MissingRef;
Ajv.$dataMetaSchema = $dataMetaSchema;

var META_SCHEMA_ID = 'http://json-schema.org/draft-06/schema';

var META_IGNORE_OPTIONS = [ 'removeAdditional', 'useDefaults', 'coerceTypes' ];
var META_SUPPORT_DATA = ['/properties'];

/**
 * Creates validator instance.
 * Usage: `Ajv(opts)`
 * @param {Object} opts optional options
 * @return {Object} ajv instance
 */
function Ajv(opts) {
  if (!(this instanceof Ajv)) return new Ajv(opts);
  opts = this._opts = util.copy(opts) || {};
  this._schemas = {};
  this._refs = {};
  this._fragments = {};
  this._formats = formats(opts.format);
  var schemaUriFormat = this._schemaUriFormat = this._formats['uri-reference'];
  this._schemaUriFormatFunc = function (str) { return schemaUriFormat.test(str); };

  this._cache = opts.cache || new Cache;
  this._loadingSchemas = {};
  this._compilations = [];
  this.RULES = rules();
  this._getId = chooseGetId(opts);

  opts.loopRequired = opts.loopRequired || Infinity;
  if (opts.errorDataPath == 'property') opts._errorDataPathProperty = true;
  if (opts.serialize === undefined) opts.serialize = stableStringify;
  this._metaOpts = getMetaSchemaOptions(this);

  if (opts.formats) addInitialFormats(this);
  addDraft6MetaSchema(this);
  if (typeof opts.meta == 'object') this.addMetaSchema(opts.meta);
  addInitialSchemas(this);
  if (opts.patternGroups) patternGroups(this);
}



/**
 * Validate data using schema
 * Schema will be compiled and cached (using serialized JSON as key. [json-stable-stringify](https://github.com/substack/json-stable-stringify) is used to serialize.
 * @this   Ajv
 * @param  {String|Object} schemaKeyRef key, ref or schema object
 * @param  {Any} data to be validated
 * @return {Boolean} validation result. Errors from the last validation will be available in `ajv.errors` (and also in compiled schema: `schema.errors`).
 */
function validate(schemaKeyRef, data) {
  var v;
  if (typeof schemaKeyRef == 'string') {
    v = this.getSchema(schemaKeyRef);
    if (!v) throw new Error('no schema with key or ref "' + schemaKeyRef + '"');
  } else {
    var schemaObj = this._addSchema(schemaKeyRef);
    v = schemaObj.validate || this._compile(schemaObj);
  }

  var valid = v(data);
  if (v.$async === true)
    return this._opts.async == '*' ? co(valid) : valid;
  this.errors = v.errors;
  return valid;
}


/**
 * Create validating function for passed schema.
 * @this   Ajv
 * @param  {Object} schema schema object
 * @param  {Boolean} _meta true if schema is a meta-schema. Used internally to compile meta schemas of custom keywords.
 * @return {Function} validating function
 */
function compile(schema, _meta) {
  var schemaObj = this._addSchema(schema, undefined, _meta);
  return schemaObj.validate || this._compile(schemaObj);
}


/**
 * Adds schema to the instance.
 * @this   Ajv
 * @param {Object|Array} schema schema or array of schemas. If array is passed, `key` and other parameters will be ignored.
 * @param {String} key Optional schema key. Can be passed to `validate` method instead of schema object or id/ref. One schema per instance can have empty `id` and `key`.
 * @param {Boolean} _skipValidation true to skip schema validation. Used internally, option validateSchema should be used instead.
 * @param {Boolean} _meta true if schema is a meta-schema. Used internally, addMetaSchema should be used instead.
 */
function addSchema(schema, key, _skipValidation, _meta) {
  if (Array.isArray(schema)){
    for (var i=0; i<schema.length; i++) this.addSchema(schema[i], undefined, _skipValidation, _meta);
    return;
  }
  var id = this._getId(schema);
  if (id !== undefined && typeof id != 'string')
    throw new Error('schema id must be string');
  key = resolve.normalizeId(key || id);
  checkUnique(this, key);
  this._schemas[key] = this._addSchema(schema, _skipValidation, _meta, true);
}


/**
 * Add schema that will be used to validate other schemas
 * options in META_IGNORE_OPTIONS are alway set to false
 * @this   Ajv
 * @param {Object} schema schema object
 * @param {String} key optional schema key
 * @param {Boolean} skipValidation true to skip schema validation, can be used to override validateSchema option for meta-schema
 */
function addMetaSchema(schema, key, skipValidation) {
  this.addSchema(schema, key, skipValidation, true);
}


/**
 * Validate schema
 * @this   Ajv
 * @param {Object} schema schema to validate
 * @param {Boolean} throwOrLogError pass true to throw (or log) an error if invalid
 * @return {Boolean} true if schema is valid
 */
function validateSchema(schema, throwOrLogError) {
  var $schema = schema.$schema;
  if ($schema !== undefined && typeof $schema != 'string')
    throw new Error('$schema must be a string');
  $schema = $schema || this._opts.defaultMeta || defaultMeta(this);
  if (!$schema) {
    console.warn('meta-schema not available');
    this.errors = null;
    return true;
  }
  var currentUriFormat = this._formats.uri;
  this._formats.uri = typeof currentUriFormat == 'function'
                      ? this._schemaUriFormatFunc
                      : this._schemaUriFormat;
  var valid;
  try { valid = this.validate($schema, schema); }
  finally { this._formats.uri = currentUriFormat; }
  if (!valid && throwOrLogError) {
    var message = 'schema is invalid: ' + this.errorsText();
    if (this._opts.validateSchema == 'log') console.error(message);
    else throw new Error(message);
  }
  return valid;
}


function defaultMeta(self) {
  var meta = self._opts.meta;
  self._opts.defaultMeta = typeof meta == 'object'
                            ? self._getId(meta) || meta
                            : self.getSchema(META_SCHEMA_ID)
                              ? META_SCHEMA_ID
                              : undefined;
  return self._opts.defaultMeta;
}


/**
 * Get compiled schema from the instance by `key` or `ref`.
 * @this   Ajv
 * @param  {String} keyRef `key` that was passed to `addSchema` or full schema reference (`schema.id` or resolved id).
 * @return {Function} schema validating function (with property `schema`).
 */
function getSchema(keyRef) {
  var schemaObj = _getSchemaObj(this, keyRef);
  switch (typeof schemaObj) {
    case 'object': return schemaObj.validate || this._compile(schemaObj);
    case 'string': return this.getSchema(schemaObj);
    case 'undefined': return _getSchemaFragment(this, keyRef);
  }
}


function _getSchemaFragment(self, ref) {
  var res = resolve.schema.call(self, { schema: {} }, ref);
  if (res) {
    var schema = res.schema
      , root = res.root
      , baseId = res.baseId;
    var v = compileSchema.call(self, schema, root, undefined, baseId);
    self._fragments[ref] = new SchemaObject({
      ref: ref,
      fragment: true,
      schema: schema,
      root: root,
      baseId: baseId,
      validate: v
    });
    return v;
  }
}


function _getSchemaObj(self, keyRef) {
  keyRef = resolve.normalizeId(keyRef);
  return self._schemas[keyRef] || self._refs[keyRef] || self._fragments[keyRef];
}


/**
 * Remove cached schema(s).
 * If no parameter is passed all schemas but meta-schemas are removed.
 * If RegExp is passed all schemas with key/id matching pattern but meta-schemas are removed.
 * Even if schema is referenced by other schemas it still can be removed as other schemas have local references.
 * @this   Ajv
 * @param  {String|Object|RegExp} schemaKeyRef key, ref, pattern to match key/ref or schema object
 */
function removeSchema(schemaKeyRef) {
  if (schemaKeyRef instanceof RegExp) {
    _removeAllSchemas(this, this._schemas, schemaKeyRef);
    _removeAllSchemas(this, this._refs, schemaKeyRef);
    return;
  }
  switch (typeof schemaKeyRef) {
    case 'undefined':
      _removeAllSchemas(this, this._schemas);
      _removeAllSchemas(this, this._refs);
      this._cache.clear();
      return;
    case 'string':
      var schemaObj = _getSchemaObj(this, schemaKeyRef);
      if (schemaObj) this._cache.del(schemaObj.cacheKey);
      delete this._schemas[schemaKeyRef];
      delete this._refs[schemaKeyRef];
      return;
    case 'object':
      var serialize = this._opts.serialize;
      var cacheKey = serialize ? serialize(schemaKeyRef) : schemaKeyRef;
      this._cache.del(cacheKey);
      var id = this._getId(schemaKeyRef);
      if (id) {
        id = resolve.normalizeId(id);
        delete this._schemas[id];
        delete this._refs[id];
      }
  }
}


function _removeAllSchemas(self, schemas, regex) {
  for (var keyRef in schemas) {
    var schemaObj = schemas[keyRef];
    if (!schemaObj.meta && (!regex || regex.test(keyRef))) {
      self._cache.del(schemaObj.cacheKey);
      delete schemas[keyRef];
    }
  }
}


/* @this   Ajv */
function _addSchema(schema, skipValidation, meta, shouldAddSchema) {
  if (typeof schema != 'object' && typeof schema != 'boolean')
    throw new Error('schema should be object or boolean');
  var serialize = this._opts.serialize;
  var cacheKey = serialize ? serialize(schema) : schema;
  var cached = this._cache.get(cacheKey);
  if (cached) return cached;

  shouldAddSchema = shouldAddSchema || this._opts.addUsedSchema !== false;

  var id = resolve.normalizeId(this._getId(schema));
  if (id && shouldAddSchema) checkUnique(this, id);

  var willValidate = this._opts.validateSchema !== false && !skipValidation;
  var recursiveMeta;
  if (willValidate && !(recursiveMeta = id && id == resolve.normalizeId(schema.$schema)))
    this.validateSchema(schema, true);

  var localRefs = resolve.ids.call(this, schema);

  var schemaObj = new SchemaObject({
    id: id,
    schema: schema,
    localRefs: localRefs,
    cacheKey: cacheKey,
    meta: meta
  });

  if (id[0] != '#' && shouldAddSchema) this._refs[id] = schemaObj;
  this._cache.put(cacheKey, schemaObj);

  if (willValidate && recursiveMeta) this.validateSchema(schema, true);

  return schemaObj;
}


/* @this   Ajv */
function _compile(schemaObj, root) {
  if (schemaObj.compiling) {
    schemaObj.validate = callValidate;
    callValidate.schema = schemaObj.schema;
    callValidate.errors = null;
    callValidate.root = root ? root : callValidate;
    if (schemaObj.schema.$async === true)
      callValidate.$async = true;
    return callValidate;
  }
  schemaObj.compiling = true;

  var currentOpts;
  if (schemaObj.meta) {
    currentOpts = this._opts;
    this._opts = this._metaOpts;
  }

  var v;
  try { v = compileSchema.call(this, schemaObj.schema, root, schemaObj.localRefs); }
  finally {
    schemaObj.compiling = false;
    if (schemaObj.meta) this._opts = currentOpts;
  }

  schemaObj.validate = v;
  schemaObj.refs = v.refs;
  schemaObj.refVal = v.refVal;
  schemaObj.root = v.root;
  return v;


  function callValidate() {
    var _validate = schemaObj.validate;
    var result = _validate.apply(null, arguments);
    callValidate.errors = _validate.errors;
    return result;
  }
}


function chooseGetId(opts) {
  switch (opts.schemaId) {
    case '$id': return _get$Id;
    case 'id': return _getId;
    default: return _get$IdOrId;
  }
}


function _getId(schema) {
  if (schema.$id) console.warn('schema $id ignored', schema.$id);
  return schema.id;
}


function _get$Id(schema) {
  if (schema.id) console.warn('schema id ignored', schema.id);
  return schema.$id;
}


function _get$IdOrId(schema) {
  if (schema.$id && schema.id && schema.$id != schema.id)
    throw new Error('schema $id is different from id');
  return schema.$id || schema.id;
}


/**
 * Convert array of error message objects to string
 * @this   Ajv
 * @param  {Array<Object>} errors optional array of validation errors, if not passed errors from the instance are used.
 * @param  {Object} options optional options with properties `separator` and `dataVar`.
 * @return {String} human readable string with all errors descriptions
 */
function errorsText(errors, options) {
  errors = errors || this.errors;
  if (!errors) return 'No errors';
  options = options || {};
  var separator = options.separator === undefined ? ', ' : options.separator;
  var dataVar = options.dataVar === undefined ? 'data' : options.dataVar;

  var text = '';
  for (var i=0; i<errors.length; i++) {
    var e = errors[i];
    if (e) text += dataVar + e.dataPath + ' ' + e.message + separator;
  }
  return text.slice(0, -separator.length);
}


/**
 * Add custom format
 * @this   Ajv
 * @param {String} name format name
 * @param {String|RegExp|Function} format string is converted to RegExp; function should return boolean (true when valid)
 */
function addFormat(name, format) {
  if (typeof format == 'string') format = new RegExp(format);
  this._formats[name] = format;
}


function addDraft6MetaSchema(self) {
  var $dataSchema;
  if (self._opts.$data) {
    $dataSchema = __webpack_require__(375);
    self.addMetaSchema($dataSchema, $dataSchema.$id, true);
  }
  if (self._opts.meta === false) return;
  var metaSchema = __webpack_require__(376);
  if (self._opts.$data) metaSchema = $dataMetaSchema(metaSchema, META_SUPPORT_DATA);
  self.addMetaSchema(metaSchema, META_SCHEMA_ID, true);
  self._refs['http://json-schema.org/schema'] = META_SCHEMA_ID;
}


function addInitialSchemas(self) {
  var optsSchemas = self._opts.schemas;
  if (!optsSchemas) return;
  if (Array.isArray(optsSchemas)) self.addSchema(optsSchemas);
  else for (var key in optsSchemas) self.addSchema(optsSchemas[key], key);
}


function addInitialFormats(self) {
  for (var name in self._opts.formats) {
    var format = self._opts.formats[name];
    self.addFormat(name, format);
  }
}


function checkUnique(self, id) {
  if (self._schemas[id] || self._refs[id])
    throw new Error('schema with key or id "' + id + '" already exists');
}


function getMetaSchemaOptions(self) {
  var metaOpts = util.copy(self._opts);
  for (var i=0; i<META_IGNORE_OPTIONS.length; i++)
    delete metaOpts[META_IGNORE_OPTIONS[i]];
  return metaOpts;
}


/***/ }),

/***/ 398:
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var Cache = module.exports = function Cache() {
  this._cache = {};
};


Cache.prototype.put = function Cache_put(key, value) {
  this._cache[key] = value;
};


Cache.prototype.get = function Cache_get(key) {
  return this._cache[key];
};


Cache.prototype.del = function Cache_del(key) {
  delete this._cache[key];
};


Cache.prototype.clear = function Cache_clear() {
  this._cache = {};
};


/***/ }),

/***/ 399:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//all requires must be explicit because browserify won't work with dynamic requires
module.exports = {
  '$ref': __webpack_require__(420),
  allOf: __webpack_require__(405),
  anyOf: __webpack_require__(406),
  const: __webpack_require__(407),
  contains: __webpack_require__(408),
  dependencies: __webpack_require__(410),
  'enum': __webpack_require__(411),
  format: __webpack_require__(412),
  items: __webpack_require__(413),
  maximum: __webpack_require__(336),
  minimum: __webpack_require__(336),
  maxItems: __webpack_require__(337),
  minItems: __webpack_require__(337),
  maxLength: __webpack_require__(338),
  minLength: __webpack_require__(338),
  maxProperties: __webpack_require__(339),
  minProperties: __webpack_require__(339),
  multipleOf: __webpack_require__(414),
  not: __webpack_require__(415),
  oneOf: __webpack_require__(416),
  pattern: __webpack_require__(417),
  properties: __webpack_require__(418),
  propertyNames: __webpack_require__(419),
  required: __webpack_require__(421),
  uniqueItems: __webpack_require__(422),
  validate: __webpack_require__(340)
};


/***/ }),

/***/ 400:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var MissingRefError = __webpack_require__(322).MissingRef;

module.exports = compileAsync;


/**
 * Creates validating function for passed schema with asynchronous loading of missing schemas.
 * `loadSchema` option should be a function that accepts schema uri and returns promise that resolves with the schema.
 * @this  Ajv
 * @param {Object}   schema schema object
 * @param {Boolean}  meta optional true to compile meta-schema; this parameter can be skipped
 * @param {Function} callback an optional node-style callback, it is called with 2 parameters: error (or null) and validating function.
 * @return {Promise} promise that resolves with a validating function.
 */
function compileAsync(schema, meta, callback) {
  /* eslint no-shadow: 0 */
  /* global Promise */
  /* jshint validthis: true */
  var self = this;
  if (typeof this._opts.loadSchema != 'function')
    throw new Error('options.loadSchema should be a function');

  if (typeof meta == 'function') {
    callback = meta;
    meta = undefined;
  }

  var p = loadMetaSchemaOf(schema).then(function () {
    var schemaObj = self._addSchema(schema, undefined, meta);
    return schemaObj.validate || _compileAsync(schemaObj);
  });

  if (callback) {
    p.then(
      function(v) { callback(null, v); },
      callback
    );
  }

  return p;


  function loadMetaSchemaOf(sch) {
    var $schema = sch.$schema;
    return $schema && !self.getSchema($schema)
            ? compileAsync.call(self, { $ref: $schema }, true)
            : Promise.resolve();
  }


  function _compileAsync(schemaObj) {
    try { return self._compile(schemaObj); }
    catch(e) {
      if (e instanceof MissingRefError) return loadMissingSchema(e);
      throw e;
    }


    function loadMissingSchema(e) {
      var ref = e.missingSchema;
      if (added(ref)) throw new Error('Schema ' + ref + ' is loaded but ' + e.missingRef + ' cannot be resolved');

      var schemaPromise = self._loadingSchemas[ref];
      if (!schemaPromise) {
        schemaPromise = self._loadingSchemas[ref] = self._opts.loadSchema(ref);
        schemaPromise.then(removePromise, removePromise);
      }

      return schemaPromise.then(function (sch) {
        if (!added(ref)) {
          return loadMetaSchemaOf(sch).then(function () {
            if (!added(ref)) self.addSchema(sch, ref, undefined, meta);
          });
        }
      }).then(function() {
        return _compileAsync(schemaObj);
      });

      function removePromise() {
        delete self._loadingSchemas[ref];
      }

      function added(ref) {
        return self._refs[ref] || self._schemas[ref];
      }
    }
  }
}


/***/ }),

/***/ 401:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__(312);

var DATE = /^\d\d\d\d-(\d\d)-(\d\d)$/;
var DAYS = [0,31,29,31,30,31,30,31,31,30,31,30,31];
var TIME = /^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d:\d\d)?$/i;
var HOSTNAME = /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*$/i;
var URI = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
var URIREF = /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
// uri-template: https://tools.ietf.org/html/rfc6570
var URITEMPLATE = /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i;
// For the source: https://gist.github.com/dperini/729294
// For test cases: https://mathiasbynens.be/demo/url-regex
// @todo Delete current URL in favour of the commented out URL rule when this issue is fixed https://github.com/eslint/eslint/issues/7983.
// var URL = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!10(?:\.\d{1,3}){3})(?!127(?:\.\d{1,3}){3})(?!169\.254(?:\.\d{1,3}){2})(?!192\.168(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u{00a1}-\u{ffff}0-9]+-?)*[a-z\u{00a1}-\u{ffff}0-9]+)(?:\.(?:[a-z\u{00a1}-\u{ffff}0-9]+-?)*[a-z\u{00a1}-\u{ffff}0-9]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu;
var URL = /^(?:(?:http[s\u017F]?|ftp):\/\/)(?:(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+(?::(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?@)?(?:(?!10(?:\.[0-9]{1,3}){3})(?!127(?:\.[0-9]{1,3}){3})(?!169\.254(?:\.[0-9]{1,3}){2})(?!192\.168(?:\.[0-9]{1,3}){2})(?!172\.(?:1[6-9]|2[0-9]|3[01])(?:\.[0-9]{1,3}){2})(?:[1-9][0-9]?|1[0-9][0-9]|2[01][0-9]|22[0-3])(?:\.(?:1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])){2}(?:\.(?:[1-9][0-9]?|1[0-9][0-9]|2[0-4][0-9]|25[0-4]))|(?:(?:(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-?)*(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)(?:\.(?:(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-?)*(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)*(?:\.(?:(?:[KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){2,})))(?::[0-9]{2,5})?(?:\/(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?$/i;
var UUID = /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i;
var JSON_POINTER = /^(?:\/(?:[^~/]|~0|~1)*)*$|^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i;
var RELATIVE_JSON_POINTER = /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/;


module.exports = formats;

function formats(mode) {
  mode = mode == 'full' ? 'full' : 'fast';
  return util.copy(formats[mode]);
}


formats.fast = {
  // date: http://tools.ietf.org/html/rfc3339#section-5.6
  date: /^\d\d\d\d-[0-1]\d-[0-3]\d$/,
  // date-time: http://tools.ietf.org/html/rfc3339#section-5.6
  time: /^[0-2]\d:[0-5]\d:[0-5]\d(?:\.\d+)?(?:z|[+-]\d\d:\d\d)?$/i,
  'date-time': /^\d\d\d\d-[0-1]\d-[0-3]\d[t\s][0-2]\d:[0-5]\d:[0-5]\d(?:\.\d+)?(?:z|[+-]\d\d:\d\d)$/i,
  // uri: https://github.com/mafintosh/is-my-json-valid/blob/master/formats.js
  uri: /^(?:[a-z][a-z0-9+-.]*)(?::|\/)\/?[^\s]*$/i,
  'uri-reference': /^(?:(?:[a-z][a-z0-9+-.]*:)?\/\/)?[^\s]*$/i,
  'uri-template': URITEMPLATE,
  url: URL,
  // email (sources from jsen validator):
  // http://stackoverflow.com/questions/201323/using-a-regular-expression-to-validate-an-email-address#answer-8829363
  // http://www.w3.org/TR/html5/forms.html#valid-e-mail-address (search for 'willful violation')
  email: /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i,
  hostname: HOSTNAME,
  // optimized https://www.safaribooksonline.com/library/view/regular-expressions-cookbook/9780596802837/ch07s16.html
  ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
  // optimized http://stackoverflow.com/questions/53497/regular-expression-that-matches-valid-ipv6-addresses
  ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i,
  regex: regex,
  // uuid: http://tools.ietf.org/html/rfc4122
  uuid: UUID,
  // JSON-pointer: https://tools.ietf.org/html/rfc6901
  // uri fragment: https://tools.ietf.org/html/rfc3986#appendix-A
  'json-pointer': JSON_POINTER,
  // relative JSON-pointer: http://tools.ietf.org/html/draft-luff-relative-json-pointer-00
  'relative-json-pointer': RELATIVE_JSON_POINTER
};


formats.full = {
  date: date,
  time: time,
  'date-time': date_time,
  uri: uri,
  'uri-reference': URIREF,
  'uri-template': URITEMPLATE,
  url: URL,
  email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&''*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
  hostname: hostname,
  ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
  ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i,
  regex: regex,
  uuid: UUID,
  'json-pointer': JSON_POINTER,
  'relative-json-pointer': RELATIVE_JSON_POINTER
};


function date(str) {
  // full-date from http://tools.ietf.org/html/rfc3339#section-5.6
  var matches = str.match(DATE);
  if (!matches) return false;

  var month = +matches[1];
  var day = +matches[2];
  return month >= 1 && month <= 12 && day >= 1 && day <= DAYS[month];
}


function time(str, full) {
  var matches = str.match(TIME);
  if (!matches) return false;

  var hour = matches[1];
  var minute = matches[2];
  var second = matches[3];
  var timeZone = matches[5];
  return hour <= 23 && minute <= 59 && second <= 59 && (!full || timeZone);
}


var DATE_TIME_SEPARATOR = /t|\s/i;
function date_time(str) {
  // http://tools.ietf.org/html/rfc3339#section-5.6
  var dateTime = str.split(DATE_TIME_SEPARATOR);
  return dateTime.length == 2 && date(dateTime[0]) && time(dateTime[1], true);
}


function hostname(str) {
  // https://tools.ietf.org/html/rfc1034#section-3.5
  // https://tools.ietf.org/html/rfc1123#section-2
  return str.length <= 255 && HOSTNAME.test(str);
}


var NOT_URI_FRAGMENT = /\/|:/;
function uri(str) {
  // http://jmrware.com/articles/2009/uri_regexp/URI_regex.html + optional protocol + required "."
  return NOT_URI_FRAGMENT.test(str) && URI.test(str);
}


var Z_ANCHOR = /[^\\]\\Z/;
function regex(str) {
  if (Z_ANCHOR.test(str)) return false;
  try {
    new RegExp(str);
    return true;
  } catch(e) {
    return false;
  }
}


/***/ }),

/***/ 402:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var resolve = __webpack_require__(323)
  , util = __webpack_require__(312)
  , errorClasses = __webpack_require__(322)
  , stableStringify = __webpack_require__(342);

var validateGenerator = __webpack_require__(340);

/**
 * Functions below are used inside compiled validations function
 */

var co = __webpack_require__(341);
var ucs2length = util.ucs2length;
var equal = __webpack_require__(324);

// this error is thrown by async schemas to return validation errors via exception
var ValidationError = errorClasses.Validation;

module.exports = compile;


/**
 * Compiles schema to validation function
 * @this   Ajv
 * @param  {Object} schema schema object
 * @param  {Object} root object with information about the root schema for this schema
 * @param  {Object} localRefs the hash of local references inside the schema (created by resolve.id), used for inline resolution
 * @param  {String} baseId base ID for IDs in the schema
 * @return {Function} validation function
 */
function compile(schema, root, localRefs, baseId) {
  /* jshint validthis: true, evil: true */
  /* eslint no-shadow: 0 */
  var self = this
    , opts = this._opts
    , refVal = [ undefined ]
    , refs = {}
    , patterns = []
    , patternsHash = {}
    , defaults = []
    , defaultsHash = {}
    , customRules = [];

  root = root || { schema: schema, refVal: refVal, refs: refs };

  var c = checkCompiling.call(this, schema, root, baseId);
  var compilation = this._compilations[c.index];
  if (c.compiling) return (compilation.callValidate = callValidate);

  var formats = this._formats;
  var RULES = this.RULES;

  try {
    var v = localCompile(schema, root, localRefs, baseId);
    compilation.validate = v;
    var cv = compilation.callValidate;
    if (cv) {
      cv.schema = v.schema;
      cv.errors = null;
      cv.refs = v.refs;
      cv.refVal = v.refVal;
      cv.root = v.root;
      cv.$async = v.$async;
      if (opts.sourceCode) cv.source = v.source;
    }
    return v;
  } finally {
    endCompiling.call(this, schema, root, baseId);
  }

  function callValidate() {
    var validate = compilation.validate;
    var result = validate.apply(null, arguments);
    callValidate.errors = validate.errors;
    return result;
  }

  function localCompile(_schema, _root, localRefs, baseId) {
    var isRoot = !_root || (_root && _root.schema == _schema);
    if (_root.schema != root.schema)
      return compile.call(self, _schema, _root, localRefs, baseId);

    var $async = _schema.$async === true;

    var sourceCode = validateGenerator({
      isTop: true,
      schema: _schema,
      isRoot: isRoot,
      baseId: baseId,
      root: _root,
      schemaPath: '',
      errSchemaPath: '#',
      errorPath: '""',
      MissingRefError: errorClasses.MissingRef,
      RULES: RULES,
      validate: validateGenerator,
      util: util,
      resolve: resolve,
      resolveRef: resolveRef,
      usePattern: usePattern,
      useDefault: useDefault,
      useCustomRule: useCustomRule,
      opts: opts,
      formats: formats,
      self: self
    });

    sourceCode = vars(refVal, refValCode) + vars(patterns, patternCode)
                   + vars(defaults, defaultCode) + vars(customRules, customRuleCode)
                   + sourceCode;

    if (opts.processCode) sourceCode = opts.processCode(sourceCode);
    // console.log('\n\n\n *** \n', JSON.stringify(sourceCode));
    var validate;
    try {
      var makeValidate = new Function(
        'self',
        'RULES',
        'formats',
        'root',
        'refVal',
        'defaults',
        'customRules',
        'co',
        'equal',
        'ucs2length',
        'ValidationError',
        sourceCode
      );

      validate = makeValidate(
        self,
        RULES,
        formats,
        root,
        refVal,
        defaults,
        customRules,
        co,
        equal,
        ucs2length,
        ValidationError
      );

      refVal[0] = validate;
    } catch(e) {
      console.error('Error compiling schema, function code:', sourceCode);
      throw e;
    }

    validate.schema = _schema;
    validate.errors = null;
    validate.refs = refs;
    validate.refVal = refVal;
    validate.root = isRoot ? validate : _root;
    if ($async) validate.$async = true;
    if (opts.sourceCode === true) {
      validate.source = {
        code: sourceCode,
        patterns: patterns,
        defaults: defaults
      };
    }

    return validate;
  }

  function resolveRef(baseId, ref, isRoot) {
    ref = resolve.url(baseId, ref);
    var refIndex = refs[ref];
    var _refVal, refCode;
    if (refIndex !== undefined) {
      _refVal = refVal[refIndex];
      refCode = 'refVal[' + refIndex + ']';
      return resolvedRef(_refVal, refCode);
    }
    if (!isRoot && root.refs) {
      var rootRefId = root.refs[ref];
      if (rootRefId !== undefined) {
        _refVal = root.refVal[rootRefId];
        refCode = addLocalRef(ref, _refVal);
        return resolvedRef(_refVal, refCode);
      }
    }

    refCode = addLocalRef(ref);
    var v = resolve.call(self, localCompile, root, ref);
    if (v === undefined) {
      var localSchema = localRefs && localRefs[ref];
      if (localSchema) {
        v = resolve.inlineRef(localSchema, opts.inlineRefs)
            ? localSchema
            : compile.call(self, localSchema, root, localRefs, baseId);
      }
    }

    if (v === undefined) {
      removeLocalRef(ref);
    } else {
      replaceLocalRef(ref, v);
      return resolvedRef(v, refCode);
    }
  }

  function addLocalRef(ref, v) {
    var refId = refVal.length;
    refVal[refId] = v;
    refs[ref] = refId;
    return 'refVal' + refId;
  }

  function removeLocalRef(ref) {
    delete refs[ref];
  }

  function replaceLocalRef(ref, v) {
    var refId = refs[ref];
    refVal[refId] = v;
  }

  function resolvedRef(refVal, code) {
    return typeof refVal == 'object' || typeof refVal == 'boolean'
            ? { code: code, schema: refVal, inline: true }
            : { code: code, $async: refVal && refVal.$async };
  }

  function usePattern(regexStr) {
    var index = patternsHash[regexStr];
    if (index === undefined) {
      index = patternsHash[regexStr] = patterns.length;
      patterns[index] = regexStr;
    }
    return 'pattern' + index;
  }

  function useDefault(value) {
    switch (typeof value) {
      case 'boolean':
      case 'number':
        return '' + value;
      case 'string':
        return util.toQuotedString(value);
      case 'object':
        if (value === null) return 'null';
        var valueStr = stableStringify(value);
        var index = defaultsHash[valueStr];
        if (index === undefined) {
          index = defaultsHash[valueStr] = defaults.length;
          defaults[index] = value;
        }
        return 'default' + index;
    }
  }

  function useCustomRule(rule, schema, parentSchema, it) {
    var validateSchema = rule.definition.validateSchema;
    if (validateSchema && self._opts.validateSchema !== false) {
      var valid = validateSchema(schema);
      if (!valid) {
        var message = 'keyword schema is invalid: ' + self.errorsText(validateSchema.errors);
        if (self._opts.validateSchema == 'log') console.error(message);
        else throw new Error(message);
      }
    }

    var compile = rule.definition.compile
      , inline = rule.definition.inline
      , macro = rule.definition.macro;

    var validate;
    if (compile) {
      validate = compile.call(self, schema, parentSchema, it);
    } else if (macro) {
      validate = macro.call(self, schema, parentSchema, it);
      if (opts.validateSchema !== false) self.validateSchema(validate, true);
    } else if (inline) {
      validate = inline.call(self, it, rule.keyword, schema, parentSchema);
    } else {
      validate = rule.definition.validate;
      if (!validate) return;
    }

    if (validate === undefined)
      throw new Error('custom keyword "' + rule.keyword + '"failed to compile');

    var index = customRules.length;
    customRules[index] = validate;

    return {
      code: 'customRule' + index,
      validate: validate
    };
  }
}


/**
 * Checks if the schema is currently compiled
 * @this   Ajv
 * @param  {Object} schema schema to compile
 * @param  {Object} root root object
 * @param  {String} baseId base schema ID
 * @return {Object} object with properties "index" (compilation index) and "compiling" (boolean)
 */
function checkCompiling(schema, root, baseId) {
  /* jshint validthis: true */
  var index = compIndex.call(this, schema, root, baseId);
  if (index >= 0) return { index: index, compiling: true };
  index = this._compilations.length;
  this._compilations[index] = {
    schema: schema,
    root: root,
    baseId: baseId
  };
  return { index: index, compiling: false };
}


/**
 * Removes the schema from the currently compiled list
 * @this   Ajv
 * @param  {Object} schema schema to compile
 * @param  {Object} root root object
 * @param  {String} baseId base schema ID
 */
function endCompiling(schema, root, baseId) {
  /* jshint validthis: true */
  var i = compIndex.call(this, schema, root, baseId);
  if (i >= 0) this._compilations.splice(i, 1);
}


/**
 * Index of schema compilation in the currently compiled list
 * @this   Ajv
 * @param  {Object} schema schema to compile
 * @param  {Object} root root object
 * @param  {String} baseId base schema ID
 * @return {Integer} compilation index
 */
function compIndex(schema, root, baseId) {
  /* jshint validthis: true */
  for (var i=0; i<this._compilations.length; i++) {
    var c = this._compilations[i];
    if (c.schema == schema && c.root == root && c.baseId == baseId) return i;
  }
  return -1;
}


function patternCode(i, patterns) {
  return 'var pattern' + i + ' = new RegExp(' + util.toQuotedString(patterns[i]) + ');';
}


function defaultCode(i) {
  return 'var default' + i + ' = defaults[' + i + '];';
}


function refValCode(i, refVal) {
  return refVal[i] === undefined ? '' : 'var refVal' + i + ' = refVal[' + i + '];';
}


function customRuleCode(i) {
  return 'var customRule' + i + ' = customRules[' + i + '];';
}


function vars(arr, statement) {
  if (!arr.length) return '';
  var code = '';
  for (var i=0; i<arr.length; i++)
    code += statement(i, arr);
  return code;
}


/***/ }),

/***/ 403:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ruleModules = __webpack_require__(399)
  , toHash = __webpack_require__(312).toHash;

module.exports = function rules() {
  var RULES = [
    { type: 'number',
      rules: [ { 'maximum': ['exclusiveMaximum'] },
               { 'minimum': ['exclusiveMinimum'] }, 'multipleOf', 'format'] },
    { type: 'string',
      rules: [ 'maxLength', 'minLength', 'pattern', 'format' ] },
    { type: 'array',
      rules: [ 'maxItems', 'minItems', 'uniqueItems', 'contains', 'items' ] },
    { type: 'object',
      rules: [ 'maxProperties', 'minProperties', 'required', 'dependencies', 'propertyNames',
               { 'properties': ['additionalProperties', 'patternProperties'] } ] },
    { rules: [ '$ref', 'const', 'enum', 'not', 'anyOf', 'oneOf', 'allOf' ] }
  ];

  var ALL = [ 'type' ];
  var KEYWORDS = [
    'additionalItems', '$schema', 'id', 'title',
    'description', 'default', 'definitions'
  ];
  var TYPES = [ 'number', 'integer', 'string', 'array', 'object', 'boolean', 'null' ];
  RULES.all = toHash(ALL);
  RULES.types = toHash(TYPES);

  RULES.forEach(function (group) {
    group.rules = group.rules.map(function (keyword) {
      var implKeywords;
      if (typeof keyword == 'object') {
        var key = Object.keys(keyword)[0];
        implKeywords = keyword[key];
        keyword = key;
        implKeywords.forEach(function (k) {
          ALL.push(k);
          RULES.all[k] = true;
        });
      }
      ALL.push(keyword);
      var rule = RULES.all[keyword] = {
        keyword: keyword,
        code: ruleModules[keyword],
        implements: implKeywords
      };
      return rule;
    });

    if (group.type) RULES.types[group.type] = group;
  });

  RULES.keywords = toHash(ALL.concat(KEYWORDS));
  RULES.custom = {};

  return RULES;
};


/***/ }),

/***/ 404:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://mathiasbynens.be/notes/javascript-encoding
// https://github.com/bestiejs/punycode.js - punycode.ucs2.decode
module.exports = function ucs2length(str) {
  var length = 0
    , len = str.length
    , pos = 0
    , value;
  while (pos < len) {
    length++;
    value = str.charCodeAt(pos++);
    if (value >= 0xD800 && value <= 0xDBFF && pos < len) {
      // high surrogate, and there is a next character
      value = str.charCodeAt(pos);
      if ((value & 0xFC00) == 0xDC00) pos++; // low surrogate
    }
  }
  return length;
};


/***/ }),

/***/ 405:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function generate_allOf(it, $keyword, $ruleType) {
  var out = ' ';
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $it = it.util.copy(it);
  var $closingBraces = '';
  $it.level++;
  var $nextValid = 'valid' + $it.level;
  var $currentBaseId = $it.baseId,
    $allSchemasEmpty = true;
  var arr1 = $schema;
  if (arr1) {
    var $sch, $i = -1,
      l1 = arr1.length - 1;
    while ($i < l1) {
      $sch = arr1[$i += 1];
      if (it.util.schemaHasRules($sch, it.RULES.all)) {
        $allSchemasEmpty = false;
        $it.schema = $sch;
        $it.schemaPath = $schemaPath + '[' + $i + ']';
        $it.errSchemaPath = $errSchemaPath + '/' + $i;
        out += '  ' + (it.validate($it)) + ' ';
        $it.baseId = $currentBaseId;
        if ($breakOnError) {
          out += ' if (' + ($nextValid) + ') { ';
          $closingBraces += '}';
        }
      }
    }
  }
  if ($breakOnError) {
    if ($allSchemasEmpty) {
      out += ' if (true) { ';
    } else {
      out += ' ' + ($closingBraces.slice(0, -1)) + ' ';
    }
  }
  out = it.util.cleanUpCode(out);
  return out;
}


/***/ }),

/***/ 406:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function generate_anyOf(it, $keyword, $ruleType) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $data = 'data' + ($dataLvl || '');
  var $valid = 'valid' + $lvl;
  var $errs = 'errs__' + $lvl;
  var $it = it.util.copy(it);
  var $closingBraces = '';
  $it.level++;
  var $nextValid = 'valid' + $it.level;
  var $noEmptySchema = $schema.every(function($sch) {
    return it.util.schemaHasRules($sch, it.RULES.all);
  });
  if ($noEmptySchema) {
    var $currentBaseId = $it.baseId;
    out += ' var ' + ($errs) + ' = errors; var ' + ($valid) + ' = false;  ';
    var $wasComposite = it.compositeRule;
    it.compositeRule = $it.compositeRule = true;
    var arr1 = $schema;
    if (arr1) {
      var $sch, $i = -1,
        l1 = arr1.length - 1;
      while ($i < l1) {
        $sch = arr1[$i += 1];
        $it.schema = $sch;
        $it.schemaPath = $schemaPath + '[' + $i + ']';
        $it.errSchemaPath = $errSchemaPath + '/' + $i;
        out += '  ' + (it.validate($it)) + ' ';
        $it.baseId = $currentBaseId;
        out += ' ' + ($valid) + ' = ' + ($valid) + ' || ' + ($nextValid) + '; if (!' + ($valid) + ') { ';
        $closingBraces += '}';
      }
    }
    it.compositeRule = $it.compositeRule = $wasComposite;
    out += ' ' + ($closingBraces) + ' if (!' + ($valid) + ') {   var err =   '; /* istanbul ignore else */
    if (it.createErrors !== false) {
      out += ' { keyword: \'' + ('anyOf') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: {} ';
      if (it.opts.messages !== false) {
        out += ' , message: \'should match some schema in anyOf\' ';
      }
      if (it.opts.verbose) {
        out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
      }
      out += ' } ';
    } else {
      out += ' {} ';
    }
    out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
    if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
      if (it.async) {
        out += ' throw new ValidationError(vErrors); ';
      } else {
        out += ' validate.errors = vErrors; return false; ';
      }
    }
    out += ' } else {  errors = ' + ($errs) + '; if (vErrors !== null) { if (' + ($errs) + ') vErrors.length = ' + ($errs) + '; else vErrors = null; } ';
    if (it.opts.allErrors) {
      out += ' } ';
    }
    out = it.util.cleanUpCode(out);
  } else {
    if ($breakOnError) {
      out += ' if (true) { ';
    }
  }
  return out;
}


/***/ }),

/***/ 407:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function generate_const(it, $keyword, $ruleType) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $data = 'data' + ($dataLvl || '');
  var $valid = 'valid' + $lvl;
  var $isData = it.opts.$data && $schema && $schema.$data,
    $schemaValue;
  if ($isData) {
    out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
    $schemaValue = 'schema' + $lvl;
  } else {
    $schemaValue = $schema;
  }
  if (!$isData) {
    out += ' var schema' + ($lvl) + ' = validate.schema' + ($schemaPath) + ';';
  }
  out += 'var ' + ($valid) + ' = equal(' + ($data) + ', schema' + ($lvl) + '); if (!' + ($valid) + ') {   ';
  var $$outStack = $$outStack || [];
  $$outStack.push(out);
  out = ''; /* istanbul ignore else */
  if (it.createErrors !== false) {
    out += ' { keyword: \'' + ('const') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: {} ';
    if (it.opts.messages !== false) {
      out += ' , message: \'should be equal to constant\' ';
    }
    if (it.opts.verbose) {
      out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
    }
    out += ' } ';
  } else {
    out += ' {} ';
  }
  var __err = out;
  out = $$outStack.pop();
  if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
    if (it.async) {
      out += ' throw new ValidationError([' + (__err) + ']); ';
    } else {
      out += ' validate.errors = [' + (__err) + ']; return false; ';
    }
  } else {
    out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
  }
  out += ' }';
  if ($breakOnError) {
    out += ' else { ';
  }
  return out;
}


/***/ }),

/***/ 408:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function generate_contains(it, $keyword, $ruleType) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $data = 'data' + ($dataLvl || '');
  var $valid = 'valid' + $lvl;
  var $errs = 'errs__' + $lvl;
  var $it = it.util.copy(it);
  var $closingBraces = '';
  $it.level++;
  var $nextValid = 'valid' + $it.level;
  var $idx = 'i' + $lvl,
    $dataNxt = $it.dataLevel = it.dataLevel + 1,
    $nextData = 'data' + $dataNxt,
    $currentBaseId = it.baseId,
    $nonEmptySchema = it.util.schemaHasRules($schema, it.RULES.all);
  out += 'var ' + ($errs) + ' = errors;var ' + ($valid) + ';';
  if ($nonEmptySchema) {
    var $wasComposite = it.compositeRule;
    it.compositeRule = $it.compositeRule = true;
    $it.schema = $schema;
    $it.schemaPath = $schemaPath;
    $it.errSchemaPath = $errSchemaPath;
    out += ' var ' + ($nextValid) + ' = false; for (var ' + ($idx) + ' = 0; ' + ($idx) + ' < ' + ($data) + '.length; ' + ($idx) + '++) { ';
    $it.errorPath = it.util.getPathExpr(it.errorPath, $idx, it.opts.jsonPointers, true);
    var $passData = $data + '[' + $idx + ']';
    $it.dataPathArr[$dataNxt] = $idx;
    var $code = it.validate($it);
    $it.baseId = $currentBaseId;
    if (it.util.varOccurences($code, $nextData) < 2) {
      out += ' ' + (it.util.varReplace($code, $nextData, $passData)) + ' ';
    } else {
      out += ' var ' + ($nextData) + ' = ' + ($passData) + '; ' + ($code) + ' ';
    }
    out += ' if (' + ($nextValid) + ') break; }  ';
    it.compositeRule = $it.compositeRule = $wasComposite;
    out += ' ' + ($closingBraces) + ' if (!' + ($nextValid) + ') {';
  } else {
    out += ' if (' + ($data) + '.length == 0) {';
  }
  var $$outStack = $$outStack || [];
  $$outStack.push(out);
  out = ''; /* istanbul ignore else */
  if (it.createErrors !== false) {
    out += ' { keyword: \'' + ('contains') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: {} ';
    if (it.opts.messages !== false) {
      out += ' , message: \'should contain a valid item\' ';
    }
    if (it.opts.verbose) {
      out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
    }
    out += ' } ';
  } else {
    out += ' {} ';
  }
  var __err = out;
  out = $$outStack.pop();
  if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
    if (it.async) {
      out += ' throw new ValidationError([' + (__err) + ']); ';
    } else {
      out += ' validate.errors = [' + (__err) + ']; return false; ';
    }
  } else {
    out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
  }
  out += ' } else { ';
  if ($nonEmptySchema) {
    out += '  errors = ' + ($errs) + '; if (vErrors !== null) { if (' + ($errs) + ') vErrors.length = ' + ($errs) + '; else vErrors = null; } ';
  }
  if (it.opts.allErrors) {
    out += ' } ';
  }
  out = it.util.cleanUpCode(out);
  return out;
}


/***/ }),

/***/ 409:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function generate_custom(it, $keyword, $ruleType) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $errorKeyword;
  var $data = 'data' + ($dataLvl || '');
  var $valid = 'valid' + $lvl;
  var $errs = 'errs__' + $lvl;
  var $isData = it.opts.$data && $schema && $schema.$data,
    $schemaValue;
  if ($isData) {
    out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
    $schemaValue = 'schema' + $lvl;
  } else {
    $schemaValue = $schema;
  }
  var $rule = this,
    $definition = 'definition' + $lvl,
    $rDef = $rule.definition,
    $closingBraces = '';
  var $compile, $inline, $macro, $ruleValidate, $validateCode;
  if ($isData && $rDef.$data) {
    $validateCode = 'keywordValidate' + $lvl;
    var $validateSchema = $rDef.validateSchema;
    out += ' var ' + ($definition) + ' = RULES.custom[\'' + ($keyword) + '\'].definition; var ' + ($validateCode) + ' = ' + ($definition) + '.validate;';
  } else {
    $ruleValidate = it.useCustomRule($rule, $schema, it.schema, it);
    if (!$ruleValidate) return;
    $schemaValue = 'validate.schema' + $schemaPath;
    $validateCode = $ruleValidate.code;
    $compile = $rDef.compile;
    $inline = $rDef.inline;
    $macro = $rDef.macro;
  }
  var $ruleErrs = $validateCode + '.errors',
    $i = 'i' + $lvl,
    $ruleErr = 'ruleErr' + $lvl,
    $asyncKeyword = $rDef.async;
  if ($asyncKeyword && !it.async) throw new Error('async keyword in sync schema');
  if (!($inline || $macro)) {
    out += '' + ($ruleErrs) + ' = null;';
  }
  out += 'var ' + ($errs) + ' = errors;var ' + ($valid) + ';';
  if ($isData && $rDef.$data) {
    $closingBraces += '}';
    out += ' if (' + ($schemaValue) + ' === undefined) { ' + ($valid) + ' = true; } else { ';
    if ($validateSchema) {
      $closingBraces += '}';
      out += ' ' + ($valid) + ' = ' + ($definition) + '.validateSchema(' + ($schemaValue) + '); if (' + ($valid) + ') { ';
    }
  }
  if ($inline) {
    if ($rDef.statements) {
      out += ' ' + ($ruleValidate.validate) + ' ';
    } else {
      out += ' ' + ($valid) + ' = ' + ($ruleValidate.validate) + '; ';
    }
  } else if ($macro) {
    var $it = it.util.copy(it);
    var $closingBraces = '';
    $it.level++;
    var $nextValid = 'valid' + $it.level;
    $it.schema = $ruleValidate.validate;
    $it.schemaPath = '';
    var $wasComposite = it.compositeRule;
    it.compositeRule = $it.compositeRule = true;
    var $code = it.validate($it).replace(/validate\.schema/g, $validateCode);
    it.compositeRule = $it.compositeRule = $wasComposite;
    out += ' ' + ($code);
  } else {
    var $$outStack = $$outStack || [];
    $$outStack.push(out);
    out = '';
    out += '  ' + ($validateCode) + '.call( ';
    if (it.opts.passContext) {
      out += 'this';
    } else {
      out += 'self';
    }
    if ($compile || $rDef.schema === false) {
      out += ' , ' + ($data) + ' ';
    } else {
      out += ' , ' + ($schemaValue) + ' , ' + ($data) + ' , validate.schema' + (it.schemaPath) + ' ';
    }
    out += ' , (dataPath || \'\')';
    if (it.errorPath != '""') {
      out += ' + ' + (it.errorPath);
    }
    var $parentData = $dataLvl ? 'data' + (($dataLvl - 1) || '') : 'parentData',
      $parentDataProperty = $dataLvl ? it.dataPathArr[$dataLvl] : 'parentDataProperty';
    out += ' , ' + ($parentData) + ' , ' + ($parentDataProperty) + ' , rootData )  ';
    var def_callRuleValidate = out;
    out = $$outStack.pop();
    if ($rDef.errors === false) {
      out += ' ' + ($valid) + ' = ';
      if ($asyncKeyword) {
        out += '' + (it.yieldAwait);
      }
      out += '' + (def_callRuleValidate) + '; ';
    } else {
      if ($asyncKeyword) {
        $ruleErrs = 'customErrors' + $lvl;
        out += ' var ' + ($ruleErrs) + ' = null; try { ' + ($valid) + ' = ' + (it.yieldAwait) + (def_callRuleValidate) + '; } catch (e) { ' + ($valid) + ' = false; if (e instanceof ValidationError) ' + ($ruleErrs) + ' = e.errors; else throw e; } ';
      } else {
        out += ' ' + ($ruleErrs) + ' = null; ' + ($valid) + ' = ' + (def_callRuleValidate) + '; ';
      }
    }
  }
  if ($rDef.modifying) {
    out += ' if (' + ($parentData) + ') ' + ($data) + ' = ' + ($parentData) + '[' + ($parentDataProperty) + '];';
  }
  out += '' + ($closingBraces);
  if ($rDef.valid) {
    if ($breakOnError) {
      out += ' if (true) { ';
    }
  } else {
    out += ' if ( ';
    if ($rDef.valid === undefined) {
      out += ' !';
      if ($macro) {
        out += '' + ($nextValid);
      } else {
        out += '' + ($valid);
      }
    } else {
      out += ' ' + (!$rDef.valid) + ' ';
    }
    out += ') { ';
    $errorKeyword = $rule.keyword;
    var $$outStack = $$outStack || [];
    $$outStack.push(out);
    out = '';
    var $$outStack = $$outStack || [];
    $$outStack.push(out);
    out = ''; /* istanbul ignore else */
    if (it.createErrors !== false) {
      out += ' { keyword: \'' + ($errorKeyword || 'custom') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { keyword: \'' + ($rule.keyword) + '\' } ';
      if (it.opts.messages !== false) {
        out += ' , message: \'should pass "' + ($rule.keyword) + '" keyword validation\' ';
      }
      if (it.opts.verbose) {
        out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
      }
      out += ' } ';
    } else {
      out += ' {} ';
    }
    var __err = out;
    out = $$outStack.pop();
    if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
      if (it.async) {
        out += ' throw new ValidationError([' + (__err) + ']); ';
      } else {
        out += ' validate.errors = [' + (__err) + ']; return false; ';
      }
    } else {
      out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
    }
    var def_customError = out;
    out = $$outStack.pop();
    if ($inline) {
      if ($rDef.errors) {
        if ($rDef.errors != 'full') {
          out += '  for (var ' + ($i) + '=' + ($errs) + '; ' + ($i) + '<errors; ' + ($i) + '++) { var ' + ($ruleErr) + ' = vErrors[' + ($i) + ']; if (' + ($ruleErr) + '.dataPath === undefined) ' + ($ruleErr) + '.dataPath = (dataPath || \'\') + ' + (it.errorPath) + '; if (' + ($ruleErr) + '.schemaPath === undefined) { ' + ($ruleErr) + '.schemaPath = "' + ($errSchemaPath) + '"; } ';
          if (it.opts.verbose) {
            out += ' ' + ($ruleErr) + '.schema = ' + ($schemaValue) + '; ' + ($ruleErr) + '.data = ' + ($data) + '; ';
          }
          out += ' } ';
        }
      } else {
        if ($rDef.errors === false) {
          out += ' ' + (def_customError) + ' ';
        } else {
          out += ' if (' + ($errs) + ' == errors) { ' + (def_customError) + ' } else {  for (var ' + ($i) + '=' + ($errs) + '; ' + ($i) + '<errors; ' + ($i) + '++) { var ' + ($ruleErr) + ' = vErrors[' + ($i) + ']; if (' + ($ruleErr) + '.dataPath === undefined) ' + ($ruleErr) + '.dataPath = (dataPath || \'\') + ' + (it.errorPath) + '; if (' + ($ruleErr) + '.schemaPath === undefined) { ' + ($ruleErr) + '.schemaPath = "' + ($errSchemaPath) + '"; } ';
          if (it.opts.verbose) {
            out += ' ' + ($ruleErr) + '.schema = ' + ($schemaValue) + '; ' + ($ruleErr) + '.data = ' + ($data) + '; ';
          }
          out += ' } } ';
        }
      }
    } else if ($macro) {
      out += '   var err =   '; /* istanbul ignore else */
      if (it.createErrors !== false) {
        out += ' { keyword: \'' + ($errorKeyword || 'custom') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { keyword: \'' + ($rule.keyword) + '\' } ';
        if (it.opts.messages !== false) {
          out += ' , message: \'should pass "' + ($rule.keyword) + '" keyword validation\' ';
        }
        if (it.opts.verbose) {
          out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
        }
        out += ' } ';
      } else {
        out += ' {} ';
      }
      out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
      if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
        if (it.async) {
          out += ' throw new ValidationError(vErrors); ';
        } else {
          out += ' validate.errors = vErrors; return false; ';
        }
      }
    } else {
      if ($rDef.errors === false) {
        out += ' ' + (def_customError) + ' ';
      } else {
        out += ' if (Array.isArray(' + ($ruleErrs) + ')) { if (vErrors === null) vErrors = ' + ($ruleErrs) + '; else vErrors = vErrors.concat(' + ($ruleErrs) + '); errors = vErrors.length;  for (var ' + ($i) + '=' + ($errs) + '; ' + ($i) + '<errors; ' + ($i) + '++) { var ' + ($ruleErr) + ' = vErrors[' + ($i) + ']; if (' + ($ruleErr) + '.dataPath === undefined) ' + ($ruleErr) + '.dataPath = (dataPath || \'\') + ' + (it.errorPath) + ';  ' + ($ruleErr) + '.schemaPath = "' + ($errSchemaPath) + '";  ';
        if (it.opts.verbose) {
          out += ' ' + ($ruleErr) + '.schema = ' + ($schemaValue) + '; ' + ($ruleErr) + '.data = ' + ($data) + '; ';
        }
        out += ' } } else { ' + (def_customError) + ' } ';
      }
    }
    out += ' } ';
    if ($breakOnError) {
      out += ' else { ';
    }
  }
  return out;
}


/***/ }),

/***/ 410:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function generate_dependencies(it, $keyword, $ruleType) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $data = 'data' + ($dataLvl || '');
  var $errs = 'errs__' + $lvl;
  var $it = it.util.copy(it);
  var $closingBraces = '';
  $it.level++;
  var $nextValid = 'valid' + $it.level;
  var $schemaDeps = {},
    $propertyDeps = {},
    $ownProperties = it.opts.ownProperties;
  for ($property in $schema) {
    var $sch = $schema[$property];
    var $deps = Array.isArray($sch) ? $propertyDeps : $schemaDeps;
    $deps[$property] = $sch;
  }
  out += 'var ' + ($errs) + ' = errors;';
  var $currentErrorPath = it.errorPath;
  out += 'var missing' + ($lvl) + ';';
  for (var $property in $propertyDeps) {
    $deps = $propertyDeps[$property];
    if ($deps.length) {
      out += ' if ( ' + ($data) + (it.util.getProperty($property)) + ' !== undefined ';
      if ($ownProperties) {
        out += ' && Object.prototype.hasOwnProperty.call(' + ($data) + ', \'' + (it.util.escapeQuotes($property)) + '\') ';
      }
      if ($breakOnError) {
        out += ' && ( ';
        var arr1 = $deps;
        if (arr1) {
          var $propertyKey, $i = -1,
            l1 = arr1.length - 1;
          while ($i < l1) {
            $propertyKey = arr1[$i += 1];
            if ($i) {
              out += ' || ';
            }
            var $prop = it.util.getProperty($propertyKey),
              $useData = $data + $prop;
            out += ' ( ( ' + ($useData) + ' === undefined ';
            if ($ownProperties) {
              out += ' || ! Object.prototype.hasOwnProperty.call(' + ($data) + ', \'' + (it.util.escapeQuotes($propertyKey)) + '\') ';
            }
            out += ') && (missing' + ($lvl) + ' = ' + (it.util.toQuotedString(it.opts.jsonPointers ? $propertyKey : $prop)) + ') ) ';
          }
        }
        out += ')) {  ';
        var $propertyPath = 'missing' + $lvl,
          $missingProperty = '\' + ' + $propertyPath + ' + \'';
        if (it.opts._errorDataPathProperty) {
          it.errorPath = it.opts.jsonPointers ? it.util.getPathExpr($currentErrorPath, $propertyPath, true) : $currentErrorPath + ' + ' + $propertyPath;
        }
        var $$outStack = $$outStack || [];
        $$outStack.push(out);
        out = ''; /* istanbul ignore else */
        if (it.createErrors !== false) {
          out += ' { keyword: \'' + ('dependencies') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { property: \'' + (it.util.escapeQuotes($property)) + '\', missingProperty: \'' + ($missingProperty) + '\', depsCount: ' + ($deps.length) + ', deps: \'' + (it.util.escapeQuotes($deps.length == 1 ? $deps[0] : $deps.join(", "))) + '\' } ';
          if (it.opts.messages !== false) {
            out += ' , message: \'should have ';
            if ($deps.length == 1) {
              out += 'property ' + (it.util.escapeQuotes($deps[0]));
            } else {
              out += 'properties ' + (it.util.escapeQuotes($deps.join(", ")));
            }
            out += ' when property ' + (it.util.escapeQuotes($property)) + ' is present\' ';
          }
          if (it.opts.verbose) {
            out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
          }
          out += ' } ';
        } else {
          out += ' {} ';
        }
        var __err = out;
        out = $$outStack.pop();
        if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
          if (it.async) {
            out += ' throw new ValidationError([' + (__err) + ']); ';
          } else {
            out += ' validate.errors = [' + (__err) + ']; return false; ';
          }
        } else {
          out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
        }
      } else {
        out += ' ) { ';
        var arr2 = $deps;
        if (arr2) {
          var $propertyKey, i2 = -1,
            l2 = arr2.length - 1;
          while (i2 < l2) {
            $propertyKey = arr2[i2 += 1];
            var $prop = it.util.getProperty($propertyKey),
              $missingProperty = it.util.escapeQuotes($propertyKey),
              $useData = $data + $prop;
            if (it.opts._errorDataPathProperty) {
              it.errorPath = it.util.getPath($currentErrorPath, $propertyKey, it.opts.jsonPointers);
            }
            out += ' if ( ' + ($useData) + ' === undefined ';
            if ($ownProperties) {
              out += ' || ! Object.prototype.hasOwnProperty.call(' + ($data) + ', \'' + (it.util.escapeQuotes($propertyKey)) + '\') ';
            }
            out += ') {  var err =   '; /* istanbul ignore else */
            if (it.createErrors !== false) {
              out += ' { keyword: \'' + ('dependencies') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { property: \'' + (it.util.escapeQuotes($property)) + '\', missingProperty: \'' + ($missingProperty) + '\', depsCount: ' + ($deps.length) + ', deps: \'' + (it.util.escapeQuotes($deps.length == 1 ? $deps[0] : $deps.join(", "))) + '\' } ';
              if (it.opts.messages !== false) {
                out += ' , message: \'should have ';
                if ($deps.length == 1) {
                  out += 'property ' + (it.util.escapeQuotes($deps[0]));
                } else {
                  out += 'properties ' + (it.util.escapeQuotes($deps.join(", ")));
                }
                out += ' when property ' + (it.util.escapeQuotes($property)) + ' is present\' ';
              }
              if (it.opts.verbose) {
                out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
              }
              out += ' } ';
            } else {
              out += ' {} ';
            }
            out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ';
          }
        }
      }
      out += ' }   ';
      if ($breakOnError) {
        $closingBraces += '}';
        out += ' else { ';
      }
    }
  }
  it.errorPath = $currentErrorPath;
  var $currentBaseId = $it.baseId;
  for (var $property in $schemaDeps) {
    var $sch = $schemaDeps[$property];
    if (it.util.schemaHasRules($sch, it.RULES.all)) {
      out += ' ' + ($nextValid) + ' = true; if ( ' + ($data) + (it.util.getProperty($property)) + ' !== undefined ';
      if ($ownProperties) {
        out += ' && Object.prototype.hasOwnProperty.call(' + ($data) + ', \'' + (it.util.escapeQuotes($property)) + '\') ';
      }
      out += ') { ';
      $it.schema = $sch;
      $it.schemaPath = $schemaPath + it.util.getProperty($property);
      $it.errSchemaPath = $errSchemaPath + '/' + it.util.escapeFragment($property);
      out += '  ' + (it.validate($it)) + ' ';
      $it.baseId = $currentBaseId;
      out += ' }  ';
      if ($breakOnError) {
        out += ' if (' + ($nextValid) + ') { ';
        $closingBraces += '}';
      }
    }
  }
  if ($breakOnError) {
    out += '   ' + ($closingBraces) + ' if (' + ($errs) + ' == errors) {';
  }
  out = it.util.cleanUpCode(out);
  return out;
}


/***/ }),

/***/ 411:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function generate_enum(it, $keyword, $ruleType) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $data = 'data' + ($dataLvl || '');
  var $valid = 'valid' + $lvl;
  var $isData = it.opts.$data && $schema && $schema.$data,
    $schemaValue;
  if ($isData) {
    out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
    $schemaValue = 'schema' + $lvl;
  } else {
    $schemaValue = $schema;
  }
  var $i = 'i' + $lvl,
    $vSchema = 'schema' + $lvl;
  if (!$isData) {
    out += ' var ' + ($vSchema) + ' = validate.schema' + ($schemaPath) + ';';
  }
  out += 'var ' + ($valid) + ';';
  if ($isData) {
    out += ' if (schema' + ($lvl) + ' === undefined) ' + ($valid) + ' = true; else if (!Array.isArray(schema' + ($lvl) + ')) ' + ($valid) + ' = false; else {';
  }
  out += '' + ($valid) + ' = false;for (var ' + ($i) + '=0; ' + ($i) + '<' + ($vSchema) + '.length; ' + ($i) + '++) if (equal(' + ($data) + ', ' + ($vSchema) + '[' + ($i) + '])) { ' + ($valid) + ' = true; break; }';
  if ($isData) {
    out += '  }  ';
  }
  out += ' if (!' + ($valid) + ') {   ';
  var $$outStack = $$outStack || [];
  $$outStack.push(out);
  out = ''; /* istanbul ignore else */
  if (it.createErrors !== false) {
    out += ' { keyword: \'' + ('enum') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { allowedValues: schema' + ($lvl) + ' } ';
    if (it.opts.messages !== false) {
      out += ' , message: \'should be equal to one of the allowed values\' ';
    }
    if (it.opts.verbose) {
      out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
    }
    out += ' } ';
  } else {
    out += ' {} ';
  }
  var __err = out;
  out = $$outStack.pop();
  if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
    if (it.async) {
      out += ' throw new ValidationError([' + (__err) + ']); ';
    } else {
      out += ' validate.errors = [' + (__err) + ']; return false; ';
    }
  } else {
    out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
  }
  out += ' }';
  if ($breakOnError) {
    out += ' else { ';
  }
  return out;
}


/***/ }),

/***/ 412:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function generate_format(it, $keyword, $ruleType) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $data = 'data' + ($dataLvl || '');
  if (it.opts.format === false) {
    if ($breakOnError) {
      out += ' if (true) { ';
    }
    return out;
  }
  var $isData = it.opts.$data && $schema && $schema.$data,
    $schemaValue;
  if ($isData) {
    out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
    $schemaValue = 'schema' + $lvl;
  } else {
    $schemaValue = $schema;
  }
  var $unknownFormats = it.opts.unknownFormats,
    $allowUnknown = Array.isArray($unknownFormats);
  if ($isData) {
    var $format = 'format' + $lvl,
      $isObject = 'isObject' + $lvl,
      $formatType = 'formatType' + $lvl;
    out += ' var ' + ($format) + ' = formats[' + ($schemaValue) + ']; var ' + ($isObject) + ' = typeof ' + ($format) + ' == \'object\' && !(' + ($format) + ' instanceof RegExp) && ' + ($format) + '.validate; var ' + ($formatType) + ' = ' + ($isObject) + ' && ' + ($format) + '.type || \'string\'; if (' + ($isObject) + ') { ';
    if (it.async) {
      out += ' var async' + ($lvl) + ' = ' + ($format) + '.async; ';
    }
    out += ' ' + ($format) + ' = ' + ($format) + '.validate; } if (  ';
    if ($isData) {
      out += ' (' + ($schemaValue) + ' !== undefined && typeof ' + ($schemaValue) + ' != \'string\') || ';
    }
    out += ' (';
    if ($unknownFormats != 'ignore') {
      out += ' (' + ($schemaValue) + ' && !' + ($format) + ' ';
      if ($allowUnknown) {
        out += ' && self._opts.unknownFormats.indexOf(' + ($schemaValue) + ') == -1 ';
      }
      out += ') || ';
    }
    out += ' (' + ($format) + ' && ' + ($formatType) + ' == \'' + ($ruleType) + '\' && !(typeof ' + ($format) + ' == \'function\' ? ';
    if (it.async) {
      out += ' (async' + ($lvl) + ' ? ' + (it.yieldAwait) + ' ' + ($format) + '(' + ($data) + ') : ' + ($format) + '(' + ($data) + ')) ';
    } else {
      out += ' ' + ($format) + '(' + ($data) + ') ';
    }
    out += ' : ' + ($format) + '.test(' + ($data) + '))))) {';
  } else {
    var $format = it.formats[$schema];
    if (!$format) {
      if ($unknownFormats == 'ignore') {
        console.warn('unknown format "' + $schema + '" ignored in schema at path "' + it.errSchemaPath + '"');
        if ($breakOnError) {
          out += ' if (true) { ';
        }
        return out;
      } else if ($allowUnknown && $unknownFormats.indexOf($schema) >= 0) {
        if ($breakOnError) {
          out += ' if (true) { ';
        }
        return out;
      } else {
        throw new Error('unknown format "' + $schema + '" is used in schema at path "' + it.errSchemaPath + '"');
      }
    }
    var $isObject = typeof $format == 'object' && !($format instanceof RegExp) && $format.validate;
    var $formatType = $isObject && $format.type || 'string';
    if ($isObject) {
      var $async = $format.async === true;
      $format = $format.validate;
    }
    if ($formatType != $ruleType) {
      if ($breakOnError) {
        out += ' if (true) { ';
      }
      return out;
    }
    if ($async) {
      if (!it.async) throw new Error('async format in sync schema');
      var $formatRef = 'formats' + it.util.getProperty($schema) + '.validate';
      out += ' if (!(' + (it.yieldAwait) + ' ' + ($formatRef) + '(' + ($data) + '))) { ';
    } else {
      out += ' if (! ';
      var $formatRef = 'formats' + it.util.getProperty($schema);
      if ($isObject) $formatRef += '.validate';
      if (typeof $format == 'function') {
        out += ' ' + ($formatRef) + '(' + ($data) + ') ';
      } else {
        out += ' ' + ($formatRef) + '.test(' + ($data) + ') ';
      }
      out += ') { ';
    }
  }
  var $$outStack = $$outStack || [];
  $$outStack.push(out);
  out = ''; /* istanbul ignore else */
  if (it.createErrors !== false) {
    out += ' { keyword: \'' + ('format') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { format:  ';
    if ($isData) {
      out += '' + ($schemaValue);
    } else {
      out += '' + (it.util.toQuotedString($schema));
    }
    out += '  } ';
    if (it.opts.messages !== false) {
      out += ' , message: \'should match format "';
      if ($isData) {
        out += '\' + ' + ($schemaValue) + ' + \'';
      } else {
        out += '' + (it.util.escapeQuotes($schema));
      }
      out += '"\' ';
    }
    if (it.opts.verbose) {
      out += ' , schema:  ';
      if ($isData) {
        out += 'validate.schema' + ($schemaPath);
      } else {
        out += '' + (it.util.toQuotedString($schema));
      }
      out += '         , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
    }
    out += ' } ';
  } else {
    out += ' {} ';
  }
  var __err = out;
  out = $$outStack.pop();
  if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
    if (it.async) {
      out += ' throw new ValidationError([' + (__err) + ']); ';
    } else {
      out += ' validate.errors = [' + (__err) + ']; return false; ';
    }
  } else {
    out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
  }
  out += ' } ';
  if ($breakOnError) {
    out += ' else { ';
  }
  return out;
}


/***/ }),

/***/ 413:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function generate_items(it, $keyword, $ruleType) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $data = 'data' + ($dataLvl || '');
  var $valid = 'valid' + $lvl;
  var $errs = 'errs__' + $lvl;
  var $it = it.util.copy(it);
  var $closingBraces = '';
  $it.level++;
  var $nextValid = 'valid' + $it.level;
  var $idx = 'i' + $lvl,
    $dataNxt = $it.dataLevel = it.dataLevel + 1,
    $nextData = 'data' + $dataNxt,
    $currentBaseId = it.baseId;
  out += 'var ' + ($errs) + ' = errors;var ' + ($valid) + ';';
  if (Array.isArray($schema)) {
    var $additionalItems = it.schema.additionalItems;
    if ($additionalItems === false) {
      out += ' ' + ($valid) + ' = ' + ($data) + '.length <= ' + ($schema.length) + '; ';
      var $currErrSchemaPath = $errSchemaPath;
      $errSchemaPath = it.errSchemaPath + '/additionalItems';
      out += '  if (!' + ($valid) + ') {   ';
      var $$outStack = $$outStack || [];
      $$outStack.push(out);
      out = ''; /* istanbul ignore else */
      if (it.createErrors !== false) {
        out += ' { keyword: \'' + ('additionalItems') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { limit: ' + ($schema.length) + ' } ';
        if (it.opts.messages !== false) {
          out += ' , message: \'should NOT have more than ' + ($schema.length) + ' items\' ';
        }
        if (it.opts.verbose) {
          out += ' , schema: false , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
        }
        out += ' } ';
      } else {
        out += ' {} ';
      }
      var __err = out;
      out = $$outStack.pop();
      if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
        if (it.async) {
          out += ' throw new ValidationError([' + (__err) + ']); ';
        } else {
          out += ' validate.errors = [' + (__err) + ']; return false; ';
        }
      } else {
        out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
      }
      out += ' } ';
      $errSchemaPath = $currErrSchemaPath;
      if ($breakOnError) {
        $closingBraces += '}';
        out += ' else { ';
      }
    }
    var arr1 = $schema;
    if (arr1) {
      var $sch, $i = -1,
        l1 = arr1.length - 1;
      while ($i < l1) {
        $sch = arr1[$i += 1];
        if (it.util.schemaHasRules($sch, it.RULES.all)) {
          out += ' ' + ($nextValid) + ' = true; if (' + ($data) + '.length > ' + ($i) + ') { ';
          var $passData = $data + '[' + $i + ']';
          $it.schema = $sch;
          $it.schemaPath = $schemaPath + '[' + $i + ']';
          $it.errSchemaPath = $errSchemaPath + '/' + $i;
          $it.errorPath = it.util.getPathExpr(it.errorPath, $i, it.opts.jsonPointers, true);
          $it.dataPathArr[$dataNxt] = $i;
          var $code = it.validate($it);
          $it.baseId = $currentBaseId;
          if (it.util.varOccurences($code, $nextData) < 2) {
            out += ' ' + (it.util.varReplace($code, $nextData, $passData)) + ' ';
          } else {
            out += ' var ' + ($nextData) + ' = ' + ($passData) + '; ' + ($code) + ' ';
          }
          out += ' }  ';
          if ($breakOnError) {
            out += ' if (' + ($nextValid) + ') { ';
            $closingBraces += '}';
          }
        }
      }
    }
    if (typeof $additionalItems == 'object' && it.util.schemaHasRules($additionalItems, it.RULES.all)) {
      $it.schema = $additionalItems;
      $it.schemaPath = it.schemaPath + '.additionalItems';
      $it.errSchemaPath = it.errSchemaPath + '/additionalItems';
      out += ' ' + ($nextValid) + ' = true; if (' + ($data) + '.length > ' + ($schema.length) + ') {  for (var ' + ($idx) + ' = ' + ($schema.length) + '; ' + ($idx) + ' < ' + ($data) + '.length; ' + ($idx) + '++) { ';
      $it.errorPath = it.util.getPathExpr(it.errorPath, $idx, it.opts.jsonPointers, true);
      var $passData = $data + '[' + $idx + ']';
      $it.dataPathArr[$dataNxt] = $idx;
      var $code = it.validate($it);
      $it.baseId = $currentBaseId;
      if (it.util.varOccurences($code, $nextData) < 2) {
        out += ' ' + (it.util.varReplace($code, $nextData, $passData)) + ' ';
      } else {
        out += ' var ' + ($nextData) + ' = ' + ($passData) + '; ' + ($code) + ' ';
      }
      if ($breakOnError) {
        out += ' if (!' + ($nextValid) + ') break; ';
      }
      out += ' } }  ';
      if ($breakOnError) {
        out += ' if (' + ($nextValid) + ') { ';
        $closingBraces += '}';
      }
    }
  } else if (it.util.schemaHasRules($schema, it.RULES.all)) {
    $it.schema = $schema;
    $it.schemaPath = $schemaPath;
    $it.errSchemaPath = $errSchemaPath;
    out += '  for (var ' + ($idx) + ' = ' + (0) + '; ' + ($idx) + ' < ' + ($data) + '.length; ' + ($idx) + '++) { ';
    $it.errorPath = it.util.getPathExpr(it.errorPath, $idx, it.opts.jsonPointers, true);
    var $passData = $data + '[' + $idx + ']';
    $it.dataPathArr[$dataNxt] = $idx;
    var $code = it.validate($it);
    $it.baseId = $currentBaseId;
    if (it.util.varOccurences($code, $nextData) < 2) {
      out += ' ' + (it.util.varReplace($code, $nextData, $passData)) + ' ';
    } else {
      out += ' var ' + ($nextData) + ' = ' + ($passData) + '; ' + ($code) + ' ';
    }
    if ($breakOnError) {
      out += ' if (!' + ($nextValid) + ') break; ';
    }
    out += ' }';
  }
  if ($breakOnError) {
    out += ' ' + ($closingBraces) + ' if (' + ($errs) + ' == errors) {';
  }
  out = it.util.cleanUpCode(out);
  return out;
}


/***/ }),

/***/ 414:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function generate_multipleOf(it, $keyword, $ruleType) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $data = 'data' + ($dataLvl || '');
  var $isData = it.opts.$data && $schema && $schema.$data,
    $schemaValue;
  if ($isData) {
    out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
    $schemaValue = 'schema' + $lvl;
  } else {
    $schemaValue = $schema;
  }
  out += 'var division' + ($lvl) + ';if (';
  if ($isData) {
    out += ' ' + ($schemaValue) + ' !== undefined && ( typeof ' + ($schemaValue) + ' != \'number\' || ';
  }
  out += ' (division' + ($lvl) + ' = ' + ($data) + ' / ' + ($schemaValue) + ', ';
  if (it.opts.multipleOfPrecision) {
    out += ' Math.abs(Math.round(division' + ($lvl) + ') - division' + ($lvl) + ') > 1e-' + (it.opts.multipleOfPrecision) + ' ';
  } else {
    out += ' division' + ($lvl) + ' !== parseInt(division' + ($lvl) + ') ';
  }
  out += ' ) ';
  if ($isData) {
    out += '  )  ';
  }
  out += ' ) {   ';
  var $$outStack = $$outStack || [];
  $$outStack.push(out);
  out = ''; /* istanbul ignore else */
  if (it.createErrors !== false) {
    out += ' { keyword: \'' + ('multipleOf') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { multipleOf: ' + ($schemaValue) + ' } ';
    if (it.opts.messages !== false) {
      out += ' , message: \'should be multiple of ';
      if ($isData) {
        out += '\' + ' + ($schemaValue);
      } else {
        out += '' + ($schemaValue) + '\'';
      }
    }
    if (it.opts.verbose) {
      out += ' , schema:  ';
      if ($isData) {
        out += 'validate.schema' + ($schemaPath);
      } else {
        out += '' + ($schema);
      }
      out += '         , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
    }
    out += ' } ';
  } else {
    out += ' {} ';
  }
  var __err = out;
  out = $$outStack.pop();
  if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
    if (it.async) {
      out += ' throw new ValidationError([' + (__err) + ']); ';
    } else {
      out += ' validate.errors = [' + (__err) + ']; return false; ';
    }
  } else {
    out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
  }
  out += '} ';
  if ($breakOnError) {
    out += ' else { ';
  }
  return out;
}


/***/ }),

/***/ 415:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function generate_not(it, $keyword, $ruleType) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $data = 'data' + ($dataLvl || '');
  var $errs = 'errs__' + $lvl;
  var $it = it.util.copy(it);
  $it.level++;
  var $nextValid = 'valid' + $it.level;
  if (it.util.schemaHasRules($schema, it.RULES.all)) {
    $it.schema = $schema;
    $it.schemaPath = $schemaPath;
    $it.errSchemaPath = $errSchemaPath;
    out += ' var ' + ($errs) + ' = errors;  ';
    var $wasComposite = it.compositeRule;
    it.compositeRule = $it.compositeRule = true;
    $it.createErrors = false;
    var $allErrorsOption;
    if ($it.opts.allErrors) {
      $allErrorsOption = $it.opts.allErrors;
      $it.opts.allErrors = false;
    }
    out += ' ' + (it.validate($it)) + ' ';
    $it.createErrors = true;
    if ($allErrorsOption) $it.opts.allErrors = $allErrorsOption;
    it.compositeRule = $it.compositeRule = $wasComposite;
    out += ' if (' + ($nextValid) + ') {   ';
    var $$outStack = $$outStack || [];
    $$outStack.push(out);
    out = ''; /* istanbul ignore else */
    if (it.createErrors !== false) {
      out += ' { keyword: \'' + ('not') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: {} ';
      if (it.opts.messages !== false) {
        out += ' , message: \'should NOT be valid\' ';
      }
      if (it.opts.verbose) {
        out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
      }
      out += ' } ';
    } else {
      out += ' {} ';
    }
    var __err = out;
    out = $$outStack.pop();
    if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
      if (it.async) {
        out += ' throw new ValidationError([' + (__err) + ']); ';
      } else {
        out += ' validate.errors = [' + (__err) + ']; return false; ';
      }
    } else {
      out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
    }
    out += ' } else {  errors = ' + ($errs) + '; if (vErrors !== null) { if (' + ($errs) + ') vErrors.length = ' + ($errs) + '; else vErrors = null; } ';
    if (it.opts.allErrors) {
      out += ' } ';
    }
  } else {
    out += '  var err =   '; /* istanbul ignore else */
    if (it.createErrors !== false) {
      out += ' { keyword: \'' + ('not') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: {} ';
      if (it.opts.messages !== false) {
        out += ' , message: \'should NOT be valid\' ';
      }
      if (it.opts.verbose) {
        out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
      }
      out += ' } ';
    } else {
      out += ' {} ';
    }
    out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
    if ($breakOnError) {
      out += ' if (false) { ';
    }
  }
  return out;
}


/***/ }),

/***/ 416:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function generate_oneOf(it, $keyword, $ruleType) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $data = 'data' + ($dataLvl || '');
  var $valid = 'valid' + $lvl;
  var $errs = 'errs__' + $lvl;
  var $it = it.util.copy(it);
  var $closingBraces = '';
  $it.level++;
  var $nextValid = 'valid' + $it.level;
  out += 'var ' + ($errs) + ' = errors;var prevValid' + ($lvl) + ' = false;var ' + ($valid) + ' = false;';
  var $currentBaseId = $it.baseId;
  var $wasComposite = it.compositeRule;
  it.compositeRule = $it.compositeRule = true;
  var arr1 = $schema;
  if (arr1) {
    var $sch, $i = -1,
      l1 = arr1.length - 1;
    while ($i < l1) {
      $sch = arr1[$i += 1];
      if (it.util.schemaHasRules($sch, it.RULES.all)) {
        $it.schema = $sch;
        $it.schemaPath = $schemaPath + '[' + $i + ']';
        $it.errSchemaPath = $errSchemaPath + '/' + $i;
        out += '  ' + (it.validate($it)) + ' ';
        $it.baseId = $currentBaseId;
      } else {
        out += ' var ' + ($nextValid) + ' = true; ';
      }
      if ($i) {
        out += ' if (' + ($nextValid) + ' && prevValid' + ($lvl) + ') ' + ($valid) + ' = false; else { ';
        $closingBraces += '}';
      }
      out += ' if (' + ($nextValid) + ') ' + ($valid) + ' = prevValid' + ($lvl) + ' = true;';
    }
  }
  it.compositeRule = $it.compositeRule = $wasComposite;
  out += '' + ($closingBraces) + 'if (!' + ($valid) + ') {   var err =   '; /* istanbul ignore else */
  if (it.createErrors !== false) {
    out += ' { keyword: \'' + ('oneOf') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: {} ';
    if (it.opts.messages !== false) {
      out += ' , message: \'should match exactly one schema in oneOf\' ';
    }
    if (it.opts.verbose) {
      out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
    }
    out += ' } ';
  } else {
    out += ' {} ';
  }
  out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
  if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
    if (it.async) {
      out += ' throw new ValidationError(vErrors); ';
    } else {
      out += ' validate.errors = vErrors; return false; ';
    }
  }
  out += '} else {  errors = ' + ($errs) + '; if (vErrors !== null) { if (' + ($errs) + ') vErrors.length = ' + ($errs) + '; else vErrors = null; }';
  if (it.opts.allErrors) {
    out += ' } ';
  }
  return out;
}


/***/ }),

/***/ 417:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function generate_pattern(it, $keyword, $ruleType) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $data = 'data' + ($dataLvl || '');
  var $isData = it.opts.$data && $schema && $schema.$data,
    $schemaValue;
  if ($isData) {
    out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
    $schemaValue = 'schema' + $lvl;
  } else {
    $schemaValue = $schema;
  }
  var $regexp = $isData ? '(new RegExp(' + $schemaValue + '))' : it.usePattern($schema);
  out += 'if ( ';
  if ($isData) {
    out += ' (' + ($schemaValue) + ' !== undefined && typeof ' + ($schemaValue) + ' != \'string\') || ';
  }
  out += ' !' + ($regexp) + '.test(' + ($data) + ') ) {   ';
  var $$outStack = $$outStack || [];
  $$outStack.push(out);
  out = ''; /* istanbul ignore else */
  if (it.createErrors !== false) {
    out += ' { keyword: \'' + ('pattern') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { pattern:  ';
    if ($isData) {
      out += '' + ($schemaValue);
    } else {
      out += '' + (it.util.toQuotedString($schema));
    }
    out += '  } ';
    if (it.opts.messages !== false) {
      out += ' , message: \'should match pattern "';
      if ($isData) {
        out += '\' + ' + ($schemaValue) + ' + \'';
      } else {
        out += '' + (it.util.escapeQuotes($schema));
      }
      out += '"\' ';
    }
    if (it.opts.verbose) {
      out += ' , schema:  ';
      if ($isData) {
        out += 'validate.schema' + ($schemaPath);
      } else {
        out += '' + (it.util.toQuotedString($schema));
      }
      out += '         , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
    }
    out += ' } ';
  } else {
    out += ' {} ';
  }
  var __err = out;
  out = $$outStack.pop();
  if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
    if (it.async) {
      out += ' throw new ValidationError([' + (__err) + ']); ';
    } else {
      out += ' validate.errors = [' + (__err) + ']; return false; ';
    }
  } else {
    out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
  }
  out += '} ';
  if ($breakOnError) {
    out += ' else { ';
  }
  return out;
}


/***/ }),

/***/ 418:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function generate_properties(it, $keyword, $ruleType) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $data = 'data' + ($dataLvl || '');
  var $valid = 'valid' + $lvl;
  var $errs = 'errs__' + $lvl;
  var $it = it.util.copy(it);
  var $closingBraces = '';
  $it.level++;
  var $nextValid = 'valid' + $it.level;
  var $key = 'key' + $lvl,
    $idx = 'idx' + $lvl,
    $dataNxt = $it.dataLevel = it.dataLevel + 1,
    $nextData = 'data' + $dataNxt,
    $dataProperties = 'dataProperties' + $lvl;
  var $schemaKeys = Object.keys($schema || {}),
    $pProperties = it.schema.patternProperties || {},
    $pPropertyKeys = Object.keys($pProperties),
    $aProperties = it.schema.additionalProperties,
    $someProperties = $schemaKeys.length || $pPropertyKeys.length,
    $noAdditional = $aProperties === false,
    $additionalIsSchema = typeof $aProperties == 'object' && Object.keys($aProperties).length,
    $removeAdditional = it.opts.removeAdditional,
    $checkAdditional = $noAdditional || $additionalIsSchema || $removeAdditional,
    $ownProperties = it.opts.ownProperties,
    $currentBaseId = it.baseId;
  var $required = it.schema.required;
  if ($required && !(it.opts.v5 && $required.$data) && $required.length < it.opts.loopRequired) var $requiredHash = it.util.toHash($required);
  if (it.opts.patternGroups) {
    var $pgProperties = it.schema.patternGroups || {},
      $pgPropertyKeys = Object.keys($pgProperties);
  }
  out += 'var ' + ($errs) + ' = errors;var ' + ($nextValid) + ' = true;';
  if ($ownProperties) {
    out += ' var ' + ($dataProperties) + ' = undefined;';
  }
  if ($checkAdditional) {
    if ($ownProperties) {
      out += ' ' + ($dataProperties) + ' = ' + ($dataProperties) + ' || Object.keys(' + ($data) + '); for (var ' + ($idx) + '=0; ' + ($idx) + '<' + ($dataProperties) + '.length; ' + ($idx) + '++) { var ' + ($key) + ' = ' + ($dataProperties) + '[' + ($idx) + ']; ';
    } else {
      out += ' for (var ' + ($key) + ' in ' + ($data) + ') { ';
    }
    if ($someProperties) {
      out += ' var isAdditional' + ($lvl) + ' = !(false ';
      if ($schemaKeys.length) {
        if ($schemaKeys.length > 5) {
          out += ' || validate.schema' + ($schemaPath) + '[' + ($key) + '] ';
        } else {
          var arr1 = $schemaKeys;
          if (arr1) {
            var $propertyKey, i1 = -1,
              l1 = arr1.length - 1;
            while (i1 < l1) {
              $propertyKey = arr1[i1 += 1];
              out += ' || ' + ($key) + ' == ' + (it.util.toQuotedString($propertyKey)) + ' ';
            }
          }
        }
      }
      if ($pPropertyKeys.length) {
        var arr2 = $pPropertyKeys;
        if (arr2) {
          var $pProperty, $i = -1,
            l2 = arr2.length - 1;
          while ($i < l2) {
            $pProperty = arr2[$i += 1];
            out += ' || ' + (it.usePattern($pProperty)) + '.test(' + ($key) + ') ';
          }
        }
      }
      if (it.opts.patternGroups && $pgPropertyKeys.length) {
        var arr3 = $pgPropertyKeys;
        if (arr3) {
          var $pgProperty, $i = -1,
            l3 = arr3.length - 1;
          while ($i < l3) {
            $pgProperty = arr3[$i += 1];
            out += ' || ' + (it.usePattern($pgProperty)) + '.test(' + ($key) + ') ';
          }
        }
      }
      out += ' ); if (isAdditional' + ($lvl) + ') { ';
    }
    if ($removeAdditional == 'all') {
      out += ' delete ' + ($data) + '[' + ($key) + ']; ';
    } else {
      var $currentErrorPath = it.errorPath;
      var $additionalProperty = '\' + ' + $key + ' + \'';
      if (it.opts._errorDataPathProperty) {
        it.errorPath = it.util.getPathExpr(it.errorPath, $key, it.opts.jsonPointers);
      }
      if ($noAdditional) {
        if ($removeAdditional) {
          out += ' delete ' + ($data) + '[' + ($key) + ']; ';
        } else {
          out += ' ' + ($nextValid) + ' = false; ';
          var $currErrSchemaPath = $errSchemaPath;
          $errSchemaPath = it.errSchemaPath + '/additionalProperties';
          var $$outStack = $$outStack || [];
          $$outStack.push(out);
          out = ''; /* istanbul ignore else */
          if (it.createErrors !== false) {
            out += ' { keyword: \'' + ('additionalProperties') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { additionalProperty: \'' + ($additionalProperty) + '\' } ';
            if (it.opts.messages !== false) {
              out += ' , message: \'should NOT have additional properties\' ';
            }
            if (it.opts.verbose) {
              out += ' , schema: false , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
            }
            out += ' } ';
          } else {
            out += ' {} ';
          }
          var __err = out;
          out = $$outStack.pop();
          if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
            if (it.async) {
              out += ' throw new ValidationError([' + (__err) + ']); ';
            } else {
              out += ' validate.errors = [' + (__err) + ']; return false; ';
            }
          } else {
            out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
          }
          $errSchemaPath = $currErrSchemaPath;
          if ($breakOnError) {
            out += ' break; ';
          }
        }
      } else if ($additionalIsSchema) {
        if ($removeAdditional == 'failing') {
          out += ' var ' + ($errs) + ' = errors;  ';
          var $wasComposite = it.compositeRule;
          it.compositeRule = $it.compositeRule = true;
          $it.schema = $aProperties;
          $it.schemaPath = it.schemaPath + '.additionalProperties';
          $it.errSchemaPath = it.errSchemaPath + '/additionalProperties';
          $it.errorPath = it.opts._errorDataPathProperty ? it.errorPath : it.util.getPathExpr(it.errorPath, $key, it.opts.jsonPointers);
          var $passData = $data + '[' + $key + ']';
          $it.dataPathArr[$dataNxt] = $key;
          var $code = it.validate($it);
          $it.baseId = $currentBaseId;
          if (it.util.varOccurences($code, $nextData) < 2) {
            out += ' ' + (it.util.varReplace($code, $nextData, $passData)) + ' ';
          } else {
            out += ' var ' + ($nextData) + ' = ' + ($passData) + '; ' + ($code) + ' ';
          }
          out += ' if (!' + ($nextValid) + ') { errors = ' + ($errs) + '; if (validate.errors !== null) { if (errors) validate.errors.length = errors; else validate.errors = null; } delete ' + ($data) + '[' + ($key) + ']; }  ';
          it.compositeRule = $it.compositeRule = $wasComposite;
        } else {
          $it.schema = $aProperties;
          $it.schemaPath = it.schemaPath + '.additionalProperties';
          $it.errSchemaPath = it.errSchemaPath + '/additionalProperties';
          $it.errorPath = it.opts._errorDataPathProperty ? it.errorPath : it.util.getPathExpr(it.errorPath, $key, it.opts.jsonPointers);
          var $passData = $data + '[' + $key + ']';
          $it.dataPathArr[$dataNxt] = $key;
          var $code = it.validate($it);
          $it.baseId = $currentBaseId;
          if (it.util.varOccurences($code, $nextData) < 2) {
            out += ' ' + (it.util.varReplace($code, $nextData, $passData)) + ' ';
          } else {
            out += ' var ' + ($nextData) + ' = ' + ($passData) + '; ' + ($code) + ' ';
          }
          if ($breakOnError) {
            out += ' if (!' + ($nextValid) + ') break; ';
          }
        }
      }
      it.errorPath = $currentErrorPath;
    }
    if ($someProperties) {
      out += ' } ';
    }
    out += ' }  ';
    if ($breakOnError) {
      out += ' if (' + ($nextValid) + ') { ';
      $closingBraces += '}';
    }
  }
  var $useDefaults = it.opts.useDefaults && !it.compositeRule;
  if ($schemaKeys.length) {
    var arr4 = $schemaKeys;
    if (arr4) {
      var $propertyKey, i4 = -1,
        l4 = arr4.length - 1;
      while (i4 < l4) {
        $propertyKey = arr4[i4 += 1];
        var $sch = $schema[$propertyKey];
        if (it.util.schemaHasRules($sch, it.RULES.all)) {
          var $prop = it.util.getProperty($propertyKey),
            $passData = $data + $prop,
            $hasDefault = $useDefaults && $sch.default !== undefined;
          $it.schema = $sch;
          $it.schemaPath = $schemaPath + $prop;
          $it.errSchemaPath = $errSchemaPath + '/' + it.util.escapeFragment($propertyKey);
          $it.errorPath = it.util.getPath(it.errorPath, $propertyKey, it.opts.jsonPointers);
          $it.dataPathArr[$dataNxt] = it.util.toQuotedString($propertyKey);
          var $code = it.validate($it);
          $it.baseId = $currentBaseId;
          if (it.util.varOccurences($code, $nextData) < 2) {
            $code = it.util.varReplace($code, $nextData, $passData);
            var $useData = $passData;
          } else {
            var $useData = $nextData;
            out += ' var ' + ($nextData) + ' = ' + ($passData) + '; ';
          }
          if ($hasDefault) {
            out += ' ' + ($code) + ' ';
          } else {
            if ($requiredHash && $requiredHash[$propertyKey]) {
              out += ' if ( ' + ($useData) + ' === undefined ';
              if ($ownProperties) {
                out += ' || ! Object.prototype.hasOwnProperty.call(' + ($data) + ', \'' + (it.util.escapeQuotes($propertyKey)) + '\') ';
              }
              out += ') { ' + ($nextValid) + ' = false; ';
              var $currentErrorPath = it.errorPath,
                $currErrSchemaPath = $errSchemaPath,
                $missingProperty = it.util.escapeQuotes($propertyKey);
              if (it.opts._errorDataPathProperty) {
                it.errorPath = it.util.getPath($currentErrorPath, $propertyKey, it.opts.jsonPointers);
              }
              $errSchemaPath = it.errSchemaPath + '/required';
              var $$outStack = $$outStack || [];
              $$outStack.push(out);
              out = ''; /* istanbul ignore else */
              if (it.createErrors !== false) {
                out += ' { keyword: \'' + ('required') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { missingProperty: \'' + ($missingProperty) + '\' } ';
                if (it.opts.messages !== false) {
                  out += ' , message: \'';
                  if (it.opts._errorDataPathProperty) {
                    out += 'is a required property';
                  } else {
                    out += 'should have required property \\\'' + ($missingProperty) + '\\\'';
                  }
                  out += '\' ';
                }
                if (it.opts.verbose) {
                  out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
                }
                out += ' } ';
              } else {
                out += ' {} ';
              }
              var __err = out;
              out = $$outStack.pop();
              if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
                if (it.async) {
                  out += ' throw new ValidationError([' + (__err) + ']); ';
                } else {
                  out += ' validate.errors = [' + (__err) + ']; return false; ';
                }
              } else {
                out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
              }
              $errSchemaPath = $currErrSchemaPath;
              it.errorPath = $currentErrorPath;
              out += ' } else { ';
            } else {
              if ($breakOnError) {
                out += ' if ( ' + ($useData) + ' === undefined ';
                if ($ownProperties) {
                  out += ' || ! Object.prototype.hasOwnProperty.call(' + ($data) + ', \'' + (it.util.escapeQuotes($propertyKey)) + '\') ';
                }
                out += ') { ' + ($nextValid) + ' = true; } else { ';
              } else {
                out += ' if (' + ($useData) + ' !== undefined ';
                if ($ownProperties) {
                  out += ' &&   Object.prototype.hasOwnProperty.call(' + ($data) + ', \'' + (it.util.escapeQuotes($propertyKey)) + '\') ';
                }
                out += ' ) { ';
              }
            }
            out += ' ' + ($code) + ' } ';
          }
        }
        if ($breakOnError) {
          out += ' if (' + ($nextValid) + ') { ';
          $closingBraces += '}';
        }
      }
    }
  }
  if ($pPropertyKeys.length) {
    var arr5 = $pPropertyKeys;
    if (arr5) {
      var $pProperty, i5 = -1,
        l5 = arr5.length - 1;
      while (i5 < l5) {
        $pProperty = arr5[i5 += 1];
        var $sch = $pProperties[$pProperty];
        if (it.util.schemaHasRules($sch, it.RULES.all)) {
          $it.schema = $sch;
          $it.schemaPath = it.schemaPath + '.patternProperties' + it.util.getProperty($pProperty);
          $it.errSchemaPath = it.errSchemaPath + '/patternProperties/' + it.util.escapeFragment($pProperty);
          if ($ownProperties) {
            out += ' ' + ($dataProperties) + ' = ' + ($dataProperties) + ' || Object.keys(' + ($data) + '); for (var ' + ($idx) + '=0; ' + ($idx) + '<' + ($dataProperties) + '.length; ' + ($idx) + '++) { var ' + ($key) + ' = ' + ($dataProperties) + '[' + ($idx) + ']; ';
          } else {
            out += ' for (var ' + ($key) + ' in ' + ($data) + ') { ';
          }
          out += ' if (' + (it.usePattern($pProperty)) + '.test(' + ($key) + ')) { ';
          $it.errorPath = it.util.getPathExpr(it.errorPath, $key, it.opts.jsonPointers);
          var $passData = $data + '[' + $key + ']';
          $it.dataPathArr[$dataNxt] = $key;
          var $code = it.validate($it);
          $it.baseId = $currentBaseId;
          if (it.util.varOccurences($code, $nextData) < 2) {
            out += ' ' + (it.util.varReplace($code, $nextData, $passData)) + ' ';
          } else {
            out += ' var ' + ($nextData) + ' = ' + ($passData) + '; ' + ($code) + ' ';
          }
          if ($breakOnError) {
            out += ' if (!' + ($nextValid) + ') break; ';
          }
          out += ' } ';
          if ($breakOnError) {
            out += ' else ' + ($nextValid) + ' = true; ';
          }
          out += ' }  ';
          if ($breakOnError) {
            out += ' if (' + ($nextValid) + ') { ';
            $closingBraces += '}';
          }
        }
      }
    }
  }
  if (it.opts.patternGroups && $pgPropertyKeys.length) {
    var arr6 = $pgPropertyKeys;
    if (arr6) {
      var $pgProperty, i6 = -1,
        l6 = arr6.length - 1;
      while (i6 < l6) {
        $pgProperty = arr6[i6 += 1];
        var $pgSchema = $pgProperties[$pgProperty],
          $sch = $pgSchema.schema;
        if (it.util.schemaHasRules($sch, it.RULES.all)) {
          $it.schema = $sch;
          $it.schemaPath = it.schemaPath + '.patternGroups' + it.util.getProperty($pgProperty) + '.schema';
          $it.errSchemaPath = it.errSchemaPath + '/patternGroups/' + it.util.escapeFragment($pgProperty) + '/schema';
          out += ' var pgPropCount' + ($lvl) + ' = 0;  ';
          if ($ownProperties) {
            out += ' ' + ($dataProperties) + ' = ' + ($dataProperties) + ' || Object.keys(' + ($data) + '); for (var ' + ($idx) + '=0; ' + ($idx) + '<' + ($dataProperties) + '.length; ' + ($idx) + '++) { var ' + ($key) + ' = ' + ($dataProperties) + '[' + ($idx) + ']; ';
          } else {
            out += ' for (var ' + ($key) + ' in ' + ($data) + ') { ';
          }
          out += ' if (' + (it.usePattern($pgProperty)) + '.test(' + ($key) + ')) { pgPropCount' + ($lvl) + '++; ';
          $it.errorPath = it.util.getPathExpr(it.errorPath, $key, it.opts.jsonPointers);
          var $passData = $data + '[' + $key + ']';
          $it.dataPathArr[$dataNxt] = $key;
          var $code = it.validate($it);
          $it.baseId = $currentBaseId;
          if (it.util.varOccurences($code, $nextData) < 2) {
            out += ' ' + (it.util.varReplace($code, $nextData, $passData)) + ' ';
          } else {
            out += ' var ' + ($nextData) + ' = ' + ($passData) + '; ' + ($code) + ' ';
          }
          if ($breakOnError) {
            out += ' if (!' + ($nextValid) + ') break; ';
          }
          out += ' } ';
          if ($breakOnError) {
            out += ' else ' + ($nextValid) + ' = true; ';
          }
          out += ' }  ';
          if ($breakOnError) {
            out += ' if (' + ($nextValid) + ') { ';
            $closingBraces += '}';
          }
          var $pgMin = $pgSchema.minimum,
            $pgMax = $pgSchema.maximum;
          if ($pgMin !== undefined || $pgMax !== undefined) {
            out += ' var ' + ($valid) + ' = true; ';
            var $currErrSchemaPath = $errSchemaPath;
            if ($pgMin !== undefined) {
              var $limit = $pgMin,
                $reason = 'minimum',
                $moreOrLess = 'less';
              out += ' ' + ($valid) + ' = pgPropCount' + ($lvl) + ' >= ' + ($pgMin) + '; ';
              $errSchemaPath = it.errSchemaPath + '/patternGroups/minimum';
              out += '  if (!' + ($valid) + ') {   ';
              var $$outStack = $$outStack || [];
              $$outStack.push(out);
              out = ''; /* istanbul ignore else */
              if (it.createErrors !== false) {
                out += ' { keyword: \'' + ('patternGroups') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { reason: \'' + ($reason) + '\', limit: ' + ($limit) + ', pattern: \'' + (it.util.escapeQuotes($pgProperty)) + '\' } ';
                if (it.opts.messages !== false) {
                  out += ' , message: \'should NOT have ' + ($moreOrLess) + ' than ' + ($limit) + ' properties matching pattern "' + (it.util.escapeQuotes($pgProperty)) + '"\' ';
                }
                if (it.opts.verbose) {
                  out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
                }
                out += ' } ';
              } else {
                out += ' {} ';
              }
              var __err = out;
              out = $$outStack.pop();
              if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
                if (it.async) {
                  out += ' throw new ValidationError([' + (__err) + ']); ';
                } else {
                  out += ' validate.errors = [' + (__err) + ']; return false; ';
                }
              } else {
                out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
              }
              out += ' } ';
              if ($pgMax !== undefined) {
                out += ' else ';
              }
            }
            if ($pgMax !== undefined) {
              var $limit = $pgMax,
                $reason = 'maximum',
                $moreOrLess = 'more';
              out += ' ' + ($valid) + ' = pgPropCount' + ($lvl) + ' <= ' + ($pgMax) + '; ';
              $errSchemaPath = it.errSchemaPath + '/patternGroups/maximum';
              out += '  if (!' + ($valid) + ') {   ';
              var $$outStack = $$outStack || [];
              $$outStack.push(out);
              out = ''; /* istanbul ignore else */
              if (it.createErrors !== false) {
                out += ' { keyword: \'' + ('patternGroups') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { reason: \'' + ($reason) + '\', limit: ' + ($limit) + ', pattern: \'' + (it.util.escapeQuotes($pgProperty)) + '\' } ';
                if (it.opts.messages !== false) {
                  out += ' , message: \'should NOT have ' + ($moreOrLess) + ' than ' + ($limit) + ' properties matching pattern "' + (it.util.escapeQuotes($pgProperty)) + '"\' ';
                }
                if (it.opts.verbose) {
                  out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
                }
                out += ' } ';
              } else {
                out += ' {} ';
              }
              var __err = out;
              out = $$outStack.pop();
              if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
                if (it.async) {
                  out += ' throw new ValidationError([' + (__err) + ']); ';
                } else {
                  out += ' validate.errors = [' + (__err) + ']; return false; ';
                }
              } else {
                out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
              }
              out += ' } ';
            }
            $errSchemaPath = $currErrSchemaPath;
            if ($breakOnError) {
              out += ' if (' + ($valid) + ') { ';
              $closingBraces += '}';
            }
          }
        }
      }
    }
  }
  if ($breakOnError) {
    out += ' ' + ($closingBraces) + ' if (' + ($errs) + ' == errors) {';
  }
  out = it.util.cleanUpCode(out);
  return out;
}


/***/ }),

/***/ 419:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function generate_propertyNames(it, $keyword, $ruleType) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $data = 'data' + ($dataLvl || '');
  var $errs = 'errs__' + $lvl;
  var $it = it.util.copy(it);
  var $closingBraces = '';
  $it.level++;
  var $nextValid = 'valid' + $it.level;
  if (it.util.schemaHasRules($schema, it.RULES.all)) {
    $it.schema = $schema;
    $it.schemaPath = $schemaPath;
    $it.errSchemaPath = $errSchemaPath;
    var $key = 'key' + $lvl,
      $idx = 'idx' + $lvl,
      $i = 'i' + $lvl,
      $invalidName = '\' + ' + $key + ' + \'',
      $dataNxt = $it.dataLevel = it.dataLevel + 1,
      $nextData = 'data' + $dataNxt,
      $dataProperties = 'dataProperties' + $lvl,
      $ownProperties = it.opts.ownProperties,
      $currentBaseId = it.baseId;
    out += ' var ' + ($errs) + ' = errors; ';
    if ($ownProperties) {
      out += ' var ' + ($dataProperties) + ' = undefined; ';
    }
    if ($ownProperties) {
      out += ' ' + ($dataProperties) + ' = ' + ($dataProperties) + ' || Object.keys(' + ($data) + '); for (var ' + ($idx) + '=0; ' + ($idx) + '<' + ($dataProperties) + '.length; ' + ($idx) + '++) { var ' + ($key) + ' = ' + ($dataProperties) + '[' + ($idx) + ']; ';
    } else {
      out += ' for (var ' + ($key) + ' in ' + ($data) + ') { ';
    }
    out += ' var startErrs' + ($lvl) + ' = errors; ';
    var $passData = $key;
    var $wasComposite = it.compositeRule;
    it.compositeRule = $it.compositeRule = true;
    var $code = it.validate($it);
    $it.baseId = $currentBaseId;
    if (it.util.varOccurences($code, $nextData) < 2) {
      out += ' ' + (it.util.varReplace($code, $nextData, $passData)) + ' ';
    } else {
      out += ' var ' + ($nextData) + ' = ' + ($passData) + '; ' + ($code) + ' ';
    }
    it.compositeRule = $it.compositeRule = $wasComposite;
    out += ' if (!' + ($nextValid) + ') { for (var ' + ($i) + '=startErrs' + ($lvl) + '; ' + ($i) + '<errors; ' + ($i) + '++) { vErrors[' + ($i) + '].propertyName = ' + ($key) + '; }   var err =   '; /* istanbul ignore else */
    if (it.createErrors !== false) {
      out += ' { keyword: \'' + ('propertyNames') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { propertyName: \'' + ($invalidName) + '\' } ';
      if (it.opts.messages !== false) {
        out += ' , message: \'property name \\\'' + ($invalidName) + '\\\' is invalid\' ';
      }
      if (it.opts.verbose) {
        out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
      }
      out += ' } ';
    } else {
      out += ' {} ';
    }
    out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
    if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
      if (it.async) {
        out += ' throw new ValidationError(vErrors); ';
      } else {
        out += ' validate.errors = vErrors; return false; ';
      }
    }
    if ($breakOnError) {
      out += ' break; ';
    }
    out += ' } }';
  }
  if ($breakOnError) {
    out += ' ' + ($closingBraces) + ' if (' + ($errs) + ' == errors) {';
  }
  out = it.util.cleanUpCode(out);
  return out;
}


/***/ }),

/***/ 420:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function generate_ref(it, $keyword, $ruleType) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $data = 'data' + ($dataLvl || '');
  var $valid = 'valid' + $lvl;
  var $async, $refCode;
  if ($schema == '#' || $schema == '#/') {
    if (it.isRoot) {
      $async = it.async;
      $refCode = 'validate';
    } else {
      $async = it.root.schema.$async === true;
      $refCode = 'root.refVal[0]';
    }
  } else {
    var $refVal = it.resolveRef(it.baseId, $schema, it.isRoot);
    if ($refVal === undefined) {
      var $message = it.MissingRefError.message(it.baseId, $schema);
      if (it.opts.missingRefs == 'fail') {
        console.error($message);
        var $$outStack = $$outStack || [];
        $$outStack.push(out);
        out = ''; /* istanbul ignore else */
        if (it.createErrors !== false) {
          out += ' { keyword: \'' + ('$ref') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { ref: \'' + (it.util.escapeQuotes($schema)) + '\' } ';
          if (it.opts.messages !== false) {
            out += ' , message: \'can\\\'t resolve reference ' + (it.util.escapeQuotes($schema)) + '\' ';
          }
          if (it.opts.verbose) {
            out += ' , schema: ' + (it.util.toQuotedString($schema)) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
          }
          out += ' } ';
        } else {
          out += ' {} ';
        }
        var __err = out;
        out = $$outStack.pop();
        if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
          if (it.async) {
            out += ' throw new ValidationError([' + (__err) + ']); ';
          } else {
            out += ' validate.errors = [' + (__err) + ']; return false; ';
          }
        } else {
          out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
        }
        if ($breakOnError) {
          out += ' if (false) { ';
        }
      } else if (it.opts.missingRefs == 'ignore') {
        console.warn($message);
        if ($breakOnError) {
          out += ' if (true) { ';
        }
      } else {
        throw new it.MissingRefError(it.baseId, $schema, $message);
      }
    } else if ($refVal.inline) {
      var $it = it.util.copy(it);
      $it.level++;
      var $nextValid = 'valid' + $it.level;
      $it.schema = $refVal.schema;
      $it.schemaPath = '';
      $it.errSchemaPath = $schema;
      var $code = it.validate($it).replace(/validate\.schema/g, $refVal.code);
      out += ' ' + ($code) + ' ';
      if ($breakOnError) {
        out += ' if (' + ($nextValid) + ') { ';
      }
    } else {
      $async = $refVal.$async === true;
      $refCode = $refVal.code;
    }
  }
  if ($refCode) {
    var $$outStack = $$outStack || [];
    $$outStack.push(out);
    out = '';
    if (it.opts.passContext) {
      out += ' ' + ($refCode) + '.call(this, ';
    } else {
      out += ' ' + ($refCode) + '( ';
    }
    out += ' ' + ($data) + ', (dataPath || \'\')';
    if (it.errorPath != '""') {
      out += ' + ' + (it.errorPath);
    }
    var $parentData = $dataLvl ? 'data' + (($dataLvl - 1) || '') : 'parentData',
      $parentDataProperty = $dataLvl ? it.dataPathArr[$dataLvl] : 'parentDataProperty';
    out += ' , ' + ($parentData) + ' , ' + ($parentDataProperty) + ', rootData)  ';
    var __callValidate = out;
    out = $$outStack.pop();
    if ($async) {
      if (!it.async) throw new Error('async schema referenced by sync schema');
      if ($breakOnError) {
        out += ' var ' + ($valid) + '; ';
      }
      out += ' try { ' + (it.yieldAwait) + ' ' + (__callValidate) + '; ';
      if ($breakOnError) {
        out += ' ' + ($valid) + ' = true; ';
      }
      out += ' } catch (e) { if (!(e instanceof ValidationError)) throw e; if (vErrors === null) vErrors = e.errors; else vErrors = vErrors.concat(e.errors); errors = vErrors.length; ';
      if ($breakOnError) {
        out += ' ' + ($valid) + ' = false; ';
      }
      out += ' } ';
      if ($breakOnError) {
        out += ' if (' + ($valid) + ') { ';
      }
    } else {
      out += ' if (!' + (__callValidate) + ') { if (vErrors === null) vErrors = ' + ($refCode) + '.errors; else vErrors = vErrors.concat(' + ($refCode) + '.errors); errors = vErrors.length; } ';
      if ($breakOnError) {
        out += ' else { ';
      }
    }
  }
  return out;
}


/***/ }),

/***/ 421:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function generate_required(it, $keyword, $ruleType) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $data = 'data' + ($dataLvl || '');
  var $valid = 'valid' + $lvl;
  var $isData = it.opts.$data && $schema && $schema.$data,
    $schemaValue;
  if ($isData) {
    out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
    $schemaValue = 'schema' + $lvl;
  } else {
    $schemaValue = $schema;
  }
  var $vSchema = 'schema' + $lvl;
  if (!$isData) {
    if ($schema.length < it.opts.loopRequired && it.schema.properties && Object.keys(it.schema.properties).length) {
      var $required = [];
      var arr1 = $schema;
      if (arr1) {
        var $property, i1 = -1,
          l1 = arr1.length - 1;
        while (i1 < l1) {
          $property = arr1[i1 += 1];
          var $propertySch = it.schema.properties[$property];
          if (!($propertySch && it.util.schemaHasRules($propertySch, it.RULES.all))) {
            $required[$required.length] = $property;
          }
        }
      }
    } else {
      var $required = $schema;
    }
  }
  if ($isData || $required.length) {
    var $currentErrorPath = it.errorPath,
      $loopRequired = $isData || $required.length >= it.opts.loopRequired,
      $ownProperties = it.opts.ownProperties;
    if ($breakOnError) {
      out += ' var missing' + ($lvl) + '; ';
      if ($loopRequired) {
        if (!$isData) {
          out += ' var ' + ($vSchema) + ' = validate.schema' + ($schemaPath) + '; ';
        }
        var $i = 'i' + $lvl,
          $propertyPath = 'schema' + $lvl + '[' + $i + ']',
          $missingProperty = '\' + ' + $propertyPath + ' + \'';
        if (it.opts._errorDataPathProperty) {
          it.errorPath = it.util.getPathExpr($currentErrorPath, $propertyPath, it.opts.jsonPointers);
        }
        out += ' var ' + ($valid) + ' = true; ';
        if ($isData) {
          out += ' if (schema' + ($lvl) + ' === undefined) ' + ($valid) + ' = true; else if (!Array.isArray(schema' + ($lvl) + ')) ' + ($valid) + ' = false; else {';
        }
        out += ' for (var ' + ($i) + ' = 0; ' + ($i) + ' < ' + ($vSchema) + '.length; ' + ($i) + '++) { ' + ($valid) + ' = ' + ($data) + '[' + ($vSchema) + '[' + ($i) + ']] !== undefined ';
        if ($ownProperties) {
          out += ' &&   Object.prototype.hasOwnProperty.call(' + ($data) + ', ' + ($vSchema) + '[' + ($i) + ']) ';
        }
        out += '; if (!' + ($valid) + ') break; } ';
        if ($isData) {
          out += '  }  ';
        }
        out += '  if (!' + ($valid) + ') {   ';
        var $$outStack = $$outStack || [];
        $$outStack.push(out);
        out = ''; /* istanbul ignore else */
        if (it.createErrors !== false) {
          out += ' { keyword: \'' + ('required') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { missingProperty: \'' + ($missingProperty) + '\' } ';
          if (it.opts.messages !== false) {
            out += ' , message: \'';
            if (it.opts._errorDataPathProperty) {
              out += 'is a required property';
            } else {
              out += 'should have required property \\\'' + ($missingProperty) + '\\\'';
            }
            out += '\' ';
          }
          if (it.opts.verbose) {
            out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
          }
          out += ' } ';
        } else {
          out += ' {} ';
        }
        var __err = out;
        out = $$outStack.pop();
        if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
          if (it.async) {
            out += ' throw new ValidationError([' + (__err) + ']); ';
          } else {
            out += ' validate.errors = [' + (__err) + ']; return false; ';
          }
        } else {
          out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
        }
        out += ' } else { ';
      } else {
        out += ' if ( ';
        var arr2 = $required;
        if (arr2) {
          var $propertyKey, $i = -1,
            l2 = arr2.length - 1;
          while ($i < l2) {
            $propertyKey = arr2[$i += 1];
            if ($i) {
              out += ' || ';
            }
            var $prop = it.util.getProperty($propertyKey),
              $useData = $data + $prop;
            out += ' ( ( ' + ($useData) + ' === undefined ';
            if ($ownProperties) {
              out += ' || ! Object.prototype.hasOwnProperty.call(' + ($data) + ', \'' + (it.util.escapeQuotes($propertyKey)) + '\') ';
            }
            out += ') && (missing' + ($lvl) + ' = ' + (it.util.toQuotedString(it.opts.jsonPointers ? $propertyKey : $prop)) + ') ) ';
          }
        }
        out += ') {  ';
        var $propertyPath = 'missing' + $lvl,
          $missingProperty = '\' + ' + $propertyPath + ' + \'';
        if (it.opts._errorDataPathProperty) {
          it.errorPath = it.opts.jsonPointers ? it.util.getPathExpr($currentErrorPath, $propertyPath, true) : $currentErrorPath + ' + ' + $propertyPath;
        }
        var $$outStack = $$outStack || [];
        $$outStack.push(out);
        out = ''; /* istanbul ignore else */
        if (it.createErrors !== false) {
          out += ' { keyword: \'' + ('required') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { missingProperty: \'' + ($missingProperty) + '\' } ';
          if (it.opts.messages !== false) {
            out += ' , message: \'';
            if (it.opts._errorDataPathProperty) {
              out += 'is a required property';
            } else {
              out += 'should have required property \\\'' + ($missingProperty) + '\\\'';
            }
            out += '\' ';
          }
          if (it.opts.verbose) {
            out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
          }
          out += ' } ';
        } else {
          out += ' {} ';
        }
        var __err = out;
        out = $$outStack.pop();
        if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
          if (it.async) {
            out += ' throw new ValidationError([' + (__err) + ']); ';
          } else {
            out += ' validate.errors = [' + (__err) + ']; return false; ';
          }
        } else {
          out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
        }
        out += ' } else { ';
      }
    } else {
      if ($loopRequired) {
        if (!$isData) {
          out += ' var ' + ($vSchema) + ' = validate.schema' + ($schemaPath) + '; ';
        }
        var $i = 'i' + $lvl,
          $propertyPath = 'schema' + $lvl + '[' + $i + ']',
          $missingProperty = '\' + ' + $propertyPath + ' + \'';
        if (it.opts._errorDataPathProperty) {
          it.errorPath = it.util.getPathExpr($currentErrorPath, $propertyPath, it.opts.jsonPointers);
        }
        if ($isData) {
          out += ' if (' + ($vSchema) + ' && !Array.isArray(' + ($vSchema) + ')) {  var err =   '; /* istanbul ignore else */
          if (it.createErrors !== false) {
            out += ' { keyword: \'' + ('required') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { missingProperty: \'' + ($missingProperty) + '\' } ';
            if (it.opts.messages !== false) {
              out += ' , message: \'';
              if (it.opts._errorDataPathProperty) {
                out += 'is a required property';
              } else {
                out += 'should have required property \\\'' + ($missingProperty) + '\\\'';
              }
              out += '\' ';
            }
            if (it.opts.verbose) {
              out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
            }
            out += ' } ';
          } else {
            out += ' {} ';
          }
          out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } else if (' + ($vSchema) + ' !== undefined) { ';
        }
        out += ' for (var ' + ($i) + ' = 0; ' + ($i) + ' < ' + ($vSchema) + '.length; ' + ($i) + '++) { if (' + ($data) + '[' + ($vSchema) + '[' + ($i) + ']] === undefined ';
        if ($ownProperties) {
          out += ' || ! Object.prototype.hasOwnProperty.call(' + ($data) + ', ' + ($vSchema) + '[' + ($i) + ']) ';
        }
        out += ') {  var err =   '; /* istanbul ignore else */
        if (it.createErrors !== false) {
          out += ' { keyword: \'' + ('required') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { missingProperty: \'' + ($missingProperty) + '\' } ';
          if (it.opts.messages !== false) {
            out += ' , message: \'';
            if (it.opts._errorDataPathProperty) {
              out += 'is a required property';
            } else {
              out += 'should have required property \\\'' + ($missingProperty) + '\\\'';
            }
            out += '\' ';
          }
          if (it.opts.verbose) {
            out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
          }
          out += ' } ';
        } else {
          out += ' {} ';
        }
        out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } } ';
        if ($isData) {
          out += '  }  ';
        }
      } else {
        var arr3 = $required;
        if (arr3) {
          var $propertyKey, i3 = -1,
            l3 = arr3.length - 1;
          while (i3 < l3) {
            $propertyKey = arr3[i3 += 1];
            var $prop = it.util.getProperty($propertyKey),
              $missingProperty = it.util.escapeQuotes($propertyKey),
              $useData = $data + $prop;
            if (it.opts._errorDataPathProperty) {
              it.errorPath = it.util.getPath($currentErrorPath, $propertyKey, it.opts.jsonPointers);
            }
            out += ' if ( ' + ($useData) + ' === undefined ';
            if ($ownProperties) {
              out += ' || ! Object.prototype.hasOwnProperty.call(' + ($data) + ', \'' + (it.util.escapeQuotes($propertyKey)) + '\') ';
            }
            out += ') {  var err =   '; /* istanbul ignore else */
            if (it.createErrors !== false) {
              out += ' { keyword: \'' + ('required') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { missingProperty: \'' + ($missingProperty) + '\' } ';
              if (it.opts.messages !== false) {
                out += ' , message: \'';
                if (it.opts._errorDataPathProperty) {
                  out += 'is a required property';
                } else {
                  out += 'should have required property \\\'' + ($missingProperty) + '\\\'';
                }
                out += '\' ';
              }
              if (it.opts.verbose) {
                out += ' , schema: validate.schema' + ($schemaPath) + ' , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
              }
              out += ' } ';
            } else {
              out += ' {} ';
            }
            out += ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ';
          }
        }
      }
    }
    it.errorPath = $currentErrorPath;
  } else if ($breakOnError) {
    out += ' if (true) {';
  }
  return out;
}


/***/ }),

/***/ 422:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function generate_uniqueItems(it, $keyword, $ruleType) {
  var out = ' ';
  var $lvl = it.level;
  var $dataLvl = it.dataLevel;
  var $schema = it.schema[$keyword];
  var $schemaPath = it.schemaPath + it.util.getProperty($keyword);
  var $errSchemaPath = it.errSchemaPath + '/' + $keyword;
  var $breakOnError = !it.opts.allErrors;
  var $data = 'data' + ($dataLvl || '');
  var $valid = 'valid' + $lvl;
  var $isData = it.opts.$data && $schema && $schema.$data,
    $schemaValue;
  if ($isData) {
    out += ' var schema' + ($lvl) + ' = ' + (it.util.getData($schema.$data, $dataLvl, it.dataPathArr)) + '; ';
    $schemaValue = 'schema' + $lvl;
  } else {
    $schemaValue = $schema;
  }
  if (($schema || $isData) && it.opts.uniqueItems !== false) {
    if ($isData) {
      out += ' var ' + ($valid) + '; if (' + ($schemaValue) + ' === false || ' + ($schemaValue) + ' === undefined) ' + ($valid) + ' = true; else if (typeof ' + ($schemaValue) + ' != \'boolean\') ' + ($valid) + ' = false; else { ';
    }
    out += ' var ' + ($valid) + ' = true; if (' + ($data) + '.length > 1) { var i = ' + ($data) + '.length, j; outer: for (;i--;) { for (j = i; j--;) { if (equal(' + ($data) + '[i], ' + ($data) + '[j])) { ' + ($valid) + ' = false; break outer; } } } } ';
    if ($isData) {
      out += '  }  ';
    }
    out += ' if (!' + ($valid) + ') {   ';
    var $$outStack = $$outStack || [];
    $$outStack.push(out);
    out = ''; /* istanbul ignore else */
    if (it.createErrors !== false) {
      out += ' { keyword: \'' + ('uniqueItems') + '\' , dataPath: (dataPath || \'\') + ' + (it.errorPath) + ' , schemaPath: ' + (it.util.toQuotedString($errSchemaPath)) + ' , params: { i: i, j: j } ';
      if (it.opts.messages !== false) {
        out += ' , message: \'should NOT have duplicate items (items ## \' + j + \' and \' + i + \' are identical)\' ';
      }
      if (it.opts.verbose) {
        out += ' , schema:  ';
        if ($isData) {
          out += 'validate.schema' + ($schemaPath);
        } else {
          out += '' + ($schema);
        }
        out += '         , parentSchema: validate.schema' + (it.schemaPath) + ' , data: ' + ($data) + ' ';
      }
      out += ' } ';
    } else {
      out += ' {} ';
    }
    var __err = out;
    out = $$outStack.pop();
    if (!it.compositeRule && $breakOnError) { /* istanbul ignore if */
      if (it.async) {
        out += ' throw new ValidationError([' + (__err) + ']); ';
      } else {
        out += ' validate.errors = [' + (__err) + ']; return false; ';
      }
    } else {
      out += ' var err = ' + (__err) + ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ';
    }
    out += ' } ';
    if ($breakOnError) {
      out += ' else { ';
    }
  } else {
    if ($breakOnError) {
      out += ' if (true) { ';
    }
  }
  return out;
}


/***/ }),

/***/ 423:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var IDENTIFIER = /^[a-z_$][a-z0-9_$-]*$/i;
var customRuleCode = __webpack_require__(409);

module.exports = {
  add: addKeyword,
  get: getKeyword,
  remove: removeKeyword
};

/**
 * Define custom keyword
 * @this  Ajv
 * @param {String} keyword custom keyword, should be unique (including different from all standard, custom and macro keywords).
 * @param {Object} definition keyword definition object with properties `type` (type(s) which the keyword applies to), `validate` or `compile`.
 */
function addKeyword(keyword, definition) {
  /* jshint validthis: true */
  /* eslint no-shadow: 0 */
  var RULES = this.RULES;

  if (RULES.keywords[keyword])
    throw new Error('Keyword ' + keyword + ' is already defined');

  if (!IDENTIFIER.test(keyword))
    throw new Error('Keyword ' + keyword + ' is not a valid identifier');

  if (definition) {
    if (definition.macro && definition.valid !== undefined)
      throw new Error('"valid" option cannot be used with macro keywords');

    var dataType = definition.type;
    if (Array.isArray(dataType)) {
      var i, len = dataType.length;
      for (i=0; i<len; i++) checkDataType(dataType[i]);
      for (i=0; i<len; i++) _addRule(keyword, dataType[i], definition);
    } else {
      if (dataType) checkDataType(dataType);
      _addRule(keyword, dataType, definition);
    }

    var $data = definition.$data === true && this._opts.$data;
    if ($data && !definition.validate)
      throw new Error('$data support: "validate" function is not defined');

    var metaSchema = definition.metaSchema;
    if (metaSchema) {
      if ($data) {
        metaSchema = {
          anyOf: [
            metaSchema,
            { '$ref': 'https://raw.githubusercontent.com/epoberezkin/ajv/master/lib/refs/$data.json#' }
          ]
        };
      }
      definition.validateSchema = this.compile(metaSchema, true);
    }
  }

  RULES.keywords[keyword] = RULES.all[keyword] = true;


  function _addRule(keyword, dataType, definition) {
    var ruleGroup;
    for (var i=0; i<RULES.length; i++) {
      var rg = RULES[i];
      if (rg.type == dataType) {
        ruleGroup = rg;
        break;
      }
    }

    if (!ruleGroup) {
      ruleGroup = { type: dataType, rules: [] };
      RULES.push(ruleGroup);
    }

    var rule = {
      keyword: keyword,
      definition: definition,
      custom: true,
      code: customRuleCode,
      implements: definition.implements
    };
    ruleGroup.rules.push(rule);
    RULES.custom[keyword] = rule;
  }


  function checkDataType(dataType) {
    if (!RULES.types[dataType]) throw new Error('Unknown type ' + dataType);
  }
}


/**
 * Get keyword
 * @this  Ajv
 * @param {String} keyword pre-defined or custom keyword.
 * @return {Object|Boolean} custom keyword definition, `true` if it is a predefined keyword, `false` otherwise.
 */
function getKeyword(keyword) {
  /* jshint validthis: true */
  var rule = this.RULES.custom[keyword];
  return rule ? rule.definition : this.RULES.keywords[keyword] || false;
}


/**
 * Remove keyword
 * @this  Ajv
 * @param {String} keyword pre-defined or custom keyword.
 */
function removeKeyword(keyword) {
  /* jshint validthis: true */
  var RULES = this.RULES;
  delete RULES.keywords[keyword];
  delete RULES.all[keyword];
  delete RULES.custom[keyword];
  for (var i=0; i<RULES.length; i++) {
    var rules = RULES[i].rules;
    for (var j=0; j<rules.length; j++) {
      if (rules[j].keyword == keyword) {
        rules.splice(j, 1);
        break;
      }
    }
  }
}


/***/ }),

/***/ 424:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var META_SCHEMA_ID = 'http://json-schema.org/draft-06/schema';

module.exports = function (ajv) {
  var defaultMeta = ajv._opts.defaultMeta;
  var metaSchemaRef = typeof defaultMeta == 'string'
                      ? { $ref: defaultMeta }
                      : ajv.getSchema(META_SCHEMA_ID)
                        ? { $ref: META_SCHEMA_ID }
                        : {};

  ajv.addKeyword('patternGroups', {
    // implemented in properties.jst
    metaSchema: {
      type: 'object',
      additionalProperties: {
        type: 'object',
        required: [ 'schema' ],
        properties: {
          maximum: {
            type: 'integer',
            minimum: 0
          },
          minimum: {
            type: 'integer',
            minimum: 0
          },
          schema: metaSchemaRef
        },
        additionalProperties: false
      }
    }
  });
  ajv.RULES.all.properties.implements.push('patternGroups');
};


/***/ }),

/***/ 430:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var traverse = module.exports = function (schema, opts, cb) {
  if (typeof opts == 'function') {
    cb = opts;
    opts = {};
  }
  _traverse(opts, cb, schema, '', schema);
};


traverse.keywords = {
  additionalItems: true,
  items: true,
  contains: true,
  additionalProperties: true,
  propertyNames: true,
  not: true
};

traverse.arrayKeywords = {
  items: true,
  allOf: true,
  anyOf: true,
  oneOf: true
};

traverse.propsKeywords = {
  definitions: true,
  properties: true,
  patternProperties: true,
  dependencies: true
};

traverse.skipKeywords = {
  enum: true,
  const: true,
  required: true,
  maximum: true,
  minimum: true,
  exclusiveMaximum: true,
  exclusiveMinimum: true,
  multipleOf: true,
  maxLength: true,
  minLength: true,
  pattern: true,
  format: true,
  maxItems: true,
  minItems: true,
  uniqueItems: true,
  maxProperties: true,
  minProperties: true
};


function _traverse(opts, cb, schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex) {
  if (schema && typeof schema == 'object' && !Array.isArray(schema)) {
    cb(schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex);
    for (var key in schema) {
      var sch = schema[key];
      if (Array.isArray(sch)) {
        if (key in traverse.arrayKeywords) {
          for (var i=0; i<sch.length; i++)
            _traverse(opts, cb, sch[i], jsonPtr + '/' + key + '/' + i, rootSchema, jsonPtr, key, schema, i);
        }
      } else if (key in traverse.propsKeywords) {
        if (sch && typeof sch == 'object') {
          for (var prop in sch)
            _traverse(opts, cb, sch[prop], jsonPtr + '/' + key + '/' + escapeJsonPtr(prop), rootSchema, jsonPtr, key, schema, prop);
        }
      } else if (key in traverse.keywords || (opts.allKeys && !(key in traverse.skipKeywords))) {
        _traverse(opts, cb, sch, jsonPtr + '/' + key, rootSchema, jsonPtr, key, schema);
      }
    }
  }
}


function escapeJsonPtr(str) {
  return str.replace(/~/g, '~0').replace(/\//g, '~1');
}


/***/ }),

/***/ 431:
/***/ (function(module, exports, __webpack_require__) {

exports.parse = __webpack_require__(432);
exports.stringify = __webpack_require__(433);


/***/ }),

/***/ 432:
/***/ (function(module, exports) {

var at, // The index of the current character
    ch, // The current character
    escapee = {
        '"':  '"',
        '\\': '\\',
        '/':  '/',
        b:    '\b',
        f:    '\f',
        n:    '\n',
        r:    '\r',
        t:    '\t'
    },
    text,

    error = function (m) {
        // Call error when something is wrong.
        throw {
            name:    'SyntaxError',
            message: m,
            at:      at,
            text:    text
        };
    },
    
    next = function (c) {
        // If a c parameter is provided, verify that it matches the current character.
        if (c && c !== ch) {
            error("Expected '" + c + "' instead of '" + ch + "'");
        }
        
        // Get the next character. When there are no more characters,
        // return the empty string.
        
        ch = text.charAt(at);
        at += 1;
        return ch;
    },
    
    number = function () {
        // Parse a number value.
        var number,
            string = '';
        
        if (ch === '-') {
            string = '-';
            next('-');
        }
        while (ch >= '0' && ch <= '9') {
            string += ch;
            next();
        }
        if (ch === '.') {
            string += '.';
            while (next() && ch >= '0' && ch <= '9') {
                string += ch;
            }
        }
        if (ch === 'e' || ch === 'E') {
            string += ch;
            next();
            if (ch === '-' || ch === '+') {
                string += ch;
                next();
            }
            while (ch >= '0' && ch <= '9') {
                string += ch;
                next();
            }
        }
        number = +string;
        if (!isFinite(number)) {
            error("Bad number");
        } else {
            return number;
        }
    },
    
    string = function () {
        // Parse a string value.
        var hex,
            i,
            string = '',
            uffff;
        
        // When parsing for string values, we must look for " and \ characters.
        if (ch === '"') {
            while (next()) {
                if (ch === '"') {
                    next();
                    return string;
                } else if (ch === '\\') {
                    next();
                    if (ch === 'u') {
                        uffff = 0;
                        for (i = 0; i < 4; i += 1) {
                            hex = parseInt(next(), 16);
                            if (!isFinite(hex)) {
                                break;
                            }
                            uffff = uffff * 16 + hex;
                        }
                        string += String.fromCharCode(uffff);
                    } else if (typeof escapee[ch] === 'string') {
                        string += escapee[ch];
                    } else {
                        break;
                    }
                } else {
                    string += ch;
                }
            }
        }
        error("Bad string");
    },

    white = function () {

// Skip whitespace.

        while (ch && ch <= ' ') {
            next();
        }
    },

    word = function () {

// true, false, or null.

        switch (ch) {
        case 't':
            next('t');
            next('r');
            next('u');
            next('e');
            return true;
        case 'f':
            next('f');
            next('a');
            next('l');
            next('s');
            next('e');
            return false;
        case 'n':
            next('n');
            next('u');
            next('l');
            next('l');
            return null;
        }
        error("Unexpected '" + ch + "'");
    },

    value,  // Place holder for the value function.

    array = function () {

// Parse an array value.

        var array = [];

        if (ch === '[') {
            next('[');
            white();
            if (ch === ']') {
                next(']');
                return array;   // empty array
            }
            while (ch) {
                array.push(value());
                white();
                if (ch === ']') {
                    next(']');
                    return array;
                }
                next(',');
                white();
            }
        }
        error("Bad array");
    },

    object = function () {

// Parse an object value.

        var key,
            object = {};

        if (ch === '{') {
            next('{');
            white();
            if (ch === '}') {
                next('}');
                return object;   // empty object
            }
            while (ch) {
                key = string();
                white();
                next(':');
                if (Object.hasOwnProperty.call(object, key)) {
                    error('Duplicate key "' + key + '"');
                }
                object[key] = value();
                white();
                if (ch === '}') {
                    next('}');
                    return object;
                }
                next(',');
                white();
            }
        }
        error("Bad object");
    };

value = function () {

// Parse a JSON value. It could be an object, an array, a string, a number,
// or a word.

    white();
    switch (ch) {
    case '{':
        return object();
    case '[':
        return array();
    case '"':
        return string();
    case '-':
        return number();
    default:
        return ch >= '0' && ch <= '9' ? number() : word();
    }
};

// Return the json_parse function. It will have access to all of the above
// functions and variables.

module.exports = function (source, reviver) {
    var result;
    
    text = source;
    at = 0;
    ch = ' ';
    result = value();
    white();
    if (ch) {
        error("Syntax error");
    }

    // If there is a reviver function, we recursively walk the new structure,
    // passing each name/value pair to the reviver function for possible
    // transformation, starting with a temporary root object that holds the result
    // in an empty key. If there is not a reviver function, we simply return the
    // result.

    return typeof reviver === 'function' ? (function walk(holder, key) {
        var k, v, value = holder[key];
        if (value && typeof value === 'object') {
            for (k in value) {
                if (Object.prototype.hasOwnProperty.call(value, k)) {
                    v = walk(value, k);
                    if (v !== undefined) {
                        value[k] = v;
                    } else {
                        delete value[k];
                    }
                }
            }
        }
        return reviver.call(holder, key, value);
    }({'': result}, '')) : result;
};


/***/ }),

/***/ 433:
/***/ (function(module, exports) {

var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
    gap,
    indent,
    meta = {    // table of character substitutions
        '\b': '\\b',
        '\t': '\\t',
        '\n': '\\n',
        '\f': '\\f',
        '\r': '\\r',
        '"' : '\\"',
        '\\': '\\\\'
    },
    rep;

function quote(string) {
    // If the string contains no control characters, no quote characters, and no
    // backslash characters, then we can safely slap some quotes around it.
    // Otherwise we must also replace the offending characters with safe escape
    // sequences.
    
    escapable.lastIndex = 0;
    return escapable.test(string) ? '"' + string.replace(escapable, function (a) {
        var c = meta[a];
        return typeof c === 'string' ? c :
            '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
    }) + '"' : '"' + string + '"';
}

function str(key, holder) {
    // Produce a string from holder[key].
    var i,          // The loop counter.
        k,          // The member key.
        v,          // The member value.
        length,
        mind = gap,
        partial,
        value = holder[key];
    
    // If the value has a toJSON method, call it to obtain a replacement value.
    if (value && typeof value === 'object' &&
            typeof value.toJSON === 'function') {
        value = value.toJSON(key);
    }
    
    // If we were called with a replacer function, then call the replacer to
    // obtain a replacement value.
    if (typeof rep === 'function') {
        value = rep.call(holder, key, value);
    }
    
    // What happens next depends on the value's type.
    switch (typeof value) {
        case 'string':
            return quote(value);
        
        case 'number':
            // JSON numbers must be finite. Encode non-finite numbers as null.
            return isFinite(value) ? String(value) : 'null';
        
        case 'boolean':
        case 'null':
            // If the value is a boolean or null, convert it to a string. Note:
            // typeof null does not produce 'null'. The case is included here in
            // the remote chance that this gets fixed someday.
            return String(value);
            
        case 'object':
            if (!value) return 'null';
            gap += indent;
            partial = [];
            
            // Array.isArray
            if (Object.prototype.toString.apply(value) === '[object Array]') {
                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }
                
                // Join all of the elements together, separated with commas, and
                // wrap them in brackets.
                v = partial.length === 0 ? '[]' : gap ?
                    '[\n' + gap + partial.join(',\n' + gap) + '\n' + mind + ']' :
                    '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }
            
            // If the replacer is an array, use it to select the members to be
            // stringified.
            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    k = rep[i];
                    if (typeof k === 'string') {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }
            else {
                // Otherwise, iterate through all of the keys in the object.
                for (k in value) {
                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }
            
        // Join all of the member texts together, separated with commas,
        // and wrap them in braces.

        v = partial.length === 0 ? '{}' : gap ?
            '{\n' + gap + partial.join(',\n' + gap) + '\n' + mind + '}' :
            '{' + partial.join(',') + '}';
        gap = mind;
        return v;
    }
}

module.exports = function (value, replacer, space) {
    var i;
    gap = '';
    indent = '';
    
    // If the space parameter is a number, make an indent string containing that
    // many spaces.
    if (typeof space === 'number') {
        for (i = 0; i < space; i += 1) {
            indent += ' ';
        }
    }
    // If the space parameter is a string, it will be used as the indent string.
    else if (typeof space === 'string') {
        indent = space;
    }

    // If there is a replacer, it must be a function or an array.
    // Otherwise, throw an error.
    rep = replacer;
    if (replacer && typeof replacer !== 'function'
    && (typeof replacer !== 'object' || typeof replacer.length !== 'number')) {
        throw new Error('JSON.stringify');
    }
    
    // Make a fake root object containing our value under the key of ''.
    // Return the result of stringifying the value.
    return str('', {'': value});
};


/***/ }),

/***/ 434:
/***/ (function(module, exports, __webpack_require__) {

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
/***
 * @classdesc Classe configuration pour les datasources de type Services
 * @class
 */
var DataSourceConfig = /** @class */ (function () {
    function DataSourceConfig(scope, methodName, fetchAttrName) {
        this.scope = scope;
        this.methodName = methodName;
        this.fetchAttrName = fetchAttrName;
    }
    return DataSourceConfig;
}());
exports.DataSourceConfig = DataSourceConfig;



/***/ }),

/***/ 435:
/***/ (function(module, exports, __webpack_require__) {

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
var Ajv = __webpack_require__(397);
;
;
/**
 * Contient tous les éléments nécessaires à une validation de données
 */
var DataValidator = /** @class */ (function () {
    function DataValidator(schema, customValidators, options) {
        if (options === void 0) { options = DataValidator.DEFAULT_VALIDATION_OPTIONS; }
        this.schema = schema;
        this.customValidators = customValidators;
        this.options = options;
    }
    /**
     * Exécute la validation
     * @param data données à valider
     * @return {IValidationResult} résultat de la validation
     */
    DataValidator.prototype.validate = function (data) {
        var result = {
            valid: true,
            errors: []
        };
        if (this.schema) {
            var ajvInstance = Ajv(this.options);
            __webpack_require__(377)(ajvInstance);
            result.valid = ajvInstance.validate(this.schema, data);
            result.errors = ajvInstance.errors || [];
        }
        /* Prise en compte des valideurs customisés éventuels */
        if (this.customValidators) {
            for (var index in this.customValidators) {
                if (this.customValidators[index] && (typeof this.customValidators[index] != "function")) {
                    var customResult = this.customValidators[index].validate(data);
                    if (!customResult.valid && customResult.errors) {
                        result.errors = result.errors.concat(customResult.errors);
                    }
                    result.valid = result.valid && customResult.valid;
                }
            }
        }
        if (result.errors && Array.isArray(result.errors)) {
            for (var index in result.errors) {
                result.errors[index].dataPath = result.errors[index].dataPath.replace("'][", ".").replace("['", "").replace("]", "");
            }
        }
        return result;
    };
    /**
     * Transforme le schéma de validation indiqué en un schéma JSON-Schema valide. Dans le schéma passé en paramètre,
     * le mot clé "required" peut-être spécifié par champ de type string.
     * En sortie les noms champs obligatoires sont regroupés dans un tableau, conformément à la spécification JSON-Schema
     * et le mot-clé "minLength" est utilisé pour les champs obligatoires.
     * Exemple :
     * {
     *  "$schema": "http://json-schema.org/schema#",
     *  "type": "object",
     *  "properties": {
     *      "champ1": {"type": "string", "required": true},
     *      "champ2": {"type": "number"}
     *  }
     * }
     *
     * devient :
     * {
     *  "$schema": "http://json-schema.org/schema#",
     *  "type": "object",
     *  "properties": {
     *      "champ1": {"type": "string", "minLength": 1},
     *      "champ2": {"type": "number"}
     *  },
     *  "required": ["champ1"]
     * }
     *
     * @param hornetSchema schéma de validation
     * @return un schéma json-schema valide
     */
    DataValidator.transformRequiredStrings = function (hornetSchema) {
        var resultSchema;
        if (hornetSchema) {
            resultSchema = _.cloneDeep(hornetSchema);
            resultSchema.required = resultSchema.required || [];
            // TODO à appliquer récursivement, chaque champ pouvant lui même être un objet
            for (var fn in resultSchema.properties) {
                var field = resultSchema.properties[fn];
                if (field.required === true && field.type == "string") {
                    field.minLength = 1;
                    if (resultSchema.required.indexOf(fn) == -1) {
                        resultSchema.required.push(fn);
                    }
                    delete field.required;
                }
            }
            /* Aucune propriété n'est requise : on supprime dans ce cas la propriété required pour être compatible avec ajv */
            if (resultSchema.required.length == 0) {
                delete resultSchema.required;
            }
        }
        return resultSchema;
    };
    /**
     * Options de validation ajv par défaut, utilisables côté client et serveur (les dates sont supposées être des
     * chaînes de caractères au format ISO 8601)
     */
    DataValidator.DEFAULT_VALIDATION_OPTIONS = {
        /* Activation des mots clé json-schema v5 (https://github.com/json-schema/json-schema/wiki/v5-Proposals) */
        v5: true,
        /* Valide tous les champs : ne s'arrête pas à la première erreur */
        allErrors: true,
        /* Convertit les chaînes de caractères vers le type indiqué dans le schéma de validation */
        coerceTypes: true,
        /* Prend en compte les valeurs par défaut éventuellement présentes dans le schéma */
        useDefaults: true,
        /* Mode de validation complet : impacte les formats date, time, date-time, uri, email, et hostname.
        En mode 'full', les champs de format "email' sont validés en appliquant la RFC 5322. */
        format: "full"
    };
    return DataValidator;
}());
exports.DataValidator = DataValidator;



/***/ }),

/***/ 436:
/***/ (function(module, exports, __webpack_require__) {

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
var tslib_1 = __webpack_require__(0);
/**
 * hornet-js-react-components - Ensemble des composants web React de base de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.0
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
var _ = __webpack_require__(6);
var hornet_js_utils_1 = __webpack_require__(1);
var React = __webpack_require__(2);
var hornet_component_1 = __webpack_require__(4);
var dropdown_1 = __webpack_require__(46);
var key_codes_1 = __webpack_require__(9);
var logger = hornet_js_utils_1.Utils.getLogger("hornet-js-components.widget.pager.pager");
/**
 * Valeur de la propriété de pagination itemsPerPage correspondant à "Afficher tout" les éléments. Egale à la constante Java Integer.MAX_VALUE (2^32 - 1)
 */
exports.ITEMS_PER_PAGE_ALL = 2147483647;
/**
 * Outils de pagination de tableau
 */
var Pager = /** @class */ (function (_super) {
    tslib_1.__extends(Pager, _super);
    function Pager(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.defaultPageSizeSelect = [
            { value: 10, textKey: _this.i18n("table.10") },
            { value: 20, textKey: _this.i18n("table.20") },
            { value: 50, textKey: _this.i18n("table.50") },
            { value: 100, textKey: _this.i18n("table.100") },
            { value: exports.ITEMS_PER_PAGE_ALL, textKey: _this.i18n("table.displayAll") }
        ];
        _this.state.i18n = _this.i18n("table");
        _this.state.pagination = _.cloneDeep(_this.props.dataSource.pagination);
        _this.state.dropDownTitle = _this.i18n("table.pager.dropdownTitle");
        return _this;
    }
    Pager.prototype.componentDidMount = function () {
        var _this = this;
        _super.prototype.componentDidMount.call(this);
        this.props.dataSource.on("fetch", this.updateOnFetch);
        this.props.dataSource.on("pagination", function (result) {
            _this.setState({ pagination: _.cloneDeep(result.pagination) });
        });
    };
    /**
     * @inheritDoc
     */
    Pager.prototype.componentWillUnmount = function () {
        var _this = this;
        _super.prototype.componentWillUnmount.call(this);
        if (this.props.dataSource) {
            this.props.dataSource.removeListener("fetch", this.updateOnFetch);
            this.props.dataSource.removeListener("pagination", function (result) {
                _this.setState({ pagination: _.cloneDeep(result.pagination) });
            });
        }
    };
    // TODO à supprimer : se baser plutôt sur les setters
    Pager.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        var shouldUpdate = this.state.pagination.pageIndex !== nextState.pagination.pageIndex
            || this.state.pagination.itemsPerPage !== nextState.pagination.itemsPerPage
            || this.state.pagination.totalItems !== nextState.pagination.totalItems
            || this.state.disabled !== nextState.disabled;
        logger.trace("shouldComponentUpdate", shouldUpdate);
        return shouldUpdate;
    };
    /**
     * met a jour la pagination dans le state et la valeur de la page courante.
     * @param result (liste des resultats du dataSource)
     */
    Pager.prototype.updateOnFetch = function (result) {
        this.setState({ pagination: (!result || result.length == 0) ? {} : _.cloneDeep(this.props.dataSource.pagination) });
        if (this.tableInputPager) {
            this.tableInputPager.value = this.state.pagination.pageIndex; // mise a jour de l'index de la page affichée
        }
    };
    /**
     * @inheritDoc
     */
    Pager.prototype.render = function () {
        logger.trace("render");
        var className = "datatable-pagination";
        if (this.state.className) {
            className += " " + this.state.className;
        }
        return (this.state.pagination.pageIndex ?
            React.createElement("div", { className: className, id: this.props.id, disabled: this.state.disabled },
                this.renderSelectItemsPerPage(),
                this.getButtons()) : React.createElement("div", null));
    };
    /**
     * Génère la liste déroulante permettant de sélectionner le nombre d'éléments par page.
     * @param pageSizeSelect éléments de choix de taille de page
     * @returns {JSX.Element}
     */
    Pager.prototype.renderSelectItemsPerPage = function () {
        var _this = this;
        logger.trace("renderSelectItemsPerPage");
        var pageSizeSelect = this.state.pageSizeSelect || this.defaultPageSizeSelect;
        var dropdownItems = [];
        pageSizeSelect.map(function (item) {
            var disabled = false;
            if (_this.state.pagination.itemsPerPage == item.value) {
                disabled = true;
            }
            dropdownItems.push({
                label: item.textKey,
                action: _this.onFormChange.bind(_this, item.value, false),
                className: "material-dropdown-menu__link",
                disabled: disabled
            });
        });
        var selectedItem = { value: 0, textKey: "" };
        if (this.state.pagination.itemsPerPage) {
            for (var i = 0; i < pageSizeSelect.length; i++) {
                var item = pageSizeSelect[i];
                if (item.value == this.state.pagination.itemsPerPage) {
                    selectedItem = item;
                }
            }
        }
        return (React.createElement("div", null,
            React.createElement("label", { className: "labelPager", htmlFor: this.props.id + "-drop" }, this.state.i18n.pageFooter),
            React.createElement("div", { className: "datatable-pagination-content" },
                React.createElement(dropdown_1.Dropdown, { items: dropdownItems, icon: "caret-down", id: this.props.id + "-drop", valueCurrent: this.state.pagination.itemsPerPage, label: selectedItem.textKey, ariaLabel: this.state.i18n.pageFooter + " " + this.state.pagination.itemsPerPage, disabled: this.state.disabled, position: dropdown_1.Position.TOPLEFT, title: this.state.dropDownTitle }))));
    };
    /**
     * @param totalItems nombre total d'éléments
     * @param itemsPerPage nombre d'éléments par page
     * @return le nombre total de pages
     */
    Pager.getTotalPages = function (totalItems, itemsPerPage) {
        return Math.max(1, Math.ceil(totalItems / itemsPerPage)) || 0;
    };
    /**
     * Méthode permettant de générer le code HTML lié aux boutons
     * @returns {JSX.Element[]}
     */
    Pager.prototype.getButtons = function () {
        logger.trace("getButtons");
        var firstPage, prevPage, nextPage, lastPage;
        firstPage = prevPage = nextPage = lastPage = 1;
        //calcul du nombre de pages
        var totalItems = this.state.pagination.totalItems, itemsPerPage = this.state.pagination.itemsPerPage, pageIndex = this.state.pagination.pageIndex;
        var totalPages = Pager.getTotalPages(totalItems, itemsPerPage);
        lastPage = totalPages;
        /* cas d'une nouvelle recherche quand on est positionné sur la dernière pagination et que le total est inférieur
         à l'ancienne recherche */
        if (pageIndex > totalPages) {
            pageIndex = 1;
        }
        var startOnClickActif = false, endOnClickActif = false;
        if (totalItems > itemsPerPage && totalPages > 1) {
            if (pageIndex > 1) {
                prevPage = pageIndex - 1;
                startOnClickActif = true;
            }
            if (pageIndex < totalPages) {
                nextPage = pageIndex + 1;
                endOnClickActif = true;
            }
        }
        return [
            this.renderButton(this.i18n("table.firstPage") + " [page " + firstPage + "/" + totalPages + "]", firstPage, startOnClickActif, "firstPage"),
            this.renderButton(this.i18n("table.prevPage") + " [page " + prevPage + "/" + totalPages + "]", prevPage, startOnClickActif, "prevPage"),
            this.renderPageInput(firstPage, lastPage),
            this.renderButton("[page " + nextPage + "/" + totalPages + "] " + this.i18n("table.nextPage"), nextPage, endOnClickActif, "nextPage"),
            this.renderButton("[page " + totalPages + "/" + totalPages + "] " + this.i18n("table.lastPage"), lastPage, endOnClickActif, "lastPage"),
        ];
    };
    /**
     * Génère le rendu d'un bouton de contrôle de pagination
     * @param infoTitle complement info title
     * @param page index de la page sélectionnée par le bouton
     * @param enabled indique si le bouton est actif
     * @param key clé de l'élément React
     * @returns l'élément React correspondant
     */
    Pager.prototype.renderButton = function (infoTitle, page, enabled, key) {
        var _this = this;
        logger.trace("renderButton");
        var className = "datatable-pagination-button datatable-pagination-button-" + key.toLowerCase();
        if (enabled) {
            className += " datatable-pagination-control-enabled";
        }
        else {
            className += " datatable-pagination-control-disabled";
        }
        return (React.createElement("button", { className: className, onClick: function () {
                _this.props.dataSource.goToPage(page);
                _this.tableInputPager.value = page;
            }, disabled: !enabled || this.state.disabled, key: key, title: infoTitle, "aria-label": this.i18n("table." + key) }));
    };
    /**
     * Rendu de l'input de saisie pour aller à une page précise
     * @param firstPage numéro de la première page
     * @param lastPage numéro de la dernière page
     * @returns rendu du composant
     */
    Pager.prototype.renderPageInput = function (firstPage, lastPage) {
        var _this = this;
        var index = this.state.pagination.pageIndex;
        var defaultValue = (!index || index < 1) ? 1 : index;
        return (React.createElement("input", { defaultValue: defaultValue, value: index, type: (!this.isMobile()) ? "number" : "tel", min: (!this.isMobile()) ? firstPage : undefined, max: (!this.isMobile()) ? lastPage : undefined, className: "datatable-pagination-input", ref: function (element) {
                _this.tableInputPager = element;
            }, name: "tableInputPager", onKeyDown: this.handleInputKeyDown, key: this.props.id }));
    };
    /**
     * Gestion de la validation clavier pour aller à la page saisie
     * dans l'input dédié
     * @param e : event
     */
    Pager.prototype.handleInputKeyDown = function (e) {
        if (!(e.ctrlKey || e.shiftKey || e.altKey || e.metaKey)) {
            var keyCode = e.keyCode;
            if ((this.isMobile() && key_codes_1.KeyCodes.TAB == keyCode) || key_codes_1.KeyCodes.SPACEBAR == keyCode || key_codes_1.KeyCodes.ENTER == keyCode) {
                if (this.tableInputPager.value >= 1 &&
                    this.tableInputPager.value <= Pager.getTotalPages(this.state.pagination.totalItems, this.state.pagination.itemsPerPage)) {
                    this.props.dataSource.goToPage(this.tableInputPager.value);
                    this.tableInputPager.value = this.tableInputPager.value;
                }
                else {
                    this.tableInputPager.value = this.state.pagination.pageIndex;
                }
            }
        }
    };
    /**
     * Méthode déclenchée sur un changement d'état de du formulaire de pagination
     * @param value
     * @param pageChanged
     */
    Pager.prototype.onFormChange = function (value, pageChanged) {
        logger.trace("onFormChange");
        if (pageChanged) {
            this.props.dataSource.goToPage(value);
            this.tableInputPager.value = value;
        }
        else {
            this.props.dataSource.updatePerPage(value);
            this.tableInputPager.value = 1;
        }
    };
    // Setters
    Pager.prototype.setClassName = function (className, callback) {
        this.setState({ className: className }, callback);
        return this;
    };
    Pager.prototype.setMessage = function (message, callback) {
        this.setState({ message: message }, callback);
        return this;
    };
    Pager.prototype.setPageSizeSelect = function (pageSizeSelect, callback) {
        this.setState({ pageSizeSelect: pageSizeSelect }, callback);
        return this;
    };
    Pager.defaultProps = {
        message: hornet_component_1.HornetComponent.getI18n("table"),
        className: ""
    };
    return Pager;
}(hornet_component_1.HornetComponent));
exports.Pager = Pager;



/***/ }),

/***/ 437:
/***/ (function(module, exports, __webpack_require__) {

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
var tslib_1 = __webpack_require__(0);
/**
 * hornet-js-react-components - Ensemble des composants web React de base de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.0
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
var hornet_js_utils_1 = __webpack_require__(1);
var React = __webpack_require__(2);
var hornet_component_1 = __webpack_require__(4);
var table_state_1 = __webpack_require__(317);
var pager_1 = __webpack_require__(436);
var logger = hornet_js_utils_1.Utils.getLogger("hornet-js-components.widget.table.footer");
/**
 * Outils de pagination de tableau
 */
var Footer = /** @class */ (function (_super) {
    tslib_1.__extends(Footer, _super);
    function Footer(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.state.i18n = _this.i18n("table");
        // gestion de l'event d'eidtion du tableau
        _this.props.contentState.setMaxListeners(Infinity);
        _this.handleEdition = _this.handleEdition.bind(_this);
        _this.props.contentState.on(table_state_1.ContentState.EDITION_CLIC_EVENT, _this.handleEdition);
        return _this;
    }
    Footer.prototype.componentWillUnmount = function () {
        this.props.contentState.removeListener(table_state_1.ContentState.EDITION_CLIC_EVENT, this.handleEdition);
    };
    /**
     * cache le menuActions lorsque la table est en cours d'edition.
     * @param lineIndex
     */
    Footer.prototype.handleEdition = function (lineIndex) {
        this.setState({ disabled: lineIndex !== undefined && lineIndex !== null });
    };
    /**
     * @inheritDoc
     */
    Footer.prototype.render = function () {
        logger.trace("render");
        return (React.createElement("div", { className: this.state.className, disabled: this.state.disabled }, this.state.disabled ? this.setChildrenDisabled() : this.props.children));
    };
    /**
     * ajoute la props disabled au pager.
     * @returns {Array}
     */
    Footer.prototype.setChildrenDisabled = function () {
        var _this = this;
        var children = [];
        React.Children.map(this.props.children, function (child) {
            if (child.type === pager_1.Pager) {
                children.push(_this.wrap(pager_1.Pager, child.props, { disabled: _this.state.disabled }));
            }
            else {
                children.push(child.props.children);
            }
        });
        return children;
    };
    Footer.defaultProps = {
        className: "hornet-datatable-bottom"
    };
    return Footer;
}(hornet_component_1.HornetComponent));
exports.Footer = Footer;



/***/ }),

/***/ 445:
/***/ (function(module, exports, __webpack_require__) {

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
var tslib_1 = __webpack_require__(0);
/**
 * hornet-js-react-components - Ensemble des composants web React de base de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.0
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
var hornet_js_utils_1 = __webpack_require__(1);
var abstract_body_cell_1 = __webpack_require__(313);
var React = __webpack_require__(2);
var template_1 = __webpack_require__(346);
var key_codes_1 = __webpack_require__(9);
var classNames = __webpack_require__(19);
var logger = hornet_js_utils_1.Utils.getLogger("hornet-js-react-components.widget.table.column.cell.action.action-body-cell");
var ActionBodyCell = /** @class */ (function (_super) {
    tslib_1.__extends(ActionBodyCell, _super);
    function ActionBodyCell(props, context) {
        var _this = _super.call(this, props, context) || this;
        if (props.url) {
            _this.state.url = _this.genUrlWithParams(props.url, props.value);
        }
        _this.state.visible = true;
        if (_this.props.visible) {
            _this.state.visible = _this.props.visible(_this.props.value);
        }
        if (_this.props.messageAlert) {
            _this.state.hasPopUp = true;
            _this.state.messageAlert = new template_1.Template(_this.props.messageAlert).process(_this.props.value, _this.props.replaceUndef || "?");
            _this.state.titleAlert = new template_1.Template(_this.props.titleAlert).process(_this.props.value, _this.props.replaceUndef || "?");
        }
        _this.title = _this.getCellTitleWithProps(props);
        return _this;
    }
    /**
     * @inheritDoc
     */
    ActionBodyCell.prototype.renderCell = function () {
        logger.trace("render ActionBodyCell-> column:", this.props.coordinates.column, " - line:", this.props.coordinates.row);
        var classes = {
            "button-action": true,
            "picto-svg": true
        };
        if (this.state.className) {
            classes[this.state.className] = true;
        }
        var img = null;
        if (typeof this.props.srcImg == "string") {
            img = React.createElement("img", { src: this.state.srcImg, className: this.state.classNameImg, alt: this.title });
        }
        else {
            img = this.props.srcImg;
        }
        var disabled = (typeof this.state.disabled == "function") ? this.state.disabled() : this.state.disabled;
        return (this.state.visible ?
            React.createElement("a", { href: this.state.url || "#", className: classNames(classes), title: this.title, "aria-label": this.title, onClick: this.onClick, "aria-haspopup": this.state.hasPopUp, disabled: (this.props.contentState.itemInEdition && this.state.isEditing === false) || disabled, tabIndex: -1, onKeyDown: this.handleKeyDownButton },
                img,
                this.state.label ? React.createElement("span", { className: "label-button-action" }, this.state.label) : null)
            : null);
    };
    /**
     * Gestion de la touche espace et entre
     * @param e
     */
    ActionBodyCell.prototype.handleKeyDownButton = function (e) {
        if (e.keyCode === key_codes_1.KeyCodes.ENTER || e.keyCode === key_codes_1.KeyCodes.SPACEBAR) {
            this.onClick(e);
        }
    };
    /**
     * @inheritDoc
     */
    ActionBodyCell.prototype.getCellTitleWithProps = function (props) {
        return (props.alt || props.title) ? this.i18n(props.alt || props.title, props.value) : null;
    };
    /**
     * Click sur le lien
     */
    ActionBodyCell.prototype.onClick = function (e) {
        if (this.props.messageAlert) {
            e.stopPropagation();
            this.props.showAlert(this.state.messageAlert, this.state.titleAlert, this.onAction);
        }
        else {
            this.onAction();
        }
    };
    /**
     * action sur la confirmation
     */
    ActionBodyCell.prototype.onAction = function () {
        if (this.state.url) {
            window.location.href = this.state.url;
        }
        else if (this.props.action) {
            this.props.action(this.props.value);
        }
    };
    /**
     * met a true la props isEditing a true lorsque la cellule est en cours d'edition
     * @param lineIndex
     */
    ActionBodyCell.prototype.handleEdition = function (lineIndex) {
        var nameClass = "default-body-cell";
        if (_.isNull(lineIndex)) {
            this.setState({ isEditing: false });
            this.tableCellRef.removeAttribute("disabled");
            this.tableCellRef.classList.remove("datatable-cell-in-edition");
        }
        else if (lineIndex === this.props.cellCoordinate.row) {
            this.setState({ isEditing: (lineIndex === this.props.cellCoordinate.row) });
            this.tableCellRef.classList.add("datatable-cell-in-edition");
            this.tableCellRef.setAttribute("disabled", "true");
        }
        else if (this.tableCellRef.localName == "th") {
            this.tableCellRef.classList.add("is_disabled");
            this.tableCellRef.classList.remove("datatable-header-sortable-column", "datatable-header-sorted", "datatable-header-sorted-asc");
        }
        else {
            this.tableCellRef.setAttribute("disabled", "true");
        }
    };
    return ActionBodyCell;
}(abstract_body_cell_1.AbstractBodyCell));
exports.ActionBodyCell = ActionBodyCell;



/***/ }),

/***/ 446:
/***/ (function(module, exports, __webpack_require__) {

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
var tslib_1 = __webpack_require__(0);
/**
 * hornet-js-react-components - Ensemble des composants web React de base de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.0
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
var column_1 = __webpack_require__(315);
var check_body_cell_1 = __webpack_require__(460);
var check_header_cell_1 = __webpack_require__(461);
/**
 * Classe permettant de gérer les colonnes de type CheckBox
 */
var CheckColumn = /** @class */ (function (_super) {
    tslib_1.__extends(CheckColumn, _super);
    function CheckColumn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    CheckColumn.prototype.getBodyCell = function () {
        return check_body_cell_1.CheckBodyCell;
    };
    /**
     * Getter pour le composant générant le entête de colonne
     * @return Class<HeaderCell<HeaderCellProps, any>>
     */
    CheckColumn.prototype.getHeaderCell = function () {
        return check_header_cell_1.CheckHeaderCell;
    };
    CheckColumn.defaultProps = column_1.Column.mergeObjects(column_1.Column.defaultProps, {
        defaultStyle: { "textAlign": "center", "paddingLeft": 0, "width": "2.5em" },
        sortable: false,
        hiddenable: false
    });
    return CheckColumn;
}(column_1.Column));
exports.CheckColumn = CheckColumn;



/***/ }),

/***/ 447:
/***/ (function(module, exports, __webpack_require__) {

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
var tslib_1 = __webpack_require__(0);
/**
 * hornet-js-react-components - Ensemble des composants web React de base de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.0
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
var column_1 = __webpack_require__(315);
var date_body_cell_1 = __webpack_require__(462);
/**
 * Classe permettant de gérer les colonnes de type date
 */
var DateColumn = /** @class */ (function (_super) {
    tslib_1.__extends(DateColumn, _super);
    function DateColumn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    DateColumn.prototype.getBodyCell = function () {
        return date_body_cell_1.DateBodyCell;
    };
    DateColumn.defaultProps = column_1.Column.mergeObjects(column_1.Column.defaultProps, {
        sortable: false,
        defaultStyle: { "width": "6em" },
        hiddenable: true
    });
    return DateColumn;
}(column_1.Column));
exports.DateColumn = DateColumn;



/***/ }),

/***/ 448:
/***/ (function(module, exports, __webpack_require__) {

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
var tslib_1 = __webpack_require__(0);
/**
 * hornet-js-react-components - Ensemble des composants web React de base de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.0
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
var column_1 = __webpack_require__(315);
var edition_action_body_cell_1 = __webpack_require__(457);
var action_header_cell_1 = __webpack_require__(370);
/**
 * Classe permettant de gérer les colonnes de type edition rapide action
 */
var EditionActionColumn = /** @class */ (function (_super) {
    tslib_1.__extends(EditionActionColumn, _super);
    function EditionActionColumn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Getter pour le composant générant le entête de colonne
     * @return Class<HeaderCell<HeaderCellProps, any>>
     */
    EditionActionColumn.prototype.getHeaderCell = function () {
        return action_header_cell_1.ActionHeaderCell;
    };
    /**
     * @inheritDoc
     */
    EditionActionColumn.prototype.getBodyCell = function () {
        return edition_action_body_cell_1.EditionActionBodyCell;
    };
    EditionActionColumn.defaultProps = column_1.Column.mergeObjects(column_1.Column.defaultProps, {
        defaultStyle: { "width": "4em" },
        sortable: false,
        hiddenable: false
    });
    return EditionActionColumn;
}(column_1.Column));
exports.EditionActionColumn = EditionActionColumn;



/***/ }),

/***/ 449:
/***/ (function(module, exports, __webpack_require__) {

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
var tslib_1 = __webpack_require__(0);
var line_1 = __webpack_require__(371);
/**
 * Classe permettant de générer le rendu html d'ajout de ligne après
 */
var LineAfter = /** @class */ (function (_super) {
    tslib_1.__extends(LineAfter, _super);
    function LineAfter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LineAfter;
}(line_1.Line));
exports.LineAfter = LineAfter;



/***/ }),

/***/ 457:
/***/ (function(module, exports, __webpack_require__) {

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
var tslib_1 = __webpack_require__(0);
/**
 * hornet-js-react-components - Ensemble des composants web React de base de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.0
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
var hornet_js_utils_1 = __webpack_require__(1);
var abstract_body_cell_1 = __webpack_require__(313);
var React = __webpack_require__(2);
var notification_manager_1 = __webpack_require__(125);
var picto_1 = __webpack_require__(318);
var key_codes_1 = __webpack_require__(9);
var template_1 = __webpack_require__(346);
var classNames = __webpack_require__(19);
var logger = hornet_js_utils_1.Utils.getLogger("hornet-js-react-components.widget.table.column.cell.action.edition-action-body-cell");
var EditionActionBodyCell = /** @class */ (function (_super) {
    tslib_1.__extends(EditionActionBodyCell, _super);
    function EditionActionBodyCell(props, context) {
        var _this = _super.call(this, props, context) || this;
        /**
         * clic sur l'icone d'edition
         * @param e
         */
        _this.onClick = function (e) {
            if (_this.buttonsRef.indexOf(e.currentTarget) === 1 && _this.props.messageAlert && _this.props.showAlert) {
                e.stopPropagation();
                _this.props.showAlert(_this.state.messageAlert, _this.state.titleAlert, _this.setItemInEdition);
            }
            else {
                _this.setItemInEdition();
            }
        };
        _this.state.visible = true;
        // gestion du focus sur les boutons save et cancel de la cellule
        _this.state.submitFocused = false;
        if (_this.props.visible) {
            _this.state.visible = _this.props.visible(_this.props.value);
        }
        if (_this.props.messageAlert) {
            _this.state.messageAlert = new template_1.Template(_this.props.messageAlert).process(_this.props.value, _this.props.replaceUndef || "?");
            _this.state.titleAlert = new template_1.Template(_this.props.titleAlert).process(_this.props.value, _this.props.replaceUndef || "?");
        }
        return _this;
    }
    EditionActionBodyCell.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        return _super.prototype.shouldComponentUpdate.call(this, nextProps, nextState) || nextState.isEditing !== this.state.isEditing;
    };
    /**
     * @inheritDoc
     */
    EditionActionBodyCell.prototype.renderCell = function () {
        logger.trace("render EditableActionBodyCell-> column:", this.props.coordinates.column, " - line:", this.props.coordinates.row);
        var classes = {
            "edition-button-action": true
        };
        if (this.state.className) {
            classes[this.state.className] = true;
        }
        // initialisation de la liste de ref  des boutons
        this.buttonsRef = [];
        return (this.state.visible ?
            !this.state.isEditing ? this.renderEditionBoutton(classes) : this.renderSaveCancelBoutton(classes)
            : null);
    };
    /**
     * @inheritDoc
     */
    EditionActionBodyCell.prototype.getCellTitle = function () {
        return "";
    };
    /**
     * Permet de stocker l'item du tableau qui est en cours d'edition
     */
    EditionActionBodyCell.prototype.setItemInEdition = function () {
        // remove tous les messages d'erreur
        notification_manager_1.NotificationManager.cleanAll();
        this.props.contentState.setItemInEdition(this.state.isEditing ? null : this.props.value, this.state.isEditing ? null : this.props.coordinates.row);
    };
    /**
     *
     * @param classes
     * @returns {any}
     */
    EditionActionBodyCell.prototype.renderEditionBoutton = function (classes) {
        return (React.createElement("button", { className: classNames(classes), title: this.i18n(this.state.titleEdit, this.props.value), "aria-label": this.i18n(this.state.titleEdit, this.props.value), type: "button", onClick: this.onClick, tabIndex: -1 },
            React.createElement("img", { src: picto_1.Picto.blue.quickEdit, className: this.state.classNameImg, alt: this.i18n(this.state.titleEdit, this.props.value), tabIndex: -1 })));
    };
    /**
     * Rendu des boutons save et cancel
     * @param classes
     * @returns {any}
     */
    EditionActionBodyCell.prototype.renderSaveCancelBoutton = function (classes) {
        var _this = this;
        return (React.createElement("div", { onKeyDown: this.switchFocus },
            React.createElement("button", { ref: function (elt) {
                    _this.setButtonsRef(elt);
                }, className: classNames(classes), title: this.state.titleSave, "aria-label": this.state.titleSave, type: "submit", tabIndex: -1 },
                React.createElement("img", { src: picto_1.Picto.editable.valider, className: this.state.classNameImg, alt: this.state.titleSave, tabIndex: -1 })),
            React.createElement("button", { ref: function (elt) {
                    _this.setButtonsRef(elt);
                }, className: classNames(classes), title: this.state.titleCancel, "aria-label": this.state.titleCancel, onClick: this.onClick, type: "button", tabIndex: -1 },
                React.createElement("img", { src: picto_1.Picto.editable.annuler, className: this.state.classNameImg, alt: this.state.titleCancel, tabIndex: -1 }))));
    };
    /**
     * permet de stocker les references des boutons de la cellule
     * @param ref
     */
    EditionActionBodyCell.prototype.setButtonsRef = function (ref) {
        if (ref) {
            this.buttonsRef.push(ref);
        }
    };
    /**
     * Permet de switcher le focus entre les deux boutons de la cellule
     * @param e
     */
    EditionActionBodyCell.prototype.switchFocus = function (e) {
        e.stopPropagation();
        var indexBtnSave = 0;
        var indexBtnCancel = 1;
        if (!this.state.isEditing) {
            this.handleKeyDown(e);
        }
        else if (e.keyCode === key_codes_1.KeyCodes.RIGHT_ARROW && this.state.submitFocused) {
            this.buttonsRef[indexBtnCancel].focus();
        }
        else if (e.keyCode === key_codes_1.KeyCodes.LEFT_ARROW && !this.state.submitFocused) {
            this.buttonsRef[indexBtnSave].focus();
        }
        else {
            this.handleKeyDown(e);
        }
        this.setState({ submitFocused: !this.state.submitFocused });
    };
    /**
     * @inheritDoc
     */
    EditionActionBodyCell.prototype.handleCellFocus = function (tableCellRef) {
        if (this.buttonsRef.indexOf(document.activeElement) === -1) {
            if (tableCellRef instanceof HTMLButtonElement) {
                this.setState({ submitFocused: tableCellRef.getAttribute("type") === "submit" });
                tableCellRef.focus();
            }
            else if (tableCellRef && tableCellRef.children) {
                this.handleCellFocus(tableCellRef.children[0]);
            }
        }
    };
    return EditionActionBodyCell;
}(abstract_body_cell_1.AbstractBodyCell));
exports.EditionActionBodyCell = EditionActionBodyCell;



/***/ }),

/***/ 458:
/***/ (function(module, exports, __webpack_require__) {

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
var tslib_1 = __webpack_require__(0);
/**
 * hornet-js-react-components - Ensemble des composants web React de base de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.0
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
var hornet_js_utils_1 = __webpack_require__(1);
var abstract_body_cell_1 = __webpack_require__(313);
var logger = hornet_js_utils_1.Utils.getLogger("hornet-js-react-components.widget.table.column.cell.body-cell");
/**
 * Classe permettant de générer le rendu html d'un cellule du corps d'un tableau
 */
var BodyCell = /** @class */ (function (_super) {
    tslib_1.__extends(BodyCell, _super);
    function BodyCell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    BodyCell.prototype.renderCell = function () {
        logger.trace("render BodyCell -> column:", this.props.coordinates.column, " - line:", this.props.coordinates.row, "- isFocused:", this.state.isFocused, "- tabIndex:", this.state.tabIndex);
        return (this.state.value);
    };
    return BodyCell;
}(abstract_body_cell_1.AbstractBodyCell));
exports.BodyCell = BodyCell;



/***/ }),

/***/ 459:
/***/ (function(module, exports, __webpack_require__) {

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
 * hornet-js-react-components - Ensemble des composants web React de base de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.0
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
/**
 * Coordonnées de cellule de tableau
 */
var CellCoordinates = /** @class */ (function () {
    function CellCoordinates(column, row) {
        this.column = column;
        this.row = row;
    }
    CellCoordinates.prototype.isSame = function (coord) {
        if (coord) {
            if (coord.column == this.column && coord.row == this.row) {
                return true;
            }
        }
        return false;
    };
    return CellCoordinates;
}());
exports.CellCoordinates = CellCoordinates;



/***/ }),

/***/ 460:
/***/ (function(module, exports, __webpack_require__) {

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
var tslib_1 = __webpack_require__(0);
/**
 * hornet-js-react-components - Ensemble des composants web React de base de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.0
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
var hornet_js_utils_1 = __webpack_require__(1);
var array_utils_1 = __webpack_require__(314);
var abstract_body_cell_1 = __webpack_require__(313);
var checkbox_1 = __webpack_require__(319);
var React = __webpack_require__(2);
var logger = hornet_js_utils_1.Utils.getLogger("hornet-js-react-components.widget.table.column.cell.check.check-body-cell");
var CheckBodyCell = /** @class */ (function (_super) {
    tslib_1.__extends(CheckBodyCell, _super);
    function CheckBodyCell(props, context) {
        var _this = _super.call(this, props, context) || this;
        /**
         * Action exécutée sur un click de la checkbox
         * @param e
         */
        _this.handleToggleCheckBox = function (e) {
            _this.props.toggleSelectLines(_this.props.value);
            e.stopPropagation();
        };
        /**
         * mise a jour du state apres selection de la check box
         * @param selectedItems
         */
        _this.handleChange = function (selectedItems) {
            logger.trace("checkbodycell => handlChange", _this.props.cellCoordinate);
            if (_this.checkBoxBodyRef) {
                if (array_utils_1.ArrayUtils.getIndexById(selectedItems, _this.props.value) !== -1) {
                    _this.setState({ isSelected: true });
                }
                else {
                    _this.setState({ isSelected: false });
                }
            }
        };
        _this.props.dataSource.on("select", _this.handleChange);
        return _this;
    }
    /**
     * @inheritDoc
     */
    CheckBodyCell.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        _super.prototype.shouldComponentUpdate.call(this, nextProps, nextState);
        return (true);
    };
    /**
     * @inheritDoc
     */
    CheckBodyCell.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        this.props.dataSource.removeListener("select", this.handleChange);
    };
    /**
     * @inheritDoc
     */
    CheckBodyCell.prototype.renderCell = function () {
        var _this = this;
        logger.trace("render checkBodyCell-> column:", this.props.coordinates.column, " - line:", this.props.coordinates.row);
        var title = this.state.isSelected ? this.props.altUnselect : this.props.altSelect;
        var checkBoxProps = {
            ref: function (instance) {
                _this.checkBoxBodyRef = instance;
            },
            onChange: this.handleToggleCheckBox,
            checked: this.state.isSelected,
            name: "selectedItems-" + this.props.keyColumn,
            tabIndex: -1,
            disabled: this.setDisabled(),
            title: title && this.i18n(title, this.props.value)
        };
        return (React.createElement(checkbox_1.CheckBox, tslib_1.__assign({}, checkBoxProps)));
    };
    /**
     * @inheritDoc
     */
    CheckBodyCell.prototype.setDisabled = function () {
        return this.props.contentState.itemInEdition !== undefined && this.props.contentState.itemInEdition !== null;
    };
    /**
     * @inheritDoc
     */
    CheckBodyCell.prototype.getCellTitle = function () {
        return "";
    };
    /**
     * Override de la méthode blurAction d'AbstractCell
     * retire la tabulation à une cellule que l'on vient de quitter
     * par navigation clavier
     * @param tableCellRef cellule perdant le focus
     */
    CheckBodyCell.prototype.blurActions = function (tableCellRef) {
        // on met le focus sur le premier element HTML de type input
        if (tableCellRef instanceof HTMLInputElement) {
            tableCellRef.tabIndex = -1;
        }
        else if (tableCellRef.children) {
            this.blurActions(tableCellRef.children[0]);
        }
    };
    /**+
     * @inheritDoc
     */
    CheckBodyCell.prototype.handleCellFocus = function (tableCellRef) {
        if (tableCellRef) {
            if (tableCellRef instanceof HTMLInputElement) {
                tableCellRef.focus();
                tableCellRef.tabIndex = 0;
            }
            else if (tableCellRef.children) {
                this.handleCellFocus(tableCellRef.children[0]);
            }
        }
    };
    return CheckBodyCell;
}(abstract_body_cell_1.AbstractBodyCell));
exports.CheckBodyCell = CheckBodyCell;



/***/ }),

/***/ 461:
/***/ (function(module, exports, __webpack_require__) {

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
var tslib_1 = __webpack_require__(0);
/**
 * hornet-js-react-components - Ensemble des composants web React de base de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.0
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
var hornet_js_utils_1 = __webpack_require__(1);
var abstract_header_cell_1 = __webpack_require__(345);
var checkbox_1 = __webpack_require__(319);
var React = __webpack_require__(2);
var array_utils_1 = __webpack_require__(314);
var logger = hornet_js_utils_1.Utils.getLogger("hornet-js-react-components.widget.table.column.cell.check.check-header-cell");
var CheckHeaderCell = /** @class */ (function (_super) {
    tslib_1.__extends(CheckHeaderCell, _super);
    function CheckHeaderCell(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.handleChange = _this.handleChange.bind(_this);
        _this.props.dataSource.on("select", _this.handleChange);
        return _this;
    }
    CheckHeaderCell.prototype.componentWillUnmount = function () {
        _super.prototype.componentWillUnmount.call(this);
        this.props.dataSource.removeListener("select", this.handleChange);
    };
    /**
     * @inheritDoc
     */
    CheckHeaderCell.prototype.renderCell = function () {
        var _this = this;
        logger.trace("render CheckHeaderCell-> column:", this.props.coordinates.column, " - line:", this.props.coordinates.row, "checked =>", this.props.isSelected);
        // todo: rajouter title à la checkbox action de masse
        var functionToggleAll = function (e) {
            _this.props.toggleSelectLines(null, !_this.state.isSelected);
        };
        var title = this.state.isSelected ? "table.deselectedAllTitle" : "table.selectedAllTitle";
        var checkBoxProps = {
            ref: function (instance) {
                _this.checkBoxRef = instance;
            },
            checked: this.state.isSelected,
            onChange: functionToggleAll,
            title: title && this.i18n(title),
            name: "selectedItems-" + this.state.value,
            disabled: this.props.contentState.items.length === 0 || this.props.contentState.itemInEdition
        };
        return (React.createElement(checkbox_1.CheckBox, tslib_1.__assign({}, checkBoxProps)));
    };
    /**
     * Override de la méthode blurAction d'AbstractCell
     * retire la tabulation à une cellule que l'on vient de quitter
     * par navigation clavier
     * @param tableCellRef
     */
    CheckHeaderCell.prototype.blurActions = function (tableCellRef) {
        // on met le focus sur le premier element HTML de type input
        if (tableCellRef instanceof HTMLInputElement) {
            tableCellRef.tabIndex = -1;
        }
        else if (tableCellRef.children) {
            this.blurActions(tableCellRef.children[0]);
        }
    };
    /**+
     * @inheritDoc
     */
    CheckHeaderCell.prototype.handleCellFocus = function (tableCellRef) {
        if (tableCellRef) {
            // on met le focus sur le premier element HTML de type input
            if (tableCellRef instanceof HTMLInputElement) {
                tableCellRef.focus();
                tableCellRef.tabIndex = 0;
            }
            else if (tableCellRef.children) {
                this.handleCellFocus(tableCellRef.children[0]);
            }
        }
    };
    /***
     * Evènement exécuté sur la sélection des cases à cocher
     * @param selectedItems
     * @param all
     */
    CheckHeaderCell.prototype.handleChange = function (selectedItems, all) {
        if (this.checkBoxRef) {
            if (array_utils_1.ArrayUtils.isInclude(this.props.contentState.items, selectedItems)) {
                // this.checkBoxRef.title = this.i18n("table.deselectedAllTitle");
                this.setState({ isSelected: true });
            }
            else {
                // this.checkBoxRef.title = this.i18n("table.selectedAllTitle");
                this.setState({ isSelected: false });
            }
        }
    };
    /**
     * Retourne le tabIndex pour les éléments du tableau
     * Si la colonne est la première on autorise la tabulation
     * exception faite des check column qui ne doivent pas être tabulable
     * au premier container
     * @returns valeur d'index pour tabulation
     */
    CheckHeaderCell.prototype.getTabIndexFullKind = function () {
        return -1;
    };
    return CheckHeaderCell;
}(abstract_header_cell_1.AbstractHeaderCell));
exports.CheckHeaderCell = CheckHeaderCell;



/***/ }),

/***/ 462:
/***/ (function(module, exports, __webpack_require__) {

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
var tslib_1 = __webpack_require__(0);
/**
 * hornet-js-react-components - Ensemble des composants web React de base de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.0
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
var hornet_js_utils_1 = __webpack_require__(1);
var abstract_body_cell_1 = __webpack_require__(313);
var moment = __webpack_require__(10);
var logger = hornet_js_utils_1.Utils.getLogger("hornet-js-react-components.widget.table.column.cell.date.date-body-cell");
var DateBodyCell = /** @class */ (function (_super) {
    tslib_1.__extends(DateBodyCell, _super);
    function DateBodyCell(props, context) {
        var _this = _super.call(this, props, context) || this;
        if (_this.state.value) {
            if (_this.state.value instanceof Date || _this.state.value instanceof Number) {
                _this.state.value = _this.state.value;
            }
            else if (!isNaN(_this.state.value) && isFinite(_this.state.value)) {
                _this.state.value = Number(_this.state.value); // nombre de milliseconds
            }
            else if (props.inputFormat) {
                var mom = moment(_this.state.value, props.inputFormat, true);
                if (mom.isValid()) {
                    _this.state.value = mom.toDate(); // nombre de milliseconds
                }
            }
            else {
                logger.error("Format date not supported ", _this.props.keyColumn, " - line:", _this.props.coordinates.row);
                _this.state.value = undefined;
            }
        }
        return _this;
    }
    /**
     * @inheritDoc
     */
    DateBodyCell.prototype.renderCell = function () {
        logger.trace("render DateBodyCell-> column:", this.props.coordinates.column, " - line:", this.props.coordinates.row);
        return (!this.state.value ? "" :
            hornet_js_utils_1.Utils.dateUtils.formatInTZ(this.state.value, this.props.format || this.i18n("calendar.dateFormat"), hornet_js_utils_1.Utils.dateUtils.TZ_EUROPE_PARIS));
    };
    return DateBodyCell;
}(abstract_body_cell_1.AbstractBodyCell));
exports.DateBodyCell = DateBodyCell;



/***/ }),

/***/ 463:
/***/ (function(module, exports, __webpack_require__) {

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
var tslib_1 = __webpack_require__(0);
/**
 * hornet-js-react-components - Ensemble des composants web React de base de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.0
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
var hornet_js_utils_1 = __webpack_require__(1);
var React = __webpack_require__(2);
var abstract_header_cell_1 = __webpack_require__(345);
var key_codes_1 = __webpack_require__(9);
var sort_data_1 = __webpack_require__(316);
var classNames = __webpack_require__(19);
var logger = hornet_js_utils_1.Utils.getLogger("hornet-js-react-components.widget.table.column.cell.header-cell");
/**
 * Classe Permettant de générer le rendu html d'un cellule d'entête de tableau
 */
var HeaderCell = /** @class */ (function (_super) {
    tslib_1.__extends(HeaderCell, _super);
    function HeaderCell(props, context) {
        return _super.call(this, props, context) || this;
    }
    /**
     * @inheritDoc
     */
    HeaderCell.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        return _super.prototype.shouldComponentUpdate.call(this, nextProps, nextState) || nextState.isFocused === this.state.isFocused;
    };
    /**
     * @inheritDoc
     */
    HeaderCell.prototype.renderCell = function () {
        logger.trace("render HeaderCell -> column:", this.props.coordinates.column, " - line:", this.props.coordinates.row);
        // Gestion du titre de l'entête
        var isTriActifSurColonne = this.isSortedColumn(this.props.sortData);
        var urlImgArrow = "/img/tableau/ic_arrow_upward_black.svg";
        var imgClassName = { "arrow-sort": true };
        if (this.state.sortData && this.state.sortData.dir == sort_data_1.SortDirection.DESC) {
            urlImgArrow = "/img/tableau/ic_arrow_downward_black.svg";
        }
        var title = this.handleSortTitle(this.isSortedColumn(this.props.sortData), "none").title;
        var titleDesc = isTriActifSurColonne && this.state.edition ?
            React.createElement("div", null,
                this.props.title,
                React.createElement("img", { src: HeaderCell.genUrlTheme(urlImgArrow), className: classNames(imgClassName), alt: title })) : React.createElement("div", null, this.props.title);
        if (this.props.sortable && !this.props.contentState.itemInEdition) {
            titleDesc = this.getColumnTriComponent();
        }
        return (titleDesc);
    };
    /**
     * Rendu HTML d'une entête de colonne de tableau
     */
    HeaderCell.prototype.getColumnTriComponent = function () {
        var _this = this;
        logger.trace("getColumnTriComponent");
        var sort = this.props.sortData;
        /*let sortType: SortType = (this.state.sort as SortData).type || this.state.sort as SortType || DEFAULT_SORT_TYPE;*/
        var sortKey = (sort && sort.key) || this.props.keyColumn;
        /* Calcul du sens prochain sens de tri */
        var nextSortDir = sort_data_1.SortDirection.ASC, columnNameToSort = (sort && sort.key) || null, columnSortByKey = this.state.sort && (this.state.sort.key) || null;
        if (columnNameToSort && (columnNameToSort == this.props.keyColumn || columnNameToSort == columnSortByKey)) {
            logger.trace("sens de tri courant :", sort.dir);
            nextSortDir = (sort.dir == sort_data_1.SortDirection.ASC) ? sort_data_1.SortDirection.DESC : sort_data_1.SortDirection.ASC;
            logger.trace("prochain sens de tri :", nextSortDir);
        }
        /* Données de tri à appliquer au prochain clic sur cette colonne */
        var nextTableSort = {
            key: sortKey,
            dir: nextSortDir /*,
             type: sortType*/
        };
        var functionOnSortData = function (e) {
            _this.state.onSort(nextTableSort);
        };
        var handleOnKeyDown = function (e) {
            /* Le composant a le comportement d'un bouton : il doit prendre en compte les touches Entrée OU Espace
             * (cf. https://www.w3.org/TR/wai-aria-practices/#button > "Keyboard Interaction")  */
            if (e.keyCode == key_codes_1.KeyCodes.SPACEBAR || e.keyCode == key_codes_1.KeyCodes.ENTER) {
                _this.state.onSort(nextTableSort);
            }
        };
        if (this.state.abbr && !this.state.lang) {
            logger.warn("Column ", this.props.keyColumn, " Must have lang with abbr configuration");
        }
        var urlImgArrow = "/img/tableau/ic_arrow_upward_black.svg";
        var imgClassName = { "arrow-sort": true };
        if (this.state.sortData && this.state.sortData.dir == sort_data_1.SortDirection.DESC) {
            urlImgArrow = "/img/tableau/ic_arrow_downward_black.svg";
        }
        var title = this.handleSortTitle(this.isSortedColumn(this.props.sortData), "none").title;
        return (React.createElement("div", { className: "datatable-header-sort-liner", role: "button", lang: this.state.lang, onClick: functionOnSortData, onKeyDown: handleOnKeyDown, tabIndex: -1 }, !this.state.edition ?
            React.createElement("div", null,
                React.createElement("a", { href: "#", className: "arrow-sort-container", tabIndex: -1 }, (this.state.abbr) ?
                    React.createElement("abbr", { lang: this.state.lang, title: this.state.abbr }, this.state.title) : this.state.title),
                React.createElement("img", { src: HeaderCell.genUrlTheme(urlImgArrow), className: classNames(imgClassName), alt: title, tabIndex: -1 }))
            :
                React.createElement("div", null, (this.state.abbr) ?
                    React.createElement("abbr", { lang: this.state.lang, title: this.state.abbr }, this.state.title) : this.state.title)));
    };
    HeaderCell.defaultProps = {
        sort: false
    };
    return HeaderCell;
}(abstract_header_cell_1.AbstractHeaderCell));
exports.HeaderCell = HeaderCell;



/***/ }),

/***/ 464:
/***/ (function(module, exports, __webpack_require__) {

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
var tslib_1 = __webpack_require__(0);
/**
 * hornet-js-react-components - Ensemble des composants web React de base de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.0
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
var hornet_js_utils_1 = __webpack_require__(1);
var abstract_body_cell_1 = __webpack_require__(313);
var React = __webpack_require__(2);
var input_field_1 = __webpack_require__(344);
var logger = hornet_js_utils_1.Utils.getLogger("hornet-js-react-components.widget.table.input-text-in-line-body-cell");
var InputTextInLineBodyCell = /** @class */ (function (_super) {
    tslib_1.__extends(InputTextInLineBodyCell, _super);
    function InputTextInLineBodyCell(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.state.value = props.value[props.keyColumn];
        return _this;
    }
    InputTextInLineBodyCell.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        return _super.prototype.shouldComponentUpdate.call(this, nextProps, nextState) || nextState.isEditing !== this.state.isEditing;
    };
    /**
     * @inheritDoc
     */
    InputTextInLineBodyCell.prototype.renderCell = function () {
        logger.trace("render InputTextBodyCell-> column:", this.props.coordinates.column, " - line:", this.props.coordinates.row);
        var inputTextProps = {
            name: this.state.keyColumn,
            hideError: true,
            className: "table-cell-input",
            groupClass: "table-cell-container",
            type: "text",
            currentValue: this.state.value,
            title: this.state.title
        };
        return (!this.state.isEditing ?
            this.state.value : React.createElement(input_field_1.InputField, tslib_1.__assign({}, inputTextProps)));
    };
    /**
     * @inheritDoc
     */
    InputTextInLineBodyCell.prototype.getCellTitle = function () {
        return !this.state.isEditing ? this.state.value : "";
    };
    /**
     * @inheritDoc
     */
    InputTextInLineBodyCell.prototype.handleCellFocus = function (tableCellRef) {
        if (tableCellRef) {
            //lorsque la cellule n'est en cours d'edition, on met le focus sur toute la div
            if (!this.state.isEditing) {
                tableCellRef.focus();
            }
            else if (tableCellRef instanceof HTMLInputElement) {
                tableCellRef.focus();
            }
            else if (tableCellRef.children) {
                this.handleCellFocus(tableCellRef.children[0]);
            }
        }
    };
    return InputTextInLineBodyCell;
}(abstract_body_cell_1.AbstractBodyCell));
exports.InputTextInLineBodyCell = InputTextInLineBodyCell;



/***/ }),

/***/ 465:
/***/ (function(module, exports, __webpack_require__) {

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
var tslib_1 = __webpack_require__(0);
var line_1 = __webpack_require__(371);
/**
 * Classe permettant de générer le rendu html d'ajout de ligne après
 */
var LineBefore = /** @class */ (function (_super) {
    tslib_1.__extends(LineBefore, _super);
    function LineBefore() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LineBefore;
}(line_1.Line));
exports.LineBefore = LineBefore;



/***/ }),

/***/ 466:
/***/ (function(module, exports, __webpack_require__) {

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
var tslib_1 = __webpack_require__(0);
/**
 * hornet-js-react-components - Ensemble des composants web React de base de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.0
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
var React = __webpack_require__(2);
var spinner_component_1 = __webpack_require__(128);
var content_1 = __webpack_require__(320);
var classNames = __webpack_require__(19);
/**
 * Composant représentant un tableau en cours de chargement
 * dans une fenêtre modale en attendant la fin d'une action longue.
 */
var SpinnerLoader = /** @class */ (function (_super) {
    tslib_1.__extends(SpinnerLoader, _super);
    function SpinnerLoader(props, context) {
        return _super.call(this, props, context) || this;
    }
    /**
     * @inheritDoc
     */
    SpinnerLoader.prototype.render = function () {
        var classDiv = {
            "datatable-loader": this.state.isVisible && this.count > 0,
            "datatable-loaded": !this.state.isVisible
        };
        var classTr = {
            "datatable-line-loader": true
        };
        classTr[this.props["className"] + "-line-loader"] = true;
        classTr[this.props["className"] + "-tr-with-colspan"] = true;
        return (React.createElement("tr", { className: classNames(classTr) },
            React.createElement("th", { colSpan: this.state["nbColumns"], style: { width: this.props["width"] + content_1.UNIT_SIZE } },
                React.createElement("div", { className: classNames(classDiv) }))));
    };
    return SpinnerLoader;
}(spinner_component_1.SpinnerComponent));
exports.SpinnerLoader = SpinnerLoader;
var SpinnerOverlay = /** @class */ (function (_super) {
    tslib_1.__extends(SpinnerOverlay, _super);
    function SpinnerOverlay(props, context) {
        return _super.call(this, props, context) || this;
    }
    /**
     * @inheritDoc
     */
    SpinnerOverlay.prototype.render = function () {
        var props = {};
        if (this.state.isVisible && this.count > 0) {
            props = {
                className: classNames({ "datatable-overlay": this.state.isVisible && this.count > 0 })
            };
        }
        return (React.createElement("div", tslib_1.__assign({}, props)));
    };
    return SpinnerOverlay;
}(spinner_component_1.SpinnerComponent));
exports.SpinnerOverlay = SpinnerOverlay;



/***/ }),

/***/ 467:
/***/ (function(module, exports, __webpack_require__) {

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
var tslib_1 = __webpack_require__(0);
/**
 * hornet-js-react-components - Ensemble des composants web React de base de hornet-js
 *
 * @author MEAE - Ministère de l'Europe et des Affaires étrangères
 * @version v5.1.0
 * @link git+https://github.com/diplomatiegouvfr/hornet-js.git
 * @license CECILL-2.1
 */
var button_info_accessibilite_1 = __webpack_require__(132);
/**
 * Bouton et modale d'information sur l'accessibilité clavier du composant Table
 */
var TableButtonInfoAccessibilite = /** @class */ (function (_super) {
    tslib_1.__extends(TableButtonInfoAccessibilite, _super);
    function TableButtonInfoAccessibilite() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TableButtonInfoAccessibilite.defaultProps = {
        message: TableButtonInfoAccessibilite.getI18n("table"),
        shortcutDescriptions: [
            {
                shortcuts: ["←", "↑", "→", "↓"],
                description: TableButtonInfoAccessibilite.getI18n("table.shortcuts.navigation"),
                or: true
            },
            {
                shortcuts: ["⇞"],
                and: true,
                description: TableButtonInfoAccessibilite.getI18n("table.shortcuts.firstLine")
            },
            {
                shortcuts: ["⇟"],
                description: TableButtonInfoAccessibilite.getI18n("table.shortcuts.lastLine"),
                or: true
            },
            {
                shortcuts: ["↖"],
                description: TableButtonInfoAccessibilite.getI18n("table.shortcuts.lineBeginning")
            },
            {
                shortcuts: ["Fin"],
                description: TableButtonInfoAccessibilite.getI18n("table.shortcuts.lineEnd")
            },
            {
                shortcuts: ["Ctrl", "A"],
                and: true,
                description: TableButtonInfoAccessibilite.getI18n("table.shortcuts.selectAll")
            },
            {
                shortcuts: ["Shift", "Space"],
                and: true,
                description: TableButtonInfoAccessibilite.getI18n("table.shortcuts.selectCurrentLine")
            },
            {
                shortcuts: ["Enter", "F2"],
                or: true,
                description: TableButtonInfoAccessibilite.getI18n("table.shortcuts.toggleMode")
            },
            {
                shortcuts: ["Echap"],
                and: true,
                description: TableButtonInfoAccessibilite.getI18n("table.shortcuts.escape")
            }
        ]
    };
    return TableButtonInfoAccessibilite;
}(button_info_accessibilite_1.ButtonInfoAccessibilite));
exports.TableButtonInfoAccessibilite = TableButtonInfoAccessibilite;



/***/ }),

/***/ 697:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var hornet_js_utils_1 = __webpack_require__(1);
var React = __webpack_require__(2);
var hornet_page_1 = __webpack_require__(12);
var table_1 = __webpack_require__(374);
var column_1 = __webpack_require__(315);
var date_column_1 = __webpack_require__(447);
var datasource_1 = __webpack_require__(325);
var datasource_config_page_1 = __webpack_require__(348);
var logger = hornet_js_utils_1.Utils.getLogger("applitutoriel.views.pro.pro-lst-page");
var ListeProduitsPage = /** @class */ (function (_super) {
    tslib_1.__extends(ListeProduitsPage, _super);
    function ListeProduitsPage(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.state.data = [];
        _this.dataSource = new datasource_1.DataSource(new datasource_config_page_1.DataSourceConfigPage(_this, _this.getService().lister), {});
        return _this;
    }
    ListeProduitsPage.prototype.prepareClient = function () {
        this.dataSource.fetch(true);
    };
    ListeProduitsPage.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("h2", null, "Liste des Secteurs"),
            React.createElement(table_1.Table, { id: "liste-produit" },
                React.createElement(column_1.Column, { keyColumn: "desc", title: "Description", sortable: true }),
                React.createElement(column_1.Column, { keyColumn: "auteurMajEnreg", title: "Utilisateur", sortable: true }),
                React.createElement(date_column_1.DateColumn, { keyColumn: "dateMajEnreg", title: "Date de modification", sortable: true }))));
    };
    return ListeProduitsPage;
}(hornet_page_1.HornetPage));
exports.ListeProduitsPage = ListeProduitsPage;



/***/ })

});
//# sourceMappingURL=3.js.map