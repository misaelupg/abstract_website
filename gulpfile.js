var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    stylish = require('jshint-stylish'),
    uglify = require('gulp-uglify'),
    usemin = require('gulp-usemin'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    changed = require('gulp-changed'),
    rev = require('gulp-rev'),
    del = require('del');

    //Clean
    gulp .task('clean', function() {
            return del(['dist']);
        }
    );

    // Default task
    gulp.task('default', ['clean'], function() {
        gulp.start('usemin','copyfonts');
    });

    gulp.task('hello', function() {
        console.log('hello');    
    });

    //Usemin
    gulp.task('usemin', function () {
        return gulp.src('./index.html')
      .pipe(usemin({
        css:[minifycss(),rev()],
        js: [uglify(),rev()]
      }))
      .pipe(gulp.dest('dist/'));
});


//Copy fonts
gulp.task('copyfonts', ['clean'], function() {
   gulp.src('fonts/**/*.{ttf,woff,eof,svg}*')
   .pipe(gulp.dest('./dist/fonts'));
});