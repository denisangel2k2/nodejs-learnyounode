const filepath : string = process.argv[2];

fs.readFile(filepath,function callback(err,data){
    let lines=data.toString().split("\n");
    console.log(lines.length - 1);
});    






