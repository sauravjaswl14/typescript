"use strict";
//the most common usecase of objects is that you have to actually pass these objects into a function
//or you have to return some objects through the function
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: 'John',
    age: 34,
    email: 'john@gmail.com',
};
function createCourse() {
    return { name: 'react', price: 450 };
}
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: 'john', isPaid: 2 });
var newUser = { name: 'Anna', age: 22, isPaid: false, email: 'anna@dev.co' };
createUser(newUser);
//whenever someone pass the user it should adhere to the type of user
function createUser1(user) {
    return { name: '', email: '', isActive: true };
}
createUser1({ name: '', email: '', isActive: false });
var myUser = {
    _id: '2341',
    name: 'Ally',
    email: 'ally@gmail.com',
    isActive: true,
};
