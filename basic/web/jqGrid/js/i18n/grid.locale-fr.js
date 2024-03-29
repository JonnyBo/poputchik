/**
 * @license jqGrid French Translation
 * Tony Tomov tony@trirand.com with changes by Laurent Rajchenbach.
 * http://trirand.com/blog/
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/

/*jslint white: true */
/*global jQuery */
(function (factory) {
	"use strict";
	if (typeof define === "function" && define.amd) {
		// AMD. Register as an anonymous module.
		define(["jquery"], factory);
	} else if (typeof exports === "object") {
		// Node/CommonJS
		factory(require("jquery"));
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($) {
"use strict";
var locInfo = {
	isRTL: false,
	defaults: {
		recordtext: "Enregistrements {0} - {1} sur {2}",
		emptyrecords: "Aucun enregistrement Г  afficher",
		loadtext: "Chargement...",
		pgtext: "Page {0} sur {1}",
		pgfirst: "PremiГЁre Page",
		pglast: "DerniГЁre Page",
		pgnext: "Page Suivante",
		pgprev: "Page PrГ©cГ©dente",
		pgrecs: "Enregistrements par page",
		showhide: "Afficher/Masquer le tableau",
		savetext: "Enregistrement..."
	},
	search: {
		caption: "Recherche...",
		Find: "Chercher",
		Reset: "RГ©initialiser",
		odata: [
			{ oper: "eq", text: "Г©gal" },
			{ oper: "ne", text: "diffГ©rent" },
			{ oper: "lt", text: "infГ©rieur" },
			{ oper: "le", text: "infГ©rieur ou Г©gal" },
			{ oper: "gt", text: "supГ©rieur" },
			{ oper: "ge", text: "supГ©rieur ou Г©gal" },
			{ oper: "bw", text: "commence par" },
			{ oper: "bn", text: "ne commence pas par" },
			{ oper: "in", text: "est dans" },
			{ oper: "ni", text: "n'est pas dans" },
			{ oper: "ew", text: "finit par" },
			{ oper: "en", text: "ne finit pas par" },
			{ oper: "cn", text: "contient" },
			{ oper: "nc", text: "ne contient pas" },
			{ oper: "nu", text: "est null" },
			{ oper: "nn", text: "n'est pas null" }
		],
		groupOps: [
			{ op: "AND", text: "tous" },
			{ op: "OR",  text: "au moins un" }
		],
		addGroupTitle: "Add subgroup",
		deleteGroupTitle: "Delete group",
		addRuleTitle: "Add rule",
		deleteRuleTitle: "Delete rule",
		operandTitle: "Cliquer pour sГ©lectionner l'opГ©rateur de recherche.",
		resetTitle: "Vider la valeur de recherche"
	},
	edit: {
		addCaption: "Ajouter",
		editCaption: "Editer",
		bSubmit: "Valider",
		bCancel: "Annuler",
		bClose: "Fermer",
		saveData: "Les donnГ©es ont changГ© ! Enregistrer les modifications ?",
		bYes: "Oui",
		bNo: "Non",
		bExit: "Annuler",
		msg: {
			required: "Champ obligatoire",
			number: "Saisissez un nombre correct",
			minValue: "La valeur doit ГЄtre supГ©rieure ou Г©gale Г ",
			maxValue: "La valeur doit ГЄtre infГ©rieure ou Г©gale Г ",
			email: "n'est pas un email correct",
			integer: "Saisissez un entier correct",
			url: "n'est pas une adresse correcte. PrГ©fixe requis ('http://' or 'https://')",
			nodefined: " n'est pas dГ©fini!",
			novalue: " la valeur de retour est requise!",
			customarray: "Une fonction personnalisГ©e devrait retourner un tableau (array)!",
			customfcheck: "Une fonction personnalisГ©e devrait ГЄtre prГ©sente dans le cas d'une vГ©rification personnalisГ©e!"
		}
	},
	view: {
		caption: "Voir les enregistrement",
		bClose: "Fermer"
	},
	del: {
		caption: "Supprimer",
		msg: "Supprimer les enregistrements sГ©lectionnГ©s ?",
		bSubmit: "Supprimer",
		bCancel: "Annuler"
	},
	nav: {
		edittext: "",
		edittitle: "Editer la ligne sГ©lectionnГ©e",
		addtext: "",
		addtitle: "Ajouter une ligne",
		deltext: "",
		deltitle: "Supprimer la ligne sГ©lectionnГ©e",
		searchtext: "",
		searchtitle: "Chercher un enregistrement",
		refreshtext: "",
		refreshtitle: "Recharger le tableau",
		alertcap: "Avertissement",
		alerttext: "Veuillez sГ©lectionner une ligne",
		viewtext: "",
		viewtitle: "Afficher la ligne sГ©lectionnГ©e",
		savetext: "",
		savetitle: "Save row",
		canceltext: "",
		canceltitle: "Cancel row editing"
	},
	col: {
		caption: "Afficher/Masquer les colonnes",
		bSubmit: "Valider",
		bCancel: "Annuler"
	},
	errors: {
		errcap: "Erreur",
		nourl: "Aucune adresse n'est paramГ©trГ©e",
		norecords: "Aucun enregistrement Г  traiter",
		model: "Nombre de titres (colNames) <> Nombre de donnГ©es (colModel)!"
	},
	formatter: {
		integer: { thousandsSeparator: " ", defaultValue: "0" },
		number: { decimalSeparator: ",", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: "0,00" },
		currency: { decimalSeparator: ",", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix: "", defaultValue: "0,00" },
		date: {
			dayNames: [
				"Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam",
				"Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"
			],
			monthNames: [
				"Jan", "FГ©v", "Mar", "Avr", "Mai", "Jui", "Jul", "Aou", "Sep", "Oct", "Nov", "DГ©c",
				"Janvier", "FГ©vrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "DГ©cembre"
			],
			AmPm: ["am", "pm", "AM", "PM"],
			S: function (j) {
				return j === 1 ? "er" : "e";
			},
			srcformat: "Y-m-d",
			newformat: "d/m/Y",
			masks: {
				ShortDate: "j/n/Y",
				LongDate: "l j n F Y",
				FullDateTime: "l j n F Y H:i:s",
				MonthDay: "j F",
				ShortTime: "H:i",
				LongTime: "H:i:s",
				YearMonth: "F Y"
			}
		}
	}
};
$.jgrid = $.jgrid || {};
$.extend(true, $.jgrid, {
	defaults: {
		locale: "fr-FR"
	},
	locales: {
		// In general the property name is free, but it's recommended to use the names based on
		// http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
		// http://rishida.net/utils/subtags/ and RFC 5646. See Appendix A of RFC 5646 for examples.
		// One can use the lang attribute to specify language tags in HTML, and the xml:lang attribute for XML
		// if it exists. See http://www.w3.org/International/articles/language-tags/#extlang
		fr: $.extend({}, locInfo, { name: "franГ§ais", nameEnglish: "French" }),
		"fr-FR": $.extend({}, locInfo, { name: "franГ§ais (France)", nameEnglish: "French (France)" })
	}
});
}));
