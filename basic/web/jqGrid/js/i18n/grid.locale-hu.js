/**
 * @license jqGrid Hungarian Translation
 * Еђrszigety ГЃdГЎm udx6bs@freemail.hu
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
		recordtext: "Oldal {0} - {1} / {2}",
		emptyrecords: "Nincs talГЎlat",
		loadtext: "BetГ¶ltГ©s...",
		pgtext: "Oldal {0} / {1}",
		pgfirst: "First Page",
		pglast: "Last Page",
		pgnext: "Next Page",
		pgprev: "Previous Page",
		pgrecs: "Records per Page",
		showhide: "Toggle Expand Collapse Grid",
		savetext: "MentГ©s..."
	},
	search: {
		caption: "KeresГ©s...",
		Find: "Keres",
		Reset: "AlapГ©rtelmezett",
		odata: [
			{ oper: "eq", text: "egyenlЕ‘" },
			{ oper: "ne", text: "nem egyenlЕ‘" },
			{ oper: "lt", text: "kevesebb" },
			{ oper: "le", text: "kevesebb vagy egyenlЕ‘" },
			{ oper: "gt", text: "nagyobb" },
			{ oper: "ge", text: "nagyobb vagy egyenlЕ‘" },
			{ oper: "bw", text: "ezzel kezdЕ‘dik" },
			{ oper: "bn", text: "nem ezzel kezdЕ‘dik" },
			{ oper: "in", text: "tartalmaz" },
			{ oper: "ni", text: "nem tartalmaz" },
			{ oper: "ew", text: "vГ©gzЕ‘dik" },
			{ oper: "en", text: "nem vГ©gzЕ‘dik" },
			{ oper: "cn", text: "tartalmaz" },
			{ oper: "nc", text: "nem tartalmaz" },
			{ oper: "nu", text: "is null" },
			{ oper: "nn", text: "is not null" }
		],
		groupOps: [
			{ op: "AND", text: "all" },
			{ op: "OR",  text: "any" }
		],
		addGroupTitle: "Add subgroup",
		deleteGroupTitle: "Delete group",
		addRuleTitle: "Add rule",
		deleteRuleTitle: "Delete rule",
		operandTitle: "Click to select search operation.",
		resetTitle: "Reset Search Value"
	},
	edit: {
		addCaption: "Гљj tГ©tel",
		editCaption: "TГ©tel szerkesztГ©se",
		bSubmit: "MentГ©s",
		bCancel: "MГ©gse",
		bClose: "BezГЎrГЎs",
		saveData: "A tГ©tel megvГЎltozott! TГ©tel mentГ©se?",
		bYes: "Igen",
		bNo: "Nem",
		bExit: "MГ©gse",
		msg: {
			required: "KГ¶telezЕ‘ mezЕ‘",
			number: "KГ©rjГјk, adjon meg egy helyes szГЎmot",
			minValue: "Nagyobb vagy egyenlЕ‘nek kell lenni mint ",
			maxValue: "Kisebb vagy egyenlЕ‘nek kell lennie mint",
			email: "hibГЎs emailcГ­m",
			integer: "KГ©rjГјk adjon meg egy helyes egГ©sz szГЎmot",
			date: "KГ©rjГјk adjon meg egy helyes dГЎtumot",
			url: "nem helyes cГ­m. ElЕ‘tag kГ¶telezЕ‘ ('http://' vagy 'https://')",
			nodefined: " nem definiГЎlt!",
			novalue: " visszatГ©rГ©si Г©rtГ©k kГ¶telezЕ‘!!",
			customarray: "Custom function should return array!",
			customfcheck: "Custom function should be present in case of custom checking!"
		}
	},
	view: {
		caption: "TГ©tel megtekintГ©se",
		bClose: "BezГЎrГЎs"
	},
	del: {
		caption: "TГ¶rlГ©s",
		msg: "KivГЎlaztott tГ©tel(ek) tГ¶rlГ©se?",
		bSubmit: "TГ¶rlГ©s",
		bCancel: "MГ©gse"
	},
	nav: {
		edittext: "",
		edittitle: "TГ©tel szerkesztГ©se",
		addtext: "",
		addtitle: "Гљj tГ©tel hozzГЎadГЎsa",
		deltext: "",
		deltitle: "TГ©tel tГ¶rlГ©se",
		searchtext: "",
		searchtitle: "KeresГ©s",
		refreshtext: "",
		refreshtitle: "FrissГ­tГ©s",
		alertcap: "FigyelmeztetГ©s",
		alerttext: "KГ©rem vГЎlasszon tГ©telt.",
		viewtext: "",
		viewtitle: "TГ©tel megtekintГ©se",
		savetext: "",
		savetitle: "Save row",
		canceltext: "",
		canceltitle: "Cancel row editing"
	},
	col: {
		caption: "Oszlopok kivГЎlasztГЎsa",
		bSubmit: "Ok",
		bCancel: "MГ©gse"
	},
	errors: {
		errcap: "Hiba",
		nourl: "Nincs URL beГЎllГ­tva",
		norecords: "Nincs feldolgozГЎsra vГЎrГі tГ©tel",
		model: "colNames Г©s colModel hossza nem egyenlЕ‘!"
	},
	formatter: {
		integer: { thousandsSeparator: " ", defaultValue: "0" },
		number: { decimalSeparator: ",", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: "0,00" },
		currency: { decimalSeparator: ",", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix: "", defaultValue: "0,00" },
		date: {
			dayNames:   [
				"Va", "HГ©", "Ke", "Sze", "CsГј", "PГ©", "Szo",
				"VasГЎrnap", "HГ©tfЕ‘", "Kedd", "Szerda", "CsГјtГ¶rtГ¶k", "PГ©ntek", "Szombat"
			],
			monthNames: [
				"Jan", "Feb", "MГЎr", "ГЃpr", "MГЎj", "JГєn", "JГєl", "Aug", "Szep", "Okt", "Nov", "Dec",
				"JanuГЎr", "FebruГЎr", "MГЎrcius", "ГЃprili", "MГЎjus", "JГєnius", "JГєlius", "Augusztus", "Szeptember", "OktГіber", "November", "December"
			],
			AmPm: ["de", "du", "DE", "DU"],
			S: function () { return ".-ik"; },
			srcformat: "Y-m-d",
			newformat: "Y/m/d",
			masks: {
				ShortDate: "Y/j/n",
				LongDate: "Y. F hГі d., l",
				FullDateTime: "l, F d, Y g:i:s A",
				MonthDay: "F d",
				ShortTime: "a g:i",
				LongTime: "a g:i:s",
				YearMonth: "Y, F"
			}
		}
	}
};
$.jgrid = $.jgrid || {};
$.extend(true, $.jgrid, {
	defaults: {
		locale: "hu"
	},
	locales: {
		// In general the property name is free, but it's recommended to use the names based on
		// http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
		// http://rishida.net/utils/subtags/ and RFC 5646. See Appendix A of RFC 5646 for examples.
		// One can use the lang attribute to specify language tags in HTML, and the xml:lang attribute for XML
		// if it exists. See http://www.w3.org/International/articles/language-tags/#extlang
		hu: $.extend({}, locInfo, { name: "magyar", nameEnglish: "Hungarian" }),
		"hu-HU": $.extend({}, locInfo, { name: "magyar (MagyarorszГЎg))", nameEnglish: "Hungarian (Hungary)" })
	}
});
}));
