
// Type aliases
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

type Product = {title: string; price: number;};



// Literal Types
function combine(
  n1:Combinable, 
  n2:Combinable, 
  resultConversion: ConversionDescriptor
  ){
  let result;
  if (typeof n1 === 'number' && typeof n2 === 'number' || resultConversion==='as-number'){
    result = +n1 + +n2;
  }else{
    result = n1.toString() + n2.toString();
  }
  if (resultConversion === 'as-number'){
    return +result; //parses to number
  }else{
    return result.toString();
  }
}


const combineAges = combine(20,20, 'as-number');
console.log(combineAges);
const combineStringAges = combine('20','20', 'as-number');
console.log(combineStringAges);
const combineNames = combine('Hector','Herrera', 'as-text');
console.log(combineNames);