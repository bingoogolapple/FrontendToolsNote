// npm install grunt-contrib-copy --save-dev
// npm install grunt-contrib-watch --save-dev
// npm install grunt-contrib-connect --save-dev
// npm install grunt-contrib-sass --save-dev
// npm install grunt-contrib-less --save-dev
// npm install grunt-contrib-concat --save-dev
// npm install grunt-contrib-uglify --save-dev
// npm install grunt-contrib-cssmin --save-dev
// npm install grunt-contrib-imagemin --save-dev
module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  grunt.initConfig({
    imagemin: {
      dist: {
        expand: true,
        src: 'images/**/*.{png,jpg}',
        dest: 'dist/'
      }
    },
    cssmin: {
      dist: {
        src: 'dist/stylesheets/style.css',
        dest: 'dist/stylesheets/style.min.css'
      }
    },
    uglify: {
      dist: {
        src: '<%= concat.js.dest %>',
        dest: 'dist/javascript/dist.min.js'
      }
    },
    concat: {
      js: {
        options: {
          banner: '/* 开始 */\n',
          footer: '/* 结束 */\n'
        },
        src: ['javascript/app.js', 'javascript/modules/module.js'],
        dest: 'dist/javascript/dist.js'
      }
    },
    less: {
      dist: {
        files: {
          'dist/stylesheets/lstyle.css': 'stylesheets/lstyle.less'
        }
      }
    },
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'dist/stylesheets/sstyle.css': 'stylesheets/sstyle.scss'
        }
      }
    },
    connect: { // 服务器只有grunt运行的时候才会运行
      server: {
        options: {
          port: 8000,
          base: 'dist',
          livereload: true
        }
      }
    },
    watch: {
      html: {
        files: ['index.html'],
        tasks: ['copy:html'],
        options: {
          livereload: true
        }
      }
    },
    copy: {
      html: {
        src: 'index.html',
        dest: 'dist/'
      },
      style: {
        src: 'stylesheets/*.css',
        dest: 'dist/'
      },
      js: {
        src: 'javascript/**/*.js',
        dest: 'dist/'
      }
    }
  });

  grunt.registerTask('startServer', ['connect', 'watch']);
  grunt.registerTask('concatUglify', ['concat', 'uglify']);
};
// grunt copy
// grunt copy:html
// grunt watch
// grunt connect:server
// grunt connect:server:keepalive
// grunt startServer
// grunt sass
// grunt less
// grunt concat
// grunt concatUglify
// grunt cssmin
// grunt imagemin
