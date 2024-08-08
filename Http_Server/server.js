//  Creating HTTP Server Using HTTP Module.

const http = require("http")

const server = http.createServer((req , res)=>{
 res.write('Wlcome To Our Server ok')
 res.end()
})

server.listen(5000)