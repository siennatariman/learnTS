let sport = 'football';

let id = 5;

// Primitive types (not an object, has no methods)
	// 7 types = string, number, biginit, boolean, undefined, null, symbol
	
	// Are immutable = cannot be altered  

// Ex.
let name =  'Danny';
name.toLowerCase();
console.log(name);  // Danny - the  string method did not mutate the string

let arr = [1,3,5,7];
arr.pop();
console.log(arr); // [1,3,5] the array method mutated the array

name = 'Anna'; // Assignment gives the primitive a new (not mutated) value
console.log(name);



// We can set the type we want a variable to be by add ":type"
	// ":type" = type annotation/type signature

// Ex.
let id: number = 5;
let firstName: string = 'danny';
let hasDog: boolean = true;

let unit: number; // declare variable w/o  assigning a value

unit  =  8;

	// usu best not to explicitly state type, TS automatically infers = type inference


// union type = a variable that  can  be assigned  more than one type

// Ex. 
let age: string | number;
age = 26;
age = '26';

