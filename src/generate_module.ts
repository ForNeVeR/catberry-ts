/// <reference path="../typings/tsd.d.ts"/>
import fs = require("fs");
import xml2js = require("xml2js");
import promise = require("es6-promise");
import util = require("util");

import parsers = require("parsers");
import generators = require("generators");

var Promise = promise.Promise;

function readFile(fileName: string) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data.toString("utf8"));
            }
        });
    });
}

function parseXml(xmlData: string) {
    return new Promise((resolve, reject) => {
        var parser = new xml2js.Parser();
        parser.parseString(xmlData, function (err, result) {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
}

function getDefinition(moduleName: string) {
    var fileName = "./" + moduleName + ".xml";

    return readFile(fileName).then(parseXml, console.log)
}

function parseBaseModules() {
    var result = [];
    for (var i = 3; i < process.argv.length; ++i) {
        result.push(process.argv[i]);
    }
    return result;
}

function capitalize(s: string): string {
    return s.split('-').map(function (part) {
        return part[0].toUpperCase() + part.substring(1);
    }).join('');
}

export function generate(moduleName: string, baseModules: Array<String>): void {
    var capitalizedModuleName = capitalize(moduleName);
    getDefinition(moduleName).then((definition) => {
        try {
            var classes = definition["jsdoc"].classes
                .map(parsers.parseClass)
                .map(generators.generateClass)
                .join("\n");
            var references = baseModules
                .map((value) => `/// <reference path="${value}.d.ts"/>`).join("\n");
            var result = `/// <reference path="../typings/tsd.d.ts"/>
${references}
declare module ${capitalizedModuleName} {
${classes}
}

declare module '${moduleName}' {
    export = ${capitalizedModuleName};
}`;
            var initDefinitionFileName = "definitions/" + moduleName + ".d.ts.init";
            fs.writeFile(initDefinitionFileName, result, function (err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(initDefinitionFileName + " DONE");
                }
            });
        } catch (err) {
            console.log(err);
        }
    }, console.log);
}
