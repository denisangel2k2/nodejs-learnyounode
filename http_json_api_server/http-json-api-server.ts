const port : number = Number(process.argv[2]);

const http = require('http');
const url = require('url');

const server = http.createServer((request,response)=>{
    if (request.method === 'GET') {
    console.log('URL: '+request.pathName);
    let parsedURL : any=url.parse(request.url,true);
    console.log('PARSED: ' +parsedURL.pathname.toString());
    let pathName=parsedURL.pathname;
    let date=new Date(parsedURL.query.iso);
    let output : any;
    if (pathName==='/api/parsetime'){
        output={
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        };
    }
    else if (pathName==='/api/unixtime'){
        output={unixtime: date.getTime()};
    }
    if (output){
        response.writeHead(200,{'Content-Type': 'application/json'});
        response.end(JSON.stringify(output));
    }
    }
});

server.listen(port);
