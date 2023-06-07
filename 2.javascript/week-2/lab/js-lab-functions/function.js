const prompt = require("prompt-sync")({ sigint: true });
// function countByOne(num) {
//   for (i = 1; i <= num; i++) {
//     console.log(i);
//   }
// }
// countByOne(8);
// function isEven(num) {
//   if (num % 2 == 0) {
//     console.log(num * num)
//   } else {
//     console.log(`${num} is an odd number`)
//   }
// }

// isEven(15)
let name = prompt("What is your name?: ");
let list = [];
for (let i = 0; i < 3; i++) {
    list.push(prompt("enter menu item: "));
}

let concierge = (name, list) => {
    let menu = '';

    list.forEach((food) => {
        menu += `${food}`;
    });

    return `${name}, your menu today is ${list}`;
};

console.log(concierge);
