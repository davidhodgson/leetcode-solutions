/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps  = function(num) {
    let steps = 0;

    if (num == 0) {
        return 0;
    }

    while (true) {
        if (num % 2 == 0) {
            num = num / 2;
        } else {
            num = num - 1;
        }
        steps++;

        if (num == 0) {
            break;
        }
    }
    
    return steps;
};

console.log(numberOfSteps(0));