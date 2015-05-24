/// <reference path="../typings/tsd.d.ts"/>

declare module 'catberry-locator' {
	class ServiceLocator {

		ServiceLocator();

		register(): any;
 		registerInstance(): any;
 		resolve(): Object;
 		resolveAll(): Array<any>;
 		resolveInstance(): Object;
 		unregister(): any;

	}
}
