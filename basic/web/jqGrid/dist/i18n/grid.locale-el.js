/**
 * @license jqGrid Greek (el) Translation
 * Alex Cicovic
 * http://www.alexcicovic.com
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
		emptyrecords: "No records to view",
		loadtext: "О¦ПЊПЃП„П‰ПѓО·...",
		pgtext: "Page {0} of {1}",
		pgfirst: "First Page",
		pglast: "Last Page",
		pgnext: "Next Page",
		pgprev: "Previous Page",
		pgrecs: "Records per Page",
		showhide: "Toggle Expand Collapse Grid",
		savetext: "О‘ПЂОїОёО®ОєОµП…ПѓО·..."
	},
	search: {
		caption: "О‘ОЅО±О¶О®П„О·ПѓО·...",
		Find: "О•ПЌПЃОµПѓО·",
		Reset: "О•ПЂО±ОЅО±П†ОїПЃО¬",
		odata: [
			{ oper: "eq", text: "equal" },
			{ oper: "ne", text: "not equal" },
			{ oper: "lt", text: "less" },
			{ oper: "le", text: "less or equal" },
			{ oper: "gt", text: "greater" },
			{ oper: "ge", text: "greater or equal" },
			{ oper: "bw", text: "begins with" },
			{ oper: "bn", text: "does not begin with" },
			{ oper: "in", text: "is in" },
			{ oper: "ni", text: "is not in" },
			{ oper: "ew", text: "ends with" },
			{ oper: "en", text: "does not end with" },
			{ oper: "cn", text: "contains" },
			{ oper: "nc", text: "does not contain" },
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
		addCaption: "О•О№ПѓО±ОіП‰ОіО® О•ОіОіПЃО±П†О®П‚",
		editCaption: "О•ПЂОµОѕОµПЃОіО±ПѓОЇО± О•ОіОіПЃО±П†О®П‚",
		bSubmit: "ОљО±П„О±П‡ПЋПЃО·ПѓО·",
		bCancel: "О†ОєП…ПЃОї",
		bClose: "ОљО»ОµОЇПѓО№ОјОї",
		saveData: "Data has been changed! Save changes?",
		bYes: "Yes",
		bNo: "No",
		bExit: "Cancel",
		msg: {
			required: "О¤Ої ПЂОµОґОЇОї ОµОЇОЅО±О№ О±ПЂО±ПЃО±ОЇП„О·П„Ої",
			number: "О¤Ої ПЂОµОґОЇОї ОґО­П‡ОµП„О±О№ ОјПЊОЅОї О±ПЃО№ОёОјОїПЌП‚",
			minValue: "О— П„О№ОјО® ПЂПЃО­ПЂОµО№ ОЅО± ОµОЇОЅО±О№ ОјОµОіО±О»ПЌП„ОµПЃО· О® ОЇПѓО· П„ОїП… ",
			maxValue: "О— П„О№ОјО® ПЂПЃО­ПЂОµО№ ОЅО± ОµОЇОЅО±О№ ОјО№ОєПЃПЊП„ОµПЃО· О® ОЇПѓО· П„ОїП… ",
			email: "О— ОґО№ОµПЌОёП…ОЅПѓО· e-mail ОґОµОЅ ОµОЇОЅО±О№ О­ОіОєП…ПЃО·",
			integer: "О¤Ої ПЂОµОґОЇОї ОґО­П‡ОµП„О±О№ ОјПЊОЅОї О±ОєО­ПЃО±О№ОїП…П‚ О±ПЃО№ОёОјОїПЌП‚",
			url: "is not a valid URL. Prefix required ('http://' or 'https://')",
			nodefined: " is not defined!",
			novalue: " return value is required!",
			customarray: "Custom function should return array!",
			customfcheck: "Custom function should be present in case of custom checking!"
		}
	},
	view: {
		caption: "View Record",
		bClose: "Close"
	},
	del: {
		caption: "О”О№О±ОіПЃО±П†О®",
		msg: "О”О№О±ОіПЃО±П†О® П„П‰ОЅ ОµПЂО№О»ОµОіОјО­ОЅП‰ОЅ ОµОіОіПЃО±П†ПЋОЅ;",
		bSubmit: "ОќО±О№",
		bCancel: "О†ОєП…ПЃОї"
	},
	nav: {
		edittext: "",
		edittitle: "О•ПЂОµОѕОµПЃОіО±ПѓОЇО± ОµПЂО№О»ОµОіОјО­ОЅО·П‚ ОµОіОіПЃО±П†О®П‚",
		addtext: "",
		addtitle: "О•О№ПѓО±ОіП‰ОіО® ОЅО­О±П‚ ОµОіОіПЃО±П†О®П‚",
		deltext: "",
		deltitle: "О”О№О±ОіПЃО±П†О® ОµПЂО№О»ОµОіОјО­ОЅО·П‚ ОµОіОіПЃО±П†О®П‚",
		searchtext: "",
		searchtitle: "О•ПЌПЃОµПѓО· О•ОіОіПЃО±П†ПЋОЅ",
		refreshtext: "",
		refreshtitle: "О‘ОЅО±ОЅО­П‰ПѓО· О ОЇОЅО±ОєО±",
		alertcap: "О ПЃОїПѓОїП‡О®",
		alerttext: "О”ОµОЅ О­П‡ОµП„Оµ ОµПЂО№О»О­ОѕОµО№ ОµОіОіПЃО±П†О®",
		viewtext: "",
		viewtitle: "View selected row",
		savetext: "",
		savetitle: "Save row",
		canceltext: "",
		canceltitle: "Cancel row editing"
	},
	col: {
		caption: "О•ОјП†О¬ОЅО№ПѓО· / О‘ПЂПЊОєПЃП…П€О· ОЈП„О·О»ПЋОЅ",
		bSubmit: "ОџОљ",
		bCancel: "О†ОєП…ПЃОї"
	},
	errors: {
		errcap: "ОЈП†О¬О»ОјО±",
		nourl: "О”ОµОЅ О­П‡ОµО№ ОґОїОёОµОЇ ОґО№ОµПЌОёП…ОЅПѓО· П‡ОµО№ПЃО№ПѓОјОїПЌ ОіО№О± П„О· ПѓП…ОіОєОµОєПЃО№ОјО­ОЅО· ОµОЅО­ПЃОіОµО№О±",
		norecords: "О”ОµОЅ П…ПЂО¬ПЃП‡ОїП…ОЅ ОµОіОіПЃО±П†О­П‚ ПЂПЃОїП‚ ОµПЂОµОѕОµПЃОіО±ПѓОЇО±",
		model: "О†ОЅО№ПѓОїП‚ О±ПЃО№ОёОјПЊП‚ ПЂОµОґОЇП‰ОЅ colNames/colModel!"
	},
	formatter: {
		integer: { thousandsSeparator: " ", defaultValue: "0" },
		number: { decimalSeparator: ".", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: "0.00" },
		currency: { decimalSeparator: ".", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix: "", defaultValue: "0.00" },
		date: {
			dayNames:   [
				"ОљП…ПЃ", "О”ОµП…", "О¤ПЃО№", "О¤ОµП„", "О ОµОј", "О О±ПЃ", "ОЈО±ОІ",
				"ОљП…ПЃО№О±ОєО®", "О”ОµП…П„О­ПЃО±", "О¤ПЃОЇП„О·", "О¤ОµП„О¬ПЃП„О·", "О О­ОјПЂП„О·", "О О±ПЃО±ПѓОєОµП…О®", "ОЈО¬ОІОІО±П„Ої"
			],
			monthNames: [
				"О™О±ОЅ", "О¦ОµОІ", "ОњО±ПЃ", "О‘ПЂПЃ", "ОњО±О№", "О™ОїП…ОЅ", "О™ОїП…О»", "О‘П…Оі", "ОЈОµПЂ", "ОџОєП„", "ОќОїОµ", "О”ОµОє",
				"О™О±ОЅОїП…О¬ПЃО№ОїП‚", "О¦ОµОІПЃОїП…О¬ПЃО№ОїП‚", "ОњО¬ПЃП„О№ОїП‚", "О‘ПЂПЃОЇО»О№ОїП‚", "ОњО¬О№ОїП‚", "О™ОїПЌОЅО№ОїП‚", "О™ОїПЌО»О№ОїП‚", "О‘ПЌОіОїП…ПѓП„ОїП‚", "ОЈОµПЂП„О­ОјОІПЃО№ОїП‚", "ОџОєП„ПЋОІПЃО№ОїП‚", "ОќОїО­ОјОІПЃО№ОїП‚", "О”ОµОєО­ОјОІПЃО№ОїП‚"
			],
			AmPm: ["ПЂОј", "ОјОј", "О Оњ", "ОњОњ"],
			S: function (j) {return j === 1 || j > 1 ? ["О·"][Math.min((j - 1) % 10, 3)] : "";},
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
		locale: "el"
	},
	locales: {
		// In general the property name is free, but it's recommended to use the names based on
		// http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
		// http://rishida.net/utils/subtags/ and RFC 5646. See Appendix A of RFC 5646 for examples.
		// One can use the lang attribute to specify language tags in HTML, and the xml:lang attribute for XML
		// if it exists. See http://www.w3.org/International/articles/language-tags/#extlang
		el: $.extend({}, locInfo, { name: "О•О»О»О·ОЅО№ОєО¬", nameEnglish: "Greek" }),
		"el-GR": $.extend({}, locInfo, { name: "О•О»О»О·ОЅО№ОєО¬ (О•О»О»О¬ОґО±)", nameEnglish: "Greek (Greece)" })
	}
});
}));
