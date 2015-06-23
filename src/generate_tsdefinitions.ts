import generate_module = require("generate_module");

generate_module.generate("catberry", ["catberry-locator"]);
generate_module.generate('catberry-assets', ['catberry']);

var plugins = [
    'catberry-dust',
    'catberry-handlebars',
    'catberry-jade',
    'catberry-l10n',
    'catberry-l10n-dust-helper',
    'catberry-l10n-handlebars-helper',
    'catberry-locator',
    'catberry-oauth2-client',
    'catberry-uhr',
    'catberry-uri'
];

plugins.forEach((plugin) => {
	generate_module.generate(plugin, []);
});
