'use strict';

var gulp = require('gulp'); //Подключил gulp
var sass = require('gulp-sass'); //Подключил sass/scss
// var watch = require('gulp-watch-sass');

gulp.task('sass', function(build) { //Создал таск "sass"
    gulp.src('src/scss/**/*.scss') //Взял файл .scss
        .pipe(sass().on('error', sass.logError)) //Компиляция файла .scss в .css
        .pipe(gulp.dest('src/css')); //Выгружение результата в папку css
    build();
});

gulp.task('watch', function(){
    gulp.watch('src/scss/*.scss', gulp.series('sass'));
    // Other watchers
})