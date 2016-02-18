// npm install gulp-sass --save-dev
// npm install gulp-less --save-dev
// npm install gulp-connect --save-dev
// npm install gulp-concat --save-dev
// npm install gulp-uglify --save-dev
// npm install gulp-rename --save-dev
// npm install gulp-minify-css --save-dev
// npm install gulp-imagemin --save-dev

var gulp = require('gulp');
var sass = require('gulp-sass');
var less = require('gulp-less');
var connect = require('gulp-connect');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minifyCss = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');

gulp.task('sass', function() {
  return gulp.src('stylesheets/**/*.scss')
  .pipe(sass())
  .pipe(minifyCss())
  .pipe(gulp.dest('dist/css'));
});
gulp.task('less', function() {
  return gulp.src('stylesheets/**/*.less')
  .pipe(sass())
  .pipe(gulp.dest('dist/css'));
});

gulp.task('server', function() {
  connect.server({
    root: 'dist',
    livereload: true
  });
});
gulp.task('copyIndex', function() {
  return gulp.src('index.html')
  .pipe(gulp.dest('dist'))
  .pipe(connect.reload());
});
gulp.task('watch', function() {
  gulp.watch('index.html', ['copyIndex']);
});
gulp.task('startServer', ['server', 'watch']);


gulp.task('concatUglifyJS', function() {
  return gulp.src(['javascript/**/*.js'])
  .pipe(concat('dist.js'))
  .pipe(gulp.dest('dist/js'))
  .pipe(uglify())
  .pipe(rename('dist.min.js'))
  .pipe(gulp.dest('dist/js'));
});

gulp.task('copyImages', function() {
  return gulp.src('images/**/*.{jpg,png}')
  .pipe(imagemin())
  .pipe(gulp.dest('dist/images'));
});
