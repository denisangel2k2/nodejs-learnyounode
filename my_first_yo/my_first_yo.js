var fs = require("fs");
var pathToFile = process.argv[2];
var buffer = fs.readFileSync(pathToFile);
var strings = buffer.toString();
var lines = strings.split("\n");
console.log(lines.length - 1);
