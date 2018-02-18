"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var hornet_js_utils_1 = require("hornet-js-utils");
var hornet_superagent_1 = require("hornet-js-core/src/services/hornet-superagent");
var superAgentPlugins = require("hornet-js-core/src/services/superagent-hornet-plugins");
var logger = hornet_js_utils_1.Utils.getLogger("applitutoriel-js.services.applitutoriel.applitutoriel-agent");
/**
 * Exemple de surcharge de la classe HornetAgent fournie par le framework afin d'ajouter les roles de l'utilisateur
 */
var ApplitutorielAgent = /** @class */ (function (_super) {
    tslib_1.__extends(ApplitutorielAgent, _super);
    function ApplitutorielAgent(user) {
        var _this = _super.call(this) || this;
        _this.currentUser = user;
        var roles = (_this.currentUser) ? JSON.stringify(_this.currentUser.roles) : "";
        logger.trace("Roles ajoutés à la requête : ", roles);
        _this.plugins.addBefore(new hornet_superagent_1.HornetPluginConfig("applitutoRoles", superAgentPlugins.AddParam, ["role", roles]), _this.plugins[0]);
        return _this;
    }
    return ApplitutorielAgent;
}(hornet_superagent_1.HornetSuperAgent));
exports.ApplitutorielAgent = ApplitutorielAgent;

//# sourceMappingURL=applitutoriel-agent.js.map
