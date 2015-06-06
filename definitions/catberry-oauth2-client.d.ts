/// <reference path="../typings/tsd.d.ts"/>

declare module 'catberry-oauth2-client' {

	class ResourceServer {


		/**
		 * Creates instance of OAuth 2.0 resource server role.
		 * @param $serviceLocator Service locator to resolvedependencies.
		 * @param config Configuration object.
		 * 
		 */
		ResourceServer($serviceLocator: ServiceLocator, config: Object);

		/**
		 * Does request to the resource server.
		 * @param context Current module context.
		 * @param options Request options.
		 * @return Promise for response content.
		 */
		request(context: Object, options: Object): Promise<Object>;

		/**
		 * Gets current access token;
		 * @param context Module context.
		 * @return Access token.
		 */
		getToken(context: Object): String;

		/**
		 * Determines if context is now authorized to do requests.
		 * @param context Module context.
		 * @return true if access to resource server is authorized.
		 */
		isAuthorized(context: Object): Boolean;

		/**
		 * Refreshes authorization or remove access and refresh tokens if failed.
		 * @param context Module context.
		 * @return Promise for nothing.
		 */
		refreshAuthorization(context: Object): Promise<any>;

		/**
		 * Removes access and refresh tokens.
		 * @param context Module context.
		 * @return Promise for nothing.
		 */
		removeAuthorization(context: Object): Promise<any>;
	}

	class AuthorizationCodeFlowEndpoint extends GrantFlowMiddlewareBase {


		/**
		 * Creates new instance of authorization code flow endpoint.
		 * @param $serviceLocator Service locator to resolvedependencies.
		 * @param authConfig Authorization configuration.
		 * @param endpointConfig Endpoint configuration.
		 * 
		 */
		AuthorizationCodeFlowEndpoint($serviceLocator: ServiceLocator, authConfig: Object, endpointConfig: Object);

		/**
		 * Handles endpoint invocation.
		 * @param request HTTP request.
		 * @param response HTTP response.
		 * 
		 */
		handler(request: http.IncomingMessage, response: http.ServerResponse): any;
	}

	class ClientCredentialsFlowEndpoint extends GrantFlowMiddlewareBase {


		/**
		 * Creates new instance of client credentials flow endpoint.
		 * @param $serviceLocator Service locator to resolvedependencies.
		 * @param authConfig Authorization configuration.
		 * @param endpointConfig Endpoint configuration.
		 * 
		 */
		ClientCredentialsFlowEndpoint($serviceLocator: ServiceLocator, authConfig: Object, endpointConfig: Object);

		/**
		 * Handles endpoint invocation.
		 * @param request HTTP request.
		 * @param response HTTP response.
		 * 
		 */
		handler(request: http.IncomingMessage, response: http.ServerResponse): any;
	}

	class InvalidationEndpoint {


		/**
		 * Creates new instance of token invalidation endpoint.
		 * @param $serviceLocator Service locator to resolvedependencies.
		 * @param authConfig Authorization configuration.
		 * @param endpointConfig Endpoint configuration.
		 * 
		 */
		InvalidationEndpoint($serviceLocator: ServiceLocator, authConfig: Object, endpointConfig: Object);

		/**
		 * Handles endpoint invocation.
		 * @param request HTTP request.
		 * @param response HTTP response.
		 * 
		 */
		handler(request: http.IncomingMessage, response: http.ServerResponse): any;
	}

	class PasswordCredentialsFlowEndpoint extends GrantFlowMiddlewareBase {


		/**
		 * Creates new instance of password credentials flow endpoint.
		 * @param $serviceLocator Service locator to resolvedependencies.
		 * @param authConfig Authorization configuration.
		 * @param endpointConfig Endpoint configuration.
		 * 
		 */
		PasswordCredentialsFlowEndpoint($serviceLocator: ServiceLocator, authConfig: Object, endpointConfig: Object);

