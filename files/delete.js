const fs=require('node:fs')
fs.unlink('./delete.txt',(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('Deleted Sucessfully')
    }
})