/**
 * @license jqGrid Icelandic Translation
 * jtm@hi.is Univercity of Iceland
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
		recordtext: "SkoГ°a {0} - {1} af {2}",
		emptyrecords: "Engar fГ¦rslur",
		loadtext: "HleГ°ur...",
		pgtext: "SГ­Г°a {0} af {1}",
		pgfirst: "First Page",
		pglast: "Last Page",
		pgnext: "Next Page",
		pgprev: "Previous Page",
		pgrecs: "Records per Page",
		showhide: "Toggle Expand Collapse Grid",
		savetext: "Vistar..."
	},
	search: {
		caption: "Leita...",
		Find: "Leita",
		Reset: "Endursetja",
		odata: [
			{ oper: "eq", text: "sama og" },
			{ oper: "ne", text: "ekki sama og" },
			{ oper: "lt", text: "minna en" },
			{ oper: "le", text: "minna eГ°a jafnt og" },
			{ oper: "gt", text: "stГ¦rra en" },
			{ oper: "ge", text: "stГ¦rra eГ°a jafnt og" },
			{ oper: "bw", text: "byrjar ГЎ" },
			{ oper: "bn", text: "byrjar ekki ГЎ" },
			{ oper: "in", text: "er Г­" },
			{ oper: "ni", text: "er ekki Г­" },
			{ oper: "ew", text: "endar ГЎ" },
			{ oper: "en", text: "endar ekki ГЎ" },
			{ oper: "cn", text: "inniheldur" },
			{ oper: "nc", text: "inniheldur ekki" },
			{ oper: "nu", text: "is null" },
			{ oper: "nn", text: "is not null" }
		],
		groupOps: [
			{ op: "AND", text: "allt" },
			{ op: "OR",  text: "eГ°a" }
		],
		addGroupTitle: "Add subgroup",
		deleteGroupTitle: "Delete group",
		addRuleTitle: "Add rule",
		deleteRuleTitle: "Delete rule",
		operandTitle: "Click to select search operation.",
		resetTitle: "Reset Search Value"
	},
	edit: {
		addCaption: "BГ¦ta viГ° fГ¦rslu",
		editCaption: "Breyta fГ¦rslu",
		bSubmit: "Vista",
		bCancel: "HГ¦tta viГ°",
		bClose: "Loka",
		saveData: "GГ¶gn hafa breyst! Vista breytingar?",
		bYes: "JГЎ",
		bNo: "Nei",
		bExit: "HГ¦tta viГ°",
		msg: {
			required: "Reitur er nauГ°synlegur",
			number: "Vinsamlega settu inn tГ¶lu",
			minValue: "gildi verГ°ur aГ° vera meira en eГ°a jafnt og ",
			maxValue: "gildi verГ°ur aГ° vera minna en eГ°a jafnt og ",
			email: "er ekki lГ¶glegt email",
			integer: "Vinsamlega settu inn tГ¶lu",
			date: "Vinsamlega setti inn dagsetningu",
			url: "er ekki lГ¶glegt URL. Vantar ('http://' eГ°a 'https://')",
			nodefined: " er ekki skilgreint!",
			novalue: " skilagildi nauГ°synlegt!",
			customarray: "Fall skal skila fylki!",
			customfcheck: "Fall skal vera skilgreint!"
		}
	},
	view: {
		caption: "SkoГ°a fГ¦rslu",
		bClose: "Loka"
	},
	del: {
		caption: "EyГ°a",
		msg: "EyГ°a vГ¶ldum fГ¦rslum ?",
		bSubmit: "EyГ°a",
		bCancel: "HГ¦tta viГ°"
	},
	nav: {
		edittext: "",
		edittitle: "Breyta fГ¦rslu",
		addtext: "",
		addtitle: "NГЅ fГ¦rsla",
		deltext: "",
		deltitle: "EyГ°a fГ¦rslu",
		searchtext: "",
		searchtitle: "Leita",
		refreshtext: "",
		refreshtitle: "EndurhlaГ°a",
		alertcap: "ViГ°vГ¶run",
		alerttext: "Vinsamlega veldu fГ¦rslu",
		viewtext: "",
		viewtitle: "SkoГ°a valda fГ¦rslu",
		savetext: "",
		savetitle: "Save row",
		canceltext: "",
		canceltitle: "Cancel row editing"
	},
	col: {
		caption: "SГЅna / fela dГЎlka",
		bSubmit: "Vista",
		bCancel: "HГ¦tta viГ°"
	},
	errors: {
		errcap: "Villa",
		nourl: "Vantar slГіГ°",
		norecords: "Engar fГ¦rslur valdar",
		model: "Lengd colNames <> colModel!"
	},
	formatter: {
		integer: { thousandsSeparator: " ", defaultValue: "0" },
		number: { decimalSeparator: ".", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: "0.00" },
		currency: { decimalSeparator: ".", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix: "", defaultValue: "0.00" },
		date: {
			dayNames:   [
				"Sun", "MГЎn", "Гћri", "MiГ°", "Fim", "FГ¶s", "Lau",
				"Sunnudagur", "MГЎnudagur", "ГћriГ°judagur", "MiГ°vikudagur", "Fimmtudagur", "FГ¶studagur", "Laugardagur"
			],
			monthNames: [
				"Jan", "Feb", "Mar", "Apr", "MaГ­", "JГєn", "JГєl", "ГЃgГє", "Sep", "Oct", "NГіv", "Des",
				"JanГєar", "FebrГєar", "Mars", "AprГ­l", "MaГ­", "JГєnГЅ", "JГєlГЅ", "ГЃgГєst", "September", "OktГіber", "NГіvember", "Desember"
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
		locale: "is"
	},
	locales: {
		// In general the property name is free, but it's recommended to use the names based on
		// http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
		// http://rishida.net/utils/subtags/ and RFC 5646. See Appendix A of RFC 5646 for examples.
		// One can use the lang attribute to specify language tags in HTML, and the xml:lang attribute for XML
		// if it exists. See http://www.w3.org/International/articles/language-tags/#extlang
		is: $.extend({}, locInfo, { name: "Г­slenska", nameEnglish: "Icelandic" }),
		"is-IS": $.extend({}, locInfo, { name: "Г­slenska (ГЌsland)", nameEnglish: "Icelandic (Iceland)" })
	}
});
}));
