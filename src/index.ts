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



// Another huge benefit: Code completion



// ----- Tuples: Typed Array with a pre-defined length and types for each index
// NOTE: Its best practice to restrict your tuples to only 2 values

// Code Completion



// ----- Enums: Special "Class" that represents a group of constants.

// PascalCase "numeric"

// "string"



// ----- Functions: function "name"(parameter: type): return type {}
// Turn on "noUnusedParameters" & "noUnusedLocals" in config



// ----- Objects
/* NOTES: 
Use "?" for optional properties 
Use readonly on properties you never want to reassign
*/