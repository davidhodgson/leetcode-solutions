/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {

    let s = new Set(nums);
    
    if (s.size < nums.length)
        return true;
    return false;
}


// overly complicated:

/*
var containsDuplicate = function(nums) {
    
    let map = {};

    for (var num of nums) {
        map[num] = map[num] ? map[num] + 1 : 1;
    }

    for (var key of Object.keys(map)) {
        if (map[key] > 1) {
            return true;
        }
    }

    return false;
};
*/

console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));
console.log(containsDuplicate([[1,2,3,4]]));