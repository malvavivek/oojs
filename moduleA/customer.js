

class Customer {
    constructor(id,name){
        this.id=id;
        this.name=name;
    }
    toString() {
        return this.id+" "+this.name;
    }
}
class Order {
    constructor(id,name){
        this.id=id;
        this.name=name;
    }
}

//module.exports=Customer;

module.exports = {Customer:new Customer (1,"Some Value"),Order};
//module.exports = Order;