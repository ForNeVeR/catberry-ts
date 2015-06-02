/// <reference path="./jsdoc_model.ts"/>
import model = require("jsdoc_model");

export function generateClass(jsdocClass: model.JsdocClass): string {
    return "";
}

function generateProperty(jsdocProperty: model.JsdocProperty): string {
    return "nothing";
}

function generateConstructor(jsdocConstructor: model.JsdocConstructor): string {
    return "nothing";
}

function generateMethod(jsdocMethod: model.JsdocFunction): string {
    return "nothing";
}

function prefixComment(tabLevel: number, comment: string): string {
    return comment;
}

function generateVariable(jsdocParameter: model.JsdocParameter): string {
    return jsdocParameter.name + ": " + jsdocParameter.type;
}

function generateFunctionDocumentation(jsdocFunction: model.JsdocFunction): string {
    return "nothing";
}
