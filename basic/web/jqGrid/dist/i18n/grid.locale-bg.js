/**
 * @license jqGrid Bulgarian Translation
 * Tony Tomov tony@trirand.com
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
		recordtext: "{0} - {1} РѕС‚ {2}",
		emptyrecords: "РќСЏРјР° Р·Р°РїРёСЃ(Рё)",
		loadtext: "Р—Р°СЂРµР¶РґР°Рј...",
		pgtext: "РЎС‚СЂ. {0} РѕС‚ {1}",
		pgfirst: "РџСЉСЂРІР° РЎС‚СЂ.",
		pglast: "РџРѕСЃР»РµРґРЅР° РЎС‚СЂ.",
		pgnext: "РЎР»РµРґРІР°С‰Р° РЎС‚СЂ.",
		pgprev: "РџСЂРµРґРёС€РЅР° РЎС‚СЂ.",
		pgrecs: "Р‘СЂРѕР№ Р·Р°РїРёСЃРё РЅР° РЎС‚СЂ.",
		showhide: "РЎРІРёРІР°РЅРµ/Р Р°Р·С‚СЏРіР°РЅРµ РЅР° С‚Р°Р±Р»РёС†Р°С‚Р°",
		savetext: "Р—Р°РїРёСЃРІР°РЅРµ..."
	},
	search: {
		caption: "РўСЉСЂСЃРµРЅРµ...",
		Find: "РќР°РјРµСЂРё",
		Reset: "РР·С‡РёСЃС‚Рё",
		odata: [
			{ oper: "eq", text: "СЂР°РІРЅРѕ" },
			{ oper: "ne", text: "СЂР°Р·Р»РёС‡РЅРѕ" },
			{ oper: "lt", text: "РїРѕ-РјР°Р»РєРѕ" },
			{ oper: "le", text: "РїРѕ-РјР°Р»РєРѕ РёР»Рё=" },
			{ oper: "gt", text: "РїРѕ-РіРѕР»СЏРјРѕ" },
			{ oper: "ge", text: "РїРѕ-РіРѕР»СЏРјРѕ РёР»Рё =" },
			{ oper: "bw", text: "Р·Р°РїРѕС‡РІР° СЃ" },
			{ oper: "bn", text: "РЅРµ Р·Р°РїРѕС‡РІР° СЃ" },
			{ oper: "in", text: "СЃРµ РЅР°РјРёСЂР° РІ" },
			{ oper: "ni", text: "РЅРµ СЃРµ РЅР°РјРёСЂР° РІ" },
			{ oper: "ew", text: "Р·Р°РІСЉСЂС€РІР° СЃ" },
			{ oper: "en", text: "РЅРµ Р·Р°РІСЉСЂС€Р°РІР° СЃ" },
			{ oper: "cn", text: "СЃСЉРґСЉСЂР¶Р°" },
			{ oper: "nc", text: "РЅРµ СЃСЉРґСЉСЂР¶Р°" },
			{ oper: "nu", text: "Рµ NULL" },
			{ oper: "nn", text: "РЅРµ Рµ NULL" }
		],
		groupOps: [
			{ op: "AND", text: "&nbsp;Р " },
			{ op: "OR", text: "РР›Р" }
		],
		addGroupTitle: "Add subgroup",
		deleteGroupTitle: "Delete group",
		addRuleTitle: "Add rule",
		deleteRuleTitle: "Delete rule",
		operandTitle: "РќР°С‚РёСЃРЅРё Р·Р° РёР·Р±РѕСЂ РЅР° РѕРїРµСЂР°РЅРґ.",
		resetTitle: "РР·С‡РёСЃС‚Рё СЃС‚РѕР№РЅРѕСЃС‚С‚Р°"
	},
	edit: {
		addCaption: "РќРѕРІ Р—Р°РїРёСЃ",
		editCaption: "Р РµРґР°РєС†РёСЏ Р—Р°РїРёСЃ",
		bSubmit: "Р—Р°РїРёС€Рё",
		bCancel: "РР·С…РѕРґ",
		bClose: "Р—Р°С‚РІРѕСЂРё",
		saveData: "Р”Р°РЅРЅРёС‚Рµ СЃР° РїСЂРѕРјРµРЅРµРЅРё! Р”Р° СЃСЉС…СЂР°РЅСЏ Р»Рё РїСЂРѕРјРµРЅРёС‚Рµ?",
		bYes: "Р”Р°",
		bNo: "РќРµ",
		bExit: "РћС‚РєР°Р·",
		msg: {
			required: "РџРѕР»РµС‚Рѕ Рµ Р·Р°РґСЉР»Р¶РёС‚РµР»РЅРѕ",
			number: "Р’СЉРІРµРґРµС‚Рµ РІР°Р»РёРґРЅРѕ С‡РёСЃР»Рѕ!",
			minValue: "СЃС‚РѕР№РЅРѕСЃС‚С‚Р° С‚СЂСЏР±РІР° РґР° Рµ РїРѕ-РіРѕР»СЏРјР° РёР»Рё СЂР°РІРЅР° РѕС‚",
			maxValue: "СЃС‚РѕР№РЅРѕСЃС‚С‚Р° С‚СЂСЏР±РІР° РґР° Рµ РїРѕ-РјР°Р»РєР° РёР»Рё СЂР°РІРЅР° РѕС‚",
			email: "РЅРµ Рµ РІР°Р»РёРґРµРЅ РµР». Р°РґСЂРµСЃ",
			integer: "Р’СЉРІРµРґРµС‚Рµ РІР°Р»РёРґРЅРѕ С†СЏР»Рѕ С‡РёСЃР»Рѕ",
			date: "Р’СЉРІРµРґРµС‚Рµ РІР°Р»РёРґРЅР° РґР°С‚Р°",
			url: "e РЅРµРІР°Р»РёРґРµРЅ URL. РР·РёСЃРєР°РІР° СЃРµ РїСЂРµС„РёРєСЃ('http://' РёР»Рё 'https://')",
			nodefined: " Рµ РЅРµРґРµС„РёРЅРёСЂР°РЅР°!",
			novalue: " РёР·РёСЃРєРІР° РІСЂСЉС‰Р°РЅРµ РЅР° СЃС‚РѕР№РЅРѕСЃС‚!",
			customarray: "РџРѕС‚СЂРµР±. Р¤СѓРЅРєС†РёСЏ С‚СЂСЏР±РІР° РґР° РІСЉСЂРЅРµ РјР°СЃРёРІ!",
			customfcheck: "РџРѕС‚СЂРµР±РёС‚РµР»СЃРєР° С„СѓРЅРєС†РёСЏ Рµ Р·Р°РґСЉР»Р¶РёС‚РµР»РЅР° РїСЂРё С‚РѕР·Рё С‚РёРї РµР»РµРјРµРЅС‚!"
		}
	},
	view: {
		caption: "РџСЂРµРіР»РµРґ Р·Р°РїРёСЃ",
		bClose: "Р—Р°С‚РІРѕСЂРё"
	},
	del: {
		caption: "РР·С‚СЂРёРІР°РЅРµ",
		msg: "Р”Р° РёР·С‚СЂРёСЏ Р»Рё РёР·Р±СЂР°РЅРёСЏС‚ Р·Р°РїРёСЃ?",
		bSubmit: "РР·С‚СЂРёР№",
		bCancel: "РћС‚РєР°Р·"
	},
	nav: {
		edittext: "",
		edittitle: "Р РµРґР°РєС†РёСЏ РёР·Р±СЂР°РЅ Р·Р°РїРёСЃ",
		addtext: "",
		addtitle: "Р”РѕР±Р°РІСЏРЅРµ РЅРѕРІ Р·Р°РїРёСЃ",
		deltext: "",
		deltitle: "РР·С‚СЂРёРІР°РЅРµ РёР·Р±СЂР°РЅ Р·Р°РїРёСЃ",
		searchtext: "",
		searchtitle: "РўСЉСЂСЃРµРЅРµ Р·Р°РїРёСЃ(Рё)",
		refreshtext: "",
		refreshtitle: "РћР±РЅРѕРІРё С‚Р°Р±Р»РёС†Р°",
		alertcap: "РџСЂРµРґСѓРїСЂРµР¶РґРµРЅРёРµ",
		alerttext: "РњРѕР»СЏ, РёР·Р±РµСЂРµС‚Рµ Р·Р°РїРёСЃ",
		viewtext: "",
		viewtitle: "РџСЂРµРіР»РµРґ РёР·Р±СЂР°РЅ Р·Р°РїРёСЃ",
		savetext: "",
		savetitle: "РЎСЉС…СЂР°РЅРё Р·Р°РїРёСЃ",
		canceltext: "",
		canceltitle: "РћС‚РєР°Р· СЂРµРґР°РєС†РёСЏ"
	},
	col: {
		caption: "РР·Р±РµСЂРё РєРѕР»РѕРЅРё",
		bSubmit: "РћРє",
		bCancel: "РР·С…РѕРґ"
	},
	errors: {
		errcap: "Р“СЂРµС€РєР°",
		nourl: "РќСЏРјР° РїРѕСЃРѕС‡РµРЅ url Р°РґСЂРµСЃ",
		norecords: "РќСЏРјР° Р·Р°РїРёСЃ Р·Р° РѕР±СЂР°Р±РѕС‚РєР°",
		model: "РњРѕРґРµР»Р° РЅРµ СЃСЉРѕС‚РІРµС‚СЃС‚РІР° РЅР° РёРјРµРЅР°С‚Р°!"
	},
	formatter: {
		integer: { thousandsSeparator: " ", defaultValue: "0" },
		number: { decimalSeparator: ".", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: "0.00" },
		currency: { decimalSeparator: ".", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix: " Р»РІ.", defaultValue: "0.00" },
		date: {
			dayNames:   [
				"РќРµРґ", "РџРѕРЅ", "Р’С‚", "РЎСЂ", "Р§РµС‚", "РџРµС‚", "РЎСЉР±",
				"РќРµРґРµР»СЏ", "РџРѕРЅРµРґРµР»РЅРёРє", "Р’С‚РѕСЂРЅРёРє", "РЎСЂСЏРґР°", "Р§РµС‚РІСЉСЂС‚СЉРє", "РџРµС‚СЉРє", "РЎСЉР±РѕС‚Р°"
			],
			monthNames: [
				"РЇРЅСѓ", "Р¤РµРІ", "РњР°СЂ", "РђРїСЂ", "РњР°Р№", "Р®РЅРё", "Р®Р»Рё", "РђРІРі", "РЎРµРї", "РћРєС‚", "РќРѕРІ", "Р”РµРє",
				"РЇРЅСѓР°СЂРё", "Р¤РµРІСЂСѓР°СЂРё", "РњР°СЂС‚", "РђРїСЂРёР»", "РњР°Р№", "Р®РЅРё", "Р®Р»Рё", "РђРІРіСѓСЃС‚", "РЎРµРїС‚РµРјРІСЂРё", "РћРєС‚РѕРјРІСЂРё", "РќРѕРµРјРІСЂРё", "Р”РµРєРµРјРІСЂРё"
			],
			AmPm: ["", "", "", ""],
			S: function (j) {
				if (j === 7 || j === 8 || j === 27 || j === 28) {
					return "РјРё";
				}
				return ["РІРё", "СЂРё", "С‚Рё"][Math.min((j - 1) % 10, 2)];
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
		locale: "bg"
	},
	locales: {
		// In general the property name is free, but it's recommended to use the names based on
		// http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
		// http://rishida.net/utils/subtags/ and RFC 5646. See Appendix A of RFC 5646 for examples.
		// One can use the lang attribute to specify language tags in HTML, and the xml:lang attribute for XML
		// if it exists. See http://www.w3.org/International/articles/language-tags/#extlang
		bg: $.extend({}, locInfo, { name: "Р±СЉР»РіР°СЂСЃРєРё", nameEnglish: "Bulgarian" }),
		"bg-BG": $.extend({}, locInfo, { name: "Р±СЉР»РіР°СЂСЃРєРё (Р‘СЉР»РіР°СЂРёСЏ)", nameEnglish: "Bulgarian (Bulgaria)" })
	}
});
}));
