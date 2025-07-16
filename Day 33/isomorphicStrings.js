/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {

    let mapStoT = {};       
    let mapTtoS = {};     

    for (let i = 0; i < s.length; i++) {
        // push values inside the map
        if (!mapStoT[s[i]] && !mapTtoS[t[i]]) {
            mapStoT[s[i]] = t[i]; // mapping char at s to char at t
            mapTtoS[t[i]] = s[i]; // mapping char at t to char at s
        }
        else if (mapTtoS[t[i]] !== s[i] || mapStoT[s[i]] !== t[i]) {
            return false;
            // if chars of strings in either map are already mapped
            // and they are being mapped to another char, then they
            // are not isomorphic strings.
        }
    }

    return true;
};

// egg, add
// foo, bar