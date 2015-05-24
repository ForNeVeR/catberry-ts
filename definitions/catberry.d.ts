declare module 'catberry' {
	class Bootstrapper extends BootstrapperBase {

		Bootstrapper();

		configure(): any;
 		configure(): any;
 		create(): Catberry;

	}
	class Catberry extends CatberryBase {
		version: any;
 		events: ModuleApiProvider;
 		locator: ServiceLocator;

		Catberry();

		wrapDocument(): any;
 		startWhenReady(): Promise;
 		getMiddleware(): Function;
 		build(): Promise;

	}
	class CookieWrapper {
		setCookie: Array;
 		cookieSetups: Array;

		CookieWrapper();

		getCookieString(): string;
 		set(): string;
 		initWithString(): any;
 		getCookieString(): string;
 		set(): string;

	}
	class DocumentRenderer extends DocumentRendererBase {

		DocumentRenderer();

		initWithState(): Promise;
 		render(): Promise;
 		renderComponent(): any;
 		getComponentById(): Object;
 		collectGarbage(): Promise;
 		createComponent(): Promise<Element>;
 		_getId(): string;
 		render(): any;

	}
	class ComponentLoader extends LoaderBase {

		ComponentLoader();

		load(): Promise;
 		getComponentsByNames(): Object;
 		load(): Promise<Object>;
 		getComponentsByNames(): Object;

	}
	class StoreLoader extends LoaderBase {

		StoreLoader();

		load(): Promise;
 		getStoresByNames(): Object;
 		load(): Promise<Object>;
 		getStoresByNames(): Object;

	}
	class Logger {

		Logger();

		trace(): any;
 		info(): any;
 		warn(): any;
 		error(): any;
 		fatal(): any;

	}
	class ModuleApiProvider extends ModuleApiProviderBase {
		cookie: CookieWrapper;

		ModuleApiProvider();

		notFound(): Promise;
 		redirect(): Promise;
 		clearFragment(): Promise;
 		notFound(): Promise;
 		redirect(): Promise;
 		clearFragment(): Promise;
 		getInlineScript(): String;
 		on(): ModuleApiProviderBase;
 		once(): ModuleApiProviderBase;
 		removeListener(): ModuleApiProviderBase;
 		removeAllListeners(): ModuleApiProviderBase;

	}
	class RequestRouter {

		RequestRouter();

		route(): Promise;
 		go(): Promise;
 		route(): any;

	}
	class BootstrapperBase {

		BootstrapperBase();

		create(): Catberry;
 		configure(): any;

	}
	class CatberryBase {
		version: any;
 		events: ModuleApiProvider;
 		locator: ServiceLocator;

		CatberryBase();


	}
	class CookieWrapperBase {

		CookieWrapperBase();

		getAll(): Object;
 		get(): string;

	}
	class DocumentRendererBase {

		DocumentRendererBase();


	}
	class LoaderBase {

		LoaderBase();


	}
	class ModuleApiProviderBase {
		cookie: CookieWrapper;

		ModuleApiProviderBase();

		on(): ModuleApiProviderBase;
 		once(): ModuleApiProviderBase;
 		removeListener(): ModuleApiProviderBase;
 		removeAllListeners(): ModuleApiProviderBase;

	}
	class Bootstrapper extends BootstrapperBase {

		Bootstrapper();

		configure(): any;
 		configure(): any;
 		create(): Catberry;

	}
	class BootstrapperBuilder {

		BootstrapperBuilder();

		build(): Promise<string>;

	}
	class BrowserBundleBuilder {

		BrowserBundleBuilder();

		build(): Promise;

	}
	class Catberry extends CatberryBase {
		version: any;
 		events: ModuleApiProvider;
 		locator: ServiceLocator;

		Catberry();

		wrapDocument(): any;
 		startWhenReady(): Promise;
 		getMiddleware(): Function;
 		build(): Promise;

	}
	class ContextFactory {

		ContextFactory();

		create(): any;

	}
	class CookieWrapper {
		setCookie: Array;
 		cookieSetups: Array;

		CookieWrapper();

		getCookieString(): string;
 		set(): string;
 		initWithString(): any;
 		getCookieString(): string;
 		set(): string;

	}
	class DocumentRenderer extends DocumentRendererBase {

		DocumentRenderer();

		initWithState(): Promise;
 		render(): Promise;
 		renderComponent(): any;
 		getComponentById(): Object;
 		collectGarbage(): Promise;
 		createComponent(): Promise<Element>;
 		_getId(): string;
 		render(): any;

	}
	class ComponentFinder {

		ComponentFinder();

		find(): Promise<Object>;
 		watch(): any;

	}
	class InjectionFinder {

		InjectionFinder();

		find(): Array<string>;

	}
	class StoreFinder extends EventEmitter {
		_storesDirectory: string;
 		_storesGlobExpression: string;

		StoreFinder();

		find(): Promise<Object>;
 		watch(): any;

	}
	class ComponentLoader extends LoaderBase {

		ComponentLoader();

		load(): Promise;
 		getComponentsByNames(): Object;
 		load(): Promise<Object>;
 		getComponentsByNames(): Object;

	}
	class StoreLoader extends LoaderBase {

		StoreLoader();

		load(): Promise;
 		getStoresByNames(): Object;
 		load(): Promise<Object>;
 		getStoresByNames(): Object;

	}
	class ModuleApiProvider extends ModuleApiProviderBase {
		cookie: CookieWrapper;

		ModuleApiProvider();

		notFound(): Promise;
 		redirect(): Promise;
 		clearFragment(): Promise;
 		notFound(): Promise;
 		redirect(): Promise;
 		clearFragment(): Promise;
 		getInlineScript(): String;
 		on(): ModuleApiProviderBase;
 		once(): ModuleApiProviderBase;
 		removeListener(): ModuleApiProviderBase;
 		removeAllListeners(): ModuleApiProviderBase;

	}
	class StateProvider {

		StateProvider();

		getStateByUri(): Object;

	}
	class RequestRouter {

		RequestRouter();

		route(): Promise;
 		go(): Promise;
 		route(): any;

	}
	class SerialWrapper {

		SerialWrapper();

		add(): any;
 		isRegistered(): boolean;
 		invoke(): Promise<Object>;

	}
	class StoreDispatcher {

		StoreDispatcher();

		getStoreData(): Object;
 		sendAction(): Promise<*>;
 		sendBroadcastAction(): Promise<Array<*>>;
 		setState(): Array<String>;
 		getStore(): Promise<Object>;

	}
	class ComponentReadable {

		ComponentReadable();

		render(): any;

	}
	class ComponentTransform extends ParserDuplex {

		ComponentTransform();

		foundComponentHandler(): Readable;
 		end(): any;

	}
	class ContentReadable extends Readable {

		ContentReadable();


	}
	class HTMLTagTokenizer {

		HTMLTagTokenizer();

		next(): Object;
 		skipWhitespace(): any;
 		tagOpenState(): any;
 		tagNameState(): any;
 		selfClosingStartTagState(): any;
 		beforeAttributeNameState(): any;
 		attributeNameState(): any;
 		afterAttributeNameState(): any;
 		beforeAttributeValueState(): any;
 		attributeValueDoubleQuotedState(): any;
 		attributeValueSingleQuotedState(): any;
 		attributeValueUnquotedState(): any;
 		afterAttributeValueQuotedState(): any;

	}
	class HTMLTokenizer {

		HTMLTokenizer();

		appendChunk(): any;
 		getNext(): Object;
 		initial(): any;
 		tag(): any;
 		content(): any;
 		comment(): any;

	}
	class ParserDuplex extends Duplex {

		ParserDuplex();

		end(): any;
 		foundComponentHandler(): Readable;

	}
	class ResponseTransform {

		ResponseTransform();

		_flush(): any;

	}
	class UglifyTransform extends Transform {

		UglifyTransform();


	}
}
