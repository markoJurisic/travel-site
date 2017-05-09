const gulp = require('gulp'),
      modernizr = require('gulp-modernizr'),
      allCssFiles = './app/assets/styles/**/*.css',
      allJsFiles = './app/assets/scripts/**/*.js';

gulp.task('modernizr', () => {
  return gulp.src([allCssFiles, allJsFiles])
    .pipe(modernizr({
      "options": [
        "setClasses"
      ]
    }))
    .pipe(gulp.dest('./app/temp/scripts/'));
});
