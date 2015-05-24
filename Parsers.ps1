function Parse-Class($class) {
	$functions = if ($class.functions) {
		$class.functions | ? { -not $_.access } | % { Parse-Function $_ }
	} else {
		$null
	}

	$properties = if ($class.properties) {
		$class.properties | ? { -not $_.access } | % { Parse-Property $_ }
	} else {
		$null
	}

	@{
		Name = $class.name
		Description = $class.description
		BaseName = $class.extends
		Properties = $properties
		Constructor = Parse-Constructor $class.constructor
		Functions = $functions
	}
}

function Parse-Property($property) {
	@{
		Name = $property.name
		Description = $property.description
		Type = Parse-TypeName $property.type.names
	}
}

function Parse-Constructor($constructor) {
	$parameters = if ($constructor.parameters) {
		$constructor.parameters | ? {
			-not $_.name.Contains('.') # TODO: These are complex parameter types; should be worked around at another level
		} | % { Parse-Parameter $_ }
	} else {
		@()
	}

	@{
		Name = $constructor.name
		Description = $constructor.description
		Parameters = $parameters
	}
}

function Parse-Function($function) {
	$parameters = if ($function.parameters) {
		$function.parameters | ? {
			-not $_.name.Contains('.') # TODO: These are complex parameter types; should be worked around at another level
		} | % { Parse-Parameter $_ }
	} else {
		$null
	}

	@{
		Name = $function.name
		Description = $function.description
		Parameters = $parameters
		ReturnValue = Parse-Parameter $function.returns
	}
}

function Parse-Parameter($parameter) {
	@{
		Name = $parameter.name
		Description = $parameter.description
		Type = Parse-TypeName $parameter.type
	}
}

$genericClasses = @(
	'Array',
	'Promise'
)

function Parse-TypeName([string]$type) {
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
}
