const fs=require("fs");

let pathToFile : string = process.argv[2];

let buffer=fs.readFileSync(pathToFile);
const strings=buffer.toString();

let lines=strings.split("\n");
console.log(lines.length-1);