module.exports = function (grunt) {
    grunt.initConfig({
        "pkg": grunt.file.readJSON("package.json"),
        "browserify": {
            "options": {
                "transform" : [
                    ["babelify",
                        {
                            "presets" : ["es2015"],
                            "plugins" : ['transform-class-properties'],
                            "sourceMap" : true
                        }
                    ]
                ]
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
            "browserify" : {
                "files" : 'src/**/*.js',
                "tasks" : ['browserify']
            },
            "livereload" : {
                "options" : {"livereload" : true},
                "files" : 'src/**/*.js'
            }
        }
    });
    grunt.loadNpmTasks("grunt-babel");
    grunt.loadNpmTasks("grunt-browserify");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.registerTask("default", ["browserify"]);
};