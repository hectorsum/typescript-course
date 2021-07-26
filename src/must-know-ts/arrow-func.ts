const add = (a:number ,b:number=1) => a+b;
const printOutput: (temp:number | string) => void = output => output;

const button = document.querySelector('button');
if(button){
  button.addEventListener('click', evt => {

  })
}

const isOlder: (age:number) => boolean = (age) => age > 18;


console.log(printOutput(add(5)));
console.log('isOlder: ',isOlder(8));