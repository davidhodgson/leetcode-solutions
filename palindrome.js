/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }
    var str = x.toString();
    return isPalindromeStr(str);
}


/**
 * @param {string} x
 * @return {boolean}
 */
function isPalindromeStr(s) {
    if (s.length == 0 || s.length == 1) {
        return true;
    } else if (s.length == 2) {
        return s[0] == s[1];
    }
    else {
        if (s[0] === s[s.length - 1]) {
            var substring = s.substring(1, s.length - 1);
            return isPalindromeStr(substring);
        }
        return false;
    }
}

console.log(isPalindrome(12345));
console.log(isPalindrome(12321));
console.log(isPalindrome(-8));