		/**
		 * Handles middleware endpoint.
		 * @param request HTTP request.
		 * @param response HTTP response.
		 * 
		 */
		handler(request: http.IncomingMessage, response: http.ServerResponse): any;
	}

	class RefreshTokenFlowEndpoint extends GrantFlowMiddlewareBase {


		/**
		 * Creates new instance of refresh token flow endpoint.
		 * @param $serviceLocator Service locator to resolvedependencies.
		 * @param authConfig Authorization configuration.
		 * @param endpointConfig Endpoint configuration.
		 * 
		 */
		RefreshTokenFlowEndpoint($serviceLocator: ServiceLocator, authConfig: Object, endpointConfig: Object);

		/**
		 * Handles endpoint invocation.
		 * @param request HTTP request.
		 * @param response HTTP response.
		 * 
		 */
		handler(request: http.IncomingMessage, response: http.ServerResponse): any;
	}

	class AuthorizationCodeSender extends GrantSenderBase {


		/**
		 * Creates new instance of authorization code sender.
		 * @param $serviceLocator Service locator to resolvedependencies.
		 * @param config Configuration object.
		 * 
		 */
		AuthorizationCodeSender($serviceLocator: ServiceLocator, config: Object);

		/**
		 * Sends authorization code grant to authorization server.
		 * @param code Authorization code.
		 * @param redirectUri Redirect URI used for code receiving.
		 * @return Promise for response content.
		 */
		send(code: String, redirectUri: String): Promise<Object>;
	}

	class ClientCredentialsSender extends GrantSenderBase {


		/**
		 * Creates new instance of client credentials sender.
		 * @param $serviceLocator Service locator to resolvedependencies.
		 * @param config Configuration object.
		 * 
		 */
		ClientCredentialsSender($serviceLocator: ServiceLocator, config: Object);

		/**
		 * Sends client credentials grant to authorization server.
		 * @param scope Required scope string.
		 * @return Promise for response content.
		 */
		send(scope: String): Promise<Object>;
	}

	class GrantSenderBase {


		/**
		 * Creates basic grant sender implementation.
		 * @param $serviceLocator Service locator to resolvedependencies.
		 * @param config Configuration object.
		 * 
		 */
		GrantSenderBase($serviceLocator: ServiceLocator, config: Object);

		/**
		 * Sends grant to authorization server.
		 * @param data Additional data to send.
		 * @return Promise for response body.
		 */
		send(data: Object): Promise<Object>;
	}

	class PasswordCredentialsSender extends GrantSenderBase {


		/**
		 * Creates new instance of resource owner password credentials grant sender.
		 * @param $serviceLocator Service locator to resolvedependencies.
		 * @param config Configuration object.
		 * 
		 */
		PasswordCredentialsSender($serviceLocator: ServiceLocator, config: Object);

		/**
		 * Sends resource owner password credentials grant to authorization server.
		 * @param username Username of resource owner.
		 * @param password Password of resource owner.
		 * @param scope Required scope string.
		 * @return Promise for response content.
		 */
		send(username: String, password: String, scope: String): Promise<Object>;
	}

	class RefreshTokenSender extends GrantSenderBase {


		/**
		 * Creates new instance of refresh token sender.
		 * @param $serviceLocator Service locator to resolvedependencies.
		 * @param config Configuration object.
		 * 
		 */
		RefreshTokenSender($serviceLocator: ServiceLocator, config: Object);

		/**
		 * Sends refresh token to authorization server.
		 * @param refreshToken Refresh token to obtain new access token.
		 * @param scope Required scope string.
		 * @return Promise for response content.
		 */
		send(refreshToken: String, scope: String): Promise<Object>;
	}

	class ClientCredentialsFlowMiddleware extends GrantFlowMiddlewareBase {


		/**
		 * Creates new instance of client credentials flow middleware.
		 * @param $serviceLocator Service locator to resolvedependencies.
		 * @param authConfig Middleware configuration.
		 * @param endpointConfig Endpoint configuration.
		 * 
		 */
		ClientCredentialsFlowMiddleware($serviceLocator: ServiceLocator, authConfig: Object, endpointConfig: Object);

