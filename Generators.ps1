function Generate-Class($class) {
	$className = $class.Name
	$baseClassName = $class.BaseName
	$properties = if ($class.Properties) {
		$class.Properties | % { Generate-Property $_ } | % { "		$_;`n" }
	} else {
		$null
	}

	$constructor = "		" + (Generate-Constructor $class.Constructor) + ";`n"

	$methods = if ($class.Functions) {
		$class.Functions | % { Generate-Method $_ } | % { "		$_;`n" }
	} else {
		$null
	}

	@"
	class $className $(if ($baseClassName) { "extends $baseClassName " }){
$properties
$constructor
$methods
	}
"@
}

function Generate-Property($property) {
	$name = $property.Name
	$type = $property.Type
	"${name}: $type"
}

function Generate-Method($function) {
	$name = $function.Name
	$parameters = if ($function.Parameters) {
		($function.Parameters | % { Generate-Property $_ }) -join ', '
	} else {
		$null
	}
	$returnType = $function.ReturnValue.Type
	if ($returnType -eq $null) {
		$returnType = 'any'
	}

	"$name($parameters): $returnType"
}

function Generate-Constructor($constructor) {
	$name = $constructor.Name
	$parameters = if ($function.Parameters -eq $null) {
		$null
	} else {
		($function.Parameters | % { Generate-Property $_ }) -join ', '
	}

	"$name($parameters)"
}
