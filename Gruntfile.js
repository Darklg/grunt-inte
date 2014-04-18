module.exports = function(grunt) {

    // Config
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jekyll: {
            options: {
                config: '_config.yml',
                src: 'src',
                dest: 'build'
            },
            dev: {}
        },
        sass: {
            dist: {
                options: {
                    compass: true,
                    style: 'expanded'
                },
                files: {
                    'build/assets/css/main.css': 'src/assets/_sass/main.scss'
                }
            }
        },
        shell: {
            jekyll: {
                command: 'jekyll build;'
            }
        },
    });

    // Modules
    grunt.loadNpmTasks('grunt-gh-pages');
    grunt.loadNpmTasks('grunt-jekyll');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-sass');

    // Tasks
    grunt.registerTask('default', ['jekyll:dev', 'sass']);

};