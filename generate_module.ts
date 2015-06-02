/// <reference path="typings/node/node.d.ts"/>
/// <reference path="typings/xml2js/xml2js.d.ts"/>
/// <reference path="typings/es6-promise/es6-promise.d.ts"/>
/// <reference path="./parsers.ts"/>
/// <reference path="./generators.ts"/>
import fs = require("fs");
import xml2js = require("xml2js");
import promise = require("es6-promise");
import util = require("util");

import parsers = require("parsers");
import generators = require("generators");

var Promise = promise.Promise;

function print_usage() {
    console.log("Usage: node generate_modules.js <module-name> [base-modules...]");
}

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

if (process.argv.length <= 2) {
    print_usage();
    process.exit(1);
}

var moduleName = process.argv[2];
var baseModules = parseBaseModules();

getDefinition(moduleName).then((definition) => {
    try {
        var classes = definition["jsdoc"].classes
            .map(parsers.parseClass)
            .map(generators.generateClass)
            .join("\n");
        var references = baseModules.map((value) => `/// <reference path="${value}.d.ts"/>`).join("\n");
        var result = `/// <reference path="../typings/tsd.d.ts"/>
${references}
declare module '${moduleName} {'
${classes}
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
