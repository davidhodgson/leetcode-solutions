/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = new Map();

    let i = 0;

    if (s.length < 2) {
        return s.length;
    }

    let maxLength = 1;
    map.set(s[i], 0);

    for (let j = 1; j < s.length; j++) {
        var ch = s[j];

        if (map.has(ch)) {
            // it's possible that i can be past where the last known char was; we don't want to have i go backwards
            i = Math.max(map.get(ch) + 1, i);
        }

        map.set(ch, j);
        maxLength = Math.max(maxLength, j - i + 1);
    } 
    
    return maxLength;

};

console.log(lengthOfLongestSubstring('')); // 0
console.log(lengthOfLongestSubstring('a')); // 1
console.log(lengthOfLongestSubstring('aaa')); // 1
console.log(lengthOfLongestSubstring('abcabcbb')); // 3
console.log(lengthOfLongestSubstring('pwwkew')); // 3
console.log(lengthOfLongestSubstring('dvdf')); // 3
console.log(lengthOfLongestSubstring('tmmzuxt')); // 5