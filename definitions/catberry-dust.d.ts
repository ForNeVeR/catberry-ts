/// <reference path="../typings/tsd.d.ts"/>

declare module CatberryDust {

	import EventEmitter = NodeJS.EventEmitter;

	class TemplateManagerBase {


		/**
		 * Creates new instance of template manager.
		 *
		 *
		 */
		TemplateManagerBase();

		/**
		 * Removes template from storage.
		 * @param name Template name.
		 *
		 */
		remove(name: string): any;

		/**
		 * Invoke template function.
		 * @param name Name of template.
		 * @param chunk Stream chunk.
		 * @param context Rendering context.
		 *
		 */
		invoke(name: string, chunk: Chunk, context: Context): Chunk;

		/**
		 * Escape template name.
		 * @param name Template name.
		 * @return Safe template name.
		 */
		escapeName(name: string): string;
	}

	class Dust {


		/**
		 * Creates new instance of Dust template engine.
		 * @param $logger Logger.
		 *
		 */
		Dust($logger: Logger);

		/**
		 * Gets stream for template rendering.
		 * @param name Name of template.
		 * @param context Data context.
		 * @return Stream with content.
		 */
		getStream(name: string, context: Object): DustReadable;
	}

	class DustReadable {


		/**
		 * Creates new instance of Dust readable stream
		 * @param dust Dust template engine.
		 * @param opt Stream options.
		 *
		 */
		DustReadable(dust: Dust, opt: Object);

		/**
		 * Tells stream that it is time to read.
		 *
		 *
		 */
		flush(): any;
	}

	class FilterManager {


		/**
		 * Creates new instance of filter manager.
		 *
		 *
		 */
		FilterManager();

		/**
		 * Adds filter to filters set.
		 * @param name Filter name.
		 * @param filter Filter function.
		 *
		 */
		add(name: string, filter: Function): any;

		/**
		 * Removes filter from filters set.
		 * @param name Filter name.
		 *
		 */
		remove(name: string): any;

		/**
		 * Filters specified value.
		 * @param value Value to filer.
		 * @param filters Filter names to apply.
		 * @return Filtered value.
		 */
		filterValue(value: string, filters: Array<any>): string;
	}

	class HelperManager {


		/**
		 * Creates new instance of helper manager.
		 *
		 *
		 */
		HelperManager();

		/**
		 * Adds helper ot helpers set.
		 * @param name Helper name.
		 * @param helper Helper function.
		 *
		 */
		add(name: string, helper: Function): any;

		/**
		 * Remove helper from helper set.
		 * @param name Helper name.
		 *
		 */
		remove(name: string): any;

		/**
		 * Invoke helper.
		 * @param name Helper name.
		 * @param chunk Current stream chunk.
		 * @param context Current rendering context.
		 * @param bodies Inner bodies.
		 * @param params Helper params.
		 *
		 */
		invoke(name: string, chunk: Chunk, context: Context, bodies: Array<any>, params: Object): Chunk;
	}

	class TemplateManager {


		/**
		 * Creates new instance of template manager.
		 *
		 *
		 */
		TemplateManager();

		/**
		 * Compiles template source into function source.
		 * @param source Dust template source.
		 *
		 */
		compile(source: string): string;

		/**
		 * Register compiled function.
		 * @param name Template name.
		 * @param compiled Compiled function source.
		 *
		 */
		registerCompiled(name: string, compiled: string): any;
	}

	class TemplateProvider {


		/**
		 * Creates new instance of template provider.
		 * @param $dust Dust template engine.
		 * @param $eventBus Event bus.
		 *
		 */
		TemplateProvider($dust: Dust, $eventBus: EventEmitter);

		/**
		 * Compiles dust template source to function.
		 * @param source Dust template source.
		 * @return Compiled function source.
		 */
		compile(source: string): string;

		/**
		 * Renders template to stream with data context.
		 * @param name Template name.
		 * @param context Data context.
		 * @return Content stream.
		 */
		getStream(name: String, context: Object): DustReadable;
	}
}

declare module 'catberry-dust' {
    export = CatberryDust;
}
