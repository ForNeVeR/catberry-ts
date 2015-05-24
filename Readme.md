catberry-ts
===========
This is a project for creation [TypeScript definition][definitelytyped] files
for [Catberry Framework][catberry]. Finally it will be published at
[DefinitelyTyped][definitelytyped] repository.

[catberry]: http://catberry.org/
[definitelytyped]: http://definitelytyped.org/

Cloning
-------
This repository uses git submodules, so you should clone it recursively.

Initial definitions
-------------------
To get the initial definitions, you should install [jsdoc tool][jsdoc] and
[tsd], then execute the following:

    tsd reinstall --save
    .\Generate-JsDoc.ps1
    .\Generate-TsDefinitions.ps1

[jsdoc]: http://usejsdoc.org/
[tsd]: http://definitelytyped.org/tsd/
