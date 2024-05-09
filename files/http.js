const http=require('node:fs')
const server=http.CreateServer((req,res)=>{
    res.writeHead(200,{'content-type':"text/plain"})
    res.end("Hello World")
})

server.listen(3001,()=>{
    console.log("Server is running in port 3001")
})