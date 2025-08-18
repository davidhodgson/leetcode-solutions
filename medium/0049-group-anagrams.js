/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    let map = {};
    for(let s of strs) {
        let sortedStr = s.split("").sort().join("");
        console.log(sortedStr);

        if (!map[sortedStr]) {
            map[sortedStr] = [];
        }

        map[sortedStr].push(s);
        
    }

    let values = Object.values(map);
    
    /*for (let v of values) {
        console.log(v);
    }
        */

    return values;
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));

// aet => eat, tea
// ant => tan, nat