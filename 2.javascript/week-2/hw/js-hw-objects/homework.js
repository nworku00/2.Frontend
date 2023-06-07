
let word = 'banana'
letterHistogram = word.split('').{}reduce((a, b) => {
    a[b] = a[b] ? a[b] + 1 : 1; return a
}, );
console.log(letterHistogram)
// let sentence = 'hey momma hey daddy'
// let wordHistogram = sentence.split(' ').reduce((a, b) => {
//     a[b] = a[b] ? a[b] + 1 : 1; return a
// }, {})
// console.log (wordHistogram)
// function letterHistogram(word) {
//     let histogram = {};
//     let wordArray = word.split('')
//     wordArray.forEach(letter => {
//         if (!histogram[letter]) {
//             histogram[letter] = 1
//         } else {
//             histogram[letter]+=1
//         }
//     })
//     return histogram;
// }
// console.log(letterHistogram('banana'))
// function sentenceHistogram(sentence) {
//     let histogram = {};
//     let sentenceArray = sentence.split(' ')
//     sentenceArray.forEach(word => {
//         if (!histogram[word]) {
//             histogram[word] = 1
//         } else {
//             histogram[word]+=1
//         }
//     })
//     return histogram;
// }
// console.log(sentenceHistogram('banana is banana'))