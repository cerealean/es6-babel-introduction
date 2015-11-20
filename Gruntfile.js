module.exports = function (grunt) {
    grunt.initConfig({
        "pkg": grunt.file.readJSON("package.json"),
        "babel": {
            "options": {
                "sourceMap": true,
                "presets" : ['es2015'],
                "plugins" : ['transform-class-properties'],
                "comments" : false,
                "compact" : false
            },
            "dist": {
                "files": [{
                    "expand": true,
                    "cwd" : "src/",
                    "src": ["**/*.js"],
                    "dest": "dist/",
                    "ext": ".js"
                }]
            }
        },
        "watch": {
            "babel" : {
                "files" : 'src/**/*.js',
                "tasks" : ['babel']
            },
            "livereload" : {
                "options" : {"livereload" : true},
                "files" : 'src/**/*.js'
            }
        }
    });
    grunt.loadNpmTasks("grunt-babel");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.registerTask("default", ["babel"]);
};