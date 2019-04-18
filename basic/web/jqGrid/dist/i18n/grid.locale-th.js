/**
 * @license jqGrid Thai Translation
 * Kittituch Manakul m.kittituch@Gmail.com
 * http://trirand.com/blog/
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
**/

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
		recordtext: "а№ЃаёЄаё”аё‡ {0} - {1} аё€аёІаёЃ {2}",
		emptyrecords: "а№„аёЎа№€аёћаёљаё‚а№‰аё­аёЎаё№аёҐ",
		loadtext: "аёЃаёіаёҐаё±аё‡аёЈа№‰аё­аё‡аё‚аё­аё‚а№‰аё­аёЎаё№аёҐ...",
		pgtext: "аё«аё™а№‰аёІ {0} аё€аёІаёЃ {1}",
		pgfirst: "First Page",
		pglast: "Last Page",
		pgnext: "Next Page",
		pgprev: "Previous Page",
		pgrecs: "Records per Page",
		showhide: "Toggle Expand Collapse Grid",
		savetext: "аёЃаёіаёҐаё±аё‡аёљаё±аё™аё—аё¶аёЃ..."
	},
	search: {
		caption: "аёЃаёіаёҐаё±аё‡аё„а№‰аё™аё«аёІ...",
		Find: "аё„а№‰аё™аё«аёІ",
		Reset: "аё„аё·аё™аё„а№€аёІаёЃаёҐаё±аёљ",
		odata: [
			{ oper: "eq", text: "а№Ђаё—а№€аёІаёЃаё±аёљ" },
			{ oper: "ne", text: "а№„аёЎа№€а№Ђаё—а№€аёІаёЃаё±аёљ" },
			{ oper: "lt", text: "аё™а№‰аё­аёўаёЃаё§а№€аёІ" },
			{ oper: "le", text: "а№„аёЎа№€аёЎаёІаёЃаёЃаё§а№€аёІ" },
			{ oper: "gt", text: "аёЎаёІаёЃаёЃаёЃаё§а№€аёІ" },
			{ oper: "ge", text: "а№„аёЎа№€аё™а№‰аё­аёўаёЃаё§а№€аёІ" },
			{ oper: "bw", text: "аё‚аё¶а№‰аё™аё•а№‰аё™аё”а№‰аё§аёў" },
			{ oper: "bn", text: "а№„аёЎа№€аё‚аё¶а№‰аё™аё•а№‰аё™аё”а№‰аё§аёў" },
			{ oper: "in", text: "аёЎаёµаё„аёіа№ѓаё”аё„аёіаё«аё™аё¶а№€аё‡а№ѓаё™" },
			{ oper: "ni", text: "а№„аёЎа№€аёЎаёµаё„аёіа№ѓаё”аё„аёіаё«аё™аё¶а№€аё‡а№ѓаё™" },
			{ oper: "ew", text: "аёҐаё‡аё—а№‰аёІаёўаё”а№‰аё§аёў" },
			{ oper: "en", text: "а№„аёЎа№€аёҐаё‡аё—а№‰аёІаёўаё”а№‰аё§аёў" },
			{ oper: "cn", text: "аёЎаёµаё„аёіаё§а№€аёІ" },
			{ oper: "nc", text: "а№„аёЎа№€аёЎаёµаё„аёіаё§а№€аёІ" },
			{ oper: "nu", text: "is null" },
			{ oper: "nn", text: "is not null" }
		],
		groupOps: [
			{ op: "а№ЃаёҐаё°", text: "аё—аё±а№‰аё‡аё«аёЎаё”" },
			{ op: "аё«аёЈаё·аё­",  text: "а№ѓаё”а№†" }
		],
		addGroupTitle: "Add subgroup",
		deleteGroupTitle: "Delete group",
		addRuleTitle: "Add rule",
		deleteRuleTitle: "Delete rule",
		operandTitle: "Click to select search operation.",
		resetTitle: "Reset Search Value"
	},
	edit: {
		addCaption: "а№Ђаёћаёґа№€аёЎаё‚а№‰аё­аёЎаё№аёҐ",
		editCaption: "а№ЃаёЃа№‰а№„аё‚аё‚а№‰аё­аёЎаё№аёҐ",
		bSubmit: "аёљаё±аё™аё—аё¶аёЃ",
		bCancel: "аёўаёЃа№ЂаёҐаёґаёЃ",
		bClose: "аё›аёґаё”",
		saveData: "аё„аёёаё“аё•а№‰аё­аё‡аёЃаёІаёЈаёљаё±аё™аё—аё¶аёЃаёІаёЈа№ЃаёЃа№‰а№„аё‚ а№ѓаёЉа№€аё«аёЈаё·аё­а№„аёЎа№€?",
		bYes: "аёљаё±аё™аё—аё¶аёЃ",
		bNo: "аёҐаё°аё—аёґа№‰аё‡аёЃаёІаёЈа№ЃаёЃа№‰а№„аё‚",
		bExit: "аёўаёЃа№ЂаёҐаёґаёЃ",
		msg: {
			required: "аё‚а№‰аё­аёЎаё№аёҐаё™аёµа№‰аё€аёіа№Ђаё›а№‡аё™",
			number: "аёЃаёЈаёёаё“аёІаёЃаёЈаё­аёЃаё«аёЎаёІаёўа№ЂаёҐаё‚а№ѓаё«а№‰аё–аё№аёЃаё•а№‰аё­аё‡",
			minValue: "аё„а№€аёІаё‚аё­аё‡аё‚а№‰аё­аёЎаё№аёҐаё™аёµа№‰аё•а№‰аё­аё‡а№„аёЎа№€аё™а№‰аё­аёўаёЃаё§а№€аёІ",
			maxValue: "аё„а№€аёІаё‚аё­аё‡аё‚а№‰аё­аёЎаё№аёҐаё™аёµа№‰аё•а№‰аё­аё‡а№„аёЎа№€аёЎаёІаёЃаёЃаё§а№€аёІ",
			email: "аё­аёµа№ЂаёЎаёҐаёҐа№Њаё™аёµа№‰а№„аёЎа№€аё–аё№аёЃаё•а№‰аё­аё‡",
			integer: "аёЃаёЈаёёаё“аёІаёЃаёЈаё­аёЃа№Ђаё›а№‡аё™аё€аёіаё™аё§аё™а№Ђаё•а№‡аёЎ",
			date: "аёЃаёЈаёёаё“аёІаёЃаёЈаё­аёЃаё§аё±аё™аё—аёµа№€а№ѓаё«а№‰аё–аё№аёЃаё•а№‰аё­аё‡",
			url: "URL а№„аёЎа№€аё–аё№аёЃаё•а№‰аё­аё‡ URL аё€аёіа№Ђаё›а№‡аё™аё•а№‰аё­аё‡аё‚аё¶а№‰аё™аё•а№‰аё™аё”а№‰аё§аёў 'http://' аё«аёЈаё·аё­ 'https://'",
			nodefined: "а№„аёЎа№€а№„аё”а№‰аё–аё№аёЃаёЃаёіаё«аё™аё”аё„а№€аёІ!",
			novalue: "аё•а№‰аё­аё‡аёЃаёІаёЈаёЃаёІаёЈаё„аё·аё™аё„а№€аёІ!",
			customarray: "аёџаё±аё‡аёЃа№ЊаёЉаё±аё™аё—аёµа№€аёЄаёЈа№‰аёІаё‡аё‚аё¶а№‰аё™аё•а№‰аё­аё‡аёЄа№€аё‡аё„а№€аёІаёЃаёҐаё±аёља№Ђаё›а№‡аё™а№Ѓаёљаёља№Ѓаё­а№ЂаёЈаёўа№Њ",
			customfcheck: "аёЈаё°аёљаёљаё•а№‰аё­аё‡аёЃаёІаёЈаёџаё±аё‡аёЃа№ЊаёЉаё±аё™аё—аёµа№€аёЄаёЈа№‰аёІаё‡аё‚аё¶а№‰аё™аёЄаёіаё«аёЈаё±аёљаёЃаёІаёЈаё•аёЈаё§аё€аёЄаё­аёљ!"
		}
	},
	view: {
		caption: "а№ЂаёЈаёµаёўаёЃаё”аё№аё‚а№‰аё­аёЎаё№аёҐ",
		bClose: "аё›аёґаё”"
	},
	del: {
		caption: "аёҐаёљаё‚а№‰аё­аёЎаё№аёҐ",
		msg: "аё„аёёаё“аё•а№‰аё­аё‡аёЃаёІаёЈаёҐаёљаё‚а№‰аё­аёЎаё№аёҐаё—аёµа№€аё–аё№аёЃа№ЂаёҐаё·аё­аёЃ а№ѓаёЉа№€аё«аёЈаё·аё­а№„аёЎа№€?",
		bSubmit: "аё•а№‰аё­аё‡аёЃаёІаёЈаёҐаёљ",
		bCancel: "аёўаёЃа№ЂаёҐаёґаёЃ"
	},
	nav: {
		edittext: "",
		edittitle: "а№ЃаёЃа№‰а№„аё‚аё‚а№‰аё­аёЎаё№аёҐ",
		addtext: "",
		addtitle: "а№Ђаёћаёґа№€аёЎаё‚а№‰аё­аёЎаё№аёҐ",
		deltext: "",
		deltitle: "аёҐаёљаё‚а№‰аё­аёЎаё№аёҐ",
		searchtext: "",
		searchtitle: "аё„а№‰аё™аё«аёІаё‚а№‰аё­аёЎаё№аёҐ",
		refreshtext: "",
		refreshtitle: "аёЈаёµа№ЂаёџаёЈаёЉ",
		alertcap: "аё„аёіа№Ђаё•аё·аё­аё™",
		alerttext: "аёЃаёЈаёёаё“аёІа№ЂаёҐаё·аё­аёЃаё‚а№‰аё­аёЎаё№аёҐ",
		viewtext: "",
		viewtitle: "аё”аё№аёЈаёІаёўаёҐаё°а№Ђаё­аёµаёўаё”аё‚а№‰аё­аёЎаё№аёҐ",
		savetext: "",
		savetitle: "Save row",
		canceltext: "",
		canceltitle: "Cancel row editing"
	},
	col: {
		caption: "аёЃаёЈаёёаё“аёІа№ЂаёҐаё·аё­аёЃаё„аё­аёҐаё±аёЎаё™а№Њ",
		bSubmit: "аё•аёЃаёҐаё‡",
		bCancel: "аёўаёЃа№ЂаёҐаёґаёЃ"
	},
	errors: {
		errcap: "а№ЂаёЃаёґаё”аё„аё§аёІаёЎаёњаёґаё”аёћаёҐаёІаё”",
		nourl: "а№„аёЎа№€а№„аё”а№‰аёЃаёіаё«аё™аё” URL",
		norecords: "а№„аёЎа№€аёЎаёµаё‚а№‰аё­аёЎаё№аёҐа№ѓаё«а№‰аё”аёіа№Ђаё™аёґаё™аёЃаёІаёЈ",
		model: "аё€аёіаё™аё§аё™аё„аё­аёҐаё±аёЎаё™а№Ња№„аёЎа№€а№Ђаё—а№€аёІаёЃаё±аёљаё€аёіаё™аё§аё™аё„аё­аёҐаё±аёЎаё™а№Ња№‚аёЎа№Ђаё”аёҐ!"
	},
	formatter: {
		integer: { thousandsSeparator: " ", defaultValue: "0" },
		number: { decimalSeparator: ".", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: "0.00" },
		currency: { decimalSeparator: ".", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix: "", defaultValue: "0.00" },
		date: {
			dayNames:   [
				"аё­аёІ", "аё€", "аё­", "аёћ", "аёћаё¤", "аёЁ", "аёЄ",
				"аё­аёІаё—аёґаё•аёўа№Њ", "аё€аё±аё™аё—аёЈа№Њ", "аё­аё±аё‡аё„аёІаёЈ", "аёћаёёаё", "аёћаё¤аё«аё±аёЄаёљаё”аёµ", "аёЁаё№аёЃаёЈа№Њ", "а№ЂаёЄаёІаёЈа№Њ"
			],
			monthNames: [
				"аёЎ.аё„.", "аёЃ.аёћ.", "аёЎаёµ.аё„.", "а№ЂаёЎ.аёў.", "аёћ.аё„.", "аёЎаёґ.аёў.", "аёЃ.аё„.", "аёЄ.аё„.", "аёЃ.аёў.", "аё•.аё„.", "аёћ.аёў.", "аё.аё„.",
				"аёЎаёЃаёЈаёІаё„аёЎ", "аёЃаёёаёЎаё аёІаёћаё±аё™аёа№Њ", "аёЎаёµаё™аёІаё„аёЎ", "а№ЂаёЎаё©аёІаёўаё™", "аёћаё¤аё©аё аёІаё„аёЎ", "аёЎаёґаё–аёёаё™аёІаёўаё™", "аёЃаёЈаёЃаёЏаёІаё„аёЎ", "аёЄаёґаё‡аё«аёІаё„аёЎ", "аёЃаё±аё™аёўаёІаёўаё™", "аё•аёёаёҐаёІаё„аёЎ", "аёћаё¤аёЁаё€аёґаёЃаёІаёўаё™", "аёаё±аё™аё§аёІаё„аёЎ"
			],
			AmPm: ["am", "pm", "AM", "PM"],
			S: function () { return ""; },
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
		locale: "th"
	},
	locales: {
		// In general the property name is free, but it's recommended to use the names based on
		// http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
		// http://rishida.net/utils/subtags/ and RFC 5646. See Appendix A of RFC 5646 for examples.
		// One can use the lang attribute to specify language tags in HTML, and the xml:lang attribute for XML
		// if it exists. See http://www.w3.org/International/articles/language-tags/#extlang
		th: $.extend({}, locInfo, { name: "а№„аё—аёў", nameEnglish: "Thai" }),
		"th-TH": $.extend({}, locInfo, { name: "а№„аё—аёў (а№„аё—аёў)", nameEnglish: "Thai (Thailand)" })
	}
});
}));
