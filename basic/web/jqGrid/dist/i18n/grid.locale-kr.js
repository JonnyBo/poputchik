/**
 * jqGrid Korean Translation
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
		recordtext: "ліґкё° {0} - {1} / {2}",
		emptyrecords: "н‘њм‹њн•  н–‰мќґ м—†мЉµл‹€л‹¤",
		loadtext: "мЎ°нљЊм¤‘...",
		pgtext: "нЋмќґм§Ђ {0} / {1}",
		pgfirst: "First Page",
		pglast: "Last Page",
		pgnext: "Next Page",
		pgprev: "Previous Page",
		pgrecs: "Records per Page",
		showhide: "Toggle Expand Collapse Grid",
		savetext: "м ЂмћҐ м¤‘..."
	},
	search: {
		caption: "кІЂмѓ‰...",
		Find: "м°ѕкё°",
		Reset: "мґ€кё°н™”",
		odata: [
			{ oper: "eq", text: "к°™л‹¤" },
			{ oper: "ne", text: "к°™м§Ђ м•Љл‹¤" },
			{ oper: "lt", text: "мћ‘л‹¤" },
			{ oper: "le", text: "мћ‘к±°л‚ к°™л‹¤" },
			{ oper: "gt", text: "нЃ¬л‹¤" },
			{ oper: "ge", text: "нЃ¬к±°л‚ к°™л‹¤" },
			{ oper: "bw", text: "лЎњ м‹њмћ‘н•њл‹¤" },
			{ oper: "bn", text: "лЎњ м‹њмћ‘н•м§Ђ м•ЉлЉ”л‹¤" },
			{ oper: "in", text: "л‚ґм—ђ мћ€л‹¤" },
			{ oper: "ni", text: "л‚ґм—ђ мћ€м§Ђ м•Љл‹¤" },
			{ oper: "ew", text: "лЎњ лЃќл‚њл‹¤" },
			{ oper: "en", text: "лЎњ лЃќл‚м§Ђ м•ЉлЉ”л‹¤" },
			{ oper: "cn", text: "л‚ґм—ђ мЎґмћ¬н•њл‹¤" },
			{ oper: "nc", text: "л‚ґм—ђ мЎґмћ¬н•м§Ђ м•ЉлЉ”л‹¤" },
			{ oper: "nu", text: "is null" },
			{ oper: "nn", text: "is not null" }
		],
		groupOps: [
			{ op: "AND", text: "м „л¶Ђ" },
			{ op: "OR",  text: "мћ„мќ" }
		],
		addGroupTitle: "Add subgroup",
		deleteGroupTitle: "Delete group",
		addRuleTitle: "Add rule",
		deleteRuleTitle: "Delete rule",
		operandTitle: "Click to select search operation.",
		resetTitle: "Reset Search Value"
	},
	edit: {
		addCaption: "н–‰ м¶”к°Ђ",
		editCaption: "н–‰ м€м •",
		bSubmit: "м „м†Ў",
		bCancel: "м·Ём†Њ",
		bClose: "л‹«кё°",
		saveData: "мћђлЈЊк°Ђ ліЂкІЅлђм—€мЉµл‹€л‹¤! м ЂмћҐн•м‹њкІ мЉµл‹€к№Њ?",
		bYes: "м€",
		bNo: "м•„л‹€м¤",
		bExit: "м·Ём†Њ",
		msg: {
			required: "н•„м€н•­лЄ©мћ…л‹€л‹¤",
			number: "мњ нљЁн•њ лІ€нёлҐј мћ…л Ґн•ґ мЈјм„ёмљ”",
			minValue: "мћ…л Ґк°’мќЂ нЃ¬к±°л‚ к°™м•„м•ј н•©л‹€л‹¤",
			maxValue: "мћ…л Ґк°’мќЂ мћ‘к±°л‚ к°™м•„м•ј н•©л‹€л‹¤",
			email: "мњ нљЁн•м§Ђ м•ЉмќЂ мќґл©”мќјмЈјм†Њмћ…л‹€л‹¤",
			integer: "мњ нљЁн•њ м€«мћђлҐј мћ…л Ґн•м„ёмљ”",
			date: "мњ нљЁн•њ л‚ м§њлҐј мћ…л Ґн•м„ёмљ”",
			url: "мќЂ мњ нљЁн•м§Ђ м•ЉмќЂ URLмћ…л‹€л‹¤. л¬ёмћҐм•ћм—ђ л‹¤мќЊл‹Ём–ґк°Ђ н•„мљ”н•©л‹€л‹¤('http://' or 'https://')",
			nodefined: " мќЂ м •мќлЏ„м§Ђ м•Љм•мЉµл‹€л‹¤!",
			novalue: " л°н™к°’мќґ н•„мљ”н•©л‹€л‹¤!",
			customarray: "м‚¬мљ©мћђм •мќ н•Ём€лЉ” л°°м—ґмќ„ л°н™н•ґм•ј н•©л‹€л‹¤!",
			customfcheck: "Custom function should be present in case of custom checking!"
		}
	},
	view: {
		caption: "н–‰ мЎ°нљЊ",
		bClose: "л‹«кё°"
	},
	del: {
		caption: "м‚­м њ",
		msg: "м„ нѓќлђњ н–‰мќ„ м‚­м њн•м‹њкІ мЉµл‹€к№Њ?",
		bSubmit: "м‚­м њ",
		bCancel: "м·Ём†Њ"
	},
	nav: {
		edittext: "",
		edittitle: "м„ нѓќлђњ н–‰ нЋём§‘",
		addtext: "",
		addtitle: "н–‰ м‚Ѕмћ…",
		deltext: "",
		deltitle: "м„ нѓќлђњ н–‰ м‚­м њ",
		searchtext: "",
		searchtitle: "н–‰ м°ѕкё°",
		refreshtext: "",
		refreshtitle: "к·ёл¦¬л“њ к°±м‹ ",
		alertcap: "кІЅкі ",
		alerttext: "н–‰мќ„ м„ нѓќн•м„ёмљ”",
		viewtext: "",
		viewtitle: "м„ нѓќлђњ н–‰ мЎ°нљЊ",
		savetext: "",
		savetitle: "Save row",
		canceltext: "",
		canceltitle: "Cancel row editing"
	},
	col: {
		caption: "м—ґмќ„ м„ нѓќн•м„ёмљ”",
		bSubmit: "н™•мќё",
		bCancel: "м·Ём†Њ"
	},
	errors: {
		errcap: "м¤лҐ",
		nourl: "м„¤м •лђњ urlмќґ м—†мЉµл‹€л‹¤",
		norecords: "мІл¦¬н•  н–‰мќґ м—†мЉµл‹€л‹¤",
		model: "colNamesмќ кёёмќґк°Ђ colModelкіј мќјм№н•м§Ђ м•ЉмЉµл‹€л‹¤!"
	},
	formatter: {
		integer: { thousandsSeparator: ",", defaultValue: "0" },
		number: { decimalSeparator: ".", thousandsSeparator: ",", decimalPlaces: 2, defaultValue: "0.00" },
		currency: { decimalSeparator: ".", thousandsSeparator: ",", decimalPlaces: 2, prefix: "", suffix: "", defaultValue: "0.00" },
		date: {
			dayNames:   [
				"Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat",
				"мќј", "м›”", "н™”", "м€", "лЄ©", "кё€", "н† "
			],
			monthNames: [
				"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
				"1м›”", "2м›”", "3м›”", "4м›”", "5м›”", "6м›”", "7м›”", "8м›”", "9м›”", "10м›”", "11м›”", "12м›”"
			],
			AmPm: ["am", "pm", "AM", "PM"],
			S: function (j) {
				return j < 11 || j > 13 ? ["st", "nd", "rd", "th"][Math.min((j - 1) % 10, 3)] : "th";
			},
			srcformat: "Y-m-d",
			newformat: "m-d-Y",
			masks: {
				ShortDate: "Y/j/n",
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
		locale: "kr"
	},
	locales: {
		// In general the property name is free, but it's recommended to use the names based on
		// http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
		// http://rishida.net/utils/subtags/ and RFC 5646. See Appendix A of RFC 5646 for examples.
		// One can use the lang attribute to specify language tags in HTML, and the xml:lang attribute for XML
		// if it exists. See http://www.w3.org/International/articles/language-tags/#extlang
		kr: $.extend({}, locInfo, { name: "н•њкµ­м–ґ", nameEnglish: "Korean" }),
		ko: $.extend({}, locInfo, { name: "н•њкµ­м–ґ", nameEnglish: "Korean" }),
		"ko-KR": $.extend({}, locInfo, { name: "н•њкµ­м–ґ (лЊЂн•њлЇјкµ­)", nameEnglish: "Korean (Korea)" })
	}
});
}));
