const fs=require('fs')
const path=require('path');
module.exports = function (dir : string, filter : string, callback){
    fs.readdir(dir, function (err,data){
        if (err) return callback(err,[]);
        else {
            data=data.filter((file)=>{return path.extname(file) ==='.'+ filter});
            callback(null, data);
        }
    })
}