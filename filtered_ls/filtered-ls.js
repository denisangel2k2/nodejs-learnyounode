var dirname = process.argv[2];
var file_ext = process.argv[3];
file_ext = "." + file_ext;
var fs = require('fs');
var path = require('path');
fs.readdir(dirname, function (err, files) {
    files.forEach(function (element) {
        if (path.extname(element) === file_ext)
            console.log(element);
    });
});
