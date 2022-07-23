//////////////////
// function declarations
//////////////////

greetWorld(); // Output: Hello, World!
 
function greetWorld() {
  console.log('Hello, World!');
}

function getReminder() {
  console.log('Water the plants.');
}

function greetInSpanish() {
  console.log('Buenas Tardes.');
}

getReminder();
greetInSpanish();  


//////////////////
// call a function
//////////////////

function sayThanks() {
  console.log('Thank you for your purchase! We appreciate your business.');
}

sayThanks();
sayThanks();
sayThanks();


//////////////////
// parameters and arguments
//////////////////

function sayThanks(name) {
  console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
}

sayThanks('Jeff');


//////////////////
// default parameters
//////////////////

function greeting (name = 'stranger') {
  console.log(`Hello, ${name}!`)
}

greeting('Nick') // Output: Hello, Nick!
greeting() // Output: Hello, stranger!

function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs') {
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}

makeShoppingList();


//////////////////
// return
//////////////////

function rectangleArea(width, height) {
  let area = width * height;
}
console.log(rectangleArea(5, 7)) // Prints undefined

function rectangleArea(width, height) {
    if (width < 0 || height < 0) {
        return 'You need positive integers to calculate area!';
    }
        return width * height;
}

function monitorCount(rows, columns) {
    return rows * columns;
}

const numOfMonitors = monitorCount(5, 4);

console.log(numOfMonitors);


//////////////////
// helper functions
//////////////////

function multiplyByNineFifths(number) {
    return number * (9/5);
};

function getFahrenheit(celsius) {
    return multiplyByNineFifths(celsius) + 32;
};

getFahrenheit(15); // Returns 59

function monitorCount(rows, columns) {
    return rows * columns;
}

function costOfMonitors(rows, columns) {
    return monitorCount(rows, columns) * 200;
}

const totalCost = costOfMonitors(5, 4);

console.log(totalCost);  


//////////////////
// function expressions
//////////////////

const plantNeedsWater = function (day) {
    if (day === "Wednesday") {
        return true;
    } else {
        return false;
    }
};

console.log(plantNeedsWater('Tuesday'));  


//////////////////
// arrow functions
//////////////////

const rectangleArea = (width, height) => {
    let area = width * height;
    return area;
};

const plantNeedsWaterr = (day) => {
    if (day === 'Wednesday') {
        return true;
    } else {
        return false;
    }
};

console.log(plantNeedsWater('Tuesday'));


//////////////////
// concise body arrow functions
//////////////////

const squareNum = (num) => {
    return num * num;
};

const squareNumber = num => num * num;

const plantNeedsWaterrr = day => day === 'Wednesday' ? true : false;

console.log(plantNeedsWater('Wednesday'));
