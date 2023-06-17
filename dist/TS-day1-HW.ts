// 1. For each of these values, what type will the TypeScript compiler infer?


let a = 118;
// A: TypeScript will infer the type of "a" as number

let b = 'Thieves';
// A: TypeScript will infer the type of "b" as string

let c = [true, false, false];
// A: TypeScript will infer the type of "c" as boolean[] (an array of booleans)

let d = {age: number};
// A: TypeScript will infer the type of "d" as { age: number } ---> (an object with a property age of type number)

let e = [3];
// A: TypeScript will infer the type of "e" as number[] ---> (an array of numbers)

let f;
// A: TypeScript will infer the type of "f" as "any" ---> (implicit any type)

let g = [];
// A: TypeScript will infer the type of "g" as any[] ---> (an empty array of any type)




// 2. What are the compilation errors in each of the following code snippets?


let song: {
    title: string,
    releaseYear: number,
} = {
    title: 'Lose Yourself'
};
// A: There is no compilation error in this code snippet. It defines a variable `song` with an object type. 
// The object has properties `title` of type `string` and `releaseYear` of type `number`. 
// The object is assigned a value with the `title` property set to `'Lose Yourself'`.


let prices = [100, 200, 300];
prices[0] = '$100';
// A: There is a compilation error in this code snippet. 
// The array `prices` is initially assigned with numbers `[100, 200, 300]`. 
// However, when trying to assign `'$100'` to the first element (`prices[0]`), it results in a type error because the element at index 0 is expected to be a number, not a string.


function myFunc(a: number, b: number): number {}
// A: There is a compilation error in this code snippet. 
// The function `myFunc` is declared to take two parameters `a` and `b`, both of type `number`, and return a value of type `number`. 
// However, the function body is empty and doesn't contain a return statement, which causes a compilation error because TypeScript expects a return value of type `number`.




//CODEWARS .js Problem #1: https://www.codewars.com/kata/5583090cbe83f4fd8c000051/solutions/javascript


//CODEWARS .js Problem #2: https://www.codewars.com/kata/55cbd4ba903825f7970000f5/solutions/javascript