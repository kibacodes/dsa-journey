// Leetcode 344: Reverse String

var reversedString = function(s) {
    let len = s.length;
    let halfLen = Math.floor(len / 2);

    for (let i = 0; i < halfLen; i++) {
        // swapping s[i], s[len-1-i]
        let temp = s[i];
        s[i] = s[len - 1 - i];
        s[len - 1 - i] = temp;
    }

}





// ['h', 'e', 'l', 'l', 'o']