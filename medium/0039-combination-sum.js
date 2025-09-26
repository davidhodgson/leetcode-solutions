/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    
    let result = [];

    function dfs(index, current, total) {
        if (total == target) {
            result.push([...current]);
            return;
        }

        if (index >= candidates.length || total > target) {
            return;
        }

        // include the candidate, keep the index the same
        current.push(candidates[index]);
        dfs(index, current, total + candidates[index]);

        // exclude the candidate in the decision tree from here on, bump up the index
        current.pop();
        dfs(index+1, current, total);
    }

    dfs(0, [], 0);
    return result;

};

let result = combinationSum([2, 3, 6, 7], 7);

for (let i = 0; i < result.length; i++) {
    console.log(result[i]);
}

result = combinationSum([2, 3, 5], 8);

for (let i = 0; i < result.length; i++) {
    console.log(result[i]);
}