/**
 * @license jqGrid Slovak Translation
 * Milan Cibulka
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
		recordtext: "ZobrazenГЅch {0} - {1} z {2} zГЎznamov",
		emptyrecords: "Neboli nГЎjdenГ© Еѕiadne zГЎznamy",
		loadtext: "NaДЌГ­tГЎm...",
		pgtext: "Strana {0} z {1}",
		pgfirst: "First Page",
		pglast: "Last Page",
		pgnext: "Next Page",
		pgprev: "Previous Page",
		pgrecs: "Records per Page",
		showhide: "Toggle Expand Collapse Grid",
		savetext: "UkladГЎ sa..."
	},
	search: {
		caption: "VyhДѕadГЎvam...",
		Find: "HДѕadaЕҐ",
		Reset: "Reset",
		odata: [
			{ oper: "eq", text: "rovnГЎ sa" },
			{ oper: "ne", text: "nerovnГЎ sa" },
			{ oper: "lt", text: "menЕЎie" },
			{ oper: "le", text: "menЕЎie alebo rovnajГєce sa" },
			{ oper: "gt", text: "vГ¤ДЌЕЎie" },
			{ oper: "ge", text: "vГ¤ДЌЕЎie alebo rovnajГєce sa" },
			{ oper: "bw", text: "zaДЌГ­na s" },
			{ oper: "bn", text: "nezaДЌГ­na s" },
			{ oper: "in", text: "je v" },
			{ oper: "ni", text: "nie je v" },
			{ oper: "ew", text: "konДЌГ­ s" },
			{ oper: "en", text: "nekonДЌГ­ s" },
			{ oper: "cn", text: "obahuje" },
			{ oper: "nc", text: "neobsahuje" },
			{ oper: "nu", text: "is null" },
			{ oper: "nn", text: "is not null" }
		],
		groupOps: [
			{ op: "AND", text: "vЕЎetkГЅch" },
			{ op: "OR",  text: "niektorГ©ho z" }
		],
		addGroupTitle: "Add subgroup",
		deleteGroupTitle: "Delete group",
		addRuleTitle: "Add rule",
		deleteRuleTitle: "Delete rule",
		operandTitle: "Click to select search operation.",
		resetTitle: "Reset Search Value"
	},
	edit: {
		addCaption: "PridaЕҐ zГЎznam",
		editCaption: "EditГЎcia zГЎznamov",
		bSubmit: "UloЕѕiЕҐ",
		bCancel: "Storno",
		bClose: "ZavrieЕҐ",
		saveData: "Гљdaje boli zmenenГ©! UloЕѕiЕҐ zmeny?",
		bYes: "Ano",
		bNo: "Nie",
		bExit: "ZruЕЎiЕҐ",
		msg: {
			required: "Pole je poЕѕadovanГ©",
			number: "ProsГ­m, vloЕѕte valГ­dne ДЌГ­slo",
			minValue: "hodnota musГ­ bГЅЕҐ vГ¤ДЌЕЎia ako alebo rovnГЎ ",
			maxValue: "hodnota musГ­ bГЅЕҐ menЕЎia ako alebo rovnГЎ ",
			email: "nie je valГ­dny e-mail",
			integer: "ProsГ­m, vloЕѕte celГ© ДЌГ­slo",
			date: "ProsГ­m, vloЕѕte valГ­dny dГЎtum",
			url: "nie je platnou URL. PoЕѕadovanГЅ prefix ('http://' alebo 'https://')",
			nodefined: " nie je definovanГЅ!",
			novalue: " je vyЕѕadovanГЎ nГЎvratovГЎ hodnota!",
			customarray: "Custom function mala vrГЎtiЕҐ pole!",
			customfcheck: "Custom function by mala byЕҐ prГ­tomnГЎ v prГ­pade custom checking!"
		}
	},
	view: {
		caption: "ZobraziЕҐ zГЎznam",
		bClose: "ZavrieЕҐ"
	},
	del: {
		caption: "ZmazaЕҐ",
		msg: "ZmazaЕҐ vybranГЅ(Г©) zГЎznam(y)?",
		bSubmit: "ZmazaЕҐ",
		bCancel: "Storno"
	},
	nav: {
		edittext: "",
		edittitle: "EditovaЕҐ vybranГЅ riadok",
		addtext: "",
		addtitle: "PridaЕҐ novГЅ riadek",
		deltext: "",
		deltitle: "ZmazaЕҐ vybranГЅ zГЎznam ",
		searchtext: "",
		searchtitle: "NГЎjsЕҐ zГЎznamy",
		refreshtext: "",
		refreshtitle: "ObnoviЕҐ tabuДѕku",
		alertcap: "Varovanie",
		alerttext: "ProsГ­m, vyberte riadok",
		viewtext: "",
		viewtitle: "ZobraziЕҐ vybranГЅ riadok",
		savetext: "",
		savetitle: "Save row",
		canceltext: "",
		canceltitle: "Cancel row editing"
	},
	col: {
		caption: "Zobrazit/SkrГЅЕҐ stДєpce",
		bSubmit: "UloЕѕiЕҐ",
		bCancel: "Storno"
	},
	errors: {
		errcap: "Chyba",
		nourl: "Nie je nastavenГЎ url",
		norecords: "ЕЅiadne zГЎznamy k spracovaniu",
		model: "DДєЕѕka colNames <> colModel!"
	},
	formatter: {
		integer: { thousandsSeparator: " ", defaultValue: "0" },
		number: { decimalSeparator: ".", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: "0.00" },
		currency: { decimalSeparator: ".", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix: "", defaultValue: "0.00" },
		date: {
			dayNames:   [
				"Ne", "Po", "Ut", "St", "Е t", "Pi", "So",
				"Nedela", "Pondelok", "Utorok", "Streda", "Е tvrtok", "Piatek", "Sobota"
			],
			monthNames: [
				"Jan", "Feb", "Mar", "Apr", "MГЎj", "JГєn", "JГєl", "Aug", "Sep", "Okt", "Nov", "Dec",
				"JanuГЎr", "FebruГЎr", "Marec", "AprГ­l", "MГЎj", "JГєn", "JГєl", "August", "September", "OktГіber", "November", "December"
			],
			AmPm: ["do", "od", "DO", "OD"],
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
		locale: "sk"
	},
	locales: {
		// In general the property name is free, but it's recommended to use the names based on
		// http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
		// http://rishida.net/utils/subtags/ and RFC 5646. See Appendix A of RFC 5646 for examples.
		// One can use the lang attribute to specify language tags in HTML, and the xml:lang attribute for XML
		// if it exists. See http://www.w3.org/International/articles/language-tags/#extlang
		sk: $.extend({}, locInfo, { name: "slovenДЌina", nameEnglish: "Slovak" }),
		"sk-SK": $.extend({}, locInfo, { name: "slovenДЌina (SlovenskГЎ republika)", nameEnglish: "Slovak (Slovakia)" })
	}
});
}));
