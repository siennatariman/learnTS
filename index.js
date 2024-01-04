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
