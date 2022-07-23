//////////////////
// creating object literals
//////////////////

let spaceship = {}; // spaceship is an empty object

// An object literal with two key-value pairs
let spaceship1 = {
    'Fuel Type': 'diesel',
    color: 'silver'
};

// Write your fasterShip object literal below

let fasterShip = {
    'Fuel Type': 'Turbo Fuel',
    color: 'silver'
};  


//////////////////
// accessing properties
//////////////////

'hello'.length; // Returns 5

let spaceship2 = {
    homePlanet: 'Earth',
    color: 'silver'
};

spaceship2.homePlanet; // Returns 'Earth',
spaceship2.color; // Returns 'silver',
spaceship2.favoriteIcecream; // Returns undefined

let spaceship3 = {
    homePlanet: 'Earth',
    color: 'silver',
    'Fuel Type': 'Turbo Fuel',
    numCrew: 5,
    flightPath: ['Venus', 'Mars', 'Saturn']
};

// Write your code below
let crewCount = spaceship3.numCrew;
console.log(crewCount);

let planetArray = spaceship3.flightPath;
console.log(planetArray);


//////////////////
// bracket notation
//////////////////

['A', 'B', 'C'][0]; // Returns 'A'

let spaceship4 = {
    'Fuel Type': 'Turbo Fuel',
    'Active Duty': true,
    homePlanet: 'Earth',
    numCrew: 5
};

spaceship4['Active Duty'];   // Returns true
spaceship4['Fuel Type'];   // Returns  'Turbo Fuel'
spaceship4['numCrew'];   // Returns 5
spaceship4['!!!!!!!!!!!!!!!'];   // Returns undefined

let returnAnyProp = (objectName, propName) => objectName[propName];
 
returnAnyProp(spaceship, 'homePlanet'); // Returns 'Earth'

let spaceship5 = {
    'Fuel Type' : 'Turbo Fuel',
    'Active Mission' : true,
    homePlanet : 'Earth', 
    numCrew: 5
};

let propName =  'Active Mission';

// Write your code below

let isActive = spaceship5['Active Mission'];
console.log(isActive);

console.log(spaceship5.propName);


//////////////////
// property assignment
//////////////////

const spaceship6 = {type: 'shuttle'};
spaceship6 = {type: 'alien'}; // TypeError: Assignment to constant variable.
spaceship6.type = 'alien'; // Changes the value of the type property
spaceship6.speed = 'Mach 5'; // Creates a new key of 'speed' with a value of 'Mach 5'

const spaceship6 = {
    'Fuel Type': 'Turbo Fuel',
    homePlanet: 'Earth',
    mission: 'Explore the universe' 
};

delete spaceship6.mission;  // Removes the mission property

let spaceship7 = {
    'Fuel Type': 'Turbo Fuel',
    homePlanet: 'Earth',
    color: 'silver',
    'Secret Mission': 'Discover life outside of Earth.'
};

// Write your code below
spaceship7.color = 'glorious gold';

spaceship7.numEngines = 4;

delete spaceship7['Secret Mission'];

console.log(spaceship7);  


//////////////////
// methods
//////////////////

const alienShip = {
    invade: function () { 
      console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
    }
};

const alienShip1 = {
    invade () { 
      console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
    }
};

alienShip.invade(); // Prints 'Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.'

let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

let takeOffMessage = 'Spim... Borp... Glix... Blastoff!';

// Write your code below

let alienShip2 = {
  retreat () { console.log(retreatMessage); },
  takeOff () { console.log(takeOffMessage); }
};

alienShip2.retreat();
alienShip2.takeOff();


//////////////////
// nested objects
//////////////////

const spaceship8 = {
    telescope: {
       yearBuilt: 2018,
       model: '91031-XLT',
       focalLength: 2032 
    },
   crew: {
       captain: { 
           name: 'Sandra', 
           degree: 'Computer Engineering', 
           encourageTeam() { console.log('We got this!') } 
        }
   },
   engine: {
       model: 'Nimbus2000'
    },
    nanoelectronics: {
        computer: {
           terabytes: 100,
           monitors: 'HD'
        },
       'back-up': {
          battery: 'Lithium',
          terabytes: 50
        }
    }
};

spaceship8.nanoelectronics['back-up'].battery; // Returns 'Lithium'

