/**
 * @license jqGrid Romanian Translation
 * Alexandru Emil Lupu contact@alecslupu.ro
 * http://www.alecslupu.ro/
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
		recordtext: "Vizualizare {0} - {1} din {2}",
		emptyrecords: "Nu existДѓ Г®nregistrДѓri de vizualizat",
		loadtext: "ГЋncДѓrcare...",
		pgtext: "Pagina {0} din {1}",
		pgfirst: "First Page",
		pglast: "Last Page",
		pgnext: "Next Page",
		pgprev: "Previous Page",
		pgrecs: "Records per Page",
		showhide: "Toggle Expand Collapse Grid",
		savetext: "Salvare..."
	},
	search: {
		caption: "CautДѓ...",
		Find: "CautДѓ",
		Reset: "Resetare",
		odata: [
			{ oper: "eq", text: "egal" },
			{ oper: "ne", text: "diferit" },
			{ oper: "lt", text: "mai mic" },
			{ oper: "le", text: "mai mic sau egal" },
			{ oper: "gt", text: "mai mare" },
			{ oper: "ge", text: "mai mare sau egal" },
			{ oper: "bw", text: "Г®ncepe cu" },
			{ oper: "bn", text: "nu Г®ncepe cu" },
			{ oper: "in", text: "se gДѓseИ™te Г®n" },
			{ oper: "ni", text: "nu se gДѓseИ™te Г®n" },
			{ oper: "ew", text: "se terminДѓ cu" },
			{ oper: "en", text: "nu se terminДѓ cu" },
			{ oper: "cn", text: "conИ›ine" },
			{ oper: "nc", text: "" },
			{ oper: "nu", text: "is null" },
			{ oper: "nn", text: "is not null" }
		],
		groupOps: [
			{ op: "AND", text: "toate" },
			{ op: "OR",  text: "oricare" }
		],
		addGroupTitle: "Add subgroup",
		deleteGroupTitle: "Delete group",
		addRuleTitle: "Add rule",
		deleteRuleTitle: "Delete rule",
		operandTitle: "Click to select search operation.",
		resetTitle: "Reset Search Value"
	},
	edit: {
		addCaption: "AdДѓugare Г®nregistrare",
		editCaption: "Modificare Г®nregistrare",
		bSubmit: "SalveazДѓ",
		bCancel: "Anulare",
		bClose: "ГЋnchide",
		saveData: "InformaИ›iile au fost modificate! SalvaИ›i modificДѓrile?",
		bYes: "Da",
		bNo: "Nu",
		bExit: "Anulare",
		msg: {
			required: "CГўmpul este obligatoriu",
			number: "VДѓ rugДѓm introduceИ›i un numДѓr valid",
			minValue: "valoarea trebuie sa fie mai mare sau egalДѓ cu",
			maxValue: "valoarea trebuie sa fie mai micДѓ sau egalДѓ cu",
			email: "nu este o adresДѓ de e-mail validДѓ",
			integer: "VДѓ rugДѓm introduceИ›i un numДѓr valid",
			date: "VДѓ rugДѓm sДѓ introduceИ›i o datДѓ validДѓ",
			url: "Nu este un URL valid. Prefixul  este necesar('http://' or 'https://')",
			nodefined: " is not defined!",
			novalue: " return value is required!",
			customarray: "Custom function should return array!",
			customfcheck: "Custom function should be present in case of custom checking!"
		}
	},
	view: {
		caption: "Vizualizare Г®nregistrare",
		bClose: "ГЋnchidere"
	},
	del: {
		caption: "Иtegere",
		msg: "ИtergeИ›i Г®nregistrarea (Г®nregistrДѓrile) selectate?",
		bSubmit: "Иterge",
		bCancel: "Anulare"
	},
	nav: {
		edittext: "",
		edittitle: "ModificДѓ rГўndul selectat",
		addtext: "",
		addtitle: "AdaugДѓ rГўnd nou",
		deltext: "",
		deltitle: "Иterge rГўndul selectat",
		searchtext: "",
		searchtitle: "CДѓutare Г®nregistrДѓri",
		refreshtext: "",
		refreshtitle: "ReГ®ncarcare Grid",
		alertcap: "Avertisment",
		alerttext: "VДѓ rugДѓm sДѓ selectaИ›i un rГўnd",
		viewtext: "",
		viewtitle: "VizualizeazДѓ rГўndul selectat",
		savetext: "",
		savetitle: "Save row",
		canceltext: "",
		canceltitle: "Cancel row editing"
	},
	col: {
		caption: "AratДѓ/Ascunde coloanele",
		bSubmit: "SalveazДѓ",
		bCancel: "Anulare"
	},
	errors: {
		errcap: "Eroare",
		nourl: "Niciun url nu este setat",
		norecords: "Nu sunt Г®nregistrДѓri de procesat",
		model: "Lungimea colNames <> colModel!"
	},
	formatter: {
		integer: { thousandsSeparator: " ", defaultValue: "0" },
		number: { decimalSeparator: ",", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: "0,00" },
		currency: { decimalSeparator: ",", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix: "", defaultValue: "0,00" },
		date: {
			dayNames:   [
				"Dum", "Lun", "Mar", "Mie", "Joi", "Vin", "SГўm",
				"DuminicДѓ", "Luni", "MarИ›i", "Miercuri", "Joi", "Vineri", "SГўmbДѓtДѓ"
			],
			monthNames: [
				"Ian", "Feb", "Mar", "Apr", "Mai", "Iun", "Iul", "Aug", "Sep", "Oct", "Noi", "Dec",
				"Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"
			],
			AmPm: ["am", "pm", "AM", "PM"],
			/*
			 Here is a problem in romanian:
					M	/	F
			 1st = primul / prima
			 2nd = Al doilea / A doua
			 3rd = Al treilea / A treia
			 4th = Al patrulea/ A patra
			 5th = Al cincilea / A cincea
			 6th = Al И™aselea / A И™asea
			 7th = Al И™aptelea / A И™aptea
			 ....
			 */
			S: function (j) {
				return j < 11 || j > 13 ? ["st", "nd", "rd", "th"][Math.min((j - 1) % 10, 3)] : "th";
			},
			srcformat: "Y-m-d",
			newformat: "d/m/Y",
			masks: {
				ShortDate: "n/j/Y",
				LongDate: "l, F d, Y",
				FullDateTime: "l, F d, Y g:i:s A",
				MonthDay: "F d",
				ShortTime: "g:i A",
				LongTime: "g:i:s A",
				YearMonth: "F, Y"
			}
		}
	}
};
$.jgrid = $.jgrid || {};
$.extend(true, $.jgrid, {
	defaults: {
		locale: "ro"
	},
	locales: {
		// In general the property name is free, but it's recommended to use the names based on
		// http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
		// http://rishida.net/utils/subtags/ and RFC 5646. See Appendix A of RFC 5646 for examples.
		// One can use the lang attribute to specify language tags in HTML, and the xml:lang attribute for XML
		// if it exists. See http://www.w3.org/International/articles/language-tags/#extlang
		ro: $.extend({}, locInfo, { name: "romГўnДѓ", nameEnglish: "Romanian" }),
		"ro-RO": $.extend({}, locInfo, { name: "romГўnДѓ (RomГўnia)", nameEnglish: "Romanian (Romania)" })
	}
});
}));
