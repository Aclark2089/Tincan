var gulp = require('gulp');
var sass = require('gulp-sass');


// Create sass task
gulp.task('sass', function() {
  return gulp.src('./public/css/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/css'));
});

// Watch for changes and recompile css
gulp.task('watch', function() {
  gulp.watch('./public/css/sass/**/*.scss', ['sass']);
});
