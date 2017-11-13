module.exports = function(grunt) {
	grunt.initConfig({
		concat: {
			options: {

			},
			a: {
				src: ['src/test1.js', 'src/test2.js'],
				dest: 'dist/concatFile.min.js'
			},
			b: {
				files: {
					'dist/concatFile1.min.js': ['src/test1.js'],
					'dist/concatFile2.min.js': ['src/test2.js']

				}
			}
		}
	})

	grunt.loadNpmTasks('grunt-contrib-concat')
	grunt.registerTask('default', ['concat:b'])
}