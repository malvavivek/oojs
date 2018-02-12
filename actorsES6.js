//we're declaring Actor as class
class Actor{
    constructor(age,height,name){
    this.age=age;
    this.height=height;
    this.name=name;
    }
    //instance methods
    dance(){
        console.log("Actor "+this.name +" is dancing");
    }
    act(){
        console.log("Actor "+this.name +" is acting");
    }
}
let shahrukkhan = new Actor(52,173,"ShahrukhKhan");
shahrukkhan.act();
shahrukkhan.dance();