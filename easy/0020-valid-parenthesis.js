/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (char == '[' || char == '{' || char == '(')
            stack.push(char); 

        else {
            if (stack.length > 0)
                var poppedChar = stack.pop();
            else
                return false;

            if ( (poppedChar == '[' && char != ']')
                 || (poppedChar == '<' && char != '>')
                || (poppedChar == '{' && char != '}')
                || (poppedChar == '(' && char != ')')
               )
               return false;
        }
    }
    return stack.length == 0;
};