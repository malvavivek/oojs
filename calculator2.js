let Calculator=function(val){
    let total=val;
    let add=function(newVal){
        total+=newVal;
    }
    let substract=function(newVal){
        total-=newVal;
    }
    let multiply=function(newVal){
        total*=newVal;
    }
    let getTotal=function(){
       return total;
    }
    //closures to expose private as public interfaces 
    // return{
    //     add:add,
    //     substract:substract,
    //     multiply:multiply,
    //     getTotal:getTotal
    // }
    //ES2015 object literal extensions
    return{
        add,
        substract,
        multiply,
        getTotal
    }
}
let ScientificCalculator=function(val){
    Calculator.call(this,val);
    this.sin=function(newVal){
        return Math.sin(newVal);
    }
    this.cosine=function(newVal){
        return Math.cos(newVal);
    }
}

ScientificCalculator.prototype=Calculator.prototype;
object.create(Calculator);
let calc=new Calculator(10);
calc.add(10);
calc.substract(5);
calc.multiply(20);
console.log(calc.getTotal());
console.log(calc.sin(45));
// instanceof calculator will be false in this case because calculator is returning a closure so calc is a instance of closure not of calculator 
console.log(calc instanceof Calculator);