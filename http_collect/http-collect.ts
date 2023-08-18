const url: string = process.argv[2];

const http= require('http');

let allData : string="";
http.get(url,(response)=>{
    response.on('data',(data:string)=>{
        allData+=data;
    });
    response.on('end',()=>{
        console.log(allData.length+"\n"+allData);
    });
})