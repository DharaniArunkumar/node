const fs=require('node:fs')
console.log('first')
const datas=fs.readFileSync('./file.txt','utf-8') //Synchoronous
console.log(datas)

console.log('Second')
fs.readFile('./file.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})
console.log('Third')


// first
// Hello World
// Second
// Third
// Hello World