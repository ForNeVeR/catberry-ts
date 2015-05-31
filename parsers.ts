export function parseClass(rawClass) {
    var functions = null;
    var properties = null;

    if (rawClass.functions) {
        functions =
            rawClass.functions
            .filter((value) => value.access)
            .map(parseFunction);
    }

    if (rawClass.properties) {
        properties =
            rawClass.properties
            .filter((value) => value.access)
            .map(parseProperty);
    }

    return {
        "name": rawClass.name,
        "description": rawClass.description,
        "basename": rawClass.extends,
        "properties": properties,
        "constructor": parseConstructor(rawClass.constructor),
        "functions": functions
    };
}

function parseProperty(rawProperty) {
    return {
        "name": rawProperty.name,
        "description": rawProperty.description,
        "type": parseTypeName(rawProperty.type.names)
    };
}

function parseConstructor(rawConstructor) {
    console.log(rawConstructor);

    var parameters = [];

    if (rawConstructor.parameters) {
        parameters = rawConstructor.parameters.filter((value) => {
            value.name.indexOf(".") < 0 // TODO: These are complex parameter types; should be worked around at another level
        }).map(parseParameter);
    }

    return {
        "name": rawConstructor.name,
        "description": rawConstructor.description,
        "parameters": parameters
    };
}

function parseFunction(rawFunction) {
    var parameters = [];

    if (rawFunction.parameters) {
        parameters = rawFunction.parameters.filter((value) => {
            value.name.indexOf(".") < 0 // TODO: These are complex parameter types; should be worked around at another level
        }).map(parseParameter);
    }

    return {
        "name": rawFunction.name,
        "description": rawFunction.description,
        "parameters": parameters,
        "returnvalue": rawFunction.returns ? parseParameter(rawFunction.returns) : null
    };
}

function parseParameter(rawParameter) {
    return {
        "name": rawParameter.name,
        "description": rawParameter.description,
        "type": parseTypeName(rawParameter.type)
    };
}

var genericClasses = ['Array', 'Promise'];

function parseTypeName(typeName) {
    if (typeName && typeName.indexOf('*') >= 0) {
        typeName = typeName.replace('*', 'any');
    }

    if (!typeName) {
        typeName = 'any';
    } else if (typeName == 'function') {
        typeName = 'Function';
    } else if (typeName.indexOf('.<') >= 0) {
        typeName = typeName.replace('.', ''); // TODO: This is not the best way of handling generic types
    } else if (typeName.indexOf(' .*', '')) {
        typeName = typeName.replace(/ .*/, ''); // TODO: This is not the best way of handling multiple return types
    }

    if (genericClasses.indexOf(typeName) >= 0) {
        typeName = typeName + "<any>";
    }

    return typeName;
}

