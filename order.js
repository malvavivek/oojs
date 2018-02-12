class Order{
    constructor(OrderId,OrderName,purchaseDate,status){
        this.OrderId=OrderId;
        this.OrderName=OrderName;
        this.purchaseDate=purchaseDate;
        this.status=status;
    }
}
var sortable = [];
let orders=[new Order('104','pizza',new Date('01-01-2018'),'new'),
            new Order('101','coke',new Date('02-01-2018'),'completed'),
            new Order('102','pizza',new Date('03-01-2018'),'processing'),
            new Order('103','pizza',new Date('04-01-2018'),'processing')]
// sortable.push(order1);
// sortable.push(order2);
// sortable.push(order3);
// sortable.push(order4);

// var order=purchaseDate.sort(function(a, b){return a-b});
// console.log(Order);
// var sort =function(){
    
// }
let sortedOrders=   orders.filter(function(o1){
    // console.log(o1.purchaseDate.toString())
return o1.purchaseDate.getTime()===
new Date('03-01-2018').getTime()


    });
    
    console.log(typeof sortedOrders);


    sortedOrders.forEach(element=> {
        console.log(element.purchaseDate)
    });

    // sortedOrders.forEach(function(element) {
    //     console.log(element.purchaseDate.getTime())
    // });

    sortedOrders.forEach(function(element) {
        console.log(element.purchaseDate.toLocaleString())
    });

    // sortedOrders.forEach(element=> {
    //     console.log(element.purchaseDate.getTime())
    // });



    
// for (var sortedOrders in Order) {
//     sortable.push([sortedOrders, Order[sortedOrders]]);
// }

// sortable.sort(function(a, b) {
//     return a[1] - b[1];
// });
// console.log(sortable);