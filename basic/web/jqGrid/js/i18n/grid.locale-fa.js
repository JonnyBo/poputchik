/**
 * @license jqGrid Persian Translation
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
			recordtext: "Щ†Щ…Ш§ШЁШґ {0} - {1} Ш§ШІ {2}",
			emptyrecords: "Ш±Ъ©Щ€Ш±ШЇЫЊ ЫЊШ§ЩЃШЄ Щ†ШґШЇ",
			loadtext: "ШЁШ§Ш±ЪЇШІШ§Ш±ЩЉ...",
			pgtext: "ШµЩЃШ­Щ‡ {0} Ш§ШІ {1}",
			pgfirst: "ШµЩЃШ­Щ‡ Ш§Щ€Щ„",
			pglast: "ШµЩЃШ­Щ‡ ШўШ®Ш±",
			pgnext: "ШµЩЃШ­Щ‡ ШЁШ№ШЇ",
			pgprev: "ШµЩЃШ­Щ‡ Щ‚ШЁЩ„",
			pgrecs: "Ш±Ъ©Щ€Ш±ШЇ ШЇШ± ШµЩЃШ­Щ‡",
			showhide: "Toggle Expand Collapse Grid",
			savetext: "ШЇШ± Ш­Ш§Щ„ Ш°Ш®ЫЊШ±Щ‡..."
		},
		search: {
			caption: "Ш¬ШіШЄШ¬Щ€...",
			Find: "ЩЉШ§ЩЃШЄЩ‡ Щ‡Ш§",
			Reset: "Ш§ШІ Щ†Щ€",
			odata: [
				{ oper: "eq", text: "ШЁШ±Ш§ШЁШ±" },
				{ oper: "ne", text: "Щ†Ш§ ШЁШ±Ш§ШЁШ±" },
				{ oper: "lt", text: "Ъ©Щ€Ъ†Ъ©ШЄШ±" },
				{ oper: "le", text: "Ъ©Щ€Ъ†Ъ©ШЄШ± ЩЉШ§ Щ…ШіШ§Щ€ЩЉ" },
				{ oper: "gt", text: "ШЁШІШ±ЪЇШЄШ±" },
				{ oper: "ge", text: "ШЁШІШ±ЪЇШЄШ± ЩЉШ§ Щ…ШіШ§Щ€ЩЉ" },
				{ oper: "bw", text: "ШґШ±Щ€Ш№ ШЁШ§" },
				{ oper: "bn", text: "ШґШ±Щ€Ш№ Щ†ШґЩ€ШЇ ШЁШ§" },
				{ oper: "in", text: "Ш№Ш¶Щ€ ШЁШ§ШґШЇ" },
				{ oper: "ni", text: "Ш№Ш¶Щ€ Ш§ЫЊЩ† Щ†ШЁШ§ШґШЇ" },
				{ oper: "ew", text: "Ш§ШЄЩ…Ш§Щ… ШЁШ§" },
				{ oper: "en", text: "ШЄЩ…Ш§Щ… Щ†ШґЩ€ШЇ ШЁШ§" },
				{ oper: "cn", text: "Ш­Ш§Щ€ЫЊ" },
				{ oper: "nc", text: "Щ†ШЁШ§ШґШЇ Ш­Ш§Щ€ЫЊ" },
				{ oper: "nu", text: "ШЄЩ‡ЫЊ" },
				{ oper: "nn", text: "ШЄЩ‡ЩЉ Щ†ШЁШ§ШґШЇ" }
			],
			groupOps: [
				{ op: "AND", text: "Ъ©Щ„" },
				{ op: "OR",  text: "Щ…Ш¬Щ…Щ€Ш№" }
			],
			addGroupTitle: "Add subgroup",
			deleteGroupTitle: "Delete group",
			addRuleTitle: "Add rule",
			deleteRuleTitle: "Delete rule",
			operandTitle: "Click to select search operation.",
			resetTitle: "ШЄЩ†ШёЫЊЩ… Щ…Ш¬ШЇШЇ Щ…Щ‚ШЇШ§Ш± Ш¬ШіШЄШ¬Щ€"
		},
		edit: {
			addCaption: "Ш§Ш¶Ш§ЩЃЩ‡ Ъ©Ш±ШЇЩ† Ш±Ъ©Щ€Ш±ШЇ",
			editCaption: "Щ€ЩЉШ±Ш§ЩЉШґ Ш±Ъ©Щ€Ш±ШЇ",
			bSubmit: "Ш«ШЁШЄ",
			bCancel: "Ш§Щ†ШµШ±Ш§ЩЃ",
			bClose: "ШЁШіШЄЩ†",
			saveData: "ШЇЫЊШЄШ§ ШЄШєЫЊЫЊШ± Ъ©Ш±ШЇ! Ш°Ш®ЫЊШ±Щ‡ ШґЩ€ШЇШџ",
			bYes: "ШЁЩ„Щ‡",
			bNo: "Ш®ЫЊШ±",
			bExit: "Ш§Щ†ШµШ±Ш§ЩЃ",
			msg: {
				required: "ЩЃЩЉЩ„ШЇЩ‡Ш§ ШЁШ§ЩЉШЇ Ш­ШЄЩ…Ш§ ЩѕШ± ШґЩ€Щ†ШЇ",
				number: "Щ„Ш·ЩЃШ§ Ш№ШЇШЇ Щ…Ш№ШЄШЁШ± Щ€Ш§Ш±ШЇ Ъ©Щ†ЩЉШЇ",
				minValue: "Щ…Щ‚ШЇШ§Ш± Щ€Ш§Ш±ШЇ ШґШЇЩ‡ ШЁШ§ЩЉШЇ ШЁШІШ±ЪЇШЄШ± ЩЉШ§ Щ…ШіШ§Щ€ЩЉ ШЁШ§",
				maxValue: "Щ…Щ‚ШЇШ§Ш± Щ€Ш§Ш±ШЇ ШґШЇЩ‡ ШЁШ§ЩЉШЇ Ъ©Щ€Ъ†Ъ©ШЄШ± ЩЉШ§ Щ…ШіШ§Щ€ЩЉ",
				email: "ЩѕШіШЄ Ш§Щ„Ъ©ШЄШ±Щ€Щ†ЩЉЪ© Щ€Ш§Ш±ШЇ ШґШЇЩ‡ Щ…Ш№ШЄШЁШ± Щ†ЩЉШіШЄ",
				integer: "Щ„Ш·ЩЃШ§ ЩЉЪ© Ш№ШЇШЇ ШµШ­ЩЉШ­ Щ€Ш§Ш±ШЇ Ъ©Щ†ЩЉШЇ",
				date: "Щ„Ш·ЩЃШ§ ЩЉЪ© ШЄШ§Ш±ЩЉШ® Щ…Ш№ШЄШЁШ± Щ€Ш§Ш±ШЇ Ъ©Щ†ЩЉШЇ",
				url: "Ш§ЫЊЩ† ШўШЇШ±Ші ШµШ­ЫЊШ­ Щ†Щ…ЫЊ ШЁШ§ШґШЇ. ЩѕЫЊШґЩ€Щ†ШЇ Щ†ЫЊШ§ШІ Ш§ШіШЄ ('http://' ЫЊШ§ 'https://')",
				nodefined: " ШЄШ№Ш±ЫЊЩЃ Щ†ШґШЇЩ‡!",
				novalue: " Щ…Щ‚ШЇШ§Ш± ШЁШ±ЪЇШґШЄЫЊ Ш§Ш¬ШЁШ§Ш±ЫЊ Ш§ШіШЄ!",
				customarray: "ШЄШ§ШЁШ№ ШґЩ…Ш§ ШЁШ§ЫЊШЇ Щ…Щ‚ШЇШ§Ш± ШўШ±Ш§ЫЊЩ‡ ШЇШ§ШґШЄЩ‡ ШЁШ§ШґШЇ!",
				customfcheck: "ШЁШ±Ш§ЫЊ ШЇШ§ШґШЄЩ† Щ…ШЄШЇ ШЇЩ„Ш®Щ€Ш§Щ‡ ШґЩ…Ш§ ШЁШ§ЫЊШЇ ШіШЄЩ€Щ† ШЁШ§ Ъ†Ъ©ЫЊЩ†ЪЇ ШЇЩ„Ш®Щ€Ш§Щ‡ ШЇШ§ШґШЄЩ‡ ШЁШ§ШґЫЊШЇ!"
			}
		},
		view: {
			caption: "Щ†Щ…Ш§ЫЊШґ Ш±Ъ©Щ€Ш±ШЇ",
			bClose: "ШЁШіШЄЩ†"
		},
		del: {
			caption: "Ш­Ш°ЩЃ",
			msg: "Ш§ШІ Ш­Ш°ЩЃ ЪЇШІЩЉЩ†Щ‡ Щ‡Ш§ЩЉ Ш§Щ†ШЄШ®Ш§ШЁ ШґШЇЩ‡ Щ…Ш·Щ…Ш¦Щ† Щ‡ШіШЄЩЉШЇШџ",
			bSubmit: "Ш­Ш°ЩЃ",
			bCancel: "Ш§ШЁШ·Ш§Щ„"
		},
		nav: {
			edittext: "",
			edittitle: "Щ€ЩЉШ±Ш§ЩЉШґ Ш±ШЇЩЉЩЃ Щ‡Ш§ЩЉ Ш§Щ†ШЄШ®Ш§ШЁ ШґШЇЩ‡",
			addtext: "",
			addtitle: "Ш§ЩЃШІЩ€ШЇЩ† Ш±ШЇЩЉЩЃ Ш¬ШЇЩЉШЇ",
			deltext: "",
			deltitle: "Ш­Ш°ЩЃ Ш±ШЇЫЊЩЃ Щ‡Ш§ЩЉ Ш§Щ†ШЄШ®Ш§ШЁ ШґШЇЩ‡",
			searchtext: "",
			searchtitle: "Ш¬ШіШЄШ¬Щ€ЩЉ Ш±ШЇЩЉЩЃ",
			refreshtext: "",
			refreshtitle: "ШЁШ§ШІЩЉШ§ШЁЩЉ Щ…Ш¬ШЇШЇ ШµЩЃШ­Щ‡",
			alertcap: "Ш§Ш®Ш·Ш§Ш±",
			alerttext: "Щ„Ш·ЩЃШ§ ЩЉЪ© Ш±ШЇЩЉЩЃ Ш§Щ†ШЄШ®Ш§ШЁ Ъ©Щ†ЩЉШЇ",
			viewtext: "",
			viewtitle: "Щ†Щ…Ш§ЫЊШґ Ш±Ъ©Щ€Ш±ШЇ Щ‡Ш§ЫЊ Ш§Щ†ШЄШ®Ш§ШЁ ШґШЇЩ‡",
			savetext: "",
			savetitle: "Save row",
			canceltext: "",
			canceltitle: "Cancel row editing"
		},
		col: {
			caption: "Щ†Щ…Ш§ЩЉШґ/Ш№ШЇЩ… Щ†Щ…Ш§ЩЉШґ ШіШЄЩ€Щ†",
			bSubmit: "Ш«ШЁШЄ",
			bCancel: "Ш§Щ†ШµШ±Ш§ЩЃ"
		},
		errors: {
			errcap: "Ш®Ш·Ш§",
			nourl: "Щ‡ЩЉЪ† ШўШЇШ±ШіЩЉ ШЄЩ†ШёЩЉЩ… Щ†ШґШЇЩ‡ Ш§ШіШЄ",
			norecords: "Щ‡ЩЉЪ† Ш±Ъ©Щ€Ш±ШЇЩЉ ШЁШ±Ш§ЩЉ ЩѕШ±ШЇШ§ШІШґ Щ…Щ€Ш¬Щ€ШЇ Щ†ЩЉШіШЄ",
			model: "Ш·Щ€Щ„ Щ†Ш§Щ… ШіШЄЩ€Щ† Щ‡Ш§ Щ…Ш®Ш§Щ„ЩЃ ШіШЄЩ€Щ† Щ‡Ш§ЩЉ Щ…ШЇЩ„ Щ…ЩЉ ШЁШ§ШґШЇ!"
		},
		formatter: {
			integer: {
				thousandsSeparator: " ",
				defaultValue: "0"
			},
			number: {
				decimalSeparator: ".",
				thousandsSeparator: " ",
				decimalPlaces: 2,
				defaultValue: "0.00"
			},
			currency: {
				decimalSeparator: ".",
				thousandsSeparator: " ",
				decimalPlaces: 2,
				prefix: "",
				suffix: "",
				defaultValue: "0"
			},
			date: {
				dayNames: ["ЩЉЪ©", "ШЇЩ€", "ШіЩ‡", "Ъ†Щ‡Ш§Ш±", "ЩѕЩ†Ш¬", "Ш¬Щ…Ш№", "ШґЩ†ШЁ", "ЩЉЪ©ШґЩ†ШЁЩ‡", "ШЇЩ€ШґЩ†ШЁЩ‡", "ШіЩ‡ ШґЩ†ШЁЩ‡", "Ъ†Щ‡Ш§Ш±ШґЩ†ШЁЩ‡", "ЩѕЩ†Ш¬ШґЩ†ШЁЩ‡", "Ш¬Щ…Ш№Щ‡", "ШґЩ†ШЁЩ‡"],
				monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "ЪШ§Щ†Щ€ЩЉЩ‡", "ЩЃЩ€Ш±ЩЉЩ‡", "Щ…Ш§Ш±Ші", "ШўЩ€Ш±ЩЉЩ„", "Щ…Щ‡", "ЪЩ€Ш¦Щ†", "ЪЩ€Ш¦ЩЉЩ‡", "Ш§Щ€ШЄ", "ШіЩѕШЄШ§Щ…ШЁШ±", "Ш§Ъ©ШЄШЁШ±", "Щ†Щ€Ш§Щ…ШЁШ±", "December"],
				AmPm: ["ШЁ.Шё", "ШЁ.Шё", "Щ‚.Шё", "Щ‚.Шё"],
				S: function (b) {
					return b < 11 || b > 13 ? ["st", "nd", "rd", "th"][Math.min((b - 1) % 10, 3)] : "th";
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
			locale: "fa"
		},
		locales: {
			// In general the property name is free, but it's recommended to use the names based on
			// http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
			// http://rishida.net/utils/subtags/ and RFC 5646. See Appendix A of RFC 5646 for examples.
			// One can use the lang attribute to specify language tags in HTML, and the xml:lang attribute for XML
			// if it exists. See http://www.w3.org/International/articles/language-tags/#extlang
			fa: $.extend({}, locInfo, { name: "ЩЃШ§Ш±ШіЩ‰", nameEnglish: "Persian" }),
			"fa-IR": $.extend({}, locInfo, { name: "ЩЃШ§Ш±ШіЩ‰ (Ш§ЫЊШ±Ш§Щ†)", nameEnglish: "Persian (Iran)" })
		}
	});
}));
