/**
 * @license jqGrid Chinese (Taiwan) Translation for v4.2
 * linquize
 * https://github.com/linquize/jqGrid
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
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
		recordtext: "{0} - {1} е…± {2} жўќ",
		emptyrecords: "жІ’жњ‰иЁйЊ„",
		loadtext: "иј‰е…Ґдё­...",
		pgtext: " {0} е…± {1} й Ѓ",
		pgfirst: "First Page",
		pglast: "Last Page",
		pgnext: "Next Page",
		pgprev: "Previous Page",
		pgrecs: "Records per Page",
		showhide: "Toggle Expand Collapse Grid",
		savetext: "ж­ЈењЁе„Іе­..."
	},
	search: {
		caption: "жђње°‹...",
		Find: "жђње°‹",
		Reset: "й‡ЌиЁ­",
		odata: [
			{ oper: "eq", text: "з­‰ж–ј " },
			{ oper: "ne", text: "дёЌз­‰ж–ј " },
			{ oper: "lt", text: "е°Џж–ј " },
			{ oper: "le", text: "е°Џж–јз­‰ж–ј " },
			{ oper: "gt", text: "е¤§ж–ј " },
			{ oper: "ge", text: "е¤§ж–јз­‰ж–ј " },
			{ oper: "bw", text: "й–‹е§‹ж–ј " },
			{ oper: "bn", text: "дёЌй–‹е§‹ж–ј " },
			{ oper: "in", text: "ењЁе…¶дё­ " },
			{ oper: "ni", text: "дёЌењЁе…¶дё­ " },
			{ oper: "ew", text: "зµђжќџж–ј " },
			{ oper: "en", text: "дёЌзµђжќџж–ј " },
			{ oper: "cn", text: "еЊ…еђ« " },
			{ oper: "nc", text: "дёЌеЊ…еђ« " },
			{ oper: "nu", text: "is null" },
			{ oper: "nn", text: "is not null" }
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
		addCaption: "ж–°еўћиЁйЊ„",
		editCaption: "з·ЁијЇиЁйЊ„",
		bSubmit: "жЏђдє¤",
		bCancel: "еЏ–ж¶€",
		bClose: "й—њй–‰",
		saveData: "иі‡ж–™е·Іж”№и®ЉпјЊжЇеђ¦е„Іе­пјџ",
		bYes: "жЇ",
		bNo: "еђ¦",
		bExit: "еЏ–ж¶€",
		msg: {
			required: "ж­¤ж¬„еї…и¦Ѓ",
			number: "и«‹ијёе…Ґжњ‰ж•€зљ„ж•ёе­—",
			minValue: "еЂјеї…й €е¤§ж–јз­‰ж–ј ",
			maxValue: "еЂјеї…й €е°Џж–јз­‰ж–ј ",
			email: "дёЌжЇжњ‰ж•€зљ„e-mailењ°еќЂ",
			integer: "и«‹ијёе…Ґжњ‰ж•€ж•ґж•°",
			date: "и«‹ијёе…Ґжњ‰ж•€ж™‚й–“",
			url: "з¶ІеќЂз„Ўж•€гЂ‚е‰Ќз¶ґеї…й €з‚є ('http://' ж€– 'https://')",
			nodefined: " жњЄе®љзѕ©пјЃ",
			novalue: " йњЂи¦Ѓе‚іе›ћеЂјпјЃ",
			customarray: "и‡ЄиЁ‚е‡Ѕж•ёж‡‰е‚іе›ћй™Је€—пјЃ",
			customfcheck: "и‡ЄиЁ‚жЄўжџҐж‡‰жњ‰и‡ЄиЁ‚е‡Ѕж•ёпјЃ"
		}
	},
	view: {
		caption: "жџҐзњ‹иЁйЊ„",
		bClose: "й—њй–‰"
	},
	del: {
		caption: "е€Єй™¤",
		msg: "е€Єй™¤е·ІйЃёиЁйЊ„пјџ",
		bSubmit: "е€Єй™¤",
		bCancel: "еЏ–ж¶€"
	},
	nav: {
		edittext: "",
		edittitle: "з·ЁијЇе·ІйЃёе€—",
		addtext: "",
		addtitle: "ж–°еўће€—",
		deltext: "",
		deltitle: "е€Єй™¤е·ІйЃёе€—",
		searchtext: "",
		searchtitle: "жђње°‹иЁйЊ„",
		refreshtext: "",
		refreshtitle: "й‡Ќж–°ж•ґзђ†иЎЁж ј",
		alertcap: "и­¦е‘Љ",
		alerttext: "и«‹йЃёж“‡е€—",
		viewtext: "",
		viewtitle: "жЄўи¦–е·ІйЃёе€—",
		savetext: "",
		savetitle: "Save row",
		canceltext: "",
		canceltitle: "Cancel row editing"
	},
	col: {
		caption: "йЃёж“‡ж¬„",
		bSubmit: "зўєе®љ",
		bCancel: "еЏ–ж¶€"
	},
	errors: {
		errcap: "йЊЇиЄ¤",
		nourl: "жњЄиЁ­е®љURL",
		norecords: "з„ЎйњЂи¦Ѓи™•зђ†зљ„иЁйЊ„",
		model: "colNames е’Њ colModel й•·еє¦дёЌеђЊпјЃ"
	},
	formatter: {
		integer: { thousandsSeparator: " ", defaultValue: "0" },
		number: { decimalSeparator: ".", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: "0.00" },
		currency: { decimalSeparator: ".", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix: "", defaultValue: "0.00" },
		date: {
			dayNames: [
				"ж—Ґ", "дёЂ", "дєЊ", "дё‰", "е››", "дє”", "е…­",
				"жџжњџж—Ґ", "жџжњџдёЂ", "жџжњџдєЊ", "жџжњџдё‰", "жџжњџе››", "жџжњџдє”", "жџжњџе…­"
			],
			monthNames: [
				"дёЂ", "дєЊ", "дё‰", "е››", "дє”", "е…­", "дёѓ", "е…«", "д№ќ", "еЌЃ", "еЌЃдёЂ", "еЌЃдєЊ",
				"дёЂжњ€", "дєЊжњ€", "дё‰жњ€", "е››жњ€", "дє”жњ€", "е…­жњ€", "дёѓжњ€", "е…«жњ€", "д№ќжњ€", "еЌЃжњ€", "еЌЃдёЂжњ€", "еЌЃдєЊжњ€"
			],
			AmPm: ["дёЉеЌ€", "дё‹еЌ€", "дёЉеЌ€", "дё‹еЌ€"],
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
		locale: "tw"
	},
	locales: {
		// In general the property name is free, but it's recommended to use the names based on
		// http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
		// http://rishida.net/utils/subtags/ and RFC 5646. See Appendix A of RFC 5646 for examples.
		// One can use the lang attribute to specify language tags in HTML, and the xml:lang attribute for XML
		// if it exists. See http://www.w3.org/International/articles/language-tags/#extlang
		tw: $.extend({}, locInfo, { name: "дё­ж–‡(еЏ°зЃЈ)", nameEnglish: "Chinese (Traditional, Taiwan)" }),
		"zh-TW": $.extend({}, locInfo, { name: "дё­ж–‡(еЏ°зЃЈ)", nameEnglish: "Chinese (Traditional, Taiwan)" })
	}
});
}));
