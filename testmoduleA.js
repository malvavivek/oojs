// const customer=require('./moduleA/customer');

// let customer= new Customer(1,'Some Name');
// console.log('Customer Details '+customer);

const {Customer,Order}=require('./moduleA/customer');
let order = new Order(2,"order 1")
console.log('Order Details '+order);
console.log('Customer Details '+Customer);