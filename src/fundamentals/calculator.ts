enum Operators {
  SUM = 'sum',
  SUSTRACTION = 'sustraction',
  PRODUCT = 'product',
  DIVISION = 'division',
  POW = 5,
}
type Calculator = 'sum' | 'substraction' | 'product' | 'division';

function calculator(number1: number, number2: number, type: Calculator): number {
  let result: number = 0;
  if (type === 'sum') {
    result = number1 + number2;
  } else if (type === 'substraction') {
    result = number1 - number2;
  } else if (type === 'product') {
    result = number1 * number2;
  } else if (type === 'division') {
    result = number1 / number2;
  }
  return result;
}

console.log(calculator(10, 25, Operators.PRODUCT));