/// <reference path="../typings/tsd.d.ts"/>

declare module CatberryLocator {

	class ServiceLocator {


		/**
		 * Creates new instance of service locator.
		 * 
		 * 
		 */
		ServiceLocator();

		/**
		 * Registers new type in service locator.
		 * @param type Type name, which will be alias in other constructors.
		 * @param constructor Constructor whichinitializes instance of specified type.
		 * @param parameters Set of named parameterswhich will be also injected.
		 * @param isSingleton If true every resolve will returnthe same instance.
		 * 
		 */
		register(type: string, constructor: Function, parameters: Object, isSingleton: boolean): any;

		/**
		 * Registers single instance for specified type.
		 * @param type Type name.
		 * @param instance Instance to register.
		 * 
		 */
		registerInstance(type: string, instance: Object): any;

		/**
		 * Resolves last registered implementation by type nameincluding all its dependencies recursively.
		 * @param type Type name.
		 * @return Instance of specified type.
		 */
		resolve(type: string): Object;

		/**
		 * Resolves all registered implementations by type nameincluding all dependencies recursively.
		 * @param type Type name.
		 * @return Array of instances specified type.
		 */
		resolveAll(type: string): Array<any>;

		/**
		 * Resolves instance of specified constructor including dependencies.
		 * @param constructor Constructor for instance creation.
		 * @param parameters Set of its parameters values.
		 * @return Instance of specified constructor.
		 */
		resolveInstance(constructor: Function, parameters: Object): Object;

		/**
		 * Unregisters all registrations of specified type.
		 * @param type Type name.
		 * 
		 */
		unregister(type: string): any;
	}
}

declare module 'catberry-locator' {
    export = CatberryLocator;
}