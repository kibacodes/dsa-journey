/**
 * @param {string} s
 * @return {number}
 * Leetcode 3541
 */
var maxFreqSum = function(s) {

    // store all the values with freq in map
    let map = {};
    for (let i = 0; i < s.length; i++) {
        map[s[i]] = !map[s[i]] ? 1 : ++map[s[i]];
    }

    // find the max vowel and consonant count inside the map
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let maxVowel = 0;
    let maxConsonant = 0;
    let mapKeys = Object.keys(map)

    for (let i = 0; i < mapKeys.length; i++) {
        // vowels
        if(vowels.includes(mapKeys[i])) {
            maxVowel = Math.max(maxVowel, map[mapKeys[i]])
            // if (map[mapKeys[i]] > maxVowel) {
            //     maxVowel = map[mapKeys[i]];
            // }
        }
         else {
            maxConsonant = Math.max(maxConsonant, map[mapKeys[i]])
            // if (map[mapKeys[i]] > maxConsonant) {
            //     maxConsonant = map[mapKeys[i]];
            // }
        }
    }

    return maxConsonant + maxVowel ;
};

// Time Complexity: O(n)
// Space Complexity: O(1) constant space