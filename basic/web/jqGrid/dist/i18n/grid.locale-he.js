/**
 * @license jqGrid Hebrew Translation
 * Shuki Shukrun shukrun.shuki@gmail.com
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
	isRTL: true,
	defaults: {
		recordtext: "ЧћЧ¦Ч™Ч’ {0} - {1} ЧћЧЄЧ•Чљ {2}",
		emptyrecords: "ЧђЧ™Чџ ЧЁЧ©Ч•ЧћЧ•ЧЄ ЧњЧ”Ч¦Ч™Ч’",
		loadtext: "ЧЧ•ЧўЧџ...",
		pgtext: "Ч“ЧЈ {0} ЧћЧЄЧ•Чљ {1}",
		pgfirst: "First Page",
		pglast: "Last Page",
		pgnext: "Next Page",
		pgprev: "Previous Page",
		pgrecs: "Records per Page",
		showhide: "Toggle Expand Collapse Grid",
		savetext: "Ч©Ч•ЧћЧЁ..."
	},
	search: {
		caption: "ЧћЧ—Ч¤Ч©...",
		Find: "Ч—Ч¤Ч©",
		Reset: "Ч”ЧЄЧ—Чњ",
		odata: [
			{ oper: "eq", text: "Ч©Ч•Ч•Ч”" },
			{ oper: "ne", text: "ЧњЧђ Ч©Ч•Ч•Ч”" },
			{ oper: "lt", text: "Ч§ЧЧџ" },
			{ oper: "le", text: "Ч§ЧЧџ ЧђЧ• Ч©Ч•Ч•Ч”" },
			{ oper: "gt", text: "Ч’Ч“Ч•Чњ" },
			{ oper: "ge", text: "Ч’Ч“Ч•Чњ ЧђЧ• Ч©Ч•Ч•Ч”" },
			{ oper: "bw", text: "ЧћЧЄЧ—Ч™Чњ Ч‘" },
			{ oper: "bn", text: "ЧњЧђ ЧћЧЄЧ—Ч™Чњ Ч‘" },
			{ oper: "in", text: "Ч ЧћЧ¦Чђ Ч‘" },
			{ oper: "ni", text: "ЧњЧђ Ч ЧћЧ¦Чђ Ч‘" },
			{ oper: "ew", text: "ЧћЧЎЧЄЧ™Ч™Чќ Ч‘" },
			{ oper: "en", text: "ЧњЧђ ЧћЧЎЧЄЧ™Ч™Чќ Ч‘" },
			{ oper: "cn", text: "ЧћЧ›Ч™Чњ" },
			{ oper: "nc", text: "ЧњЧђ ЧћЧ›Ч™Чњ" },
			{ oper: "nu", text: "is null" },
			{ oper: "nn", text: "is not null" }
		],
		groupOps: [
			{ op: "AND", text: "Ч”Ч›Чњ" },
			{ op: "OR",  text: "ЧђЧ—Ч“ Чћ" }
		],
		addGroupTitle: "Add subgroup",
		deleteGroupTitle: "Delete group",
		addRuleTitle: "Add rule",
		deleteRuleTitle: "Delete rule",
		operandTitle: "Click to select search operation.",
		resetTitle: "Reset Search Value"
	},
	edit: {
		addCaption: "Ч”Ч•ЧЎЧЈ ЧЁЧ©Ч•ЧћЧ”",
		editCaption: "ЧўЧЁЧ•Чљ ЧЁЧ©Ч•ЧћЧ”",
		bSubmit: "Ч©ЧњЧ—",
		bCancel: "Ч‘ЧЧњ",
		bClose: "ЧЎЧ’Ч•ЧЁ",
		saveData: "Ч ЧЄЧ•Ч Ч™Чќ Ч”Ч©ЧЄЧ Ч•! ЧњЧ©ЧћЧ•ЧЁ?",
		bYes: "Ч›Чџ",
		bNo: "ЧњЧђ",
		bExit: "Ч‘ЧЧњ",
		msg: {
			required: "Ч©Ч“Ч” Ч—Ч•Ч‘Ч”",
			number: "ЧђЧ Чђ, Ч”Ч›Ч ЧЎ ЧћЧЎЧ¤ЧЁ ЧЄЧ§Ч™Чџ",
			minValue: "ЧўЧЁЧљ Ч¦ЧЁЧ™Чљ ЧњЧ”Ч™Ч•ЧЄ Ч’Ч“Ч•Чњ ЧђЧ• Ч©Ч•Ч•Ч” Чњ ",
			maxValue: "ЧўЧЁЧљ Ч¦ЧЁЧ™Чљ ЧњЧ”Ч™Ч•ЧЄ Ч§ЧЧџ ЧђЧ• Ч©Ч•Ч•Ч” Чњ ",
			email: "Ч”Ч™Чђ ЧњЧђ Ч›ЧЄЧ•Ч‘ЧЄ ЧђЧ™Ч™ЧћЧњ ЧЄЧ§Ч™Ч Ч”",
			integer: "ЧђЧ Чђ, Ч”Ч›Ч ЧЎ ЧћЧЎЧ¤ЧЁ Ч©ЧњЧќ",
			date: "ЧђЧ Чђ, Ч”Ч›Ч ЧЎ ЧЄЧђЧЁЧ™Чљ ЧЄЧ§Ч™Чџ",
			url: "Ч”Ч›ЧЄЧ•Ч‘ЧЄ ЧђЧ™Ч Ч” ЧЄЧ§Ч™Ч Ч”. Ч“ЧЁЧ•Ч©Ч” ЧЄЧ—Ч™ЧњЧ™ЧЄ ('http://' ЧђЧ• 'https://')",
			nodefined: " is not defined!",
			novalue: " return value is required!",
			customarray: "Custom function should return array!",
			customfcheck: "Custom function should be present in case of custom checking!"
		}
	},
	view: {
		caption: "Ч”Ч¦Ч’ ЧЁЧ©Ч•ЧћЧ”",
		bClose: "ЧЎЧ’Ч•ЧЁ"
	},
	del: {
		caption: "ЧћЧ—Ч§",
		msg: "Ч”ЧђЧќ ЧњЧћЧ—Ч•Ч§ ЧђЧЄ Ч”ЧЁЧ©Ч•ЧћЧ”/Ч•ЧЄ Ч”ЧћЧЎЧ•ЧћЧ Ч•ЧЄ?",
		bSubmit: "ЧћЧ—Ч§",
		bCancel: "Ч‘ЧЧњ"
	},
	nav: {
		edittext: "",
		edittitle: "ЧўЧЁЧ•Чљ Ч©Ч•ЧЁЧ” ЧћЧЎЧ•ЧћЧ ЧЄ",
		addtext: "",
		addtitle: "Ч”Ч•ЧЎЧЈ Ч©Ч•ЧЁЧ” Ч—Ч“Ч©Ч”",
		deltext: "",
		deltitle: "ЧћЧ—Ч§ Ч©Ч•ЧЁЧ” ЧћЧЎЧ•ЧћЧ ЧЄ",
		searchtext: "",
		searchtitle: "Ч—Ч¤Ч© ЧЁЧ©Ч•ЧћЧ•ЧЄ",
		refreshtext: "",
		refreshtitle: "ЧЧўЧџ Ч’ЧЁЧ™Ч“ ЧћЧ—Ч“Ч©",
		alertcap: "ЧђЧ–Ч”ЧЁЧ”",
		alerttext: "ЧђЧ Чђ, Ч‘Ч—ЧЁ Ч©Ч•ЧЁЧ”",
		viewtext: "",
		viewtitle: "Ч”Ч¦Ч’ Ч©Ч•ЧЁЧ” ЧћЧЎЧ•ЧћЧ ЧЄ",
		savetext: "",
		savetitle: "Save row",
		canceltext: "",
		canceltitle: "Cancel row editing"
	},
	col: {
		caption: "Ч”Ч¦Ч’/Ч”ЧЎЧЄЧЁ ЧўЧћЧ•Ч“Ч•ЧЄ",
		bSubmit: "Ч©ЧњЧ—",
		bCancel: "Ч‘ЧЧњ"
	},
	errors: {
		errcap: "Ч©Ч’Ч™ЧђЧ”",
		nourl: "ЧњЧђ Ч”Ч•Ч’Ч“ЧЁЧ” Ч›ЧЄЧ•Ч‘ЧЄ url",
		norecords: "ЧђЧ™Чџ ЧЁЧ©Ч•ЧћЧ•ЧЄ ЧњЧўЧ‘Ч“",
		model: "ЧђЧ•ЧЁЧљ Ч©Чњ colNames <> colModel!"
	},
	formatter: {
		integer: { thousandsSeparator: " ", defaultValue: "0" },
		number: { decimalSeparator: ".", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: "0.00" },
		currency: { decimalSeparator: ".", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix: "", defaultValue: "0.00" },
		date: {
			dayNames:   [
				"Чђ", "Ч‘", "Ч’", "Ч“", "Ч”", "Ч•", "Ч©",
				"ЧЁЧђЧ©Ч•Чџ", "Ч©Ч Ч™", "Ч©ЧњЧ™Ч©Ч™", "ЧЁЧ‘Ч™ЧўЧ™", "Ч—ЧћЧ™Ч©Ч™", "Ч©Ч™Ч©Ч™", "Ч©Ч‘ЧЄ"
			],
			monthNames: [
				"Ч™Ч Ч•", "Ч¤Ч‘ЧЁ", "ЧћЧЁЧҐ", "ЧђЧ¤ЧЁ", "ЧћЧђЧ™", "Ч™Ч•Ч ", "Ч™Ч•Чњ", "ЧђЧ•Ч’", "ЧЎЧ¤Ч", "ЧђЧ•Ч§", "Ч Ч•Ч‘", "Ч“Ч¦Чћ",
				"Ч™Ч Ч•ЧђЧЁ", "Ч¤Ч‘ЧЁЧ•ЧђЧЁ", "ЧћЧЁЧҐ", "ЧђЧ¤ЧЁЧ™Чњ", "ЧћЧђЧ™", "Ч™Ч•Ч Ч™", "Ч™Ч•ЧњЧ™", "ЧђЧ•Ч’Ч•ЧЎЧ", "ЧЎЧ¤ЧЧћЧ‘ЧЁ", "ЧђЧ•Ч§ЧЧ•Ч‘ЧЁ", "Ч Ч•Ч‘ЧћЧ‘ЧЁ", "Ч“Ч¦ЧћЧ‘ЧЁ"
			],
			AmPm: ["ЧњЧ¤Ч Ч™ Ч”Ч¦Ч”ЧЁЧ™Чќ", "ЧђЧ—ЧЁ Ч”Ч¦Ч”ЧЁЧ™Чќ", "ЧњЧ¤Ч Ч™ Ч”Ч¦Ч”ЧЁЧ™Чќ", "ЧђЧ—ЧЁ Ч”Ч¦Ч”ЧЁЧ™Чќ"],
			S: function (j) {
				return j < 11 || j > 13 ? ["", "", "", ""][Math.min((j - 1) % 10, 3)] : "";
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
		locale: "he"
	},
	locales: {
		// In general the property name is free, but it's recommended to use the names based on
		// http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
		// http://rishida.net/utils/subtags/ and RFC 5646. See Appendix A of RFC 5646 for examples.
		// One can use the lang attribute to specify language tags in HTML, and the xml:lang attribute for XML
		// if it exists. See http://www.w3.org/International/articles/language-tags/#extlang
		he: $.extend({}, locInfo, { name: "ЧўЧ‘ЧЁЧ™ЧЄ", nameEnglish: "Hebrew" }),
		"he-IL": $.extend({}, locInfo, { name: "ЧўЧ‘ЧЁЧ™ЧЄ (Ч™Ч©ЧЁЧђЧњ)", nameEnglish: "Hebrew (Israel)" })
	}
});
}));
