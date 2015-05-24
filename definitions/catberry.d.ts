/// <reference path="../typings/tsd.d.ts"/>
declare module 'catberry' {
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
 		create(): Catberry;

	}
	class BootstrapperBuilder {

		BootstrapperBuilder();

		build(): Promise<string>;

	}
	class BrowserBundleBuilder {

		BrowserBundleBuilder();

		build(): Promise<any>;

	}
	class Catberry extends CatberryBase {
		version: any;
 		events: ModuleApiProvider;
 		locator: ServiceLocator;

		Catberry();

		getMiddleware(): Function;
 		build(): Promise<any>;

	}
	class ContextFactory {

		ContextFactory();

		create(): any;

	}
	class CookieWrapper {
		setCookie: Array<any>;
 		cookieSetups: Array<any>;

		CookieWrapper();

		initWithString(): any;
 		getCookieString(): string;
 		set(): string;

	}
	class DocumentRenderer extends DocumentRendererBase {

		DocumentRenderer();

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

		load(): Promise<Object>;
 		getComponentsByNames(): Object;

	}
	class StoreLoader extends LoaderBase {

		StoreLoader();

		load(): Promise<Object>;
 		getStoresByNames(): Object;

	}
	class ModuleApiProvider extends ModuleApiProviderBase {
		cookie: CookieWrapper;

		ModuleApiProvider();

		notFound(): Promise<any>;
 		redirect(): Promise<any>;
 		clearFragment(): Promise<any>;
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
 		sendAction(): Promise<any>;
 		sendBroadcastAction(): Promise<Array<any>>;
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
