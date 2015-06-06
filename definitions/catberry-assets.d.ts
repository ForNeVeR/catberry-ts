/// <reference path="../typings/tsd.d.ts"/>

declare module 'catberry-assets' {

	class PostBuildAction {


		/**
		 * Creates new instance of the assets post build action.
		 * @param $config Catberry application config.
		 * @param $logger Logger.
		 * 
		 */
		PostBuildAction($config: Object, $logger: Logger);

		/**
		 * Build application assets.
		 * @param storeFinder Catberry store finder.
		 * @param componentFinder Catberry component finder.
		 * @return Promise for nothing.
		 */
		action(storeFinder: StoreFinder, componentFinder: ComponentFinder): Promise<any>;
	}
}