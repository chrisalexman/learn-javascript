//////////////////
// blocks and scope
//////////////////

const logSkyColor = () => {
    let color = 'blue'; 
    console.log(color); // blue 
}

const city = 'New York City';

const logCitySkyline = () => {
  let skyscraper = 'Empire State Building';
  return 'The stars over the ' + skyscraper + ' in ' + city;
}

console.log(logCitySkyline());


//////////////////
// global scope
//////////////////

const color = 'blue';
 
const returnSkyColor = () => {
  return color; // blue 
};
 
console.log(returnSkyColor()); // blue

const satellite = 'The Moon';
const galaxy = 'The Milky Way';
const stars = 'North Star';

const callMyNightSky = () => {
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}

console.log(callMyNightSky());


//////////////////
// block scope
//////////////////

const logSkyColorr = () => {
    let color = 'blue'; 
    console.log(color); // blue 
};

logSkyColorr(); // blue 
console.log(color); // ReferenceError

const logVisibleLightWaves = () => {
    const lightWaves = 'Moonlight';
    console.log(lightWaves);
}

logVisibleLightWaves();

console.log(lightWaves);  


//////////////////
// scope pollution
//////////////////

let num = 50;
 
const logNum = () => {
  num = 100; // Take note of this line of code
  console.log(num);
};
 
logNum(); // Prints 100
console.log(num); // Prints 100

const satellitee = 'The Moon';
const galaxyy = 'The Milky Way';
let starss = 'North Star';

const callMyNightSkyy = () => {
  stars = 'Sirius';
	return 'Night Sky: ' + satellitee + ', ' + starss + ', ' + galaxyy;
};

console.log(callMyNightSkyy());

console.log(stars);


//////////////////
// practice good scoping
//////////////////

const logSkyColorrr = () => {
    const dusk = true;
    let color = 'blue'; 
    if (dusk) {
        let color = 'pink';
        console.log(color); // pink
    }
    console.log(color); // blue 
};

console.log(color); // ReferenceError

const logVisibleLightWavess = () => {
    let lightWaves = 'Moonlight';
    let region = 'The Arctic';
    // Add if statement here:
    if(region === 'The Arctic') {
        let lightWaves = 'Northern Lights';
        console.log(lightWaves);
    }

    console.log(lightWaves);
};

logVisibleLightWavess();
