const http=require('http');

const url:string=process.argv[2];

http.get(url,(response)=>{
    response.setEncoding('utf8');
    response.on('data', (data)=>{
        console.log(data.toString());
    })
    response.on('error', console.error);
});