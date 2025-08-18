/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    
    var map = {};

    for (let num of nums) {
        map[num] = (map[num] || 0) + 1;
    }

    let arr = [];
    for (let key of Object.keys(map)) {
        let value = map[key];
        arr.push([key, value]);
    }

    // sort by count
    arr.sort( (a, b) => { return b[1] - a[1]});

    arr.forEach( (ele) => console.log(ele[0], ele[1]));

    return arr.slice(0, k).map( ele => parseInt(ele[0]));

};

console.log(topKFrequent([1,1,1,2,2,2, 2, 3, 3], 2));