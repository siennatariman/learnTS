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


// Arrays
	// the type of data an array can contain can be defined in TS

// Ex.
let ids: number[] = [1,2,3,4,5]; // can only contain numbers
let names: string[] = ['Danny', 'Anna',  'Bazza']; // can only contain strings
let options: boolean[] = [true, false, false]; // can only contain true or false
let books: object[] = [{name: 'Fooled by randomness', author: 'Nassim Taleb'}, {name: 'Sapiens', author: 'Yuval Noah Harari'},]; // can only contain objects

let arr: any[]  = ['hello', 1, true]; // any reverts TS back to JS

ids.push(6);
ids.push('7') // ERROR: Argument of  type 'string' is not assignable to parameter of type  'number'

// Union types can beused to define arrays containing multiple types
let person: (string | number | boolean)[] = [1, 'Danny',true];
person[0] = 100;
person[1] = {name: 'Danny'} // Error - person array can't contain objects


