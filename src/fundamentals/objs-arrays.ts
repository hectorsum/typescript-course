// Enum is assigned a number that starts at 0 and increases automatically
enum Role {
  ADMIN = 'ADMIN',
  READ_ONLY = 22,
  AUTHOR,
}

type Person = {
  name: string,
  age: number,
  hobbies: string[],
  role: [number, string] //tuple, it recieves 2 elements only, 1st a number, 2nd a string, // tuples cannot be modified
  role2: number,
}

const person: Person = {
  name: 'Hector',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author'],
  role2: 200
}

person.role.push('admin');
person.role = [0, 'admin'];

let favoriteActivities: string[];
favoriteActivities = ['Sports'];
for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}

if (person.role2 === Role.AUTHOR) {
  console.log('is author')
}