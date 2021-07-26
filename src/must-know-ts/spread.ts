const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hikking', ...hobbies];
//activeHobbies.push(...hobbies);
console.log(activeHobbies);

const personMe = {
  name: 'Max',
  age:30
}
const copiedPerson = { ...personMe };
console.log(copiedPerson)