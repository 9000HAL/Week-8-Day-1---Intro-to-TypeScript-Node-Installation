"use strict";
console.log('thieves');
let age = 5;
let myName = 'christian';
myName = 'Dylan';
let isPrime = true;
let students;
function fullName(firstName, lastName) {
    console.log(firstName, lastName);
}
fullName('Dylan', 'Katina');
let numbers = [1, 2, 3,];
let numbers2 = [1, 2, 3];
let thievesStudents = ['sean', 'kasey', 'ant'];
let dynamicArr = [1, 2, 3, 'dylan', true];
let dog = [1, 'pitbull'];
dog.push(2);
console.log(dog);
console.log(2);
var Instructors;
(function (Instructors) {
    Instructors["Lead"] = "Christian";
    Instructors["Associate"] = "Dylan";
})(Instructors || (Instructors = {}));
console.log(Instructors.Lead);
function calculateTax(income, taxYear) {
    if (income < 50000) {
        console.log(taxYear);
        return income * 1.2;
    }
    else {
        return income * 1.3;
    }
}
console.log(calculateTax(70000, 2023));
let employee = {
    id: 1,
    userName: 'dylan'
};
console.log(employee.id);
console.log(employee);
