//
// Chris Alexman, 06/27/2022
//

// Cash Register Execise #1 Javascript problem

// Write a program in JavaScript that takes inputs 
// from the user of what they want to order and how 
// many of each item they want to order. 
// Then the "cash register" returns the total.
// Example of items the user can order:
// Pizza cost $6.50
// Drink cost $2.00


console.log('===========');
console.log('Exercise 1:');
console.log('===========');


// global variables
let total = 0.0;

// factory function, to return an item object
const itemFactory = (name, cost) => {
    return {
        name, 
        cost
    }
};

// create item objects
const pizza = itemFactory('Pizza', 6.50);
const drink = itemFactory('Drink', 2.00);

// function to buy an item, update the total
const buyItem = (name, qty) => {

    let invalidName = false;

    switch(name) {
        case 'Pizza':
            total += pizza.cost * qty;
            break;
        case 'Drink':
            total += drink.cost * qty;
            break;
        default:
            invalidName = true;
            break;
    }

    if(!invalidName) {
        return `\nYou ordered ${qty} ${name}s, the total so far: $${twoDecimals(total)}`;
    } else {
        return '\nERROR: invalid name';
    }

};

// function to format a number to 2 decimal places
const twoDecimals = num => {
    return num.toFixed(2);
};

// user input

console.log('\nType \'exit\' to exit.\n');

let userInputName;
let userInputQty;

while(userInputName != 'exit' && userInputQty != 'exit') {

    userInputName = prompt('Do you want \'Pizza\' or \'Drink\' ?');

    if(userInputName != 'exit') {
        userInputQty = prompt(`How much ${userInputName} do you want?`);

        console.log(buyItem(userInputName, userInputQty));
    }

    console.log('\n');

}

// // userInputName = 'Pizza';
// // userInputQty = 3;
// let userInputName = prompt('Do you want: \'Pizza\' or \'Drink\' ?');
// let userInputQty = prompt(`How much ${userInputName} do you want?`);

// console.log(buyItem(userInputName, userInputQty));

// // userInputName = 'Drink';
// // userInputQty = 4;
// userInputName = prompt('Do you want: \'Pizza\' or \'Drink\' ?');
// userInputQty = prompt(`How much ${userInputName} do you want?`);

// console.log(buyItem(userInputName, userInputQty));

console.log(`The overall total is: $${twoDecimals(total)}\n`);


// This is a continuation of the exercise above. 
// Your cash register program should now take in 
// cash from the user and return the change.

console.log('\n===========');
console.log('Exercise 2:');
console.log('===========');

const pay = amount => {

    if(amount < total) {
        return 'ERROR: insufficient funds';
    } else {
        sufficientFunds = true;
        return `\nYour change is: $${twoDecimals(amount)} - $${twoDecimals(total)} = $${twoDecimals(amount - total)}`;
    }

};

// user input

let sufficientFunds = false;
let userPays;

console.log(`\nYou owe: $${twoDecimals(total)}`);

while(!sufficientFunds) {

    console.log('');

    // userPays = 30.00;
    userPays = parseFloat(prompt('How much do you want to pay?'));

    console.log(pay(userPays));

}
