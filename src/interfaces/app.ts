//This is to define the structure of an object, is more ofter to use an interface 
//to define the structure of and object instead of using a Type
interface Greetable {
  readonly name: string; //this property must only be set once and it becomes readonly after
  greet(phrase: string): void;
  saybye(): void;
}

class PersonX implements Greetable{
  name: string;

  constructor(n:string){
    this.name = n;
  }
  saybye(){
    console.log('bye')
  }
  greet(phrase:string){
    console.log(phrase + '' + this.name)  
  }
}

let user1: PersonX;

user1 = {
  name: 'Max',
  greet(phrase: string){
    console.log(phrase + '' + this.name)
  },
  saybye(){
    console.log('bye!')
  }
}

user1.greet('Hi There - I am ')
console.log(user1)