let spaceship9 = {
    passengers: null,
    telescope: {
      yearBuilt: 2018,
      model: "91031-XLT",
      focalLength: 2032 
    },
    crew: {
      captain: { 
        name: 'Sandra', 
        degree: 'Computer Engineering', 
        encourageTeam() { console.log('We got this!') },
       'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
    },
    engine: {
      model: "Nimbus2000"
    },
    nanoelectronics: {
      computer: {
        terabytes: 100,
        monitors: "HD"
      },
      'back-up': {
        battery: "Lithium",
        terabytes: 50
      }
    }
};

let capFave = spaceship9.crew.captain['favorite foods'][0];

console.log(capFave);

spaceship9.passengers = [
    {name: 'Space Dog'},
    {name: 'Space Cat'},
    {name: 'Space Hamster'}
]

let firstPassenger = spaceship9.passengers[0];
console.log(firstPassenger);


//////////////////
// pass by reference
//////////////////

const spaceship10 = {
    homePlanet : 'Earth',
    color : 'silver'
};

let paintIt = obj => {
    obj.color = 'glorious gold'
};

paintIt(spaceship10);

spaceship10.color // Returns 'glorious gold'

let spaceship11 = {
    homePlanet : 'Earth',
    color : 'red'
};
let tryReassignment = obj => {
    obj = {
        identified : false, 
        'transport type' : 'flying'
    }
    console.log(obj) // Prints {'identified': false, 'transport type': 'flying'}
};

tryReassignment(spaceship11) // The attempt at reassignment does not work.
spaceship11 // Still returns {homePlanet : 'Earth', color : 'red'};

spaceship11 = {
    identified : false, 
    'transport type': 'flying'
}; // Regular reassignment still works.

let spaceship12 = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth'
};

// Write your code below
const greenEnergy = obj => {
obj['Fuel Type'] = 'avocado oil';

console.log(obj);
}

const remotelyDisable = obj => {
obj.disabled = true;

console.log(obj);
}

greenEnergy(spaceship12);
remotelyDisable(spaceship12);  


//////////////////
// looping through objects
//////////////////

