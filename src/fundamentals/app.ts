let userInput: unknown;
let userName: string;

if(typeof userInput === 'string'){
  userName = userInput; //its an error because userInput is not guarantee to be an string
}


//This func never returns a value
function generateError(message: string, code: number): never{
  throw {
    message: message,
    errorCode: code
  }
}

generateError('An error ocurred!', 500);