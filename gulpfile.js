"use strict";
const gulp = require('gulp');
const babel = require('gulp-babel');
const scss = require('gulp-scss');
const swig = require('gulp-swig');

gulp.task('babel', () =>
    gulp.src('src/es6/**/*.js')
    .pipe(babel({
        presets: ['env']
    }))
    .pipe(gulp.dest('dist/js'))
);

gulp.task("scss", function() {
    gulp.src(
        "src/scss/**/*.scss"
    ).pipe(scss()).pipe(gulp.dest("dist/css"));
});

gulp.task('swig', function() {
    gulp.src('src/swig/**/*.html')
        .pipe(swig({ defaults: { cache: false } }))
        .pipe(gulp.dest('dist/views'))
});

gulp.task('watch', function() {
        gulp.watch('src/es6/**/*.js', ['babel']);
        gulp.watch('src/swig/**/*.html', ['swig']);
    }

)
gulp.task('default', ['babel', 'swig']);