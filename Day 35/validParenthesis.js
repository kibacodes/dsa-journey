/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {

    let stack = [];

    // key is opening bracket and value is closing bracket
    let map = {
        "[": "]",
        "{": "}",
        "(": ")",
    };

    for (let i = 0; i < s.length; ++i) {
        // if (s[i] === "{" || s[i] === "[" || s[i] === "(")
        if (map[s[i]]) { // if s[i] exists in map, push it in the stack
            stack.push(s[i]);
        } else {
            let top = stack.pop(); // LIFO ie stack.pop() pops off the element at top therefore we store it in top.
            // if (!top || (top === "[" && s[i] !== "]") || (top === "{" && s[i] !== "}") || (top === "(" && s[i] !== ")"))
            if (!top || s[i] !== map[top]) { 
                // if my stack is empty or top of stack does not match s[i]
                // or s[i] does not match the value of top which is inside the map object.
                return false;
            }
        }
    }

    return stack.length === 0; // if stack is empty, that means we got valid parenthesis
};