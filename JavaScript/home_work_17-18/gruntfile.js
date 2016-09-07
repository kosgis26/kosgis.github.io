module.exports = function(grunt) {

	grunt.initConfig({
		concat: {	
			js: {	//	конкатенируем все *.js в script.js
                options: {
                    separator: ';'
                },
                src: ['src/js/*.js'],
                dest: 'public/js/script.js'
            },
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
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);	//	$ grunt


};