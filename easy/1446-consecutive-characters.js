/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
    let currentChar = s[0];
    let currentPower = 1;
    let maxPower = 1;
    for (let i = 1; i < s.length; i++) {
        let nextChar = s[i];

        if (currentChar == nextChar) {
            currentPower++;
            maxPower = Math.max(maxPower, currentPower);
        } else {
            currentChar = nextChar;
            maxPower = Math.max(maxPower, currentPower);
            currentPower = 1;
        }
    }

    return maxPower;
};

// console.log(maxPower("leetcode"))
// console.log(maxPower("abbcccddddeeeeedcba"));
// console.log(maxPower("tourist"));
// console.log(maxPower("j"));
console.log(maxPower("cc"));