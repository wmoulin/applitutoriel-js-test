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

//# sourceMappingURL=roles.js.map
