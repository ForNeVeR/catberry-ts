/// <reference path="../typings/tsd.d.ts"/>

declare module 'catberry-l10n-dust-helper' {

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