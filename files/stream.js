const fs=require('node:fs')
const readableStream =fs.createReadStream('./file.txt',{
    encoding:'utf-8',
    highWaterMark:4
})
const writableStream=fs.createWriteStream('./file3.txt')
readableStream.on("data",(chunk)=>{
    console.log(chunk)
    writableStream.write(chunk)
})