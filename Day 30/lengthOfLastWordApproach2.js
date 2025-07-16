const lengthOfLastWord = (s) => {
    let charCount = 0;
    let n = s.length - 1;

    while(n >= 0) {
        if (s[n] !== " ") {
            ++charCount;
        } else if (charCount > 0) {
            break;
        }
        --n;
    }

    return charCount;
};

let result = lengthOfLastWord(" hello world  ");
console.log(result);