
import getRandomDay  from "./randomizer.js";
// this is the same as saying: const getRandomDay = "the default export from randomizer.js"

import{someNumber} from "./randomizer.js";
// get the specific 'someNumber' function from ./randomizer.js


console.log(getRandomDay() );

console.log(someNumber() );

// import getRandomDay, {someNumber} from "./randomizer.js";
// can be written like this