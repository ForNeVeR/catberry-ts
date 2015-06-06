/// <reference path="../typings/tsd.d.ts"/>
import shell = require("shelljs");

function generate_doc(module: string) {
    var path = `./${module}/lib`;
    var moduleXml = module + ".xml"
    var jsdoc = `jsdoc -r ${path} -t templates/haruki -d console -q format=xml > ${moduleXml}`;
    shell.exec(jsdoc, function(code, output) {
        if (code == 0) {
            console.log(module + ".xml DONE");
        } else {
            console.log(module + ".xml FAIL");
            shell.rm("-f", moduleXml);
        }
    });
}

var modules = [
    'catberry',
    'catberry-assets',
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

modules.forEach(generate_doc);
