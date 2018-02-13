
// let myFunc=function(msg){
//     for(let i=0;i<10;i++){
       
//         setTimeout(function(msg){console.log(i+" times "+msg)}.bind(this,msg),1000)
        
        
//     }
// }
// myFunc('hello there');
// console.log('Im executed first');
//console.log(msg);


let myFunc=function(msg){
    for(let i=0;i<10;i++){
       this.msg=msg;
        setTimeout((msg)=>console.log(i+" times "+this.msg),1000)
        
        
    }
}
 myFunc('hello there');
console.log('Im executed first');
console.log(msg);