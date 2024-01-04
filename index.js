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
