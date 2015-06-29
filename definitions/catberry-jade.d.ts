/// <reference path="../typings/tsd.d.ts"/>

declare module CatberryJade {

	class TemplateProvider {


		/**
		 * Creates new instance of Jade template provider.
		 * @param $jade Jade factory.
		 * 
		 */
		TemplateProvider($jade: Jade);

		/**
		 * Registers compiled (precompiled) Jade template.http://jadejs.com/reference.html
		 * @param name Template name.
		 * @param compiled Compiled template source.
		 * 
		 */
		registerCompiled(name: String, compiled: String): any;

		/**
		 * Renders template with specified data.
		 * @param name Name of template.
		 * @param data Data context for template.
		 * 
		 */
		render(name: String, data: Object): any;
	}
}

declare module 'catberry-jade' {
    export = CatberryJade;
}