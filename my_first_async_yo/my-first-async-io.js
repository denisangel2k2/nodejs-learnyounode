var filepath = process.argv[2];
var fs = require("fs");
fs.readFile(filepath, function callback(err, data) {
    var lines = data.toString().split("\n");
    console.log(lines.length - 1);
});
