var gulp = require('gulp');
var browserSync = require('browser-sync').create();

// gulp browser-sync
gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: './forest'
    },
    files: ['forest/index.html', 'forest/css/*.css']
  });
});
