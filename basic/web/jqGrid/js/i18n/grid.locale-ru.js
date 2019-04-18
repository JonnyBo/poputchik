/**
 * @license jqGrid Russian Translation v1.0 02.07.2009 based on translation by Alexey Kanaev, v1.1 21.01.2009 (http://softcore.com.ru) and 07.01.2015 (http://smartcore.ru)
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
		recordtext: "РџСЂРѕСЃРјРѕС‚СЂ {0} - {1} РёР· {2}",
		emptyrecords: "РќРµС‚ Р·Р°РїРёСЃРµР№ РґР»СЏ РїСЂРѕСЃРјРѕС‚СЂР°",
		loadtext: "Р—Р°РіСЂСѓР·РєР°...",
		pgtext: "РЎС‚СЂ. {0} РёР· {1}",
		pgfirst: "РџРµСЂРІР°СЏ СЃС‚СЂ.",
		pglast: "РџРѕСЃР»РµРґРЅСЏСЏ СЃС‚СЂ.",
		pgnext: "РЎР»РµРґ. СЃС‚СЂ.",
		pgprev: "РџСЂРµРґ. СЃС‚СЂ.",
		pgrecs: "Р—Р°РїРёСЃРµР№ РЅР° СЃС‚СЂ.",
		showhide: "РџРѕРєР°Р·Р°С‚СЊ/СЃРєСЂС‹С‚СЊ С‚Р°Р±Р»РёС†Сѓ",
		savetext: "РЎРѕС…СЂР°РЅРµРЅРёРµ..."
	},
	search: {
		caption: "РџРѕРёСЃРє...",
		Find: "РќР°Р№С‚Рё",
		Reset: "РЎР±СЂРѕСЃ",
		odata: [
			{ oper: "eq", text: "СЂР°РІРЅРѕ" },
			{ oper: "ne", text: "РЅРµ СЂР°РІРЅРѕ" },
			{ oper: "lt", text: "РјРµРЅСЊС€Рµ" },
			{ oper: "le", text: "РјРµРЅСЊС€Рµ РёР»Рё СЂР°РІРЅРѕ" },
			{ oper: "gt", text: "Р±РѕР»СЊС€Рµ" },
			{ oper: "ge", text: "Р±РѕР»СЊС€Рµ РёР»Рё СЂР°РІРЅРѕ" },
			{ oper: "bw", text: "РЅР°С‡РёРЅР°РµС‚СЃСЏ СЃ" },
			{ oper: "bn", text: "РЅРµ РЅР°С‡РёРЅР°РµС‚СЃСЏ СЃ" },
			{ oper: "in", text: "РЅР°С…РѕРґРёС‚СЃСЏ РІ" },
			{ oper: "ni", text: "РЅРµ РЅР°С…РѕРґРёС‚СЃСЏ РІ" },
			{ oper: "ew", text: "Р·Р°РєР°РЅС‡РёРІР°РµС‚СЃСЏ РЅР°" },
			{ oper: "en", text: "РЅРµ Р·Р°РєР°РЅС‡РёРІР°РµС‚СЃСЏ РЅР°" },
			{ oper: "cn", text: "СЃРѕРґРµСЂР¶РёС‚" },
			{ oper: "nc", text: "РЅРµ СЃРѕРґРµСЂР¶РёС‚" },
			{ oper: "nu", text: "СЂР°РІРЅРѕ NULL" },
			{ oper: "nn", text: "РЅРµ СЂР°РІРЅРѕ NULL" }
		],
		groupOps: [
			{ op: "AND", text: "РІСЃРµ" },
			{ op: "OR", text: "Р»СЋР±РѕР№" }
		],
		addGroupTitle: "Р”РѕР±Р°РІРёС‚СЊ РіСЂСѓРїРїСѓ",
		deleteGroupTitle: "РЈРґР°Р»РёС‚СЊ РіСЂСѓРїРїСѓ",
		addRuleTitle: "Р”РѕР±Р°РІРёС‚СЊ РїСЂР°РІРёР»Рѕ",
		deleteRuleTitle: "РЈРґР°Р»РёС‚СЊ РїСЂР°РІРёР»Рѕ",
		operandTitle: "Р’С‹Р±СЂР°С‚СЊ РѕРїРµСЂР°С†РёСЋ РїРѕРёСЃРєР°",
		resetTitle: "РЎР±СЂРѕСЃРёС‚СЊ"
	},
	edit: {
		addCaption: "Р”РѕР±Р°РІРёС‚СЊ Р·Р°РїРёСЃСЊ",
		editCaption: "Р РµРґР°РєС‚РёСЂРѕРІР°С‚СЊ Р·Р°РїРёСЃСЊ",
		bSubmit: "РЎРѕС…СЂР°РЅРёС‚СЊ",
		bCancel: "РћС‚РјРµРЅР°",
		bClose: "Р—Р°РєСЂС‹С‚СЊ",
		saveData: "Р”Р°РЅРЅС‹Рµ Р±С‹Р»Рё РёР·РјРµРЅРµРЅРЅС‹! РЎРѕС…СЂР°РЅРёС‚СЊ РёР·РјРµРЅРµРЅРёСЏ?",
		bYes: "Р”Р°",
		bNo: "РќРµС‚",
		bExit: "РћС‚РјРµРЅР°",
		msg: {
			required: "РџРѕР»Рµ СЏРІР»СЏРµС‚СЃСЏ РѕР±СЏР·Р°С‚РµР»СЊРЅС‹Рј",
			number: "РџРѕР¶Р°Р»СѓР№СЃС‚Р°, РІРІРµРґРёС‚Рµ РїСЂР°РІРёР»СЊРЅРѕРµ С‡РёСЃР»Рѕ",
			minValue: "Р·РЅР°С‡РµРЅРёРµ РґРѕР»Р¶РЅРѕ Р±С‹С‚СЊ Р±РѕР»СЊС€Рµ Р»РёР±Рѕ СЂР°РІРЅРѕ",
			maxValue: "Р·РЅР°С‡РµРЅРёРµ РґРѕР»Р¶РЅРѕ Р±С‹С‚СЊ РјРµРЅСЊС€Рµ Р»РёР±Рѕ СЂР°РІРЅРѕ",
			email: "РЅРµРєРѕСЂСЂРµРєС‚РЅРѕРµ Р·РЅР°С‡РµРЅРёРµ e-mail",
			integer: "РџРѕР¶Р°Р»СѓР№СЃС‚Р°, РІРІРµРґРёС‚Рµ С†РµР»РѕРµ С‡РёСЃР»Рѕ",
			date: "РџРѕР¶Р°Р»СѓР№СЃС‚Р°, РІРІРµРґРёС‚Рµ РїСЂР°РІРёР»СЊРЅСѓСЋ РґР°С‚Сѓ",
			url: "РЅРµРІРµСЂРЅР°СЏ СЃСЃС‹Р»РєР°. РќРµРѕР±С…РѕРґРёРјРѕ РІРІРµСЃС‚Рё РїСЂРµС„РёРєСЃ ('http://' РёР»Рё 'https://')",
			nodefined: " РЅРµ РѕРїСЂРµРґРµР»РµРЅРѕ!",
			novalue: " РІРѕР·РІСЂР°С‰Р°РµРјРѕРµ Р·РЅР°С‡РµРЅРёРµ РѕР±СЏР·Р°С‚РµР»СЊРЅРѕ!",
			customarray: "РџРѕР»СЊР·РѕРІР°С‚РµР»СЊСЃРєР°СЏ С„СѓРЅРєС†РёСЏ РґРѕР»Р¶РЅР° РІРѕР·РІСЂР°С‰Р°С‚СЊ РјР°СЃСЃРёРІ!",
			customfcheck: "РџРѕР»СЊР·РѕРІР°С‚РµР»СЊСЃРєР°СЏ С„СѓРЅРєС†РёСЏ РґРѕР»Р¶РЅР° РїСЂРёСЃСѓС‚СЃС‚РІРѕРІР°С‚СЊ РІ СЃР»СѓС‡Р°Рё РїРѕР»СЊР·РѕРІР°С‚РµР»СЊСЃРєРѕР№ РїСЂРѕРІРµСЂРєРё!"
		}
	},
	view: {
		caption: "РџСЂРѕСЃРјРѕС‚СЂ Р·Р°РїРёСЃРё",
		bClose: "Р—Р°РєСЂС‹С‚СЊ"
	},
	del: {
		caption: "РЈРґР°Р»РёС‚СЊ",
		msg: "РЈРґР°Р»РёС‚СЊ РІС‹Р±СЂР°РЅРЅСѓСЋ Р·Р°РїРёСЃСЊ(Рё)?",
		bSubmit: "РЈРґР°Р»РёС‚СЊ",
		bCancel: "РћС‚РјРµРЅР°"
	},
	nav: {
		edittext: "",
		edittitle: "Р РµРґР°РєС‚РёСЂРѕРІР°С‚СЊ РІС‹Р±СЂР°РЅРЅСѓСЋ Р·Р°РїРёСЃСЊ",
		addtext: "",
		addtitle: "Р”РѕР±Р°РІРёС‚СЊ РЅРѕРІСѓСЋ Р·Р°РїРёСЃСЊ",
		deltext: "",
		deltitle: "РЈРґР°Р»РёС‚СЊ РІС‹Р±СЂР°РЅРЅСѓСЋ Р·Р°РїРёСЃСЊ",
		searchtext: "",
		searchtitle: "РќР°Р№С‚Рё Р·Р°РїРёСЃРё",
		refreshtext: "",
		refreshtitle: "РћР±РЅРѕРІРёС‚СЊ С‚Р°Р±Р»РёС†Сѓ",
		alertcap: "Р’РЅРёРјР°РЅРёРµ",
		alerttext: "РџРѕР¶Р°Р»СѓР№СЃС‚Р°, РІС‹Р±РµСЂРёС‚Рµ Р·Р°РїРёСЃСЊ",
		viewtext: "",
		viewtitle: "РџСЂРѕСЃРјРѕС‚СЂРµС‚СЊ РІС‹Р±СЂР°РЅРЅСѓСЋ Р·Р°РїРёСЃСЊ",
		savetext: "",
		savetitle: "РЎРѕС…СЂР°РЅРёС‚СЊ Р·Р°РїРёСЃСЊ",
		canceltext: "",
		canceltitle: "РћС‚РјРµРЅР° РёР·РјРµРЅРµРЅРёР№"
	},
	col: {
		caption: "РџРѕРєР°Р·Р°С‚СЊ/СЃРєСЂС‹С‚СЊ СЃС‚РѕР»Р±С†С‹",
		bSubmit: "РЎРѕС…СЂР°РЅРёС‚СЊ",
		bCancel: "РћС‚РјРµРЅР°"
	},
	errors: {
		errcap: "РћС€РёР±РєР°",
		nourl: "URL РЅРµ СѓСЃС‚Р°РЅРѕРІР»РµРЅ",
		norecords: "РќРµС‚ Р·Р°РїРёСЃРµР№ РґР»СЏ РѕР±СЂР°Р±РѕС‚РєРё",
		model: "Р§РёСЃР»Рѕ РїРѕР»РµР№ РЅРµ СЃРѕРѕС‚РІРµС‚СЃС‚РІСѓРµС‚ С‡РёСЃР»Сѓ СЃС‚РѕР»Р±С†РѕРІ С‚Р°Р±Р»РёС†С‹!"
	},
	formatter: {
		integer: { thousandsSeparator: " ", defaultValue: "0" },
		number: { decimalSeparator: ",", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: "0,00" },
		currency: { decimalSeparator: ",", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix: "", defaultValue: "0,00" },
		date: {
			dayNames: [
				"Р’СЃ", "РџРЅ", "Р’С‚", "РЎСЂ", "Р§С‚", "РџС‚", "РЎР±",
				"Р’РѕСЃРєСЂРµСЃРµРЅРёРµ", "РџРѕРЅРµРґРµР»СЊРЅРёРє", "Р’С‚РѕСЂРЅРёРє", "РЎСЂРµРґР°", "Р§РµС‚РІРµСЂРі", "РџСЏС‚РЅРёС†Р°", "РЎСѓР±Р±РѕС‚Р°"
			],
			monthNames: [
				"РЇРЅРІ", "Р¤РµРІ", "РњР°СЂ", "РђРїСЂ", "РњР°Р№", "РСЋРЅ", "РСЋР»", "РђРІРі", "РЎРµРЅ", "РћРєС‚", "РќРѕСЏ", "Р”РµРє",
				"РЇРЅРІР°СЂСЊ", "Р¤РµРІСЂР°Р»СЊ", "РњР°СЂС‚", "РђРїСЂРµР»СЊ", "РњР°Р№", "РСЋРЅСЊ", "РСЋР»СЊ", "РђРІРіСѓСЃС‚", "РЎРµРЅС‚СЏР±СЂСЊ", "РћРєС‚СЏР±СЂСЊ", "РќРѕСЏР±СЂСЊ", "Р”РµРєР°Р±СЂСЊ"
			],
			AmPm: ["am", "pm", "AM", "PM"],
			S: function () { return ""; },
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
		locale: "ru"
	},
	locales: {
		// In general the property name is free, but it's recommended to use the names based on
		// http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
		// http://rishida.net/utils/subtags/ and RFC 5646. See Appendix A of RFC 5646 for examples.
		// One can use the lang attribute to specify language tags in HTML, and the xml:lang attribute for XML
		// if it exists. See http://www.w3.org/International/articles/language-tags/#extlang
		ru: $.extend({}, locInfo, { name: "СЂСѓСЃСЃРєРёР№", nameEnglish: "Russian" }),
		"ru-RU": $.extend({}, locInfo, { name: "СЂСѓСЃСЃРєРёР№ (Р РѕСЃСЃРёСЏ)", nameEnglish: "Russian (Russia)" })
	}
});
}));
