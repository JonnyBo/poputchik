/**
 * @license jqGrid Ukrainian Translation v1.0 02.07.2009
 * Sergey Dyagovchenko
 * http://d.sumy.ua
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
		recordtext: "РџРµСЂРµРіР»СЏРґ {0} - {1} Р· {2}",
		emptyrecords: "РќРµРјР°С” Р·Р°РїРёСЃС–РІ РґР»СЏ РїРµСЂРµРіР»СЏРґСѓ",
		loadtext: "Р—Р°РІР°РЅС‚Р°Р¶РµРЅРЅСЏ...",
		pgtext: "РЎС‚РѕСЂ. {0} Р· {1}",
		pgfirst: "First Page",
		pglast: "Last Page",
		pgnext: "Next Page",
		pgprev: "Previous Page",
		pgrecs: "Records per Page",
		showhide: "Toggle Expand Collapse Grid",
		savetext: "Р—Р±РµСЂРµР¶РµРЅРЅСЏ..."
	},
	search: {
		caption: "РџРѕС€СѓРє...",
		Find: "Р—РЅР°Р№С‚Рё",
		Reset: "РЎРєРёРґР°РЅРЅСЏ",
		odata: [
			{ oper: "eq", text: "СЂС–РІРЅРѕ" },
			{ oper: "ne", text: "РЅРµ СЂС–РІРЅРѕ" },
			{ oper: "lt", text: "РјРµРЅС€Рµ" },
			{ oper: "le", text: "РјРµРЅС€Рµ Р°Р±Рѕ СЂС–РІРЅРµ" },
			{ oper: "gt", text: "Р±С–Р»СЊС€Рµ" },
			{ oper: "ge", text: "Р±С–Р»СЊС€Рµ Р°Р±Рѕ СЂС–РІРЅРµ" },
			{ oper: "bw", text: "РїРѕС‡РёРЅР°С”С‚СЊСЃСЏ Р·" },
			{ oper: "bn", text: "РЅРµ РїРѕС‡РёРЅР°С”С‚СЊСЃСЏ Р·" },
			{ oper: "in", text: "Р·РЅР°С…РѕРґРёС‚СЊСЃСЏ РІ" },
			{ oper: "ni", text: "РЅРµ Р·РЅР°С…РѕРґРёС‚СЊСЃСЏ РІ" },
			{ oper: "ew", text: "Р·Р°РєС–РЅС‡СѓС”С‚СЊСЃСЏ РЅР°" },
			{ oper: "en", text: "РЅРµ Р·Р°РєС–РЅС‡СѓС”С‚СЊСЃСЏ РЅР°" },
			{ oper: "cn", text: "РјС–СЃС‚РёС‚СЊ" },
			{ oper: "nc", text: "РЅРµ РјС–СЃС‚РёС‚СЊ" },
			{ oper: "nu", text: "is null" },
			{ oper: "nn", text: "is not null" }
		],
		groupOps: [
			{ op: "AND", text: "РІСЃРµ" },
			{ op: "OR",  text: "Р±СѓРґСЊ-СЏРєРёР№" }
		],
		addGroupTitle: "Add subgroup",
		deleteGroupTitle: "Delete group",
		addRuleTitle: "Add rule",
		deleteRuleTitle: "Delete rule",
		operandTitle: "Click to select search operation.",
		resetTitle: "Reset Search Value"
	},
	edit: {
		addCaption: "Р”РѕРґР°С‚Рё Р·Р°РїРёСЃ",
		editCaption: "Р—РјС–РЅРёС‚Рё Р·Р°РїРёСЃ",
		bSubmit: "Р—Р±РµСЂРµРіС‚Рё",
		bCancel: "Р’С–РґРјС–РЅР°",
		bClose: "Р—Р°РєСЂРёС‚Рё",
		saveData: "Р”Рѕ РґР°РЅРЅРёС… Р±СѓР»Рё РІРЅРµСЃРµРЅС– Р·РјС–РЅРё! Р—Р±РµСЂРµРіС‚Рё Р·РјС–РЅРё?",
		bYes: "РўР°Рє",
		bNo: "РќС–",
		bExit: "Р’С–РґРјС–РЅР°",
		msg: {
			required: "РџРѕР»Рµ С” РѕР±РѕРІ'СЏР·РєРѕРІРёРј",
			number: "Р‘СѓРґСЊ Р»Р°СЃРєР°, РІРІРµРґС–С‚СЊ РїСЂР°РІРёР»СЊРЅРµ С‡РёСЃР»Рѕ",
			minValue: "Р·РЅР°С‡РµРЅРЅСЏ РїРѕРІРёРЅРЅРµ Р±СѓС‚Рё Р±С–Р»СЊС€Рµ Р°Р±Рѕ РґРѕСЂС–РІРЅСЋС”",
			maxValue: "Р·РЅР°С‡РµРЅРЅСЏ РїРѕРІРёРЅРЅРѕ Р±СѓС‚Рё РјРµРЅС€Рµ Р°Р±Рѕ РґРѕСЂС–РІРЅСЋС”",
			email: "РЅРµРєРѕСЂРµРєС‚РЅР° Р°РґСЂРµСЃР° РµР»РµРєС‚СЂРѕРЅРЅРѕС— РїРѕС€С‚Рё",
			integer: "Р‘СѓРґСЊ Р»Р°СЃРєР°, РІРІРµРґРµРЅРЅСЏ РґС–Р№СЃРЅРµ С†С–Р»Рµ Р·РЅР°С‡РµРЅРЅСЏ",
			date: "Р‘СѓРґСЊ Р»Р°СЃРєР°, РІРІРµРґРµРЅРЅСЏ РґС–Р№СЃРЅРµ Р·РЅР°С‡РµРЅРЅСЏ РґР°С‚Рё",
			url: "РЅРµ РґС–Р№СЃРЅРёР№ URL. РќРµРѕР±С…С–РґРЅР° РїСЂРёСЃС‚Р°РІРєР° ('http://' or 'https://')",
			nodefined: " is not defined!",
			novalue: " return value is required!",
			customarray: "Custom function should return array!",
			customfcheck: "Custom function should be present in case of custom checking!"
		}
	},
	view: {
		caption: "РџРµСЂРµРіР»СЏРЅСѓС‚Рё Р·Р°РїРёСЃ",
		bClose: "Р—Р°РєСЂРёС‚Рё"
	},
	del: {
		caption: "Р’РёРґР°Р»РёС‚Рё",
		msg: "Р’РёРґР°Р»РёС‚Рё РѕР±СЂР°РЅРёР№ Р·Р°РїРёСЃ(Рё)?",
		bSubmit: "Р’РёРґР°Р»РёС‚Рё",
		bCancel: "Р’С–РґРјС–РЅР°"
	},
	nav: {
		edittext: "",
		edittitle: "Р—РјС–РЅРёС‚Рё РІРёР±СЂР°РЅРёР№ Р·Р°РїРёСЃ",
		addtext: "",
		addtitle: "Р”РѕРґР°С‚Рё РЅРѕРІРёР№ Р·Р°РїРёСЃ",
		deltext: "",
		deltitle: "Р’РёРґР°Р»РёС‚Рё РІРёР±СЂР°РЅРёР№ Р·Р°РїРёСЃ",
		searchtext: "",
		searchtitle: "Р—РЅР°Р№С‚Рё Р·Р°РїРёСЃРё",
		refreshtext: "",
		refreshtitle: "РћРЅРѕРІРёС‚Рё С‚Р°Р±Р»РёС†СЋ",
		alertcap: "РџРѕРїРµСЂРµРґР¶РµРЅРЅСЏ",
		alerttext: "Р‘СѓРґСЊ Р»Р°СЃРєР°, РІРёР±РµСЂС–С‚СЊ Р·Р°РїРёСЃ",
		viewtext: "",
		viewtitle: "РџРµСЂРµРіР»СЏРЅСѓС‚Рё РѕР±СЂР°РЅРёР№ Р·Р°РїРёСЃ",
		savetext: "",
		savetitle: "Save row",
		canceltext: "",
		canceltitle: "Cancel row editing"
	},
	col: {
		caption: "РџРѕРєР°Р·Р°С‚Рё/РџСЂРёС…РѕРІР°С‚Рё СЃС‚РѕРІРїС†С–",
		bSubmit: "Р—Р±РµСЂРµРіС‚Рё",
		bCancel: "Р’С–РґРјС–РЅР°"
	},
	errors: {
		errcap: "РџРѕРјРёР»РєР°",
		nourl: "URL РЅРµ Р·Р°РґР°РЅ",
		norecords: "РќРµРјР°С” Р·Р°РїРёСЃС–РІ РґР»СЏ РѕР±СЂРѕР±РєРё",
		model: "Р§РёСЃР»Рѕ РїРѕР»С–РІ РЅРµ РІС–РґРїРѕРІС–РґР°С” С‡РёСЃР»Сѓ СЃС‚РѕРІРїС†С–РІ С‚Р°Р±Р»РёС†С–!"
	},
	formatter: {
		integer: { thousandsSeparator: " ", defaultValue: "0" },
		number: { decimalSeparator: ",", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: "0,00" },
		currency: { decimalSeparator: ",", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix: "", defaultValue: "0,00" },
		date: {
			dayNames:   [
				"РќРґ", "РџРЅ", "Р’С‚", "РЎСЂ", "Р§С‚", "РџС‚", "РЎР±",
				"РќРµРґС–Р»СЏ", "РџРѕРЅРµРґС–Р»РѕРє", "Р’С–РІС‚РѕСЂРѕРє", "РЎРµСЂРµРґР°", "Р§РµС‚РІРµСЂ", "Рџ'СЏС‚РЅРёС†СЏ", "РЎСѓР±РѕС‚Р°"
			],
			monthNames: [
				"РЎС–С‡", "Р›СЋС‚", "Р‘РµСЂ", "РљРІС–", "РўСЂР°", "Р§РµСЂ", "Р›РёРї", "РЎРµСЂ", "Р’РµСЂ", "Р–РѕРІ", "Р›РёСЃ", "Р“СЂСѓ",
				"РЎС–С‡РµРЅСЊ", "Р›СЋС‚РёР№", "Р‘РµСЂРµР·РµРЅСЊ", "РљРІС–С‚РµРЅСЊ", "РўСЂР°РІРµРЅСЊ", "Р§РµСЂРІРµРЅСЊ", "Р›РёРїРµРЅСЊ", "РЎРµСЂРїРµРЅСЊ", "Р’РµСЂРµСЃРµРЅСЊ", "Р–РѕРІС‚РµРЅСЊ", "Р›РёСЃС‚РѕРїР°Рґ", "Р“СЂСѓРґРµРЅСЊ"
			],
			AmPm: ["am", "pm", "AM", "PM"],
			S: function (j) {
				return j < 11 || j > 13 ? ["st", "nd", "rd", "th"][Math.min((j - 1) % 10, 3)] : "th";
			},
			srcformat: "Y-m-d",
			newformat: "d.m.Y",
			masks: {
				ShortDate: "n.j.Y",
				LongDate: "l, F d, Y",
				FullDateTime: "l, F d, Y G:i:s",
				MonthDay: "F d",
				ShortTime: "G:i",
				LongTime: "G:i:s",
				YearMonth: "F, Y"
			}
		}
	}
};
$.jgrid = $.jgrid || {};
$.extend(true, $.jgrid, {
	defaults: {
		locale: "ua"
	},
	locales: {
		// In general the property name is free, but it's recommended to use the names based on
		// http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
		// http://rishida.net/utils/subtags/ and RFC 5646. See Appendix A of RFC 5646 for examples.
		// One can use the lang attribute to specify language tags in HTML, and the xml:lang attribute for XML
		// if it exists. See http://www.w3.org/International/articles/language-tags/#extlang
		ua: $.extend({}, locInfo, { name: "СѓРєСЂР°С—РЅСЃСЊРєР°", nameEnglish: "Ukrainian" }),
		uk: $.extend({}, locInfo, { name: "СѓРєСЂР°С—РЅСЃСЊРєР°", nameEnglish: "Ukrainian" }),
		"uk-UA": $.extend({}, locInfo, { name: "СѓРєСЂР°С—РЅСЃСЊРєР° (РЈРєСЂР°С—РЅР°)", nameEnglish: "Ukrainian (Ukraine)" })
	}
});
}));
