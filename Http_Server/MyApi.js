const http = require("http")
const fs = require("fs")

const server = http.createServer((req , res)=>{
// const data =fs.readFileSync(`${__dirname}/MyApi.json` , 'utf8');
// const apidata = JSON.parse(data)

    if(req.url === "/MyApi"){
        res.writeHead(200 , {"content-type" : "Application/JSON"})
        fs.readFile("MyApi.json" , 'utf-8' , (err , data)=>{
            console.log(data)
            res.end(data)
        });
        
        // res.end(apidata)
        // console.log(apidata[1].name)
    }
}
)

server.listen(2000)