"use strict";
var gulp = require("gulp");
var del = require("del");
var sourcemaps = require('gulp-sourcemaps');

/**
 * Remove build directory.
 */
gulp.task('clean', function (cb) {
    return del(["build"], cb);
});

/**
 * Copy all resources that are not TypeScript files into build directory.
 */
// gulp.task("resources", ["server"], function () {
//     return gulp.src(["src/**/*",  "!server", "!server/**"])
//         .pipe(gulp.dest("build"));
// });
gulp.task("resources1", ["server"], function () {
    return gulp.src(["index.html",  "systemjs.config.js"])
        .pipe(gulp.dest("build"));
});
gulp.task("resources", ["server"], function () {
    return gulp.src(["app/**","app/**/*", "!app/**/*.ts", "!app/*.ts"])
        .pipe(gulp.dest("build/app"));
});
gulp.task("server", function () {
    return gulp.src(["index.js", "package.json","web.config"], { cwd: "server/**" })
        .pipe(gulp.dest("build"));
});
/**
 * Copy all required libraries into build directory.
 */
gulp.task("libs", function () {
    return gulp.src([
        '*',
        'es6-shim/es6-shim.min.js',
        'systemjs/dist/system-polyfills.js',
        '@angular/**/bundles/**',
        'systemjs/dist/system.src.js',
        'rxjs/bundles/Rx.js',
        'croperjs/dist/cropper.js',
        'bootstrap/**'
    ], { cwd: "node_modules/**" }) /* Glob required here. */
        .pipe(gulp.dest("build/node_modules"));
});
/**
 * Build the project.
 */
gulp.task("default", ['resources1','resources', 'libs'], function () {
    console.log("Building the project ...");
});