//! DO NOT REMOVE 
const prompt = require('prompt-sync')({sigint: true});

/**
  Example usage to prompt a user: 
  const name = prompt('What is your name?');
  console.log(`Hey there ${name}`);

  All user input will be read as a String, so in order to treat user input as numbers, you’ll need to convert the input:
*/
const number = prompt('enter number: ');
if (number > 0) {
    console.log('positive');
} else if (number == 0) {
    console.log('zero');
} else {
    console.log('negative');
}


