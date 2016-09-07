module.exports = function(grunt) {

	grunt.initConfig({
		sass: {
			dist: {
				files: [{
					expand: true,
					cwd: 'src/css',
					src: ['*.scss'],
					dest: 'src/css',
					ext: '.css'
				}]
			}
		},
		concat: {	
			js: {	//	конкатенируем все *.js в script.js
                options: {
                    separator: ';'
                },
                src: ['src/js/*.js'],
                dest: 'public/js/script.js'
            }
            css: {	//	конкатенируем все *.css в style.css
                options: {
                    separator: '' 
                },
                src: ['src/css/*.css'],
                dest: 'public/css/style.css'
            }
		},
		uglify: {	//	делает минификацыю *.js в *min.js
			js: {
				src: 'public/js/script.js',
				dest: 'public/js/script.min.js'
			}
		},
		cssmin: {	//	делает минификацию и конкатенацию css.
			target: {
				files: [{
					src: 'public/css/style.css',
					dest: 'public/css/style.min.css'
				}]
			}
		},
		watch: {
			sass: {
				files: ['public/*.sass'],
				tasks: ['sass', 'concat']
			},
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['sass', 'concat', 'uglify', 'cssmin', 'watch']);	//	$ grunt


};