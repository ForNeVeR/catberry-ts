/// <reference path="../typings/tsd.d.ts"/>
/// <reference path="catberry-l10n.d.ts"/>
declare module CatberryL10nHandlebarsHelper {

	import LocalizationProvider = CatberryL10n.LocalizationProvider;

	class LocalizationHelper {


		/**
		 * Creates new instance of localization helper.
		 * @param $localizationProvider Localization provider.
		 *
		 */
		LocalizationHelper($localizationProvider: LocalizationProvider);

		/**
		 * Gets handlebars helper for localization.
		 *
		 * @return Handlebars helper function.
		 */
		getHandlebarsHelper(): Function;
	}
}

declare module 'catberry-l10n-handlebars-helper' {
    export = CatberryL10nHandlebarsHelper;
}
