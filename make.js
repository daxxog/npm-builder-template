/* {{Name}} / make.js
 * echo 'make script for {{Name}}' && node make
 * (c) {{year}} David (daXXog) Volm ><> + + + <><
 * Released under Apache License, Version 2.0:
 * http://www.apache.org/licenses/LICENSE-2.0.html  
 */

var bitfactory = require('bitfactory'),
    UglifyJS = require("uglify-js"),
    stoptime = require('stoptime'),
    fs = require('fs');

var watch = stoptime(),
    header = '';

bitfactory.make({ //routes
    "": function(err, results) {
        console.log('built {{Name}} in ' + watch.elapsed() + 'ms.');
    }
}, { //dependencies
    "*": { //wildcard
        "header": function(cb) {
            fs.readFile('{{name}}.h', 'utf8', function(err, data) {
                header = data;
                cb(err);
            });
        },
        "{{name}}.min.js": ["header", function(cb) {
            fs.writeFileSync('{{name}}.min.js', header + UglifyJS.minify('{{name}}.js').code);
            cb();
        }],
        "cli.min.js": ["header", function(cb) {
            fs.writeFileSync('cli.min.js', header + UglifyJS.minify('cli.js').code);
            cb();
        }]
    }
});