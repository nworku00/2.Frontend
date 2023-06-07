let numbers = [-3, -2, -1, 0, 1, 2, 3];
let showPositives = numbers.forEach(number => {
    return number > 0 ? console.log(number) : ''
})
let onlyPositives = numbers.filter(number => number > 0)
console.log(onlyPositives)

let findLong = phrase => {
    let wordsArray = phrase.split(' ');
    return wordsArray.reduce((word, nextWord) => {
        return word.length > nextWord.length ? word : nextWord;
    });
};
console.log(findLong('hey there player'))

let words = ['hey', 'there', 'player']
let wordsArray = words.split(' ')
let longestWord = wordsArray.reduce((word, current) => {
    return word.length > current.length ? word : current
})
console.log(longestWord())
let vWords = words.join('')
countVowels = str => {
    let vowelsCount = 0
    const vowels = ['a', 'e', 'i', 'o', 'u']
    for (let char of str) {
        if (vowels.includes(char)) {
            vowelsCount++
        }
    }
    return vowelsCount
}
console.log()