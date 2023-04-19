function addTwo(num: number): number {
  return num + 2;
  //   return 'hello world';
}

function getUpper(val: string) {
  return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean = false) {
  return {
    name,
    email,
    isPaid,
  };
}

// function getVal(val: number): boolean {
//   if (val > 5) {
//     return true;
//   }
//   return '200 ok';
// }

const greet = (user: string): string => {
  return `hi ${user}`;
};

function consoleErr(errmsg: string): void {
  console.log(errmsg);
}

function handleError(msg: string): never {
  throw new Error(msg);
}

const greetUser = greet('saurav');
// console.log(greetUser);

//typescript is aware of the context that is coming up
const people = ['john', 'peter', 'susan', 'anna'];

const newPeople = people.map((person): string => {
  return `Hello ${person}`;
});
// console.log(newPeople);

let user1 = signUpUser('John', 'john@gmail.com');
// console.log(user1);

let val = addTwo(5);
// console.log(val);

let upperVal = getUpper('hello');
// console.log(upperVal);

export {};
