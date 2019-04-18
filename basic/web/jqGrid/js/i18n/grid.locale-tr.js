/**
 * @license jqGrid Turkish Translation
 * Erhan GГјndoДџan (erhan@trposta.net)
 * http://blog.zakkum.com
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
		recordtext: "{0}-{1} listeleniyor. Toplam:{2}",
		emptyrecords: "KayД±t bulunamadД±",
		loadtext: "YГјkleniyor...",
		pgtext: "{0}/{1}. Sayfa",
		pgfirst: "First Page",
		pglast: "Last Page",
		pgnext: "Next Page",
		pgprev: "Previous Page",
		pgrecs: "Records per Page",
		showhide: "Toggle Expand Collapse Grid",
		savetext: "Kaydedilen..."
	},
	search: {
		caption: "Arama...",
		Find: "Bul",
		Reset: "Temizle",
		odata: [
			{ oper: "eq", text: "eЕџit" },
			{ oper: "ne", text: "eЕџit deДџil" },
			{ oper: "lt", text: "daha az" },
			{ oper: "le", text: "daha az veya eЕџit" },
			{ oper: "gt", text: "daha fazla" },
			{ oper: "ge", text: "daha fazla veya eЕџit" },
			{ oper: "bw", text: "ile baЕџlayan" },
			{ oper: "bn", text: "ile baЕџlamayan" },
			{ oper: "in", text: "iГ§inde" },
			{ oper: "ni", text: "iГ§inde deДџil" },
			{ oper: "ew", text: "ile biten" },
			{ oper: "en", text: "ile bitmeyen" },
			{ oper: "cn", text: "iГ§eren" },
			{ oper: "nc", text: "iГ§ermeyen" },
			{ oper: "nu", text: "is null" },
			{ oper: "nn", text: "is not null" }
		],
		groupOps: [
			{ op: "VE", text: "tГјm" },
			{ op: "VEYA",  text: "herhangi" }
		],
		addGroupTitle: "Add subgroup",
		deleteGroupTitle: "Delete group",
		addRuleTitle: "Add rule",
		deleteRuleTitle: "Delete rule",
		operandTitle: "Click to select search operation.",
		resetTitle: "Reset Search Value"
	},
	edit: {
		addCaption: "KayД±t Ekle",
		editCaption: "KayД±t DГјzenle",
		bSubmit: "GГ¶nder",
		bCancel: "Д°ptal",
		bClose: "Kapat",
		saveData: "Veriler deДџiЕџti! KayД±t edilsin mi?",
		bYes: "Evet",
		bNo: "HayД±t",
		bExit: "Д°ptal",
		msg: {
			required: "Alan gerekli",
			number: "LГјtfen bir numara giriniz",
			minValue: "girilen deДџer daha bГјyГјk ya da buna eЕџit olmalД±dД±r",
			maxValue: "girilen deДџer daha kГјГ§Гјk ya da buna eЕџit olmalД±dД±r",
			email: "geГ§erli bir e-posta adresi deДџildir",
			integer: "LГјtfen bir tamsayД± giriniz",
			url: "GeГ§erli bir URL deДџil. ('http://' or 'https://') Г¶n eki gerekli.",
			nodefined: " is not defined!",
			novalue: " return value is required!",
			customarray: "Custom function should return array!",
			customfcheck: "Custom function should be present in case of custom checking!"
		}
	},
	view: {
		caption: "KayД±t GГ¶rГјntГјle",
		bClose: "Kapat"
	},
	del: {
		caption: "Sil",
		msg: "SeГ§ilen kayД±tlar silinsin mi?",
		bSubmit: "Sil",
		bCancel: "Д°ptal"
	},
	nav: {
		edittext: "",
		edittitle: "SeГ§ili satД±rД± dГјzenle",
		addtext: "",
		addtitle: "Yeni satД±r ekle",
		deltext: "",
		deltitle: "SeГ§ili satД±rД± sil",
		searchtext: "",
		searchtitle: "KayД±tlarД± bul",
		refreshtext: "",
		refreshtitle: "Tabloyu yenile",
		alertcap: "UyarД±",
		alerttext: "LГјtfen bir satД±r seГ§iniz",
		viewtext: "",
		viewtitle: "SeГ§ilen satД±rД± gГ¶rГјntГјle",
		savetext: "",
		savetitle: "Save row",
		canceltext: "",
		canceltitle: "Cancel row editing"
	},
	col: {
		caption: "SГјtunlarД± gГ¶ster/gizle",
		bSubmit: "GГ¶nder",
		bCancel: "Д°ptal"
	},
	errors: {
		errcap: "Hata",
		nourl: "Bir url yapД±landД±rД±lmamД±Еџ",
		norecords: "Д°Еџlem yapД±lacak bir kayД±t yok",
		model: "colNames uzunluДџu <> colModel!"
	},
	formatter: {
		integer: { thousandsSeparator: " ", defaultValue: "0" },
		number: { decimalSeparator: ".", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: "0.00" },
		currency: { decimalSeparator: ".", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix: "", defaultValue: "0.00" },
		date: {
			dayNames:   [
				"Paz", "Pts", "Sal", "Г‡ar", "Per", "Cum", "Cts",
				"Pazar", "Pazartesi", "SalД±", "Г‡arЕџamba", "PerЕџembe", "Cuma", "Cumartesi"
			],
			monthNames: [
				"Oca", "Ећub", "Mar", "Nis", "May", "Haz", "Tem", "AДџu", "Eyl", "Eki", "Kas", "Ara",
				"Ocak", "Ећubat", "Mart", "Nisan", "MayД±s", "Haziran", "Temmuz", "AДџustos", "EylГјl", "Ekim", "KasД±m", "AralД±k"
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
		locale: "tr"
	},
	locales: {
		// In general the property name is free, but it's recommended to use the names based on
		// http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
		// http://rishida.net/utils/subtags/ and RFC 5646. See Appendix A of RFC 5646 for examples.
		// One can use the lang attribute to specify language tags in HTML, and the xml:lang attribute for XML
		// if it exists. See http://www.w3.org/International/articles/language-tags/#extlang
		tr: $.extend({}, locInfo, { name: "TГјrkГ§e", nameEnglish: "Turkish" }),
		"tr-TR": $.extend({}, locInfo, { name: "TГјrkГ§e (TГјrkiye)", nameEnglish: "Turkish (Turkey)" })
	}
});
}));
