// import generateName from "sillyname";
// // var generateName = require('sillyname');

import {randomSuperhero} from 'superheroes' ;
let list_heroN =[];
for (let i = 0; i < 3; i++) {
    list_heroN.push(randomSuperhero())
}

// var sillyName = generateName();
// console.log(`The generate name is ${sillyName}`);
console.log(`The Hero 1 is ${list_heroN[0]}`);
console.log(`The Hero 2 is ${list_heroN[1]}`);
console.log(`The Hero 3 is ${list_heroN[2]}`);
