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
        "returnvalue": parseParameter(rawFunction.returns)
    };
}

function parseParameter(rawParameter) {
    return rawParameter;
    /*
	@{
		Name = $parameter.name
		Description = $parameter.description
		Type = Parse-TypeName $parameter.type
	}
    */
}

/*
$genericClasses = @(
	'Array',
	'Promise'
)
*/

var genericClasses = ['Array', 'Promise'];


function parseTypeName(typeName/*[string]$type*/) {
    return typeName;
    /*
	if ($type -ne $null -and $type.Contains('*')) {
		$type = $type.Replace('*', 'any')
	}

	$type = if (-not $type) {
		'any'
	} elseif ($type -eq 'function') {
		'Function'
	} elseif ($type.Contains('.<')) {
		$type.Replace('.', '') # TODO: This is not the best way of handling generic types
	} elseif ($type.Contains(' ')) {
		$type -replace ' .*', '' # TODO: This is not the best way of handling multiple return types
	} else {
		$type
	}

	if ($genericClasses -contains $type) {
		$type = "$type<any>"
	}

	$type
    */
}

