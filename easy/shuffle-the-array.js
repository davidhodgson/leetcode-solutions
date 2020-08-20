/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
  let answer = [];

  for (let i = 0; i < n; i++) {
      let first = nums[i];
      let second = nums[i+n];
      answer.push(first);
      answer.push(second);
  }  
  return answer;

};

console.log(shuffle([2,5,1,3,4,7], 3));