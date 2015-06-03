/// <reference path="../typings/shelljs/shelljs.d.ts"/>
import shell = require("shelljs");

function generate_doc(module: string, path: string) {
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

generate_doc("catberry", "./catberry/lib");
generate_doc("catberry-locator", "./catberry-locator/lib");
