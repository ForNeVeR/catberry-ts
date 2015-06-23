/// <reference path="../typings/tsd.d.ts"/>
/// <reference path="catberry-locator.d.ts"/>
declare module Catberry {

	import ServiceLocator = CatberryLocator.ServiceLocator;
	import EventEmitter = NodeJS.EventEmitter;

	class BootstrapperBase {


		/**
		 * Creates new instance of base Catberry bootstrapper.
		 * @param catberryConstructor Constructorof the Catberry's main module.
		 *
		 */
		BootstrapperBase(catberryConstructor: Function);

		/**
		 * Creates new full-configured instance of the Catberry application.
		 * @param configObject Configuration object.
		 * @return Catberry application instance.
		 */
		create(configObject: Object): Catberry;

		/**
		 * Configures locator with all required type registrations.
		 * @param configObject Configuration object.
		 * @param locator Service locator to configure.
		 *
		 */
		configure(configObject: Object, locator: ServiceLocator): any;
	}

	class CatberryBase {
		/**
		 * Current version of catberry.
		 */
		version: any;

		/**
		 * Current object with events.
		 */
		events: ModuleApiProvider;

		/**
		 * Current service locator.
		 */
		locator: ServiceLocator;

		/**
		 * Creates new instance of the basic Catberry application module.
		 *
		 *
		 */
		CatberryBase();


	}

	class CookieWrapperBase {


		/**
		 * Creates new instance of the basic cookie wrapper.
		 *
		 *
		 */
		CookieWrapperBase();

		/**
		 * Gets map of cookie values by name.
		 *
		 * @return Cookies map by names.
		 */
		getAll(): Object;

		/**
		 * Gets cookie value by name.
		 * @param name Cookie name.
		 * @return Cookie value.
		 */
		get(name: string): string;
	}

	class DocumentRendererBase {


		/**
		 * Creates new instance of the basic document renderer.
		 * @param $serviceLocator Locator to resolve dependencies.
		 *
		 */
		DocumentRendererBase($serviceLocator: ServiceLocator);


	}

	class LoaderBase {


		/**
		 * Create basic implementation of a module loader.
		 * @param transforms Array of module transformations.
		 *
		 */
		LoaderBase(transforms: Array<any>);


	}

	class ModuleApiProviderBase {
		/**
		 * Current cookie provider.
		 */
		cookie: CookieWrapper;

		/**
		 * Creates new instance of the basic API provider.
		 * @param $serviceLocator Service locatorto resolve dependencies.
		 *
		 */
		ModuleApiProviderBase($serviceLocator: ServiceLocator);

		/**
		 * Subscribes on the specified event in Catberry.
		 * @param eventName Name of the event.
		 * @param handler Event handler.
		 * @return This object for chaining.
		 */
		on(eventName: string, handler: Function): ModuleApiProviderBase;

		/**
		 * Subscribes on the specified event in Catberry to handle once.
		 * @param eventName Name of the event.
		 * @param handler Event handler.
		 * @return This object for chaining.
		 */
		once(eventName: string, handler: Function): ModuleApiProviderBase;

		/**
		 * Removes the specified handler from the specified event.
		 * @param eventName Name of the event.
		 * @param handler Event handler.
		 * @return This object for chaining.
		 */
		removeListener(eventName: string, handler: Function): ModuleApiProviderBase;

		/**
		 * Removes all handlers from the specified event in Catberry.
		 * @param eventName Name of the event.
		 * @return This object for chaining.
		 */
		removeAllListeners(eventName: string): ModuleApiProviderBase;
	}

	class Bootstrapper extends BootstrapperBase {


		/**
		 * Creates new instance of server Catberry's bootstrapper.
		 *
		 *
		 */
		Bootstrapper();

		/**
		 * Configures Catberry's locator.
		 * @param configObject Config object.
		 * @param locator Service locator to configure.
		 *
		 */
		configure(configObject: Object, locator: ServiceLocator): any;

		/**
		 * Creates new full-configured instance of the Catberry application.
		 * @param configObject Configuration object.
		 * @return Catberry application instance.
		 */
		create(configObject: Object): Catberry;
	}

