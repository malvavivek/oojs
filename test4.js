class Employee extends Object{


}


let emp1=new Employee;
let emp2=new Employee;
emp1.__proto__.sayHello=function(){
    return "hello"
}
console.log(emp1.__proto__ === emp2.proto__)
console.log(typeof emp1.__proto__);
//let obj=new Object();

//console.log(emp.)
