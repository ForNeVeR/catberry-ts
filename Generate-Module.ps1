param (
	[Parameter(Mandatory = $true)]
	$ModuleName
)

. $PSScriptRoot\Parsers.ps1
. $PSScriptRoot\Generators.ps1

$definition = [xml](Get-Content ".\$ModuleName.xml")
$classes = ($definition.jsdoc.classes | % { Parse-Class $_ } | % { Generate-Class $_ }) -join "`n"

@"
/// <reference path="../typings/tsd.d.ts"/>
declare module '$ModuleName' {
$classes
}
"@ | Out-File -Encoding utf8 "definitions\$ModuleName.d.ts"
