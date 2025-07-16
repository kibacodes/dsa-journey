/**
 * @param {string} s
 * @return {number}
 */

// Time Complexity = O(n); Space Complexity = O(1)
var lengthOfLastWord = function (s) {
    // trim all the spaces at the end
    let n = s.length - 1; // start from last character

    while (n >= 0) {
        if (s[n] !== " ") break;
        --n;
    }

    // n is the point where my last word starts

    // count characters till you reach space
    let count = 0;
    while (n >= 0) {
        if (s[n] === " ") break;
        --n;
        ++count;
    }

    return count;
};

let result = lengthOfLastWord(" hello world  ");
console.log(result);