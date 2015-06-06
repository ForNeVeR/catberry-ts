/// <reference path="../typings/tsd.d.ts"/>

declare module 'catberry-l10n' {

	class LocalizationLoader {
		/**
		 * Current files cache.
		 */
		_fileCache: Object;

		/**
		 * Current loading files cache.
		 */
		_loadingCache: Object;

		/**
		 * Current object cache.
		 */
		_objectCache: Object;

		/**
		 * Current localization path.
		 */
		_localizationsPath: string;

		/**
		 * Creates new instance of server-side localization loader.
		 * @param $serviceLocator Locator to resolve dependencies.
		 * @param l10n Localization config.
		 * 
		 */
		LocalizationLoader($serviceLocator: ServiceLocator, l10n: Object);

		/**
		 * Loads localization by locale.
		 * @param locale Locale to load.
		 * 
		 */
		load(locale: string): any;

		/**
		 * Gets connect/express middleware for setting locale to cookieand response with localization file.
		 * 
		 * @return Express/connect middleware.
		 */
		getMiddleware(): Function;

		/**
		 * Sets locale to HTTP response cookie.
		 * @param request HTTP request.
		 * @param response HTTP response.
		 * @param locale Locale name.
		 * 
		 */
		_setLocaleToResponse(request: http.IncomingMessage, response: http.ServerResponse, locale: string): any;
	}

	class LocalizationProvider {


		/**
		 * Creates new instance of localization provider.
		 * @param $localizationLoader Localization loaderto load locales.
		 * @param l10n Localization config.
		 * 
		 */
		LocalizationProvider($localizationLoader: LocalizationLoader, l10n: Object);

		/**
		 * Gets current locale value from context.
		 * @param context Component context.
		 * 
		 */
		getCurrentLocale(context: Object): any;

		/**
		 * Changes current locale value.
		 * @param locale Locale name (i.e. en, en-us, ru etc).
		 * @param context Component context.
		 * 
		 */
		changeLocale(locale: string, context: Object): any;

		/**
		 * Gets localized value for specified locale and key name.
		 * @param locale Locale name (i.e. EN, RU etc).
		 * @param key Localization key.
		 * @return Localized value.
		 */
		get(locale: string, key: string): string;

		/**
		 * Pluralizes localization constant forms by specified key.
		 * @param locale Locale name.
		 * @param key Localization key.
		 * @param n Number to determine plural form.
		 * @return Correct plural form.
		 */
		pluralize(locale: string, key: string, n: number): string;
	}
}