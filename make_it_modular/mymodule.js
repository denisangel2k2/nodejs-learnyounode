var fs = require('fs');
var path = require('path');
module.exports = function (dir, filter, callback) {
    fs.readdir(dir, function (err, data) {
        if (err)
            return callback(err, []);
        else {
            data = data.filter(function (file) { return path.extname(file) === '.' + filter; });
            callback(null, data);
        }
    });
};
