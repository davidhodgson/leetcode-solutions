/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var str = '';
    for (var char of s) {
        if (isAlphaNumeric(char)) {
            str += char.toLowerCase();
        }
    }

    let reverse = str.split('').reverse().join('');

    console.log(str);
    console.log(reverse);
    return str === reverse;
};

function isAlphaNumeric(char) {
    return (
        (char >= 'a' && char <= 'z') ||
        (char >= 'A' && char <= 'Z') ||
        (char >= '0' && char <= '9')
    )
}

// console.log(isPalindrome("ab_a"));
console.log(isPalindrome("A man, a plan, a canal: Panama"))