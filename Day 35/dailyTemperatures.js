/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (arr) {
    let stack = [];
    let n = arr.length;
    let ans = Array(n).fill(0);

    stack.push(n - 1);
    // line 12 is for explanation purposes only
    // ans[n-1] = 0;

    for (let i = n - 2; i >= 0; --i) {
        while (stack.length) {
            let top = stack[stack.length - 1];
            if (arr[i] >= arr[top]) {
                stack.pop();
            } else {
                ans[i] = top - i;
                break;
            }
        }
        // lines 24-27 are for explanation purposes only
        // if(!stack.length) {
        //     ans[i] = 0;
        // }
        stack.push(i);
    }

    return ans;
};