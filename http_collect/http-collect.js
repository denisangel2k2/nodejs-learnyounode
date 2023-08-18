var url = process.argv[2];
var http = require('http');
var allData = "";
http.get(url, function (response) {
    response.on('data', function (data) {
        allData += data;
    });
    response.on('end', function () {
        console.log(allData.length + "\n" + allData);
    });
});
