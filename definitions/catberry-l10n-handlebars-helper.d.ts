/// <reference path="../typings/tsd.d.ts"/>

declare module CatberryL10nHandlebarsHelper {

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