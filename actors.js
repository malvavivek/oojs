//we're declaring Actor as class
let Actor=function(age,height,name){
    //instance variables
    this.age=age;
    this.height=height;
    this.name=name;
    //instance methods
    this.dance=function(){
        console.log("Actor "+this.name +" is dancing");
    }
    this.act=function(){
        console.log("Actor "+this.name +" is acting");
    }
}
let shahrukkhan = new Actor(52,173,"ShahrukhKhan")