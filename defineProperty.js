class player  {};
Object.defineProperty(player, 
    'firstName', {
  value: "Virat",
  //if writable is true then this property can be modified
  writable: true,
  enumerable: true,
  //if configurable is true then that property can't be modified
  configurable: true
});

Object.defineProperty(player, 'lastName', {
  value: "Kohli",
  writable: true,
  enumerable: true,
  configurable: true
});

Object.defineProperty(player, 'fullName', {
    value: function(){
        return this.firstName+" "+this.lastName
    },
    writable: true,
    enumerable: true,
    configurable: true
  });
  

player.firstName="Virushka"

player.fullName=function(){
    return "nothing"
}
for (let prop in player){
    console.log(prop+" : "+player[prop])
}
console.log(player.fullName());