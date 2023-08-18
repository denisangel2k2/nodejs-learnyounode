
const dirname : string = process.argv[2];
let file_ext : string = process.argv[3];
file_ext="."+file_ext;

const fs = require('fs');
const path=require('path');

fs.readdir(dirname, (err,files)=>{
    files.forEach(element => {
        if (path.extname(element) === file_ext)
            console.log(element);
    });
});