	class BootstrapperBuilder {


		/**
		 * Create new instance of bootstrapper builder.
		 * @param $serviceLocator Locator to resolve dependencies.
		 *
		 */
		BootstrapperBuilder($serviceLocator: ServiceLocator);

		/**
		 * Creates real bootstrapper code for bundle build.
		 * @param stores Found stores.
		 * @param components Found components.
		 * @return Promise for source code of real bootstrapper.
		 */
		build(stores: Object, components: Object): Promise<string>;
	}

	class BrowserBundleBuilder {


		/**
		 * Creates new instance of the browser bundle builder.
		 * @param $serviceLocator Service locatorto resolve dependencies.
		 *
		 */
		BrowserBundleBuilder($serviceLocator: ServiceLocator);

		/**
		 * Builds the browser bundle.
		 *
		 * @return Promise for nothing.
		 */
		build(): Promise<any>;
	}

	class Catberry extends CatberryBase {
		/**
		 * Current version of catberry.
		 */
		version: any;

		/**
		 * Current object with events.
		 */
		events: ModuleApiProvider;

		/**
		 * Current service locator.
		 */
		locator: ServiceLocator;

		/**
		 * Creates new instance of the server-side Catberry.
		 *
		 *
		 */
		Catberry();

		/**
		 * Gets connect/express middleware.
		 *
		 * @return Middleware function.
		 */
		getMiddleware(): Function;

		/**
		 * Builds browser bundle.
		 *
		 * @return Promise for nothing.
		 */
		build(): Promise<any>;
	}

	class ContextFactory {


		/**
		 * Creates new instance of the context factory.
		 * @param $serviceLocator Locator to resolve dependencies.
		 *
		 */
		ContextFactory($serviceLocator: ServiceLocator);

		/**
		 * Creates new context for modules.
		 * @param additional Additional parameters.
		 *
		 */
		create(additional: Object): any;
	}

	class CookieWrapper {
		/**
		 * Current list of cookie strings were set in this instance of wrapper.
		 */
		setCookie: Array<any>;

		/**
		 * Current list of cookie setups were set in this instance of wrapper.
		 */
		cookieSetups: Array<any>;

		/**
		 * Creates new instance of the server-side cookie wrapper.
		 *
		 *
		 */
		CookieWrapper();

		/**
		 * Initializes manager with specified cookie string.
		 * @param cookieString Cookie string.
		 *
		 */
		initWithString(cookieString: string): any;

		/**
		 * Gets current cookie string.
		 *
		 * @return Cookie string.
		 */
		getCookieString(): string;

		/**
		 * Sets cookie to this wrapper.
		 * @param cookieSetup Cookie setup object.
		 * @return Cookie setup string.
		 */
		set(cookieSetup: Object): string;
	}

	class DocumentRenderer extends DocumentRendererBase {


		/**
		 * Creates new instance of document renderer.
		 * @param $serviceLocator Locator to resolve dependencies.
		 *
		 */
		DocumentRenderer($serviceLocator: ServiceLocator);

		/**
		 * Renders response on request with specified state and routing context.
		 * @param state State of the application.
		 * @param routingContext Routing Context.
		 *
		 */
		render(state: Object, routingContext: Object): any;
	}

	class ComponentFinder {


		/**
		 * Creates new instance of the component finder.
		 * @param $logger Logger to log warnings.
		 * @param $eventBus Event bus to exchange events.
		 * @param componentsGlob Glob expression for searching components.
		 *
		 */
		ComponentFinder($logger: Logger, $eventBus: EventEmitter, componentsGlob: String);

		/**
		 * Finds all paths to components.
		 *
		 * @return Promise for set of found components by names.
		 */
		find(): Promise<Object>;

		/**
		 * Watches components for changing.
		 *
		 *
		 */
		watch(): any;
	}

	class InjectionFinder {


		/**
		 * Creates new instance of the dependency injection finder.
		 *
		 *
		 */
		InjectionFinder();

		/**
		 * Finds names of all dependency injections used in source.
		 * @param ast AST from UglifyJS.
		 * @return List of names.
		 */
		find(ast: Object): Array<string>;
	}

