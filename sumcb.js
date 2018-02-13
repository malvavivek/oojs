//synchronous
// var myFunc=function(x,y,cb){
//    cb(x+y);
// }
// myFunc(10,20,(result)=>console.log(result));

//asynchronous
var myFunc=function(x,y,cb){
    setTimeout(()=>{
        cb(x+y);
    },1000)
    
 }
 myFunc(10,20,(result)=>console.log(result));
 