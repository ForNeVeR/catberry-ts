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
    console.log("Usage: node generate_modules.js <module-name> [base-modules]");
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

if (process.argv.length <= 2) {
    print_usage();
    process.exit(1);
}

var moduleName = process.argv[2];

getDefinition(moduleName).then((result) => {
    try {
        // console.log(result["jsdoc"].classes.map(parsers.parseClass));
        // result["jsdoc"].classes.map(parsers.parseClass);
        // console.log(util.inspect(result["jsdoc"].classes.map(parsers.parseClass), false, null));
        console.log(result["jsdoc"].classes.map(parsers.parseClass).map(generators.generateClass).join("\n"));
    } catch (err) {
        console.log(err);
    }
}, console.log);

