var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('default', function() {
  return gulp.src('src/*.js')
      .pipe(babel())
      .pipe(gulp.dest('lib'));
});

// 可以在gulpfile.js中的babel指定预设，也可以在.babelrc中添加预设
gulp.task('presets', function() {
  return gulp.src('src/*.js')
      .pipe(babel({
  			presets: ['es2015']
  		}))
      .pipe(gulp.dest('lib'));
});
