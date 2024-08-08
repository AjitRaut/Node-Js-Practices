//  Creating HTTP Server Using HTTP Module.

const http = require("http")

const server = http.createServer((req , res)=>{
 if(req.url === '/about'){
    res.end('Welcome To about page');
 }
 if(req.url === "/"){
    res.end("welcome to to homepage")
 }
 res.end( `
    <h1>Oops something went wrong </h1>
    <a href="/" >Back To Homepage</a>
    `)
})

server.listen(5000)