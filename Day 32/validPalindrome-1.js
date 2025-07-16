// Approach 1

/**
 * @param {string} s
 * @return {boolean}
 * 
 * Time Complexity = O(n)
 * Space Complexity = O(n)
 */
var isPalindrome = function (s) {

    // Filtered value
    s = s.toLowerCase();
    let filteredString = "";
    let rev = "";
    for (let i = 0; i < s.length; ++i) {
        if (s[i].match(/[a-z0-9]/i)) { // regex expression to remove alphanumeric chars
            // use the other one if regex does not come up my head
// s[i].charCodeAt() >= "a".charCodeAt() && s[i].charCodeAt() <= "z".charCodeAt() || s[i].charCodeAt() >= "0".charCodeAt() && s[i].charCodeAt() <= "9".charCodeAt()
            filteredString = filteredString + s[i]; 
            // adding str chars on the right hand side
            rev = s[i] + rev;
            // adding str chars on the left hand side
        }
    }

    return filteredString === rev;
};