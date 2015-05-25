/// <reference path="./typings/node/node.d.ts"/>
/// <reference path="./typings/xml2js/xml2js.d.ts"/>
import fs = require("fs");
import xml2js = require("xml2js");

function print_usage() {
    console.log("Usage: node generate_modules.js <module-name> [base-modules]");
}

if (process.argv.length <= 2) {
    print_usage();
    process.exit(1);
}

var module_name = process.argv[2];

var parser = new xml2js.Parser();
fs.readFile(__dirname + '/' + module_name, function (err, data) {
    parser.parseString(data.toString("utf8"), function (err, result) {
        console.dir(result);
        console.log('Done');
    });
});