		/**
		 * Handles middleware invocation.
		 * @param request HTTP request.
		 * @param response HTTP response.
		 * @param next Next function of middleware queue.
		 * 
		 */
		handler(request: http.IncomingMessage, response: http.ServerResponse, next: Function): any;
	}

	class GrantFlowMiddlewareBase {


		/**
		 * Creates new instance of grant flow middleware.
		 * @param $serviceLocator Service locatorto resolve dependencies.
		 * @param endpointConfig Endpoint configuration.
		 * 
		 */
		GrantFlowMiddlewareBase($serviceLocator: ServiceLocator, endpointConfig: Object);

		/**
		 * Handles middleware invocation.
		 * @param request HTTP request.
		 * @param response HTTP response.
		 * @param next Middleware next function.
		 * 
		 */
		handler(request: http.IncomingMessage, response: http.ServerResponse, next: Function): any;
	}

	class OAuth2FlowFactory extends browser/OAuth2FlowFactory {


		/**
		 * Creates new instance of OAuth 2.0 flow factory.
		 * @param $serviceLocator Service locator to resolvedependencies.
		 * @param authorization Authorization section of config.
		 * 
		 */
		OAuth2FlowFactory($serviceLocator: ServiceLocator, authorization: Object);

		/**
		 * Creates new instance of endpoint for authorization code flow.
		 * @param config Endpoint configuration.
		 * @return Middleware function.
		 */
		createAuthorizationCodeFlow(config: Object): Function;

		/**
		 * Creates new instance of endpoint for client credentials flow.
		 * @param config Endpoint configuration.
		 * @return Middleware function.
		 */
		createClientCredentialsFlow(config: Object): Function;

		/**
		 * Creates new instance of middleware for client credentials flow.
		 * @param config Middleware configuration.
		 * @return Middleware function.
		 */
		createClientCredentialsMiddleware(config: Object): Function;

		/**
		 * Creates new instance of endpoint for resource owner passwordcredentials flow.
		 * @param config Endpoint configuration.
		 * @return Middleware function.
		 */
		createPasswordCredentialsFlow(config: Object): Function;

		/**
		 * Creates new instance of middleware for resource owner passwordcredentials flow.
		 * @param config Middleware configuration.
		 * @return Middleware function.
		 */
		createRefreshTokenFlow(config: Object): Function;

		/**
		 * Creates middleware for token invalidation.
		 * @param config Middleware configuration.
		 * @return Middleware function.
		 */
		createInvalidationFlow(config: Object): Function;

		/**
		 * Adds all requires endpoints and middlewares of current configuration.
		 * @param app Connect/Express application object.
		 * 
		 */
		addEndpoints(app: Object): any;
	}

	class ResourceServer extends base/ResourceServer {


		/**
		 * Creates instance of OAuth 2.0 resource server role.
		 * @param $serviceLocator Service locator to resolvedependencies.
		 * @param config Configuration object.
		 * 
		 */
		ResourceServer($serviceLocator: ServiceLocator, config: Object);

		/**
		 * Does request to the resource server.
		 * @param context Current module context.
		 * @param options Request options.
		 * @return Promise for response content.
		 */
		request(context: Object, options: Object): Promise<Object>;

		/**
		 * Gets current access token;
		 * @param context Module context.
		 * @return Access token.
		 */
		getToken(context: Object): String;

		/**
		 * Determines if context is now authorized to do requests.
		 * @param context Module context.
		 * @return true if access to resource server is authorized.
		 */
		isAuthorized(context: Object): Boolean;

		/**
		 * Refreshes authorization or remove access and refresh tokens if failed.
		 * @param context Module context.
		 * @return Promise for nothing.
		 */
		refreshAuthorization(context: Object): Promise<any>;

		/**
		 * Removes access and refresh tokens.
		 * @param context Module context.
		 * @return Promise for nothing.
		 */
		removeAuthorization(context: Object): Promise<any>;
	}
}