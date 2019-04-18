/**
 * @license jqGrid Lithuanian Translation
 * aur1mas aur1mas@devnet.lt
 * http://aur1mas.devnet.lt
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
		recordtext: "PerЕѕiЕ«rima {0} - {1} iЕЎ {2}",
		emptyrecords: "Д®raЕЎЕі nД—ra",
		loadtext: "Kraunama...",
		pgtext: "Puslapis {0} iЕЎ {1}",
		pgfirst: "First Page",
		pglast: "Last Page",
		pgnext: "Next Page",
		pgprev: "Previous Page",
		pgrecs: "Records per Page",
		showhide: "Toggle Expand Collapse Grid",
		savetext: "Д®raЕЎoma..."
	},
	search: {
		caption: "PaieЕЎka...",
		Find: "IeЕЎkoti",
		Reset: "Atstatyti",
		odata: [
			{ oper: "eq", text: "lygu" },
			{ oper: "ne", text: "nelygu" },
			{ oper: "lt", text: "maЕѕiau" },
			{ oper: "le", text: "maЕѕiau arba lygu" },
			{ oper: "gt", text: "daugiau" },
			{ oper: "ge", text: "daugiau arba lygu" },
			{ oper: "bw", text: "prasideda" },
			{ oper: "bn", text: "neprasideda" },
			{ oper: "in", text: "reikЕЎmД— yra" },
			{ oper: "ni", text: "reikЕЎmД—s nД—ra" },
			{ oper: "ew", text: "baigiasi" },
			{ oper: "en", text: "nesibaigia" },
			{ oper: "cn", text: "yra sudarytas" },
			{ oper: "nc", text: "nД—ra sudarytas" },
			{ oper: "nu", text: "is null" },
			{ oper: "nn", text: "is not null" }
		],
		groupOps: [
			{ op: "AND", text: "visi" },
			{ op: "OR",  text: "bet kuris" }
		],
		addGroupTitle: "Add subgroup",
		deleteGroupTitle: "Delete group",
		addRuleTitle: "Add rule",
		deleteRuleTitle: "Delete rule",
		operandTitle: "Click to select search operation.",
		resetTitle: "Reset Search Value"
	},
	edit: {
		addCaption: "Sukurti ДЇraЕЎД…",
		editCaption: "Redaguoti ДЇraЕЎД…",
		bSubmit: "IЕЎsaugoti",
		bCancel: "AtЕЎaukti",
		bClose: "UЕѕdaryti",
		saveData: "Duomenys buvo pakeisti! IЕЎsaugoti pakeitimus?",
		bYes: "Taip",
		bNo: "Ne",
		bExit: "AtЕЎaukti",
		msg: {
			required: "Privalomas laukas",
			number: "Д®veskite tinkamД… numerДЇ",
			minValue: "reikЕЎmД— turi bЕ«ti didesnД— arba lygi ",
			maxValue: "reikЕЎmД— turi bЕ«ti maЕѕesnД— arba lygi",
			email: "neteisingas el. paЕЎto adresas",
			integer: "Д®veskite teisingД… sveikД…jДЇ skaiДЌiЕі",
			date: "Д®veskite teisingД… datД…",
			url: "blogas adresas. NepamirЕЎkite pridД—ti ('http://' arba 'https://')",
			nodefined: " nД—ra apibrД—Еѕta!",
			novalue: " turi bЕ«ti graЕѕinama kokia nors reikЕЎmД—!",
			customarray: "Custom f-ja turi grД…Еѕinti masyvД…!",
			customfcheck: "Custom f-ja tЕ«rД—tЕі bЕ«ti sukurta, prieЕЎ bandant jД… naudoti!"

		}
	},
	view: {
		caption: "PerЕѕiЕ«rД—ti ДЇraЕЎus",
		bClose: "UЕѕdaryti"
	},
	del: {
		caption: "IЕЎtrinti",
		msg: "IЕЎtrinti paЕѕymД—tus ДЇraЕЎus(-Д…)?",
		bSubmit: "IЕЎtrinti",
		bCancel: "AtЕЎaukti"
	},
	nav: {
		edittext: "",
		edittitle: "Redaguoti paЕѕymД—tД… eilutД™",
		addtext: "",
		addtitle: "PridД—ti naujД… eilutД™",
		deltext: "",
		deltitle: "IЕЎtrinti paЕѕymД—tД… eilutД™",
		searchtext: "",
		searchtitle: "Rasti ДЇraЕЎus",
		refreshtext: "",
		refreshtitle: "Perkrauti lentelД™",
		alertcap: "Д®spД—jimas",
		alerttext: "Pasirinkite eilutД™",
		viewtext: "",
		viewtitle: "PerЕѕiЕ«rД—ti pasirinktД… eilutД™",
		savetext: "",
		savetitle: "Save row",
		canceltext: "",
		canceltitle: "Cancel row editing"
	},
	col: {
		caption: "Pasirinkti stulpelius",
		bSubmit: "Gerai",
		bCancel: "AtЕЎaukti"
	},
	errors: {
		errcap: "Klaida",
		nourl: "Url reikЕЎmД— turi bЕ«ti perduota",
		norecords: "NД—ra ДЇraЕЎЕі, kuriuos bЕ«tЕі galima apdoroti",
		model: "colNames skaiДЌius <> colModel skaiДЌiui!"
	},
	formatter: {
		integer: { thousandsSeparator: "", defaultValue: "0" },
		number: { decimalSeparator: ",", thousandsSeparator: "", decimalPlaces: 2, defaultValue: "0.00" },
		currency: { decimalSeparator: ",", thousandsSeparator: "", decimalPlaces: 2, prefix: "", suffix: "", defaultValue: "0.00" },
		date: {
			dayNames:   [
				"Sek", "Pir", "Ant", "Tre", "Ket", "Pen", "Е eЕЎ",
				"Sekmadienis", "Pirmadienis", "Antradienis", "TreДЌiadienis", "Ketvirtadienis", "Penktadienis", "Е eЕЎtadienis"
			],
			monthNames: [
				"Sau", "Vas", "Kov", "Bal", "Geg", "Bir", "Lie", "Rugj", "Rugs", "Spa", "Lap", "Gru",
				"Sausis", "Vasaris", "Kovas", "Balandis", "GeguЕѕД—", "BirЕѕelis", "Liepa", "RugpjЕ«tis", "RugsД—jis", "Spalis", "Lapkritis", "Gruodis"
			],
			AmPm: ["am", "pm", "AM", "PM"],
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
		locale: "lt"
	},
	locales: {
		// In general the property name is free, but it's recommended to use the names based on
		// http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
		// http://rishida.net/utils/subtags/ and RFC 5646. See Appendix A of RFC 5646 for examples.
		// One can use the lang attribute to specify language tags in HTML, and the xml:lang attribute for XML
		// if it exists. See http://www.w3.org/International/articles/language-tags/#extlang
		lt: $.extend({}, locInfo, { name: "lietuviЕі", nameEnglish: "Lithuanian" }),
		"lt-LT": $.extend({}, locInfo, { name: "lietuviЕі (Lietuva)", nameEnglish: "Lithuanian (Lithuania)" })
	}
});
}));
