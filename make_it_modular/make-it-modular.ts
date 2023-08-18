const filterFunc=require('./mymodule.js');
const dir : string=process.argv[2];
let filterStr : string=process.argv[3];

filterFunc(dir, filterStr,function(err,list){
    if (err) return console.error(err);
    else{
        list.forEach(function(file){
            console.log(file);
        })
    }
});