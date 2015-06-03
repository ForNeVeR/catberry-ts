import model = require("jsdoc_model");

function first(value: any): any {
    if (!value) {
        return value;
    }

    if (Array.isArray(value) && value.length > 0) {
        return value[0];
    } else {
        return undefined;
    }
}

function emptyNull(value: Array<any>): Array<any> {
    if (!value) {
        return [];
    } else {
        return value;
    }
}

export function parseClass(rawClass: any): model.JsdocClass {
    if (!rawClass) {
        return rawClass;
    }

    return {
        name: first(rawClass.name),
        description: first(rawClass.description),
        basename: first(rawClass.extends),
        properties: emptyNull(rawClass.properties)
            .filter((value) => first(value.access).length == 0)
            .map(parseProperty),
        constructor: parseConstructor(rawClass.constructor),
        functions: emptyNull(rawClass.functions)
            .filter((value) => first(value.access).length == 0)
            .map(parseFunction)
    };
}

function parseProperty(rawProperty: any): model.JsdocProperty {
    if (!rawProperty) {
        return rawProperty;
    }

    return {
        name: first(rawProperty.name),
        description: first(rawProperty.description),
        type: parseTypeName(first(first(rawProperty.type).names))
    };
}

function parseFunction(rawFunction: any): model.JsdocFunction {
    if (!rawFunction) {
        return rawFunction;
    }

    return {
        name: first(rawFunction.name),
        description: first(rawFunction.description),
        parameters: emptyNull(rawFunction.parameters)
            // TODO: These are complex parameter types; should be
            // worked around at another level
            .filter((value) => first(value.name).indexOf('.') < 0)
            .map(parseParameter),
        returnvalue: parseParameter(first(rawFunction.returns))
    };
}

function parseConstructor(rawConstructor: any): model.JsdocConstructor {
    if (!rawConstructor) {
        return rawConstructor;
    }

    return {
        name: first(rawConstructor[1].name),
        description: first(rawConstructor[1].description),
        parameters: emptyNull(rawConstructor[1].parameters)
            // TODO: These are complex parameter types; should be
            // worked around at another level
            .filter((value) => first(value.name).indexOf('.') < 0)
            .map(parseParameter),
        returnvalue: undefined
    };
}

function parseParameter(rawParameter: any): model.JsdocParameter {
    if (!rawParameter) {
        return rawParameter;
    }

    return {
        name: first(rawParameter.name),
        description: first(rawParameter.description),
        type: parseTypeName(first(rawParameter.type))
    };
}

var genericClasses = ['Array', 'Promise'];

function parseTypeName(typeName: string): string {
    if (!typeName) {
        return 'any';
    }

    if (typeName.indexOf('*') >= 0) {
        typeName = typeName.replace(/\*/g, 'any');
    }

    if (typeName == 'function') {
        typeName = 'Function';
    } else if (typeName.indexOf('.<') >= 0) {
        // TODO: This is not the best way of handling generic types
        typeName = typeName.replace(/\./g, '');
    } else if (typeName.indexOf(' ') >= 0) {
        // TODO: This is not the best way of handling multiple return
        // types
        typeName = typeName.replace(/ .*/, '');
    }

    if (genericClasses.indexOf(typeName) >= 0) {
        typeName = typeName + "<any>";
    }

    return typeName;
}