	//import NodeJS = require('NodeJS');


	interface StoreFinder extends EventEmitter {
		/**
		 * Current folder with Catberry stores.
		 */
		_storesDirectory: string;

		/**
		 * Current glob for store files.
		 */
		_storesGlobExpression: string;

		/**
		 * Creates new instance of store finder.
		 * @param $eventBus Event bus to exchange events.
		 * @param storesDirectory Relative path to directory with store files.
		 *
		 */
		StoreFinder($eventBus: EventEmitter, storesDirectory: String);

		/**
		 * Finds all paths to stores.
		 *
		 * @return Promise for set of found stores by names.
		 */
		find(): Promise<Object>;

		/**
		 * Watches components for changing.
		 *
		 *
		 */
		watch(): any;
	}

	class ComponentLoader extends LoaderBase {


		/**
		 * Creates new instance of the component loader.
		 * @param $serviceLocator Locator to resolve dependencies.
		 * @param isRelease Release mode flag.
		 *
		 */
		ComponentLoader($serviceLocator: ServiceLocator, isRelease: Boolean);

		/**
		 * Loads all components into a memory.
		 *
		 * @return Promise for map of loaded components.
		 */
		load(): Promise<Object>;

		/**
		 * Gets current map of components by names.
		 *
		 * @return Map of components by names.
		 */
		getComponentsByNames(): Object;
	}

	class StoreLoader extends LoaderBase {


		/**
		 * Creates new instance of the store loader.
		 * @param $serviceLocator Locator to resolve dependencies.
		 * @param isRelease Release mode flag.
		 *
		 */
		StoreLoader($serviceLocator: ServiceLocator, isRelease: Boolean);

		/**
		 * Loads all stores into a memory.
		 *
		 * @return Promise for map of loaded stores.
		 */
		load(): Promise<Object>;

		/**
		 * Gets current map of stores by names.
		 *
		 * @return Map of stores by names.
		 */
		getStoresByNames(): Object;
	}

	class ModuleApiProvider extends ModuleApiProviderBase {
		/**
		 * Current cookie provider.
		 */
		cookie: CookieWrapper;

		/**
		 * Creates new instance of the module API provider.
		 * @param $serviceLocator Service locatorto resolve dependencies.
		 *
		 */
		ModuleApiProvider($serviceLocator: ServiceLocator);

		/**
		 * Sets not found flag that means Catberry should pass controlto another middleware.
		 *
		 * @return Promise for nothing.
		 */
		notFound(): Promise<any>;

		/**
		 * Redirects current page to specified URI.
		 * @param uriString URI to direct.
		 * @return Promise for nothing.
		 */
		redirect(uriString: string): Promise<any>;

		/**
		 * Clears current URI's fragment.
		 *
		 * @return Promise for nothing.
		 */
		clearFragment(): Promise<any>;

		/**
		 * Gets inline script for making stored actions.
		 *
		 * @return SCRIPT tag with inline JavaScript to make actions.
		 */
		getInlineScript(): String;

		/**
		 * Subscribes on the specified event in Catberry.
		 * @param eventName Name of the event.
		 * @param handler Event handler.
		 * @return This object for chaining.
		 */
		on(eventName: string, handler: Function): ModuleApiProviderBase;

		/**
		 * Subscribes on the specified event in Catberry to handle once.
		 * @param eventName Name of the event.
		 * @param handler Event handler.
		 * @return This object for chaining.
		 */
		once(eventName: string, handler: Function): ModuleApiProviderBase;

		/**
		 * Removes the specified handler from the specified event.
		 * @param eventName Name of the event.
		 * @param handler Event handler.
		 * @return This object for chaining.
		 */
		removeListener(eventName: string, handler: Function): ModuleApiProviderBase;

		/**
		 * Removes all handlers from the specified event in Catberry.
		 * @param eventName Name of the event.
		 * @return This object for chaining.
		 */
		removeAllListeners(eventName: string): ModuleApiProviderBase;
	}

	class StateProvider {


