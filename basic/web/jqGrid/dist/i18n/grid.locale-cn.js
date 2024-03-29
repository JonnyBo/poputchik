/**
 * @license jqGrid Chinese Translation
 * е’–е•Ўе…” yanhonglei@gmail.com
 * http://www.kafeitu.me
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
		recordtext: "{0} - {1}\u3000е…± {2} жќЎ", // е…±е­—е‰ЌжЇе…Ёи§’з©єж ј
		emptyrecords: "ж— ж•°жЌ®жѕз¤є",
		loadtext: "иЇ»еЏ–дё­...",
		pgtext: " {0} е…± {1} йЎµ",
		pgfirst: "First Page",
		pglast: "Last Page",
		pgnext: "Next Page",
		pgprev: "Previous Page",
		pgrecs: "Records per Page",
		showhide: "Toggle Expand Collapse Grid",
		savetext: "ж­ЈењЁдїќе­..."
	},
	search: {
		caption: "жђњзґў...",
		Find: "жџҐж‰ѕ",
		Reset: "й‡ЌзЅ®",
		odata: [
			{ oper: "eq", text: "з­‰дєЋ\u3000\u3000" },
			{ oper: "ne", text: "дёЌз­‰\u3000\u3000" },
			{ oper: "lt", text: "е°ЏдєЋ\u3000\u3000" },
			{ oper: "le", text: "е°ЏдєЋз­‰дєЋ" },
			{ oper: "gt", text: "е¤§дєЋ\u3000\u3000" },
			{ oper: "ge", text: "е¤§дєЋз­‰дєЋ" },
			{ oper: "bw", text: "ејЂе§‹дєЋ" },
			{ oper: "bn", text: "дёЌејЂе§‹дєЋ" },
			{ oper: "in", text: "е±ћдєЋ\u3000\u3000" },
			{ oper: "ni", text: "дёЌе±ћдєЋ" },
			{ oper: "ew", text: "з»“жќџдєЋ" },
			{ oper: "en", text: "дёЌз»“жќџдєЋ" },
			{ oper: "cn", text: "еЊ…еђ«\u3000\u3000" },
			{ oper: "nc", text: "дёЌеЊ…еђ«" },
			{ oper: "nu", text: "дёЌе­ењЁ" },
			{ oper: "nn", text: "е­ењЁ" }
		],
		groupOps: [
			{ op: "AND", text: "ж‰Ђжњ‰" },
			{ op: "OR",  text: "д»»дёЂ" }
		],
		addGroupTitle: "Add subgroup",
		deleteGroupTitle: "Delete group",
		addRuleTitle: "Add rule",
		deleteRuleTitle: "Delete rule",
		operandTitle: "Click to select search operation.",
		resetTitle: "Reset Search Value"
	},
	edit: {
		addCaption: "ж·»еЉ и®°еЅ•",
		editCaption: "зј–иѕ‘и®°еЅ•",
		bSubmit: "жЏђдє¤",
		bCancel: "еЏ–ж¶€",
		bClose: "е…ій—­",
		saveData: "ж•°жЌ®е·Іж”№еЏпјЊжЇеђ¦дїќе­пјџ",
		bYes: "жЇ",
		bNo: "еђ¦",
		bExit: "еЏ–ж¶€",
		msg: {
			required: "ж­¤е­—ж®µеї…йњЂ",
			number: "иЇ·иѕ“е…Ґжњ‰ж•€ж•°е­—",
			minValue: "иѕ“еЂјеї…йЎ»е¤§дєЋз­‰дєЋ ",
			maxValue: "иѕ“еЂјеї…йЎ»е°ЏдєЋз­‰дєЋ ",
			email: "иї™дёЌжЇжњ‰ж•€зљ„e-mailењ°еќЂ",
			integer: "иЇ·иѕ“е…Ґжњ‰ж•€ж•ґж•°",
			date: "иЇ·иѕ“е…Ґжњ‰ж•€ж—¶й—ґ",
			url: "ж— ж•€зЅ‘еќЂгЂ‚е‰ЌзјЂеї…йЎ»дёє ('http://' ж€– 'https://')",
			nodefined: " жњЄе®љд№‰пјЃ",
			novalue: " йњЂи¦Ѓиї”е›ћеЂјпјЃ",
			customarray: "и‡Єе®љд№‰е‡Ѕж•°йњЂи¦Ѓиї”е›ћж•°з»„пјЃ",
			customfcheck: "еї…йЎ»жњ‰и‡Єе®љд№‰е‡Ѕж•°!"
		}
	},
	view: {
		caption: "жџҐзњ‹и®°еЅ•",
		bClose: "е…ій—­"
	},
	del: {
		caption: "е€ й™¤",
		msg: "е€ й™¤ж‰ЂйЂ‰и®°еЅ•пјџ",
		bSubmit: "е€ й™¤",
		bCancel: "еЏ–ж¶€"
	},
	nav: {
		edittext: "",
		edittitle: "зј–иѕ‘ж‰ЂйЂ‰и®°еЅ•",
		addtext: "",
		addtitle: "ж·»еЉ ж–°и®°еЅ•",
		deltext: "",
		deltitle: "е€ й™¤ж‰ЂйЂ‰и®°еЅ•",
		searchtext: "",
		searchtitle: "жџҐж‰ѕ",
		refreshtext: "",
		refreshtitle: "е€·ж–°иЎЁж ј",
		alertcap: "жіЁж„Џ",
		alerttext: "иЇ·йЂ‰ж‹©и®°еЅ•",
		viewtext: "",
		viewtitle: "жџҐзњ‹ж‰ЂйЂ‰и®°еЅ•",
		savetext: "",
		savetitle: "Save row",
		canceltext: "",
		canceltitle: "Cancel row editing"
	},
	col: {
		caption: "йЂ‰ж‹©е€—",
		bSubmit: "зЎ®е®љ",
		bCancel: "еЏ–ж¶€"
	},
	errors: {
		errcap: "й”™иЇЇ",
		nourl: "жІЎжњ‰и®ѕзЅ®url",
		norecords: "жІЎжњ‰и¦Ѓе¤„зђ†зљ„и®°еЅ•",
		model: "colNames е’Њ colModel й•їеє¦дёЌз­‰пјЃ"
	},
	formatter: {
		integer: { thousandsSeparator: ",", defaultValue: "0" },
		number: { decimalSeparator: ".", thousandsSeparator: ",", decimalPlaces: 2, defaultValue: "0.00" },
		currency: { decimalSeparator: ".", thousandsSeparator: ",", decimalPlaces: 2, prefix: "", suffix: "", defaultValue: "0.00" },
		date: {
			dayNames:   [
			"ж—Ґ", "дёЂ", "дєЊ", "дё‰", "е››", "дє”", "е…­",
			"жџжњџж—Ґ", "жџжњџдёЂ", "жџжњџдєЊ", "жџжњџдё‰", "жџжњџе››", "жџжњџдє”", "жџжњџе…­"
			],
			monthNames: [
			"дёЂ", "дєЊ", "дё‰", "е››", "дє”", "е…­", "дёѓ", "е…«", "д№ќ", "еЌЃ", "еЌЃдёЂ", "еЌЃдєЊ",
			"дёЂжњ€", "дєЊжњ€", "дё‰жњ€", "е››жњ€", "дє”жњ€", "е…­жњ€", "дёѓжњ€", "е…«жњ€", "д№ќжњ€", "еЌЃжњ€", "еЌЃдёЂжњ€", "еЌЃдєЊжњ€"
			],
			AmPm: ["am", "pm", "дёЉеЌ€", "дё‹еЌ€"],
			S: function () {return "";},
			srcformat: "Y-m-d",
			newformat: "Y-m-d",
			masks: {
				// see http://php.net/manual/en/function.date.php for PHP format used in jqGrid
				// and see http://docs.jquery.com/UI/Datepicker/formatDate
				// and https://github.com/jquery/globalize#dates for alternative formats used frequently
				// one can find on https://github.com/jquery/globalize/tree/master/lib/cultures many
				// information about date, time, numbers and currency formats used in different countries
				// one should just convert the information in PHP format
				// short date:
				//    n - Numeric representation of a month, without leading zeros
				//    j - Day of the month without leading zeros
				//    Y - A full numeric representation of a year, 4 digits
				// example: 3/1/2012 which means 1 March 2012
				ShortDate: "n/j/Y", // in jQuery UI Datepicker: "M/d/yyyy"
				// long date:
				//    l - A full textual representation of the day of the week
				//    F - A full textual representation of a month
				//    d - Day of the month, 2 digits with leading zeros
				//    Y - A full numeric representation of a year, 4 digits
				LongDate: "l, F d, Y", // in jQuery UI Datepicker: "dddd, MMMM dd, yyyy"
				// long date with long time:
				//    l - A full textual representation of the day of the week
				//    F - A full textual representation of a month
				//    d - Day of the month, 2 digits with leading zeros
				//    Y - A full numeric representation of a year, 4 digits
				//    g - 12-hour format of an hour without leading zeros
				//    i - Minutes with leading zeros
				//    s - Seconds, with leading zeros
				//    A - Uppercase Ante meridiem and Post meridiem (AM or PM)
				FullDateTime: "l, F d, Y g:i:s A", // in jQuery UI Datepicker: "dddd, MMMM dd, yyyy h:mm:ss tt"
				// month day:
				//    F - A full textual representation of a month
				//    d - Day of the month, 2 digits with leading zeros
				MonthDay: "F d", // in jQuery UI Datepicker: "MMMM dd"
				// short time (without seconds)
				//    g - 12-hour format of an hour without leading zeros
				//    i - Minutes with leading zeros
				//    A - Uppercase Ante meridiem and Post meridiem (AM or PM)
				ShortTime: "g:i A", // in jQuery UI Datepicker: "h:mm tt"
				// long time (with seconds)
				//    g - 12-hour format of an hour without leading zeros
				//    i - Minutes with leading zeros
				//    s - Seconds, with leading zeros
				//    A - Uppercase Ante meridiem and Post meridiem (AM or PM)
				LongTime: "g:i:s A", // in jQuery UI Datepicker: "h:mm:ss tt"
				// month with year
				//    Y - A full numeric representation of a year, 4 digits
				//    F - A full textual representation of a month
				YearMonth: "F, Y" // in jQuery UI Datepicker: "MMMM, yyyy"
			}
		}
	}
};
$.jgrid = $.jgrid || {};
$.extend(true, $.jgrid, {
	defaults: {
		locale: "cn"
	},
	locales: {
		// In general the property name is free, but it's recommended to use the names based on
		// http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
		// http://rishida.net/utils/subtags/ and RFC 5646. See Appendix A of RFC 5646 for examples.
		// One can use the lang attribute to specify language tags in HTML, and the xml:lang attribute for XML
		// if it exists. See http://www.w3.org/International/articles/language-tags/#extlang
		cn: $.extend({}, locInfo, { name: "дё­ж–‡", nameEnglish: "Chinese" }),
		zh: $.extend({}, locInfo, { name: "дё­ж–‡", nameEnglish: "Chinese" }),
		"zh-CN": $.extend({}, locInfo, { name: "дё­ж–‡(дё­еЌЋдєєж°‘е…±е’Ње›Ѕ)", nameEnglish: "Chinese (Simplified, PRC)" })
	}
});
}));
