const port: string = process.argv[2];
const filepath: string=process.argv[3];

const fs=require('fs');
const http=require('http');

const server=http.createServer((request,response)=>{
    let fileStream=fs.createReadStream(filepath);
    fileStream.pipe(response);
});
server.listen(port);

