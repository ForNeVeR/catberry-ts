function Generate-Class($class) {
	$className = $class.Name
	$baseClassName = $class.BaseName
	$properties = if ($class.Properties) {
		$class.Properties | % { Generate-Property $_ }
	} else {
		$null
	}

	$constructor = Generate-Constructor $class.Constructor

	$methods = if ($class.Functions) {
		$class.Functions | % { Generate-Method $_ }
	} else {
		$null
	}

	$documentation = if ($class.Description) {
		"		/**`n" + (Prefix-Comment 2 $class.Description) + "`n		*/"
	} else {
		''
	}

	@"
$documentation
	class $className $(if ($baseClassName) { "extends $baseClassName " }){
$properties
$constructor
$methods
	}
"@
}

function Generate-Variable($variable) {
	$name = $variable.Name
	$type = $variable.Type
	"${name}: $type"
}

function Generate-Property($property) {
	$documentation = if ($property.Description) {
		"		/**`n" + (Prefix-Comment 2 $property.Description) + "`n		*/"
	} else {
		''
	}

	$variable = Generate-Variable $property

	@"
$documentation
		$variable;`n
"@
}

function Prefix-Comment($tabLevel, $comment) {
	$lines = $comment.Split("`n")
	($lines | ? { $_ } | % {
		'	' * $tabLevel + " * $_"
	}) -join "`n"
}

function Generate-FunctionDocumentation($function) {
	if ($function.Parameters) {
		$parameterDocs = ($function.Parameters | ? { $_.Description } | % {
			"@param $($_.Name) $($_.Description)"
		}) -join "`n"
	} else {
		$parameterDocs = ''
	}

	$returnDoc = if ($function.ReturnValue.Description) {
		"@return $($function.ReturnValue.Description)"
	} else {
		''
	}

	if ($parameterDocs -or $function.Description -or $returnDoc) {
		$comment = Prefix-Comment 2 @"
$($function.Description)
$parameterDocs
$returnDoc
"@
		@"
		/**
$comment
		 */
"@
	} else {
		''
	}
}

function Generate-Method($function) {
	$name = $function.Name
	if ($function.Parameters) {
		$parameters = ($function.Parameters | % { Generate-Variable $_ }) -join ', '
	} else {
		$parameters = $null
	}

	$returnType = $function.ReturnValue.Type
	if ($returnType -eq $null) {
		$returnType = 'any'
	}

	$documentation = Generate-FunctionDocumentation $function

	@"
$documentation
		$name($parameters): $returnType;

"@
}

function Generate-Constructor($constructor) {
	$name = $constructor.Name
	$parameters = if ($constructor.Parameters) {
		($constructor.Parameters | % { Generate-Variable $_ }) -join ', '
	} else {
		''
	}

	$documentation = Generate-FunctionDocumentation $constructor

	@"
$documentation
		$name($parameters);
"@
}
