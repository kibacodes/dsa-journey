/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let i = j = 0;
    let map = {};
    let maxWS = 0;

    for (j = 0; j < s.length; ++j) {
        // is my element there in the map?
        if (map[s[j]] !== undefined && map[s[j]] >= i) {
            i = map[s[j]] + 1;
        }

        // else we populate map with the elements, then we calculate window length
        map[s[j]] = j;
        currWS = j - i + 1;
        maxWS = Math.max(maxWS, currWS);
    }

    return maxWS;
};