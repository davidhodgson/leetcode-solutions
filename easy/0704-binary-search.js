/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  
    let startIndex = 0;
    let endIndex = nums.length;

    while (startIndex <= endIndex) {
        let middleIndex = Math.floor((startIndex + endIndex) / 2);
        let median = nums[middleIndex];

        if (median == target) {
            return middleIndex;
        } else if (median < target) {
            startIndex = middleIndex + 1;
        } else {
            endIndex = middleIndex - 1;
        }
    }

    return -1;
};

// console.log(search([-1,0,3,5,9,12], 9));

// console.log(search([-1,0,3,5,9,12], 2));