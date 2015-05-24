param (
	[Parameter(Mandatory = $true)]
	$ModuleName,
	$BaseModules
)

. $PSScriptRoot\Parsers.ps1
. $PSScriptRoot\Generators.ps1

$definition = [xml](Get-Content ".\$ModuleName.xml")
$classes = ($definition.jsdoc.classes | % { Parse-Class $_ } | % { Generate-Class $_ }) -join "`n"

$references = if ($BaseModules) {
	$BaseModules | % { "/// <reference path=`"$_.d.ts`"/>`n" }
} else {
	''
}

@"
/// <reference path="../typings/tsd.d.ts"/>
$references
declare module '$ModuleName' {
$classes
}
"@ | Out-File -Encoding utf8 "definitions\$ModuleName.d.ts"
