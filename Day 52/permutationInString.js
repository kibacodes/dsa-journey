/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    let hashS = Array(26).fill(0); //hash of Permutation(s1)
    let hashW = Array(26).fill(0);
    // hash for actual string(s2) where we check whether the permutation is there or not
    let window_length = s1.length;

    for (let i = 0; i < window_length; ++i) {
        ++hashS[s1.charCodeAt(i) - 97];
        // find and increase char index
        // then we match the hashes of perm and window of s2
        ++hashW[s2.charCodeAt(i) - 97];
    }

    let i = 0; // start of window
    let j = window_length - 1; // end point of window

    while (j < s2.length) {
        if (isHashSame(hashS, hashW)) {
            return true;
        }
        else {
            --hashW[s2.charCodeAt(i) - 97];
            ++i;
            ++j;
            ++hashW[s2.charCodeAt(j) - 97];
        }
    }
    return false;
};

var isHashSame = function (hashS, hashW) {
    for (let i = 0; i < 26; ++i) {
        if (hashS[i] !== hashW[i]) {
            return false;
        }
    }
    return true;
}