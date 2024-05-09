const fs=require('node:fs')
fs.writeFileSync('./data.txt','Hello World')
fs.writeFile('./data.txt','Hi World',{flag:"a"},(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("File Written Successfully")
    }
})

// File Written Successfully
// Hello WorldHi World