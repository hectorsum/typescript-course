const addFunction = (type: string, ...numbers:[number, number ,number]) => {
  console.log(type);
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  },0);
}

console.log(addFunction('sum',5,2,3))