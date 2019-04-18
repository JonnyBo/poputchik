/**
 * @license jqGrid Vietnamese Translation
 * LГЄ ДђГ¬nh DЕ©ng dungtdc@gmail.com
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
		recordtext: "View {0} - {1} of {2}",
		emptyrecords: "KhГґng cГі dб»Ї liб»‡u",
		loadtext: "Дђang nбєЎp dб»Ї liб»‡u...",
		pgtext: "Trang {0} trong tб»•ng sб»‘ {1}",
		pgfirst: "First Page",
		pglast: "Last Page",
		pgnext: "Next Page",
		pgprev: "Previous Page",
		pgrecs: "Records per Page",
		showhide: "Toggle Expand Collapse Grid",
		savetext: "Дђang lЖ°u..."
	},
	search: {
		caption: "TГ¬m kiбєїm...",
		Find: "TГ¬m",
		Reset: "Khб»џi tбєЎo lбєЎi",
		odata: [
			{ oper: "eq", text: "bбє±ng" },
			{ oper: "ne", text: "khГґng bбє±ng" },
			{ oper: "lt", text: "bГ© hЖЎn" },
			{ oper: "le", text: "bГ© hЖЎn hoбє·c bбє±ng" },
			{ oper: "gt", text: "lб»›n hЖЎn" },
			{ oper: "ge", text: "lб»›n hЖЎn hoбє·c bбє±ng" },
			{ oper: "bw", text: "bбєЇt Д‘бє§u vб»›i" },
			{ oper: "bn", text: "khГґng bбєЇt Д‘бє§u vб»›i" },
			{ oper: "in", text: "trong" },
			{ oper: "ni", text: "khГґng nбє±m trong" },
			{ oper: "ew", text: "kбєїt thГєc vб»›i" },
			{ oper: "en", text: "khГґng kбєїt thГєc vб»›i" },
			{ oper: "cn", text: "chб»©a" },
			{ oper: "nc", text: "khГґng chб»©a" },
			{ oper: "nu", text: "is null" },
			{ oper: "nn", text: "is not null" }
		],
		groupOps: [
			{ op: "VГЂ", text: "tбєҐt cбєЈ" },
			{ op: "HOбє¶C",  text: "bбєҐt kб»і" }
		],
		addGroupTitle: "Add subgroup",
		deleteGroupTitle: "Delete group",
		addRuleTitle: "Add rule",
		deleteRuleTitle: "Delete rule",
		operandTitle: "Click to select search operation.",
		resetTitle: "Reset Search Value"
	},
	edit: {
		addCaption: "ThГЄm bбєЈn ghi",
		editCaption: "Sб»­a bбєЈn ghi",
		bSubmit: "Gб»­i",
		bCancel: "Hб»§y bб»Џ",
		bClose: "ДђГіng",
		saveData: "Dб»Ї liб»‡u Д‘ГЈ thay Д‘б»•i! CГі lЖ°u thay Д‘б»•i khГґng?",
		bYes: "CГі",
		bNo: "KhГґng",
		bExit: "Hб»§y bб»Џ",
		msg: {
			required: "TrЖ°б»ќng dб»Ї liб»‡u bбєЇt buб»™c cГі",
			number: "HГЈy Д‘iб»Ѓn Д‘Гєng sб»‘",
			minValue: "giГЎ trб»‹ phбєЈi lб»›n hЖЎn hoбє·c bбє±ng vб»›i ",
			maxValue: "giГЎ trб»‹ phбєЈi bГ© hЖЎn hoбє·c bбє±ng",
			email: "khГґng phбєЈi lГ  mб»™t email Д‘Гєng",
			integer: "HГЈy Д‘iб»Ѓn Д‘Гєng sб»‘ nguyГЄn",
			date: "HГЈy Д‘iб»Ѓn Д‘Гєng ngГ y thГЎng",
			url: "khГґng phбєЈi lГ  URL. Khб»џi Д‘бє§u bбєЇt buб»™c lГ  ('http://' hoбє·c 'https://')",
			nodefined: " chЖ°a Д‘Ж°б»Јc Д‘б»‹nh nghД©a!",
			novalue: " giГЎ trб»‹ trбєЈ vб»Ѓ bбєЇt buб»™c phбєЈi cГі!",
			customarray: "HГ m nГЄn trбєЈ vб»Ѓ mб»™t mбєЈng!",
			customfcheck: "Custom function should be present in case of custom checking!"
		}
	},
	view: {
		caption: "Xem bбєЈn ghi",
		bClose: "ДђГіng"
	},
	del: {
		caption: "XГіa",
		msg: "XГіa bбєЈn ghi Д‘ГЈ chб»Ќn?",
		bSubmit: "XГіa",
		bCancel: "Hб»§y bб»Џ"
	},
	nav: {
		edittext: "",
		edittitle: "Sб»­a dГІng Д‘ГЈ chб»Ќn",
		addtext: "",
		addtitle: "ThГЄm mб»›i 1 dГІng",
		deltext: "",
		deltitle: "XГіa dГІng Д‘ГЈ chб»Ќn",
		searchtext: "",
		searchtitle: "TГ¬m bбєЈn ghi",
		refreshtext: "",
		refreshtitle: "NбєЎp lбєЎi lЖ°б»›i",
		alertcap: "CбєЈnh bГЎo",
		alerttext: "HГЈy chб»Ќn mб»™t dГІng",
		viewtext: "",
		viewtitle: "Xem dГІng Д‘ГЈ chб»Ќn",
		savetext: "",
		savetitle: "Save row",
		canceltext: "",
		canceltitle: "Cancel row editing"
	},
	col: {
		caption: "Chб»Ќn cб»™t",
		bSubmit: "OK",
		bCancel: "Hб»§y bб»Џ"
	},
	errors: {
		errcap: "Lб»—i",
		nourl: "khГґng url Д‘Ж°б»Јc Д‘бє·t",
		norecords: "KhГґng cГі bбєЈn ghi Д‘б»ѓ xб»­ lГЅ",
		model: "Chiб»Ѓu dГ i cб»§a colNames <> colModel!"
	},
	formatter: {
		integer: { thousandsSeparator: ".", defaultValue: "0" },
		number: { decimalSeparator: ",", thousandsSeparator: ".", decimalPlaces: 2, defaultValue: "0" },
		currency: { decimalSeparator: ",", thousandsSeparator: ".", decimalPlaces: 2, prefix: "", suffix: "", defaultValue: "0" },
		date: {
			dayNames:   [
				"CN", "T2", "T3", "T4", "T5", "T6", "T7",
				"Chб»§ nhбє­t", "Thб»© hai", "Thб»© ba", "Thб»© tЖ°", "Thб»© nДѓm", "Thб»© sГЎu", "Thб»© bбєЈy"
			],
			monthNames: [
				"Th1", "Th2", "Th3", "Th4", "Th5", "Th6", "Th7", "Th8", "Th9", "Th10", "Th11", "Th12",
				"ThГЎng mб»™t", "ThГЎng hai", "ThГЎng ba", "ThГЎng tЖ°", "ThГЎng nДѓm", "ThГЎng sГЎu", "ThГЎng bбєЈy", "ThГЎng tГЎm", "ThГЎng chГ­n", "ThГЎng mЖ°б»ќi", "ThГЎng mЖ°б»ќi mб»™t", "ThГЎng mЖ°б»ќi hai"
			],
			AmPm: ["sГЎng", "chiб»Ѓu", "SГЃNG", "CHIб»ЂU"],
			S: function (j) {
				return j < 11 || j > 13 ? ["st", "nd", "rd", "th"][Math.min((j - 1) % 10, 3)] : "th";
			},
			srcformat: "Y-m-d",
			newformat: "n/j/Y",
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
		locale: "vi"
	},
	locales: {
		// In general the property name is free, but it's recommended to use the names based on
		// http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
		// http://rishida.net/utils/subtags/ and RFC 5646. See Appendix A of RFC 5646 for examples.
		// One can use the lang attribute to specify language tags in HTML, and the xml:lang attribute for XML
		// if it exists. See http://www.w3.org/International/articles/language-tags/#extlang
		vi: $.extend({}, locInfo, { name: "TiГЄМЃng Viб»‡t", nameEnglish: "Vietnamese" }),
		"vi-VN": $.extend({}, locInfo, { name: "TiГЄМЃng Viб»‡t (Viб»‡t Nam)", nameEnglish: "Vietnamese (Vietnam)" })
	}
});
}));
