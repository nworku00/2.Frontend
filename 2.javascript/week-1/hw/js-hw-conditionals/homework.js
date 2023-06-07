const prompt = require('prompt-sync')({ sigint: true });

// let dayOfWeek = prompt('enter day of week: ')
// let sanitizedDay = dayOfWeek.toLowerCase();
// if (sanitizedDay == 'monday' || sanitizedDay == 'tuesday' || sanitizedDay == 'wednesday' || sanitizedDay == 'thursday' || sanitizedDay == 'friday') {
//     console.log('go to work!')
// } else if (sanitizedDay == 'saturday' || sanitizedDay == 'sunday') {
//     console.log('sleep in!')
// } else {
//     console.log('enter valid day!')
// }

// let dayOfWeek = prompt('enter day of week: ')
// switch (dayOfWeek) {
//     case 'mon':
//     case 'tues':
//         console.log('go to work!');
//         break;
//     case 'sat':
//     case 'sun':
//         console.log('go to sleep!');
//         break;
//     default:
//         console.log('invalid!');
// }
let day = prompt('enter day of week: ');
let dayOfWeek = day.toLowerCase
let rest = dayOfWeek == 'mon' || 'tues' || 'wed' || 'thurs' ? 'work' : 'rest'
console.log(`${rest}`)