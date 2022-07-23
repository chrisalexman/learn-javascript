//////////////////
// console
//////////////////

console.log(24);
console.log(1000);

// Prints: Hi there!
console.log('Hi there!');


//////////////////
// comments
//////////////////

// single line

console.log(24);    // inline

/*
    multi-line comment
*/

console.log(/* within a line */ 24);


//////////////////
// data types
//////////////////

console.log('JavaScript');
console.log(2011);
console.log('Woohoo!');
console.log(20.49);


//////////////////
// arithmetic operators
//////////////////

console.log(11 % 3); // Prints 2
console.log(12 % 3); // Prints 0

console.log(24 + 3.5);
console.log(2022 - 1969);
console.log(65 / 240);
console.log(0.2708 * 100);


//////////////////
// string concatenation
//////////////////

// Prints 'front space'
console.log('front ' + 'space'); 
// Prints 'back space'
console.log('back' + ' space'); 
// Prints 'nospace'
console.log('no' + 'space'); 
// Prints 'middle space'
console.log('middle' + ' ' + 'space'); 

console.log('Hello' + ' ' + 'World');


//////////////////
// properties
//////////////////

console.log('Hello'.length); // Prints 5

// Prints: 9
let message = 'good nite';
console.log(message.length);
 
// Prints: 5
console.log('howdy'.length);

console.log('Teaching the world how to code'.length);


//////////////////
// methods
//////////////////

console.log('hello'.toUpperCase()); // Prints 'HELLO'
console.log('Hey'.startsWith('H')); // Prints true

console.log('Codecademy'.toUpperCase());
console.log('    Remove whitespace   '.trim());


//////////////////
// built-in objects
//////////////////

console.log(Math.random()); // Prints a random number between 0 and 1

console.log(Math.floor(Math.random() * 50)); // Prints a random whole number between 0 and 50

console.log(Number.isInteger(2017));


//////////////////
// create a variable: var
//////////////////

// Output: Arya
var myName = 'Arya';
console.log(myName);

var favoriteFood = 'pizza';
var numOfSlices = 8;

console.log(favoriteFood);
console.log(numOfSlices);


//////////////////
// create a variable: let
//////////////////

let meal = 'Enchiladas';
console.log(meal); // Output: Enchiladas
meal = 'Burrito';
console.log(meal); // Output: Burrito

let price;
console.log(price); // Output: undefined
price = 350;
console.log(price); // Output: 350

let amount = 6;
let price1 = 4.99;

let changeMe = true;
changeMe = false;

console.log(changeMe); // Output: false


//////////////////
// create a variable: const
//////////////////

const myName = 'Steve';
console.log(myName); // Output: Steve

const entree = 'Enchiladas';

console.log(entree);

entree = 'Tacos'; // Output: TypeError: Assignment to constant variable.


//////////////////
// mathematical assignment operators
//////////////////

let w = 4;
w = w + 1;
w += 1;
 
console.log(w); // Output: 6

let x = 20;
x -= 5; // Can be written as x = x - 5
console.log(x); // Output: 15
 
let y = 50;
y *= 2; // Can be written as y = y * 2
console.log(y); // Output: 100
 
let z = 8;
z /= 2; // Can be written as z = z / 2
console.log(z); // Output: 4

let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

// Use the mathematical assignments in the space below:
levelUp += 5;
powerLevel -= 100;
multiplyMe *= 11;
quarterMe /= 4;

// These console.log() statements below will help you check the values of the variables.
// You do not need to edit these statements. 
console.log('The value of levelUp:', levelUp); 
console.log('The value of powerLevel:', powerLevel); 
console.log('The value of multiplyMe:', multiplyMe); 
console.log('The value of quarterMe:', quarterMe);


//////////////////
// the increment and decrement operator
//////////////////

let a = 10;
a++;
console.log(a); // Output: 11

let b = 20;
b--;
console.log(b); // Output: 19

let gainedDollar = 3;
let lostDollar = 50;

gainedDollar++;
lostDollar--;


//////////////////
// string concatenation with variables
//////////////////

// Output: 'I own a pet armadillo.'
let myPet = 'armadillo';
console.log('I own a pet ' + myPet + '.');

let favoriteAnimal = 'goose';

console.log('My favorite animal: ' + favoriteAnimal);


//////////////////
// string interpolation
//////////////////

// Output: I own a pet armadillo.
const pet = 'armadillo';
console.log(`I own a pet ${pet}.`);

let myName = 'Chris';
let myCity = 'LA';

console.log(`My name is ${myName}. My favorite city is ${myCity}.`)


//////////////////
// typeof operator
//////////////////

const unknown1 = 'foo';
console.log(typeof unknown1); // Output: string
 
const unknown2 = 10;
console.log(typeof unknown2); // Output: number
 
const unknown3 = true; 
console.log(typeof unknown3); // Output: boolean

let newVariable = 'Playing around with typeof.';
console.log(typeof newVariable);
newVariable = 1;
console.log(typeof newVariable);


//////////////////
// project, kelvin weather
//////////////////

// the temperature in Kelvin, it doesn't change
const kelvin = 293;

// celcius = kelvin - 273
const celsius = kelvin - 273;

// fahrenheit = celsius * (9 / 5) + 32
// rounded down to the nearest integer
const fahrenheit = Math.floor(celsius * (9 / 5) + 32);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// newton = celsius * (33 / 100)
const newton = Math.floor(celsius * (33 / 100));

console.log(`The temperature is ${newton} degrees Newton.`);


//////////////////
// project, dog years
//////////////////

// how old you are in years
const myAge = 24;

// used to calculate the early years
let earlyYears = 2;

earlyYears *= 10.5;

// already accounted for the early 2 years
let laterYears = myAge - 2;

// calculate the later years
laterYears *= 4;

// console.log(`early: ${earlyYears}, later: ${laterYears}`);

// calculate your age in dog years
const myAgeInDogYears = earlyYears + laterYears;

// get your name in lower case
const myName = 'CHRIS'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
