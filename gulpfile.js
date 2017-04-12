var gulp = require('gulp');
var $    = require('gulp-load-plugins')();
var minify = require('gulp-minify');
var concat = require('gulp-concat');

var sassPaths = [
  'bower_components/normalize.scss/sass',
  'bower_components/foundation-sites/scss',
  'bower_components/motion-ui/src'
];

gulp.task('sass', function() {
  return gulp.src('scss/app.scss')
    .pipe($.sass({
      includePaths: sassPaths,
      outputStyle: 'compressed' // if css compressed **file size**
    })
      .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(gulp.dest('assets/css'));
});

gulp.task('compress', function() {
  var files = [
    'bower_components/jquery/dist/jquery.js',
    'bower_components/what-input/dist/what-input.js',
    'bower_components/foundation-sites/dist/js/foundation.js',
    'bower_components/scrollmagic/scrollmagic/minified/ScrollMagic.min.js',
    // 'bower_components/scrollmagic/scrollmagic/uncompressed/ScrollMagic.js',
    'bower_components/scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js',
    'bower_components/gsap/src/minified/TweenMax.min.js',
    'js/schedule.js',
    'js/app.js'
  ];

  return gulp.src(files)
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('assets/js'))
    .pipe(minify())
    .pipe(gulp.dest('assets/js'));
});

gulp.task('default', ['sass'], function() {
  gulp.watch(['scss/**/*.scss'], ['sass']);
});

gulp.task('build', ['sass', 'compress']);
