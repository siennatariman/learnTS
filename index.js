var sport = 'football';
var id = 5;
// Primitive types (not an object, has no methods)
// 7 types = string, number, biginit, boolean, undefined, null, symbol
// Are immutable = cannot be altered  
// Ex.
var name = 'Danny';
name.toLowerCase();
console.log(name); // Danny - the  string method did not mutate the string
var arr = [1, 3, 5, 7];
arr.pop();
console.log(arr); // [1,3,5] the array method mutated the array
name = 'Anna'; // Assignment gives the primitive a new (not mutated) value
console.log(name);
// We can set the type we want a variable to be by add ":type"
// ":type" = type annotation/type signature
// Ex.
var id = 5;
var firstName = 'danny';
var hasDog = true;
var unit; // declare variable w/o  assigning a value
unit = 8;
// usu best not to explicitly state type, TS automatically infers = type inference
// union type = a variable that  can  be assigned  more than one type
// Ex. 
var age;
age = 26;
age = '26';
// Arrays
// the type of data an array can contain can be defined in TS
// Ex.
var ids = [1, 2, 3, 4, 5]; // can only contain numbers
var names = ['Danny', 'Anna', 'Bazza']; // can only contain strings
var options = [true, false, false]; // can only contain true or false
var books = [{ name: 'Fooled by randomness', author: 'Nassim Taleb' }, { name: 'Sapiens', author: 'Yuval Noah Harari' },]; // can only contain objects
var arr = ['hello', 1, true]; // any reverts TS back to JS
ids.push(6);
ids.push('7'); // ERROR: Argument of  type 'string' is not assignable to parameter of type  'number'
// Union types can be used to define arrays containing multiple types
var person = [1, 'Danny', true];
person[0] = 100;
person[1] = { name: 'Danny' }; // Error - person array can't contain objects
// Tuples
// stricter than regular arrays
// an array with fixed size and know datatypes
//Ex.
var personTwo = ['Danny', 1, true];
personTwo[0] = 100; // Error Value at index 0 can only be a string
// Objects
// Ex.
// Declare a variable called personThree with a specific object type annotation
var personThree;
// Assigne personFour to an object with  all the necessary properties and value types
personFour = {
    name: 'Danny',
    location: 'UK',
    isProgrammer: true,
};
personFour.isProgrammer = 'Yes'; // ERROR: should be a boolean
person = {
    name: 'John',
    location: 'US',
}; // ERROR: missing the isProgrammer property
;
var person1 = {
    name: 'Jacoob',
    location: 'Australia',
    isProgrammer: false,
};
;
var sayStuff = {
    sayHi: function (name) {
        return "Hi ".concat(name);
    },
    sayBye: function (name) { return "Bye ".concat(name); },
};
console.log(sayStuff.sayHi('Heisenberg'));
console.log(sayStuff.sayBye('Heisenberg'));
// Functions
// Define a function called circle that takes a diam variable of type number, and returns a string
function circle(diameter) {
    return 'The circumference is ' + Math.PI * diameter;
}
;
console.log(circle(10)); // Circumference is 31.415
// Optional Parameters
var add = function (a, b, c) {
    console.log(c);
    return a + b;
};
console.log(add(8, 2, 'I could pass a number, string, or nothing here!'));
//I could pass a number, string, or nothing here!
//10
