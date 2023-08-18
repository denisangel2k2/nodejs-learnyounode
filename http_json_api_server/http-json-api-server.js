var port = Number(process.argv[2]);
var http = require('http');
var url = require('url');
var server = http.createServer(function (request, response) {
    if (request.method === 'GET') {
        console.log('URL: ' + request.pathName);
        var parsedURL = url.parse(request.url, true);
        console.log('PARSED: ' + parsedURL.pathname.toString());
        var pathName = parsedURL.pathname;
        var date = new Date(parsedURL.query.iso);
        var output = void 0;
        if (pathName === '/api/parsetime') {
            output = {
                hour: date.getHours(),
                minute: date.getMinutes(),
                second: date.getSeconds()
            };
        }
        else if (pathName === '/api/unixtime') {
            output = { unixtime: date.getTime() };
        }
        if (output) {
            response.writeHead(200, { 'Content-Type': 'application/json' });
            response.end(JSON.stringify(output));
        }
    }
});
server.listen(port);
