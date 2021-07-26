const myHobbies = ['Sports', 'Cooking', 'Playing', 'Coding'];
const [hobby1, hobby2, ...remainingHobbies] = myHobbies;

console.log('Hobbies: ', {
  hobby1,
  hobby2,
  remaining: remainingHobbies
});

const Hector = {
  fullname: 'Hector Herrera',
  hisage: 21
}

const { fullname, hisage } = Hector;
console.log({ fullname, hisage })