function printResult(num:number): void{ 
  console.log('Result: '+ num);
}

printResult(addTemp(12,2));

//Function as types
let combineValues: (a:number, b:number) => number; // the function must have 2 arguments and return a number

function addTemp(n1:number, n2:number): number {
  return n1+n2;
}
combineValues = addTemp;
console.log(combineValues(5,2))

// 3rd parameter Callback function
function addAndHandle(n1: number, n2:number, cb: (num: number) => void){
  const result = n1 + n2;
  cb(result); // it is not necessary to asign the result to a variable because it will return nothing
}
addAndHandle(10,20, (result) => {
  console.log('callback: ',result);
  return result;
});


function sendRequest(data: string, cb: (response: any) => void) {
  // ... sending a request with "data"
  return cb({data: 'Hi there!'});
}
 
console.log(sendRequest('Send this!', (response) => { 
  //console.log(response);
  return response;
}));