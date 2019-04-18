/**
 * @license jqGrid Polish Translation
 * ЕЃukasz Schab lukasz@freetree.pl
 * http://FreeTree.pl
 *
 * Updated names, abbreviations, currency and date/time formats for Polish norms (also corresponding with CLDR v21.0.1 --> http://cldr.unicode.org/index)
 * Tomasz PД™czek tpeczek@gmail.com
 * http://tpeczek.blogspot.com; http://tpeczek.codeplex.com
 *
 * 22-01-2015: Updated locale strings
 * Robert 'Wooya' Gaudyn <wogaew@wp.pl>
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
		recordtext: "PokaЕј {0} - {1} z {2}",
		emptyrecords: "Brak rekordГіw do pokazania",
		loadtext: "ЕЃadowanie...",
		pgtext: "Strona {0} z {1}",
		pgfirst: "Pierwsza strona",
		pglast: "Ostatnia strona",
		pgnext: "NastД™pna strona",
		pgprev: "Poprzednia strona",
		pgrecs: "RekordГіw na stronД™",
		showhide: "PrzeЕ‚Д…cz zwiniД™cie/rozwiniД™cie tabeli",
		savetext: "Trwa zapisywanie..."
	},
	search: {
		caption: "Wyszukiwanie...",
		Find: "Szukaj",
		Reset: "CzyЕ›Д‡",
		odata: [
			{ oper: "eq", text: "dokЕ‚adnie" },
			{ oper: "ne", text: "rГіЕјne od" },
			{ oper: "lt", text: "mniejsze od" },
			{ oper: "le", text: "mniejsze lub rГіwne" },
			{ oper: "gt", text: "wiД™ksze od" },
			{ oper: "ge", text: "wiД™ksze lub rГіwne" },
			{ oper: "bw", text: "zaczyna siД™ od" },
			{ oper: "bn", text: "nie zaczyna siД™ od" },
			{ oper: "in", text: "jest w" },
			{ oper: "ni", text: "nie jest w" },
			{ oper: "ew", text: "koЕ„czy siД™ na" },
			{ oper: "en", text: "nie koЕ„czy siД™ na" },
			{ oper: "cn", text: "zawiera" },
			{ oper: "nc", text: "nie zawiera" },
			{ oper: "nu", text: "jest null" },
			{ oper: "nn", text: "nie jest null" }
		],
		groupOps: [
			{ op: "AND", text: "oraz" },
			{ op: "OR",  text: "lub" }
		],
		addGroupTitle: "Dodaj podgrupД™",
		deleteGroupTitle: "UsuЕ„ grupД™",
		addRuleTitle: "Dodaj reguЕ‚Д™",
		deleteRuleTitle: "UsuЕ„ reguЕ‚Д™",
		operandTitle: "Kliknij, aby wybraД‡ operacjД™ wyszukiwania.",
		resetTitle: "Zresetuj wartoЕ›Д‡ wyszukiwania"
	},
	edit: {
		addCaption: "Dodaj rekord",
		editCaption: "Edytuj rekord",
		bSubmit: "Zapisz",
		bCancel: "Anuluj",
		bClose: "Zamknij",
		saveData: "Dane zostaЕ‚y zmienione! ZapisaД‡ zmiany?",
		bYes: "Tak",
		bNo: "Nie",
		bExit: "Anuluj",
		msg: {
			required: "Pole jest wymagane",
			number: "ProszД™ wpisaД‡ poprawnД… liczbД™",
			minValue: "WartoЕ›Д‡ musi byД‡ wiД™ksza lub rГіwna od",
			maxValue: "WartoЕ›Д‡ musi byД‡ mniejsza lub rГіwna od",
			email: "nie jest poprawnym adresem e-mail",
			integer: "ProszД™ wpisaД‡ poprawnД… liczbД™",
			date: "ProszД™ podaj poprawnД… datД™",
			url: "jest niewЕ‚aЕ›ciwym adresem URL. PamiД™taj o prefiksie ('http://' lub 'https://')",
			nodefined: " niezdefiniowane!",
			novalue: " wymagana jest wartoЕ›Д‡ zwracana!",
			customarray: "Funkcja niestandardowa powinna zwracaД‡ tablicД™!",
			customfcheck: "Funkcja niestandardowa powinna byД‡ obecna w przypadku niestandardowego sprawdzania!"
		}
	},
	view: {
		caption: "PokaЕј rekord",
		bClose: "Zamknij"
	},
	del: {
		caption: "UsuЕ„",
		msg: "Czy usunД…Д‡ wybrany rekord(y)?",
		bSubmit: "UsuЕ„",
		bCancel: "Anuluj"
	},
	nav: {
		edittext: "",
		edittitle: "Edytuj wybrany wiersz",
		addtext: "",
		addtitle: "Dodaj nowy wiersz",
		deltext: "",
		deltitle: "UsuЕ„ wybrany wiersz",
		searchtext: "",
		searchtitle: "Wyszukaj rekord",
		refreshtext: "",
		refreshtitle: "PrzeЕ‚aduj",
		alertcap: "Uwaga",
		alerttext: "ProszД™ wybraД‡ wiersz",
		viewtext: "",
		viewtitle: "PokaЕј wybrany wiersz",
		savetext: "",
		savetitle: "Zapisz wiersz",
		canceltext: "",
		canceltitle: "Anuluj edycjД™ wiersza"
	},
	col: {
		caption: "PokaЕј/Ukryj kolumny",
		bSubmit: "ZatwierdЕє",
		bCancel: "Anuluj"
	},
	errors: {
		errcap: "BЕ‚Д…d",
		nourl: "Brak adresu url",
		norecords: "Brak danych",
		model: "DЕ‚ugoЕ›Д‡ colNames <> colModel!"
	},
	formatter: {
		integer: { thousandsSeparator: " ", defaultValue: "0" },
		number: { decimalSeparator: ",", thousandsSeparator: " ", decimalPlaces: 2, defaultValue: "0,00" },
		currency: { decimalSeparator: ",", thousandsSeparator: " ", decimalPlaces: 2, prefix: "", suffix: " zЕ‚", defaultValue: "0,00" },
		date: {
			dayNames:   [
				"niedz.", "pon.", "wt.", "Е›r.", "czw.", "pt.", "sob.",
				"niedziela", "poniedziaЕ‚ek", "wtorek", "Е›roda", "czwartek", "piД…tek", "sobota"
			],
			monthNames: [
				"sty", "lut", "mar", "kwi", "maj", "cze", "lip", "sie", "wrz", "paЕє", "lis", "gru",
				"styczeЕ„", "luty", "marzec", "kwiecieЕ„", "maj", "czerwiec", "lipiec", "sierpieЕ„", "wrzesieЕ„", "paЕєdziernik", "listopad", "grudzieЕ„"
				],
			AmPm: ["", "", "", ""],
			S: function () { return ""; },
			srcformat: "Y-m-d",
			newformat: "d.m.Y",
			masks: {
				ShortDate: "d.m.y",
				LongDate: "l, j F Y",
				FullDateTime: "l, j F Y H:i:s",
				MonthDay: "j F",
				ShortTime: "H:i",
				LongTime: "H:i:s",
				YearMonth: "F Y"
			}
		}
	}
};
$.jgrid = $.jgrid || {};
$.extend(true, $.jgrid, {
	defaults: {
		locale: "pl"
	},
	locales: {
		// In general the property name is free, but it's recommended to use the names based on
		// http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
		// http://rishida.net/utils/subtags/ and RFC 5646. See Appendix A of RFC 5646 for examples.
		// One can use the lang attribute to specify language tags in HTML, and the xml:lang attribute for XML
		// if it exists. See http://www.w3.org/International/articles/language-tags/#extlang
		pl: $.extend({}, locInfo, { name: "polski", nameEnglish: "Polish" }),
		"pl-PL": $.extend({}, locInfo, { name: "polski (Polska)", nameEnglish: "Polish (Poland)" })
	}
});
}));
