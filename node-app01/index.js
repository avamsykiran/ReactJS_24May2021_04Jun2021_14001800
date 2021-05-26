import arrayDemo from './arrays.js';
import method1 from './closure.js';
import {greet, greetAll, greetUser, greetUserAsPerTime} from './greetService.js';
import {greet1, greetAll1, greetUser1, greetUserAsPerTime1} from './greetService1.js';
import objDemo from './objects.js';

console.log("A simple node js based javascript project");

console.log(greet());
console.log(greetUser("Vamsy Kiran"));
console.log(greetUserAsPerTime("Vamsy Kiran"));
console.log(greetUser());
console.log(greetUserAsPerTime());
greetAll(["Vamsy","Srinu","Indhikaa Valli","Sagar","Suseela"]);

console.log(greet1());
console.log(greetUser1("Vamsy Kiran"));
console.log(greetUserAsPerTime1("Vamsy Kiran"));
console.log(greetUser1());
console.log(greetUserAsPerTime1());
greetAll1(["Vamsy","Srinu","Indhikaa Valli","Sagar","Suseela"]);

arrayDemo();
objDemo();

console.log("---------CLOSURE--------------------------")
let functionReturnedByClosure = method1(); 
console.log(functionReturnedByClosure())
console.log(functionReturnedByClosure())
console.log(functionReturnedByClosure())
console.log(functionReturnedByClosure())