// function add(x, y) {
//     return x + y;
// }
// rest operator converts items into an array
// function addAll(...numbers) {
//     let sum = 0
//     let i = 0
    // const sumAll = numbers.reduce((a, b) =>
    //     a + b, i
    // )
    // console.log(sumAll)
//     numbers.forEach(number => {
//     })
//         sum += number
//     console.log(sum)
// }
// addAll(1, 2, 3, 4)
// let wTable = ['kevin', 'jesse', 'giovanny']
// let cTable = ['nati', 'rodrigo']
// let fRow = [...wTable, ...cTable, 'ian']
// spread operator separates array into its strings

mergeLyrics = (lyric1, lyric2) => {
    let mergedLyrics = [...lyric1, ...lyric2]
    let stringLyrics = ``
    mergedLyrics.forEach(lyric => stringLyrics += `${lyric} `)
    console.log(stringLyrics)
}
mergeLyrics(['me and you'], ['and yo daddy'])