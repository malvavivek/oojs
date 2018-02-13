//require js which uses AMD
//const iife = require('./moduleA/testmodA');

//es2015 way of importing modules
import iife from './moduleA/testmodAes2015'

console.log(iife.methodA().getDay());
console.log(iife.methodB().getMonth());
