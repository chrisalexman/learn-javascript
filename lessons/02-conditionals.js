//////////////////
// if statement
//////////////////

// Prints: This message will print!
if (true) {
  console.log('This message will print!'); 
}

let sale = true;
sale = false;
if(sale) {
  console.log('Time to buy!');
}


//////////////////
// if ... else statements
//////////////////

// Prints: But the code in this block will!
if (false) {
console.log('The code in this block will not run.');
} else {
console.log('But the code in this block will!');
}

let salee = true;
salee = false;

if(salee) {
  console.log('Time to buy!');
}
else {
  console.log('Time to wait for a sale.');
}


//////////////////
// comparison operators
//////////////////

10 < 12 // Evaluates to true

'apples' === 'oranges' // false

let hungerLevel = 7;

if(hungerLevel <= 7) {
  console.log('Time to eat!');
} else {
  console.log('We can eat later!');
}


//////////////////
// logical operators
//////////////////

if (stopLight === 'green' && pedestrians === 0) {
console.log('Go!');
} else {
console.log('Stop');
}

if (day === 'Saturday' || day === 'Sunday') {
console.log('Enjoy the weekend!');
} else {
console.log('Do some work.');
}

let excited = true;
console.log(!excited); // Prints false
 
let sleepy = false;
console.log(!sleepy); // Prints true

let mood = 'sleepy';
let tirednessLevel = 6;

if(mood === 'sleepy' && tirednessLevel > 8) {
  console.log('time to sleep');
} else {
  console.log('not bed time yet');
}


//////////////////
// truthy and falsy
//////////////////

let myVariable = 'I Exist!';
 
if (myVariable) {
   console.log(myVariable)
} else {
   console.log('The variable does not exist.')
}

// Prints 'No apples left!'
let numberOfApples = 0;
 
if (numberOfApples){
   console.log('Let us eat apples!');
} else {
   console.log('No apples left!');
}

let wordCount = 42;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}

let favoritePhrase = '';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}


//////////////////
// truthy and falsy assignment
//////////////////

let username = '';
let defaultName;
 
if (username) {
  defaultName = username;
} else {
  defaultName = 'Stranger';
}
 
console.log(defaultName); // Prints: Stranger

let usernamee = '';
let defaultNamee = usernamee || 'Stranger';
 
console.log(defaultNamee); // Prints: Stranger

let tool = 'marker';

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);


//////////////////
// ternary operator
//////////////////

let isNightTime = true;
 
if (isNightTime) {
  console.log('Turn on the lights!');
} else {
  console.log('Turn off the lights!');
}

isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');

let isLocked = false;

isLocked
  ? console.log("You will need a key to open the door.")
  : console.log("You will not need a key to open the door.");

let isCorrect = true;

isCorrect 
  ? console.log("Correct!") 
  : console.log("Incorrect!");

let favoritePhrasee = "Love That!";

favoritePhrasee === 'Love That!'
  ? console.log('I love that!')
  : console.log("I don't love that!");


//////////////////
// else if statements
//////////////////

let stopLight = 'yellow';
 
if (stopLight === 'red') {
  console.log('Stop!');
} else if (stopLight === 'yellow') {
  console.log('Slow down.');
} else if (stopLight === 'green') {
  console.log('Go!');
} else {
  console.log('Caution, unknown!');
}

let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if (season === 'winter'){
  console.log('It\'s winter! Everything is covered in snow.');
} else if (season === 'fall'){
  console.log('It\'s fall! Leaves are falling!');
} else if (season === 'summer'){
  console.log('It\'s sunny and warm because it\'s summer!');
} else {
  console.log('Invalid season.');
}


//////////////////
// the switch keyword
//////////////////

let groceryItem = 'papaya';
 
if (groceryItem === 'tomato') {
  console.log('Tomatoes are $0.49');
} else if (groceryItem === 'papaya'){
  console.log('Papayas are $1.29');
} else {
  console.log('Invalid item');
}

// Prints 'Papayas are $1.29'
groceryItem = 'papaya';
 
switch (groceryItem) {
  case 'tomato':
    console.log('Tomatoes are $0.49');
    break;
  case 'lime':
    console.log('Limes are $1.49');
    break;
  case 'papaya':
    console.log('Papayas are $1.29');
    break;
  default:
    console.log('Invalid item');
    break;
}
 
let athleteFinalPosition = 'first place';

switch (athleteFinalPosition) {
  case 'first place':
    console.log('You get the gold medal!');
    break;
  case 'second place':
    console.log('You get the silver medal!');
    break;
  case 'third place':
    console.log('You get the bronze medal!');
    break;
  default:
    console.log('No medal awarded.');
    break;
}

//////////////////
// project, magic eight ball
//////////////////

let userName = 'Peter';

userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

let userQuestion = 'how many hours of work do I have left?';

userName 
  ? console.log(`${userName} asks: ${userQuestion}`)
  : console.log(`The questioner asks: ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

switch(randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
  default:
    eightBall = 'ERROR';
    break;
}

console.log(eightBall);


//////////////////
// project, race day
//////////////////

let raceNumber = Math.floor(Math.random() * 1000);

let isEarly = false;

let runnerAge = 18;

if (isEarly && runnerAge > 18) {
  raceNumber += 1000;
}

if (isEarly && runnerAge > 18) {
  console.log(`Race starts at 9:30AM for runner: ${raceNumber}`);
} else if (!isEarly && runnerAge > 18) {
  console.log(`Race starts at 11:00AM for runner: ${raceNumber}`);
} else if (runnerAge < 18) {
  console.log(`Race starts at 12:30PM for runner: ${raceNumber}`);
} else {
  console.log('Please, see the registration desk.')
}
