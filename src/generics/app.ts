// Both are the same
// const names: string[] = [];
// const names: Array<string | number> = [];
// const promise = new Promise<string>((resolve, reject) => {
//   setTimeout(() => {
//     resolve('This is done');
//   },2000)
// })
// promise.then(data => {
//   data.split
// })

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
const mergeObj = merge<{ name: string, hobbies: string[] }, { age: number }>({ name: 'Max', hobbies: ['Playing soccer', 'Coding'] }, { age: 30 });

// console.log(mergeObj.age);
interface Lengthy {
  length: number,
}
function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value.';
  if (element.length === 1) {
    descriptionText = 'Got ' + element.length + ' element';
  } else if (element.length > 1) {
    descriptionText = 'Got ' + element.length + ' elements';
  }
  return [element, descriptionText]
}

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return 'Value: ' + obj[key];
}

extractAndConvert({name: 'Max'},'name');

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];
  addItem (item: T){
    this.data.push(item)
  }
  removeItem(item: T){
    this.data.splice(this.data.indexOf(item), 1);
  }
  getItems(){
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.removeItem('Max');
// console.log(textStorage.getItems());

const numbers = new DataStorage<number>();
numbers.addItem(1);
numbers.addItem(2);

// const objStorage = new DataStorage<object>();
// const maxObj = {name: 'Max'}
// objStorage.addItem(maxObj);
// objStorage.addItem({name: 'Manu'})
// objStorage.removeItem(maxObj)
// console.log(objStorage.getItems());

interface CourseGoal {
  title: string,
  description: string,
  completeUntil: Date,
}
function createCourseGoal(title: string, description: string, date: Date): CourseGoal{
  let courseGoal:Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal; //type casting
}

//if it is readonly, you cannot add new properties to the array
const names: Readonly<string[]> = ['Max', 'Anna'];
