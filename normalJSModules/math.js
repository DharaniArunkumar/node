//1.export as module.exports=add
//2.starting a function as module.exports
//3.if giving in arrow function same as first method can be used
//4. if in same method giving multiple function object method can be passed
//5. can starts with exports and arrow function


//1.
// const add=(a,b)=>{
//     console.log(a+b)
// }
// module.exports=add


//2.
// module.exports=(a,b)=>{
//     console.log(a-b)
// }

//3.and 4.
// const add=(a,b)=>{
//     console.log(a+b);
// }
// const sub=(a,b)=>{
//     console.log(a-b);
// }
// module.exports={add,sub}


//5.
exports.add=(a,b)=>{
    console.log(a+b)
}
exports.sub=(a,b)=>{
    console.log(a-b)
}
exports.div=(a,b)=>{
    console.log(a/b)
}



