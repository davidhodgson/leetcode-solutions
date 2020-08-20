/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let runningSum = 0;
    let sums = [];

    for (let i = 0; i < nums.length; i++) {
        runningSum = runningSum + nums[i];
        sums.push(runningSum);
    }

    return sums;
};

console.log(runningSum([3,1,2,10,1]));