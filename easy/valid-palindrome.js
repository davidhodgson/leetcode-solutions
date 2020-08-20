/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const regex = /\W/gi;
    let filtered = s.replace(regex, '').replace('_', '');
    let toLower = filtered.toLowerCase();
    
    let reversed = toLower.split('').reverse().join('');
    return toLower === reversed; 
};

console.log(isPalindrome("ab_a"));