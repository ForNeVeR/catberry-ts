/// <reference path="./jsdoc_model.ts"/>
import model = require("jsdoc_model");

export function generateClass(jsdocClass: model.JsdocClass): string {
    var className = jsdocClass.name;
    var baseClassName = jsdocClass.basename;
    var properties = jsdocClass.properties.map(generateProperty).join("\n\n");
    var constructor = generateConstructor(jsdocClass.constructor);
    var methods = jsdocClass.functions.map(generateMethod).join("\n\n");

    var documentation = "";

    if (jsdocClass.description) {
        documentation =
            `\t\t/**\n${prefixComment(2, jsdocClass.description)}\n\t\t*/`;
    }

    return `${documentation}
\tclass ${className} ${baseClassName ? "extends" + baseClassName + " " : " "} {
${properties}

${constructor}

${methods}
\t}`;
}

function generateProperty(jsdocProperty: model.JsdocProperty): string {
    var documentation = "";

    if (jsdocProperty.description) {
        documentation =
            `\t\t/**\n${prefixComment(2, jsdocProperty.description)}\n\t\t */`;
    }

    var variable = generateVariable(jsdocProperty);

    return `${documentation}
\t\t${variable};`;
}

function generateConstructor(jsdocConstructor: model.JsdocConstructor): string {
    var name = jsdocConstructor.name;
    var parameters = jsdocConstructor.parameters.map(generateVariable).join(", ");
    var documentation = generateFunctionDocumentation(jsdocConstructor);

    return `${documentation}
\t\t${name}(${parameters});`;
}

function generateMethod(jsdocMethod: model.JsdocFunction): string {
    var name = jsdocMethod.name;
    var parameters = jsdocMethod.parameters.map(generateVariable).join(', ');
    var returnType = jsdocMethod.returnvalue ? jsdocMethod.returnvalue.type : 'any';
    var documentation = generateFunctionDocumentation(jsdocMethod);

    return `${documentation}
\t\t${name}(${parameters}): ${returnType};`;
}

function prefixComment(tabLevel: number, comment: string): string {
    return comment.split("\n")
        .map((value) => Array(tabLevel + 1).join('\t') + " * " + value)
        .join("\n");
}

function generateVariable(jsdocParameter: model.JsdocParameter): string {
    return jsdocParameter.name + ": " + jsdocParameter.type;
}

function generateFunctionDocumentation(jsdocFunction: model.JsdocFunction): string {
    var parameterDocs = jsdocFunction.parameters
        .map((value) => `@param ${value.name} ${value.description}`)
        .join("\n");

    var returnDoc = jsdocFunction.returnvalue && jsdocFunction.returnvalue.description ? `@return ${jsdocFunction.returnvalue.description}` : "";

    var comment = prefixComment(2, `${jsdocFunction.description}
${parameterDocs}
${returnDoc}`);
    return `\t\t/**
${comment}
\t\t */`;
}
