//////////////////
// repeating tasks manually
//////////////////

let vacationSpots = ['rome', 'greece', 'south pole'];

console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);


//////////////////
// the for loop
//////////////////

// 0
// 1
// 2
// 3
for (let counter = 0; counter < 4; counter++) {
    console.log(counter);
}

for(let counter = 5; counter < 11; counter++) {
    console.log(counter);
}


//////////////////
// looping in reverse
//////////////////

// The loop below loops from 0 to 3. Edit it to loop backwards from 3 to 0
for (let counter = 3; counter >= 0; counter--){
    console.log(counter);
}


//////////////////
// looping through arrays
//////////////////

// Grizzly Bear
// Sloth
// Sea Lion
const animals = ['Grizzly Bear', 'Sloth', 'Sea Lion'];
for (let i = 0; i < animals.length; i++){
  console.log(animals[i]);
}

const vacationSpotss = ['Bali', 'Paris', 'Tulum'];

for (let i = 0; i < vacationSpotss.length; i++) {
  console.log(`I would love to visit ${vacationSpotss[i]}`);
}


//////////////////
// nested loops
//////////////////

const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log('Both arrays have the number: ' + yourArray[j]);
    }
  }
}

const bobsFollowers = ['Andrew', 'Peter', 'Nathan', 'Justin'];
const tinasFollowers = ['Steven', 'Peter', 'Nathan'];

const mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if(bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}

console.log(mutualFollowers);


//////////////////
// the while loop
//////////////////

// A for loop that prints 1, 2, and 3
for (let counterOne = 1; counterOne < 4; counterOne++){
    console.log(counterOne);
}
   
// A while loop that prints 1, 2, and 3
let counterTwo = 1;
while (counterTwo < 4) {
    console.log(counterTwo);
    counterTwo++;
}

const cards = ['diamond', 'spade', 'heart', 'club'];

let currentCard;

while (currentCard !== 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}


//////////////////
// do ... while statements
//////////////////

let countString = '';
let i = 0;
 
do {
  countString = countString + i;
  i++;
} while (i < 5);
 
console.log(countString);

const firstMessage = 'I will print!';
const secondMessage = 'I will not print!'; 
 
// A do while with a stopping condition that evaluates to false
do {
 console.log(firstMessage)
} while (true === false);
 
// A while loop with a stopping condition that evaluates to false
while (true === false){
  console.log(secondMessage)
};

const cupsOfSugarNeeded = 4;
let cupsAdded = 0;

do {
  cupsAdded++;
} while(cupsAdded < cupsOfSugarNeeded);

console.log(cupsAdded);


//////////////////
// the break keyword
//////////////////

// Banana.
// Banana.
// Banana.
// Orange you glad I broke out the loop!
for (let i = 0; i < 99; i++) {
    if (i > 2) {
       break;
    }
    console.log('Banana.');
}

console.log('Orange you glad I broke out the loop!');

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

for(let i = 0; i < rapperArray.length; i++) {
  console.log(rapperArray[i]);
  if(rapperArray[i] === "Notorious B.I.G.") {
    break;
  }
}

console.log("And if you don't know, now you know.");
