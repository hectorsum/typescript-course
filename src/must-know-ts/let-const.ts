//Cannot be re-declared or re-asigned
const user = 'Hector';

//Depends on the scope in which it is available
let age = 30;

//Global Scope
var myVariable;
var result; 

function addNumbers(a:number, b:number){
  result = a + b;
  return result;
}

if (age > 20){
  var isOld = true;
}

addNumbers(5,3);