let spaceship13 = {
    crew: {
        captain: { 
            name: 'Lily', 
            degree: 'Computer Engineering', 
            cheerTeam() { console.log('You got this!') } 
        },
        'chief officer': { 
            name: 'Dan', 
            degree: 'Aerospace Engineering', 
            agree() { console.log('I agree, captain!') } 
        },
        medic: { 
            name: 'Clementine', 
            degree: 'Physics', 
            announce() { console.log(`Jets on!`) }
        },
        translator: {
            name: 'Shauna', 
            degree: 'Conservation Science', 
            powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 

// for...in
for (let crewMember in spaceship.crew) {
    console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
}

let spaceship14 = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 

// Write your code below
for (let crewMember in spaceship14.crew) {
  // console.log(`${crewMember}: ${spaceship14.crew[crewMember].name}`);
  console.log(`${spaceship14.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`);
}


//////////////////
// the this keyword
//////////////////

const goat = {
    dietType: 'herbivore',
    makeSound() {
        console.log('baaa');
    }
};

goat.makeSound(); // Prints baaa

const goat1 = {
    dietType: 'herbivore',
    makeSound() {
        console.log('baaa');
    },
    diet() {
        console.log(dietType);
    }
};
goat1.diet(); 
// Output will be "ReferenceError: dietType is not defined"

const goat2 = {
    dietType: 'herbivore',
    makeSound() {
        console.log('baaa');
    },
    diet() {
        console.log(this.dietType);
    }
};

goat2.diet(); 
// Output: herbivore

const robot = {
    model: '1E78V2',
    energyLevel: 100,
    provideInfo() {
        return `I am ${this.model} and my current energy level is ${this.energyLevel}`;
    }
  };

console.log(robot.provideInfo());  


//////////////////
// arrow functions and this
//////////////////

const goat3 = {
    dietType: 'herbivore',
    makeSound() {
        console.log('baaa');
    },
    diet: () => {
        console.log(this.dietType);
    }
};

goat3.diet(); // Prints undefined

const robot1 = {
    energyLevel: 100,
    checkEnergy() {
        console.log(`Energy is currently at ${this.energyLevel}%.`)
    }
}

robot.checkEnergy();  


//////////////////
// privacy
//////////////////

const bankAccount = {
    _amount: 1000
}

bankAccount._amount = 1000000;

const robot2 = {
    _energyLevel: 100,
    recharge(){
        this._energyLevel += 30;
        console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
    }
};

robot2._energyLevel = 'high';

robot2.recharge();


//////////////////
// getters
//////////////////

const person = {
    _firstName: 'John',
    _lastName: 'Doe',
    get fullName() {
        if (this._firstName && this._lastName){
            return `${this._firstName} ${this._lastName}`;
        } else {
            return 'Missing a first name or a last name.';
        }
    }
}

// To call the getter method: 
person.fullName; // 'John Doe'

const robot5 = {
    _model: '1E78V2',
    _energyLevel: 100,
  
    get energyLevel() {
        if(typeof this._energyLevel === "number") {
            return `My current energy level is ${this._energyLevel}`;
        } else {
            return 'System malfunction: cannot retrieve energy level';
        }
    }
};

console.log(robot5.energyLevel);


//////////////////
// setters
//////////////////

const person1 = {
    _age: 37,
    set age(newAge){
        if (typeof newAge === 'number'){
            this._age = newAge;
        } else {
            console.log('You must assign a number to age');
        }
    }
};

person1.age = 40;
console.log(person1._age); // Logs: 40
person1.age = '40'; // Logs: You must assign a number to age

person1._age = 'forty-five'
console.log(person1._age); // Prints forty-five

const robot6 = {

    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors(){
        if(typeof this._numOfSensors === 'number'){
            return this._numOfSensors;
        } else {
            return 'Sensors are currently down.'
        }
    },
  
    set numOfSensors(num) {
        if(typeof num === 'number' && num >= 0) {
            this._numOfSensors = num;
        } else {
            console.log('Pass in a number that is greater than or equal to 0');
        }
    }
    
};

robot6.numOfSensors = 100;

console.log(robot6.numOfSensors);  


//////////////////
// factory functions
//////////////////

const monsterFactory = (name, age, energySource, catchPhrase) => {
    return { 
        name: name,
        age: age, 
        energySource: energySource,
        scare() {
        console.log(catchPhrase);
        } 
    }
};

const ghost = monsterFactory('Ghouly', 251, 'ectoplasm', 'BOO!');
ghost.scare(); // 'BOO!'

const robotFactory = (model, mobile) => {
    return {
        model: model,
        mobile: mobile,
        beep() {
        console.log('Beep Boop');
        }
    }
};

const tinCan = robotFactory('P-500', true);

console.log(`${tinCan.model}, ${tinCan.mobile}`);
tinCan.beep();  


//////////////////
// property value shorthand
//////////////////

const monsterFactory1 = (name, age) => {
    return { 
        name: name,
        age: age
    }
};

const monsterFactory2 = (name, age) => {
    return { 
        name,
        age 
    }
};

function robotFactory(model, mobile){
    return {
        model,
        mobile,
        beep() {
            console.log('Beep Boop');
        }
    }
}

// To check that the property value shorthand technique worked:
const newRobot = robotFactory('P-501', false)
console.log(newRobot.model)
console.log(newRobot.mobile)  


//////////////////
// destructured assignment
//////////////////

const vampire = {
    name: 'Dracula',
    residence: 'Transylvania',
    preferences: {
        day: 'stay inside',
        night: 'satisfy appetite'
    }
};

const residence1 = vampire.residence; 
console.log(residence1); // Prints 'Transylvania'

const { residence2 } = vampire; 
console.log(residence2); // Prints 'Transylvania'

const { day } = vampire.preferences; 
console.log(day); // Prints 'stay inside'

const robot7 = {
    model: '1E78V2',
    energyLevel: 100,
    functionality: {
        beep() {
            console.log('Beep Boop');
        },
        fireLaser() {
            console.log('Pew Pew');
        },
    }
};

const { functionality } = robot7;

functionality.beep();  


//////////////////
// built-in objects methods
//////////////////

const robot8 = {
    model: 'SAL-1000',
    mobile: true,
    sentient: false,
    armor: 'Steel-plated',
    energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot8);

console.log(robotKeys);

// Declare robotEntries below this line:
const robotEntries = Object.entries(robot8);

console.log(robotEntries);

// Declare newRobot below this line:
const newRobot1 = Object.assign({ laserBlaster: true, voiceRecognition: true }, robot8);

console.log(newRobot);
