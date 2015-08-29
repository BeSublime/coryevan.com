/* with a lowercase g 'cuz I'm a rebel */
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      js: {
        files: [
          {
            // mixitup
            cwd: 'bower_components/mixitup/build/',
            src: '**',
            dest: 'public/js/',
            expand: true
          },
          // fullpage.js
          {
            cwd: 'bower_components/fullpage.js/',
            src: 'jquery.fullPage.min.js',
            dest: 'public/js/',
            expand: true
          },
          // jquery
          {
            cwd: 'bower_components/jquery/dist/',
            src: 'jquery.min.js',
            dest: 'public/js/',
            expand: true
          }
        ]
      },
      css: {
        files: [
          // fullpage.js
          {
            cwd: 'bower_components/fullpage.js/',
            src: 'jquery.fullPage.css',
            dest: 'public/css/',
            expand: true
          },
          // skeleton
          {
            cwd: 'bower_components/skeleton-css/css/',
            src: '**',
            dest: 'public/css/',
            expand: true
          }
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s)
  grunt.registerTask('copyall', ['copy:js', 'copy:css']);
  grunt.registerTask('default', ['copyall']);

};