function callBack(name){
    console.log(name)
}
function HOC(callBack){
    name="Arun"
    callBack(name)
}
HOC(callBack)