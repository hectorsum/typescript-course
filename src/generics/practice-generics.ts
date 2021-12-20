interface Payload {
  p1: number,
  p2: number,
}

function sumNumbers<P extends number | string | boolean, U extends number | string | boolean>(p1: P, p2: U): Payload {
  let numbersObj: Partial<Payload> = {};
  numbersObj.p1 = 4;
  numbersObj.p2 = 6;
  return numbersObj as Payload;
}


// console.log(sumNumbers(2, 5));