import generate_module = require("generate_module");

generate_module.generate('catberry', ['catberry-locator']);
generate_module.generate('catberry-assets', ['catberry']);
generate_module.generate('catberry-l10n', ['catberry-locator']);
generate_module.generate('catberry-l10n-dust-helper', ['catberry-l10n']);
generate_module.generate('catberry-l10n-handlebars-helper', ['catberry-l10n']);

var plugins = [
    'catberry-dust',
    'catberry-handlebars',
    'catberry-jade',
    'catberry-locator',
    'catberry-oauth2-client',
    'catberry-uhr',
    'catberry-uri'
];

plugins.forEach((plugin) => {
	generate_module.generate(plugin, []);
});
