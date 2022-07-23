//////////////////
// create an array
//////////////////

let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];

const hobbies = ['dnd', 'rock climbing', 'crying'];

console.log(hobbies);


//////////////////
// accessing elements
//////////////////

// Output: W
const hello = 'Hello World';
console.log(hello[6]);

const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

let listItem = famousSayings[0];

console.log(listItem);
console.log(famousSayings[2]);

console.log(famousSayings[3]);


//////////////////
// updating elements
//////////////////

//Output: ['Winter', 'Spring', 'Summer', 'Autumn']
let seasons = ['Winter', 'Spring', 'Summer', 'Fall'];
 
seasons[3] = 'Autumn';
console.log(seasons);

let groceryList = ['bread', 'tomatoes', 'milk'];

groceryList[1] = 'avocados';


//////////////////
// arrays with let and const
//////////////////

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';
console.log(condiments);

condiments = ['Mayo'];
console.log(condiments);

utensils[3] = 'Spoon';
console.log(utensils);

utensils = ['something'];
console.log(utensils);


//////////////////
// the .length property
//////////////////

const newYearsResolutionss = ['Keep a journal', 'Take a falconry class'];
 
// Output: 2
console.log(newYearsResolutionss.length);

const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];

console.log(objectives.length);


//////////////////
// the .push() method
//////////////////

// Output: ['item 0', 'item 1', 'item 2', 'item 3', 'item 4'];
const itemTracker = ['item 0', 'item 1', 'item 2'];
 
itemTracker.push('item 3', 'item 4');
 
console.log(itemTracker);

const chores = ['wash dishes', 'do laundry', 'take out trash'];

chores.push('clean counters', 'dust blinds');

console.log(chores);


//////////////////
// the .pop() method
//////////////////

const newItemTracker = ['item 0', 'item 1', 'item 2'];
 
const removed = newItemTracker.pop();
 
// Output: [ 'item 0', 'item 1' ]
console.log(newItemTracker); 
// Output: item 2
console.log(removed);

const choress = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];

choress.pop();

console.log(choress);


//////////////////
// more array methods
//////////////////

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();
// console.log(groceryList);

groceryList.unshift('popcorn');
// console.log(groceryList);

// console.log(groceryList.slice(1, 4));

// console.log(groceryList);

const pastaIndex = groceryList.indexOf('pasta')
console.log(pastaIndex);


//////////////////
// arrays and functions
//////////////////

const flowers = ['peony', 'daffodil', 'marigold'];
 
function addFlower(arr) {
  arr.push('lily');
}
 
addFlower(flowers);
 
console.log(flowers); // Output: ['peony', 'daffodil', 'marigold', 'lily']

const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);

console.log(concept);

const removeElement = newArr => {
  newArr.pop();
}

removeElement(concept);

console.log(concept);


//////////////////
// nested arrays
//////////////////

const nestedArr = [[1], [2, 3]];
 
console.log(nestedArr[1]); // Output: [2, 3]
console.log(nestedArr[1][0]); // Output: 2

let numberClusters = [[1, 2], [3, 4], [5, 6]];

const target = numberClusters[2][1];

console.log(target);
