// change everything below to the newer Javascript!

// let + const
let a = 'test';

const b = true;
const c = 789;
a = 'test2';


// Destructuring
var person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};

var firstName = person.firstName;
var lastName = person.lastName;
var age = person.age;
var eyeColor = person.eyeColor;
//destructured:
//Think of it this way the variable is 
//on the left that you are declaring. The object that is already existing is to the right 
//because that is what you are setting your variable(s) equal to
//When you want to set variables equal to the elements within an object. The objects are to the left side
const {firstName, lastName, age, eyeColor} = person


// Object properties
var a = 'test';
var b = true;
var c = 789;

var okObj = {
a: a,
b: b,
c: c
};

//destructured  version of this too: 
//When you want to set an object equal to variables. The object will be on left side

const okObj = {a, b, c}

// Template strings
var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";
//Template strings ES6:

let message = `Hello ${firstName} have i met you before? I think we met in ${city} last summer no???`

// default arguments
// default age to 10;
function isValidAge(age) {
    return age
}
//Used arrow functions and set age default to 10
const isValidAge = (age = 10) => age

// Symbol
// Create a symbol: "This is my first Symbol"
//Made my symbol
const myFirstSymbol = Symbol('First')

// Arrow functions
function whereAmI(username, location) {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}

//made arrow function
const whereAmI = (username, location) => {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}