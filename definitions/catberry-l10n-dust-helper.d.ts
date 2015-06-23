/// <reference path="../typings/tsd.d.ts"/>
/// <reference path="catberry-l10n.d.ts"/>
declare module CatberryL10nDustHelper {

	import LocalizationProvider = CatberryL10n.LocalizationProvider;

	class LocalizationHelper {


		/**
		 * Creates new instance of localization helper.
		 * @param $localizationProvider Localization provider.
		 *
		 */
		LocalizationHelper($localizationProvider: LocalizationProvider);

		/**
		 * Gets dust helper for localization.
		 *
		 * @return Dust helper function.
		 */
		getDustHelper(): Function;
	}
}

declare module 'catberry-l10n-dust-helper' {
    export = CatberryL10nDustHelper;
}
