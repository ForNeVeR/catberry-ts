/// <reference path="../typings/tsd.d.ts"/>
import shell = require('shelljs');
import path = require('path');

class Module {
    name: string;
    directory: string;
    constructor(name: string, directory: string = 'lib') {
        this.name = name;
        this.directory = directory;
    }
}

function generate_doc(module: Module) {
    var modulePath = path.join('.', module.name, module.directory);
    var moduleXml = module.name + ".xml"
    var jsdoc = `jsdoc -r ${modulePath} -t templates/haruki -d console -q format=xml > ${moduleXml}`;
    shell.exec(jsdoc, function(code, output) {
        if (code == 0) {
            console.log(module.name + ".xml DONE");
        } else {
            console.log(module.name + ".xml FAIL");
            shell.rm("-f", moduleXml);
        }
    });
}

var modules = [
    new Module('catberry'),
    new Module('catberry-assets'),
    new Module('catberry-dust'),
    new Module('catberry-handlebars'),
    new Module('catberry-jade', 'browser'),
    new Module('catberry-l10n'),
    new Module('catberry-l10n-dust-helper'),
    new Module('catberry-l10n-handlebars-helper'),
    new Module('catberry-locator'),
    new Module('catberry-oauth2-client'),
    new Module('catberry-uhr'),
    new Module('catberry-uri')
];

modules.forEach(generate_doc);
