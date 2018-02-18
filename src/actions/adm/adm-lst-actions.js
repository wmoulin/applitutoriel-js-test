"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hornet_js_utils_1 = require("hornet-js-utils");
var abstract_routes_1 = require("hornet-js-core/src/routes/abstract-routes");
var logger = hornet_js_utils_1.Utils.getLogger("applitutoriel.actions.adm.adm-lst-actions");
var ListerSecteurs = /** @class */ (function (_super) {
    tslib_1.__extends(ListerSecteurs, _super);
    function ListerSecteurs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ListerSecteurs.prototype.execute = function () {
        logger.trace("ACTION ListerSecteurs - Appel API : SecteurApi.lister - Dispatch SECTEUR_RECEIVE_LIST");
        return this.getService().lister();
    };
    return ListerSecteurs;
}(abstract_routes_1.RouteActionService));
exports.ListerSecteurs = ListerSecteurs;
var SupprimerSecteur = /** @class */ (function (_super) {
    tslib_1.__extends(SupprimerSecteur, _super);
    function SupprimerSecteur() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SupprimerSecteur.prototype.execute = function () {
        logger.trace("ACTION SupprimerSecteur - Appel API : SecteurApi.supprimer - Dispatch SECTEUR_DELETED");
        return this.getService().supprimer(this.attributes.id);
    };
    return SupprimerSecteur;
}(abstract_routes_1.RouteActionService));
exports.SupprimerSecteur = SupprimerSecteur;
var ModifierSecteur = /** @class */ (function (_super) {
    tslib_1.__extends(ModifierSecteur, _super);
    function ModifierSecteur() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ModifierSecteur.prototype.execute = function () {
        logger.trace("ACTION ModifierSecteur - Appel API : SecteurApi.modifier - Dispatch SECTEUR_UPDATED");
        return this.getService().modifier(this.attributes.id, this.req.body);
    };
    return ModifierSecteur;
}(abstract_routes_1.RouteActionService));
exports.ModifierSecteur = ModifierSecteur;
var CreerSecteur = /** @class */ (function (_super) {
    tslib_1.__extends(CreerSecteur, _super);
    function CreerSecteur() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CreerSecteur.prototype.execute = function () {
        logger.trace("ACTION CreerSecteur - Appel API : SecteurApi.creer - Dispatch SECTEUR_CREATED");
        return this.getService().creer(this.req.body);
    };
    return CreerSecteur;
}(abstract_routes_1.RouteActionService));
exports.CreerSecteur = CreerSecteur;

//# sourceMappingURL=adm-lst-actions.js.map
