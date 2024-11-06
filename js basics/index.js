// First JS code 
console.log('Hello everybody'); 
// variables 
let name; // it shows undefined 
console.log(name);
letname= 'programmer';
console.log(name);
// RULES OF NAMES
// Cannot be a reserved keyword eg if,where
// Should be meaningful eg let x = 'programmer';
// Cannot start with a number(2name)
// Cannot contain a space or hyphen(-)
// They are case sensitive 
let firstname = 'Programmer' ;
let lastname = 'Lad';

//CONSTANTS
let interestrate = 0.5;
interestrate = 100;
console.log(interestrate);
// const - don't want to reassign
// let - want to reassign

// PRIMITIVE TYPES
letname = 'Programmer'; // string literal
let age = 30; // number literal
let isApproved = true; // Boolean Literal - false too
let firstName = undefined;
let themecolor = null; // use null in situations where you want to clear the variable 
console.log(themecolor);

// DYNAMIC TYPING You type them in the console tab start with typeof eg typeof name 
// OBJECT this case is person
let person = {
    name: 'Programmer',
    age: 30
}; // syntax is the object literal
console.log(person);
// ways to change the name
// 1) dot notation
person.name = 'john';
console.log(person);
// 2) bracket notation
person['name'] = 'Mary';
console.log(person);

//ARRAYS - A data structure that is used to rep a list of items
let selectedColors= ['red,blue'];
selectedColors[2] = 'green';
console.log(selectedColors);
console.log(selectedColors[0]); // zero rep the index 0 so output should be jay
console.log(selectedColors.length); // This shows the number of objects or elements in an array

//Functions
//Perfoming a task
function meet() {  // parameter
    console.log('Hello Everybody');
}
function meet(name, lastName){
    console.log('Hello' + 'name' + ' ', 'lastName');
}
// Calculating a value
function square(number){
    return number * number;
}

meet('John','Smith'); // argument
meet('Gran')

let number = square(2);
console.log(number);

// TYPES OF FUNCTIONS
