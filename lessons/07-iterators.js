//////////////////
// functions as data
//////////////////

const announceThatIAmDoingImportantWork = () => {
    console.log("I’m doing very important work!");
};

const busy = announceThatIAmDoingImportantWork;
 
busy(); // This function call barely takes any space!

const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for(let i = 1; i <= 1000000; i++) {
        if ( (2 + 2) != 4) {
        console.log('Something has gone very wrong :( ');
        }
    }
};

// Write your code below

const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;

isTwoPlusTwo();

console.log(isTwoPlusTwo.name);


//////////////////
// functions as parameters
//////////////////

const higherOrderFunc = param => {
    param();
    return `I just invoked ${param.name} as a callback function!`
}

const anotherFunc = () => {
    return 'I\'m being invoked by the higher-order function!';
}

higherOrderFunc(anotherFunc);

higherOrderFunc(() => {
    for (let i = 0; i <= 10; i++){
        console.log(i);
    }
});

const addTwo = num => {
    return num + 2;
}

const checkConsistentOutput = (func, val) => {
    let checkA = val + 2;
    let checkB = func(val);

    if(checkA === checkB) {
        return checkB;
    } else {
        console.log('inconsistent results');
    }
}

console.log(checkConsistentOutput(addTwo, 4));  


//////////////////
// the .forEach() method
//////////////////

groceries.forEach(groceryItem => console.log(groceryItem));

function printGrocery(element){
    console.log(element);
}

groceries.forEach(printGrocery);

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

const outputFruit = (item) => {
  console.log(`I want to eat a ${item}`);
}

fruits.forEach(outputFruit);


//////////////////
// the .map() method
//////////////////

const numbers = [1, 2, 3, 4, 5]; 
 
const bigNumbers = numbers.map(number => {
    return number * 10;
});

console.log(numbers); // Output: [1, 2, 3, 4, 5]
console.log(bigNumbers); // Output: [10, 20, 30, 40, 50]

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(animal => {
  return animal[0];
})

console.log(secretMessage.join(''));

const bigNumberss = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumberss.map(number => {
  return number / 100;
})

console.log(bigNumberss);
console.log(smallNumbers);


//////////////////
// the .filter() method
//////////////////

const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 
 
const shortWords = words.filter(word => {
    return word.length < 6;
});

console.log(words); // Output: ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 
console.log(shortWords); // Output: ['chair', 'music', 'brick', 'pen', 'door']

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumberss = randomNumbers.filter(num => {
  return num < 250;
});

console.log(smallNumberss);

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(word => {
  return word.length > 7;
});

console.log(longFavoriteWords);


//////////////////
// the .findIndex() method
//////////////////

const jumbledNums = [123, 25, 78, 5, 9]; 
 
const lessThanTen = jumbledNums.findIndex(num => {
    return num < 10;
});

console.log(lessThanTen); // Output: 3

console.log(jumbledNums[3]); // Output: 5

const greaterThan1000 = jumbledNums.findIndex(num => {
    return num > 1000;
});

console.log(greaterThan1000); // Output: -1

const animalss = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animalss.findIndex(animal => {
  return animal === 'elephant';
});

const startsWithS = animalss.findIndex(animal => {
  return animal[0] === 's';
});

// console.log(foundAnimal);
console.log(startsWithS);


//////////////////
// the .reduce() method
//////////////////

const numbersss = [1, 2, 4, 10];
 
const summedNumss = numbersss.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
})
 
console.log(summedNumss) // Output: 17

const numberss = [1, 2, 4, 10];
 
const summedNumsss = numberss.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, 100)  // <- Second argument for .reduce()
 
console.log(summedNumsss); // Output: 117

const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator:  ', accumulator);
  console.log('The value of currentValue: ', currentValue)
  return accumulator + currentValue;
}, 10);

console.log(newSum);


//////////////////
// iteration documentation
//////////////////

const wordss = ["unique", "uncanny", "pique", "oxymoron", "guise"];

// Something is missing in the method call below

console.log(
  wordss.some((word) => {
    return word.length < 6;
  })
);

// Use filter to create a new array
const interestingWords = wordss.filter((word) => {
  return word.length > 5;
});

console.log(interestingWords);

// Make sure to uncomment the code below and fix the incorrect code before running it

console.log(
  interestingWords.every((word) => {
    return word.length > 5;
  })
);


//////////////////
// chose the right iterator
//////////////////

const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.every(num => num < 0);
