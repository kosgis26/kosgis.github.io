module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

    grunt.initConfig({
        concat: {   
            // js: {
            //     options: {
            //         separator: ';'
            //     },
            //     src: ['src/js/*.js'],
            //     dest: 'public/js/script.js'
            // },
            css: {
                options: {
                    separator: '' 
                },
                src: ['src/css/*.css'],
                dest: 'public/css/style.css'
            }
        },
        watch: {
            babel: {
                files: ['src/js/scriptES6.js'],
                tasks: ['babel']
            }
        },
        babel: {
            options: {
                sourceMap: false,
                presets: ['es2015']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src/js',
                    src: ['scriptES6.js'],
                    dest: 'public/js',
                    ext: '.js',
                    extDot: 'first'
                    //"src/js/scriptES6.js":"public/js/script.js"
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['concat', 'babel']);
    grunt.registerTask('watch', ['watch']);
};