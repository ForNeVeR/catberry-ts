/// <reference path="typings/tsd.d.ts"/>
/// <reference path="./typings/shelljs/shelljs.d.ts"/>

import gulp = require('gulp');
import ts = require('gulp-typescript');
import shell = require("shelljs");

var isWin = /^win/.test(process.platform);

// OMG! This is so dirty I need to take a shower!
process.env["NODE_PATH"] = "./build/" + (isWin ? ";" : ":") + process.env["NODE_PATH"];

gulp.task('typescript', () => {
    return gulp.src('./src/*.ts').pipe(ts({
        module: 'commonjs'
    })).pipe(gulp.dest('./build/'));
});

gulp.task('jsdoc', () => {
    shell.exec('node build/generate_jsdoc.js')
});

gulp.task('tsdef', () => {
    shell.exec('node build/generate_tsdefinitions.js')
});
