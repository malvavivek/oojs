class Calculator{

    constructor(val){
        this.total=val;
    }
    add(newVal){
        this.total+=newVal;
    }
    substract(newVal){
        this.total-=newVal;
    }
    multiply(newVal){
        this.total*=newVal;
    }
    getTotal(){
       return this.total;
    }
}
class ScientificCalculator extends Calculator{
    constructor(val){
        super(val);
    }
    sin(newVal){
        return Math.sin(newVal);
    }
    cosine(newVal){
        return Math.cos(newVal);
    }
}
let calc=new Calculator(10);
calc.add(10);
calc.substract(5);
calc.multiply(20);
console.log(calc.getTotal());