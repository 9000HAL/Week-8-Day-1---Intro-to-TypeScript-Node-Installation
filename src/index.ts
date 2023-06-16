/* Since TS is a superset of JS, we can still write regular JS code in 
a TS file */
console.log('thieves')



// Our first TS Code
let age: number = 5;
let myName: string = 'christian'
myName = 'Dylan'
let isPrime: boolean = true


// ---------- TS Fundamentals ----------

// Built-in Types: variable: type = value
let students;


// ----- The "any" Type: Not best practice, you'll lose the benefit of static typing
function fullName(firstName: string, lastName: string) {
    console.log(firstName, lastName)
}

fullName('Dylan', 'Katina')


// ----- Arrays: Dynamic, you can pass any data type

let numbers = [1,2,3,];
let numbers2: number[] = [1,2,3] ////THE PREFERRED WAY THIS ONE/////////////////////////

// let thievesStudents: string[] = []
let thievesStudents: string[] = ['sean', 'kasey', 'ant']


// let dynamicArr = [1,2,3, 'dylan', true]; ////number string boolean /////////

let dynamicArr: (number | string | boolean)[] = [1,2,3, 'dylan', true]; ////RIGHT WAY TO DO///////////



// Another huge benefit: Code completion

//dynamicArr[0]. //////WHAT?!?!?!?

//thievesStudents[0]. ////RE STRING METHODS here???????



// ----- Tuples: Typed Array with a pre-defined length and types for each index
// NOTE: Its best practice to restrict your tuples to only 2 values

let dog: [number, string] = [1,'pitbull' ];

// Code Completion
dog.push(2)
console.log(dog)
//OUTPUT: [ 1, 'pitbull', 2 ]




// ----- Enums: Special "Class" that represents a group of constants.
//const small = 1;
//const medium = 2;
//const large =3;


// PascalCase "numeric"

const enum Size {Small = 1, Medium = 2, Large = 3}
console.log(Size.Medium)
//OUTPUT: 2




// "string"

enum Instructors {Lead = 'Christian', Associate = 'Dylan'}
console.log(Instructors.Lead)
//OUTPUT: Christian




// ----- Functions: function "name"(parameter: type): return type {}
// Turn on "noUnusedParameters" & "noUnusedLocals" in config

/*

function calculateTax(income: number): number {
    if (income < 50_000) {
        return income * 1.2
    } else {
        return income * 1.3
    }
}

console.log(calculateTax(70_000))
//OUTPUT: 48000 etc....

*/

///other variation example of above:

function calculateTax(income: number, taxYear?: number): number {
    if (income < 50_000) {
        console.log(taxYear)
        return income * 1.2
    } else {
        return income * 1.3
    }
}

console.log(calculateTax(70_000, 2023))




// ----- Objects
/* NOTES: 
Use "?" for optional properties 
Use readonly on properties you never want to reassign
*/

let employee = {id: 1}
console.log(employee.id)
//OUTPUT: 1

// employee[userName]

