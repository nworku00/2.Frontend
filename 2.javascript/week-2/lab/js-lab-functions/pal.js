// isPalindrome = check => {
//     let arrayCheck = check.split('');
//     let reverseCheck = arrayCheck.reverse()
//     let stringCheck = reverseCheck.join('')
//     return (check == stringCheck) ? true : false
// }
// console.log(isPalindrome('do geese see god'))
function palindrome(str) {
    var lowRegStr = str.toLowerCase()
    var reverseStr = lowRegStr.split("").reverse().join("");
    return reverseStr === lowRegStr;
}
console.log(palindrome("B eEe B"));
