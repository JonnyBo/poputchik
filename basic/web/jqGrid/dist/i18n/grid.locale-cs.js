/**
 * @license jqGrid Czech Translation
 * Pavel Jirak pavel.jirak@jipas.cz
 * doplnil Thomas Wagner xwagne01@stud.fit.vutbr.cz
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
		recordtext: "Zobrazeno {0} - {1} z {2} zГЎznamЕЇ",
		emptyrecords: "Nenalezeny ЕѕГЎdnГ© zГЎznamy",
		loadtext: "NaДЌГ­tГЎm...",
		pgtext: "Strana {0} z {1}",
		pgfirst: "First Page",
		pglast: "Last Page",
		pgnext: "Next Page",
		pgprev: "Previous Page",
		pgrecs: "Records per Page",
		showhide: "Toggle Expand Collapse Grid",
		savetext: "UklГЎdГЎnГ­..."
	},
	search: {
		caption: "VyhledГЎvГЎm...",
		Find: "Hledat",
		Reset: "Reset",
		odata: [
			{ oper: "eq", text: "rovno" },
			{ oper: "ne", text: "nerovno" },
			{ oper: "lt", text: "menЕЎГ­" },
			{ oper: "le", text: "menЕЎГ­ nebo rovno" },
			{ oper: "gt", text: "vД›tЕЎГ­" },
			{ oper: "ge", text: "vД›tЕЎГ­ nebo rovno" },
			{ oper: "bw", text: "zaДЌГ­nГЎ s" },
			{ oper: "bn", text: "nezaДЌГ­nГЎ s" },
			{ oper: "in", text: "je v" },
			{ oper: "ni", text: "nenГ­ v" },
			{ oper: "ew", text: "konДЌГ­ s" },
			{ oper: "en", text: "nekonДЌГ­ s" },
			{ oper: "cn", text: "obsahuje" },
			{ oper: "nc", text: "neobsahuje" },
			{ oper: "nu", text: "is null" },
			{ oper: "nn", text: "is not null" }
		],
		groupOps: [
			{ op: "AND", text: "vЕЎech" },
			{ op: "OR",  text: "nД›kterГ©ho z" }
		],
		addGroupTitle: "Add subgroup",
		deleteGroupTitle: "Delete group",
		addRuleTitle: "Add rule",
		deleteRuleTitle: "Delete rule",
		operandTitle: "Click to select search operation.",
		resetTitle: "Reset Search Value"
	},
	edit: {
		addCaption: "PЕ™idat zГЎznam",
		editCaption: "Editace zГЎznamu",
		bSubmit: "UloЕѕit",
		bCancel: "Storno",
		bClose: "ZavЕ™Г­t",
		saveData: "Data byla zmД›nД›na! UloЕѕit zmД›ny?",
		bYes: "Ano",
		bNo: "Ne",
		bExit: "ZruЕЎit",
		msg: {
			required: "Pole je vyЕѕadovГЎno",
			number: "ProsГ­m, vloЕѕte validnГ­ ДЌГ­slo",
			minValue: "hodnota musГ­ bГЅt vД›tЕЎГ­ neЕѕ nebo rovnГЎ ",
			maxValue: "hodnota musГ­ bГЅt menЕЎГ­ neЕѕ nebo rovnГЎ ",
			email: "nenГ­ validnГ­ e-mail",
			integer: "ProsГ­m, vloЕѕte celГ© ДЌГ­slo",
			date: "ProsГ­m, vloЕѕte validnГ­ datum",
			url: "nenГ­ platnou URL. VyЕѕadovГЎn prefix ('http://' or 'https://')",
			nodefined: " nenГ­ definovГЎn!",
			novalue: " je vyЕѕadovГЎna nГЎvratovГЎ hodnota!",
			customarray: "Custom function mД›lГЎ vrГЎtit pole!",
			customfcheck: "Custom function by mД›la bГЅt pЕ™Г­tomna v pЕ™Г­padД› custom checking!"
		}
	},
	view: {
		caption: "Zobrazit zГЎznam",
		bClose: "ZavЕ™Г­t"
	},
	del: {
		caption: "Smazat",
		msg: "Smazat vybranГЅ(Г©) zГЎznam(y)?",
		bSubmit: "Smazat",
		bCancel: "Storno"
	},
	nav: {
		edittext: "",
		edittitle: "Editovat vybranГЅ Е™ГЎdek",
		addtext: " ",
		addtitle: "PЕ™idat novГЅ Е™ГЎdek",
		deltext: "",
		deltitle: "Smazat vybranГЅ zГЎznam ",
		searchtext: "",
		searchtitle: "NajГ­t zГЎznamy",
		refreshtext: "",
		refreshtitle: "Obnovit tabulku",
		alertcap: "VarovГЎnГ­",
		alerttext: "ProsГ­m, vyberte Е™ГЎdek",
		viewtext: "",
		viewtitle: "Zobrazit vybranГЅ Е™ГЎdek",
		savetext: "",
		savetitle: "Save row",
		canceltext: "",
		canceltitle: "Cancel row editing"
	},
	col: {
		caption: "Zobrazit/SkrГЅt sloupce",
		bSubmit: "UloЕѕit",
		bCancel: "Storno"
	},
	errors: {
		errcap: "Chyba",
		nourl: "NenГ­ nastavena url",
		norecords: "ЕЅГЎdnГ© zГЎznamy ke zpracovГЎnГ­",
		model: "DГ©lka colNames <> colModel!"
	},
	formatter: {
		integer: { thousandsSeparator: " ", defaultValue: "0" },
		number: { decimalSeparator: ".", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: "0.00" },
		currency: { decimalSeparator: ".", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix: "", defaultValue: "0.00" },
		date: {
			dayNames:   [
				"Ne", "Po", "Гљt", "St", "ДЊt", "PГЎ", "So",
				"NedД›le", "PondД›lГ­", "ГљterГЅ", "StЕ™eda", "ДЊtvrtek", "PГЎtek", "Sobota"
			],
			monthNames: [
				"Led", "Гљno", "BЕ™e", "Dub", "KvД›", "ДЊer", "ДЊvc", "Srp", "ZГЎЕ™", "ЕГ­j", "Lis", "Pro",
				"Leden", "Гљnor", "BЕ™ezen", "Duben", "KvД›ten", "ДЊerven", "ДЊervenec", "Srpen", "ZГЎЕ™Г­", "ЕГ­jen", "Listopad", "Prosinec"
			],
			AmPm: ["do", "od", "DO", "OD"],
			S: function (j) {return j < 11 || j > 13 ? ["st", "nd", "rd", "th"][Math.min((j - 1) % 10, 3)] : "th";},
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
		locale: "cs"
	},
	locales: {
		// In general the property name is free, but it's recommended to use the names based on
		// http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
		// http://rishida.net/utils/subtags/ and RFC 5646. See Appendix A of RFC 5646 for examples.
		// One can use the lang attribute to specify language tags in HTML, and the xml:lang attribute for XML
		// if it exists. See http://www.w3.org/International/articles/language-tags/#extlang
		cs: $.extend({}, locInfo, { name: "ДЌeЕЎtina", nameEnglish: "Czech" }),
		"cs-CZ": $.extend({}, locInfo, { name: "ДЌeЕЎtina (ДЊeskГЎ republika)", nameEnglish: "Czech (Czech Republic)" })
	}
});
}));
