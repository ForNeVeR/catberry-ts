/// <reference path="typings/tsd.d.ts"/>
/// <reference path="./typings/shelljs/shelljs.d.ts"/>

import gulp = require('gulp');
import ts = require('gulp-typescript');
import shell = require("shelljs");
import path = require("path");

// OMG! This is so dirty I need to take a shower!
process.env["NODE_PATH"] = "./build/" + path.delimiter + process.env["NODE_PATH"];

gulp.task('typescript', () => {
    return gulp.src('./src/*.ts').pipe(ts({
        module: 'commonjs'
    })).pipe(gulp.dest('./build/'));
});

gulp.task('jsdoc', ['typescript'], () => {
    shell.exec('node build/generate_jsdoc.js')
});

gulp.task('tsdef', ['typescript', 'jsdoc'], () => {
    shell.exec('node build/generate_tsdefinitions.js')
});
