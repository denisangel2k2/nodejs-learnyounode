var port = process.argv[2];
var net = require('net');
var server = net.createServer(function (socket) {
    var date = new Date();
    var dateString = date.getFullYear().toString() + "-" + (date.getMonth() + 1).toString().padStart(2, '0') + "-" + date.getDate().toString().padStart(2, '0') + " " + date.getHours().toString().padStart(2, '0') + ":" + date.getMinutes().toString().padStart(2, '0') + "\n";
    socket.end(dateString);
});
server.listen(port);
