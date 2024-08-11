const http = require("http");

const server = http.createServer((req , res)=>{

    const data = {
        name:'ajit',
        status : 'succses'
    };

    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.end(JSON.stringify(data));
})

server.listen(4000 )