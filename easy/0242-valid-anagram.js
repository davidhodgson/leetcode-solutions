/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

   var mapS = new Map();
   var mapT = new Map();

   for (let char of s) {
        if (mapS.has(char)) {
            mapS.set(char, mapS.get(char) + 1);
        } else {
            mapS.set(char, 1);
        }
   }

   for (let char of t) {
        if (mapT.has(char)) {
            mapT.set(char, mapT.get(char) + 1);
        } else {
            mapT.set(char, 1);
        }
    }

    if (mapS.size != mapT.size) {
        return false;
    }

    for (let key of mapS.keys()) {
        if (mapS.get(key) != mapT.get(key)) {
            return false;
        }
    }
    
    return true;

};

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("a", "ab"));