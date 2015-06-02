catberry-ts
===========
This is a project for creation [TypeScript definition][definitelytyped] files
for [Catberry Framework][catberry]. Finally it will be published at
[DefinitelyTyped][definitelytyped] repository.

[catberry]: http://catberry.org/
[definitelytyped]: http://definitelytyped.org/

Cloning
-------
This repository uses git submodules, so you should clone it recursively:

    $ git clone --recursive <git-repo-url>

Initial definitions
-------------------
To get the initial definitions execute the following:

    $ npm install
    $ npm run compile
    $ npm run jsdoc
    $ npm run tsdef
