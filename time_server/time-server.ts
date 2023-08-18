const port: string = process.argv[2];

const net= require('net');
const server=net.createServer((socket)=>{

    const date: Date=new Date();
    let dateString: string = date.getFullYear().toString()+"-"+(date.getMonth()+1).toString().padStart(2, '0')+"-"+date.getDate().toString().padStart(2, '0')+" "+date.getHours().toString().padStart(2, '0')+":"+date.getMinutes().toString().padStart(2, '0')+"\n";
    socket.end(dateString);
})
server.listen(port);