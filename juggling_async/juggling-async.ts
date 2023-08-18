const urls : string[] = [process.argv[2], process.argv[3], process.argv[4]];
const http= require('http');
async function getData(url: string){
    let receivedData : string = '';
    return new Promise((resolve, reject) =>{
        http.get(url,(response)=>{
            response.on('data',(data)=>{
                receivedData+=data;
            });
            response.on('end',() => {
                resolve(receivedData);
            });
        }
        ).on('error', (error) => {
            reject(error);
        });
    });
}

async function fetchData(){
    try{
        const responses = await Promise.all(urls.map(async (url:string)=>{
            return await getData(url);
        }));

        responses.forEach((response) => {
            console.log(response);
        });
    }
    catch (error){
        console.error(error);
    }
}
fetchData();

