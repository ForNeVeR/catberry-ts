/// <reference path="../typings/tsd.d.ts"/>

declare module CatberryUri {

	class Authority {
		/**
		 * Current user information.
		 */
		userInfo: UserInfo;

		/**
		 * Current host.
		 */
		host: String;

		/**
		 * Current port.
		 */
		port: String;

		/**
		 * Creates new instance of URI authority component parser.
		 * @param authorityString URI authority component string.
		 * 
		 */
		Authority(authorityString: String);

		/**
		 * Clones current authority.
		 * 
		 * @return New clone of current object.
		 */
		clone(): Authority;

		/**
		 * Recombine all authority components into authority string.
		 * 
		 * @return Authority component string.
		 */
		toString(): string;
	}

	class Query {
		/**
		 * Current set of values of query.
		 */
		values: Object;

		/**
		 * Creates new instance of URI query component parser.
		 * @param queryString URI query component string.
		 * 
		 */
		Query(queryString: String);

		/**
		 * Clones current query to a new object.
		 * 
		 * @return New clone of current object.
		 */
		clone(): Query;

		/**
		 * Converts current set of query values to string.
		 * 
		 * @return Query component string.
		 */
		toString(): string;
	}

	class URI {
		/**
		 * Current URI scheme.
		 */
		scheme: String;

		/**
		 * Current URI authority.
		 */
		authority: Authority;

		/**
		 * Current URI path.
		 */
		path: String;

		/**
		 * Current URI query.
		 */
		query: Query;

		/**
		 * Current URI fragment.
		 */
		fragment: String;

		/**
		 * Creates new instance of URI according to RFC 3986.
		 * @param uriString URI string to parse components.
		 * 
		 */
		URI(uriString: String);

		/**
		 * Converts a URI reference that might be relative to a given base URI
		 * @param baseUri Base URI.
		 * @return Resolved URI.
		 */
		resolveRelative(baseUri: URI): URI;

		/**
		 * Clones current URI to a new object.
		 * 
		 * @return New clone of current object.
		 */
		clone(): URI;

		/**
		 * Recomposes URI components to URI string,
		 * 
		 * @return URI string.
		 */
		toString(): string;
	}

	class UserInfo {
		/**
		 * Current user component.
		 */
		user: String;

		/**
		 * Current password.
		 */
		password: String;

		/**
		 * Creates new instance of user information component parser.
		 * @param userInfoString User information component string.
		 * 
		 */
		UserInfo(userInfoString: String);

		/**
		 * Clones current user information.
		 * 
		 * @return New clone of current object.
		 */
		clone(): UserInfo;

		/**
		 * Recombines user information components to userInfo string.
		 * 
		 * @return User information component string.
		 */
		toString(): String;
	}
}

declare module 'catberry-uri' {
    export = CatberryUri;
}