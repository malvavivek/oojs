let myFunc = function(a){
    return function(b){
        return a+b;
    }
}

// let inst = myFunc(20)
// console.log(inst(30));

//piping
console.log(myFunc(20)(30))