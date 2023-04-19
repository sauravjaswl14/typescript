//the most common usecase of objects is that you have to actually pass these objects into a function
//or you have to return some objects through the function

const User = {
  name: 'John',
  age: 34,
  email: 'john@gmail.com',
};

function createCourse(): { name: string; price: number } {
  return { name: 'react', price: 450 };
}

function createUser({ name: string, isPaid: boolean }) {}
createUser({ name: 'john', isPaid: 2 });

const newUser = { name: 'Anna', age: 22, isPaid: false, email: 'anna@dev.co' };
createUser(newUser);

//Type Allias
//creating our own data types

type User = {
  //we don't define the value of it, we rather define what kind of value is going to come  up
  name: string;
  email: string;
  isActive: boolean;
};

//whenever someone pass the user it should adhere to the type of user

function createUser1(user: User): User {
  return { name: '', email: '', isActive: true };
}

createUser1({ name: '', email: '', isActive: false });

type User1 = {
  readonly _id: string; //cannot mutate the property with readonly keyword
  name: string;
  email: string;
  isActive: boolean;
  credCardDetails?: number; //? -> optional
};

let myUser: User1 = {
  _id: '2341',
  name: 'Ally',
  email: 'ally@gmail.com',
  isActive: true,
};

type cardNumber = {
  cardNumber: string;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber & cardDate & { cvv: number };

export {};
