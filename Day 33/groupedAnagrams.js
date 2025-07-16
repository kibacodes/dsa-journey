/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = {};

    for (let i = 0; i < strs.length; ++i) {
        // create a key here
        let freqArr = Array(26).fill(0);
        let s = strs[i];
        // index and alphabet mapping inside freqArr
        for (let j = 0; j < s.length; ++j) {
            let index = s[j].charCodeAt()-'a'.charCodeAt();
            ++freqArr[index];
        }
        let key = "";
        for(let k=0; k<26; k++) {
            key = key + String.fromCharCode(k) + freqArr[k];
        }

        // fill the map

        if (!map[key]) {
            map[key] = [s];
        } else {
            map[key].push(s);
        }
    }

    return [...Object.values(map)];
};

// [eat, ate, tea, nat, tan, bat]