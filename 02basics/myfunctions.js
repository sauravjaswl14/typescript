"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    //   return 'hello world';
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    return {
        name: name,
        email: email,
        isPaid: isPaid,
    };
}
// function getVal(val: number): boolean {
//   if (val > 5) {
//     return true;
//   }
//   return '200 ok';
// }
var greet = function (user) {
    return "hi ".concat(user);
};
var greetUser = greet('saurav');
console.log(greetUser);
//typescript is aware of the context that is coming up
var people = ['john', 'peter', 'susan', 'anna'];
var newPeople = people.map(function (person) {
    return "Hello ".concat(person);
});
console.log(newPeople);
var user1 = signUpUser('John', 'john@gmail.com');
// console.log(user1);
var val = addTwo(5);
// console.log(val);
var upperVal = getUpper('hello');
