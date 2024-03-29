/**
 * @license jqGrid Danish Translation
 * Aesiras A/S
 * http://www.aesiras.dk
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
		recordtext: "Vis {0} - {1} of {2}",
		emptyrecords: "Ingen linjer fundet",
		loadtext: "Henter...",
		pgtext: "Side {0} af {1}",
		pgfirst: "First Page",
		pglast: "Last Page",
		pgnext: "Next Page",
		pgprev: "Previous Page",
		pgrecs: "Records per Page",
		showhide: "Toggle Expand Collapse Grid",
		savetext: "Gemmer..."
	},
	search: {
		caption: "SГёg...",
		Find: "Find",
		Reset: "Nulstil",
		odata: [
			{ oper: "eq", text: "lig" },
			{ oper: "ne", text: "forskellige fra" },
			{ oper: "lt", text: "mindre" },
			{ oper: "le", text: "mindre eller lig" },
			{ oper: "gt", text: "stГёrre" },
			{ oper: "ge", text: "stГёrre eller lig" },
			{ oper: "bw", text: "begynder med" },
			{ oper: "bn", text: "begynder ikke med" },
			{ oper: "in", text: "findes i" },
			{ oper: "ni", text: "findes ikke i" },
			{ oper: "ew", text: "ender med" },
			{ oper: "en", text: "ender ikke med" },
			{ oper: "cn", text: "indeholder" },
			{ oper: "nc", text: "indeholder ikke" },
			{ oper: "nu", text: "is null" },
			{ oper: "nn", text: "is not null" }
		],
		groupOps: [
			{ op: "AND", text: "all" },
			{ op: "OR",  text: "any" }
		],
		addGroupTitle: "Add subgroup",
		deleteGroupTitle: "Delete group",
		addRuleTitle: "Add rule",
		deleteRuleTitle: "Delete rule",
		operandTitle: "Click to select search operation.",
		resetTitle: "Reset Search Value"
	},
	edit: {
		addCaption: "TilfГёj",
		editCaption: "Ret",
		bSubmit: "Send",
		bCancel: "Annuller",
		bClose: "Luk",
		saveData: "Data er Г¦ndret. Gem data?",
		bYes: "Ja",
		bNo: "Nej",
		bExit: "Fortryd",
		msg: {
			required: "Felt er nГёdvendigt",
			number: "Indtast venligst et validt tal",
			minValue: "vГ¦rdi skal vГ¦re stГёrre end eller lig med",
			maxValue: "vГ¦rdi skal vГ¦re mindre end eller lig med",
			email: "er ikke en gyldig email",
			integer: "Indtast venligst et gyldigt heltal",
			date: "Indtast venligst en gyldig datovГ¦rdi",
			url: "er ugyldig URL. Prefix mangler ('http://' or 'https://')",
			nodefined: " er ikke defineret!",
			novalue: " returvГ¦rdi krГ¦ves!",
			customarray: "Custom function should return array!",
			customfcheck: "Custom function should be present in case of custom checking!"
		}
	},
	view: {
		caption: "Vis linje",
		bClose: "Luk"
	},
	del: {
		caption: "Slet",
		msg: "Slet valgte linje(r)?",
		bSubmit: "Slet",
		bCancel: "Fortryd"
	},
	nav: {
		edittext: "",
		edittitle: "Rediger valgte linje",
		addtext: "",
		addtitle: "TilfГёj ny linje",
		deltext: "",
		deltitle: "Slet valgte linje",
		searchtext: "",
		searchtitle: "Find linjer",
		refreshtext: "",
		refreshtitle: "IndlГ¦s igen",
		alertcap: "Advarsel",
		alerttext: "VГ¦lg venligst linje",
		viewtext: "",
		viewtitle: "Vis valgte linje",
		savetext: "",
		savetitle: "Save row",
		canceltext: "",
		canceltitle: "Cancel row editing"
	},
	col: {
		caption: "Vis/skjul kolonner",
		bSubmit: "Opdatere",
		bCancel: "Fortryd"
	},
	errors: {
		errcap: "Fejl",
		nourl: "Ingen url valgt",
		norecords: "Ingen linjer at behandle",
		model: "colNames og colModel har ikke samme lГ¦ngde!"
	},
	formatter: {
		integer: { thousandsSeparator: " ", defaultValue: "0" },
		number: { decimalSeparator: ",", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: "0,00" },
		currency: { decimalSeparator: ",", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix: "", defaultValue: "0,00" },
		date: {
			dayNames:   [
				"SГёn", "Man", "Tir", "Ons", "Tor", "Fre", "LГёr",
				"SГёndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "LГёrdag"
			],
			monthNames: [
				"Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec",
				"Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"
			],
			AmPm: ["", "", "", ""],
			S: function () {return ".";},
			srcformat: "Y-m-d",
			newformat: "d/m/Y",
			masks: {
				ShortDate: "j/n/Y",
				LongDate: "l d. F Y",
				FullDateTime: "l d F Y G:i:s",
				MonthDay: "d. F",
				ShortTime: "G:i",
				LongTime: "G:i:s",
				YearMonth: "F Y"
			}
		}
	}
};
$.jgrid = $.jgrid || {};
$.extend(true, $.jgrid, {
	defaults: {
		locale: "da"
	},
	locales: {
		// In general the property name is free, but it's recommended to use the names based on
		// http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
		// http://rishida.net/utils/subtags/ and RFC 5646. See Appendix A of RFC 5646 for examples.
		// One can use the lang attribute to specify language tags in HTML, and the xml:lang attribute for XML
		// if it exists. See http://www.w3.org/International/articles/language-tags/#extlang
		da: $.extend({}, locInfo, { name: "dansk", nameEnglish: "Danish" }),
		dk: $.extend({}, locInfo, { name: "dansk", nameEnglish: "Danish" })
	}
});
}));
