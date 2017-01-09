var gulp = require('gulp');
var $    = require('gulp-load-plugins')();

var sassPaths = [
  'assets/bower_components/normalize.scss/sass',
  'assets/bower_components/foundation-sites/scss',
  'assets/bower_components/motion-ui/src'
];

gulp.task('sass', function() {
  return gulp.src('assets/scss/app.scss')
    .pipe($.sass({
      includePaths: sassPaths,
      outputStyle: 'compressed' // if css compressed **file size**
    })
      .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(gulp.dest('css'));
});

gulp.task('default', ['sass'], function() {
  gulp.watch(['scss/**/*.scss'], ['sass']);
});
