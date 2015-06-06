/// <reference path="../typings/tsd.d.ts"/>

declare module 'catberry-uri' {

	class Authority {
		/**
		 * Current user information.https://tools.ietf.org/html/rfc3986#section-3.2.1
		 */
		userInfo: UserInfo;

		/**
		 * Current host.https://tools.ietf.org/html/rfc3986#section-3.2.2
		 */
		host: String;

		/**
		 * Current port.https://tools.ietf.org/html/rfc3986#section-3.2.3
		 */
		port: String;

		/**
		 * Creates new instance of URI authority component parser.https://tools.ietf.org/html/rfc3986#section-3.2
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
		 * Creates new instance of URI query component parser.https://tools.ietf.org/html/rfc3986#section-3.4
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
		 * Current URI scheme.https://tools.ietf.org/html/rfc3986#section-3.1
		 */
		scheme: String;

		/**
		 * Current URI authority.https://tools.ietf.org/html/rfc3986#section-3.2
		 */
		authority: Authority;

		/**
		 * Current URI path.https://tools.ietf.org/html/rfc3986#section-3.3
		 */
		path: String;

		/**
		 * Current URI query.https://tools.ietf.org/html/rfc3986#section-3.4
		 */
		query: Query;

		/**
		 * Current URI fragment.https://tools.ietf.org/html/rfc3986#section-3.5
		 */
		fragment: String;

		/**
		 * Creates new instance of URI according to RFC 3986.
		 * @param uriString URI string to parse components.
		 * 
		 */
		URI(uriString: String);

		/**
		 * Converts a URI reference that might be relative to a given base URIinto the reference's target URI.https://tools.ietf.org/html/rfc3986#section-5.2
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
		 * Recomposes URI components to URI string,https://tools.ietf.org/html/rfc3986#section-5.3
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
		 * Creates new instance of user information component parser.https://tools.ietf.org/html/rfc3986#section-3.2.1
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