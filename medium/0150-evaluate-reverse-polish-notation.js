/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    
    let stack = [];
    for (let token of tokens) {

        if (token == '+') {
            let right = stack.pop();
            let left = stack.pop();
            stack.push(right + left);
        } else if (token == '-') {
            let left = stack.pop();
            let right = stack.pop();
            stack.push(right - left);
        } else if (token == '*') {
            stack.push(stack.pop() * stack.pop());
        } else if (token == '/') {
            let a  = stack.pop();
            let b = stack.pop();
            stack.push(Math.trunc(b / a));
        } else {
            stack.push(parseInt(token));
        }
    }
    return stack.pop();

};

console.log(evalRPN(["2","1","+","3","*"]));
console.log(evalRPN(["4","13","5","/","+"]));