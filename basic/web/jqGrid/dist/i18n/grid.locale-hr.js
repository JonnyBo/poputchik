/**
 * @license jqGrid Croatian Translation
 * Version 1.0.1 (developed for jQuery Grid 4.4)
 * msajko@gmail.com
 *
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
		recordtext: "Pregled {0} - {1} od {2}",
		emptyrecords: "Nema zapisa",
		loadtext: "UДЌitavam...",
		pgtext: "Stranica {0} od {1}",
		pgfirst: "First Page",
		pglast: "Last Page",
		pgnext: "Next Page",
		pgprev: "Previous Page",
		pgrecs: "Records per Page",
		showhide: "Toggle Expand Collapse Grid",
		savetext: "Spremanje..."
	},
	search: {
		caption: "TraЕѕi...",
		Find: "PretraЕѕivanje",
		Reset: "PoniЕЎti",
		odata: [
			{ oper: "eq", text: "jednak" },
			{ oper: "ne", text: "nije identiДЌan" },
			{ oper: "lt", text: "manje" },
			{ oper: "le", text: "manje ili identiДЌno" },
			{ oper: "gt", text: "veД‡e" },
			{ oper: "ge", text: "veД‡e ili identiДЌno" },
			{ oper: "bw", text: "poДЌinje sa" },
			{ oper: "bn", text: "ne poДЌinje sa " },
			{ oper: "in", text: "je u" },
			{ oper: "ni", text: "nije u" },
			{ oper: "ew", text: "zavrЕЎava sa" },
			{ oper: "en", text: "ne zavrЕЎava sa" },
			{ oper: "cn", text: "sadrЕѕi" },
			{ oper: "nc", text: "ne sadrЕѕi" },
			{ oper: "nu", text: "is null" },
			{ oper: "nn", text: "is not null" }
		],
		groupOps: [
			{ op: "I", text: "sve" },
			{ op: "ILI",  text: "bilo koji" }
		],
		addGroupTitle: "Add subgroup",
		deleteGroupTitle: "Delete group",
		addRuleTitle: "Add rule",
		deleteRuleTitle: "Delete rule",
		operandTitle: "Click to select search operation.",
		resetTitle: "Reset Search Value"
	},
	edit: {
		addCaption: "Dodaj zapis",
		editCaption: "Promijeni zapis",
		bSubmit: "Preuzmi",
		bCancel: "Odustani",
		bClose: "Zatvri",
		saveData: "Podaci su promijenjeni! Preuzmi promijene?",
		bYes: "Da",
		bNo: "Ne",
		bExit: "Odustani",
		msg: {
			required: "Polje je obavezno",
			number: "Molim, unesite ispravan broj",
			minValue: "Vrijednost mora biti veД‡a ili identiДЌna ",
			maxValue: "Vrijednost mora biti manja ili identiДЌna",
			email: "neispravan e-mail",
			integer: "Molim, unjeti ispravan cijeli broj (integer)",
			date: "Molim, unjeti ispravan datum ",
			url: "neispravan URL. Prefiks je obavezan ('http://' or 'https://')",
			nodefined: " nije definiran!",
			novalue: " zahtjevan podatak je obavezan!",
			customarray: "Opcionalna funkcija trebala bi bili polje (array)!",
			customfcheck: "Custom function should be present in case of custom checking!"

		}
	},
	view: {
		caption: "Otvori zapis",
		bClose: "Zatvori"
	},
	del: {
		caption: "ObriЕЎi",
		msg: "ObriЕЎi oznaДЌen zapis ili viЕЎe njih?",
		bSubmit: "ObriЕЎi",
		bCancel: "Odustani"
	},
	nav: {
		edittext: "",
		edittitle: "Promijeni obiljeЕѕeni red",
		addtext: "",
		addtitle: "Dodaj novi red",
		deltext: "",
		deltitle: "ObriЕЎi obiljeЕѕeni red",
		searchtext: "",
		searchtitle: "PotraЕѕi zapise",
		refreshtext: "",
		refreshtitle: "Ponovo preuzmi podatke",
		alertcap: "Upozorenje",
		alerttext: "Molim, odaberi red",
		viewtext: "",
		viewtitle: "Pregled obiljeЕѕenog reda",
		savetext: "",
		savetitle: "Save row",
		canceltext: "",
		canceltitle: "Cancel row editing"
	},
	col: {
		caption: "ObiljeЕѕi kolonu",
		bSubmit: "Uredu",
		bCancel: "Odustani"
	},
	errors: {
		errcap: "GreЕЎka",
		nourl: "Nedostaje URL",
		norecords: "Bez zapisa za obradu",
		model: "colNames i colModel imaju razliДЌitu duljinu!"
	},
	formatter: {
		integer: { thousandsSeparator: ".", defaultValue: "0" },
		number: { decimalSeparator: ",", thousandsSeparator: ".", decimalPlaces: 2, defaultValue: "0,00" },
		currency: { decimalSeparator: ",", thousandsSeparator: ".", decimalPlaces: 2, prefix: "", suffix: "", defaultValue: "0,00" },
		date: {
			dayNames:   [
				"Ned", "Pon", "Uto", "Sri", "ДЊet", "Pet", "Sub",
				"Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "ДЊetvrtak", "Petak", "Subota"
			],
			monthNames: [
				"Sij", "Velj", "OЕѕu", "Tra", "Svi", "Lip", "Srp", "Kol", "Ruj", "Lis", "Stu", "Pro",
				"SijeДЌanj", "VeljaДЌa", "OЕѕujak", "Travanj", "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"
			],
			AmPm: ["am", "pm", "AM", "PM"],
			S: function () { return ""; },
			srcformat: "Y-m-d",
			newformat: "d.m.Y.",
			masks: {
				// see http://php.net/manual/en/function.date.php for PHP format used in jqGrid
				// and see http://docs.jquery.com/UI/Datepicker/formatDate
				// and https://github.com/jquery/globalize#dates for alternative formats used frequently
				// short date:
				//    d - Day of the month, 2 digits with leading zeros
				//    m - Numeric representation of a month, with leading zeros
				//    Y - A full numeric representation of a year, 4 digits
				ShortDate: "d.m.Y.",	// in jQuery UI Datepicker: "dd.mm.yy."
				// long date:
				//    l - A full textual representation of the day of the week
				//    j - Day of the month without leading zeros
				//    F - A full textual representation of a month
				//    Y - A full numeric representation of a year, 4 digits
				LongDate: "l, j. F Y", // in jQuery UI Datepicker: "dddd, d. MMMM yyyy"
				// long date with long time:
				//    l - A full textual representation of the day of the week
				//    j - Day of the month without leading zeros
				//    F - A full textual representation of a month
				//    Y - A full numeric representation of a year, 4 digits
				//    H - 24-hour format of an hour with leading zeros
				//    i - Minutes with leading zeros
				//    s - Seconds, with leading zeros
				FullDateTime: "l, j. F Y H:i:s", // in jQuery UI Datepicker: "dddd, d. MMMM yyyy HH:mm:ss"
				// month day:
				//    d - Day of the month, 2 digits with leading zeros
				//    F - A full textual representation of a month
				MonthDay: "d F", // in jQuery UI Datepicker: "dd MMMM"
				// short time (without seconds)
				//    H - 24-hour format of an hour with leading zeros
				//    i - Minutes with leading zeros
				ShortTime: "H:i", // in jQuery UI Datepicker: "HH:mm"
				// long time (with seconds)
				//    H - 24-hour format of an hour with leading zeros
				//    i - Minutes with leading zeros
				//    s - Seconds, with leading zeros
				LongTime: "H:i:s", // in jQuery UI Datepicker: "HH:mm:ss"
				// month with year
				//    F - A full textual representation of a month
				//    Y - A full numeric representation of a year, 4 digits
				YearMonth: "F Y" // in jQuery UI Datepicker: "MMMM yyyy"
			}
		}
	}
};
$.jgrid = $.jgrid || {};
$.extend(true, $.jgrid, {
	defaults: {
		locale: "hr"
	},
	locales: {
		// In general the property name is free, but it's recommended to use the names based on
		// http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
		// http://rishida.net/utils/subtags/ and RFC 5646. See Appendix A of RFC 5646 for examples.
		// One can use the lang attribute to specify language tags in HTML, and the xml:lang attribute for XML
		// if it exists. See http://www.w3.org/International/articles/language-tags/#extlang
		hr: $.extend({}, locInfo, { name: "hrvatski", nameEnglish: "Croatian" }),
		"hr-HR": $.extend({}, locInfo, { name: "hrvatski (Hrvatska)", nameEnglish: "Croatian (Croatia)" })
	}
});
}));
