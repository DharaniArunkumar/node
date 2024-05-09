// const fs=require('node:fs')
// const zlib=require('zlib')
// const zip =zlib.createGzip()
// const readableStream = fs.createReadStream('./file4.txt',{
//     encoding:"utf-8",
//     highWaterMark:2
// })
// readableStream.pipe(zip).pipe(fs.WriteStreamriteStream('./file2.txt.zip'))


const fs=require('node:fs')
const zlib=require('zlib')
const zip=zlib.createGzip()
const readableStream=fs.createReadStream('./pipes.txt',{
    encoding:"utf-8",
    highWaterMark:2
})
readableStream.pipe(zip).pipe(fs.WriteStream("./pipes1.txt.zip"))