		/**
		 * Create new instance of the state provider.
		 * @param $serviceLocator Service locatorto resolve URI mappers.
		 *
		 */
		StateProvider($serviceLocator: ServiceLocator);

		/**
		 * Gets state by specified location URI.
		 * @param location URI location.
		 * @return State object.
		 */
		getStateByUri(location: URI): Object;
	}

	class RequestRouter {


		/**
		 * Creates new instance of the request router.
		 * @param $serviceLocator Service locator to resolvedependencies.
		 *
		 */
		RequestRouter($serviceLocator: ServiceLocator);

		/**
		 * Creates routing context, gets application state and pass it to renderer.
		 * @param request HTTP request.
		 * @param response HTTP response.
		 * @param next Next function for middleware.
		 *
		 */
		route(request: http.IncomingMessage, response: http.ServerResponse, next: Function): any;
	}

	class SerialWrapper {


		/**
		 * Creates new instance of the serial wrapper for promises.
		 *
		 *
		 */
		SerialWrapper();

		/**
		 * Adds method to the set.
		 * @param name Method name.
		 * @param toInvoke Function that returns promise.
		 *
		 */
		add(name: String, toInvoke: Function): any;

		/**
		 * Returns true if method with such name was registered to the set.
		 * @param name Name of method.
		 * @return True if method name is registered.
		 */
		isRegistered(name: String): boolean;

		/**
		 * Invokes method without concurrency.
		 * @param name Method name.
		 * @return Promise for result.
		 */
		invoke(name: String): Promise<Object>;
	}

	class StoreDispatcher {


		/**
		 * Creates new instance of store dispatcher.
		 * @param $serviceLocator Locator to resolve dependencies.
		 * @param $storeLoader Store loader to load stores.
		 * @param $eventBus Event bus to emit events.
		 *
		 */
		StoreDispatcher($serviceLocator: ServiceLocator, $storeLoader: StoreLoader, $eventBus: EventEmitter);

		/**
		 * Gets store data and creates store instance if required.
		 * @param storeName Name of store.
		 * @return Store's data.
		 */
		getStoreData(storeName: String): Object;

		/**
		 * Sends action to specified store and resolves promises in serial mode.
		 * @param storeName Name of the store.
		 * @param actionName Name of the action.
		 * @param args Action arguments.
		 * @return Promise for action handling result.
		 */
		sendAction(storeName: String, actionName: String, args: Object): Promise<any>;

		/**
		 * Sends action to every store that has handle method for such action.
		 * @param actionName Name of the action.
		 * @param arg Action arguments.
		 * @return Promise for the action handling result.
		 */
		sendBroadcastAction(actionName: String, arg: Object): Promise<Array<any>>;

		/**
		 * Sets new state to store dispatcher and invokes "changed" method for allstores which state have been changed.
		 * @param parameters Map of new parameters.
		 * @param basicContext Basic context for all stores.
		 * @return Names of stores that have been changed.
		 */
		setState(parameters: Object, basicContext: Object): Array<String>;

		/**
		 * Gets store instance and creates it if required.
		 * @param storeName Name of store.
		 * @return Promise for store.
		 */
		getStore(storeName: String): Promise<Object>;
	}

	class ComponentReadable {


		/**
		 * Creates new instance of the component rendering stream.
		 * @param renderingContext Rendering context.
		 * @param options Stream options.
		 *
		 */
		ComponentReadable(renderingContext: Object, options: Object);

		/**
		 * Renders component into this stream.
		 *
		 *
		 */
		render(): any;
	}

	class ComponentTransform extends ParserDuplex {


		/**
		 * Creates new instance of the component transformation stream.
		 * @param context Rendering parameters.
		 * @param options Stream options.
		 *
		 */
		ComponentTransform(context: Object, options: Object);

		/**
		 * Handles found component tags.
		 * @param tagDetails Object with tag details.
		 * @return Replacement stream of HTML or null.
		 */
		foundComponentHandler(tagDetails: Object): Readable;

		/**
		 * Ends writing to this stream.
		 *
		 *
		 */
		end(): any;
	}

	class ContentReadable extends Readable {


