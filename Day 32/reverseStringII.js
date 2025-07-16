/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {

    s = s.split(""); // split and join have to be done since strings are immutable

    // Reverse k chars of string after 2k characters logic
    // jumping 2*k times
    for (let x = 0; x < s.length; x = x + (2 * k)) {
        // reverse first k elements starting from x
        let n = k;
        let mid = Math.floor(n / 2);

        for (let i = 0; i < mid; ++i) {
            let temp = s[x + i]; // swap ( x + i, x + k-i-1) since these values also need to jump by 2k
            s[x + i] = s[x + n - i - 1];
            s[x + n - i - 1] = temp;
        }
    }
    return s.join("");
};

// Time Complexity - O(n)
// Space Complexity - O(n) - because you are creating an array.
// Space Complexity - depending on language it can be O(1) if you are NOT converting the string to array.