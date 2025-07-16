/**
 * @param {string} s
 * @return {string}
 * with stacks and without stacks approach
 * comment out level and replace it with stack
 */
var removeOuterParentheses = function (s) {
    // let stack = [];
    let level = -1;
    let ans = "";
    for (let i = 0; i < s.length; ++i) {
        if (s[i] === "(") {
            //stack.push(s[i]);
            level++;
            ans += (level ? s[i] : "");
        } else {
            ans += (level ? s[i] : "");
            // stack.pop();
            --level;
        }
    }

    return ans;
};