		/**
		 * Creates new instance of content readable stream.
		 * @param content Text content.
		 * @param options Stream options.
		 *
		 */
		ContentReadable(content: string, options: Object);


	}

	class HTMLTagTokenizer {


		/**
		 * Creates a new instance of HTML tag tokenizer.It was developed using this specification:http://www.w3.org/TR/2011/WD-html5-20110113/tokenization.html
		 * @param tagHTML Tag HTML string.
		 *
		 */
		HTMLTagTokenizer(tagHTML: String);

		/**
		 * Gets next token in source.
		 *
		 *
		 */
		next(): Object;

		/**
		 * Skips all whitespace characters.
		 *
		 *
		 */
		skipWhitespace(): any;

		/**
		 * Describes the "Tag open state".
		 *
		 *
		 */
		tagOpenState(): any;

		/**
		 * Describes the "Tag name state".
		 *
		 *
		 */
		tagNameState(): any;

		/**
		 * Describes the "Self-closing start tag state".
		 *
		 *
		 */
		selfClosingStartTagState(): any;

		/**
		 * Describes the "Before attribute value state".
		 *
		 *
		 */
		beforeAttributeNameState(): any;

		/**
		 * Describes the "Attribute name state".
		 *
		 *
		 */
		attributeNameState(): any;

		/**
		 * Describes the "After attribute value state".
		 *
		 *
		 */
		afterAttributeNameState(): any;

		/**
		 * Describes the "Before attribute value state".
		 *
		 *
		 */
		beforeAttributeValueState(): any;

		/**
		 * Describes the "Attribute value (double-quoted) state".
		 *
		 *
		 */
		attributeValueDoubleQuotedState(): any;

		/**
		 * Describes the "Attribute value (single-quoted) state".
		 *
		 *
		 */
		attributeValueSingleQuotedState(): any;

		/**
		 * Describes the "Attribute value (unquoted) state".
		 *
		 *
		 */
		attributeValueUnquotedState(): any;

		/**
		 * Describes the "After attribute value (quoted) state".
		 *
		 *
		 */
		afterAttributeValueQuotedState(): any;
	}

	class HTMLTokenizer {


		/**
		 * Creates new instance of simplified streaming HTML tokenizer.
		 *
		 *
		 */
		HTMLTokenizer();

		/**
		 * Appends chunk to the current buffer.
		 * @param chunk String chunk.
		 *
		 */
		appendChunk(chunk: string): any;

		/**
		 * Gets next token.
		 *
		 * @return Token descriptor.
		 */
		getNext(): Object;

		/**
		 * Switches machine to the "data" state.
		 *
		 *
		 */
		initial(): any;

		/**
		 * Switches machine to the "tag" state.
		 *
		 *
		 */
		tag(): any;

		/**
		 * Switches machine to the "content" state.
		 *
		 *
		 */
		content(): any;

		/**
		 * Switches machine to the "comment" state.
		 *
		 *
		 */
		comment(): any;
	}

	class ParserDuplex extends Duplex {


		/**
		 * Creates new instance of the parser duplex stream.
		 * @param options Stream options.
		 *
		 */
		ParserDuplex(options: Object);

		/**
		 * Ends writing to this stream.
		 *
		 *
		 */
		end(): any;

		/**
		 * Handles found component tags.
		 * @param tagDetails Object with tag details.
		 * @return Replacement stream of HTML.
		 */
		foundComponentHandler(tagDetails: Object): Readable;
	}

	class ResponseTransform {


		/**
		 * Creates new instance of response proxy stream.
		 * @param renderingContext Context of rendering.
		 * @param options Stream options.
		 *
		 */
		ResponseTransform(renderingContext: Object, options: Object);

		/**
		 * Ends the stream.
		 * @param callback Callback on finished state.
		 *
		 */
		_flush(callback: Function): any;
	}

	class UglifyTransform extends Transform {


		/**
		 * Creates new instance of Uglify source code transform.
		 * @param $serviceLocator Stream options.
		 * @param options Stream options.
		 *
		 */
		UglifyTransform($serviceLocator: ServiceLocator, options: Object);


	}
}

declare module 'catberry' {
    export = Catberry;
}
