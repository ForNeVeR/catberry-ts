/// <reference path="../typings/tsd.d.ts"/>

declare module CatberryUhr {

	class UHR {


		/**
		 * Creates new instance of server-side HTTP(S) request implementation.
		 * 
		 * 
		 */
		UHR();


	}

	class UHRBase {


		/**
		 * Creates new instance of Basic Universal HTTP(S) Request implementation.
		 * 
		 * 
		 */
		UHRBase();

		/**
		 * Does GET request to HTTP server.
		 * @param url URL to request.
		 * @param options Request parameters.
		 * @return Promise for result with status object and content.
		 */
		get(url: string, options: Object): Promise<Object>;

		/**
		 * Does POST request to HTTP server.
		 * @param url URL to request.
		 * @param options Request parameters.
		 * @return Promise for result with status object and content.
		 */
		post(url: string, options: Object): Promise<Object>;

		/**
		 * Does PUT request to HTTP server.
		 * @param url URL to request.
		 * @param options Request parameters.
		 * @return Promise for result with status object and content.
		 */
		put(url: string, options: Object): Promise<Object>;

		/**
		 * Does PATCH request to HTTP server.
		 * @param url URL to request.
		 * @param options Request parameters.
		 * @return Promise for result with status object and content.
		 */
		patch(url: string, options: Object): Promise<Object>;

		/**
		 * Does DELETE request to HTTP server.
		 * @param url URL to request.
		 * @param options Request parameters.
		 * @return Promise for result with status object and content.
		 */
		delete(url: string, options: Object): Promise<Object>;

		/**
		 * Does request with specified parameters.
		 * @param parameters Request parameters.
		 * @return Promise for result with status object and content.
		 */
		request(parameters: Object): Promise<Object>;

		/**
		 * Converts response data according content type.
		 * @param headers HTTP headers.
		 * @param responseData Data from response.
		 * @return Converted data.
		 */
		convertResponse(headers: Object, responseData: string): string;
	}
}

declare module 'catberry-uhr' {
    export = CatberryUhr;
}