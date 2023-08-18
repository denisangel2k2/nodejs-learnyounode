var port = process.argv[2];
var filepath = process.argv[3];
var fs = require('fs');
var http = require('http');
var server = http.createServer(function (request, response) {
    var fileStream = fs.createReadStream(filepath);
    fileStream.pipe(response);
});
server.listen(port);
