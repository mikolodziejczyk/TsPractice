module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                sourceMap: true,
                mangle: false
            }
        },

        // ts: {
        //     classes: {
        //         tsconfig: {
        //             tsconfig: 'AppScripts/classes/tsconfig.json',
        //             passThrough: true
        //         }
        //     },
        //     await: {
        //         tsconfig: {
        //             tsconfig: 'AppScripts/await/tsconfig.json',
        //             passThrough: true
        //         }
        //     }
        // }


    });


    grunt.loadNpmTasks('grunt-contrib-uglify');
    // grunt.loadNpmTasks("grunt-ts");

    // Default task(s).
    grunt.registerTask('default', ['ts']);

};
