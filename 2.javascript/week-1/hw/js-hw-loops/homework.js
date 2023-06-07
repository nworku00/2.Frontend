//! DO NOT REMOVE 
const prompt = require('prompt-sync')({sigint: true});

/**
  Example usage to prompt a user: 
  const name = prompt('What is your name?');
  console.log(`Hey there ${name}`);

  All user input will be read as a String, so in order to treat user input as numbers, you’ll need to convert the input:
*/

let num1 = prompt('start from: ')
let num2 = prompt('end on: ')
i = num1
while (i <= num2) {
    console.log(i);
    i++;
}
// let i = 20
// while (i < 101) {
//     console.log(i);
//     i += 2;
// }

// let i = 1
// while (i < 16) {
//     console.log(i);
//     i += 2;
// }

// for (let i = 0; i < 5; i++) {
//     console.log('*****')
// }

// let dimension = prompt('enter width: ')