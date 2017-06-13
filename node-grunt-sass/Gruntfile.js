module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            dist: {
                files: [{
                    'public/stylesheets/style.css': 'sass/style.scss'
                }]
            }
        },
        connect: {
            options: {
                port: 9000,
                hostname: 'localhost',
                livereload: 35729
            },
            all: {
                options: {
                    open: true,
                    base: ['views','public']
                }
            }
        },
        watch: {
            options: {
                livereload: '<%= connect.options.livereload %>'
            },
            css: {
                files: [
                    'sass/*.scss'
                ],
                tasks:['sass']
            },
            html: {
                files: ['views/*.html']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('server',['connect','sass','watch']);
};