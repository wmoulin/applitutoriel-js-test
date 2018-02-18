"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Constantes liées à l'utilisateur
 */
exports.URL_UTILISATEURS = "/utilisateurs";
exports.URL_UTILISATEURS_AUTH = "/auth";
/**
 * Constantes liées au référentiel
 */
exports.URL_REF = "/referentiel";
exports.URL_PAYS = "/pays";
exports.URL_REF_NATIONALITE = "/nationalites";
exports.URL_REF_NATIONALITE_PAYS = exports.URL_REF_NATIONALITE + exports.URL_PAYS;
exports.URL_REF_VILLES = "/villes";
exports.URL_REF_VILLES_PAYS = exports.URL_REF_VILLES + "/pays";
// Constantes liées aux écrans Partenaires
/** Préfixe des actions relatives aux partenaires */
exports.URL_PARTENAIRES = "/partenaires";
/** Recherche de partenaires répondant à des critères donnés */
exports.URL_PAR_RECHERCHE = "/recherche";
/** Recherche de partenaires répondant à des critères donnés */
exports.URL_PAR_RECHERCHER = "/rechercher";
/** Création d'un nouveau partenaire */
exports.URL_PAR_CREER = "/creer";
/** Consulation d'une fiche partenaire */
exports.URL_PAR_CONSULTER = "/consulter";
/** Modification d'une fiche partenaire */
exports.URL_PAR_EDITER = "/editer";
/** Export des partenaire trouvés dans un format donné */
exports.URL_PAR_EXPORTER = "/export";
/** Export des partenaires trouvés dans un format open file document */
exports.URL_PAR_EXPORTER_OFD = "/exportopenfiledocument";
/** Sauvegarde du partenaire créé ou modifié */
exports.URL_PAR_SAUVEGARDER = "/sauvegarder";
/** Suppression d'un partenaire */
exports.URL_PAR_SUPPRIMER = "/supprimer";
/** Suppression de plusieurs partenaires */
exports.URL_PAR_SUPPRESSION_MASSE = "/suppression";
/** Consultation de photo rattachée à un partenaire */
exports.URL_PAR_PHOTO = "/photo";
/**
 * Constantes liées aux écrans Secteurs
 */
exports.URL_SECTEURS = "/secteurs";
exports.URL_SECTEURS_SUPPRIMER = "/supprimer";
exports.URL_SECTEURS_ADM_LST = "/adm_lst";
exports.URL_SECTEURS_CREER = "/creer";
exports.URL_SECTEURS_SAUVEGARDER = "/sauvegarder";
/**
 * Constantes Liées aux produits
 */
exports.URL_PRODUITS = "/produits";
/** Consulation d'une fiche produit */
exports.URL_PRO_CONSULTER = "/consulter";
/**
 * Constantes Liées aux produits
 */
exports.URL_REPARTITIONS = "/repartitions";
/**
 * Constantes Liées à la page Contact
 */
exports.URL_CONTACT = "/contact";
exports.URL_CONTACT_ENVOYER = "/email";
/** Préfixe generique */
exports.URL_RECHERCHE = "/recherche";

//# sourceMappingURL=urls.js.map
