var filterFunc = require('./mymodule.js');
var dir = process.argv[2];
var filterStr = process.argv[3];
filterFunc(dir, filterStr, function (err, list) {
    if (err)
        return console.error(err);
    else {
        list.forEach(function (file) {
            console.log(file);
        });
    }
});
