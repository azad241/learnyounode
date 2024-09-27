const http = require('http');
http.get(process.argv[2], (response) => {
    response.setEncoding('utf-8');
    response.on('data', (data) => {
        console.log(data);
    });
    response.on('err', (error)=>{
        console.log(error);
    });
    response.on('end', ()=>{
        //console.log('Ended Reading');
        //console.log('');
    });
})